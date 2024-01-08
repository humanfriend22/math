const s3 = 1.73;

let x = 0,
    y = 0;

function findMeasure(x, y) {
    let quadrant;

    if (x >= 0 && y >= 0) {
        quadrant = 1;
    } else if (x < 0 && y >= 0) {
        quadrant = 2;
    } else if (x < 0 && y < 0) {
        quadrant = 3;
    } else {
        quadrant = 4;
    }

    const quadrantsPassedMeasure = (quadrant - 1) * 90;
    const extraAngleMeasure = Math.atan(Math.abs(y) / Math.abs(x)) * (180 / Math.PI)

    return quadrantsPassedMeasure + extraAngleMeasure;
}

findMeasure(s3, -1)