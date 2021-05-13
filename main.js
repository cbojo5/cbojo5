var mainHeading = document.getElementById("main-heading");
console.log(mainHeading);
mainHeading.textContent='New DOM Layout';
mainHeading.classList.remove("bg-dark");
mainHeading.classList.add("bg-success");

var pageHeader = document.getElementById("page-header");
console.log(pageHeader);
pageHeader.classList.remove("bg-dark");
mainHeading.classList.add("bg-success");



var para1 = document.getElementById("para1");
console.log(para1);
para1.textContent= 'The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.';

var para2 = document.getElementById("para2");
console.log(para2);
para2.textContent= 'The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.';

var Btn = document.getElementById("btn");
console.log(Btn);
var para4 = document.getElementById("para4");
console.log(para4);
Btn.addEventListener("click", () => {
    para4.textContent="The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.";

} )

let red = document.getElementById('red');
red.classList.remove('bg-white');
red.classList.add("bg-danger");

let blue = document.getElementById('blue');
blue.classList.remove('bg-white');
blue.classList.add("bg-primary");

let yellow = document.getElementById('yellow');
yellow.classList.remove('bg-white');
yellow.classList.add("bg-warning");

let green = document.getElementById('green');
green.classList.remove('bg-white');
green.classList.add("bg-success");

let black = document.getElementById('black');
black.classList.remove('bg-white');
black.classList.add("bg-dark");