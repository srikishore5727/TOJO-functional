const userInput = document.getElementById("user-input");
const clickSound=new Audio('sounds/mixkit-classic-click-1117.wav');

const bgm = new Audio("sounds/bgm1.mp3");
bgm.loop = true;
bgm.play();

document.body.addEventListener("click",()=>{
    clickSound.pause();
    clickSound.currentTime=0;
    clickSound.play();
})




document.getElementById("instruction-icon").addEventListener("click",()=>{
    document.getElementById('instruction-page').style.display = "inherit ";
});

document.getElementById("exit-icon").addEventListener("click",()=>{
    document.getElementById('instruction-page').style.display = "none "
});

document.getElementById("play-btn").addEventListener("click",()=>{
    if(userInput.value == ""){
        alert("Enter your name");
    }else{
        localStorage.setItem('playerName',userInput.value);
        window.location.href = "game.html";
    }
});




