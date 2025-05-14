<?php
    $arr = [];
    $dir = scandir("."); // get folders

    foreach ($dir as $key => $value) {

        if (!str_contains($value, ".") and !str_contains($value, "Docker") and !str_contains($value, "sass")) {
            $arr[] = ["name" => $value, "data" => 
            json_decode(file_get_contents(getcwd() ."/"
            . $value . "/project-data.json" ))];   
        }
    }
    
    $json = json_encode($arr);

    $file = "projects.json";
    
    file_put_contents($file, $json);
    
    echo $json;
?>
