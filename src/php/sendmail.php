<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require '../../lib/PHPMailer-master/src/Exception.php';
require '../../lib/PHPMailer-master/src/PHPMailer.php';
require '../../lib/PHPMailer-master/src/SMTP.php';

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$msg = $_POST['msg'];

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->Mailer = "smtp";
//For Gmail only turn of two step verification, Turn ON the "Less Secure App" in gmail settings
$mail->SMTPDebug  = 1;  
$mail->SMTPAuth   = TRUE;
$mail->SMTPSecure = "tls";
$mail->Port       = 587;
$mail->Host       = "smtp.gmail.com";
$mail->Username   = "your_username@gmail.com";
$mail->Password   = "your_password";

$mail->IsHTML(true);
$mail->AddAddress("mail_to_sent@gmail.com", "name");
$mail->SetFrom("your_username@gmail.com", "From your website");
$mail->AddReplyTo("your_username@gmail.com", "Name");
$mail->AddCC("cc-recipient-email@domain", "cc-recipient-name");
$mail->Subject = "I am $name $subject";
$content = <<<END

    <div style="margin: 20px auto; color:black; padding: 12px; font-family: sans-serif;">
      
    <h3>Name - $name</h3>
    <h3>Email - $email</h3>
    <p style="text-indent: 50px; line-height: 25px;">$msg</p>
    </div>
  END;

$mail->MsgHTML($content); 
if(!$mail->Send()) {
  echo "Error while sending Email.";
  var_dump($mail);
} else {
  echo "Email sent successfully";
}



?> 