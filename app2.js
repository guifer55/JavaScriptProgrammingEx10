let myDiv = document.createElement('div');
myDiv.setAttribute('id', 'myDiv');
let myDivText = document.createTextNode('We are creating a new div!');
myDiv.appendChild(myDivText);

let myParagraph = document.createElement('p');
myParagraph.setAttribute('id', 'myPargraph');
myParagraph.innerHTML = 'This is my paragraph';

myDiv.appendChild(myParagraph);

let myButton = document.createElement('button');

myButton.setAttribute('id','myButton');

myButton.setAttribute('class', 'but');

myButton.innerText = 'Click me!';

myButton.insertBefore(myButton, myParagraph);

document.body.appendChild(myDivText);