// Question 3:
// Make a webpage that will ask the name of the user. Then will display a welcome message on the
// webpage. Also the webpage should also have a clock.
// Using the toggle method of classList add a dark mode feature to the website.

const name = prompt("Enter your name");
     title.innerText += `Welcome to the javascript ${name}`
const ctime = document.getElementById('time');


function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

setInterval(clock,1000);

const attr = document.getElementById('att');
attr.classList.toggle('bgBlack');
document.body.style.color = 'white';