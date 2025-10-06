const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){ 
    // if someone clicks on the bar, it will run anonymous function
    bar.addEventListener('click', () => { // when clicked, it will add the class 'active' to the nav element
       nav.classList.add('active'); // this will make the nav visible
    })
}

if(close){
    close.addEventListener('click', () => { // when clicked, it will remove the class 'active' from the nav element
       nav.classList.remove('active'); // this will make the nav invisible
    })
}
 