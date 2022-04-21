import Player from '../objects/player'
import FpsText from '../objects/fpsText'
import Material from '../objects/material'
import Score from '../objects/score'
import AlcoholBar from '../objects/alcoholBar'
import Shop from '../objects/shop'

export default class MainScene extends Phaser.Scene {
  fpsText: FpsText
  scoreUpdate: integer
  score: Score
  alcoholBar: AlcoholBar
  shop: Shop
  player: Player
  gold: Material
  cursors: Phaser.Types.Input.Keyboard.CursorKeys

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.fpsText = new FpsText(this, 10, 10)
    this.score = new Score(this, 10, 40)
    this.alcoholBar = new AlcoholBar(this, 10, 70)
    this.shop = new Shop(this, 0, this.cameras.main.height)
    this.player = new Player(this, this.cameras.main.width / 2, this.cameras.main.height)
    this.gold = new Material(this, this.cameras.main.width, 0)

    this.cameras.main.backgroundColor.setTo(0,200,50,150)
    
    // inialise
    this.cursors = this.input.keyboard.createCursorKeys();
    this.score.updateScore(0)
    this.gold.onCollision(this, this.player, this.gold)
    this.shop.onCollision(this.game, this, this.player, this.shop)
  }

  update() {
    this.fpsText.update()
    this.alcoholBar.update(-0.1)
    this.player.playerMovement(this.cursors, this.player)
    

    if (!this.gold.active) {
      this.score.updateScore(10)
      this.alcoholBar.update(10)
      this.gold = new Material(this, Math.random() * this.cameras.main.width, 0)
      this.gold.onCollision(this, this.player, this.gold)
    }
  }
}
