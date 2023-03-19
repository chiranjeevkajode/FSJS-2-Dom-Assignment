### Task-01

change h1 color.

![Alt text](DOM%20P9/ass9.1-after.png)

#### Solution:

let h1 = document.querySelector("h1.title");
h1.style.color = "blue";

### Task-02

when hover on button background color will be change and change the h1 color.

![Alt text](DOM%20P9/ass9.2-after.png)

#### Solution: 

document.querySelector("h1.title").style.color = "black";

let btnBgc = document.querySelector(".add-to-cart");

btnBgc.addEventListener("mouseenter", () => {
  btnBgc.style.backgroundColor = "red";
});

btnBgc.addEventListener("mouseleave", () => {
  btnBgc.style.backgroundColor = "green";
});