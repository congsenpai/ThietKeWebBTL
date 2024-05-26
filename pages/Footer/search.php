<?php
$searchTerm = $_GET['term'];

$searchResults = performSearch($searchTerm);

//Display results
foreach ($searchResults as $result){
    echo '<div>' . $result['name']. '</div>'; //Can change 'name' as other key
}
?>