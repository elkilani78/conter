let conter = 0
input.onButtonPressed(Button.A, function () {
    conter += 1
    basic.showNumber(conter)
})
input.onButtonPressed(Button.AB, function () {
    conter = 0
    basic.showNumber(conter)
})
input.onButtonPressed(Button.B, function () {
    conter += -1
    basic.showNumber(conter)
})
