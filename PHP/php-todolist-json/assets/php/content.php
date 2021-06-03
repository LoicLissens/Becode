<?php

// chopper le fichier jsonkkk
$file = 'assets/json/results.json';
$json = file_get_contents($file);
$json = json_decode($json, true);

// pour chaque objet dans l'array vérifier si archived est true ou false
    $array_todo = [];
    $array_archived = [];


    foreach ($json as $value)
    {
        // si c'est false le mettre dans une array "todo"
        if (false == $value['archived']) {
            array_push($array_todo, $value);
        }
        // si c'est true le mettre dans une array "already-done"
        else {
            array_push($array_archived, $value);
        }
    }

    function write($array)
    {
        foreach ($array as $value) {
            echo "<div draggable=\"true\" class=\"columns task\"><p class=\" {$value['relevance']} column has-text-centered has-text-white\"><span><label class=\"checkbox\"><input class=\"check\" type=\"checkbox\"></label>{$value['task']}</span></p></div>";
        }
    }

// faire une fonction qui prend en argument une array et qui pour chaque élément de l'array créer un div avec les données de l'array dedans
