document.body.style.backgroundColor = "hsl(217, 54%, 11%)";
document.body.style.paddingTop = "3% ";

const parent = document.createElement("div"); //parent cards
parent.id = "parents";
parent.style.display = "flex";
parent.style.justifyContent = "center";
parent.style.flexWrap = "wrap";
document.body.append(parent);

const div = document.createElement("div");
div.id = "wrapper";
div.style.backgroundColor = "hsl(216, 50%, 16%)";
div.style.width = "350px";
div.style.borderRadius = "20px";
div.style.padding = "20px";
div.style.fontFamily = "Outfit, sans-serif";
div.style.fontSize = "18px";
div.style.textAlign = "center";
div.style.margin = "20px";
parents.append(div);
const imgLink = document.createElement("a"); //imgLink
imgLink.href = "#";
wrapper.append(imgLink);
const img = document.createElement("img"); // img
img.setAttribute("src", "images/image-equilibrium.jpg");
imgLink.appendChild(img);
img.style.width = "100%";
img.style.borderRadius = "15px";

const titleParent = document.createElement("h3"); //titleParent
titleParent.style.textAlign = "left";
wrapper.append(titleParent);

const title = document.createElement("a"); // Title (Equilibrium #3429)
title.href = "#";
title.innerText = " Equilibrium #3429";
title.style.color = "hsl(0, 0%, 100%)";
title.style.textDecoration = "none";
title.style.fontWeight = "700";
titleParent.appendChild(title);
title.onmouseenter = function () {
  // hover
  this.style.color = "rgb(26, 238, 220)";
};
title.onmouseleave = function () {
  // курсор ушёл с элемента-родителя
  this.style.color = "hsl(0, 0%, 100%)";
};

const text = document.createElement("p"); // Text about
text.innerText = "Our Equilibrium collection promotes balance and calm.";
text.style.lineHeight = "30px";
text.style.textAlign = "left";
text.style.color = "hsl(215, 51%, 70%)";
wrapper.append(text);

const balanceTimeGrandParent = document.createElement("div"); // balanceTimeGrandParentgrand-parent
wrapper.append(balanceTimeGrandParent);
balanceTimeGrandParent.style.display = "flex";
balanceTimeGrandParent.style.justifyContent = "space-between";
const balanceParent = document.createElement("div"); //balanceParent
balanceParent.style.display = "flex";
balanceParent.style.alignItems = "center";
balanceTimeGrandParent.appendChild(balanceParent);
const balanceIcon = document.createElement("img"); // icon
balanceIcon.setAttribute("src", "images/icon-ethereum.svg");
balanceIcon.style.width = "13px";
balanceIcon.style.marginRight = "10px";
balanceParent.appendChild(balanceIcon);
const balance = document.createElement("span"); // (0.041 ETH)
balance.innerText = "0.041 ETH ";
balance.style.color = "hsl(178, 100%, 50%)";
balance.style.fontWeight = "600";
balanceParent.appendChild(balance);

const timeParent = document.createElement("div"); //timeParent
timeParent.style.display = "flex";
timeParent.style.alignItems = "center";
balanceTimeGrandParent.appendChild(timeParent);
const timeIcon = document.createElement("img"); // icon
timeIcon.setAttribute("src", "images/icon-clock.svg");
timeIcon.style.width = "20px";
timeIcon.style.marginRight = "5px";
timeParent.appendChild(timeIcon);
const time = document.createElement("span"); // Time
time.innerText = " 3 days left ";
time.style.color = "hsl(215, 51%, 70%)";
timeParent.appendChild(time);

const line = document.createElement("hr"); // Line
line.style.margin = "20px 0";
line.style.borderColor = "hsl(215, 32%, 27%)";
wrapper.append(line);

const footer = document.createElement("div"); //footer div - panent
wrapper.append(footer);
footer.style.display = "flex";
footer.style.alignItems = "center";

const img2 = document.createElement("img"); // Изображение челевека
img2.setAttribute("src", " images/image-avatar.png");
img2.style.borderRadius = "100%";
img2.style.border = "2px solid white";
img2.style.width = "40px";
img2.style.marginRight = "20px";
footer.appendChild(img2);

const creation = document.createElement("span"); // last text
footer.appendChild(creation);
creation.innerText = "Creation of ";
creation.style.color = "hsl(215, 51%, 70%)";
const creationLink = document.createElement("a"); //last text link
creation.appendChild(creationLink);
creationLink.href = "#";
creationLink.innerText = " Jules Wyvern";
creationLink.style.color = "hsl(0, 0%, 100%)";
creationLink.style.textDecoration = "none";
creationLink.onmouseenter = function () {
  // hover
  this.style.color = "rgb(26, 238, 220)";
};
creationLink.onmouseleave = function () {
  // курсор ушёл с элемента-родителя
  this.style.color = "hsl(0, 0%, 100%)";
};

const wrapper2 = wrapper.cloneNode(true); //card2
wrapper2.id = "wrapper2";
document.body.append(wrapper2);
parents.appendChild(wrapper2);

alert("Я оцениваю свою работу на 110 баллов");
