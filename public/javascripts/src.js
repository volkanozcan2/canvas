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
console.log("pixi is working  and this is on  " + tag);
// create a new Sprite from an image path.


for (let i = 0; i < 1500; i++) {

    const bunny = PIXI.Sprite.from('images/bunny.png');
    bunny.y = app.screen.height * .5;
    bunny.x = app.screen.width * .5;
    bunny.angle = Math.random() * Math.PI * 2;
    bunny.scale.set(0.5 + Math.random());
    bunny.length = Math.random() * 5;
    bunny.anchor.set(0.5);
    bunny.tint = (Math.random() * 0xffffff);
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


}