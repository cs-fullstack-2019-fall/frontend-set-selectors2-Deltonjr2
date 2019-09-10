
//
// Print the first p tag to the console using the ID, class, and tag selectors.

console.log (document.getElementById("first"));
// !! : use inner text to get the text of an element 
    // Print the special class using both the query selector and query all selector.
    let qsa=document.querySelectorAll(".special");
     for (let i=0; i<qsa.length; i++)
     {
         console.log (qsa[i]);
         // !! : use inner text to get the text of an element 
     }

let qsa2 =document.querySelector(".special");
// !! : p.special 
console.log(qsa2);
// !! : use inner text to get the text of an element 
document.getElementByTagName (h1)
// !! : incomplete?


// Change the color of the h1 statement to blue.
// !! : getElementsByTagName()
let h1eLs=document.getElementByTagName("h1");
// !! : this code block isn't attached to anyhting 
{
    console.log(h1eLs);
}
for (let i=0;i<h1eLs.length; i++)
	// !! : this loop is missing a code block 
    h1els[i].style.color="blue";
    // Change the color of the lst p tag to yellow.

