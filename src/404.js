let colorTemplate = ['linear-gradient(90deg, rgba(34,148,195,1), rgba(123,208,47,1))','linear-gradient(90deg, rgba(47,82,211,1) 0%, rgba(34,195,195,1) 100%)','linear-gradient(90deg, rgba(154,34,195,1) 0%, rgba(47,208,198,1) 100%)']; // the colours to pick for a gradient background
let html = document.getElementById('html');
function randomColourPick() {// picks a random object from array
    return colorTemplate[Math.floor(Math.random()*colorTemplate.length)];
 }
randomColourPick();
html.style.backgroundImage = randomColourPick(); // sets it