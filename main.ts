let gabe = 0
input.onGesture(Gesture.Shake, function () {
    gabe = randint(0, 6)
    if (gabe < 2) {
        basic.showIcon(IconNames.Confused)
    } else if (gabe < 4) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
basic.forever(function () {
	
})
