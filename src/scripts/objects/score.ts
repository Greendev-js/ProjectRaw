export default class Score extends Phaser.GameObjects.Text {
    score: integer

    constructor(scene) {
        super(scene, 10, 40, '', { color: 'black', fontSize: '28px' })
        scene.add.existing(this)
        this.setOrigin(0)
        this.score = 0
    }

    public updateScore(scoreIn: integer) {
        this.score += scoreIn
        this.setText(`score: ${this.score}`)
    }
}
