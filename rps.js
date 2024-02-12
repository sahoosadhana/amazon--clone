let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara= document.querySelector("#user-score");
const compscorepara= document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
    //rock, paper, scissors
}
const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game was Draw😬.Play again";
    msg.style.backgroundColor="#081b31";
}
const showwinner=(userWin, userchoice,compchoice)=>{
    if(userWin){
        userscore++;
        userscorepara.innerText=userscore;
        console.log("You win the game😊");
        msg.innerText=`Hurrayy!!You Win the game😊. ${userchoice} beats the ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("You lose the game🥺");
        msg.innerText=`You lose the game🥺 ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const playgame=(userchoice)=>{
    console.log("user choice:", userchoice);
    //generate computer choice;
    const compchoice= genCompChoice();
    console.log("comp choice: ", compchoice);

    if(userchoice===compchoice){
        //draw
        drawGame();
    }else{
        let userWin=true;
        if(userchoice==="rock"){
            //scissor,paper
            userWin= compchoice==="paper"? false: true;
        }else if(userchoice==="paper"){
            //rock, scissors
            userWin=compchoice==="scissors"? false:true;
        }else {
            //rock, paper
            userWin = compchoice==="rock"? false:true
        }
        showwinner(userWin,userchoice, compchoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        console.log("choice was clicked", userchoice);
        playgame(userchoice);
    });
});