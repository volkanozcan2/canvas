let opts = {
    transparent: false,
    backgroundColor: 0x49DCB1,
    resolution: 1,
    antialias: 0,
    autoResize: true,
    forceCanvas: false,
    clearBeforeRender: true
};
const app = new PIXI.Application(innerWidth, innerHeight, opts);
document.body.appendChild(app.view);
console.log("pixi is working")
// create a new Sprite from an image path.
for (let i = 0; i < 12000; i++) {

    const bunny = PIXI.Sprite.from('images/bunny.png');
    bunny.y = app.screen.height * .5;
    bunny.x = app.screen.width * .5;
    bunny.angle = Math.random() * Math.PI * 2;
    bunny.scale.x *= .5;
    bunny.scale.y *= .5;
    bunny.length = Math.random() * 3;
    bunny.anchor.set(0.5);
    app.stage.addChild(bunny);
}

app.ticker.add(() => {
    // just for fun, let's rotate mr rabbit a little
    for (var i = 0; i < app.stage.children.length; i++) {
        let bu = app.stage.children[i]
        bu.x += Math.cos(bu.angle) * bu.length;
        bu.y += Math.sin(bu.angle) * bu.length;

    }
});
window.addEventListener('resize', resize);

function resize() {
    app.renderer.resize(window.innerWidth, window.innerHeight);
    rect.position.set(app.screen.width, app.screen.height);
}