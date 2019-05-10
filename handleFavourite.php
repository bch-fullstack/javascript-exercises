<?php
    $favourite_things = array();

    if (isset($_SERVER["HTTP_X_REQUESTED_WITH"]) && $_SERVER["HTTP_X_REQUESTED_WITH"] == "XMLHttpRequest") {        
        echo $_GET["favouriteImageId"];

        if (in_array($_GET["favouriteImageId"], $favourite_things)) {
            echo "hey you favourited before";
        } else {
            echo "added to favourite list";
            array_push($favourite_things, $_GET["favouriteImageId"]);
            print_r($favourite_things);
        }
    } else {
        echo "no, this is not an AJAX req because the of this: " . $_SERVER["HTTP_X_REQUESTED_WITH"];
    }
?>