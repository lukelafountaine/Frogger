var Game = function() {
  this.enemies = [];
  this.startX = 200;
  this.startY = 400;
  this.lossRadius = 25;
  this.startRoad = 340;
  this.endRoad = 20;
  this.numOfEnemies = 3;
  this.boardBottom = 420;
  this.boardSide = 400;
  this.difficulty = 1;
}

Game.prototype.win = function() {
  alert("You won level " + this.difficulty + "\nStarting level " + (this.difficulty+1));
  this.enemies = [];
  this.numOfEnemies += 1;
  this.difficulty += 1;
  this.populateEnemies();
  player.reset();
}

Game.prototype.populateEnemies = function() {
  for (var i = 0; i < this.numOfEnemies; i++)
      this.enemies.push(new Enemy());
};

// Enemy class stuff
var Enemy = function() {
    this.speed = Math.random() * (game.difficulty * 100);
    this.x = -100;
    this.y = Math.random() * (game.startRoad - game.endRoad) + game.endRoad;

    // the enemy image file
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position
Enemy.prototype.update = function(dt) {
    this.x += dt * this.speed;

    if (Math.abs(this.x - player.x) < game.lossRadius && Math.abs(this.y - player.y) < game.lossRadius) {
        player.x = game.startX;
        player.y = game.startY;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// the Player class
Player = function() {
    this.speed = 20
    this.x = game.startX;
    this.y = game.startY;
    this.lives = 3;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.reset = function() {
    this.x = game.startX;
    this.y = game.startY;
};

Player.prototype.update = function(){
    if (this.y === 0)
        game.win();
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(direction) {

    switch(direction) {
        case "up":
            if (this.y > 0)
                this.y -= this.speed;
            break;
        case "down":
            if (this.y < game.boardBottom)
                this.y += this.speed;
            break;
        case "right":
            if (this.x < game.boardSide)
                this.x += this.speed;
            break;
        case "left":
            if (this.x > 0)
              this.x -= this.speed;
            break;
    }
};

// Create the enemies and the player
var game = new Game();
game.populateEnemies();
var player = new Player();
setInterval(function(){ game.populateEnemies(); }, 3000 / game.difficulty);

//var player = new Player();

// listen for a keyup event and handle it
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
