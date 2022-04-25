export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.load.image('player', 'assets/img/player.png')
    this.load.image('gold', 'assets/img/gold.png')
    this.load.image('stone', 'assets/img/stone.png')
    this.load.spine('player', 'assets/spine/player/Raw.json', 'assets/spine/player/Raw.atlas')
    this.load.image('shop', 'assets/img/shop.png')
    this.load.image('goldmine', 'assets/img/goldmine.png')
  }

  create() {
    this.scene.start('MainScene')

    /**
     * This is how you would dynamically import the mainScene class (with code splitting),
     * add the mainScene to the Scene Manager
     * and start the scene.
     * The name of the chunk would be 'mainScene.chunk.js
     * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
     */
    // let someCondition = true
    // if (someCondition)
    //   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
    //     this.scene.add('MainScene', mainScene.default, true)
    //   })
    // else console.log('The mainScene class will not even be loaded by the browser')
  }
}
