<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>unicorn</title>
</head>
<body>
    <form action="unicorn.php" method="get">
        <label for="human">Are you human, a cat, or an unicorn ?</label><br>
        <input type="text" name="human">
        <input type="submit" name="submit">
    </form>
    <?php 
        $gif;
       $gif = ($_GET["human"]==="human") ? "https://media.giphy.com/media/3o7bu1QBfylzi8MmYw/giphy.gif": "bad choice";
        $gif = ($_GET["human"]==="cat") ? "https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif": "bad choice";
        $gif = ($_GET["human"]==="unicorn") ? "https://media.giphy.com/media/l0LIYv9tJFIVHxF5u/giphy.gif": "bad choice";
       echo "<img src='$gif' alt=''>";
    ?>
    
</body>
</html>