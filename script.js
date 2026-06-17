let head=document.getElementById('head');
let username=document.getElementById('username');
let btn=document.getElementById('btn');

function clickEvent(){
    let name=username.value;
    head.innerText="Hello ,"+ name;
}

let redbox=document.getElementById('red');
redbox.addEventListener('click',()=>{
    redbox.style.backgroundColor='red'
});

let bluebox=document.getElementById('blue');
bluebox.addEventListener('click',()=>{
    bluebox.style.backgroundColor='blue'
});

let greenbox=document.getElementById('green');
greenbox.addEventListener('click',()=>{
    greenbox.style.backgroundColor='green'
});

let yellowbox=document.getElementById('yellow');
yellowbox.addEventListener('click',()=>{
    yellowbox.style.backgroundColor='yellow'
});