let opts = {
    transparent: true,
    backgroundColor: 0x000000,
    resolution: 1,
    antialias: 0,
    autoResize: true,
    forceCanvas: false,
    clearBeforeRender: true,
    forceFXAA: false
};

const tag = document.querySelector("meta[name='version']").getAttribute("content");
const app = new PIXI.Application(innerWidth, innerHeight, opts);
document.body.appendChild(app.view);
let container_2 = new PIXI.ParticleContainer();
container_2.autoResize = true;
app.stage.addChild(container_2);

console.log("pixi is working  and this is on  " + tag);
window.addEventListener('resize', () => app.renderer.resize(window.innerWidth, window.innerHeight));