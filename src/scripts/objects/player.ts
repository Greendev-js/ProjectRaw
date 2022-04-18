export class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'player')
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.setCollideWorldBounds(true)
    this.setDrag(350, 100)
    this.setScale(0.3)
  }
}

export function playerMovement(cursors: Phaser.Types.Input.Keyboard.CursorKeys, player: Player) {
  if (cursors.right.isDown) {
    player.setVelocityX(200)
  }
  if (cursors.left.isDown) {
    player.setVelocityX(-200)
  }
  if (cursors.space.isDown) {
    player.setVelocityY(-200)
  }
}