<?php
    echo $_GET['nom'];
    echo "<br/>";
    echo $_GET['prenom'];
    echo "<br/>";
    if(isset($_GET['age'])){
        echo $_GET['age'];
    }
    //
    if(isset($_GET['dateDebut']) and isset($_GET['dateFin'])){
        echo $_GET['dateDebut']."  ".$_GET['dateFin'];
    }
    echo "<br/>";
    ///
    $quersel = $_SERVER['QUERY_STRING']; // récupère l'entière URL
    echo $quersel;
    parse_str($quersel, $querselarr);

   /* echo '<pre>';
    print_r($querselarr);
    echo '</pre>'; */

?>