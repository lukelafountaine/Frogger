var canvasData = {
    height: 606,
    width: 505
};

// Enemy class stuff
var Enemy = function() {
    this.speed = Math.random() * 150;
    this.x = 0;
    this.y = Math.random() * 400;

    // the enemy image file
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position
Enemy.prototype.update = function(dt) {
    this.x += dt * this.speed;
    if (this.x > canvasData.width) {
        // TODO this is crap
        allEnemies.shift(-1);
        allEnemies.push(new Enemy());
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// the Player class
Player = function() {
    this.speed = 20
    this.x = 200;
    this.y = 400;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(){
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
            if (this.y < canvasData.height)
                this.y += this.speed;
            break;
        case "right":
            if (this.x < canvasData.width)
                this.x += this.speed;
            break;
        case "left":
            if (this.x > 0)
              this.x -= this.speed;
            break;
    }
};

// Create the enemies and the player
var numOfEnemies = 5;
var allEnemies = [];
for (var i = 0; i < numOfEnemies; i++) {
    allEnemies.push(new Enemy());
}

var player = new Player();

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
