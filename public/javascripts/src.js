class particle extends PIXI.Sprite {
    constructor(asset, x = Math.random() * app.renderer.width, y = Math.random() * app.renderer.height) {
        super(PIXI.Texture.fromImage(asset));
        this.x = x;
        this.y = y;
        this.anchor.set(.5);
        this.scale.set(.1 + Math.random() * .9);
        this.angle = Math.random() * 2 * Math.PI;
        this.tint = Math.random() * 0xffffff;
        this.length = Math.random() * 5;

    }
    move() {
        this.x += Math.cos(this.angle) * this.length;
        this.y += Math.sin(this.angle) * this.length;
        /*this.position.lerp(this.target, 0.05);*/
    }
    edge() {
        (this.x > app.renderer.width) && (this.x = 0);
        (this.y > app.renderer.height) && (this.y = 0);
        (this.x < 0) && (this.x = app.renderer.width);
        (this.y < 0) && (this.y = app.renderer.height);

    }

}

let opts = {
    transparent: false,
    backgroundColor: 0x49DCB1,
    resolution: 1,
    antialias: 0,
    autoResize: true,
    forceCanvas: false,
    clearBeforeRender: true,
    forceFXAA: true
};
const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
});

const richText = new PIXI.Text('text', style);
richText.x = 5;
richText.y = 5;

const tag = document.querySelector("meta[name='version']").getAttribute("content");
const app = new PIXI.Application(innerWidth, innerHeight, opts);
document.body.appendChild(app.view);
let container = new PIXI.Container();
app.stage.addChild(container);
app.stage.addChild(richText);
console.log("pixi is working  and this is on  " + tag);

for (let i = 0; i < 1000; i++) {
    let bunny = new particle("/images/ball.png");
    container.addChild(bunny);
}

app.ticker.add((ticker) => {
    for (var i = 0; i < container.children.length; i++) {
        let bu = container.children[i];
        bu.move();
        bu.edge();
    }
    richText.setText(ticker.deltaTime);
});
window.addEventListener('resize', resize);

function resize() {
    app.renderer.resize(window.innerWidth, window.innerHeight);
}