
var audio = document.getElementById("audio");
audio.volume = 0.1;
function openTab(evt, tabName) {
    audio.play();
   var i, tabcontent, tablinks;

   // Hide all tab contents
   tabcontent = document.getElementsByClassName("tab_page");
   for (i = 0; i < tabcontent.length; i++) {
       tabcontent[i].style.display = "none";
   }

   // Remove active class from all tab links
   tablinks = document.getElementsByClassName("tab_link");
   for (i = 0; i < tablinks.length; i++) {
       tablinks[i].className = tablinks[i].className.replace(" active", "");
   }

   // Show the current tab's content and add an active class to the button
   document.getElementById(tabName).style.display = "block";
   evt.currentTarget.className += " active";
}

// Set default tab
document.addEventListener("DOMContentLoaded", function() {
   document.getElementsByClassName("tab_link")[0].click();
});