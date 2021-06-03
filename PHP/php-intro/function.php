<?php
    $str = 'This is going to be shuffled !';
    $str = str_shuffle($str); // function qui mélange les lettre d'un string
     
    echo $str;
?>
<br/>
<h2>test string shuffle</h2>
<?php
    $string ="According to a researcher (sic) at Cambridge University, it doesn't matter in what order the letters in a word are, the only important thing is that the first and last letter be at the right place. The rest can be a total mess and you can still read it without problem. This is because the human mind does not read every letter by itself but the word as a whole.";
    $tab_string = explode(" ",$string);
    print_r($tab_string);
    echo "<br/>";
    foreach($tab_string as $shuffle){
        echo str_shuffle($shuffle);
        echo "<br/>";
    }
    
?>
<h2>Exercices</h2>
<br/>
<?php
    function capital ( $cap ) {
        $cap = ucfirst($cap);
        return $cap;
    };
    $lol = "bonjour";
    $lol = capital ($lol);
    echo $lol;
    echo "<br/>";
    function cur_year ($years,$mois,$jour) {
        $now = date($years.":".$mois.":".$jour);
        return $now;
    }
    $year = cur_year("Y","m","d");
    echo $year;
    echo "<br/>";

    function sum ($a,$b){
        if (is_numeric($a)== true and is_numeric($b)==true){ // function somme mais check si les
            return $a + $b;
        }else {
            return "Error: arg is not a number !";
        }
    }
    echo sum(a,3);
    echo "<br/>";
    function achronime ($str){
        $str = explode(" ",$str);
        foreach($str as &$value){
        $value = substr($value,0,1);
        }
        $str = implode("",$str);
        return $str;
    }
    $chaine = "bon duel est bon";
    $chaine = achronime($chaine);
    echo $chaine;
    echo "<br/>";

    function coolletters ($str){
        $str = str_replace('ae','æ',$str);
        return $str;
    }
    $mdr = 'paela';
    $mdr = coolletters($mdr);
    echo $mdr;
    echo "<br/>";
    function badletters ($str) {
        $str = str_replace('æ','ae',$str);
        return $str;
    }
    $xd =  'pælo';
    $xd = badletters($xd);
    echo $xd;
    echo "<br/>";

    function cssclasse ($message, $value){
        if ($value ==="error" or $value === "warning" or $value === "notice"){
            return "<div class=".$value.">".$value.":".$message.". </div>";
        }else {
            $value = "info";
            return "<div class=".$value.">".$value.":".$message.". </div>";
        }
    }
  echo cssclasse("bonjour vous","error");
  echo "<br/>";
?>
<style>
    h2{
        text-align: center;
    }
    .container{
        height: 50vh;
        width: 50vw;
        margin: auto;
        border: solid 2px black;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
<h2>Random words generator</h2>

<div class="container">
    <?php
    /*Autre méthode juste shuffle les lettres de l'alphabet et puis reprend une fois les math random (du nombre de lettre qu'il faut)
    en première lettres du string et ça donne un mot random */
    $generate = isset($_GET['generate']);
    function randomwords ($test,$itemtodisplay){
        if($test === true){
            $alphabet = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
            $alphabet = explode(" ",$alphabet);
            $firstword = array();
            $secondword = array();
            $count_first_word = rand(1,5);
            $count_second_word = rand (7,15);
            for ($i=0; $i <= $count_first_word;$i++){
                $randomletter = rand(0,count($alphabet)-1);
                array_push($firstword,$alphabet[$randomletter]);
            }
            for ($l=0; $l <= $count_second_word; $l++){
                $randomletter2 = rand(0,count($alphabet)-1);
                array_push($secondword,$alphabet[$randomletter2]);
            }
            $firstword = implode("", $firstword);
            $secondword = implode("", $secondword);
            $itemtodisplay = $firstword." ".$secondword;
            echo "<h3>".$itemtodisplay."</h3>";
            
        } else {
            echo "<h3>Generate words !</h3>";
        }
    }
    
    randomwords($generate,$display_screen);
    
    
    ?>
    <form action="function.php" method="get">
        <input type="submit" value="Generate" name="generate">
    </form>
</div>
<h2> decapitalize</h2>
<br/>
<?php
    
    function decapitalise ($str) {
        $str = strtolower($str);
        return $str;
    }
    $upper_str = "STOP YELLING I CAN'T HEAR MYSELF THINKING!";
    $upper_str = decapitalise($upper_str);
    echo $upper_str;
    echo "<br/>";
?>
<h2>Cone volume</h2>
<br/>
<?php
    function calculatevol ($ray,$height) {
        $pi = pi();
        $volume = $ray*$ray*$pi *$height*(1/3);
        echo "Le volume d'un cone d'on la hauteur est de ".$height." et le rayon de ".$ray." est de ".$volume;
    }
    calculatevol(5,2);
?>
