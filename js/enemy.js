// Enemy class stuff
var Enemy = function(start, end, difficulty) {
    //
    this.speed = Math.random() * (difficulty * 100);
    // starts off to the left of the screen
    this.x = -100;
    // chooses a random row to start on
    this.y = Math.random() * (start - end) + end;

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
