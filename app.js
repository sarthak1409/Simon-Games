let gameSeq=[];
let userSeq=[];
let btns=["green", "pink","orange","purple"];
let started=false;
let level=0;
let h4=document.querySelector("h4");
document.addEventListener("keypress",function(){
    if(started==false){
       
        console.log("game started");
        started=true;
        levelUp();
    }
});
function btnFlash(colors){
    colors.classList.add("flash");
    setTimeout(function(){
        colors.classList.remove("flash");
    },250);
};
function userflash(colors){
    colors.classList.add("userFlash");
    setTimeout(function(){
        colors.classList.remove("userFlash");
    },100);
};
function levelUp(){
    userSeq=[];
    level++;
    h4.innerText=`Level ${level}`;
    // random btn choose
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    gameSeq.push(randColor);
    console.log(gameSeq);
    // console.log(randColor);
    // console.log(randIdx);
    let randBtn= document.querySelector(`.${randColor}`)
    btnFlash(randBtn);

}
function checkAns(idx){
    // console.log("curr level:",level);
    
    if(userSeq[idx]===gameSeq[idx]){
        console.log("same value")
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp(),1500) ;
        }
    }else{
        h4.innerHTML=`Game Over!Your Score was <b>${level-1}</b><br>Press any key to Restart.`
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },350);
        reset();
    }
}
function btnPress(){
    console.log("btn pressed",this);
    let btn = this;
    userflash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".colors");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}