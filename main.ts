effects.starField.startScreenEffect()
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 9 . . . . . . . . . 
    . . . . . . 5 . . . . . . . . . 
    . . . . . . 5 . . . . . . . . . 
    . . . . . . 5 . . . . . . . . . 
    . . . . . . 5 . . . . . . . . . 
    . . . . . . 5 . . . . . . . . . 
    . 1 5 5 5 5 5 5 5 5 5 5 1 . . . 
    . 2 . . . . 5 . . . . . 2 . . . 
    . . . . . 5 5 5 . . . . . . . . 
    . . . . . 5 . 5 . . . . . . . . 
    . . . . . 2 . 2 . . . . . . . . 
    . . . . . 2 . 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
