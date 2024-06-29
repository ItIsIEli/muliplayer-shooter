controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    PEW_PEW_GO_THAT_WAY = 1
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (PEW_PEW_GO_THAT_WAY == 2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 5 5 5 . . . . . . 
            . . . . . . 4 5 5 5 5 . . . . . 
            . . . . . . 4 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, P2, 100, 0)
    } else if (PEW_PEW_GO_THAT_WAY == 3) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . 5 5 5 5 4 . . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, P2, -100, 0)
    } else if (PEW_PEW_GO_THAT_WAY == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 5 5 5 . . . . . . 
            . . . . . . 4 5 5 5 5 . . . . . 
            . . . . . . 4 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, P2, 0, -100)
    } else if (PEW_PEW_GO_THAT_WAY == 4) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 5 5 5 . . . . . . 
            . . . . . . 4 5 5 5 5 . . . . . 
            . . . . . . 4 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, P2, 0, 100)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (PEW_PEW_GO_THAT_WAY == 2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 5 5 5 . . . . . . 
            . . . . . . 4 5 5 5 5 . . . . . 
            . . . . . . 4 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, P1, 100, 0)
    } else if (PEW_PEW_GO_THAT_WAY == 3) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . 5 5 5 5 4 . . . . . . 
            . . . . . . 5 5 5 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, P1, -100, 0)
    } else if (PEW_PEW_GO_THAT_WAY == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 5 5 5 . . . . . . 
            . . . . . . 4 5 5 5 5 . . . . . 
            . . . . . . 4 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, P1, 0, -100)
    } else if (PEW_PEW_GO_THAT_WAY == 4) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 5 5 5 . . . . . . 
            . . . . . . 4 5 5 5 5 . . . . . 
            . . . . . . 4 5 5 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, P1, 0, 100)
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (true) {
    	
    }
})
controller.player2.onButtonEvent(ControllerButton.Down, ControllerButtonEvent.Pressed, function () {
    PEW_PEW_GO_THAT_WAY = 4
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    PEW_PEW_GO_THAT_WAY = 3
})
controller.player2.onButtonEvent(ControllerButton.Up, ControllerButtonEvent.Pressed, function () {
    PEW_PEW_GO_THAT_WAY = 1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    PEW_PEW_GO_THAT_WAY = 2
})
controller.player2.onButtonEvent(ControllerButton.Right, ControllerButtonEvent.Pressed, function () {
    PEW_PEW_GO_THAT_WAY = 2
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    PEW_PEW_GO_THAT_WAY = 4
})
controller.player2.onButtonEvent(ControllerButton.Left, ControllerButtonEvent.Pressed, function () {
    PEW_PEW_GO_THAT_WAY = 3
})
let projectile: Sprite = null
let PEW_PEW_GO_THAT_WAY = 0
let P2: Sprite = null
let P1: Sprite = null
P1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f f . . . 
    . . . . f f f . . f f 7 f . . . 
    . . . f f 7 f . . f f 7 f . . . 
    . f f f 7 7 f f f f f 7 f . . . 
    f f 7 7 7 f 7 7 f f 7 7 f f . . 
    f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
    f 7 7 7 7 7 7 7 7 7 7 7 7 f f . 
    f 7 7 7 7 7 7 7 f 7 7 7 7 7 f . 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 f . 
    f 7 7 f 7 7 7 7 7 7 7 7 7 7 f . 
    f 7 7 7 f 7 f f f f 7 7 7 7 f . 
    f 7 7 7 7 f f 7 7 7 7 7 7 7 f f 
    f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
P2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . f f . . . 
    . . . . f f f . . f f 8 f . . . 
    . . . f f 8 f . . f f 8 f . . . 
    . f f f 8 8 f f f f f 8 f . . . 
    f f 8 8 8 f 8 8 f f 8 8 f f . . 
    f 8 8 8 8 8 8 8 8 8 8 f 8 f . . 
    f 8 8 8 8 8 8 8 8 8 8 8 8 f f . 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 f . 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 f . 
    f 8 8 8 f 8 8 8 8 8 f 8 8 8 f . 
    f 8 8 8 f 8 8 8 8 f f 8 8 8 f . 
    f 8 8 8 f f f f f f 8 8 8 8 f f 
    f 8 8 8 8 8 8 8 8 8 8 8 8 8 8 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level2`)
controller.moveSprite(P1)
controller.player2.moveSprite(P2)
PEW_PEW_GO_THAT_WAY = 1
if (true) {
	
}
