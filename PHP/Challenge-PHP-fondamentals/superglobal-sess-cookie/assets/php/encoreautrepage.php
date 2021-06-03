<?php
    session_start();

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>Encore autre page </h1>
    <p>Bonjour <?php echo $_COOKIE['login']; ?></p>
    <p>Ton login est <?php echo $_COOKIE['pass']; ?> </p>
</body>
</html>