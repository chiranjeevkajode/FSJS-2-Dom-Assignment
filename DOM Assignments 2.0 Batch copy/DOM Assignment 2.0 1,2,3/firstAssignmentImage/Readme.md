# Assignment-01

### Task-01
Add Hire Me and hide the footer icon.

![Alt text](task1Output.png)

### Solution :
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


### Task-02
change the button placeholder value

![Alt text](task2Output.png)

#### Solution:
const hideHireMe = (document.querySelector(
  "nav > ul > li:last-child"
).style.visibility = "hidden");

const PlaceHolder = document.querySelector("nav > div >input");

PlaceHolder.placeholder = "Search My Project";



### Task-03
Get back placeholder value(search) and footer icon and hide the li value(hire me)

![Alt text](task3Output.png)

#### Solution:
const hidecontact = (document.querySelector(
  "nav >ul >li:last-child"
).style.visibility = "hidden");

const Placeholder = document.querySelector("nav div input");
Placeholder.placeholder = "Search";

const FooterIcon = (document.querySelector("footer ul").style.visibility =
  "visible");


### Task-04
Change the image

![Alt text](task4Output.png)

#### Solution :

const image = document.querySelector("section div img");
image.src = "https://media.licdn.com/dms/image/C4D03AQGl-adCfRTfFA/profile-displayphoto-shrink_800_800/0/1655552914877?e=2147483647&v=beta&t=J1Pilh5vMu6C7E1iesIg0yY7zt1hnovRpLH7P-vgSUM";


### Task-05
Create support me button in header right section and get back image

![Alt text](task5Output.png)

#### Solution :
const newButton = document.createElement("button");
const text = document.createTextNode("Support Me");
const button = newButton.appendChild(text);
console.log(button);
const buttonDiv = document.querySelector(".hero-right-section-btns");
buttonDiv.appendChild(newButton);