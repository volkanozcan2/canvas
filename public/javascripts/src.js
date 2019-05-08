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
    clearBeforeRender: true
};
const tag = document.querySelector("meta[name='version']").getAttribute("content");
const app = new PIXI.Application(innerWidth, innerHeight, opts);
document.body.appendChild(app.view);
let container = new PIXI.Container();
app.stage.addChild(container);
console.log("pixi is working  and this is on  " + tag);


for (let i = 0; i < 5000; i++) {
    let bunny = new particle("/images/ball.png");
    container.addChild(bunny);
}

app.ticker.add(() => {
    for (var i = 0; i < container.children.length; i++) {
        let bu = container.children[i];
        bu.move();
        bu.edge();
    }
});
window.addEventListener('resize', resize);

function resize() {
    app.renderer.resize(window.innerWidth, window.innerHeight);
}