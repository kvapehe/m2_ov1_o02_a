input.onButtonPressed(Button.A, function () {
    tallet += 1
    if (tallet % startigjen == 0) {
        tallet = 0
        basic.showLeds(`
            # # # # #
            . . . . #
            . # . . #
            # # # # #
            . # . . .
            `)
    } else {
        basic.clearScreen()
    }
    basic.showNumber(tallet)
})
/**
 * Unngå å telle forbi 9
 * 
 * pga. "scrolling", og test med modulus..
 * 
 * Lurt å teste på enkle ting for å brukes senere.
 * 
 * Lyden er med for irritasjon og se det er liv i Mbit. Endrer nok intervall etter hvert.
 */
let startigjen = 0
let tallet = 0
tallet = 0
startigjen = 10
basic.showNumber(tallet)
basic.forever(function () {
    music.ringTone(131)
    basic.pause(25)
    music.rest(music.beat(BeatFraction.Whole))
    basic.pause(9000)
})
