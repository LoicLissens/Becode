<?php
session_start();
$nom = $_SESSION['nom'];
$prenom = $_SESSION['prenom'];
$age = $_SESSION['age'];
if (isset($_POST['login'], $_POST['pass'])) {
    setcookie('login', $_POST['login'], time() + 365 * 24 * 3600);
    setcookie('pass', $_POST['pass'], time() + 365 * 24 * 3600);
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.min.css">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<style>
    h2{
        text-align: center;
    }
</style>
    <h1>lolol</h1>
    
    <p>Salut, je m'appel  <?php echo $nom.' '.$prenom; ?></p>
    <h2>Et j'ai <?php echo $age; ?> ans</h2>
    <hr>
    <h2>Formulaire cookies</h2>
    <section>
        <form method="post" action="<?php $_SERVER['PHP_SELF']; ?>">
            <p>Login</p>
            <input type="text" name="login">
            <p>Password</p>
            <input type="password" name="pass"> <br>
            <button type="submit">submit</button>
        </form>
    </section>
</body>
</html>