<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Tässä voit lähettää sähköpostin tai tallentaa tiedot tietokantaan
    // Esimerkki: sähköpostin lähettäminen
    $to = "saana.lapinkangas@gmail.com";
    $subject = "Yhteydenotto";
    $message = "Nimi: $name\nPuhelin: $phone\nSähköposti: $email\nViesti:\n$message";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
    echo "Kiitos yhteydenotostasi!";
}
?>
