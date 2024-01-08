const NUMBER = -3605

let positive = NUMBER;
while (positive <= 0 || positive === NUMBER) {
    positive += 360;
}

let negative = NUMBER
while (negative >= 0 || negative === NUMBER) {
    negative -= 360;
}