const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


const text = document.createElement("p");
text.classList.add("color1")
text.textContent = "This text is red!";

document.getElementsByClassName("color1");
text.style.color = "red";

container.appendChild(text);


const header = document.createElement("h3")
header.classList.add("text1")
header.textContent = "Im a blue h3!"

document.getElementsByClassName("text1")
header.style.color = "blue"
container.appendChild(header)


const new_div = document.createElement("div");
const another_header = document.createElement("h1")
const another_p = document.createElement("p")

new_div.classList.add("border")

new_div.style.backgroundColor = "pink"
new_div.style.borderColor = "black"

document.getElementsByClassName("border")
new_div.style.borderWidth = "10px";


another_header.textContent = "Im in a div :3"
another_p.textContent = "ME TOO!"

new_div.appendChild(another_header)
new_div.appendChild(another_p)

container.appendChild(new_div)
