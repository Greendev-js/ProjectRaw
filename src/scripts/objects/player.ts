import { GameObjects } from "phaser"

export default class Player extends Phaser.GameObjects.Container {
  spine: SpineGameObject
  animationState: string = 'idle'

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y)
    scene.add.existing(this)
    scene.physics.add.existing(this)

    this.spine = scene.add.spine(0, 0, 'player', 'Idle1_', true)
    this.spine.setMix('Walk', 'Idle1_',  1);

    const bounds = this.spine.getBounds()
		const width = bounds.size.x
		const height = bounds.size.y

		this.setPhysics(width, height)
    this.setScale(2)

    this.add([this.spine as any])
  }
  
  setPhysics(width: number, height: number)
	{
		const body = this.body as Phaser.Physics.Arcade.Body
		body.setOffset(width * -0.5, -height)
		body.setSize(width, height)
    body.setCollideWorldBounds(true)
    body.setDrag(800, 100)
	}

  public playerMovement(cursors: Phaser.Types.Input.Keyboard.CursorKeys) {
    const body = this.body as Phaser.Physics.Arcade.Body
    if (cursors.right.isDown) {
      this.spine.setOffset(0, 0)
      this.spine.setScale(1, 1)
      body.setVelocityX(300)
      if (this.animationState == 'idle') {
        this.animationState = 'walk'
        this.spine.timeScale = 1.8;
        this.spine.play('Walk', true)
      }
    } else if (cursors.left.isDown) {
      this.spine.setOffset(this.spine.width, 0)
      this.spine.setScale(-1, 1)
      body.setVelocityX(-300)
      if (this.animationState == 'idle') {
        this.animationState = 'walk'
        this.spine.timeScale = 1.8;
        this.spine.play('Walk', true)
      }
    } else if (this.animationState == 'walk') {
      this.animationState = 'idle'
      this.spine.timeScale = 1;
      this.spine.play('Idle1_', true)
    }
    
    // if (cursors.space.isDown) {
    //   body.setVelocityY(-350)
    // }
    // if (!cursors.space.isDown) {
    //   body.setVelocityY(250)
    // }
  }
}

