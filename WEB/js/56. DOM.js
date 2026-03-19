// DOM = DOCUMENT OBJECT MODEL
//       Object{} that represents the page you see in the web browser and
//       provides you with an API to interact with it.
//       Web Browser constructs the DOM when it loads an HTML document,
//       and structures all the elements in a tree-like representation.
//       Javascript can access the DOM to dynamically
//       change the content, structure, and style of a web page.

// console.log(document);
// console.dir(document);

const username = "Rai Kashif Ali";
const welcomeMessage = document.getElementById("message");
welcomeMessage.textContent += username === ""? 'Guest': username;