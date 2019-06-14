
<?PHP
$myArray = json_decode($_POST['elements']);
//echo $myArray[0];

for($i = 0; $i < count($myArray)-2; $i++) {
    echo $myArray[$i];
    // $sender = 'support@weblively.cf'; //weblively123
     $sender = '-----your mail id----';
     $recipient = $myArray[$i];
     $subject = "New Call";
     $message = 'Hello, There is a new Conference Call ahead join by clicking on the link - '.$myArray[count($myArray)-2] .'#'.$myArray[count($myArray)-1];
     $headers = 'From:' . $sender;

     if (mail($recipient, $subject, $message, $headers))
     {
        echo " Message accepted";
    }
    else
    {
        echo " Error: Message not accepted";
    }
  }



// $subject = "php mail test";
// $message = "php test message";
// $headers = 'From:' . $sender;

// if (mail($recipient, $subject, $message, $headers))
// {
//     echo "Message accepted";
// }
// else
// {
//     echo "Error: Message not accepted";
// }
?>
