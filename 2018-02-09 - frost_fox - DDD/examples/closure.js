class Paint {

    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }

    mix(paint) {
        return new Paint(
            Paint.mixVolume(this.r + paint.r),
            Paint.mixVolume(this.g + paint.g),
            Paint.mixVolume(this.b + paint.b)
        );
    }

    static mixVolume(a, b) {
        return (a + b) / 2;
    }
}

const paintWhite = new Paint(255, 255, 255);
const paintBlack = new Paint(0, 0, 0);

const colorIDontKnow = paintBlack.mix(paintBlack);
