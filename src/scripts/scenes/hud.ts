import Score from '../objects/score'
import AlcoholBar from '../objects/alcoholBar'

export default class HUD extends Phaser.Scene {
  static score: Score
  static alcoholBar: AlcoholBar

  constructor() {
    super({ key: 'HUD' })
  }

  create() {
    HUD.score = new Score(this, 20, 40)
    HUD.alcoholBar = new AlcoholBar(this, 20, 70)
    
    // inialise
    Score.updateScore(HUD.score, 0)
  }

  update() {
    HUD.alcoholBar.update(-0.1)
  }

  public static updateScore(scoreIn: number) {
      Score.updateScore(this.score, scoreIn)
  }

  public static updateAlcohol() {
      if (Score.score > 0 && this.alcoholBar.value <= this.alcoholBar.max) {
        Score.updateScore(this.score, -0.5)
        HUD.alcoholBar.update(1)
      }
  }
}
