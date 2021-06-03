<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<form method="get" action="switch_structure.php">

<input type="text" name="cote">
<label for="cote">/20</label>
<br><input type="submit" name="submit" value="Envoyer la cote">
</form>

<?php
   switch ($_GET["cote"]) {
       case $_GET["cote"]=== 0:
            echo"nul";
            break;
       case $_GET["cote"]<=4:
           echo"Pas bon";
           break;
        case $_GET["cote"]<=9 :
           echo"Pas tres bon";
           break;
        case $_GET["cote"]==10 :
            echo"ça passe";
            break;
        case $_GET["cote"]<=14 :
                echo"bon";
                break;
        case $_GET["cote"]<=18 :
                echo"tres bon";
                break;
        case $_GET["cote"]<=20 :
                echo"Parfait";
                break;
       
       
   }
    
?>
</body>
</html>