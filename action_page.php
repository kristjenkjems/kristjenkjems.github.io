<?php
  $name = $_POST['name'];
  $visitor_address = $_POST['mail'];
?>

<?php
    $email_from = 'kristjen.kjems@gmail.com';
    $email_subject = "KDA Mailing List";
    $email_body = "You have received a new message from the user $name.\n".
    "They would like to be added to the mailing list. \n Their email is: $visitor_address ."
?>

<?php
  $to = "kristjen.kjems@gmail.com";
  $headers = "From: $email_from \r\n";
  $headers .= "Reply-To: $visitor_email \r\n";
  mail($to,$email_subject,$email_body,$headers);
 ?>

 <?php
function IsInjected($str)
{
    $injections = array('(\n+)',
        '(\r+)',
        '(\t+)',
        '(%0A+)',
        '(%0D+)',
        '(%08+)',
        '(%09+)'
  );
    $inject = join('|', $injections);
    $inject = "/$inject/i";
    if(preg_match($inject,$str))
    {
      return true;
    }
    else
    {
      return false;
    }
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}
?>
