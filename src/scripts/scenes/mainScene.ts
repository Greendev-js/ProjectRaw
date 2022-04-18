import {Player, playerMovement} from '../objects/player'
import FpsText from '../objects/fpsText'

export default class MainScene extends Phaser.Scene {
  fpsText: FpsText
  player: Player
  cursors: Phaser.Types.Input.Keyboard.CursorKeys

  constructor() {
    super({ key: 'MainScene' })
  }

  create() {
    this.fpsText = new FpsText(this)
    this.player = new Player(this, this.cameras.main.width / 2, this.cameras.main.height)

    // display the Phaser.VERSION
    this.add
      .text(this.cameras.main.width - 15, 15, `Phaser v${Phaser.VERSION}`, {
        color: '#000000',
        fontSize: '24px'
      })
      .setOrigin(1, 0)
    
    // create cursor keys
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.fpsText.update()
    
    playerMovement(this.cursors, this.player)
  }
}
