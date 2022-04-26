import Player from '../objects/player'
import GoldMine from '../objects/goldmine'
import HUD from './hud'
import Material from '../objects/material'

export default class ShopScene extends Phaser.Scene {
  scoreUpdate: integer
  goldmine: GoldMine
  player: Player
  shopFloor: Material

  constructor() {
    super({ key: 'ShopScene' })
  }

  create() {
    this.goldmine = new GoldMine(this, this.cameras.main.width, 690)
    this.player = new Player(this, this.cameras.main.width - this.goldmine.displayWidth * 1.5, this.cameras.main.height)
    this.cameras.main.backgroundColor.setTo(70,70,70,255)
    this.goldmine.setCollision(this.game, this, this.player, this.goldmine)
    
    // temporary wall and floor
    for (let yi = 1; yi < 5; yi++) {
      new Material(this, 100, 480 + (yi * 96), 'stone', this.player)
    }
    for (let xi = 1; xi < 15; xi++) {
      new Material(this, 100 + (xi * 96), 864, 'stone', this.player)
    }
  }

  update() {
    this.player.playerMovement()
    HUD.updateAlcohol()
  }
}
