const http = require("http");
const fs = require("fs");

const typesMIME = {
    "html": "text/html",
    "css": "text/css",
    "js": "text/javascript",
    "png": "image/png",
    "jpeg": "image/jpeg",
    "jpg": "image/jpg",
    "ico": "image/x-icon",
    "ogg": "audio/ogg"
};

const pageList = {
    "/":"./public/index.html",
    "/contact":"./public/assets/html/contact.html",
    "/menu":"./public/assets/html/menu.html",
    "/photos":"./public/assets/html/photos.html",
    "/photos2":"./public/assets/html/photos2.html",
    "/photos3":"./public/assets/html/photos3.html",
    "/restaurant":"./public/assets/html/restaurant.html",
}

const serveur = http.createServer((requête, réponse) => {
    // Déterminer le type MIME du contenu à charger d'après une éventuelle extension dans l'URI
    const uri = requête.url;
    console.log(uri)
    if (uri.startsWith("/public/")) {
        const indexDeLExtension = uri.lastIndexOf(".") + 1;
        if (indexDeLExtension) {
            const extension = uri.substring(indexDeLExtension);
			if (typesMIME[extension]) {
                fs.readFile("." + uri, (erreur, contenu) => {
                    réponse.writeHead(200, {"Content-Type": typesMIME[extension]});
                    réponse.end(contenu);
                });
            }
        }
    }
    // Si pas d'extension, c'est une page => charger la page
    else try {
        fs.readFile(pageList[uri], "UTF-8", (erreur, contenu) => {
            réponse.writeHead(200, {"Content-Type": "text/html"});
            réponse.end(contenu);
        });
    } catch(e) {
        fs.readFile("./public/assets/html/404.html", "UTF-8", (erreur, contenu) => {
            réponse.writeHead(404, {"Content-Type": "text/html"});
            réponse.end(contenu);
        });
    }
});

serveur.listen(80);
console.log("serveur lancé");