function validateForm() {
    
   var x=document.forms['form']['email'].value;
   if (x == "") {
    alert("Email must be filled out");
    return false;
   }

   var y=document.forms['form']['name'].value;
   if (y == "") {
     alert("Name must be filled out");
    return false;
    }

   var z=document.forms['form']['text'].value;
   if (z == "") {
      alert("Message must be filled out");
    return false;
   }
}