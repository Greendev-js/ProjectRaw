import 'phaser'
import Player from "./player"

export default class Material extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number, type: string, player: Player) {
        super(scene, x, y, type)
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.setGravityY(-400)
        this.setImmovable(true)

        // this.setCollideWorldBounds(true)
        this.setScale(1)

        this.setCollision(scene, player, this)
    }
    
    public setCollision(scene: Phaser.Scene, player: Player, material: Material) {
        scene.physics.add.collider(player, material, function () {
            const playerBody = player.body as Phaser.Physics.Arcade.Body
            const materialBody = material.body as Phaser.Physics.Arcade.Body
            if (scene.game.input.activePointer.leftButtonDown()) {
                if (playerBody.touching.down && materialBody.touching.up && scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S).isDown) {
                    material.destroy()
                } else if (playerBody.touching.left && materialBody.touching.right && scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A).isDown) {
                    material.destroy()
                } else if (playerBody.touching.right && materialBody.touching.left && scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D).isDown) {
                    material.destroy()
                }
            }
        });
    }
}

