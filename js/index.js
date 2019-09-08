let navBar = document.querySelector('.nav-container');
navBar.addEventListener('click', (e) => {
    navBar.style.backgroundColor = 'blue';
})

let images = document.querySelectorAll('img');
images[0].addEventListener('mouseenter', (e) => {
    images[0].style.opacity = '0.5';
})

images[0].addEventListener('mouseleave', (e) => {
    images[0].style.opacity = '1';
})

images[1].addEventListener('mousemove', (e) => {
    images[1].style.display = 'none';
})

images[2].addEventListener('dblclick', (e) => {
    images[2].style.borderRadius = '50%';
})

images[3].addEventListener('wheel', (e) => {
    images[3].style.padding = '50px';
})

let words = document.querySelectorAll('p');
words[0].addEventListener('mousedown', (e) => {
    words[0].style.fontSize = '20px';
})

words[1].addEventListener('contextmenu', (e) => {
    words[1].style.color = 'DarkGreen';
})

words[2].addEventListener('drag', (e) => {
    words[2].style.textDecoration = 'underline';
})

let buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
    button.addEventListener('mouseover', (e) =>{
        button.style.borderColor = 'black';
    })
})

// Function that I couldnt get to work
let newFooter = document.createElement('p');
let footer = document.querySelector('footer');
footer.append(newFooter);
function selectWords(e) {    
    let selection = e.target.substring(e.target.selectionStart, e.target.selectionEnd);
    console.log(selection);
    newFooter.target.textContent = selection;      
}

words[0].addEventListener('select', selectWords);


//stop propagation
let destination = document.querySelector('.destination');
destination.addEventListener('click', (e) => {
    destination.style.backgroundColor = 'yellow';
})
let destHead = destination.querySelector('h4');
destHead.addEventListener('click', (e) => {
    destHead.style.color = 'DarkRed';
    destHead.stopPropagation();
})

//attempted animation
let h2 = document.querySelector('h2');
function animation(elem) {    
    TweenLite.to(h2, 6, {backgroundColor: 'white'});
    h2.style.backgroundColor = 'blue'
}
h2.addEventListener('mouseover', animation);

