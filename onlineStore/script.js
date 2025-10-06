const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if(bar){ 
    // if someone clicks on the bar, it will run anonymous function
    bar.addEventListener('click', () => {
       nav.classList.add('active'); 
})
}
