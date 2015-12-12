// Create the enemies and the player
var game = new Game();
game.populateEnemies();
setInterval(function(){ game.populateEnemies(); }, 3000 / game.difficulty);

// listen for a keyup event and handle it
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    game.player.handleInput(allowedKeys[e.keyCode]);
});
