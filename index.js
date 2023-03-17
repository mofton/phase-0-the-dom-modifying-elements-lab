// Write your code here!

const main = document.getElementById("main");
main.remove();
const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Bob is the champion";
document.body.append(newHeader);
// Code below is follow along/experimental.
const element = document.createElement("div");
document.body.append(element);
const ul = document.createElement("ul");
for (let i = 0; i < 3; i += 1) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}
element.append(ul);
const element2 = document.getElementById("main");
element2.style.height = "300px";
element2.style.backgroundColor = "#27647B";
element2.textContent = "You've changed what's on the screen!";
element2.style.fontSize = "24px";
element2.style.marginLeft = "30px";
element2.style.lineHeight = 2;
// element.remove();
