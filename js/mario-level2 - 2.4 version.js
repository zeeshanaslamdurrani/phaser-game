var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {
	
    game.load.tilemap('newmap', 'assets/tilemaps/maps/mariotwomap.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'assets/tilemaps/tiles/super_mario.png');
	game.load.image('player', 'assets/sprites/phaser-dude.png');
	game.load.image('Spikesimg', 'assets/sprites/spikes.png');
	game.load.image('knife', 'assets/sprites/knife.png');
}

var map;
var tileset;
var layer;
var spikelayer;
var p;
var cursors;
var scoreText;
var gameOver;
var livesText;
var lives = 3;
var score = 0;
function create() {
	game.physics.startSystem(Phaser.Physics.ARCADE);
   // game.stage.backgroundColor = '#787878';
    map = game.add.tilemap('newmap',16,16);
    map.addTilesetImage('super_mario', 'tiles');
	//map.addTilesetImage('Spikes');
	
	/*if (map.objects.Spikes) {
  const sp = map.objects.Spikes;
  sp.forEach(spe => {
    // do something here with the data
    console.log('spp');
  });
	}*/
	
	
	map.setCollision(40);
	map.setCollision(10);
	map.setCollision(14);
	map.setCollision(15);
	map.setCollision(16);
	map.setCollision(21);
	map.setCollision(22);
	map.setCollision(23);
	map.setCollision(24);
	map.setCollision(25);
	map.setCollision(33);
	map.setCollision(20);
	map.setCollision(39);
	map.setCollisionBetween(27, 29);
	
	layer = map.createLayer('World');
	Stars = map.createLayer('Stars');
	Spikes = map.createLayer('Spikes');
	//layer.debug = true;
	layer.resizeWorld();
	/*
	
	platforms = game.add.physicsGroup();
    
	platforms.create(30, 200, 'Spikesimg');
	platforms.create(530, 200, 'Spikesimg');
	platforms.create(630, 200, 'Spikesimg');
	platforms.create(730, 200, 'Spikesimg');
	platforms.create(830, 200, 'Spikesimg');
	platforms.create(930, 200, 'Spikesimg');
	platforms.create(130, 200, 'Spikesimg');
	platforms.create(230, 200, 'Spikesimg');
	platforms.create(330, 200, 'Spikesimg');
	platforms.create(1430, 200, 'Spikesimg');
	platforms.create(230, 200, 'Spikesimg');
	platforms.create(1630, 200, 'Spikesimg');
	platforms.create(1730, 200, 'Spikesimg');
	platforms.create(430, 200, 'Spikesimg');
	platforms.create(630, 200, 'Spikesimg');
	platforms.create(830, 200, 'Spikesimg');
	platforms.create(930, 200, 'Spikesimg');
	platforms.create(2000, 'Spikesimg');
	platforms.create(2500, 200, 'Spikesimg');
	platforms.create(2600, 200, 'Spikesimg');
	
	platforms.enableBody = true;
	platforms.scale.set(0.6, 0.6);
	platforms.callAll('anchor.setTo', 'anchor', 0.5, 1.0);
	platforms.setAll('body.immovable', true);
	
	careful = game.add.physicsGroup();
    careful.create(289, 168, 'knife');
	careful.enableBody = true;
	careful.create(900, 168, 'knife');
	careful.scale.set(0.6, 0.6);
	careful.callAll('anchor.setTo', 'anchor', 0.5, 1.0);
	careful.setAll('body.immovable', true);
	//player is added below
	p = game.add.sprite(32, 32, 'player');
	game.physics.enable(p);
	game.physics.arcade.gravity.y = 220;
	p.body.bounce.y = 0.2;
	p.body.linearDamping = 1;
	p.body.collideWorldBounds = true;
	
	game.camera.follow(p);
	scoreText = game.add.text(5, 5, 'Points: 0', { font: '18px Arial', fill: '#000000' });
	livesText = game.add.text(5, 30, 'Lives: 3', { font: '18px Arial', fill: '#000000' });
	
	cursors = game.input.keyboard.createCursorKeys();
	*/
}

function update() {
	/*
    game.physics.arcade.collide(p, layer);
	game.physics.arcade.collide(platforms, layer);
	game.physics.arcade.collide(careful, layer);
	game.physics.arcade.collide(p, platforms, collectStar);
	game.physics.arcade.collide(p, careful, lostLife);
	// Add collision between the player and the spikes
	// game.physics.add.collider(p, spikes, playerHit, null, this);
    p.body.velocity.x = 0;
	
    if (cursors.up.isDown)
    {
        if (p.body.onFloor())
        {
            p.body.velocity.y = -220;
		}
	}
	
    if (cursors.left.isDown)
    {
        p.body.velocity.x = -150;
	}
    else if (cursors.right.isDown)
    {
        p.body.velocity.x = 150;
	}
	*/
}

function render() {
	
    // game.debug.body(p);
  //  game.debug.bodyInfo(p, 32, 320);
	
}
function collectStar(p, platforms){
	platforms.kill();
	score += 10;
	scoreText.setText('Points: '+score);
	
}
function lostLife(p, careful){
	p.x = 0;
	score -= 10;
	lives -= 1;
	scoreText.setText('Points: '+score);
	if(lives > -1){
	livesText.setText('Lives : '+lives); 
	}
	if(lives == 0) {
	gameOver = game.add.text(200, game.world.height/2, 'Game Over Please press S to restart the game .. Cheers !!!', { font: '28px Arial', fill: '#fff' });
	
	}
}