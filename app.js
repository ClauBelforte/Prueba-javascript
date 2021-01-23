let close = document.querySelector('#close');

// Mostrar modal despues de 2 segundos
setTimeout(showModal, 2000);
  function showModal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "block"
} 
// 
if (document.cookie.indexOf("popupShown=true") == -1) {
    document.cookie = "popupShown=true; max-age=86400";
}
     
   
            
