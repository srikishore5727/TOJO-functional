const dataOne = document.getElementById("data1");
const dataTwo = document.getElementById("data2");
const dataThree = document.getElementById("data3");
const clickSound=new Audio('sounds/mixkit-classic-click-1117.wav');

document.body.addEventListener("click",()=>{
    clickSound.pause();
    clickSound.currentTime=0;
    clickSound.play();
})


dataOne.innerText = localStorage.getItem('playerName');
let modes = localStorage.getItem('mode');
if(modes==10){
    dataTwo.innerText = "Easy";
}else if(modes == 15){
    dataTwo.innerText = "Medium"
}else if(modes == 25){
    dataTwo.innerText = "Hard"
}else if(modes == 38){
    dataTwo.innerText = "Extreme"
}
dataThree.innerText = localStorage.getItem('moves');

const gobackBtn = document.getElementById("goback-btn").addEventListener("click",()=>{
    window.location.href="game.html";
});