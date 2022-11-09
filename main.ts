let range = 0
let eCO2 = 0
let Position = 0
let Strip = neopixel.create(DigitalPin.P0, 17, NeoPixelMode.RGB)
basic.forever(function () {
    Strip.clear()
    Position = 0
    eCO2 = pins.analogReadPin(AnalogPin.P2)
    serial.writeValue("C02", eCO2)
    range = Math.map(eCO2, 0, 1023, 0, 17)
    while (Position <= range) {
        Strip.setPixelColor(Position, neopixel.colors(NeoPixelColors.Red))
        Strip.show()
        Position += 1
    }
    basic.pause(500)
})
