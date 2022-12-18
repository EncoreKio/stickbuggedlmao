const button = document.getElementById("button");
const gif = document.getElementById("gif");
const title = document.getElementById("title");

button.addEventListener("click",startStick)

function startStick(){
    button.className = "hidden";
    gif.className = "";
    button.insertAdjacentHTML('afterend', '<audio src="scr/music.mp3" loop preload="auto" autoplay></audio>');
    title.innerText = "Get stick bugged lmao";
}