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
words[0].addEventListener('click', (e) => {
    words[0].style.fontSize = '20px';
})

words[1].addEventListener('contextmenu', (e) => {
    words[1].style.color = 'DarkGreen';
})

let buttons = document.querySelectorAll('btn');
buttons.forEach((button) => {
    button.addEventListener('mouseenter', (e) =>{
        button.style.display = 'none';
    })
})










let newFooter = document.createElement('p');
let footer = document.querySelector('footer');
footer.append(newFooter);
function selectWords(e) {    
    let selection = e.target.words[0].substring(e.target.selectionStart, e.target.selectionEnd);
    console.log(selection);
    newFooter.textContent = selection;      
}

words[0].addEventListener('select', selectWords);

