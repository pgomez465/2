document.getElementById("audio").addEventListener('click',function name() {
   console.log(localStorage.getItem("mode"));
   localStorage.setItem("mode","audio");
   console.log(localStorage.getItem("mode"));
})
document.getElementById("video").addEventListener('click',function name() {
   console.log(localStorage.getItem("mode"));
   localStorage.setItem("mode","video");
   console.log(localStorage.getItem("mode"));

})

document.getElementById("addButton").addEventListener("click", function(){
   var butt = document.getElementById("addButton");
   var email = document.getElementById('txtEmail').value;
   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if(email.match(mailformat))
     {
        butt.style.backgroundColor = "#c1c1c1"
        butt.textContent="Loading..."
        var datastring='&Email='+email;
        $.ajax({
           type:"post",
           url:"https://weblively.cf/html/addContact.php",
           data:datastring,
           cache:false,
           success:function successRedirect(data){
               console.log(data);
               alert(data);
               butt.textContent="Add"
               butt.style.backgroundColor = "#fff"
               document.location.reload(true)
           },
           error:function errorMessage(){
               
           }
        })
     
     }
     else
     {
        alert("You have entered an invalid email address!");
     }



   
 });



  









    

   /*
    var phone=document.getElementById('txtPhone');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var filter1 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var al=0;
    var str="Please provide valid data ";

    if (!filter.test(email.value)) {
    al=al+1;
    email.focus;
   }
   if(!filter1.test(phone.value)){
      al=al+1;

      email.focus;
   }
   if(al==0){
      alert('successfull');
   }else{
      alert(str)
   }

}
*/