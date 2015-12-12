var Game = function() {
    // all the board data
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
    this.playerSpeed = 20;

    // create the player
    this.player = new Player(this.startX, this.startY, this.playerSpeed);

    // create some enemies and set an interval
    this.createEnemies();
    var that = this;
    setInterval(function() {
      that.createEnemies.call(that);
    }, 3000 / this.difficulty);
}

Game.prototype.win = function() {
    alert("You won level " + this.difficulty + "\nStarting level " + (this.difficulty+1));
    this.enemies = [];
    this.numOfEnemies += 1;
    this.difficulty += 1;
    this.populateEnemies();
    player.reset();
}

Game.prototype.createEnemies = function() {
    for (var i = 0; i < this.numOfEnemies; i++)
        this.enemies.push(new Enemy(this.startRoad, this.endRoad, this.difficulty));
}

Game.prototype.checkCollisions = function() {
    for (i in this.enemies) {
        if (Math.abs(this.enemies[i].x - this.player.x) < this.lossRadius
            && Math.abs(this.enemies[i].y - this.player.y) < this.lossRadius) {
            this.player.reset();
            return;
          }
    }
};
