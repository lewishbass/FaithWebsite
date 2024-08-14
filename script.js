

if(Math.random()<0.5){
    document.getElementById("headcard").style.display = "none";
    document.getElementById("headshot").style.display = "flex";
}

var audio = document.getElementById("audio");
audio.volume = 0.1;


var woof_player = document.getElementById("woof_player");
woof_player.volume = 0.1;


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

function randintrange(a, b){
    return Math.floor(Math.random()*(b-a)+a);
}
function randrange(a, b){
    return Math.floor(100*(Math.random()*(b-a)+a))*0.01;
}

//TODO: add woof effect
pics = document.getElementsByClassName("inline_image")
for(i = 0; i < pics.length; i++){
    pics[i].addEventListener("mouseover", function(e) {
        woof_player.play();
        let circle = document.createElement('div');
        circle.innerHTML = "WOOF!!"
        
        let d = Math.min(this.clientWidth, this.clientHeight);
        //circle.style.width = circle.style.height = d + 'px';

        
        circle.style.left = (e.clientX - d*0.12)  + 'px';
        circle.style.top = (e.clientY - d*0.06) + 'px';
        circle.classList.add('woof');
        circle.style.rotate = Math.floor(Math.random()*30-15)+"deg";
        
        document.body.append(circle);

        
        setTimeout(() => {
            circle.style.transform = "translateX(" + randrange(-10, 10) + "vmin) translateY(" + randrange(-10, 10) + "vmin)" + 
            "rotate3d(" + randrange(-1, 1) + ", " + randrange(-1, 1) + ", " + randrange(-1, 1) + ", " + randrange(-180, 180) + "deg)";
            circle.style.opacity = 0;
            circle.style.transitionDuration = randrange(0.8, 2.2)+"s";}, 10);
        
        setTimeout(() => { circle.remove(); }, 1000); // matches animation duration
    });
    
}