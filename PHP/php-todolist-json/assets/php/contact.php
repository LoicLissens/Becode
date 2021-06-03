<?php

$relevance;

if ('true' == $_POST['importance']) {
    $relevance = 'true';
} else {
    $relevance = 'false';
}

$datas = [];
$datas['task'] = filter_var($_POST['data'], FILTER_SANITIZE_STRING);
$datas['relevance'] = $relevance;
$datas['archived'] = false;

$json = file_get_contents('../json/results.json');
$json = json_decode($json, true);
$json[] = $datas;
$json = json_encode($json);

file_put_contents('../json/results.json', $json);

header('Location: ../../index.php');
