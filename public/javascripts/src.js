const richText = new PIXI.Text('text', style);
richText.x = 5;
richText.y = 5;
const tag = document.querySelector("meta[name='version']").getAttribute("content");
const app = new PIXI.Application(innerWidth, innerHeight, opts);
document.body.appendChild(app.view);
const center = new PIXI.ObservablePoint(null, null, app.renderer.width * .5, app.renderer.height * .5);
let container = new PIXI.Container();
app.stage.addChild(container);
app.stage.addChild(richText);
console.log("pixi is working  and this is on  " + tag);

for (let i = 0; i < 10000; i++) {
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