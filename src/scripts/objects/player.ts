export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'player')
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.setCollideWorldBounds(true)
    this.setDrag(800, 100)
    this.setScale(0.3)
  }

  public playerMovement(cursors: Phaser.Types.Input.Keyboard.CursorKeys, player: Player) {
    if (cursors.right.isDown) {
      player.flipX = false
      player.setVelocityX(300)
    }
    if (cursors.left.isDown) {
      player.flipX = true
      player.setVelocityX(-300)
    }
    if (cursors.space.isDown) {
      player.setVelocityY(-350)
    }
    if (!cursors.space.isDown) {
      player.setVelocityY(250)
    }
  }
}

