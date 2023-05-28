let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");


// Size of each square
const squareSize = 40;

// Initial position of the snake
let snake = [{x: 10, y: 10}, {x: 9, y: 10}];

// Initial direction of the snake
let direction = "right";

// Position of the food
let foodLocation = {x: Math.floor(Math.random() * canvas.width / squareSize), y: Math.floor(Math.random() * canvas.height / squareSize)};

//To avoid two keys being pressed at the same time
let changingDirection = false;

// Score counter
let score = 0;

let head;


const boardPic = new Image();
boardPic.src = 'Images/BoardFigma.png';

const foodPic = new Image();
foodPic.src = 'Images/Apple.png'

const snakeHeadPic = new Image();
snakeHeadPic.src = 'Images/SnakeHead.png'


// Main update loop
function update() {

// Clear the canvas
context.clearRect(0, 0, canvas.width, canvas.height);

// Draw the background image
context.drawImage(boardPic, 0, 0, canvas.width, canvas.height);

  head = {x: snake[0].x, y: snake[0].y};
  
  // Snake movement 
  switch (direction) {
    case "up":
      head.y -= 1;
      break;
    case "down":
      head.y += 1;
      break;
    case "left":
      head.x -= 1;
      break;
    case "right":
      head.x += 1;
      break;
  }
  snake.unshift(head);

  // Check for collision with the food
  if (head.x == foodLocation.x && head.y == foodLocation.y) {
    foodLocation = {x: Math.floor(Math.random() * canvas.width / squareSize), y: Math.floor(Math.random() * canvas.height / squareSize)};
    score++; // Increase the score when the snake eats the food
  } else {
    snake.pop();
  }

  // Check for collision with the walls
  if (head.x < 0 || head.y < 0 || head.x >= canvas.width / squareSize || head.y >= canvas.height / squareSize) {
    clearInterval(intervalId);
    alert("Wall collision! Your score: " + score);
  }

  // Check for collision with the snake's body
  for (var i = 1; i < snake.length; i++) {
    if (head.x == snake[i].x && head.y == snake[i].y) {
      clearInterval(intervalId);
      alert("You hit your body! Your score: " + score);
    }
  }

  //Snake filling
  for (var i = 0; i < snake.length; i++) {
    // context.fillRect(snake[i].x * squareSize, snake[i].y * squareSize, squareSize, squareSize);
    context.drawImage(snakeHeadPic,snake[i].x * squareSize, snake[i].y * squareSize, squareSize, squareSize)
  }

  // Food filling 
  context.drawImage(foodPic,foodLocation.x*squareSize,foodLocation.y*squareSize)
 


  // Display the score
  context.fillStyle = "white";
  context.font = "25px Nunito";
  context.fillText("Score: " + score, 10, 20);

  changingDirection = false;
}

// Start the update loop
let intervalId = setInterval(update, 70);


// Check for keyboard events to change the direction of the snake
document.addEventListener("keydown", function(change) {
    console.log("key detected")
    if (!changingDirection){
    changingDirection = true;
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
        }
        );
    

    



     
    
