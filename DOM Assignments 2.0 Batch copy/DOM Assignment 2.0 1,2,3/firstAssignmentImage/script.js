// Task-01

let targetNavUlLi = document
  .querySelector("nav")
  .querySelectorAll("ul")[0].children;

for (let i = 0; i < targetNavUlLi.length; i++) {
  var element = targetNavUlLi[i].innerText;
  if (element === "Contact") {
    targetNavUlLi[i].innerText = "Projects";
  }
}

let li = document.createElement("li");

let text = document.createTextNode("Hire Me");

li.appendChild(text);
console.log(document.querySelector("nav > ul").appendChild(li));

document.querySelector("footer > ul").style.visibility = "hidden";


