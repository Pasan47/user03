//Manipulating div

const element = document.createElement("div");
element.innerText = "Institute";

document.getElementById("pace").append(element);

const element2 = document.createElement("div");
element2.innerHTML = `<p>Hello world</p>`;
document.getElementsByClassName("practical").append(element2);