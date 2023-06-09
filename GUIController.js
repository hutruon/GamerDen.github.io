const gamesDiv = document.getElementById('threeGamesDiv');
const gamesSelectDiv = document.getElementById('gameSelectionDiv');
const SnakeGame = document.getElementById('game1');
const BubbleGame = document.getElementById('game2');
const BreakoutGame = document.getElementById('game3');
const backButton = document.getElementById('backButton');
const gameSelectionButtons = document.querySelectorAll('.threeGamesDiv button');
const changeBackgroundButton = document.getElementById('changeBackgroundButton');
const revertBackgroundButton = document.getElementById('revertBackgroundButton');
const body = document.getElementsByTagName('body')[0];
const playMusicButton = document.getElementById("playMusicButton");
const muteButton = document.getElementById("muteButton");
const backgroundMusic = document.getElementById("background-music");
const snakeSound = document.getElementById("snake-sound");
const bubbleSound = document.getElementById("bubble-sound");
const breakoutSound = document.getElementById("breakout-sound");
var user = document.getElementById("user");
var pword = document.getElementById("password");

//Constants for Help menu
const helpButtonDashboard = document.getElementById("helpButtonDashboard");
const helpDropdown = document.getElementById("helpDropdown");
const gamePlaySubMenu = document.querySelector('.submenu:nth-of-type(1) .sub-dropdown');
const arrowSound = new Audio('arrow.mp3');
const snakeMovingSound = new Audio('arrow.mp3');
const paddleMovingSound = new Audio('arrow.mp3');
var currentGameSound;
var isMuted = false;
let muteButtonClicked = false;
let pauseButtonClicked = false;
function createPopupaAD() {
    const messages = [
        "THIS WOULD BE AN AD",
        "USING AN API",
        "BUT I DON'T WANT TO GET CHARGED",
        "SO I USE THIS MESSAGE INSTEAD",
    ];
    let currentIndex = 0;
    const popupDiv = document.createElement("div");
    popupDiv.id = "popup-messages";
    popupDiv.style.position = "absolute";
    popupDiv.style.right = "150px";
    popupDiv.style.top = "150px";
    popupDiv.style.backgroundColor = "#f1f1f1";
    popupDiv.style.padding = "20px";
    popupDiv.style.border = "2px solid #888";
    popupDiv.style.zIndex = 1000;
    document.body.appendChild(popupDiv);

    // Position the popupDiv below the playMusicButton
    const playMusicButton = document.getElementById("playMusicButton");
    const playMusicButtonRect = playMusicButton.getBoundingClientRect();
    popupDiv.style.top = playMusicButtonRect.bottom + 10 + "px";

    const updateMessage = () => {
        popupDiv.innerHTML = messages[currentIndex];
        currentIndex = (currentIndex + 1) % messages.length;
        setTimeout(updateMessage, 5000);
    };
    updateMessage();
}

function showEasterEgg() {
    const easterEggImage = document.getElementById("easterEggImage");
    easterEggImage.style.display = "block";
    setTimeout(hideEasterEgg, 10000); // Hide the image after 10 seconds
}

function hideEasterEgg() {
    const easterEggImage = document.getElementById("easterEggImage");
    easterEggImage.style.display = "none";
}

function checkForEasterEgg() {
    if (muteButtonClicked && pauseButtonClicked) {
        showEasterEgg();
    }
}
// Set loop property for each sound element
backgroundMusic.loop = true;
snakeSound.loop = true;
bubbleSound.loop = true;
breakoutSound.loop = true;

// Initially hide the mute button
muteButton.style.display = "none";

// Play music function
function playMusic() {
    if (!isMuted) {
        if (currentGameSound) {
            currentGameSound.play();
        } else {
            backgroundMusic.play();
        }
        playMusicButton.style.display = "none";
        muteButton.style.display = "inline";
    }
}

// Mute function
function toggleMute() {
    isMuted = !isMuted;

    if (isMuted) {
        if (currentGameSound) {
            currentGameSound.pause();
        } else {
            backgroundMusic.pause();
        }
        muteButton.textContent = "Unmute";
    } else {
        if (currentGameSound) {
            currentGameSound.play();
        } else {
            backgroundMusic.play();
        }
        muteButton.textContent = "Mute";
    }
}

// Update the current game sound when a game is clicked
function gameClicked(gameSound) {
    if (currentGameSound) {
        currentGameSound.pause();
    }
    backgroundMusic.pause(); // Pause the background theme
    currentGameSound = gameSound;
    playMusic();
}

//Check correct user
loginButton.onclick = function() {
  if(user.value === "SoggieMuffins" && pword.value === "1234"){
    document.getElementById("titleDiv").innerHTML = "Welcome to the Gamer Den, " + user.value + "!";
    hideLogin();
    unhideGames();
    hideGF();
  } else {
    document.getElementById("loginMessage").innerHTML = "Incorrect Username or Password."; 
  }
 };

function hideLogin(){
    document.getElementById("login").style.display = "none";
    document.getElementById("contents").hidden = true;
}

function unhideGames(){
   gamesDiv.hidden = false;
   gamesSelectDiv.hidden = false;
}


function hideGF(){
    document.getElementById("container").style.display = "none";
    document.getElementById('google-login').hidden = true;
    document.getElementById('facebook-login').hidden = true;
}

// Store the original background image URL
const originalBackgroundImage = body.style.backgroundImage;
backButton.addEventListener('click', function () {
    // Hide the selected game canvas and show the game selection buttons
    document.getElementById('Snake').hidden = true;
    document.getElementById('Bubble').hidden = true;
    document.getElementById('Breakout').hidden = true;
});

gameSelectionButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Show the selected game canvas and hide the game selection buttons
        const selectedGame = this.id;
        document.getElementById(selectedGame).hidden = false;
        document.getElementById('threeGamesDiv').hidden = true;
        // Show the back button
        backButton.hidden = false;
    });
});
gameSelectionButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Show the selected game canvas and hide the game selection buttons
        const selectedGame = this.id;
        document.getElementById(selectedGame).hidden = false;
        document.getElementById('threeGamesDiv').hidden = true;
        // Show the back button
        pauseButton.hidden = false;
    });
});
// Add event listener for when the mouse enters the button
changeBackgroundButton.addEventListener("mouseenter", function () {
    // Change the background color to a random color
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    changeBackgroundButton.style.backgroundColor = "#" + randomColor;
});

// Add event listener for when the mouse leaves the button
changeBackgroundButton.addEventListener("mouseleave", function () {
    // Change the background color back to its original color
    changeBackgroundButton.style.backgroundColor = "";
});
revertBackgroundButton.addEventListener("mouseenter", function () {
    // Change the background color to a random color
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    revertBackgroundButton.style.backgroundColor = "#" + randomColor;
});

// Add event listener for when the mouse leaves the button
revertBackgroundButton.addEventListener("mouseleave", function () {
    // Change the background color back to its original color
    revertBackgroundButton.style.backgroundColor = "";
});

// Add event listener for when the change background button is clicked
changeBackgroundButton.addEventListener('click', function () {
    const newBackgroundImage = prompt("Enter the URL of the new background image:");
    body.style.backgroundImage = `url(${newBackgroundImage})`;
});

// Add event listener for when the revert background button is clicked
revertBackgroundButton.addEventListener('click', function () {
    body.style.backgroundImage = originalBackgroundImage;
});

class Game {

    constructor() {

    }

    Snake() {

        var canvas = document.getElementById('Snake');
        var context = canvas.getContext('2d');
        canvas.style.display = 'block';
        canvas.style.backgroundColor = 'white';
        var isPaused = false;

        // Add these CSS properties to center the canvas
        canvas.style.position = 'absolute';
        canvas.style.top = '300%';
        canvas.style.left = '50%';
        canvas.style.transform = 'translate(-50%, -50%)';

        gamesDiv.style.display = 'none';

        // the canvas width & height, snake x & y, and the apple x & y, all need to be a multiples of the grid size in order for collision detection to work
        // (e.g. 16 * 25 = 400)
        var grid = 16;
        var count = 0;

        var snake = {
            x: 160,
            y: 160,

            // snake velocity. moves one grid length every frame in either the x or y direction
            dx: grid,
            dy: 0,

            // keep track of all grids the snake body occupies
            cells: [],

            // length of the snake. grows when eating an apple
            maxCells: 4
        };
        var apple = {
            x: 320,
            y: 320
        };

        // get random whole numbers in a specific range
        // @see https://stackoverflow.com/a/1527820/2124254
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        // initialize score to zero
        var score = 0;
        var startTime = Date.now();

        // create a div element to display the score
        var scoreDiv = document.createElement('div');
        scoreDiv.id = 'score';
        scoreDiv.textContent = 'Score: ' + score;
        scoreDiv.style.position = 'absolute';
        scoreDiv.style.top = '175px';
        scoreDiv.style.left = '750px';
        scoreDiv.style.fontFamily = 'Pacifico, cursive';
        scoreDiv.style.fontSize = "24px";
        scoreDiv.style.color = "White";
        document.body.appendChild(scoreDiv);
        var timerDiv = document.createElement('div');
        timerDiv.id = 'timer';
        timerDiv.style.position = 'absolute';
        timerDiv.style.top = '175px';
        timerDiv.style.left = '626px';
        timerDiv.style.fontFamily = 'Pacifico, cursive';
        timerDiv.style.fontSize = '24px';
        timerDiv.style.color = 'white';
        document.body.appendChild(timerDiv);

        // game loop
        function loop() {
            var elapsed = Date.now() - startTime;
            timerDiv.textContent = 'Time: ' + Math.floor(elapsed / 1000) + 's';


            if (!isPaused) {
                requestAnimationFrame(loop);

                // slow game loop to 15 fps instead of 60 (60/15 = 4)
                if (++count < 4) {
                    return;
                }

                count = 0;
                context.clearRect(0, 0, canvas.width, canvas.height);

                // move snake by it's velocity
                snake.x += snake.dx;
                snake.y += snake.dy;

                // wrap snake position horizontally on edge of screen
                if (snake.x < 0) {
                    snake.x = canvas.width - grid;
                }
                else if (snake.x >= canvas.width) {
                    snake.x = 0;
                }

                // wrap snake position vertically on edge of screen
                if (snake.y < 0) {
                    snake.y = canvas.height - grid;
                }
                else if (snake.y >= canvas.height) {
                    snake.y = 0;
                }

                // keep track of where snake has been. front of the array is always the head
                snake.cells.unshift({ x: snake.x, y: snake.y });

                // remove cells as we move away from them
                if (snake.cells.length > snake.maxCells) {
                    snake.cells.pop();
                }

                // draw apple
                context.fillStyle = 'red';
                context.fillRect(apple.x, apple.y, grid - 1, grid - 1);

                // draw snake one cell at a time
                context.fillStyle = 'green';
                snake.cells.forEach(function (cell, index) {

                    // drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
                    context.fillRect(cell.x, cell.y, grid - 1, grid - 1);

                    // snake ate apple
                    if (cell.x === apple.x && cell.y === apple.y) {
                        snake.maxCells++;
                
                        // canvas is 400x400 which is 25x25 grids
                        apple.x = getRandomInt(0, 25) * grid;
                        apple.y = getRandomInt(0, 25) * grid;
                
                        // increment score
                        score += 1;
                        scoreDiv.textContent = 'Score: ' + score;
                
                        // Play the eat sound

                        // // Play the eat sound
                        document.getElementById('eatSound').play();
                    }

                    // check collision with all cells after this one (modified bubble sort)
                    for (var i = index + 1; i < snake.cells.length; i++) {

                        // snake occupies same space as a body part. reset game
                        if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
                            snake.x = 160;
                            snake.y = 160;
                            snake.cells = [];
                            snake.maxCells = 4;
                            snake.dx = grid;
                            snake.dy = 0;
                            
                            apple.x = getRandomInt(0, 25) * grid;
                            apple.y = getRandomInt(0, 25) * grid;
                            score = 0;
                            scoreDiv.textContent = 'Score: ' + score;
                            startTime = Date.now();
                        }
                    }
                });
            }
            else {
                requestAnimationFrame(loop);
            }
        }
        function togglePause() {
            isPaused = !isPaused;
            if (isPaused) {
                document.getElementById("pauseButton").textContent = "Resume";
            } else {
                document.getElementById("pauseButton").textContent = "Pause";
            }
        }

        // listen to keyboard events to move the snake
        document.addEventListener('keydown', function (e) {
            // prevent snake from backtracking on itself by checking that it's
            // not already moving on the same axis (pressing left while moving
            // left won't do anything, and pressing right while moving left
            // shouldn't let you collide with your own body)

            // left arrow key
            if (e.which === 37 && snake.dx === 0) {
                snake.dx = -grid;
                snake.dy = 0;
                snakeMovingSound.play();
            }
            // up arrow key
            else if (e.which === 38 && snake.dy === 0) {
                snake.dy = -grid;
                snake.dx = 0;
                snakeMovingSound.play();
            }
            // right arrow key
            else if (e.which === 39 && snake.dx === 0) {
                snake.dx = grid;
                snake.dy = 0;
                snakeMovingSound.play();
            }
            // down arrow key
            else if (e.which === 40 && snake.dy === 0) {
                snake.dy = grid;
                snake.dx = 0;
                snakeMovingSound.play();
            }
        });
        //make awsd key
        document.addEventListener('keydown', function (e) {
            // left arrow key or A key
            if ((e.which === 37 || e.which === 65) && snake.dx === 0) {
                snake.dx = -grid;
                snake.dy = 0;
                snakeMovingSound.play();
            }
            // up arrow key or W key
            else if ((e.which === 38 || e.which === 87) && snake.dy === 0) {
                snake.dy = -grid;
                snake.dx = 0;
                snakeMovingSound.play();
                
            }
            // right arrow key or D key
            else if ((e.which === 39 || e.which === 68) && snake.dx === 0) {
                snake.dx = grid;
                snake.dy = 0;
                snakeMovingSound.play();
            }
            // down arrow key or S key
            else if ((e.which === 40 || e.which === 83) && snake.dy === 0) {
                snake.dy = grid;
                snake.dx = 0;
                snakeMovingSound.play();
            }
        });


        // start the game
        document.getElementById("pauseButton").addEventListener("click", togglePause);
        requestAnimationFrame(loop);
    }

    BubblePop() {
        var canvas = document.getElementById('Bubble');
        var context = canvas.getContext('2d');

        canvas.style.display = 'block';
        canvas.style.backgroundColor = 'white';

        // Add these CSS properties to center the canvas
        canvas.style.position = 'absolute';
        canvas.style.top = '300%';
        canvas.style.left = '50%';
        canvas.style.transform = 'translate(-50%, -50%)';
        var score = 0;
        var startTime = Date.now();

        // create a div element to display the score
        var scoreDiv = document.createElement('div');
        scoreDiv.id = 'score';
        scoreDiv.textContent = 'Score: ' + score;
        scoreDiv.style.position = 'absolute';
        scoreDiv.style.top = '175px';
        scoreDiv.style.left = '750px';
        scoreDiv.style.fontFamily = 'Pacifico, cursive';
        scoreDiv.style.fontSize = "24px";
        scoreDiv.style.color = "White";
        document.body.appendChild(scoreDiv);
        var timerDiv = document.createElement('div');
        timerDiv.id = 'timer';
        timerDiv.style.position = 'absolute';
        timerDiv.style.top = '175px';
        timerDiv.style.left = '626px';
        timerDiv.style.fontFamily = 'Pacifico, cursive';
        timerDiv.style.fontSize = '24px';
        timerDiv.style.color = 'white';
        document.body.appendChild(timerDiv);

        gamesDiv.style.display = 'none';
        // puzzle bubble is played on a hex grid. instead of doing complicated
        // math of working with a hex grid, we can just fill the screen with
        // bubbles in their correct positions. each bubble will start inactive,
        // meaning we pretend the bubble isn't there (don't draw it or count
        // it for collision). when the bubble we shoot collides with a wall
        // or another active bubble, we just find the closest inactive bubble
        // and make it active with the same color as the shot bubble. this
        // gives the illusion of the bubble snapping to a grid
        const grid = 32;

        // each even row is 8 bubbles long and each odd row is 7 bubbles long.
        // the level consists of 4 rows of bubbles of 4 colors: red, orange,
        // green, and yellow
        const level1 = [
            ['R', 'R', 'Y', 'Y', 'B', 'B', 'G', 'G'],
            ['R', 'R', 'Y', 'Y', 'B', 'B', 'G'],
            ['B', 'B', 'G', 'G', 'R', 'R', 'Y', 'Y'],
            ['B', 'G', 'G', 'R', 'R', 'Y', 'Y']
        ];

        // create a mapping between color short code (R, G, B, Y) and color name
        const colorMap = {
            'R': 'red',
            'G': 'green',
            'B': 'blue',
            'Y': 'yellow'
        };
        const colors = Object.values(colorMap);

        // use a 1px gap between each bubble
        const bubbleGap = 1;

        // the size of the outer walls for the game
        const wallSize = 4;
        const bubbles = [];
        let particles = [];

        // helper function to convert deg to radians
        function degToRad(deg) {
            return (deg * Math.PI) / 180;
        }

        // rotate a point by an angle
        function rotatePoint(x, y, angle) {
            let sin = Math.sin(angle);
            let cos = Math.cos(angle);

            return {
                x: x * cos - y * sin,
                y: x * sin + y * cos
            };
        }

        // get a random integer between the range of [min,max]
        // @see https://stackoverflow.com/a/1527820/2124254
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);

            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // get the distance between two points
        function getDistance(obj1, obj2) {
            const distX = obj1.x - obj2.x;
            const distY = obj1.y - obj2.y;
            return Math.sqrt(distX * distX + distY * distY);
        }

        // check for collision between two circles
        function collides(obj1, obj2) {
            return getDistance(obj1, obj2) < obj1.radius + obj2.radius;
        }

        // find the closest bubbles that collide with the object
        function getClosestBubble(obj, activeState = false) {
            const closestBubbles = bubbles
                .filter(bubble => bubble.active == activeState && collides(obj, bubble));

            if (!closestBubbles.length) {
                return;
            }

            return closestBubbles
                // turn the array of bubbles into an array of distances
                .map(bubble => {
                    return {
                        distance: getDistance(obj, bubble),
                        bubble
                    }
                })
                .sort((a, b) => a.distance - b.distance)[0].bubble;
        }

        // create the bubble grid bubble. passing a color will create
        // an active bubble
        function createBubble(x, y, color) {
            const row = Math.floor(y / grid);
            const col = Math.floor(x / grid);

            // bubbles on odd rows need to start half-way on the grid
            const startX = row % 2 === 0 ? 0 : 0.5 * grid;

            // because we are drawing circles we need the x/y position
            // to be the center of the circle instead of the top-left
            // corner like you would for a square
            const center = grid / 2;

            bubbles.push({
                x: wallSize + (grid + bubbleGap) * col + startX + center,

                // the bubbles are closer on the y axis so we subtract 4 on every
                // row
                y: wallSize + (grid + bubbleGap - 4) * row + center,

                radius: grid / 2,
                color: color,
                active: color ? true : false
            });
        }

        // get all bubbles that touch the passed in bubble
        function getNeighbors(bubble) {
            const neighbors = [];

            // check each of the 6 directions by "moving" the bubble by a full
            // grid in each of the 6 directions (60 degree intervals)
            // @see https://www.redblobgames.com/grids/hexagons/#angles
            const dirs = [
                // right
                rotatePoint(grid, 0, 0),
                // up-right
                rotatePoint(grid, 0, degToRad(60)),
                // up-left
                rotatePoint(grid, 0, degToRad(120)),
                // left
                rotatePoint(grid, 0, degToRad(180)),
                // down-left
                rotatePoint(grid, 0, degToRad(240)),
                // down-right
                rotatePoint(grid, 0, degToRad(300))
            ];

            for (let i = 0; i < dirs.length; i++) {
                const dir = dirs[i];

                const newBubble = {
                    x: bubble.x + dir.x,
                    y: bubble.y + dir.y,
                    radius: bubble.radius
                };
                const neighbor = getClosestBubble(newBubble, true);
                if (neighbor && neighbor !== bubble && !neighbors.includes(neighbor)) {
                    neighbors.push(neighbor);
                }
            }

            return neighbors;
        }

        // remove bubbles that create a match of 3 colors
        function removeMatch(targetBubble) {
            const matches = [targetBubble];

            bubbles.forEach(bubble => bubble.processed = false);
            targetBubble.processed = true;

            // loop over the neighbors of matching colors for more matches
            let neighbors = getNeighbors(targetBubble);
            for (let i = 0; i < neighbors.length; i++) {
                let neighbor = neighbors[i];

                if (!neighbor.processed) {
                    neighbor.processed = true;

                    if (neighbor.color === targetBubble.color) {
                        matches.push(neighbor);
                        neighbors = neighbors.concat(getNeighbors(neighbor));
                    }
                }
            }

            if (matches.length >= 3) {
                matches.forEach(bubble => {
                    bubble.active = false;
                });
                document.getElementById('BubblePopSound').play();
            }
        }

        // make any floating bubbles (bubbles that don't have a bubble chain
        // that touch the ceiling) drop down the screen
        function dropFloatingBubbles() {
            const activeBubbles = bubbles.filter(bubble => bubble.active);
            activeBubbles.forEach(bubble => bubble.processed = false);

            // start at the bubbles that touch the ceiling
            let neighbors = activeBubbles
                .filter(bubble => bubble.y - grid <= wallSize);

            // process all bubbles that form a chain with the ceiling bubbles
            for (let i = 0; i < neighbors.length; i++) {
                let neighbor = neighbors[i];

                if (!neighbor.processed) {
                    neighbor.processed = true;
                    neighbors = neighbors.concat(getNeighbors(neighbor));
                }
            }

            // any bubble that is not processed doesn't touch the ceiling
            activeBubbles
                .filter(bubble => !bubble.processed)
                .forEach(bubble => {
                    bubble.active = false;
                    // create a particle bubble that falls down the screen
                    particles.push({
                        x: bubble.x,
                        y: bubble.y,
                        color: bubble.color,
                        radius: bubble.radius,
                        active: true
                    });
                });
        }

        // fill the grid with inactive bubbles
        for (let row = 0; row < 10; row++) {
            for (let col = 0; col < (row % 2 === 0 ? 8 : 7); col++) {
                // if the level has a bubble at the location, create an active
                // bubble rather than an inactive one
                const color = level1[row]?.[col];
                createBubble(col * grid, row * grid, colorMap[color]);
            }
        }

        const curBubblePos = {
            // place the current bubble horizontally in the middle of the screen
            x: canvas.width / 2,
            y: canvas.height - grid * 1.5
        };
        const curBubble = {
            x: curBubblePos.x,
            y: curBubblePos.y,
            color: 'red',
            radius: grid / 2,  // a circles radius is half the width (diameter)

            // how fast the bubble should go in either the x or y direction
            speed: 8,

            // bubble velocity
            dx: 0,
            dy: 0
        };

        // angle (in radians) of the shooting arrow
        let shootDeg = 0;

        // min/max angle (in radians) of the shooting arrow
        const minDeg = degToRad(-60);
        const maxDeg = degToRad(60);

        // the direction of movement for the arrow (-1 = left, 1 = right)
        let shootDir = 0;

        // reset the bubble to shoot to the bottom of the screen
        function getNewBubble() {
            curBubble.x = curBubblePos.x;
            curBubble.y = curBubblePos.y;
            curBubble.dx = curBubble.dy = 0;

            const randInt = getRandomInt(0, colors.length - 1);
            curBubble.color = colors[randInt];
        }

        // handle collision between the current bubble and another bubble
        function handleCollision(bubble) {
            bubble.color = curBubble.color;
            bubble.active = true;
            getNewBubble();
            removeMatch(bubble);
            dropFloatingBubbles();
        }

        // game loop
        function loop() {
            var elapsed = Date.now() - startTime;
            timerDiv.textContent = 'Time: ' + Math.floor(elapsed / 1000) + 's';
            requestAnimationFrame(loop);
            context.clearRect(0, 0, canvas.width, canvas.height);

            // move the shooting arrow
            shootDeg = shootDeg + degToRad(2) * shootDir;

            // prevent shooting arrow from going below/above min/max
            if (shootDeg < minDeg) {
                shootDeg = minDeg;
            }
            else if (shootDeg > maxDeg) {
                shootDeg = maxDeg
            }

            // move current bubble by it's velocity
            curBubble.x += curBubble.dx;
            curBubble.y += curBubble.dy;

            // prevent bubble from going through walls by changing its velocity
            if (curBubble.x - grid / 2 < wallSize) {
                curBubble.x = wallSize + grid / 2;
                curBubble.dx *= -1;
            }
            else if (curBubble.x + grid / 2 > canvas.width - wallSize) {
                curBubble.x = canvas.width - wallSize - grid / 2;
                curBubble.dx *= -1;
            }

            // check to see if bubble collides with the top wall
            if (curBubble.y - grid / 2 < wallSize) {
                // make the closest inactive bubble active
                const closestBubble = getClosestBubble(curBubble);
                handleCollision(closestBubble);
            }
            function getClosestBubble(obj, activeState = false) {
                const closestBubbles = bubbles
                    .filter(bubble => bubble.active == activeState && collides(obj, bubble));
            
                if (!closestBubbles.length) {
                    return;
                }
            
                const closestBubble = closestBubbles
                    // turn the array of bubbles into an array of distances
                    .map(bubble => {
                        return {
                            distance: getDistance(obj, bubble),
                            bubble
                        }
                    })
                    .sort((a, b) => a.distance - b.distance)[0].bubble;
            
                // if the closest bubble is inactive, activate it and add to the score
                if (!closestBubble.active) {
                    closestBubble.active = true;
                    closestBubble.color = obj.color;
                    score += 10; // add 10 points to the score
                    document.getElementById('score').textContent = 'Score: ' + score;
                }
            
                return closestBubble;
            }

            // check to see if bubble collides with another bubble
            for (let i = 0; i < bubbles.length; i++) {
                const bubble = bubbles[i];

                if (bubble.active && collides(curBubble, bubble)) {
                    const closestBubble = getClosestBubble(curBubble);
                    if (!closestBubble) {
                        window.alert('Game Over');
                        window.location.reload();
                    }

                    if (closestBubble) {
                        handleCollision(closestBubble);
                    }
                }
            }

            // move bubble particles
            particles.forEach(particle => {
                particle.y += 8;
            });

            // remove particles that went off the screen
            particles = particles.filter(particles => particles.y < canvas.height - grid / 2);

            // draw walls
            context.fillStyle = 'lightgrey';
            context.fillRect(0, 0, canvas.width, wallSize);
            context.fillRect(0, 0, wallSize, canvas.height);
            context.fillRect(canvas.width - wallSize, 0, wallSize, canvas.height);

            // draw bubbles and particles
            bubbles.concat(particles).forEach(bubble => {
                if (!bubble.active) return;
                context.fillStyle = bubble.color;

                // draw a circle
                context.beginPath();
                context.arc(bubble.x, bubble.y, bubble.radius, 0, 2 * Math.PI);
                context.fill();
            });

            // draw fire arrow. since we're rotating the canvas we need to save
            // the state and restore it when we're done
            context.save();

            // move to the center of the rotation (the middle of the bubble)
            context.translate(curBubblePos.x, curBubblePos.y);
            context.rotate(shootDeg);

            // move to the top-left corner of or fire arrow
            context.translate(0, -grid / 2 * 4.5);

            // draw arrow ↑
            context.strokeStyle = 'black';
            context.lineWidth = 2;
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(0, grid * 2);
            context.moveTo(0, 0);
            context.lineTo(-10, grid * 0.4);
            context.moveTo(0, 0);
            context.lineTo(10, grid * 0.4);
            context.stroke();

            context.restore();

            // draw current bubble
            context.fillStyle = curBubble.color;
            context.beginPath();
            context.arc(curBubble.x, curBubble.y, curBubble.radius, 0, 2 * Math.PI);
            context.fill();
        }

        // listen for keyboard events to move the fire arrow
        document.addEventListener('keydown', (e) => {
            if (e.code === 'ArrowLeft') {
                shootDir = -1;
                arrowSound.play();
            }
            else if (e.code === 'ArrowRight') {
                shootDir = 1;
                arrowSound.play();
            }

            // if the current bubble is not moving we can launch it
            if (e.code === 'Space' && curBubble.dx === 0 && curBubble.dy === 0) {
                // convert an angle to x/y
                curBubble.dx = Math.sin(shootDeg) * curBubble.speed;
                curBubble.dy = -Math.cos(shootDeg) * curBubble.speed;
            }
        });

        // listen for keyboard events to stop moving the fire arrow if key is
        // released
        document.addEventListener('keyup', (e) => {
            if (
                // only reset shoot dir if the released key is also the current
                // direction of movement. otherwise if you press down both arrow
                // keys at the same time and then release one of them, the arrow
                // stops moving even though you are still pressing a key
                (e.code === 'ArrowLeft' && shootDir === -1) ||
                (e.code === 'ArrowRight' && shootDir === 1)
            ) {
                shootDir = 0;
            }
        });
        document.addEventListener('keydown', (e) => {
            if (e.code === 'KeyA') { // A key pressed
                shootDir = -1;
            } else if (e.code === 'KeyD') { // D key pressed
                shootDir = 1;
            }

            // if the current bubble is not moving we can launch it
            if (e.code === 'Space' && curBubble.dx === 0 && curBubble.dy === 0) {
                // convert an angle to x/y
                curBubble.dx = Math.sin(shootDeg) * curBubble.speed;
                curBubble.dy = -Math.cos(shootDeg) * curBubble.speed;
            }
        });

        // listen for keyboard events to stop moving the fire arrow if key is
        // released
        document.addEventListener('keyup', (e) => {
            if (
                // only reset shoot dir if the released key is also the current
                // direction of movement. otherwise if you press down both arrow
                // keys at the same time and then release one of them, the arrow
                // stops moving even though you are still pressing a key
                (e.code === 'KeyA' && shootDir === -1) ||
                (e.code === 'KeyD' && shootDir === 1)
            ) {
                shootDir = 0;
            }
        });

        // start the game
        requestAnimationFrame(loop);
    }

    Breakout() {
        var canvas = document.getElementById('Breakout');
        var context = canvas.getContext('2d');
        var isPaused = false;
        canvas.style.display = 'block';
        canvas.style.backgroundColor = 'white';

        // Add these CSS properties to center the canvas
        canvas.style.position = 'absolute';
        canvas.style.top = '300%';
        canvas.style.left = '50%';
        canvas.style.transform = 'translate(-50%, -50%)';
        var score = 0;
        var startTime = Date.now();

        // create a div element to display the score
        var scoreDiv = document.createElement('div');
        scoreDiv.id = 'score';
        scoreDiv.textContent = 'Score: ' + score;
        scoreDiv.style.position = 'absolute';
        scoreDiv.style.top = '120px';
        scoreDiv.style.left = '750px';
        scoreDiv.style.fontFamily = 'Pacifico, cursive';
        scoreDiv.style.fontSize = "24px";
        scoreDiv.style.color = "White";
        document.body.appendChild(scoreDiv);
        var timerDiv = document.createElement('div');
        timerDiv.id = 'timer';
        timerDiv.style.position = 'absolute';
        timerDiv.style.top = '120px';
        timerDiv.style.left = '626px';
        timerDiv.style.fontFamily = 'Pacifico, cursive';
        timerDiv.style.fontSize = '24px';
        timerDiv.style.color = 'white';
        document.body.appendChild(timerDiv);

        gamesDiv.style.display = 'none';

        // each row is 14 bricks long. the level consists of 6 blank rows then 8 rows
        // of 4 colors: red, orange, green, and yellow
        const level1 = [
            [],
            [],
            [],
            [],
            [],
            [],
            ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'],
            ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R'],
            ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
            ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
            ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'],
            ['G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G', 'G'],
            ['Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y'],
            ['Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y', 'Y']
        ];

        // create a mapping between color short code (R, O, G, Y) and color name
        const colorMap = {
            'R': 'red',
            'O': 'orange',
            'G': 'green',
            'Y': 'yellow'
        };
        // use a 2px gap between each brick
        const brickGap = 2;
        const brickWidth = 25;
        const brickHeight = 12;

        // the wall width takes up the remaining space of the canvas width. with 14 bricks
        // and 13 2px gaps between them, thats: 400 - (14 * 25 + 2 * 13) = 24px. so each
        // wall will be 12px
        const wallSize = 12;
        const bricks = [];

        // create the level by looping over each row and column in the level1 array
        // and creating an object with the bricks position (x, y) and color
        for (let row = 0; row < level1.length; row++) {
            for (let col = 0; col < level1[row].length; col++) {
                const colorCode = level1[row][col];

                bricks.push({
                    x: wallSize + (brickWidth + brickGap) * col,
                    y: wallSize + (brickHeight + brickGap) * row,
                    color: colorMap[colorCode],
                    width: brickWidth,
                    height: brickHeight
                });
            }
        }
        const paddle = {
            // place the paddle horizontally in the middle of the screen
            x: canvas.width / 2 - brickWidth / 2,
            y: 440,
            width: brickWidth,
            height: brickHeight,

            // paddle x velocity
            dx: 0
        };

        const ball = {
            x: 130,
            y: 260,
            width: 5,
            height: 5,

            // how fast the ball should go in either the x or y direction
            speed: 2,

            // ball velocity
            dx: 0,
            dy: 0
        };

        // check for collision between two objects using axis-aligned bounding box (AABB)
        // @see https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
        function collides(obj1, obj2) {
            var isColliding = obj1.x < obj2.x + obj2.width &&
                obj1.x + obj1.width > obj2.x &&
                obj1.y < obj2.y + obj2.height &&
                obj1.y + obj1.height > obj2.y;
        
            if (isColliding) {
                // check if the colliding object is a brick
                if (obj2.color) {
                    // remove the brick from the bricks array
                    bricks.splice(bricks.indexOf(obj2), 1);
        
                    // increment the score counter
                    score++;
        
                    // update the score displayed in the scoreDiv element
                    scoreDiv.textContent = 'Score: ' + score;
                }
                document.getElementById('CollideSound').play();
            }
        
            return isColliding;
        }
        // game loop
        function loop() {
            var elapsed = Date.now() - startTime;
            timerDiv.textContent = 'Time: ' + Math.floor(elapsed / 1000) + 's';
            if (!isPaused) {
                requestAnimationFrame(loop);
                context.clearRect(0, 0, canvas.width, canvas.height);

                // move paddle by it's velocity
                paddle.x += paddle.dx;

                // prevent paddle from going through walls
                if (paddle.x < wallSize) {
                    paddle.x = wallSize
                }
                else if (paddle.x + brickWidth > canvas.width - wallSize) {
                    paddle.x = canvas.width - wallSize - brickWidth;
                }

                // move ball by it's velocity
                ball.x += ball.dx;
                ball.y += ball.dy;

                // prevent ball from going through walls by changing its velocity
                // left & right walls
                if (ball.x < wallSize) {
                    ball.x = wallSize;
                    ball.dx *= -1;
                }
                else if (ball.x + ball.width > canvas.width - wallSize) {
                    ball.x = canvas.width - wallSize - ball.width;
                    ball.dx *= -1;
                }
                // top wall
                if (ball.y < wallSize) {
                    ball.y = wallSize;
                    ball.dy *= -1;
                }

                // reset ball if it goes below the screen
                if (ball.y > canvas.height) {
                    ball.x = 130;
                    ball.y = 260;
                    ball.dx = 0;
                    ball.dy = 0;
                }

                // check to see if ball collides with paddle. if they do change y velocity
                if (collides(ball, paddle)) {
                    ball.dy *= -1;

                    // move ball above the paddle otherwise the collision will happen again
                    // in the next frame
                    ball.y = paddle.y - ball.height;
                }

                // check to see if ball collides with a brick. if it does, remove the brick
                // and change the ball velocity based on the side the brick was hit on
                for (let i = 0; i < bricks.length; i++) {
                    const brick = bricks[i];

                    if (collides(ball, brick)) {
                        // remove brick from the bricks array
                        bricks.splice(i, 1);

                        // ball is above or below the brick, change y velocity
                        // account for the balls speed since it will be inside the brick when it
                        // collides
                        if (ball.y + ball.height - ball.speed <= brick.y ||
                            ball.y >= brick.y + brick.height - ball.speed) {
                            ball.dy *= -1;
                        }
                        // ball is on either side of the brick, change x velocity
                        else {
                            ball.dx *= -1;
                        }

                        break;
                    }
                }

                // draw walls
                context.fillStyle = 'lightgrey';
                context.fillRect(0, 0, canvas.width, wallSize);
                context.fillRect(0, 0, wallSize, canvas.height);
                context.fillRect(canvas.width - wallSize, 0, wallSize, canvas.height);

                // draw ball if it's moving
                if (ball.dx || ball.dy) {
                    context.fillRect(ball.x, ball.y, ball.width, ball.height);
                }

                // draw bricks
                bricks.forEach(function (brick) {
                    context.fillStyle = brick.color;
                    context.fillRect(brick.x, brick.y, brick.width, brick.height);
                });

                // draw paddle
                context.fillStyle = 'cyan';
                context.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
            }
            else {
                requestAnimationFrame(loop);
            }
        }
        function togglePause() {
            isPaused = !isPaused;
            if (isPaused) {
                document.getElementById("pauseButton").textContent = "Resume";
            } else {
                document.getElementById("pauseButton").textContent = "Pause";
            }
        }

        // listen to keyboard events to move the paddle
        document.addEventListener('keydown', function (e) {
            // left arrow key
            if (e.which === 37) {
                paddle.dx = -3;
                paddleMovingSound.play();

            }
            // right arrow key
            else if (e.which === 39) {
                paddle.dx = 3;
                paddleMovingSound.play();

            }

            // space key
            // if they ball is not moving, we can launch the ball using the space key. ball
            // will move towards the bottom right to start
            if (ball.dx === 0 && ball.dy === 0 && e.which === 32) {
                ball.dx = ball.speed;
                ball.dy = ball.speed;
            }
        });

        // listen to keyboard events to stop the paddle if key is released
        document.addEventListener('keyup', function (e) {
            if (e.which === 37 || e.which === 39) {
                paddle.dx = 0;
            }
            document.addEventListener('keydown', function (e) {
                // A key
                if (e.which === 65) {
                    paddle.dx = -3;
                    paddleMovingSound.play();

                }
                // D key
                else if (e.which === 68) {
                    paddle.dx = 3;
                    paddleMovingSound.play();;

                }

                // W key
                // if the ball is not moving, we can launch the ball using the W key. ball
                // will move towards the bottom right to start
                if (ball.dx === 0 && ball.dy === 0 && e.which === 87) {
                    ball.dx = ball.speed;
                    ball.dy = ball.speed;
                }
            });

            // listen to keyboard events to stop the paddle if key is released
            document.addEventListener('keyup', function (e) {
                if (e.which === 65 || e.which === 68) {
                    paddle.dx = 0;
                }
            });
        });

        // start the game
        document.getElementById("pauseButton").addEventListener("click", togglePause);
        requestAnimationFrame(loop);
    }

}

const games = new Game();

SnakeGame.onclick = function () {
    games.Snake();
    gameClicked(snakeSound);
};
BubbleGame.onclick = function () {
    games.BubblePop();
    gameClicked(bubbleSound);
};
BreakoutGame.onclick = function () {
    games.Breakout();
    gameClicked(breakoutSound);
}

backButton.addEventListener("click", function () {
    window.location.href = "https://htmlpreview.github.io/?https://github.com/hutruon/GamerDen.github.io/blob/main/dashboard.html";
});

// Add event listener for when the mouse enters the button
backButton.addEventListener("mouseenter", function () {
    // Change the background color to a random color
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    backButton.style.backgroundColor = "#" + randomColor;
});

// Add event listener for when the mouse leaves the button
backButton.addEventListener("mouseleave", function () {
    // Change the background color back to its original color
    backButton.style.backgroundColor = "";
});

// Event listener for the play button
playMusicButton.addEventListener("click", playMusic);

// Event listener for the mute button
muteButton.addEventListener("click", toggleMute);

// Add event listener for when the mouse enters the button
playMusicButton.addEventListener("mouseenter", function () {
    // Change the background color to a random color
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    playMusicButton.style.backgroundColor = "#" + randomColor;
});

// Add event listener for when the mouse leaves the button
playMusicButton.addEventListener("mouseleave", function () {
    // Change the background color back to its original color
    playMusicButton.style.backgroundColor = "";
});

// Add event listener for when the mouse enters the button
muteButton.addEventListener("mouseenter", function () {
    // Change the background color to a random color
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    muteButton.style.backgroundColor = "#" + randomColor;
});

// Add event listener for when the mouse leaves the button
muteButton.addEventListener("mouseleave", function () {
    // Change the background color back to its original color
    muteButton.style.backgroundColor = "";
});

pauseButton.addEventListener("mouseenter", function () {
    // Change the background color to a random color
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    pauseButton.style.backgroundColor = "#" + randomColor;
});

// Add event listener for when the mouse leaves the button
pauseButton.addEventListener("mouseleave", function () {
    // Change the background color back to its original color
    pauseButton.style.backgroundColor = "";
});


muteButton.addEventListener("click", function () {
    muteButtonClicked = !muteButtonClicked;
    checkForEasterEgg();
});

pauseButton.addEventListener("click", function () {
    pauseButtonClicked = !pauseButtonClicked;
    checkForEasterEgg();
});

//-------------------------------------------------------------------------------------
//Help menu dashboard
// Add event listener for when the mouse enters the button
// This changes the color of the background
helpButtonDashboard.addEventListener("mouseenter", function() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    helpButtonDashboard.style.backgroundColor = "#" + randomColor;
    helpDropdown.style.display = "block";
});
// Add event listener for when the moouse leaves the button
// This reverts the color of the background
helpButtonDashboard.addEventListener("mouseleave", function() {
    helpButtonDashboard.style.backgroundColor = "";
});
// Add event listener for dropdown menu
helpDropdown.addEventListener("mouseenter", function() {
    helpDropdown.style.display = "block";
});
// Add event listener for dropdown menu
helpDropdown.addEventListener("mouseleave", function() {
    helpDropdown.style.display = "none";
});

//If user clicks snake game, update inner html of gameplay submenu
SnakeGame.addEventListener("click", function() {
  // Change the contents of the subdropdown menu
  gamePlaySubMenu.innerHTML = `
    <h2>Game Play - Snake</h2>
    <p>How to play:</p>
    <p>Collect the red squares that appear on screen. Each square 
    will make the snake grow one square. If you hit your own snake, it's game over.</p>
  `;
});
//If user clicks Bubble pop game, update inner html of gameplay submenu
BubbleGame.addEventListener("click", function() {
    // Change the contents of the subdropdown menu
    gamePlaySubMenu.innerHTML = `
      <h2>Game Play - Bubble Pop</h2>
      <p>Point the arrow towards the corresponding color of your current color. 
      Avoid hitting non-corresponding colors and filling the page full of bubbles.</p>
    `;
  });
//If user clicks Bubble pop game, update inner html of gameplay submenu
BreakoutGame.addEventListener("click", function() {
    // Change the contents of the subdropdown menu
    gamePlaySubMenu.innerHTML = `
      <h2>Game Play - Breakout</h2>
      <p>Press the space bar to start. The goal is to break through the blocks by bouncing 
      the ball against the blue paddle.</p>
    `;
  });

createPopupaAD();
