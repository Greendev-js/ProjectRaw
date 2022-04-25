import 'phaser'
import Player from "./player"

export default class GoldMine extends Phaser.Physics.Arcade.Sprite {
    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 'goldmine')
        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.setCollideWorldBounds(true)
        this.setScale(0.4)
    }
    
    public setCollision(game: Phaser.Game, scene: Phaser.Scene, player: Player, goldmine: GoldMine) {
        scene.physics.add.collider(player, goldmine, function () {
            game.scene.switch('ShopScene', 'MainScene')
        });
    }
}

