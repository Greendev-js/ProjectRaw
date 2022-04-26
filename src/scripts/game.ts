import * as Phaser from 'phaser'
import PreloadScene from './scenes/preloadScene'
import MainScene from './scenes/mainScene'
import ShopScene from './scenes/shopScene'
import HUD from './scenes/hud'
import 'phaser/plugins/spine/dist/SpinePlugin'

window.Phaser = Phaser;

const DEFAULT_WIDTH = 1280
const DEFAULT_HEIGHT = 720

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#ffffff',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT,
  },
  pixelArt: true,
  plugins: {
    scene: [{ key: "SpinePlugin", plugin: window.SpinePlugin, mapping: "spine" }],
  },
  scene: [PreloadScene, MainScene, ShopScene, HUD],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 400 }
    }
  },
}

window.addEventListener('DOMContentLoaded', () => {
  const game = new Phaser.Game(config)
})
