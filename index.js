// Write your code here!
 let main = document.querySelector('main#main');
 main.remove();

let newHeader = createElement('h1');
newHeader.classList.Add("#victory");
document.body.appendChild(newHeader);
newHeader = document.querySelector('h1#victory');
newHeader.innerHTML = " Evan is the champion";
