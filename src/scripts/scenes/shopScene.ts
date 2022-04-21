import Player from '../objects/player'
import Score from '../objects/score'
import AlcoholBar from '../objects/alcoholBar'

export default class ShopScene extends Phaser.Scene {
  scoreUpdate: integer
  score: Score
  alcoholBar: AlcoholBar
  player: Player
  cursors: Phaser.Types.Input.Keyboard.CursorKeys

  constructor() {
    super({ key: 'ShopScene' })
  }

  create() {
    this.score = new Score(this, 10, 40)
    this.alcoholBar = new AlcoholBar(this, 10, 70)
    this.player = new Player(this, this.cameras.main.width / 2, this.cameras.main.height)

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px'
      })
      .setOrigin(1, 0)
    
    // inialise
    this.cursors = this.input.keyboard.createCursorKeys();
    this.score.updateScore(0)
  }

  update() {
    this.player.playerMovement(this.cursors, this.player)
  }
}
