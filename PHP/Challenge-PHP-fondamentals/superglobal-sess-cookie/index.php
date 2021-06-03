<?php
session_start(); // passer des info avec session des pages en pages
$_SESSION['nom'] = 'loic';
$_SESSION['prenom'] = 'lissens';
$_SESSION['age'] = 25;
////
$broser_user = $_SERVER['HTTP_USER_AGENT'];
$show_ip = $_SERVER['REMOTE_ADDR'];
$name_server = $_SERVER['SERVER_NAME'];
$nom = 'loic';
$age = 25;
$prenom = 'lissens';

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="assets/css/style.min.css">
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap" rel="stylesheet">
    <title>Exo php</title>
</head>
<body>
    <header>
        <h1>PHP - Variables superglobales, sessions et cookies</h1>
    </header>
    <main>
        <section class="userinfo">
            <h2>User info</h2>
            <ul>
                <li>Ip: <?php echo $show_ip; ?> </li>
                <li>sever: <?php echo $name_server; ?> </li>
                <li>Browser: <?php echo $broser_user; ?></li>
            </ul>
        </section>
        <section>
            <a href="assets/php/autrepage.php">Autrepage</a>
        </section>
        
    </main>
    <footer>
    </footer>

</body>
</html>