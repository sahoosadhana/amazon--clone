let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newgamebtn=document.querySelector("#newbtn");
let msgcon= document.querySelector(".msgcon");
let msg= document.querySelector("#msg");

let turnO= true; //plyerX, plyerO
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("button was clicked");
        if(turnO){//playerO
            box.innerText="O";
            turnO=false;
        }else{//playerX
            box.innerText="X";
            turnO=true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disabledbtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enablebtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const resetgame=()=>{
    turnO=true;
    enablebtn();
    msgcon.classList.add("hide");
}
const showwinner=(winner)=>{
    msg.innerText=`Hurrayyyyy!!!!congratulations, winnerr is the ${winner}`;
    msgcon.classList.remove("hide");
    disabledbtn();
}
const checkWinner=()=>{
    for(let patterns of winPatterns){
        // console.log(patterns); //this will print all vlaues like an array
        // console.log(patterns[0],patterns[1],patterns[2]); //will print the individual like array not in array like form
        // console.log(boxes[patterns[0]],boxes[patterns[1]],boxes[patterns[2]]);
        // console.log(boxes[patterns[0]].innerText,boxes[patterns[1]].innerText,boxes[patterns[2]].innerText);

        //can be store in individual variable:
        let posval1 = boxes[patterns[0]].innerText;
        let posval2 = boxes[patterns[1]].innerText;
        let posval3 = boxes[patterns[2]].innerText;

        if(posval1 != "" && posval2 != "" && posval3 != ""){
            if(posval1=== posval2 && posval2 ===posval3){
                console.log("congrats uh win", posval1);
                showwinner(posval1);
                
            }
        }
    }
};
newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);