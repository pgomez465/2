function myFunc(){
    var values = [];
    var key=[];
    $('.UserCB').each(function(){
      var $this = $(this);
      if ($this.is(':checked')) {
        values.push($this.val());
      }
    });
    var array = [];
  
      var elements = document.body.getElementsByTagName("p");
  
      for(var i = 0; i < elements.length; i++) {
         var current = elements[i];
          if(current.children.length === 0 && current.textContent.replace(/ |\n/g,'') !== '') {
             array.push(current.textContent);
          }
      } 
      var finalArray = []; 
    for (let i = 0; i < values.length; i++) {
      finalArray.push(array[values[i]-1]);
    }
    localStorage.setItem("invitationList", JSON.stringify(finalArray));
    






    window.location.href = "../WebRtc/WebRtc.html";
    elements =values.join(',')

    
    
    //$.post('http://www.weblively.ml/php/signin.php', {elements: elements})


}
