// execute the update function every 10 milliseconds
function update() {


    fillCanvas("rgb(25, 25, 112)");

    // kode til update

    //kode til baggrund
    drawImage(
        baggrundImage,
        baggrundxPosition,
        baggrundyPosition,
        baggrundImage.width,
        baggrundImage.height
        );

    // for every hus
    for(let hus of huss) {
        // draw the hus
        drawImage(
            husImage,
            hus.xPosition,
            hus.yPosition,
            husImage.width,
            husImage.height
        );
        // update the x position of the hus
        hus.xPosition += husXSpeed;
        // remove hus if it moves beyond the destruction point
        if(hus.xPosition < destructionXPosition) {
            huss = huss.remove(hus);
        }

    }
    // spawn a new hus when the it is time
    husTimeSinceLastSpawn += timeSinceLastFrame;
    if(husTimeSinceLastSpawn>husSpawnInterval) {
        huss.push({
            xPosition: spawnXPosition,
            yPosition: 852, 
        });
        husTimeSinceLastSpawn = 0;
    }   

    //kode for

    // for every cloud
    for(let cloud of clouds) {
        // draw the cloud
        drawImage(
            cloudImage,
            cloud.xPosition,
            cloud.yPosition,
            cloudImage.width,
            cloudImage.height
        );
        // update the x position of the cloud
        cloud.xPosition += cloudXSpeed;
        // remove cloud if it moves beyond the destruction point
        if(cloud.xPosition < destructionXPosition) {
            clouds = clouds.remove(cloud);
        }

    }
    // spawn a new cloud when the it is time
    cloudTimeSinceLastSpawn += timeSinceLastFrame;
    if(cloudTimeSinceLastSpawn>cloudSpawnInterval) {
        clouds.push({
            xPosition: spawnXPosition,
            yPosition: randomBetween(0, canvas.height/2), 
        });
        cloudTimeSinceLastSpawn = 0;
    }   

        //draw pimp
    if(bitchesValue >= 1){
    // draw pimp
    drawImage(pimpImage,
        pimpxPosition,
        pimpyPosition,
        pimpImage.width,
        pimpImage.height
    ); 
    }
    
    
    // draw the bird image
    drawImage(birdImage,
        birdXPosition,
        birdYPosition,
        birdImage.width,
        birdImage.height
    );

    // draw the bird hitbox if debugmode is on
    if(debugModeIsOn) {
        drawCircle(
            birdXPosition, 
            birdYPosition, 
            birdHitboxRadius, 
            hitboxColor
        );
    }

    // update the bird movement
    birdYSpeed += birdYAccelleration;
    birdYPosition += birdYSpeed;

    if (gameState == "action") {
        // end the game if the bird touches the canvas edge
        if(canvas.height < birdYPosition || birdYPosition < 0) {
            gameOverSound.play();
            birdCanFlap = false;
            gameState = "gameover";
            alert("GAME OVER!");
            if(confirm("INSERT HIGHSCORE!")) {
                highscores.push({
                    username: prompt("USERNAME:"),
                    highscore: scoreValue
                });
                highscores.sort((x, y) => y.highscore - x.highscore);
            }
            alert(JSON.stringify(highscores));
        }
    }

// bird2
for(let bitch of bitchs) {
    // draw the bitch
    drawImage(bitchImage,
        bitch.xPosition,
        bitch.yPosition,
        bitchImage.width,
        bitchImage.height
    );

    if(debugModeIsOn) {
        drawCircle(
            bitch.xPosition, 
            bitch.yPosition, 
            bitchHitboxRadius, 
            hitboxColor
        );
    }

    // move the bitch
    bitch.xPosition += bitchXSpeed;


    if(gameState == "action") {
        // check if the bitchs collides with the bird
        if(theseCirclesCollide(
            birdXPosition,
            birdYPosition,
            birdHitboxRadius,
            bitch.xPosition,
            bitch.yPosition,
            bitchHitboxRadius
        )) 
        { // if they do, increase the bitch
            bitchSound.play();
            bitchesValue += bitchValue;
            bitchs = bitchs.remove(bitch);
        }
    }

     // remove bitch if it goes off the screen
     if(bitch.xPosition < destructionXPosition) {
        bitchs = bitchs.remove(bitch);
    }
}

// spawn new bitchs
if(gameState == "action" &&
bitchTimeSinceLastSpawn>bitchSpawnInterval) {
    bitchs.push({
        xPosition: spawnXPosition,
        yPosition: randomBetween(0, canvas.height)
    });
    bitchTimeSinceLastSpawn = 0;
}

if(gameState == "action") {
    bitchTimeSinceLastSpawn += timeSinceLastFrame;
}


    // for each coin
    for(let coin of coins) {
        // draw the coin
        drawImage(coinImage,
            coin.xPosition,
            coin.yPosition,
            coinImage.width,
            coinImage.height
        );

        if(debugModeIsOn) {
            drawCircle(
                coin.xPosition, 
                coin.yPosition, 
                coinHitboxRadius, 
                hitboxColor
            );
        }

        // move the coin
        coin.xPosition += coinXSpeed;


        if(gameState == "action") {
            // check if the coins collides with the bird
            if(theseCirclesCollide(
                birdXPosition,
                birdYPosition,
                birdHitboxRadius,
                coin.xPosition,
                coin.yPosition,
                coinHitboxRadius
            )) 
            { // if they do, increase the score
                coinSound.play();
                scoreValue += coinValue;
                coins = coins.remove(coin);
            }
        }

         // remove coin if it goes off the screen
         if(coin.xPosition < destructionXPosition) {
            coins = coins.remove(coin);
        }
    }

    // spawn new coins
    if(gameState == "action" &&
    coinTimeSinceLastSpawn>coinSpawnInterval) {
        coins.push({
            xPosition: spawnXPosition,
            yPosition: randomBetween(0, canvas.height)
        });
        coinTimeSinceLastSpawn = 0;
    }

    if(gameState == "action") {
        coinTimeSinceLastSpawn += timeSinceLastFrame;
    }

   
    // for each fireball
    for(let fireball of fireballs) {
        // draw the fireball
        drawImage(fireballImage,
            fireball.xPosition,
            fireball.yPosition,
            fireballImage.width,
            fireballImage.height
        );

        if(debugModeIsOn) { // draw the hotbox
            drawCircle(
                fireball.xPosition, 
                fireball.yPosition, 
                fireballHitboxRadius, 
                hitboxColor
            );
        }

        // move the fireball
        fireball.xPosition += fireballXSpeed;

        // remove fireball if it goes off the screen
        if(fireball.xPosition < destructionXPosition) {
            fireballs = fireballs.remove(fireball);
        }

        if(gameState == "action") {
            // check if the fireball collides with the bird
            if(theseCirclesCollide(
                birdXPosition,
                birdYPosition,
                birdHitboxRadius,
                fireball.xPosition,
                fireball.yPosition,
                fireballHitboxRadius
            )) 
            { // if they do, end the game
                birdCanFlap = false;
                gameOverSound.play();
                gameState = "gameover";
                alert("GAME OVER!");
                if(confirm("INSERT HIGHSCORE!")) {
                    highscores.push({
                        username: prompt("USERNAME:"),
                        highscore: scoreValue
                    });
                    highscores.sort((x, y) => y.highscore - x.highscore);
                }
                alert(JSON.stringify(highscores));
            }
        }
    }

    // spawn new fireballs
    if(gameState == "action" &&
    fireballTimeSinceLastSpawn>fireballSpawnInterval) {
        fireballs.push({
            xPosition: spawnXPosition,
            yPosition: randomBetween(0, canvas.height)
        });
        fireballTimeSinceLastSpawn = 0;
    }

    if(gameState == "action") {
        fireballTimeSinceLastSpawn += timeSinceLastFrame;
    }

    //draw the scoreboard
    drawImage(
        scoreImage,
        scoreImageXPosition,
        scoreImageYPosition,
        scoreImage.width,
        scoreImage.height
    );
    drawText(
        "x"+ scoreValue,
        scoreTextXPosition,
        scoreTextYPosition,
        scoreTextSize,
        scoreTextColor
    );

    //draw the bitchboard
    drawImage(
        bitchesImage,
        bitchesImageXPosition,
        bitchesImageYPosition,
        bitchesImage.width,
        bitchesImage.height
    );
    drawText(
        "x"+ bitchesValue,
        bitchesTextXPosition,
        bitchesTextYPosition,
        bitchesTextSize,
        bitchesTextColor
    );

    // draw the menu text
    if(gameState == "menu") {
        drawText (
            menuFirstText,
            menuTextXPosition,
            menuTextYPosition,
            menuTextSize,
            menuTextColor
        )
    }

    if(gameState == "action" && birdYAccelleration == 0) {
        drawText (
            menuSecondText,
            menuTextXPosition,
            menuTextYPosition,
            menuTextSize,
            menuTextColor
        )
    }

    // draw the game over text
    if(gameState == "gameover") {
        drawText (
            gameOverText,
            menuTextXPosition,
            menuTextYPosition,
            menuTextSize,
            menuTextColor
        )
    }

    if(debugModeIsOn) {
        drawText(
            "timeSinceLastFrame: " + timeSinceLastFrame,
            canvas.width/2,
            20,
            12,
            "black"
        );
    }

    // update timeSinceLastFrame and draw next frame
    timeOfCurrentFrame = new Date().getTime();
    timeSinceLastFrame = timeOfCurrentFrame - timeOfLastFrame;
    timeOfLastFrame = timeOfCurrentFrame;
    window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);


