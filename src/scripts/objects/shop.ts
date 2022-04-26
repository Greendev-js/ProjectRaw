import 'phaser'
import Player from "./player"

export default class Shop extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'shop')
        scene.add.existing(this)
        scene.physics.add.existing(this)
        this.setGravityY(-400)
        this.setImmovable(true)
        this.setScale(0.4)
        this.depth = 2
    }
    
    public setCollision(game: Phaser.Game, scene: Phaser.Scene, player: Player, shop: Shop) {
        scene.physics.add.collider(player, shop, function () {
            game.scene.switch('MainScene', 'ShopScene')
        });
    }
}

