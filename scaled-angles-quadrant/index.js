const multiplier = 0.2;

for (let i = 1; i <= 4; i++) {
    const quadrantBoundaries = [
        (i - 1) * 90 / multiplier,
        i * 90 / multiplier
    ];
    console.log(`Quadrant ${i}: ${quadrantBoundaries}`);
}