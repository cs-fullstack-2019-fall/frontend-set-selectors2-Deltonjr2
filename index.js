
//
// Print the first p tag to the console using the ID, class, and tag selectors.

console.log (document.getElementById("first"));

    // Print the special class using both the query selector and query all selector.
    let qsa=document.querySelectorAll(".special");
     for (let i=0; i<qsa.length; i++)
     {
         console.log (qsa[i]);
     }

let qsa2 =document.querySelector(".special");
console.log(qsa2);
document.getElementByTagName (h1)


// Change the color of the h1 statement to blue.
let h1eLs=document.getElementByTagName("h1");
{
    console.log(h1eLs);
}
for (let i=0;i<h1eLs.length; i++)
    h1els[i].style.color="blue";
    // Change the color of the lst p tag to yellow.

