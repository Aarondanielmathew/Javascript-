// document.body.children[2].children[0].href = "https://google.com";

// console.dir(document);
// alert();
// window.alert();

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://udemy.com";

let AnchorElement = document.querySelector("#external-link"); // a { color: red; }
anchorElement.href = "https://academind.com";

// ADD AN ELEMENT
// 1. Create the new Element

let newAnchorElement = document.createElement("a");

// 2. Get access to the parent element that should hold the new element

let firstParagraph = document.querySelector("p");

// 3. Insert the new element into parent element content

firstParagraph.append(newAnchorElement);

// REMOVE ELEMENTS
// 1. Select the element that should be removed 

let firstH1Element =  document.querySelector("h1");

// 2. Remove it!

firstH1Element.remove();

// MOVE ELEMENT 

firstParagraph.parentElement.append(firstParagraph);

// InnerHTML

firstParagraph.innerHTML = "Hi This is <strong>important!<strong/>";

