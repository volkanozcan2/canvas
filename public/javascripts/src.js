PIXI.loader.add("/images/spritesheet.png").load(function() {
    console.log("loaded")
    for (let i = 0; i < 10000; i++) {
        const base = new PIXI.Texture.fromImage("/images/spritesheet.png");
        const e = new PIXI.Texture(base.baseTexture, new PIXI.math.Rectangle(69 * ~~(Math.random() * 5), 0, 69, 69));
        const s = new PIXI.Sprite(e);
        s.anchor.set(.5);
        s.scale.set(0.5 + Math.random() * 0.5)
        s.target = new PIXI.Point(Math.random() * app.renderer.width, Math.random() * app.renderer.height);
        s.x = Math.random() * app.renderer.width;
        s.y = Math.random() * app.renderer.height;
        s.amt = Math.random() * 0.09;
        container_2.addChild(s);
    }
})
app.ticker.add(() => {
    for (var i = 0; i < container_2.children.length; i++) {
        let bu = container_2.children[i];
        bu.x += (bu.target.x - bu.x) * bu.amt;
        bu.y += (bu.target.y - bu.y) * bu.amt;
        bu.target = Math.hypot(bu.target.x - bu.x, bu.target.y - bu.y) < 1 ? new PIXI.Point(Math.random() * app.renderer.width, Math.random() * app.renderer.height) : bu.target;

    }
})