var human = {
    canTalk: true,
    canWalk: true,
    canFly: false,
    has3Legs: false
}

var harsh = {
    isIntelligent: true,
    canPullHoe: false,
    haveGF: undefined,
    hadCrush: true,
    Future: true
}

harsh.__proto__ = "human";
console.log(harsh.hadCrush)