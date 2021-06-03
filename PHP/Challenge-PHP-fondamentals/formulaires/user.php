<?php
    if (isset($_GET['nom'], $_GET['prenom'])) {
        $nom_get = $_GET['nom'];
        $prenom_get = $_GET['prenom'];
    }
    if (isset($_POST['nom'], $_POST['prenom'])) {
        $nom_post = $_POST['nom'];
        $prenom_post = $_POST['prenom'];
    }
?>
<!DOCTYPE html> 
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Duse</title>
</head>
<body>
    <h1>USER PAGE</h1>
    <h2>INFO GET:</h2>
    <p>Nom: <?php echo $nom_get; ?></p>
    <p>Prenom: <?php echo $prenom_get; ?></p>
    <h2>INFO POST:</h2>
    <p>Nom: <?php echo $nom_post; ?></p>
    <p>Prenom: <?php echo $prenom_post; ?></p>
    
</body>
</html>