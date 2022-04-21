import 'phaser'
import Player from "./player"

export default class Shop extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'shop')
        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.setCollideWorldBounds(true)
        this.setScale(0.4)
    }
    
    public onCollision(scene: Phaser.Scene, player: Player, shop: Shop) {
        scene.physics.add.collider(player, shop, function () {
            console.log("START SHOP SCENE")
        });
    }
}

