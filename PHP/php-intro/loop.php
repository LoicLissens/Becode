<h2>loop</h2>
<?php
$pronouns = array ('I', 'You', 'He/She','We', 'You', 'They');
foreach ($pronouns as $key => $value) {
  echo $value;
  echo "<br/>";  
};
?>
<h2>exo</h2>
<br/>
<?php
$number =1;
while($number<=120){
    echo $number;
    $number++;
}
echo"<br/>";
for($numb =1; $numb <= 120; $numb++){echo $numb;}
echo "<br/>";
$my_team = ['loic','chris','vinc','terance','brice','maelys','louis','quentin'];
foreach($my_team as $my_team){
    echo $my_team;
    echo "<br/>";
}
echo "<br/>";
$country = ['BE'=>'Belgique','DEU' => 'Allemagne','PER' => 'Perou','KGZ'=>'kirgizistan','ALB'=>'albanie','PRK'=>'korée du nord','SMR'=>'saint-marin','BEN'=>'bénin','CIV'=>'côte d ivoir','HTI'=>'Haïti'];
print_r($country);
echo "<br/>";
?>
<select name="country" id="country">
    <?php
        foreach($country as $key => $value){
            echo " <option value=".$key.">$value</option>";
        }
    ?>
</select>
<br/>
