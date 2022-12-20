const button = document.getElementById("button");
const gif = document.getElementById("gif");
var audio = new Audio('scr/music.mp3');

button.addEventListener("click",startStick);

function startStick(){
    button.className = "hidden";
    gif.className = "";
    audio.play();
    document.title = "Get stick bugged lmao";
}