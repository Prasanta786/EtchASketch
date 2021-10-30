let container=document.querySelector(".container");
let buttonSize=document.createElement('button');
let buttons=document.querySelector('.buttons');
function createDiv(row,col){
    for(let i=0;i<(row*col);i++){
        let createDiv=document.createElement('div');
        createDiv.style.border='1px solid red';
        container.style.gridTemplateRows= `repeat(${row},1fr)`;
        container.style.gridTemplateColumns= `repeat(${col},1fr)`;
        container.appendChild(createDiv).classList.add('div')
    }
    btn();
}
createDiv(16,16);

function btn(){
    buttons.appendChild(buttonSize).classList.add('bug');
    buttonSize.textContent="RESET";
    let divs=container.querySelectorAll('.div');
    divs.forEach(e=>e.addEventListener('mouseover',()=>{
        let r=Math.floor(Math.random()*255);
        let g=Math.floor(Math.random()*255);
        let b=Math.floor(Math.random()*255);
        e.style.backgroundColor=`rgb(${r},${g},${b})`;
    }))
    
}

function reset(){
    let divs=container.querySelectorAll('.div');
    divs.forEach(div=>div.remove());
}
function size(){
    buttonSize.addEventListener('click',()=>{
        let num=parseInt(prompt('Enter the number'));
        if(num==0 || num<1 || num>100){
            reset();
            createDiv(16,16);
            btn();
        }else{
            reset();
            createDiv(num,num);
            btn();
        }
    });
};
size();
