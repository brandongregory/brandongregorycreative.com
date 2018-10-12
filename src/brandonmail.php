<?php
if (isset($_POST['email']) && isset($_POST['name']) && isset($_POST['message'])) {
    $email_to = "brandon.gregory.1981@gmail.com";
    $email_subject = "Contact from BrandonGregoryCreative.com";
    $error_message = "";

    $email = $_POST['email'];
    $name = $_POST['name'];
    $message = $_POST['message'];

    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
    if (!preg_match($email_exp,$email)) {
        $error_message .= 'invalid email|';
    }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
    if (strlen($name) < 1) {
        $error_message .= 'invalid name|';
    }
    if (strlen($message) < 2) {
        $error_message .= 'message too short|';
    }
 
    if (strlen($error_message) > 0) {
        echo $error_message;
        die();
    }
 
    $email_message = "Contact from website:\n\n";
     
    function clean_string($string) {
        $bad = array("content-type","bcc:","to:","cc:","href");
        return str_replace($bad,"",$string);
    }
 
    $email_message .= 'Name: ' . clean_string($name) . "\n";
    $email_message .= 'Email: ' . clean_string($email) . "\n";
    $email_message .= 'Message: ' . clean_string($message) . "\n";
 
    // create email headers
    $headers = 'From: '.$email."\r\n".
    'Reply-To: '.$email."\r\n" .
    'X-Mailer: PHP/' . phpversion();
    if (mail($email_to, $email_subject, $email_message, $headers)) {
        echo 'email sent';
    } else {
        echo 'problem sending mail';
    }
} else {
    echo 'data invalid';
}
?>