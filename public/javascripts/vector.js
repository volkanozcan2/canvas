Object.assign(PIXI.ObservablePoint.prototype, {

    add: function(o) {
        this.set(this.x += o.x, this.y += o.y);
    },
    radd: function(o) {
        return new PIXI.ObservablePoint(test, window, this.x + o.x, this.y + o.y);
    },
    sub: function(o) {
        this.set(this.x -= o.x, this.y -= o.y);

    },
    rsub: function(o) {
        return new PIXI.ObservablePoint(test, window, this.x - o.x, this.y - o.y);
    },
    mult: function(o) {
        this.x *= o;
        this.y *= o;
    },
    rmult: function(o) {
        return new PIXI.ObservablePoint(test, window, this.x * o, this.y * o);
    },
    getAngle() {
        //in radians
        return Math.atan2(this.y, this.x);
    },
    getLenght() {
        return Math.hypot(this.x, this.y);
    },
    setLength(l) {
        let angle = this.getAngle();
        this.set(Math.cos(angle) * l, Math.sin(angle) * l);
    },
    setAngle(a) {
        //in radians;
        this.set(Math.cos(a) * this.getLenght(), Math.sin(a) * this.getLenght());
    }

});