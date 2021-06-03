# La syntaxe en Markdown

## Table des matières:
* [Modification du texte](#Modif)
* [Insérer des liens et des images](#liens)
* [Navigation dans des fichiers.md](#Nav)

## Modification du texte <a name="Modif"></a>:

* *Italique* : `*italique*` 
* **Gras** : `**gras**` 
* ***Italique gras*** : `***italique gras***` 
* ba̶r̶r̶é̶ : `~~barré~~` 
* Titre :`# Titre`. A noter que comme en HTMl, il existe plusieurs taille de tire, au plus on rajoute de "#" au plus le titre sera petit.
* Insertion d'emoji :+1: : `:nom de l'emoji:` dans ce cas-ci `:+1:`. Voici une [liste](https://gist.github.com/rxaviers/7360908) des emojis présents en markdown sur github et il y en a un paquet :exclamation:
* Le barres de séparation : `-----------------` Il faut mettre minimum 3 tirets, astérisques, ou barre en bas :
----------------- 

## Insérer des liens et des images <a name="liens"></a>:

![Logo Beode](https://www.becode.org/register/assets/images/logo_Becode.png) 


* Insertion d'images: `![Logo Beode](https://www.becode.org/register/assets/images/logo_Becode.png`
* [lien source openclasseroom](https://openclassrooms.com/fr/courses/1304236-redigez-en-markdown) : `[lien source openclasseroom](https://openclassrooms.com/fr/courses/1304236-redigez-en-markdown)`. C'est comme pour les images mais sans le "!".

-----------------------

## Navigation dans des fichiers.md <a name="Nav"></a> :</h2>

Markdown donne la possibilitée de navigué à l'intérieur d'un fichier .md ainsi qu'entre plusieurs fichier .md

  * Navigation dans un même fichier:
 Pour naviguer au seins d'un même fichier, ce qui est pratique lorsque l'on veut faire une table des matières pas exemple.
Si je veux faire pointer un lien en haut de mon texte vers une partie en aval il me sufit d'indentifier cette partie comme ceci:
`## Mon premier paragraphe <a name="premierpara"></a>`. Ensuite de pointer cette identifiant de la même manière que si l'on pointait un    lien : `1. [Lien vers mon premier paragraphe](#premierpara)`.

  * Navigation entre plusieurs fichiers:
Pour faire un lien pointant vers un autre fichier .md, rien de plus simple, c'est un peu comme en HTML. Si il provient d'un autre         utilisateur github, ou d'un fichier dans un autre dépot, il sufit simplement de pointer vers son URL. 
Si c'est un fichier ou un sous dossier qui est dans le même dépot, c'est toujours similaire au HTML:    `[texte du lien](Nom du           dossier/fichier.md)` ou `[texte du lien](fichier.md)`.

----------------- 
## Index:
1. [Présentation du projet](README.md)
2. [Plus d'infos sur Markdown](whatismd.md)
