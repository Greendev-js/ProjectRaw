import Player from '../objects/player'
import Score from '../objects/score'
import AlcoholBar from '../objects/alcoholBar'
import GoldMine from '../objects/goldmine'

export default class ShopScene extends Phaser.Scene {
  scoreUpdate: integer
  score: Score
  alcoholBar: AlcoholBar
  goldmine: GoldMine
  player: Player
  cursors: Phaser.Types.Input.Keyboard.CursorKeys

  constructor() {
    super({ key: 'ShopScene' })
  }

  create() {
    this.score = new Score(this, 10, 40)
    this.alcoholBar = new AlcoholBar(this, 10, 70)
    this.goldmine = new GoldMine(this, this.cameras.main.width, this.cameras.main.height)
    this.player = new Player(this, this.cameras.main.width - this.goldmine.displayWidth * 1.5, this.cameras.main.height)

    this.cameras.main.backgroundColor.setTo(0,50,100,200)
    
    // inialise
    this.cursors = this.input.keyboard.createCursorKeys();
    this.goldmine.setCollision(this.game, this, this.player, this.goldmine)
  }

  update() {
    this.player.playerMovement()
  }
}
