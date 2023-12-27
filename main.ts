input.onButtonPressed(Button.A, function () {
    Gas += -10
})
input.onGesture(Gesture.Shake, function () {
    Gas = 0
    Bereit = 0
})
input.onButtonPressed(Button.AB, function () {
    if (Bereit) {
        Bereit = 0
    } else {
        Bereit = 1
    }
    Gas = 0
})
input.onButtonPressed(Button.B, function () {
    Gas += 10
})
let Richtung = 0
let Gas = 0
let Bereit = 0
radio.setGroup(7)
Bereit = 0
basic.forever(function () {
    Richtung = input.rotation(Rotation.Roll)
    radio.sendValue("B", Bereit)
    radio.sendValue("R", Richtung)
    radio.sendValue("G", Gas)
})
