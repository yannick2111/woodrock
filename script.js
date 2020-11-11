function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

  function checkSendForm(){
    let email = document.getElementById("email").value;
    let betreff = document.getElementById("betreff").value;
    let nachricht = document.getElementById("nachricht").value;
    let send = false;

    if (email<4){
        window.alert("Bitte gültige Mail eintragen");
        send = false;
    } else if (betreff === ""){
        window.alert("Bitte Betreff eintragen");
        send = false;
    } else if (nachricht === ""){
        window.alert("Bitte Nachricht angeben");
        send = false;
    } else{
        send =true;
    }

    if (send){
        document.getElementById("success").style.display ="block";
        document.getElementsByClassName("kontakt").style.display = "none";
    }
    
    return send;
      
  }