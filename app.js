let gameSeq=[];
let userSeq=[];
let btns=["green", "pink","orange","purple"];
let started=false;
let level=0;
let h4=document.querySelector("h4");
let h3=document.querySelector("h3");
let img=document.querySelector("img");
let p=document.querySelector("p");
h3.addEventListener("click",function(){
    if(started==false){
       h3.innerText=`Reset`;
       p.innerText="double click to reset"
        console.log("game started");
        started=true;
        setTimeout(levelUp(),1000);
        
    }
});
h3.addEventListener("dblclick",function(){
    window.location.reload();
})
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
        h4.innerHTML=`Game Over!Your Score was <b>${level-1}</b> Press Retry to Restart.`
        h3.innerText="Retry";
        p.innerText="Well Tried!";
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="#F7B5CA";
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
let max_level=0;
function reset(){
    started = false;
    gameSeq=[];
    userSeq=[];
    level=0;
   
}
