<?php

include_once('../php/db.php');

        if(isset($_POST['Email'])){
            session_start();
            $email=$_POST['Email'];
           // echo"<h1>".$_POST['Email']."</h1>";
           if($_SESSION['Email']!=$email){
           $sqlGet1="SELECT Email FROM usercontacts where Email='".$email."' and Profmail= '".$_SESSION['Email']."'";
           $resGet1=mysqli_query($conn,$sqlGet1);
           if(mysqli_num_rows($resGet1)>0){
               echo "Contact already in the list";
           }else{
            $sqlGet="SELECT Name,ImgURL FROM userprofile where Email='".$email."'";
            $resGet=mysqli_query($conn,$sqlGet);
                echo"".mysqli_error($conn);
                if(mysqli_num_rows($resGet)>0){
                    $row=mysqli_fetch_assoc($resGet);
                    $sqlPut="INSERT iGNORE INTO usercontacts(Email,ImgURL,Name,Profmail) values('".$email."','".$row['ImgURL']."','".$row['Name']."','".$_SESSION['Email']."');";
                    if(mysqli_query($conn,$sqlPut)==1){
                        echo "Contact added successfully";
                    }else{
                        echo "Something Went Wrong Check Internet connection";
                        //.mysqli_error($conn);
                    }  
                }
                else{
                    echo "Cannot add contact, Entered contact is not a registered";
                }  
            }
        }else{
            echo "You can't add Your own Contact details";
        }   
        }
    
?>