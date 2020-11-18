basic.forever(function () {
    for (let x = 0; x <= 2; x++) {
        for (let y = 0; y <= 2; y++) {
            if (2 - x == 2 || 2 + (y - x) == 2) {
                led.plot(2 + x, 2 - (y - x))
                led.plot(2 + x, 2 + (y - x))
            }
        }
        basic.pause(200)
    }
})
