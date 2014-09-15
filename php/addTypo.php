<?
    header("Content-type: text/plain; charset=UTF-8");

    $json = '../json/data.json';

    if (!file_exists($json)) {
        file_put_contents($json, '{"name":"typo_report"}');
        echo "Файл $filename создан";
    };

    $arr = array( "selection" => $_GET['selection'], "href" => $_GET['href'], "status" => $_GET['status'], );
    $data = json_decode(file_get_contents($json, true), true);

    array_push($data,$arr);

    echo gettype($data);

    file_put_contents($json, json_encode($data));

    echo "Selection is ".$_GET['selection']." in href ".$_GET['href']." with status ".$_GET['status'].'.';
?>