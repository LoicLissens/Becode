<?php
 echo "<h2>1.1 clean your room ex</h2>";
$room_is_filthy = false;

if($room_is_filthy == true ){
	echo "Yuk, Room is dirty : let's clean it up !";
	cleanup_room();
	echo "<br>Room is now clean!";
	$room_is_filthy = false;
} else {
	echo "<br>Nothing to do, room is neat.";
}
 ?>


<h2>1.2 Clean room improved</h2>
<?php
$possible_states = ["berk" , "dirty", "clean"];


$room_filthiness = $possible_states[0]; 

if( $room_filthiness === "berk"){
	echo "Yuk, Room is Disgusting! Let's clean it up !";
} else if(  $room_filthiness === "dirty" ){
	echo "Yuk, Room is dirty : let's clean it up !";

} else {
	echo "<br>Nothing to do, room is neat.";
}
?>

<h2> 2. Different greetings according to time Exercise</2><br>
<?php
date_default_timezone_set("Belgium/Brussels");
$now =date("H:i");  
echo $now;
if( ($now> "5:00") and ($now<"9:00") ){
    echo " Good Morning";
} elseif (($now > "9:01") and ($now < "12:00")){
    echo " Good day !";
} elseif (($now > "12:01") and ($now < "16:00")){
    echo " Good afternoon !";
} elseif (($now > "16:01") and ($now < "21:00")){
    echo " Good evening !";
} elseif (($now > "21:01") and ($now < "04:59")){
    echo " Good Night!";
} 
?>

<h2> 3-4 Display a different greeting according to the user's age and gender.</2>
<form method="get" action="conditions.php">

    <input type="radio"  name="gender" value="Homme">
    <label for="Homme">Homme</label>

    <input type="radio"  name="gender" value="Femme">
    <label for="Femme">Femme</label>

    <br><label > Do u speak 3nGlish ?</label><br>
    <input type="radio"  name="english" value="yes">
    <label for="yes">yes</label>
    <input type="radio"  name="english" value="nope">
    <label for="nope">nope</label>
    


	<br><input type="text" name="age">
    <label for="age">your age</label>

	<br><input type="submit" name="submit" value="Greet me now">
</form>

<?php
if ((isset($_GET["age"])) and ($_GET["age"]>0) and ($_GET["age"]<12))
{
    if ($_GET["gender"] == "Homme"){
        if ($_GET["english"] == "yes"){
            echo "Hello Mister kiddo";
        } else {
            echo "aloha Mister kiddo";
        }
    } elseif ($_GET["gender"] == "Femme") {
        if ($_GET["english"] == "yes"){
            echo "Hello Miss kiddo";
        } else {
            echo "aloha Miss kiddo";
        }
    }
}  elseif ((isset($_GET["age"])) and ($_GET["age"]>= 12) and ($_GET["age"]<18))
{
    if ($_GET["gender"] == "Homme"){
        if ($_GET["english"] == "yes"){
            echo "Hello Mister teen";
        } else {
            echo "aloha Mister teen";
        }
    } elseif ($_GET["gender"] =="Femme") {
        if ($_GET["english"] == "yes"){
            echo "Hello Miss teen";
        } else {
            echo "aloha Miss teen";
        }
    }
}  elseif ((isset($_GET["age"])) and ($_GET["age"]>= 18) and ($_GET["age"]<115))
{
    if ($_GET["gender"] == "Homme"){
        if ($_GET["english"] == "yes"){
            echo "Hello Mister adult";
        } else {
            echo "aloha Mister adult";
        }
    } elseif ($_GET["gender"] == "Femme") {
        if ($_GET["english"] == "yes"){
            echo "Hello Miss adult";
        } else {
            echo "aloha Miss adult";
        }
    }
} else {
    echo "Rentrez un age valide";
}

?>
<h2>5. The Girl Soccer team.</h2><br>

<form method="get" action="conditions.php">
    <input type="radio"  name="genderfoot" value="Homme">
    <label for="Homme">Homme</label>

    <input type="radio"  name="genderfoot" value="Femme">
    <label for="Femme">Femme</label>
    
    <br><input type="text" name="agefoot">
    <label for="agefoot">your age</label>

    <br><input type="text" name="name">
    <label for="name">Votre nom</label>

	<br><input type="submit" name="submit" value="Get involved">
</form>

<?php
    if ((isset($_GET["agefoot"])) and ($_GET["agefoot"]>=21) and ($_GET["agefoot"] <=41) and ($_GET["genderfoot"]=="Femme")){
        echo "Hello ".$_GET["name"].", bienvenue dans la team !";
    } else {
        echo "Désolé ".$_GET["name"].", tu n'es pas qualifiée pour team!";
    };
?>
<h2>7. "School sucks"</h2><br>

    <form method="get" action="conditions.php">

        <input type="text" name="cote">
        <label for="cote">/20</label>
        <br><input type="submit" name="submit" value="Envoyer la cote">
    </form>

<?php 
    if ($_GET["cote"] <= 4){
        echo "This work is really bad. What a dumb kid!"; 
    } elseif ($_GET["cote"]>= 5 and $_GET["cote"]<=9 ){
        echo "This is not sufficient. More studying is required";
    }elseif ($_GET["cote"] == 10 ){
        echo "Barely enought";
    } elseif ($_GET["cote"]>= 11 and $_GET["cote"]<=14 ){
        echo "Not bad !";
    }elseif ($_GET["cote"]>= 15 and $_GET["cote"]<=18 ){
        echo "Nice one you rock";
    }elseif ($_GET["cote"]>= 19 and $_GET["cote"]<=20 ){
        echo "Perfecto";
    }
?>


