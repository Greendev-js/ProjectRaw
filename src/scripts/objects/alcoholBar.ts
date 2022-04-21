export default class AlcoholBar {
    text: Phaser.GameObjects.Text;
    bar: Phaser.GameObjects.Graphics;
    x: number;
    y: number;
    height: number;
    value: number;
    max: number;
    
    constructor(scene: Phaser.Scene, x: number, y: number) {
        this.text = new Phaser.GameObjects.Text(scene, x, y, 'alcohol:', { color: 'black', fontSize: '28px' })
        this.bar = new Phaser.GameObjects.Graphics(scene);

        this.x = x + this.text.displayWidth + 20;
        this.y = y;
        this.height = 28;
        this.value = 200;
        this.max = this.value + 4;

        scene.add.existing(this.text)
        scene.add.existing(this.bar);

        this.draw();
    }

    update(amount: number) {
        this.value += amount;

        switch (true) {
            case this.value <= 0: {
                this.value = 0;
                break;
            }
            case this.value >= this.max - 4: {
                this.value = this.max - 4;
                break;
            }
            default: {
                break;
            }
        }

        this.draw();
    }

    draw() {
        this.bar.clear();

        //  background
        this.bar.fillStyle(0x000000);
        this.bar.fillRect(this.x, this.y, this.max, this.height);

        switch (true) {
            case (this.value < this.max * 1/3): {
                this.bar.fillStyle(0xff0000);
                break;
            }
            case (this.value < this.max * 2/3): {
                this.bar.fillStyle(0xffbf00);
                break;
            }
            default: {
                this.bar.fillStyle(0x00ff00);
                break;
            }
        }

        // bar
        this.bar.fillRect(this.x + 2, this.y + 2, this.value, this.height - 4);
    }
}