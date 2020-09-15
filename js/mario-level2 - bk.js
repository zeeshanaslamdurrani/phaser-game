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
	this.load.image('Spikesimg', 'assets/sprites/spikes.png');
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
	
 //const starslayer = map.createStaticLayer('Spikes', tileset, 0, 0);
  // Get a reference to your tileset
//var myTileset = map.getTileset('tiles');

// Get the firstgid of that tileset
var firstgid = tileset.firstgid;

// Add it to the id of your tile
var addstars = map.createFromTiles(41, null, {key: 'Spikes'}, this.scene, this.cameras.main, layer);
	
}
function update()
{
	
}
function render(){
}