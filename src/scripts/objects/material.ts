import 'phaser'
import Player from "./player"

export default class Material extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'gold')
        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.setCollideWorldBounds(true)
        this.setScale(0.2)
    }
    
    public onCollision(scene: Phaser.Scene, player: Player, material: Material) {
        scene.physics.add.collider(player, material, function () {
            material.destroy()
        });
    }
}

