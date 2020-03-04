/*create new js element */
/* wanna create a div so put inside the quotes*/
let newDiv = document.createElement('div');

/*gives an attribute of mudiv */
newDiv.setAttribute('id', 'myDiv');
let divContent = document.createTextNode('We are creating a new div');

/* */

newDiv.appendChild(divContent);

document.body.appendChild(newDiv);

/* new paragr element*/

let newParagraph = document.createElement('p');

newParagraph.setAttribute('id', 'newParagraph');

/* add content to the paragraph, could create a text node, but will do inner html*/
newParagraph.innerHTML = '<strong>This is my paragraph</strong>';
/* now wanna put somewhere in the document*/
/*document.body.appendChild(newParagraph);*/
/* put inside the div*/



newDiv.appendChild(newParagraph);

let myButton = document.createElement('button');

myButton.setAttribute('id', 'myButton');
myButton.setAttribute('class', 'but');

myButton.innerText = 'Click me!';

/*newDiv.appendChild(myButton);  could o like thois, then comment to do the next*/

newDiv.insertBefore(myButton, newParagraph);

/* doing the same thing but shorter*/

