// Write your code here!

// const main = document.querySelector('main');
// main.remove();

// const newHeader = document.createElement('h1');
// newHeader.id = 'victory';
// newHeader.innerHTML = "YOUR-NAME is the champion";

// const element= document.createElement('div');

// document.body.append(element);

// const ul = document.createElement('ul');

// for(let i = 0; i < 3; i++){
//     const li = document.createElement('li');
//     li.textContent = (i + 1).toString();
//     ul.append(li);
// }

// element.append(ul);

const main = document.querySelector('main')

main.remove();

const newHeader = document.createElement('h1')

document.body.append(newHeader)

newHeader.id = 'victory'

newHeader.textContent = 'YOUR-NAME is the champion'