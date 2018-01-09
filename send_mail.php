<?php
	$email = $_REQUEST['email'];
	$name = $_REQUEST['name'];
	$subject = $_REQUEST['subject'];
	$message = "MESSAGGIO RICEVUTO DAL PORTFOLIO ---" . $_REQUEST['message'];
	
	//settaggi funzionanti per Gmail!!!
    ini_set("SMTP", "aspmx.l.google.com");
    ini_set("sendmail_from", "ileniaferdico.do@gmail.com");
    $headers = "From: $email";
    mail("ileniaferdico.do@gmail.com", $name . " -- " . $subject, $message, $headers);
    
    //redirigo alla home
    //header("Location: index.html");
    exit();
?>