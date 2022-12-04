const list = Array.from(document.querySelectorAll('li'));
const button =  Array.from(document.querySelectorAll('button'));
const menuBar = document.querySelector('.menu');
const ff = document.querySelector('.ff');

function mouseOver(e){
   e.target.style = `
   background-color:red;
   color: white;
   border-radius:3px;
   transform:scale(2.1);
   transition:.3s;
   `
}
function mouseOut(e){
   e.target.style =`
   background-color:transparent;
   `
}

function focuse(e){
e.target.style = `
background-color:yellow;
color:red;
border:2px solid lightgray;

`
}

function normal(e){
   e.target.style=
    `background-color: transparent;`

}

list.map(element =>{
    element.addEventListener('mouseover' , mouseOver);
    element.addEventListener('mouseout' , mouseOut)
});


button.map(elements => {
    elements.addEventListener('mouseover' , focuse)
    elements.addEventListener('mouseout' , normal)
})

menuBar.addEventListener('click' , (e)=>{
    // document.querySelector('ul').toggle.contain('show');
    // console.log(e.target.classList);
    e.target.classList.toggle('active');
})