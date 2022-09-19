let score=0;

const e1=document.getElementById("status");
const e3=document.getElementsByClassName("boundary");

// console.log(e1);
// console.log(e3);

function lose(){
    e1.innerText="You lost!";
    score-=10;
    e3.style="background_color: #ff8888;";
    //e3.style="div.youlose";
}

function win(){
    e1.innerText="You won!";
    score+=5;
}

function reset(){

}

const e2=document.getElementById("start");
console.log(e2);

const users=new Array();
function login(){
    const username=prompt("Enter your username");
    const password=prompt("Enter your password");
    for(let i=0; i<users.length; i++){
        if(!(username.equals(users[i].un)&&(password.equals(users[i].pass)))){
            u={
                un: username,
                pass: password,
                s: score
            };
            users.push(u);
            console.log(users[0]);
        }
    }
}