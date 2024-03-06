let username;
document.getElementById("mySubmit").onclick = function() {
username = document.getElementById("username").value;
document.getElementById("Welcome").textContent = 'Welcome lol ' + username;
}

let firstName = 'Hello';
console.log(firstName + 'hello ${firstName}');
