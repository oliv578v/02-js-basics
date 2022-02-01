const h1 = document.querySelector("h1");
console.log(h1);

const h2 = document.querySelector("h2");
console.log(h2);

const h3 = document.querySelector("h3");
console.log(h3);

const p1 = document.querySelector("article:first-child p");
console.log(p1);

const p2 = document.querySelector("article:nth-child(2) p");
console.log(p2);

const img1 = document.querySelector("article:first-child img");
console.log(img1);

const img2 = document.querySelector("article:nth-child(2) img");
console.log(img2);

h1.textContent = "javatitel";

h2.textContent = "javah2";

h3.textConent = "javah3";

p1.textContent = "Java tekst";

p2.textContent = "Java tekst";
