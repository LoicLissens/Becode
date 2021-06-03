<?php
    $arrayAnimals = ['lion', 'tigre', 'poisson'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="bulma.min.css">
    <title>Document</title>
</head>
<body>
<?php require 'header.php'; ?>

<form action="<?php $_SERVER['PHP_SELF']; ?>" method="get">
<div class="select">
  <select name="animal">
    <option>Choisisez un animal</option>
    <?php foreach ($arrayAnimals as $key => $value) {
    echo "<option value='{$value}'>{$value}</option>";
}  ?>
  </select>
</div>
<div class="control">
    <button type="submit" class="button is-link">Submit</button>
</div>
</form>
<?php
    if (!isset($_GET['animal'])) {
        echo 'choisir un animal';
    } else {
        if ('lion' === $_GET['animal']) {
            include 'lion.php';
        }
        if ('tigre' === $_GET['animal']) {
            include 'tigre.php';
        }
        if ('poisson' === $_GET['animal']) {
            include 'poisson.php';
        }
    }

?>
<?php require 'footer.php'; ?>   
</body>
</html>