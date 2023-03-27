let myButton = document.querySelector('button');
// querySelector selects only ONE node similar to CSS so in this code I am using
// it to select ONLY the first button
// giving it a variable makes it so that I can access this particular button
// without the work of finding it again


let clickMe = document.querySelectorAll('#clickMe');

let allButtons = document.querySelectorAll('.btn');


//console.log(clickMe.innerText);
clickMe.innerText = "Hello World"

allButtons.forEach(function(button){
    button.style.backgroundcolor='red';
});

clickMe.addEventListener('click', function(){
    pageWrapper.style.backgroundcolor = 'red';
});
//method to add new string html to the dom
let newHtml = '<button class="btn" id="newButton">New Button!</button>';

btnColumn.insertAdjacentHTML('afterbegin', newHtml)
let newButton = document.querySelector('#newButton');
// creating a node on the fly
let buttonNode = document.createElement('button');
buttonNode.classList.add('btn');
buttonNode.innerText = "I am a new button man"

buttonNode.addEventListener('click', function(){
    alert('It do be working though')
});

btnColumn.appendChild(buttonNode);

clickMe.addEventListener('click', function(){
    alert('finally... someone clicked me.....');
})
const handleClick = () => {
    alert('finally... someone clicked me.....');
}

