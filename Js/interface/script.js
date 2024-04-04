// Get a reference to the parent element with id "parent"
const parent = document.getElementById("parent");

// Create a new <div> element dynamically
const child = document.createElement("div");

// Set some attributes or content to the new <div> element
child.textContent = "This is a dynamically created child element.";

// Append (കൂട്ടിച്ചേർക്കുക)  the new <div> element as a child to the parent element
// parent.removeChild(child); 
parent.appendChild(child);

// Later, you can remove the child element from the parent element like this:
setTimeout(() => {
    parent.removeChild(child);
}, 10000);

// പുതിയ <div> element ne parent lekk ഒരു child aayi append cheyyuka (കൂട്ടിച്ചേർക്കുക).
