<?php
// formulaire du bas: avec de if endif ({ debut, } fin)/ et envois de fichier avec extention etc
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>form index</title>
</head>
<body>
    <h2>form GET</h2>
    <form action="user.php" method="get">
        <p>Nom:</p>
        <input type="text" name="nom">
        <p>Prenom:</p>
        <input type="text" name="prenom">
        <button type="submit">Envoyer !</button>
    </form>
    <h2>form POST</h2>
    <form action="user.php" method="post">
        <p>Nom:</p>
        <input type="text" name="nom">
        <p>Prenom:</p>
        <input type="text" name="prenom">
        <button type="submit">Envoyer !</button>
    </form>
    <hr>
    <h2>Vrai form</h2>
    <?php if (!isset($_POST['nomm'], $_POST['prenomm'], $_POST['civilite'])) { ?>
    <form action="<?php $_SERVER['PHP_SELF']; ?>" method="post" enctype="multipart/form-data">
        <p>Civilité</p>
        <select name="civilite">
            <option value="homme">Homme</option>
            <option value="femme">Femme</option>
        </select>
        <p>Nom:</p>
        <input type="text" name="nomm">
        <p>Prenom:</p>
        <input type="text" name="prenomm"><br>
     
         <label for="file">Choose File</label>
         <input type="file" name="file" id="file" />
        <br>
    <button type="submit">Envoyer !</button>
    </form>
    <?php } ?>
    <?php if (isset($_POST['nomm'], $_POST['prenomm'], $_POST['civilite'])) { ?>
        <p>Civilie: <?php echo $_POST['civilite']; ?></p>
        <p>Nom: <?php echo $_POST['nomm']; ?></p>
        <p>Prénom: <?php echo $_POST['prenomm']; ?></p>
        <?php if ('application/pdf' == $_FILES['file']['type']) { ?>
        <p>PDF : oui</p> 
        <?php } else { ?> <!-- check if upload file is a PDF -->
        <p>PDF : non</p> 
        <?php } ?>
    <?php } ?>
</body>
</html>