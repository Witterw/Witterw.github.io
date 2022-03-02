 //game variables
const gameOverSound = new Audio("../assets/sounds/gameover.mp3");
const music = new Audio("../assets/sounds/music.mp3");
      music.loop = true;
      music.volume = 0.5;
const debugModeIsOn = false;
const startKey = "s";
const restartKey = "r";
const hitboxColor = "#00FF02";
const destructionXPosition = -1000;
const spawnXPosition = canvas.width * 1.2
let gameState = "menu"; // menu, action or gameover

//baggrund
const baggrundImage = new Image(1920,1080);
    baggrundImage.src = "../assets/images/baggrund.png"
const baggrundxPosition = canvas.width/2;
const baggrundyPosition = canvas.height/2;


//highscores 
let highscores = [];

// bird variables
const birdImage = new Image(90, 90);
      birdImage.src = "../assets/images/bird.png";
const birdStartYPosition = 250;
const birdStartYSpeed = 0;
const birdStartYAccelleration = 0;
const birdBeginningYAccelleration = 0.7;
const birdXPosition = 250;
const birdHitboxRadius = 30;
const birdFlapSound = new Audio("../assets/sounds/flap.wav");
const birdFlapForce = -12;
const birdFlapKey = " ";
let birdYSpeed = birdStartYSpeed;
let birdYAccelleration = birdStartYAccelleration;
let birdYPosition = birdStartYPosition;
let birdCanFlap = false;


// score variables
const scoreImage = new Image(60, 60);
      scoreImage.src = "../assets/images/coin.png";
const scoreImageXPosition = 70;
const scoreImageYPosition = 70;
const scoreTextXPosition = 100;
const scoreTextYPosition = 90;
const scoreTextSize = 50;
const scoreTextColor = "yellow";
let scoreValue = 0;

// bitches variables
const bitchesImage = new Image(80, 80);
      bitchesImage.src = "../assets/images/bitches.png";
const bitchesImageXPosition = 70;
const bitchesImageYPosition = 130;
const bitchesTextXPosition = 100;
const bitchesTextYPosition = 150;
const bitchesTextSize = 50;
const bitchesTextColor = "yellow";
let bitchesValue = 0;

// fireball variables
const fireballImage = new Image(275, 275);
      fireballImage.src = "../assets/images/fireball.png";
const fireballXSpeed = -6;
const fireballHitboxRadius = 100;
const fireballSpawnInterval = 1900;
let fireballTimeSinceLastSpawn = fireballSpawnInterval;
let fireballs = [];

//explosion
const explosionImage = new Image(300, 300);
      explosionImage.src = "../assets/images/explosion-pixel-art-115633555132uir2zl9fd.png";


// coin variables
const coinSound = new Audio("../assets/sounds/coin.wav");
const coinImage = scoreImage;
const coinHitboxRadius = 30;
const coinXSpeed = -5;
const coinSpawnInterval = 1000;
const coinValue = 1;
let coinTimeSinceLastSpawn = coinSpawnInterval
let coins = [];

// bitch variables
const bitchSound = new Audio("../assets/sounds/coin.wav");
const bitchImage = new Image(90, 90);
      bitchImage.src = "../assets/images/birdfriend.png";
const bitchHitboxRadius = 30;
const bitchXSpeed = -5;
const bitchSpawnInterval = 7000;
const bitchValue = 1;
let bitchTimeSinceLastSpawn = bitchSpawnInterval
let bitchs = [];

// hus variables
const husImage = new Image(500, 500);
      husImage.src = "../assets/images/hus.png";
const husSpawnInterval = 4000; // milliseconds
const husXSpeed = -2;
let husTimeSinceLastSpawn = 0; // milliseconds
let huss = [
    {
        xPosition: canvas.width,
        yPosition: 852, 
    },
    {
        xPosition: canvas.width -500,
        yPosition: 852,  
    },
    {
        xPosition: canvas.width-1000,
        yPosition: 852, 
    },
];

// cloud variables
const cloudImage = new Image(200, 200);
      cloudImage.src = "../assets/images/cloud.png";
const cloudSpawnInterval = 3100; // milliseconds
const cloudXSpeed = -.9;
let cloudTimeSinceLastSpawn = 0; // milliseconds
let clouds = [
    {
        xPosition: canvas.width,
        yPosition: randomBetween(0, canvas.height/2), 
    },
    {
        xPosition: canvas.width -500,
        yPosition: randomBetween(0, canvas.height/2), 
    },
    {
        xPosition: canvas.width-1000,
        yPosition: randomBetween(0, canvas.height/2), 
    },
];

// menu text variables
const menuFirstText = "Press " + startKey + " to start";
const menuTextXPosition = 300;
const menuTextYPosition = 400; 
const menuSecondText = "Press space to flap wings";
const menuTextSize = 60;
const menuTextColor = "yellow";
const gameOverText = "Press " + restartKey + " to restart";


