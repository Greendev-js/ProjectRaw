import Material from "./material";
import Player from "./player";

export default class levelGenerator {
    level: {type?: number, material?: Phaser.GameObjects.Sprite}[][];
    generate(scene: Phaser.Scene, startX, startY, height, player: Player) {
        this.level = [];
        for (let xi = 0; xi < 16; xi++) {
            this.level.push([]);
            for (let yi = 0; yi < height; yi++) {
                this.level[xi].push({});
                this.level[xi][yi].type = Math.round(Math.random() * 2);
                let textureKey = ''

                switch (this.level[xi][yi].type) {
                    case 0:
                        textureKey = 'none'
                        break;
                    case 1:
                        textureKey = 'stone'
                        break;
                    case 2:
                        textureKey = 'gold'
                        break;
                }
                
                if (textureKey != 'none') {
                    this.level[xi][yi].material = new Material(scene, startX + 96 * xi, startY + 96 * yi, textureKey, player)
                }
            } 
        }
    }
}