document.addEventListener("DOMContentLoaded", start);
console.log("DOMContentLoaded");

function start() {
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

  img1.src = "https://placeimg.com/640/480/arch";

  img1.alt = "dette er en alt tekst";

  img2.src = "https://placeimg.com/640/480/arch";

  img2.alt = "dette er en alt tekst";

  const til_article = document.querySelector(".grid");
  let article3 = document.createElement("article");
  til_article.appendChild(article3);

  const h3_01 = document.createElement("h3");
  let h3_tekst = document.createTextNode("Article 3");
  h3_01.appendChild(h3_tekst);

  const p_01 = document.createElement("p");
  let p_tekst = document.createTextNode(
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet maxime alias quis earum ab voluptate, expedita harum, corruptidolore iusto officia vero rem quia culpa provident facere. Solutafacilis veritatis fugit? Excepturi debitis qui asperiores earumadipisci at consequuntur, ea maxime quasi? Omnis ea id ipsam aliquamaspernatur harum. Totam."
  );
  p_01.appendChild(p_tekst);

  const img_01 = document.createElement("img");
  img_01.src = "https://placeimg.com/640/480/arch";

  article3.appendChild(img_01);
  article3.appendChild(h3_01);
  article3.appendChild(p_01);
}
