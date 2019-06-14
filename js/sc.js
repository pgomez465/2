function myFunc(){
    var values = [];
    var key=[];
    $('.UserCB').each(function(){
      var $this = $(this);
      if ($this.is(':checked')) {
        values.push($this.val());
       
      }
    });
    if(values.length!=0){
    var array = [];
  
      var elements = document.body.getElementsByTagName("p");
  
      for(var i = 0; i < elements.length; i++) {
         var current = elements[i];
          if(current.children.length === 0 && current.textContent.replace(/ |\n/g,'') !== '') {
             array.push(current.textContent);
          }
      } 
      console.log(array);
      console.log(values);
      var finalArray = []; 
    for (let i = 0; i < values.length; i++) {
      finalArray.push(array[values[i]]);
    }
    console.log(finalArray);
    
    localStorage.setItem("invitationList", JSON.stringify(finalArray));
    
   
var mod=localStorage.getItem("mode");
    console.log(mod)


   if(mod=="audio"){
   
    window.location.href = "../WebRtc/WebRtcAudio/WebRtc.html";
    elements =values.join(',')
   }else{
    window.location.href = "../WebRtc/WebRtcVideo/WebRtc.html";
    elements =values.join(',')
   
   }

   

    
  }else{
    alert("please select contacts to call");
  }
    
    //$.post('http://www.weblively.ml/php/signin.php', {elements: elements})


}
