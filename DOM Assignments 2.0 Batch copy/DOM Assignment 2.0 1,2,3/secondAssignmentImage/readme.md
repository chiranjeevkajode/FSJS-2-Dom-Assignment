## Task-01
Add background color on every h3 element.

![Alt text](task1Output.png)

### Solution:
let bgcColor = document.querySelectorAll("h3").forEach((value) => {
  value.style.backgroundColor = "Red";
});

## Task-02
Add new faq section Skill.

![Alt text](task2Output.png)

#### Solution:

let createDiv = document.createElement("div");

createDiv.classList.add("accordian");
console.log(createDiv);

let h3 = document.createElement("h3");
createDiv.appendChild(h3).innerHTML = "Skill";

let p = document.createElement("p");
createDiv.appendChild(p);
let textNode = document.createTextNode(
  "I Posses a vary good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github."
);
p.appendChild(textNode);

document.querySelector(".accordian-wrapper").appendChild(createDiv);