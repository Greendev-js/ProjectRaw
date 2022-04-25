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
            // material.destroy()
            console.log("COLLISION")
        });
    }
}

