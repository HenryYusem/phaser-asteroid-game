import { Scene, Math } from 'phaser';
import Ship from './ship';
import Snake from './snake';

export default class SnakeScene extends Scene {

  /**
   * Use this function to load images which can be used in sprites
   */
  preload() {
    // loads images which can be used in sprites
    this.load.image('space', 'assets/media/images/deep-space.jpg');
    this.load.image('bullet', 'assets/media/images/bullets.png');
    this.load.image('ship', 'assets/media/images/ship.png');
  }

  /**
   * Create game objects and stuff here
   */
  create() {
    this.add.tileSprite(0, 0, 1600, 1200, 'space');
    this.shipSpeedLabel = this.add.text(10, 10, '', { font: '16px Courier', fill: '#00ff00' });
    this.ship = new Ship(this, 400, 300);
    // this.snake = new Snake(this, , 8);
    // //  Create our keyboard controls
    // this.cursors = this.input.keyboard.createCursorKeys();
  }

  /**
   * This is where all the game logic goes. This is equivalent to the
   * autonomousPeriodic and teleopPeriodic functions in robot code
   */
  update(time, delta) {
   
  }

}
