input.onButtonPressed(Button.A, function () {
    basic.showString("Mein name ist Gonzalez")
})
basic.showString("Hallo")
basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Ghost)
    } else {
        basic.showLeds(`
            . # . # .
            . . . . .
            # # # # #
            # . . . #
            . # # # .
            `)
    }
})
