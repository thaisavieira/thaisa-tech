const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

header.addEventListener('click', function(){
    console.log ('click hamburger');

    if(header.classList.contains('open')){ //Close Hamburger Menu
        header.classList.remove('open');
        fadeElems.forEach(function(element){
        element.classList.remove ('fade-in');
        element.classList.add ('fade-out');
        });
        
    }
    else { //Open Hamburger Menu
        header.classList.add('open');
        fadeElems.forEach(function(element){
        element.classList.remove ('fade-out');
        element.classList.add ('fade-in');   
        });
        
    }
    
});