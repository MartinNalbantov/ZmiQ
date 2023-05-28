let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

// Size of each square
const squareSize = 20;

// Initial position of the snake
let snake = [{x: 10, y: 10}, {x: 9, y: 10}];

// Iinitial direction of the snake
let direction = "right";

// Position of the food
let food = {x: Math.floor(Math.random() * canvas.width / squareSize), y: Math.floor(Math.random() * canvas.height / squareSize)};

let head;
// Main update loop
function update() {
head = {x: snake[0].x, y: snake[0].y};
  // Snake movement 
  switch (direction) {
    case "up":
        console.log("move up");
      head.y -= 1;
      break;
    case "down":
        console.log("move down");
      head.y += 1;
      break;
    case "left":
        console.log("move left");
      head.x -= 1;
      break;
    case "right":
        console.log("move right");
      head.x += 1;
      break;
  }
  snake.unshift(head);

  // Check for collision with the food
  if (head.x == food.x && head.y == food.y) {
    food = {x: Math.floor(Math.random() * canvas.width / squareSize), y: Math.floor(Math.random() * canvas.height / squareSize)};
  } else {
    snake.pop();
  }

  // Check for collision with the walls
  if (head.x < 0 || head.y < 0 || head.x >= canvas.width / squareSize || head.y >= canvas.height / squareSize) {
    clearInterval(intervalId);
    alert("Wall collision!");
  }

  // Check for collision with the snake's body
  for (var i = 1; i < snake.length; i++) {
    if (head.x == snake[i].x && head.y == snake[i].y) {
      clearInterval(intervalId);
      alert("You hit your body!");
    }
  }

  // Background
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Snake filling
  context.fillStyle = "green";
  for (var i = 0; i < snake.length; i++) {
    context.fillRect(snake[i].x * squareSize, snake[i].y * squareSize, squareSize, squareSize);
  }

  // Food filling 
  context.fillStyle = "red";
  context.fillRect(food.x * squareSize, food.y * squareSize, squareSize, squareSize);
}

// Start the update loop
let intervalId = setInterval(update, 70);

// Check for keyboard events to change the direction of the snake
document.addEventListener("keydown", function(change) {
    console.log("key detected")
  switch (change.keyCode) {
    case 37: // left arrow ID
    console.log("left arrow");   
    if (direction!="right") {
        direction = "left";
      }
      break;

    case 38: // up arrow ID
    console.log("up arrow")
    if (direction!="down") {
    direction = "up";
    }
    break;
    
    case 39: // right arrow ID
    console.log("right arrow")
    if (direction!="left") {
    direction = "right";
    }
    break;
    
    case 40: // down arrow ID
    console.log("down arrow")
    if (direction!="up") {
    direction = "down";
    }
    break;

        }
        }
        );
    

    



     
    
