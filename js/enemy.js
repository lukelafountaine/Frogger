// Enemy class stuff
var Enemy = function() {
    this.speed = Math.random() * (game.difficulty * 100);
    // starts off to the left of the screen
    this.x = -100;
    // chooses a random row to start on
    this.y = Math.random() * (game.startRoad - game.endRoad) + game.endRoad;

    // the enemy image file
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position
Enemy.prototype.update = function(dt) {
    this.x += dt * this.speed;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
