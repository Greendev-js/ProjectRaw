import 'phaser'
import HUD from '../scenes/hud'
import Player from "./player"

export default class Material extends Phaser.Physics.Arcade.Sprite {
    blockType: string

    constructor(scene: Phaser.Scene, x: number, y: number, type: string, player: Player) {
        super(scene, x, y, type)
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.setGravityY(-400)
        this.setImmovable(true)
        this.setCollision(scene, player, this)
        this.setScale(1)
        this.depth = 0
        this.blockType = type
    }
    
    public setCollision(scene: Phaser.Scene, player: Player, material: Material) {
        scene.physics.add.collider(player, material, function () {
            const playerBody = player.body as Phaser.Physics.Arcade.Body
            const materialBody = material.body as Phaser.Physics.Arcade.Body
            if (scene.game.input.activePointer.leftButtonDown()) {

                // Update score and destroy block if applicable
                if ((playerBody.touching.down && materialBody.touching.up && scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S).isDown) ||
                    (playerBody.touching.left && materialBody.touching.right && scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A).isDown) ||
                    (playerBody.touching.right && materialBody.touching.left && scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D).isDown)) {
                    
                    
                    if (material.blockType == "gold") {
                        HUD.updateScore(10)
                    }
                    
                    material.destroy()
                }
            }
        });
    }
}

