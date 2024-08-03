const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);


// a <p> with red text that says “Hey I’m red!”
const hey = document.createElement("p");
hey.classList.add("hey");
hey.textContent = "Hey I'm red!"
hey.style.color = "red"

container.appendChild(hey);

// an <h3> with blue text that says “I’m a blue h3!”
const blue = document.createElement("h3");
blue.classList.add("blue");
blue.textContent = "I'm blue h3!";
blue.style.color = "blue";


container.appendChild(blue);

// a <div> with a black border and pink background color with the following elements inside of it:
const divContainer = document.createElement("div");
divContainer.classList.add("divContainer");
divContainer.style.border = "1px solid black"
divContainer.style.backgroundColor = "pink"

container.appendChild(divContainer)

    // another <h1> that says “I’m in a div”
const h1 = document.createElement("h1");
h1.classList.add("h1");
h1.textContent = "I'm in a div";
    
divContainer.appendChild(h1);

    // a <p> that says “ME TOO!”
    // Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.
const meToo = document.createElement("p");
meToo.classList.add("meToo");
meToo.textContent = "ME TOO!"
    
divContainer.appendChild(meToo);