import Player from '../objects/player'
import FpsText from '../objects/fpsText'
import Material from '../objects/material'
import Score from '../objects/score'

export default class MainScene extends Phaser.Scene {
  fpsText: FpsText
  scoreUpdate: integer
  score: Score
  player: Player
  gold: Material
  cursors: Phaser.Types.Input.Keyboard.CursorKeys

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.fpsText = new FpsText(this)
    this.score = new Score(this)
    this.player = new Player(this, this.cameras.main.width / 2, this.cameras.main.height)
    this.gold = new Material(this, this.cameras.main.width, 0)

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
    this.fpsText.update()

    this.player.playerMovement(this.cursors, this.player)
    this.gold.checkCollect(this, this.player, this.gold)

    if (!this.gold.active) {
      this.score.updateScore(10)
      this.gold = new Material(this, Math.random() * this.cameras.main.width, 0)
    }
  }
}
