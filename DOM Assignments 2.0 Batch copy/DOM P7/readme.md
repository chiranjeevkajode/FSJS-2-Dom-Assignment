### Task-01

Remove the languages that have 2.0 in their name(Every alternative language).

![Alt text](DOM%20P7/ass7.1-after.png)

#### Solution: 

let anchorTag = document.querySelectorAll(".main__languages a");
console.log(anchorTag);

for (let i = 0; i < anchorTag.length; i++) {
  if (i % 2 !== 0) {
    anchorTag[i].style.display = "none";
  }
}

### Task-02

Use JavaScript to write something in the input box and submit the form. This should refresh the page and the languages in the left card should come back.

![Alt text](DOM%20P7/ass7.2-after.png)

#### Solution:

let placeholder = document.querySelector("input.main__form-input");
console.log(placeholder);
placeholder.placeholder = "iNeuron";

let form = document.querySelector("form");
let input = document.querySelector("input");
input.removeAttribute("disabled");
let button = document
  .querySelector("button.main__form-btn")
  .removeAttribute("disabled");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = input.value;
  console.log(value);
  let langSection = document.querySelector(".main__languages");
  let anchorTag = document.createElement("a");
  let attribute = document.createAttribute("href");
  attribute.value = "https://www.ineuron.ai";
  anchorTag.setAttributeNode(attribute);
  anchorTag.innerText = inputValue;
  langSection.appendChild(anchorTag);
});