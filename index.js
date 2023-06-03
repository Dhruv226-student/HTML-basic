function myFunction(){
    var x =document.getElementById("myNavbar");
    if(x.className === "navbar"){
        x.className += "responsive";

    }else{
        x.className ="navbar";

    }
}

//get the link element
var link = document.getElementById("myLink");
//function show the alret
function showAlert(event)
{
   
    alert("this is example of html with js and css")
}
//event lister
link.addEventListener("click",showAlert);