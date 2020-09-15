const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 800,
  heigth: 640,
  
  scene: {
    preload,
    create,
    update,
	render
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 500 },

    },
  }
};

const game = new Phaser.Game(config);
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
var spikesgroup;

function preload() {
	this.load.tilemapTiledJSON('newmap', 'assets/tilemaps/maps/mariotwomap.json');
    this.load.image('tiles', 'assets/tilemaps/tiles/super_mario.png');
	this.load.image('player', 'assets/sprites/phaser-dude.png');
	this.load.image('stars', 'assets/sprites/spikes.png');
	this.load.image('knife', 'assets/sprites/knife.png');
}
function create()
{
	  const map = this.make.tilemap({ key: 'newmap' });							
  // Add the tileset to the map so the images would load correctly in Phaser							
  const tileset = map.addTilesetImage('super_mario', 'tiles');	
  const layer = map.createStaticLayer('World', tileset, 0, 200);
  layer.setCollisionByExclusion(-1, true);		
 // const splayer = map.createStaticLayer('Spikes', tileset, 0, 200);
 //console.log(splayer);
  // splayer.setCollisionByExclusion(-1, true);		
					  
console.log(tileset);
	//this.physics.startSystem(Phaser.Physics.ARCADE);
  // map = this.add.tilemap('newmap',16,16);
    map.addTilesetImage('super_mario', 'tiles');
	map.setCollision(40);
	map.setCollision(10);
	map.setCollision(14);
	map.setCollision(15);
	map.setCollision(21);
	map.setCollision(22);
	map.setCollision(23);
	map.setCollision(24);
	map.setCollision(25);
	map.setCollision(33);
	map.setCollision(20);
	map.setCollision(39);
	map.setCollisionBetween(27, 29);
	  // Add the player to the game world
	  this.player = this.physics.add.sprite(50, 300, 'player');
	  this.player.setBounce(0.1); // our player will bounce from items
	  this.player.setCollideWorldBounds(true); // don't go out of the map
	  this.physics.add.collider(this.player, layer);
	
	
	//adding spikes
	var spikepins = map.createFromObjects('Spikes', 41, { key: 'knife' });
	console.log('the length of objects used is '+spikepins.length);
	var spikesGroup = this.physics.add.group();
	for (var i = 0; i < spikepins.length; i++)
	{       
		spikesGroup.add(spikepins[i]);
		spikepins[i].body.collideWorldBounds=true;    
	}
	console.log(spikesGroup);
	spikesGroup.enableBody = true;
	this.physics.add.collider(layer, spikesGroup);
	
	//adding my pins
	var starpins = map.createFromObjects('Stars', 19, { key: 'stars' });
	console.log('the length of objects used is '+starpins.length);
	var starsGroup = this.physics.add.group();
	for (var i = 0; i < starpins.length; i++)
	{       
		starsGroup.add(starpins[i]);
		spikepins[i].body.collideWorldBounds=true;    
	}
	console.log(starsGroup);
	starsGroup.enableBody = true;

this.physics.add.collider(layer, starsGroup);
	//make the camera follow the player
	
	this.cameras.main.setBounds(0, 0, 3000, 640);
    this.cameras.main.startFollow(this.player);
	scoreText = this.add.text(5, 5, 'Points: 0', { font: '18px Arial', fill: '#fff' });
	livesText = this.add.text(5, 30, 'Lives: 3', { font: '18px Arial', fill: '#fff' });
	
	cursors = this.input.keyboard.createCursorKeys();
	
}


function update()
{
	 this.player.body.velocity.x = 0;
	 if (cursors.up.isDown)
    {
        if (this.player.body.onFloor())
        {
            this.player.body.velocity.y = -320;
		}
	}
	
    if (cursors.left.isDown)
    {
        this.player.body.velocity.x = -150;
	}
    else if (cursors.right.isDown)
    {
        this.player.body.velocity.x = 150;
	}
}
function render(){
}