export default class Score extends Phaser.GameObjects.Text {
    score: integer

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, '', { color: 'black', fontSize: '28px' })
        scene.add.existing(this)
        this.setOrigin(0)
        this.score = 0
    }

    public updateScore(scoreIn: integer) {
        this.score += scoreIn
        this.setText(`gold: ${this.score}`)
    }
}
