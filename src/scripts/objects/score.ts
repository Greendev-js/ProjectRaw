export default class Score extends Phaser.GameObjects.Text {
    static score: integer

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, '', { color: 'black', fontSize: '28px' })
        scene.add.existing(this)
        this.setOrigin(0)
        Score.score = 0
    }

    public static updateScore(scoreInstance: Phaser.GameObjects.Text, scoreIn: number) {
        Score.score += scoreIn

        if (Score.score < 0) {
            Score.score = 0
        }

        scoreInstance.setText(`gold: ${Score.score}`)
    }
}
