### Task-01
add ineuron image and hide first image

![Alt text](Output/DOM%20P3%20SS-1.png)

#### Solution: 
document.querySelector(".logo").style.display = "none";
let header = document.querySelector("header");
let createImage = document.createElement("img");
createImage.src = "./assets/ineuron-logo.png";
header.appendChild(createImage);

### Task-02

change prize premium section card

![Alt text](Output/DOM%20P3%20SS-2.png)

#### Solution: 

document.querySelector(".app_price span").innerHTML = "$10";