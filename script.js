const text = document.querySelector('.animation');
const textanimate = () => {
    setTimeout(() => {
        text.textContent= "Web Developer"
    }, 0); 
    setTimeout(() => {
        text.textContent= "Programmer"
    }, 4000);
    setTimeout(() => {
        text.textContent= "Freelancer"
    }, 8000);
}
textanimate();
setInterval(textanimate,12000);