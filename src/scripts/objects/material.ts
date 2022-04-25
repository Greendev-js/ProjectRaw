import 'phaser'
import Player from "./player"

export default class Material extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number, type: string) {
        super(scene, x, y, type)
        scene.add.existing(this)

        // this.setCollideWorldBounds(true)
        this.setScale(1)
    }
    
    public setCollision(scene: Phaser.Scene, player: Player, material: Material) {
        // scene.physics.add.collider(player, material, function () {
        //     material.destroy()
        // });
    }
}

