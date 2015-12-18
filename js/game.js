var Game = function(canvas) {
    // all the board data
    this.enemies = [];
    this.startX = 200;
    this.startY = 405;
    this.lossRadius = 25;
    this.startRoad = 340;
    this.endRoad = 20;
    this.boardBottom = 400;
    this.boardSide = 400;
    this.level = 1;

    // create the player
    this.player = new Player(this.startX, this.startY, 83);
    console.log(this);

    // create some enemies and then set an interval
    this.createEnemies();
    this.startEnemies();
};

Game.prototype.win = function() {
    alert("You won level " + this.level + "\nStarting level " + (this.level+1));
    this.enemies = [];
    this.level += 1;
    this.stopEnemies();
    this.startEnemies();
    this.player.reset();
};

Game.prototype.startEnemies = function() {
    var self = this;
    setInterval(function() {
        self.createEnemies();
    }, 1000 / self.level);
};

Game.prototype.stopEnemies = function() {
    clearInterval(this.startEnemies);
};

Game.prototype.createEnemies = function() {
    this.enemies.push(new Enemy(this.startRoad, this.endRoad, this.level));
};

Game.prototype.checkCollisions = function() {
    // check to see the position of an enemy is within a given range of player
    for (var i in this.enemies) {
        if (Math.abs(this.enemies[i].x - this.player.x) < this.lossRadius &&
        Math.abs(this.enemies[i].y - this.player.y) < this.lossRadius) {
            this.player.reset();
            return;
          }
    }
};
