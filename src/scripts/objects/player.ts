import { GameObjects, Tilemaps } from "phaser"

export default class Player extends Phaser.GameObjects.Container {
  spine: SpineGameObject
  animationState: string = 'idle'
  cameraPoint: GameObjects.Rectangle
  
  keyA: any
  keyD: any
  keySPACE: any

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y)
    scene.add.existing(this)
    scene.physics.add.existing(this)
    
    this.spine = scene.add.spine(0, 0, 'player', 'Idle1_', true)
    this.spine.setMix('Walk', 'Idle1_',  1);
    this.spine.setScale(1)
    
    const bounds = this.spine.getBounds()
		const width = bounds.size.x / 2
		const height = bounds.size.y / 2
    
		this.setPhysics(width, height)
    this.setScale(1)
    this.depth = 3
    this.add([this.spine as any])
    
    this.cameraPoint = scene.add.rectangle(x, y - height * -1, 64, 64, 0x000000, 0)

    scene.cameras.main.startFollow(this.cameraPoint)

    this.keyA = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    this.keyD = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.keySPACE = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }
  
  setPhysics(width: number, height: number)
	{
		const body = this.body as Phaser.Physics.Arcade.Body
		body.setOffset(width * -0.1, -height)
		body.setSize(width, height)
    body.setDrag(800, 0)
	}

  update() {
    this.cameraPoint.x = this.body.position.x;
    this.cameraPoint.y = this.body.position.y;
  }

  public playerMovement() {
    const body = this.body as Phaser.Physics.Arcade.Body
    if (this.keyD.isDown) {
      this.spine.setOffset(0, 0)
      this.spine.setScale(1, 1)
      body.setVelocityX(300)
      if (this.animationState == 'idle') {
        this.animationState = 'walk'
        this.spine.timeScale = 1.8;
        this.spine.play('Walk', true)
      }
    } else if (this.keyA.isDown) {
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
    
    // Kept outside the if...elseif otherwise player would not be able to move and jump at the same time
    if (this.keySPACE.isDown && body.touching.down) {
      body.setVelocityY(-400)
    }
  }
}

