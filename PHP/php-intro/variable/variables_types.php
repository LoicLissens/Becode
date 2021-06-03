<?php 
$first_name = "Lissens"; 
$age = 25;
$color_eyes = "blue";
$family_members = array(
    1 => "Mam",
    2 => "Frere",
    3 => "pere",
    4 => "chien");

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
    <p>Hi my name is <?php echo $first_name; ?></p>
    <p>i'm <?php echo $age; ?> years old !</p>
    <p>My eyes are <?php echo $color_eyes; ?></p>
    <p>The first person of my family is <?php echo $family_members[1]; ?></p>
</body>
</html>