const container = document.querySelector(".container"),
  block = document.getElementsByClassName("block"),
  newDimensions = document.querySelector(".new-grid"),
  wipe = document.querySelector(".wipe-grid");

// Creating grid based on dimensions provided by user
function boardSize(dimensions) {
  // Applying grid columns to container based on prompt using object literals
  container.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`;
  // Nested for loop to inject divs into DOM
  for (let i = 0; i < dimensions; i++) {
    for (let j = 0; j < dimensions; j++) {
      // Creating divs (blocks)
      const block = document.createElement("div");
      // Adding classlist to the newly created divs
      block.classList.add("block");
      // Applying base styles
      block.style = "background-color: white; border: 1px solid black";
      // Attaching newly created blocks to the container parent
      container.appendChild(block);
    }
  }
}
// Taking input from user on game board size
dimensions = prompt("Choose your canvas size between 4 and 64");
boardSize(dimensions);

// Function to change to colour of the divs once hovered over
function onHover() {
  // Grabbing the container and attaching an event listener to it.
  container.addEventListener("mouseover", (e) => {
    // Changing the colour randomly once hovered over
    e.target.style.backgroundColor =
      "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  });
}
onHover();

// Buttons Below

// "New Grid Size" function, generates a new game board based on prompt input
function newGrid() {
  // Grabbing "New Grid Size" button and attaching event listener
  newDimensions.addEventListener("click", function () {
    // Looping through all the blocks and deleting them
    container.querySelectorAll(".block").forEach((block) => block.remove());
    // Prompt will then grab the new dimensions from the user
    dimensions = prompt(
      "Choose a new size between 4 and 64 to create a new board!"
    );
    // Then call the function to create a new game board
    boardSize(dimensions);
  });
}
newGrid();

// Resetting grid back to initial state, will NOT change the size
function resetGrid() {
  // Grabbing the "Wipe Grid" button and attaching a click event to it
  wipe.addEventListener("click", (e) => {
    // Using the initial dimensions provided to reset the grid
    for (let i = 0; i < block.length; i++) {
      // Making the divs white again, i.e. resetting
      block[i].style.backgroundColor = "white";
    }
  });
}
resetGrid();
