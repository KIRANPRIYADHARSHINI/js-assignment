// Question 1:
// Write a program that will iterate over an array of colors and change the background of the page
// after 5 seconds.

// let dmode = document.getElementById('dark');

var arr =['Blue','red','green','yellow'];

function changecolor(){
    var randomcolor = arr[Math.floor(Math.random() * arr.length)]
    document.body.style.backgroundColor = randomcolor;
}
function start(){
setInterval(changecolor , 5000)
}

start()
console.log(start);