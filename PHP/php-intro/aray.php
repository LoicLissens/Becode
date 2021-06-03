<?php
    $family = ["mam","flo","loic","papa"];
    print_r($family);
    echo "<br/>";
    $recettes = array("pate saumon", "canard porto", "pate au four","chocolat");
    print_r($recettes);
    echo "<br/>";
    $movies = ["snatch","lucky number slevin","reine des neiges mdr"];
    print_r($movies[2]);


?>
<h2>associatives array</h2>
<br/>
<?php
    $person[0] = '02/2198445';
    $person[1] = 'Cantersteen 10';
    $person[2] = 'Brussels';

echo $person[1];
echo "<br/>";
echo $person['street'];
echo "<br/>";
?>
<h2>exo associative array</h2>
<br/>
<?php
   $me = array(
       'name' => 'loic',
       'age' => 25,
       'season' => 'summer',
       'like soccer ?' => true,
       'best movie' => array("snatch","lucky number slevin","reine des neiges mdr")
    );
    $mother = array(
        'name' => 'mam',
        'age' => 50,
        'season' => 'winter',
        'like soccer ?' => false,
        'best movie' => array("tortue ninja","lucky lucke","roi lion")
     );
     $me['mother'] = $mother; // array push 
     echo '<pre>';
     print_r($me);
     echo '</pre>';
     echo '<br/>';
     echo count($mother['best movie']); // mam a 3 film pref count 
     echo '<br/>';
     echo count($me['best movie']);
     echo '<br/>';
     $total_movies = count($mother['best movie'])+count($me['best movie']);
     echo $total_movies;
     $me['best movie'][] = 'taxidriver';
     print_r($me);
     echo '<br/>';
     $me['name']='durand';
     echo $me['name'];

     
?>
<h2>Soulmate ex</h2>
<?php
    $me_soulmate = array(
        'name' => 'loic',
        'age' => 25,
        'season' => 'summer',
        'like soccer ?' => true,
        'hobbies' => array("ski","climb","music","dev")
     );
     $her_soulmate = array(
        'name' => 'nat',
        'age' => 25,
        'season' => 'spring',
        'like soccer ?' => false,
        'hobbies' =>  array("ski","danse","music","swimming")
     );
     $possible_hobbies_via_merge = array_merge($me_soulmate['hobbies'],$her_soulmate['hobbies']); // combine deux tab avec tout dedans
     $possible_hobbies_via_intersection = array_intersect($me_soulmate['hobbies'],$her_soulmate['hobbies']); // combine seulemenet les élements en commun d'un tab
     echo "<pre>";
     print_r($possible_hobbies_via_merge);
     echo"</pre>";
     echo"<br/>";
     echo "<pre>";
     print_r($possible_hobbies_via_intersection);
     echo"</pre>";
    
?>
<br/>
<h2>More array ex's</h2>
<br/>
<?php
    $web_dev = array(
        'front' => [],
        'back'=> []
    );
    array_push($web_dev['front'],'xhtml');
    array_push($web_dev['back'],'ruby on rail');
    array_push($web_dev['front'],'css');
    array_push($web_dev['front'],'flash');
    array_push($web_dev['front'],'javascript');
    echo "<pre>";
    print_r($web_dev);
    echo "<pre/>";
    echo "<br/>";
    $web_dev['front'][0] = 'html';
    unset($web_dev['front'][2]); // suprime l'élement voulu mais ne change pas les indexs
    $web_dev['front'] = array_values($web_dev['front']);// recalcule  les valeurs des index en paratnt de 0
    echo "<pre>";
    print_r($web_dev);
    echo "<pre/>";
    echo "<br/>";

?>