### Task
Form left get value from right.


![Alt text](task1Output.png)

#### Solution :
let rgtForm = document.querySelector(".mainRight form");

let rgtName = document.querySelector(".mainRight form .userName");

let rgtEmail = document.querySelector(".mainRight form .userEmail");

let rgtMessage = document.querySelector(".mainRight form .userMessage");


let leftName = document.querySelector(".mainLeft form .enterName");

let leftEmail = document.querySelector(".mainLeft form .enterMail");

let leftMessage = document.querySelector(
  ".mainLeft form .enterMessage"
);

rightForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let a = rgtName.value;
  let b = rgtEmail.value;
  let c = rgtMessage.value;

  leftName.value = a;
  leftEmail.value = b;
  leftMessage.value = c;
});
