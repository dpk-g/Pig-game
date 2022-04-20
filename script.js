'use strict';

const crntScore2=document.querySelector(".crntScore2");
const crntScore1=document.querySelector(".crntScore1");
const addedScore2=document.querySelector(".addedScore2");
const addedScore1=document.querySelector(".addedScore1");
const image=document.querySelector(".imageClass");
const newGameButton=document.querySelector(".newGame");
const rollDiceButton=document.querySelector(".rollDice");
const holdButton=document.querySelector(".hold");
let crntPlayer=1;
let players=document.querySelectorAll(".playerName");
addedScore2.textContent=99;

newGameButton.addEventListener("click",function(){
    crntScore1.textContent=0;
    crntScore2.textContent=0;
    addedScore1.textContent=0;
    addedScore2.textContent=0;
    image.classList.add("hidden");
    document.querySelector(".player1").style.backgroundColor="black";
    document.querySelector(".middle").style.background="linear-gradient(to right,  black 0%,black 50%,rgb(246, 216, 221) 50%,rgb(246, 216, 221) 100%)";
    document.querySelector(".player2").style.backgroundColor="rgb(246, 216, 221)";
    crntPlayer=1;
});

rollDiceButton.addEventListener("click",function(){
    let randomNumber=Math.floor(Math.random()*6 + 1);
    if(randomNumber==1){
        image.src="dice-1.png"
        image.classList.remove("hidden");
    }
    else if(randomNumber==2){
        image.src="dice-2.png"
        image.classList.remove("hidden");
    }
    else if(randomNumber==3){
        image.src="dice-3.png"
        image.classList.remove("hidden");
    }
    else if(randomNumber==4){
        image.src="dice-4.png"
        image.classList.remove("hidden");
    }
    else if(randomNumber==5){
        image.src="dice-5.png"
        image.classList.remove("hidden");
    }
    else if(randomNumber==6){
        image.src="dice-6.png"
        image.classList.remove("hidden");
    }

    if(randomNumber==1){
        // crntPlayer=((crntPlayer==1)?2:1);
        if(crntPlayer==1){
            crntPlayer=2;
            crntScore1.textContent=0;
        }
        else{
            crntPlayer=1;
            crntScore2.textContent=0;
        }
    }
    else{
        if(crntPlayer==1){
            let presentScore=Number(crntScore1.textContent);
            crntScore1.textContent=presentScore + Number(randomNumber);
        }
        else{
            let presentScore=Number(crntScore2.textContent);
            crntScore2.textContent=presentScore + Number(randomNumber);
        }
    }
});


holdButton.addEventListener("click",function(){
    if(crntPlayer==1){
        let temp1=Number(crntScore1.textContent);
        let temp2=Number(addedScore1.textContent);
        addedScore1.textContent=temp1+temp2;
        crntScore1.textContent=0;
        if(Number(addedScore1.textContent) >=100){
            document.querySelector(".player1").style.backgroundColor="black";
            players[0].style.color="rgb(218, 27, 116)";
            // document.querySelectorAll(".playerName").style.color="rgb(218, 27, 116)";
            document.querySelector(".middle").style.background="linear-gradient(to right,  black 0%,black 50%,rgb(246, 216, 221) 50%,rgb(246, 216, 221) 100%)";
        }
        crntPlayer=2;
    }
    else{
        let temp1=Number(crntScore2.textContent);
        let temp2=Number(addedScore2.textContent);
        addedScore2.textContent=temp1+temp2;
        crntScore2.textContent=0;
        if(Number(addedScore2.textContent) >=100){
            document.querySelector(".player2").style.backgroundColor="black";
            players[1].style.color="rgb(218, 27, 116)";
            // document.querySelectorAll(".playerName").style.color="rgb(218, 27, 116)";
            document.querySelector(".middle").style.background="linear-gradient(to right,  pink 0%,pink 50%,black 50%,black 100%)";
        }
        crntPlayer=1;
    }
    
})



