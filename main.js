const button = document.getElementById("button");
const gif = document.getElementById("gif");

button.addEventListener("click",startStick)

function startStick(){
    button.className = "hidden";
    gif.className = "";
    button.insertAdjacentHTML('afterend', '<audio src="scr/music.mp3" loop autoplay="autoplay"></audio>');
    document.title = "Get stick bugged lmao";
}