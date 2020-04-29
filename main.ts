enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
}
function move_n_pixels (sprite: Sprite, x: number, y: number, duration: number) {
    sprite.setVelocity(x / (duration / 1000), y / (duration / 1000))
    pause(duration)
    sprite.setVelocity(0, 0)
}
function hero_idle () {
    animation.stopAnimation(animation.AnimationTypes.All, hero)
}
function hero_walk_right () {
    animation.runImageAnimation(
    hero,
    [img`
. . . . . . . . . . . . . . . . 
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
. f e e 4 d 4 1 f d d e f f . . 
. . f e e e 4 d d d d f d d f . 
. . . . f e e 4 e e e f b b f . 
. . . . f 2 2 2 4 d d e b b f . 
. . . f f 4 4 4 e d d e b f . . 
. . . f f f f f f e e f f . . . 
. . . . f f . . . f f f . . . . 
`,img`
. . . . . f f f f f f . . . . . 
. . . f f e e e e f 2 f . . . . 
. . f f e e e e f 2 2 2 f . . . 
. . f e e e f f e e e e f . . . 
. . f f f f e e 2 2 2 2 e f . . 
. . f e 2 2 2 f f f f e 2 f . . 
. f f f f f f f e e e f f f . . 
. f f e 4 4 e b f 4 4 e e f . . 
. f e e 4 d 4 1 f d d e f f . . 
. . f e e e 4 d d d d f d d f . 
. . . f f e e 4 e e e f b b f . 
. . . . f 2 2 2 4 d d e b b f . 
. . . . e 2 2 2 e d d e b f . . 
. . . . f 4 4 4 f e e f f . . . 
. . . . . f f f f f f . . . . . 
. . . . . . f f f . . . . . . . 
`],
    250,
    true
    )
}
function say (sprite: Sprite, text: string, before: number, duration: number, after: number) {
    pause(before)
    sprite.say(text, duration)
    pause(duration)
    pause(after)
}
function guide_idle () {
    animation.stopAnimation(animation.AnimationTypes.All, guide)
}
function guide_walk_right () {
    animation.runImageAnimation(
    guide,
    [img`
. . . . . . f f f f 4 4 f . . . 
. . . . f f b f 5 4 5 5 4 f . . 
. . . f b 3 3 e 4 5 5 5 5 f . . 
. . f b 3 3 3 3 e 4 4 4 e f . . 
. . f 3 3 3 3 3 3 3 3 3 3 f . . 
. . f 3 3 3 3 e b 3 e e 3 3 f . 
. . f 3 3 3 3 f f e e e 3 3 f . 
. . f b b b b f b f e e e 3 f . 
. . f b b b b e 1 f 4 4 e f . . 
. f f b b b b f 4 4 4 4 f . . . 
. f b b b b f f f e e e f . . . 
. . f b b f 4 4 e d d d f . . . 
. . . f f e 4 4 e d d d f . . . 
. . . . f b e e b d b d b f . . 
. . . . f f d 1 d 1 d 1 f f . . 
. . . . . . f f b b f f . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f 4 4 f . . . 
. . . . f f b f 5 4 5 5 4 f . . 
. . . f b 3 3 e 4 5 5 5 5 f . . 
. . f b 3 3 3 3 e 4 4 4 e f . . 
. . f 3 3 3 3 3 3 3 3 3 3 3 f . 
. . f 3 3 3 3 e b 3 e e 3 3 f . 
. . f 3 3 3 3 f f e e e 3 3 f . 
. f f b b b b f b f e e e f . . 
. f b b b b b e 1 f 4 4 e . . . 
. f b b b b b f 4 4 4 4 f . . . 
. . f b b b 4 4 e d d d f . . . 
. . . f f f 4 4 e d d d f . . . 
. . . f b b e e b b d d d f . . 
. . . . f b d d 1 d 1 d b f . . 
. . . . . f f f b b f f f . . . 
`],
    250,
    true
    )
}
function start () {
    scene.setBackgroundColor(7)
    tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000305040105040505040104050301040504050304050502050505050505050305050505010305050205050503050505050505010504050504050401040403050504050505040505040104050505040501`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,myTiles.tile1,sprites.builtin.forestTiles1,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3],
            TileScale.Sixteen
        ))
    hero.y = scene.screenHeight() / 2
    hero.right = 0
    guide.y = scene.screenHeight() / 2
    guide.left = scene.screenWidth()
    pause(1000)
    guide_walk_left()
    move_n_pixels(guide, -40, 0, 2000)
    guide_idle()
    say(guide, "Hero?", 250, 1000, 250)
    hero_walk_right()
    move_n_pixels(hero, 70, 0, 1000)
    hero_idle()
    say(hero, "Yes, my lady?", 500, 1000, 250)
    guide_walk_left()
    move_n_pixels(guide, -30, 0, 500)
    guide_idle()
    say(guide, "Oh thank goodness you're here!", 250, 4000, 250)
    say(guide, "You know Hansel and Gretel?", 250, 4000, 250)
    say(hero, "Yes.", 250, 1000, 250)
    say(guide, "You know how in the tales, that they get captured by a witch and somehow escape?", 250, 10000, 250)
    say(hero, "Yes.", 250, 1000, 250)
    say(guide, "They've been captured by the SAME WITCH AGAIN!", 250, 7000, 250)
    say(hero, "And...", 250, 1000, 250)
    say(guide, "You get to go save them again!", 250, 5000, 250)
    say(hero, "Oh great...", 250, 1000, 250)
    say(guide, "Come on. It can't be that bad, right?", 250, 5000, 250)
    say(hero, "(Coughs) Nope. Totally. (Coughs)", 250, 3000, 250)
    say(guide, "See? You got it! Now, come on with me!", 250, 5000, 250)
    guide_walk_right()
    guide.setFlag(SpriteFlag.Ghost, true)
    hero.setFlag(SpriteFlag.Ghost, true)
    guide.setVelocity(50, 0)
    hero.say("You got to be kidding me!", 1000)
    pause(500)
    hero_walk_right()
    hero.setVelocity(50, 0)
    color.FadeToBlack.startScreenEffect(2000)
}
function guide_walk_left () {
    animation.runImageAnimation(
    guide,
    [img`
. . . f 4 4 f f f f . . . . . . 
. . f 4 5 5 4 5 f b f f . . . . 
. . f 5 5 5 5 4 e 3 3 b f . . . 
. . f e 4 4 4 e 3 3 3 3 b f . . 
. . f 3 3 3 3 3 3 3 3 3 3 f . . 
. f 3 3 e e 3 b e 3 3 3 3 f . . 
. f 3 3 e e e f f 3 3 3 3 f . . 
. f 3 e e e f b f b b b b f . . 
. . f e 4 4 f 1 e b b b b f . . 
. . . f 4 4 4 4 f b b b b f f . 
. . . f e e e f f f b b b b f . 
. . . f d d d e 4 4 f b b f . . 
. . . f d d d e 4 4 e f f . . . 
. . f b d b d b e e b f . . . . 
. . f f 1 d 1 d 1 d f f . . . . 
. . . . f f b b f f . . . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . f 4 4 f f f f . . . . . . 
. . f 4 5 5 4 5 f b f f . . . . 
. . f 5 5 5 5 4 e 3 3 b f . . . 
. . f e 4 4 4 e 3 3 3 3 b f . . 
. f 3 3 3 3 3 3 3 3 3 3 3 f . . 
. f 3 3 e e 3 b e 3 3 3 3 f . . 
. f 3 3 e e e f f 3 3 3 3 f . . 
. . f e e e f b f b b b b f f . 
. . . e 4 4 f 1 e b b b b b f . 
. . . f 4 4 4 4 f b b b b b f . 
. . . f d d d e 4 4 b b b f . . 
. . . f d d d e 4 4 f f f . . . 
. . f d d d b b e e b b f . . . 
. . f b d 1 d 1 d d b f . . . . 
. . . f f f b b f f f . . . . . 
`],
    250,
    true
    )
}
let guide: Sprite = null
let hero: Sprite = null
hero = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f f f f d d d d d e e f . . 
. f d d d d f 4 4 4 e e f . . . 
. f b b b b f 2 2 2 2 f 4 e . . 
. f b b b b f 2 2 2 2 f d 4 . . 
. . f c c f 4 5 5 4 4 f 4 4 . . 
. . . f f f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
guide = sprites.create(img`
. . . . . f f 4 4 f f . . . . . 
. . . . f 5 4 5 5 4 5 f . . . . 
. . . f e 4 5 5 5 5 4 e f . . . 
. . f b 3 e 4 4 4 4 e 3 b f . . 
. . f 3 3 3 3 3 3 3 3 3 3 f . . 
. f 3 3 e b 3 e e 3 b e 3 3 f . 
. f 3 3 f f e e e e f f 3 3 f . 
. f b b f b f e e f b f b b f . 
. f b b e 1 f 4 4 f 1 e b b f . 
f f b b f 4 4 4 4 4 4 f b b f f 
f b b f f f e e e e f f f b b f 
. f e e f b d d d d b f e e f . 
. . e 4 c d d d d d d c 4 e . . 
. . e f b d b d b d b b f e . . 
. . . f f 1 d 1 d 1 d f f . . . 
. . . . . f f b b f f . . . . . 
`, SpriteKind.Player)
guide.setFlag(SpriteFlag.Ghost, false)
hero.setFlag(SpriteFlag.Ghost, false)
start()
