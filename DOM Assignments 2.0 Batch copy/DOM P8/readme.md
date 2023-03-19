### Task-01

set overflow auto to get scrollbar.

![Alt text](DOM%20P8/ass8.1-after.png)

#### Solution: 

let scroll = document.querySelector(".new");
scroll.style.overflow = "auto";
scroll.style.border = "2px solid red";

### Task-02

 hide scrollbar and hide background lined point.

![Alt text](DOM%20P8/ass8.2-after.png)

#### Solution: 

let scroll2 = document.querySelector(".new");
scroll2.style.overflow = "hidden";
scroll2.style.border = "none";


let backgroundImage = document.querySelector("body");
backgroundImage.style.backgroundImage.visibility = "hidden";

### Task-03

Toggle the button and get back nav value and body background image make visible.

![Alt text](DOM%20P8/ass8.3-after.png)

#### Solution: 

let I = document.querySelector("body");
backgroundImage.style.backgroundImage.visibility = "visible";

let a = document.querySelector("button");

let count = 0;

a.addEventListener("click", (e) => {
  e.preventDefault();
  count += 1;

  if (count % 2 == 0) {
    document
      .querySelector("#navbarTogglerDemo01")
      .setAttribute("class", "collapse navbar-collapse");
  } else if (count % 2 !== 0) {
    document
      .querySelector(".collapse")
      .setAttribute("class", "collapse.show navbar-collapse");
  }
});