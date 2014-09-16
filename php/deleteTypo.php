<?
    header("Content-type: text/plain; charset=UTF-8");

    $json = '../json/data.json';
    $data = json_decode(file_get_contents($json, true), true);
    unset( $data[$_GET['id']] );

    file_put_contents($json, json_encode($data));
?>