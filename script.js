//your JS code here. If required.
// Get the element with id "level"
let element = document.getElementById("level");

let level = 0;

// Traverse up the DOM tree until there are no more parents
while (element) {
  level++;
  element = element.parentElement;
}

// Display the level using alert
alert("The level of the element is: " + level);

