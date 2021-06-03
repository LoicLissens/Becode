<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Dfake excuse generator</title>
</head>
<style>
    h1{
        text-align: center;
    }
    .container {
        height: 75vh;
        width: 75vw;
        margin: auto;
        border: solid 1px black;
        display: flex;
        flex-direction: column;
        justify-content:center;
        align-items:center;
    }
</style>
<body>
    <h1> Fake excuse generator</h1>
    <div class="container">
        <h2>Generate it !</h2>
        <form action="fake-excuse.php" method="post">
        <p> Nom de l'enfant : <input type="text" name="nom" /></p>
        <p>Cause de l'absence : <input type="text" name="cause" /></p>
        <p><input type="submit" value="Let's fake"></p>
        </form>
        <?php
            if(isset($_POST['nom']) and isset($_POST['cause'])){
                echo "<p>Bonjour Mr le proff, ".$_POST['nom']." ne viendras pas à l'école pour cause de
                 ".$_POST['cause'].". ".$_POST['nom']." A hâte de revenir à l'école.";
            }
            
        ?>
    </div>
</body>
</html>