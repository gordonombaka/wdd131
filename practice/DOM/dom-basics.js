// Adding a paragraph

const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

// Adding an image

const newImg = document.createElement("img");
newImg.setAttribute("src", "https://picsum.photos/200");
newImg.setAttribute("alt", "Random Image from Picsum.");
document.body.appendChild(newImg);

// If we have more complex HTML to add we can insert a whole string in at once:

const newDiv = document.createElement("newDiv");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

/* Create a new section element.
Add an h2 element with the content "DOM Basics"
Add a paragraph p that says: "This was added through Javascript"
Add your section to the body.*/

const newSection = document.createElement("newSection");
newSection.innerHTML = "<h2> DOM Basics </h2> <p>This was added through Javascript</p>";
document.body.appendChild(newSection);

