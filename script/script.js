//Pop-up message alert 
function showMessage() {
    alert("Welcome to Our Flowers");
}
//Colourchange of the header 
function changeColor() {
    document.getElementById("header-title").style.backgroundColor = "orange";
}
//Pop up message alert 
function showMessage2() {
    alert("Are you sure?");
}
//Hover button colour change 
function showMessage3() {
    document.getElementById('hoverButton').style.backgroundColor = "teal";
}

// Counter 
let count = 0;
document.getElementById('buttonCounter').onclick = function updateCounter() {
    count = count + 1;
    document.getElementById('counter').innerHTML = 'Count: ' + count;

    if (count % 2 === 0) {
        document.getElementById('buttonCounter').style.color = "blue";
    } else {
        document.getElementById('counter').style.color = "red";
    }
};

// Loop Message
let initialValue = 0;
let stopValue = 5;

for (let i = initialValue; i < stopValue; i++)
     {
    let text = document.createTextNode("Flowers make life beautiful");
    let br = document.createElement("br");
    document.getElementById('container').append(text, br);
}
