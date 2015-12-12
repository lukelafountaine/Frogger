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
  this.playerSpeed = 20;
  this.player = new Player(this.startX, this.startY, this.playerSpeed);
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

Game.prototype.checkCollisions = function() {
  this.enemies.forEach(function(enemy) {
    if (Math.abs(enemy.x - this.player.x) < this.lossRadius
        && Math.abs(enemy.y - this.player.y) < this.lossRadius) {
        this.player.reset();
    }
  })

};
