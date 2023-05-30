<?php

if (isset($_POST['name']) &&  isset($_POST['email']) && isset($_POST['address'])) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $address = $_POST['address'];

    $dbhost = "localhost";
    $db_name = "vine_site";
    $db_table = "records_list";
    $username = "root";
    $password = "";

    try {
        $db = new PDO("mysql:host=$dbhost; dbname=$db_name", $username, $password);

        $db->exec("set names utf8");

        $data = array('name' => $name, 'email' => $email, 'address' => $address);

        $query = $db->prepare("INSERT INTO $db_table (name, email, address) values (:name, :email, :address)");

        $query->execute($data);

        mail("$email", 'Запись на дегустацию', "Здравствуйте, $name Вы записались на дегустацию по адресу $address", 'From: kameskovandrej777@gmail.com');
    } catch (PDOException $e) {
        echo "Warning!:" . $e->getMessage() . "<br/>";
    }
}
