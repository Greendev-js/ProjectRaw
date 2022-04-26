import Player from '../objects/player'
import Shop from '../objects/shop'
import levelGenerator from '../objects/levelGenerator'
import Material from '../objects/material'

export default class MainScene extends Phaser.Scene {
  scoreUpdate: integer
  shop: Shop
  player: Player
  levelGenerator: levelGenerator

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.shop = new Shop(this, 0, 720)
    this.player = new Player(this, this.cameras.main.width / 2, this.cameras.main.height)
    this.cameras.main.backgroundColor.setTo(64, 4, 4)
    
    this.shop.setCollision(this.game, this, this.player, this.shop)
    // temporary wall and floor
    for (let yi = 1; yi < 5; yi++) {
      new Material(this, -256, 480 + (yi * 96), 'stone', this.player)
    }
    for (let xi = 1; xi < 6; xi++) {
      new Material(this, -256 + (xi * 96), 864, 'stone', this.player)
    }

    this.levelGenerator = new levelGenerator;
    this.levelGenerator.generate(this, 32 * 10, 32 * 24, 32, this.player);
  }

  update() {
    this.player.playerMovement()
    this.player.update()
  }
}
