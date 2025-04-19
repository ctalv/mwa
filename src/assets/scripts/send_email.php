<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(
        !empty($_POST['firstname'])
        && !empty($_POST['lastname'])
        && !empty($_POST['email'])
        && !empty($_POST['message'])
    ){
        $name = $_POST["name"];
        $email = $_POST["email"];
        $phone = $_POST["phone"];
        $message = $_POST["message"];


        $to = "clairetalverson@email.com";
        $subject = "New Contact Form Submission";
        $body = "First Name: {$firstname} {$lastname}\Last Name: {$lastname} {$lastname}\nEmail: {$email}\nPhone: {$phone}\nMessage: {$message}";
        $headers = "From: {$email}";


        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send message.";
        }
    }
}

?>