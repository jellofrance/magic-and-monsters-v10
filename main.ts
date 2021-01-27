namespace SpriteKind {
    export const Boss = SpriteKind.create()
    export const Legend = SpriteKind.create()
    export const NPC = SpriteKind.create()
    export const Carriage = SpriteKind.create()
    export const Monkey = SpriteKind.create()
    export const PlayerBeforeMove = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (PlayerExists == 1) {
    	
    }
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (ABTMO == 1) {
        mySplashScreen.release()
        ABTMO = 0
        if (blockSettings.exists("Name")) {
        	
        } else {
            Name = game.askForString("Your Name")
        }
        if (blockSettings.exists("Age")) {
        	
        } else {
            Age = game.askForNumber("Your Age")
        }
        blockSettings.writeString("Name", Name)
        blockSettings.writeNumber("Age", Age)
        TheMonkey = sprites.create(img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e f c . . . . 
            . f d d d d e e e f f . . . . . 
            . . f f f f f e e e e f . . . . 
            . . . . f f e e e e e e f . f f 
            . . . f e e f e e f e e f . e f 
            . . f e e f e e f e e e f . e f 
            . f b d f d b f b b f e f f e f 
            . f d d f d d f d d b e f f f f 
            . . f f f f f f f f f f f f f . 
            `, SpriteKind.Monkey)
        mySprite = sprites.create(img`
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e 4 d d d d f . . . 
            . . . . f f e e 4 4 4 e f . . . 
            . . . . . 4 d d e 2 2 2 f . . . 
            . . . . . e d d e 2 2 2 f . . . 
            . . . . . f e e f 4 5 5 f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . f f f . . . . . . 
            `, SpriteKind.Player)
        Carriage2 = sprites.create(img`
            .............................................
            .............................................
            .............................................
            .............................................
            .............................................
            .............................................
            .............................................
            .............................................
            .............................................
            .....11111111111111111111111111111111111.....
            ....111111111111111111111111111111ccccc11....
            ....11111111111111111111111111111ccccccc1....
            ....11111111111111111111111111111ccccccc1....
            ....11111111111111111111111111111ccccccc1....
            ....11111111111111111111111111111ccccccc1....
            ....11111111111111111111111111111ccccccc1....
            ....11111111111111111111111111111ccccccc1....
            ....11111111111111111111111111111ccccccc1....
            ....fffffffffffffffffffffffffffffffffffff....
            .........eee.....................eee.........
            .......ee.e.ee.................ee.e.ee.......
            ......ee..e..ee...............ee..e..ee......
            ......e.e.e.e.e...............e.e.e.e.e......
            .....e...eee...e.............e...eee...e.....
            .....eeeeeeeeeee.............eeeeeeeeeee.....
            .....e...eee...e.............e...eee...e.....
            ......e.e.e.e.e...............e.e.e.e.e......
            ......ee..e..ee...............ee..e..ee......
            .......ee.e.ee.................ee.e.ee.......
            .........eee.....................eee.........
            `, SpriteKind.Carriage)
        Carriage2.setPosition(38, 49)
        TheMonkey.setPosition(120, 51)
        PlayerExists = 1
        tiles.setTilemap(tilemap`level_1`)
    }
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Monkey, function (sprite, otherSprite) {
    sprite.destroy()
    timer.after(500, function () {
        animation.runImageAnimation(
        TheMonkey,
        [img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . f f 
            c c c c c d d d e e f c . f e f 
            . f d d d d d e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f e f 
            . . . f e f f e f e e e e f f . 
            . . . f e f f e f e e e e f . . 
            . . . f d b f d b f f e f . . . 
            . . . f d d c d d b b d f . . . 
            . . . . f f f f f f f f f . . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            c d e e d d d d e e d d f . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e b d c . f f 
            . f d d d d e e e f f c . f e f 
            . f f f f f f e e e e f . f e f 
            . f f f f e e e e e e e f f e f 
            f d d f d d f e f e e e e f f . 
            f d b f d b f e f e e e e f . . 
            f f f f f f f f f f f f e f . . 
            . . . . . . . . . f c d d f . . 
            . . . . . . . . . . f f f f . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f f . . . . 
            . c d d d d d d e e d d f . . . 
            . c d f d d f d e e b d c . . . 
            c d d f d d f d e e b d c . f f 
            c d e e d d d d e e f c . f e f 
            c d d d d c d e e e f . . f e f 
            . f c c c d e e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f f . 
            . . f f e f e e f e e e e f . . 
            . f e f f e e f f f e e e f . . 
            f d d b d d c f f f f f f b f . 
            f d d c d d d f . . f c d d f . 
            . f f f f f f f . . . f f f . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f f f . . . . 
            . . f d d d e e e e d d f . . . 
            . c d d d d d e e e b d c . . . 
            . c d d d d d d e e b d c . . . 
            c d d f d d f d e e f c . f f . 
            c d d f d d f d e e f . . f e f 
            c d e e d d d d e e f . . f e f 
            . f d d d c d e e f f . . f e f 
            . . f f f d e e e e e f . f e f 
            . . . . f e e e e e e e f f f . 
            . . . . f f e e e e e b f f . . 
            . . . f e f f e e c d d f f . . 
            . . f d d b d d c f f f . . . . 
            . . f d d c d d d f f . . . . . 
            . . . f f f f f f f . . . . . . 
            `],
        200,
        true
        )
        animation.runMovementAnimation(
        TheMonkey,
        "q -10 -10 -20 0 q -10 -10 -20 0 q -5 -5 -15 0 q -10 -10 -20 0 q -10 -10 -20 0 q -5 -5 -15 0 q -10 -10 -20 0 q -5 -5 -15 0 ",
        3000,
        false
        )
    })
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (PlayerExists == 1) {
    	
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (PlayerExists == 1) {
    	
    }
})
function MainInfoScreen () {
    mySplashScreen = infoScreens.createSplashScreen()
    mySplashScreen.setTitles(["MAGIC", "AND", "MONSTERS"])
    mySplashScreen.addHeadlines(["Version 1.0"])
    mySplashScreen.addHeadlines(["By Amedeo L."])
    mySplashScreen.addInstructionsList(["Settings", "Select", "Move"])
    mySplashScreen.addInstructionsList(["Menu", "A", "WASD"])
    mySplashScreen.build()
    ABTMO = 1
    SplashScreenRotate = 1
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Carriage, function (sprite, otherSprite) {
    mySprite.destroy()
    Carriage2.setVelocity(-50, 0)
})
scene.onHitWall(SpriteKind.Carriage, function (sprite, location) {
    Carriage2.destroy()
    timer.after(1000, function () {
        Banana = sprites.create(img`
            f . . 
            5 . . 
            5 5 . 
            . 5 5 
            `, SpriteKind.Food)
        Banana.ay = 45
        Banana.setVelocity(50, -50)
        Banana.setPosition(7, 58)
        animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    })
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (PlayerExists == 1) {
    	
    }
})
scene.onHitWall(SpriteKind.Monkey, function (sprite, location) {
    timer.after(2000, function () {
        TheMonkey.destroy()
        game.splash("That's a whole other story.", "But this other one, is a world of Adventure!")
        tiles.setTilemap(tilemap`level_2`)
        timer.after(500, function () {
        	
        })
    })
})
let mySprite_JumpIntoCarriage = 0
let Banana: Sprite = null
let SplashScreenRotate = 0
let Carriage2: Sprite = null
let mySprite: Sprite = null
let TheMonkey: Sprite = null
let Age = 0
let Name = ""
let PlayerExists = 0
let ABTMO = 0
let mySplashScreen: SplashScreens = null
ABTMO = 0
PlayerExists = 0
music.playMelody("A F E F D G E F ", 120)
MainInfoScreen()
game.onUpdate(function () {
    if (game.runtime() >= mySplashScreen.nextTime) {
        mySplashScreen.rotate()
    }
})
game.onUpdate(function () {
    if (PlayerExists == 1) {
        PlayerExists = 0
        timer.after(500, function () {
            animation.runImageAnimation(
            TheMonkey,
            [img`
                . . . . f f f f f . . . . . . . 
                . . . f e e e e e f . . . . . . 
                . . f d d d d e e e f . . . . . 
                . c d f d d f d e e f f . . . . 
                . c d f d d f d e e d d f . . . 
                c d e e d d d d e e b d c . . . 
                c d d d d c d d e e b d c . . . 
                c c c c c d d e e e f c . . . . 
                . f d d d d e e e f f . . . . . 
                . . f f f f f e e e e f . . . . 
                . . . . f f e e e e e e f . f f 
                . . . f e e f e e f e e f . e f 
                . . f e e f e e f e e e f . e f 
                . f b d f d b f b b f e f f e f 
                . f d d f d d f d d b e f f f f 
                . . f f f f f f f f f f f f f . 
                `,img`
                . . . . f f f f f . . . . . . . 
                . . . f e e e e e f . . . . . . 
                . . f d d d d e e e f . . . . . 
                . c d f d d f d e e f f . . . . 
                . c d f d d f d e e d d f . . . 
                c d e e d d d d e e b d c . . . 
                c d d d d c d d e e b d c . . . 
                c c c c c d d e e e f c . . . . 
                . . c c c c e e e f f . . . . . 
                . f d d d d e e e e e f . . . . 
                . . f f f f f e e e e e f . f f 
                . . . f e e f e e f e e f . e f 
                . . f e e f e e f e e e f . e f 
                . f b d f d b f b b f e f f e f 
                . f d d f d d f d d b e f f f f 
                . . f f f f f f f f f f f f f . 
                `,img`
                . . . . f f f f f . . . . . . . 
                . . . f e e e e e f . . . . . . 
                . . f d d d d e e e f . . . . . 
                . c d f d d f d e e f f . . . . 
                . c d f d d f d e e d d f . . . 
                c d e e d d d d e e b d c . . . 
                c d d d d c d d e e b d c . . . 
                c c c c c d d e e e f c . . . . 
                . f d d d d e e e f f . . . . . 
                . . f f f f f e e e e f . . . . 
                . . . . f f e e e e e e f . f f 
                . . . f e e f e e f e e f . e f 
                . . f e e f e e f e e e f . e f 
                . f b d f d b f b b f e f f e f 
                . f d d f d d f d d b e f f f f 
                . . f f f f f f f f f f f f f . 
                `,img`
                . . . . f f f f f . . . . . . . 
                . . . f e e e e e f . . . . . . 
                . . f d d d d e e e f . . . . . 
                . c d f d d f d e e f f . . . . 
                . c d f d d f d e e d d f . . . 
                c d e e d d d d e e b d c . . . 
                c d d d d c d d e e b d c . . . 
                c c c c c d d e e e f c . . . . 
                . . c c c c e e e f f . . . . . 
                . f d d d d e e e e e f . . . . 
                . . f f f f f e e e e e f . f f 
                . . . f e e f e e f e e f . e f 
                . . f e e f e e f e e e f . e f 
                . f b d f d b f b b f e f f e f 
                . f d d f d d f d d b e f f f f 
                . . f f f f f f f f f f f f f . 
                `,img`
                . . . . f f f f f . . . . . . . 
                . . . f e e e e e f . . . . . . 
                . . f d d d d e e e f . . . . . 
                . c d f d d f d e e f f . . . . 
                . c d f d d f d e e d d f . . . 
                c d e e d d d d e e b d c . . . 
                c d d d d c d d e e b d c . . . 
                c c c c c d d e e e f c . . . . 
                . f d d d d e e e f f . . . . . 
                . . f f f f f e e e e f . . . . 
                . . . . f f e e e e e e f . f f 
                . . . f e e f e e f e e f . e f 
                . . f e e f e e f e e e f . e f 
                . f b d f d b f b b f e f f e f 
                . f d d f d d f d d b e f f f f 
                . . f f f f f f f f f f f f f . 
                `],
            100,
            false
            )
            TheMonkey.say("OOK! EEK!", 500)
            timer.after(1500, function () {
                animation.runImageAnimation(
                TheMonkey,
                [img`
                    . . . . f f f f f . . . . . . . 
                    . . . f e e e e e f . . . . . . 
                    . . f d d d d e e e f . . . . . 
                    . c d f d d f d e e f f . . . . 
                    . c d f d d f d e e d d f . . . 
                    c d e e d d d d e e b d c . . . 
                    c d d d d c d d e e b d c . . . 
                    c c c c c d d e e e f c . . . . 
                    . f d d d d e e e f f . . . . . 
                    . . f f f f f e e e e f . . . . 
                    . . . . f f e e e e e e f . f f 
                    . . . f e e f e e f e e f . e f 
                    . . f e e f e e f e e e f . e f 
                    . f b d f d b f b b f e f f e f 
                    . f d d f d d f d d b e f f f f 
                    . . f f f f f f f f f f f f f . 
                    `,img`
                    . . . . f f f f f . . . . . . . 
                    . . . f e e e e e f . . . . . . 
                    . . f d d d d e e e f . . . . . 
                    . c d f d d f d e e f f . . . . 
                    . c d f d d f d e e d d f . . . 
                    c d e e d d d d e e b d c . . . 
                    c d d d d c d d e e b d c . . . 
                    c c c c c d d e e e f c . . . . 
                    . . c c c c e e e f f . . . . . 
                    . f d d d d e e e e e f . . . . 
                    . . f f f f f e e e e e f . f f 
                    . . . f e e f e e f e e f . e f 
                    . . f e e f e e f e e e f . e f 
                    . f b d f d b f b b f e f f e f 
                    . f d d f d d f d d b e f f f f 
                    . . f f f f f f f f f f f f f . 
                    `,img`
                    . . . . f f f f f . . . . . . . 
                    . . . f e e e e e f . . . . . . 
                    . . f d d d d e e e f . . . . . 
                    . c d f d d f d e e f f . . . . 
                    . c d f d d f d e e d d f . . . 
                    c d e e d d d d e e b d c . . . 
                    c d d d d c d d e e b d c . . . 
                    c c c c c d d e e e f c . . . . 
                    . f d d d d e e e f f . . . . . 
                    . . f f f f f e e e e f . . . . 
                    . . . . f f e e e e e e f . f f 
                    . . . f e e f e e f e e f . e f 
                    . . f e e f e e f e e e f . e f 
                    . f b d f d b f b b f e f f e f 
                    . f d d f d d f d d b e f f f f 
                    . . f f f f f f f f f f f f f . 
                    `,img`
                    . . . . f f f f f . . . . . . . 
                    . . . f e e e e e f . . . . . . 
                    . . f d d d d e e e f . . . . . 
                    . c d f d d f d e e f f . . . . 
                    . c d f d d f d e e d d f . . . 
                    c d e e d d d d e e b d c . . . 
                    c d d d d c d d e e b d c . . . 
                    c c c c c d d e e e f c . . . . 
                    . . c c c c e e e f f . . . . . 
                    . f d d d d e e e e e f . . . . 
                    . . f f f f f e e e e e f . f f 
                    . . . f e e f e e f e e f . e f 
                    . . f e e f e e f e e e f . e f 
                    . f b d f d b f b b f e f f e f 
                    . f d d f d d f d d b e f f f f 
                    . . f f f f f f f f f f f f f . 
                    `,img`
                    . . . . f f f f f . . . . . . . 
                    . . . f e e e e e f . . . . . . 
                    . . f d d d d e e e f . . . . . 
                    . c d f d d f d e e f f . . . . 
                    . c d f d d f d e e d d f . . . 
                    c d e e d d d d e e b d c . . . 
                    c d d d d c d d e e b d c . . . 
                    c c c c c d d e e e f c . . . . 
                    . f d d d d e e e f f . . . . . 
                    . . f f f f f e e e e f . . . . 
                    . . . . f f e e e e e e f . f f 
                    . . . f e e f e e f e e f . e f 
                    . . f e e f e e f e e e f . e f 
                    . f b d f d b f b b f e f f e f 
                    . f d d f d d f d d b e f f f f 
                    . . f f f f f f f f f f f f f . 
                    `],
                100,
                false
                )
                TheMonkey.say("BANANA!", 500)
                timer.after(750, function () {
                    mySprite.say("SHUT UP!", 500)
                    mySprite.setImage(assets.image`Fuck this asset`)
                    mySprite_JumpIntoCarriage = 1
                })
            })
        })
    }
})
game.onUpdate(function () {
    if (mySprite_JumpIntoCarriage == 1) {
        mySprite.setVelocity(-50, 0)
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e e f f . . . . 
            . . . f 2 2 2 e d d 4 . . . . . 
            . . . f 2 2 2 e d d e . . . . . 
            . . . f 5 5 4 f e e f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d d 4 e e e f . . . 
            . . . f e 4 4 4 e d d 4 . . . . 
            . . . f 2 2 2 2 e d d e . . . . 
            . . f f 5 5 4 4 f e e f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        100,
        true
        )
    }
})
