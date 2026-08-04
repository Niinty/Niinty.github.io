// PokeChill: Item database and held-item definitions.
const item = {}

item.blackBelt = {
    subtitle: `(Fighting)`,
    type: "held",
     evo: true,
    info: function() {return `Se equipado: Aumenta o dano de golpes do tipo Fighting em x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.blackGlasses = {
    subtitle: `(Dark)`,
    type: "held",
    info: function() {return `Se equipado: Aumenta o dano de golpes do tipo Dark em x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.charcoal = {
    subtitle: `(Fire)`,
    type: "held",
    info: function() {return `Se equipado: Aumenta o dano de golpes do tipo Fire em x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.dragonFang = {
    subtitle: `(Dragon)`,
    type: "held",
    evo: true,
    info: function() {return `Se equipado: Aumenta o dano de golpes do tipo Dragon em x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.fairyFeather = {
    subtitle: `(Fairy)`,
    type: "held",
    info: function() {return `Se equipado: Aumenta o dano de golpes do tipo Fairy em x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.hardStone = {
    subtitle: `(Rock)`,
    type: "held",
    info: function() {return `Se equipado: Aumenta o dano de golpes do tipo Rock em x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.magnet = {
    subtitle: `(Electric)`,
    type: "held",
    info: function() {return `Se equipado: Aumenta o dano de golpes do tipo Electric em x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.metalCoat = {
    subtitle: `(Steel)`,
    type: "held",
    evo: true,
    info: function() {return `Se equipado: Aumenta o dano de golpes do tipo Steel em x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.miracleSeed = {
    subtitle: `(Grass)`,
    type: "held",
    info: function() {return `Se equipado: Aumenta o dano de golpes do tipo Grass em x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.mysticWater = {
    subtitle: `(Water)`,
    type: "held",
    info: function() {return `Se equipado: Aumenta o dano de golpes do tipo Water em x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.neverMeltIce = {
    subtitle: `(Ice)`,
    type: "held",
    info: function() {return `Se equipado: Aumenta o dano de golpes do tipo Ice em x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.poisonBarb = {
    subtitle: `(Poison)`,
    type: "held",
    info: function() {return `Se equipado: Aumenta o dano de golpes do tipo Poison em x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.sharpBeak = {
    subtitle: `(Flying)`,
    type: "held",
    info: function() {return `Se equipado: Aumenta o dano de golpes do tipo Flying em x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.silkScarf = {
    subtitle: `(Normal)`,
    type: "held",
    info: function() {return `Se equipado: Aumenta o dano de golpes do tipo Normal em x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.silverPowder = {
    subtitle: `(Bug)`,
    type: "held",
    info: function() {return `Se equipado: Aumenta o dano de golpes do tipo Bug em x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.softSand = {
    subtitle: `(Ground)`,
    type: "held",
    info: function() {return `Se equipado: Aumenta o dano de golpes do tipo Ground em x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.spellTag = {
    subtitle: `(Ghost)`,
    type: "held",
    info: function() {return `Se equipado: Aumenta o dano de golpes do tipo Ghost em x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.twistedSpoon = {
    subtitle: `(Psychic)`,
    type: "held",
    info: function() {return `Se equipado: Aumenta o dano de golpes do tipo Psychic em x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.eviolite = {
    type: "held",
    info: function() {return `Se equipado: Se o Pokémon não estiver totalmente evoluído, diminui o dano recebido em x${this.power().toFixed(2)}. Isso não se aplica a Pokémon em estágio final que possuam uma Mega Evolução`},
    power : function() { return 1+(returnItemLevel(this.id)/5)}
}

item.lightClay = {
    type: "held",
    info: function() {return `Se equipado: Aumenta a duração de buffs positivos usados em 1 turno e aumenta o dano causado em x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.06*returnItemLevel(this.id))}
}

item.mentalHerb = {
    type: "held",
    info: function() {return `Se equipado: Diminui a duração de debuffs recebidos em 1 turno e diminui o dano recebido em x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.06*returnItemLevel(this.id))}
}

item.flameOrb = {
    type: "held",
    info: function() {return `Se equipado: Aumenta o dano do usuário em x${this.power().toFixed(2)}, mas causa ${tagBurn}`},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.toxicOrb = {
    type: "held",
    info: function() {return `Se equipado: Aumenta o dano do usuário em x${this.power().toFixed(2)}, mas causa ${tagPoisoned}`},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.choiceBand = {
    type: "held",
    info: function() {return `Se equipado: Aumenta o Ataque do usuário em x${this.power().toFixed(2)}, mas impede a troca`},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.choiceSpecs = {
    type: "held",
    info: function() {return `Se equipado: Aumenta o Ataque Especial do usuário em x${this.power().toFixed(2)}, mas impede a troca`},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.lifeOrb = {
    type: "held",
    info: function() {return `Se equipado: Aumenta o dano do usuário em x${this.power().toFixed(2)}, mas perde 1/10 do seu HP máximo por turno`},
    power : function() { return 1+(0.2*returnItemLevel(this.id))}
}

item.assaultVest = {
    type: "held",
    info: function() {return `Se equipado: Aumenta a defesa geral em x${this.power().toFixed(2)}, mas o usuário não pode usar golpes com poder 0`},
    power : function() { return 1+(0.2*returnItemLevel(this.id))}
}

item.clearAmulet = {
    type: "held",
    info: function() {return `Se equipado: Diminui a duração de debuffs recebidos em ${Math.floor(this.power())} turnos`},
    power : function() { return 0.5+(0.5*returnItemLevel(this.id))}
}

item.ejectPack = {
    type: "held",
    info: function() {return `Se equipado: Aumenta o dano causado em x${this.power().toFixed(2)}, mas assim que todos os golpes do usuário forem executados, troca para o membro anterior do time`},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.ejectButton = {
    type: "held",
    info: function() {return `Se equipado: Aumenta o dano causado em x${this.power().toFixed(2)}, mas assim que todos os golpes do usuário forem executados, troca para o próximo membro do time`},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.quickClaw = {
    type: "held",
    info: function() {return `Se equipado: Golpes que atacam mais rápido que o normal são executados x${this.power().toFixed(2)} mais rápido`},
    power : function() { return 1+(0.15*returnItemLevel(this.id))}
}

item.loadedDice = {
    type: "held",
    info: function() {return `Se equipado: Golpes de múltiplos ataques acertam garantidamente o número máximo de vezes e causam x${this.power().toFixed(2)} mais dano`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.metronome = {
    type: "held",
    info: function() {return `Se equipado: Golpes que ficam mais poderosos quanto mais estacas (stacks) possuem causam x${this.power().toFixed(2)} mais dano`},
    power : function() { return 1+(0.2*returnItemLevel(this.id))}
}

item.powerHerb = {
    type: "held",
    info: function() {return `Se equipado: Golpes com poder 0 são executados x${this.power().toFixed(2)} mais rápido`},
    power : function() { return 1+(0.2*returnItemLevel(this.id))}
}

item.luckyPunch = {
    type: "held",
    info: function() {return `Se equipado: Golpes afetados por Iron Fist causam x${this.power().toFixed(2)} mais dano, e seus efeitos secundários são executados duas vezes`},
    power : function() { return 1.1+(0.15*returnItemLevel(this.id))}
}

item.laggingTail = {
    type: "held",
    info: function() {return `Se equipado: Golpes que atacam mais devagar que o normal causam x${this.power().toFixed(2)} mais dano`},
    power : function() { return 1.1+(0.15*returnItemLevel(this.id))}
}

item.weaknessPolicy = {
    type: "held",
    info: function() {return `Se equipado: Aumenta o dano causado em x${this.power().toFixed(2)} e aumenta a Velocidade em 50% por 8 turnos quando atingido por um golpe Super Efetivo`},
    power : function() { return 1+(0.06*returnItemLevel(this.id))}
}

item.heavyDutyBoots = {
    type: "held",
    info: function() {return `Se equipado: Previne o dano do efeito de campo Stealth Rocks e diminui o dano recebido em x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.06*returnItemLevel(this.id))}
}

item.leftovers = {
    type: "held",
    info: function() {return `Se equipado: Diminui o dano de fadiga do usuário em x${this.power().toFixed(2)}`},
    power : function() { return 1+(0.2*returnItemLevel(this.id))}
}



item.bugGem = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Aumenta o dano causado em x${this.power().toFixed(2)} e permite que golpes do tipo Bug recebam bônus de STAB`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.darkGem = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Aumenta o dano causado em x${this.power().toFixed(2)} e permite que golpes do tipo Dark recebam bônus de STAB`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.dragonGem = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Aumenta o dano causado em x${this.power().toFixed(2)} e permite que golpes do tipo Dragon recebam bônus de STAB`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.electricGem = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Aumenta o dano causado em x${this.power().toFixed(2)} e permite que golpes do tipo Electric recebam bônus de STAB`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.fairyGem = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Aumenta o dano causado em x${this.power().toFixed(2)} e permite que golpes do tipo Fairy recebam bônus de STAB`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.fightingGem = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Aumenta o dano causado em x${this.power().toFixed(2)} e permite que golpes do tipo Fighting recebam bônus de STAB`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.fireGem = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Aumenta o dano causado em x${this.power().toFixed(2)} e permite que golpes do tipo Fire recebam bônus de STAB`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.flyingGem = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Aumenta o dano causado em x${this.power().toFixed(2)} e permite que golpes do tipo Flying recebam bônus de STAB`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.ghostGem = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Aumenta o dano causado em x${this.power().toFixed(2)} e permite que golpes do tipo Ghost recebam bônus de STAB`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.grassGem = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Aumenta o dano causado em x${this.power().toFixed(2)} e permite que golpes do tipo Grass recebam bônus de STAB`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.groundGem = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Aumenta o dano causado em x${this.power().toFixed(2)} e permite que golpes do tipo Ground recebam bônus de STAB`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.iceGem = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Aumenta o dano causado em x${this.power().toFixed(2)} e permite que golpes do tipo Ice recebam bônus de STAB`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.normalGem = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Aumenta o dano causado em x${this.power().toFixed(2)} e permite que golpes do tipo Normal recebam bônus de STAB`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.poisonGem = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Aumenta o dano causado em x${this.power().toFixed(2)} e permite que golpes do tipo Poison recebam bônus de STAB`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.psychicGem = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Aumenta o dano causado em x${this.power().toFixed(2)} e permite que golpes do tipo Psychic recebam bônus de STAB`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.rockGem = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Aumenta o dano causado em x${this.power().toFixed(2)} e permite que golpes do tipo Rock recebam bônus de STAB`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.steelGem = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Aumenta o dano causado em x${this.power().toFixed(2)} e permite que golpes do tipo Steel recebam bônus de STAB`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}

item.waterGem = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Aumenta o dano causado em x${this.power().toFixed(2)} e permite que golpes do tipo Water recebam bônus de STAB`},
    power : function() { return 1+(0.1*returnItemLevel(this.id))}
}













item.luckIncense = {
    type: "held",
    info: function() {return `Se equipado: Aumenta o peso de drops de itens raros em ${this.power()}%. Funciona sempre para todos, independente de quem estiver segurando`},
    power : function() { return 0.5+(0.5*returnItemLevel(this.id))}
}

item.pureIncense = {
    type: "held",
    info: function() {return `Se equipado: Aumenta o peso de Pokémon raros em ${this.power()}%. Funciona sempre para todos, independente de quem estiver segurando`},
    power : function() { return 0.5+(0.5*returnItemLevel(this.id))}
}

item.luckyEgg = {
    type: "held",
    info: function() {return `Se equipado: Aumenta a experiência ganha pelo Pokémon em ${this.power()}%`},
    power : function() { return 40+(10*returnItemLevel(this.id))}
}

item.shinyCharm = {
    type: "held",
    info: function() {return `Se equipado: Aumenta a chance de encontrar um Pokémon selvagem shiny em ${this.power()}%. Funciona sempre para todos, independente de quem estiver segurando`},
    power : function() { return 0+(10*returnItemLevel(this.id))}
}


item.occaBerry = {
    subtitle: `(Fire)`,
    type: "held",
    sort: "berry",
    info: function() {return `Se equipado: Diminui o dano super efetivo recebido de golpes do tipo Fire em ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.passhoBerry = {
    subtitle: `(Water)`,
    type: "held",
    sort: "berry",
    info: function() {return `Se equipado: Diminui o dano super efetivo recebido de golpes do tipo Water em ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.wacanBerry = {
    subtitle: `(Electric)`,
    type: "held",
    sort: "berry",
    info: function() {return `Se equipado: Diminui o dano super efetivo recebido de golpes do tipo Electric em ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.rindoBerry = {
    subtitle: `(Grass)`,
    type: "held",
    sort: "berry",
    info: function() {return `Se equipado: Diminui o dano super efetivo recebido de golpes do tipo Grass em ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.yacheBerry = {
    subtitle: `(Ice)`,
    type: "held",
    sort: "berry",
    info: function() {return `Se equipado: Diminui o dano super efetivo recebido de golpes do tipo Ice em ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.chopleBerry = {
    subtitle: `(Fighting)`,
    type: "held",
    sort: "berry",
    info: function() {return `Se equipado: Diminui o dano super efetivo recebido de golpes do tipo Fighting em ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.kebiaBerry = {
    subtitle: `(Poison)`,
    type: "held",
    sort: "berry",
    info: function() {return `Se equipado: Diminui o dano super efetivo recebido de golpes do tipo Poison em ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.shucaBerry = {
    subtitle: `(Ground)`,
    type: "held",
    sort: "berry",
    info: function() {return `Se equipado: Diminui o dano super efetivo recebido de golpes do tipo Ground em ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.cobaBerry = {
    subtitle: `(Flying)`,
    type: "held",
    sort: "berry",
    info: function() {return `Se equipado: Diminui o dano super efetivo recebido de golpes do tipo Flying em ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.payapaBerry = {
    subtitle: `(Psychic)`,
    type: "held",
    sort: "berry",
    info: function() {return `Se equipado: Diminui o dano super efetivo recebido de golpes do tipo Psychic em ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.tangaBerry = {
    subtitle: `(Bug)`,
    type: "held",
    sort: "berry",
    info: function() {return `Se equipado: Diminui o dano super efetivo recebido de golpes do tipo Bug em ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.chartiBerry = {
    subtitle: `(Rock)`,
    type: "held",
    sort: "berry",
    info: function() {return `Se equipado: Diminui o dano super efetivo recebido de golpes do tipo Rock em ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.kasibBerry = {
    subtitle: `(Ghost)`,
    type: "held",
    sort: "berry",
    info: function() {return `Se equipado: Diminui o dano super efetivo recebido de golpes do tipo Ghost em ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.habanBerry = {
    subtitle: `(Dragon)`,
    type: "held",
    sort: "berry",
    info: function() {return `Se equipado: Diminui o dano super efetivo recebido de golpes do tipo Dragon em ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.colburBerry = {
    subtitle: `(Dark)`,
    type: "held",
    sort: "berry",
    info: function() {return `Se equipado: Diminui o dano super efetivo recebido de golpes do tipo Dark em ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.babiriBerry = {
    subtitle: `(Steel)`,
    type: "held",
    sort: "berry",
    info: function() {return `Se equipado: Diminui o dano super efetivo recebido de golpes do tipo Steel em ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}

item.roseliBerry = {
    subtitle: `(Fairy)`,
    type: "held",
    sort: "berry",
    info: function() {return `Se equipado: Diminui o dano super efetivo recebido de golpes do tipo Fairy em ${this.power()}%`},
    power : function() { return 30+(10*returnItemLevel(this.id))}
}


item.terrainExtender = {
    type: "held",
    info: function() {return `Se equipado: Aumenta a duração de ${tagTrickRoom}, ${tagWeirdRoom}, ${tagCrossRoom}, ${tagLightScreen} e ${tagSafeguard} em ${this.power()} turnos`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.dampRock = {
    type: "held",
    info: function() {return `Se equipado: Aumenta a duração do clima ${tagRainy} em ${this.power()} turnos`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.heatRock = {
    type: "held",
    info: function() {return `Se equipado: Aumenta a duração do clima ${tagSunny} em ${this.power()} turnos`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.icyRock = {
    type: "held",
    info: function() {return `Se equipado: Aumenta a duração do clima ${tagHail} em ${this.power()} turnos`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.smoothRock = {
    type: "held",
    info: function() {return `Se equipado: Aumenta a duração do clima ${tagSandstorm} em ${this.power()} turnos`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.electricSeed = {
    type: "held",
    info: function() {return `Se equipado: Aumenta a duração de ${tagElectricTerrain} em ${this.power()} turnos`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.grassySeed = {
    type: "held",
    info: function() {return `Se equipado: Aumenta a duração de ${tagGrassyTerrain} em ${this.power()} turnos`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.mistySeed = {
    type: "held",
    info: function() {return `Se equipado: Aumenta a duração de ${tagMistyTerrain} em ${this.power()} turnos`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}

item.foggySeed = {
    type: "held",
    info: function() {return `Se equipado: Aumenta a duração do clima ${tagFoggy} em ${this.power()} turnos`},
    power : function() { return 5+(2*returnItemLevel(this.id))}
}








item.bottleCap = {
    type: "key",
    info: function() {return `Obtido ao adquirir uma quantidade excedente de itens (20+ para itens equipáveis) ou trocado por outras moedas`},
}

item.goldenBottleCap = {
    type: "key",
    info: function() {return `Obtido na Battle Frontier`},
}




item.timeCandy = {
    type: "key",
    usable: true,
    effect: function() {  if(afkSeconds<=0 && saved.currentArea!==areas.frontierSpiralingTower.id && saved.currentArea!==undefined) {afkSeconds += 10*60; this.got--; updateItemBag()} else {document.getElementById("tooltipTop").style.display = "none"; document.getElementById("tooltipMid").style.display = "none"; document.getElementById("tooltipBottom").innerHTML = `Não é possível fazer isso agora`; openTooltip()}  },
    info: function() {return `Uso: Avança o tempo de batalha em 10 minutos. Deve ser usado durante uma batalha`},
}

item.timeCandyXL = {
    type: "key",
    usable: true,
    effect: function() {  if(afkSeconds<=0 && saved.currentArea!==areas.frontierSpiralingTower.id && saved.currentArea!==undefined) {afkSeconds += 30*60; this.got--; updateItemBag()} else {document.getElementById("tooltipTop").style.display = "none"; document.getElementById("tooltipMid").style.display = "none"; document.getElementById("tooltipBottom").innerHTML = `Não é possível fazer isso agora`; openTooltip()}  },
    info: function() {return `Uso: Avança o tempo de batalha em 30 minutos. Deve ser usado durante uma batalha`},
}

item.festivalTicket = {
    type: "key",
    usable: true,
    effect: function() {
        seasonalSwitch() 
    },
    info: function() {return `Uso: Ativa um evento sazonal específico pelos próximos 10 dias. Ele durará pelos 10 dias seguintes e será substituído por eventos já em andamento. Porém, a loja sazonal desse evento não será aberta`},
}






item.rareCandy = {
    type: 'key',
    itemToUse: true,
    info: function() {return `Uso: Aumenta o nível de um Pokémon em 1`},
}

item.abilityPatch = {
    type: 'key',
    itemToUse: true,
    info: function() {return `Uso: Sorteia novamente a habilidade de um Pokémon`},
}

item.abilityCapsule = {
    type: 'key',
    itemToUse: true,
    info: function() {return `Uso: Desbloqueia a Hidden Ability de um Pokémon`},
}

item.heartScale = {
    type: 'key',
    itemToUse: true,
    info: function() {return `Uso: Reaprende um golpe previamente aprendido, adquirido através de herança genética (exceto golpes herdados através de Lock Capsules)`},
}

item.energyRoot = {
    type: "key",
    usable: true,
    effect: function() {  if(saved.geneticOperation > 1) {afkSecondsGenetics += 30*60; this.got--; updateItemBag()} else {document.getElementById("tooltipTop").style.display = "none"; document.getElementById("tooltipMid").style.display = "none"; document.getElementById("tooltipBottom").innerHTML = `Não é possível fazer isso agora`; openTooltip()}  },
    info: function() {return `Uso: Avança o tempo de uma operação genética em 30 minutos. Deve ser usado enquanto uma operação ativa estiver em andamento`},
}

item.fashionCase = {
    type: 'key',
    usable: true,
    info: function() {return `Uso: Obtém um Decor aleatório`},
    effect: function() {

    let pickedDecor = []

    for (const i in item){
        if (item[i].type !== "decor") continue
        if (item[i].rarity == undefined) continue
        if (item[i].rarity == "rare" && rng(0.1)) pickedDecor.push(i)
        if (item[i].rarity == "common") pickedDecor.push(i)
    }

    pickedDecor = arrayPick(pickedDecor)


        document.getElementById("tooltipTop").style.display = `inline`
        document.getElementById("tooltipTitle").style.display = `none`
        document.getElementById("tooltipBottom").style.display = `none`
        document.getElementById("tooltipMid").style.display = "inline"
        document.getElementById("tooltipTop").innerHTML = `<img src="img/decor/${pickedDecor}.png" style="scale:2">`
        document.getElementById("tooltipMid").innerHTML = `
        <div class="genetics-overview-tags" >
        <div style="filter:hue-rotate(100deg)" >${format(pickedDecor)} Decor obtido!</div>
        </div>
        `

    item[pickedDecor].got++
    this.got--;
    updateItemBag()
    openTooltip()


    

    },
}



item.neutralMint = {
    type: 'key',
    itemToUse: true,
    info: function() {return `Uso: Remove a nature de um Pokémon`},
}



item.autoRefightTicket = {
    type: "key",
    info: function() {return `Pode ser usado para reenfrentar batalhas automaticamente. Não é possível reenfrentar com o navegador fechado. É consumido ao vencer uma batalha`},
}

/** Insígnias de ginásio — ícone temporário: pikachuF (troque em img/pkmn/sprite ou itemIcon) */
//KANTO
item.gymBadgeBrock = {
    type: "key",
    itemIcon: "gymBadgeBrock",
    rename: "Rocha",
    subtitle: "(Gym)",
    info: function() {
        return `Obtenha ao derrotar Brock (rematch). Troque na Poke-Mart por 1 Auto-Refight Ticket. (Possui: ${this.got})`
    },
}
item.gymBadgeMisty = {
    type: "key",
    itemIcon: "gymBadgeMisty",
    rename: "Cascata",
    subtitle: "(Gym)",
    info: function() {
        return `Chance ao derrotar Misty (rematch). Troque na Poke-Mart por 1 Auto-Refight Ticket. (Possui: ${this.got})`
    },
}
item.gymBadgeLtsurge = {
    type: "key",
    itemIcon: "gymBadgeLtsurge",
    rename: "Trovao",
    subtitle: "(Gym)",
    info: function() {
        return `Chance ao derrotar Lt. Surge (rematch). Troque na Poke-Mart por 1 Auto-Refight Ticket. (Possui: ${this.got})`
    },
}
item.gymBadgeErika = {
    type: "key",
    itemIcon: "gymBadgeErika",
    rename: "Arco-Iris",
    subtitle: "(Gym)",
    info: function() {
        return `Chance ao derrotar Erika (rematch). Troque na Poke-Mart por 1 Auto-Refight Ticket. (Possui: ${this.got})`
    },
}
item.gymBadgeKoga = {
    type: "key",
    itemIcon: "gymBadgeKoga",
    rename: "Alma",
    subtitle: "(Gym)",
    info: function() {
        return `Chance ao derrotar Koga (rematch). Troque na Poke-Mart por 1 Auto-Refight Ticket. (Possui: ${this.got})`
    },
}
item.gymBadgeSabrina = {
    type: "key",
    itemIcon: "gymBadgeSabrina",
    rename: "Pantano",
    subtitle: "(Gym)",
    info: function() {
        return `Chance ao derrotar Sabrina (rematch). Troque na Poke-Mart por 1 Auto-Refight Ticket. (Possui: ${this.got})`
    },
}
item.gymBadgeBlaine = {
    type: "key",
    itemIcon: "gymBadgeBlaine",
    rename: "Vulcao",
    subtitle: "(Gym)",
    info: function() {
        return `Chance ao derrotar Blaine (rematch). Troque na Poke-Mart por 1 Auto-Refight Ticket. (Possui: ${this.got})`
    },
}
item.gymBadgeGiovanni = {
    type: "key",
    itemIcon: "gymBadgeGiovanni",
    rename: "Terra",
    subtitle: "(Gym)",
    info: function() {
        return `Chance ao derrotar Giovanni (rematch). Troque na Poke-Mart por 1 Auto-Refight Ticket. (Possui: ${this.got})`
    },
}


//JOHTO













item.yellowApricorn = {
    type: "key",
    info: function() {return `Obtido em raids T3 e T4. Trocado na Poke-Mart`},
}

item.pinkApricorn = {
    type: "key",
    info: function() {return `Obtido em raids T3 e T4. Trocado na Poke-Mart`},
}

item.greenApricorn = {
    type: "key",
    info: function() {return `Obtido em raids T3 e T4. Trocado na Poke-Mart`},
}

item.whiteApricorn = {
    type: "key",
    info: function() {return `Obtido em raids de mega-dimensão ★ e ★★. Trocado na Poke-Mart`},
}

item.blackApricorn = {
    type: "key",
    info: function() {return `Obtida durante suas aventuras e batalhas!`},
}







item.megaShard = {
    type: "key",
    info: function() {return `Pode ser usado para capturar Pokémon na Mega-Dimension. Expira ao final da rotação atual da Mega-Dimension`},
}

item.megaPiece = {
    type: "key",
    info: function() {return `Pode ser usado para capturar Pokémon na Mega-Dimension. Expira ao final da rotação atual da Mega-Dimension`},
}

item.megaChunk = {
    type: "key",
    info: function() {return `Pode ser usado para capturar Pokémon na Mega-Dimension. Expira ao final da rotação atual da Mega-Dimension`},
}

item.megaCluster = {
    type: "key",
    info: function() {return `Pode ser usado para capturar Pokémon de evento. Expira ao final do evento`},
}

item.primalEarth = {
    type: "key",
    rotation: 2,
    itemToUse : true,
    info: function() {return `Pode ser usado para capturar Pokémon de evento. Expira ao final do evento`},
}


item.thunderousRock = {
    type: "key",
    rotation: 1,
    info: function() {return `Pode ser usado para capturar Pokémon de evento. Expira ao final do evento`},
}

item.articRock = {
    type: "key",
    rotation: 1,
    info: function() {return `Pode ser usado para capturar Pokémon de evento. Expira ao final do evento`},
}

item.ancientOrchid = {
    type: "key",
    rotation: 2,
    info: function() {return `Pode ser usado para capturar Pokémon de evento. Expira ao final do evento`},
}

item.futureDisk = {
    type: "key",
    rotation: 5,
    info: function() {return `Pode ser usado para capturar Pokémon de evento. Expira ao final do evento`},
}

item.ancientKeystone = {
    type: "key",
    rotation: 3,
    info: function() {return `Pode ser usado para capturar Pokémon de evento. Expira ao final do evento`},
    
}

item.steelKeystone = {
    type: "key",
    rotation: 3,
    info: function() {return `Pode ser usado para capturar Pokémon de evento. Expira ao final do evento`},
}

item.frozenKeystone = {
    type: "key",
    rotation: 3,
    info: function() {return `Pode ser usado para capturar Pokémon de evento. Expira ao final do evento`},
}

item.aetherKeycard = {
    type: "key",
    rotation: 4,
    info: function() {return `Pode ser usado para capturar Pokémon de evento. Expira ao final do evento`},
}

item.wormholeResidue = {
    type: "key",
    rotation: 4,
    info: function() {return `Pode ser usado para capturar Pokémon de evento. Expira ao final do evento`},
}

item.futureContraption = {
    type: "key",
    rotation: 5,
    info: function() {return `Pode ser usado para capturar Pokémon de evento. Expira ao final do evento`},
}


item.redChain = {
    type: "key",
    rotation: 6,
    info: function() {return `Pode ser usado para capturar Pokémon de evento. Expira ao final do evento`},
}

item.wisdomPetal = {
    type: "key",
    rotation: 6,
    info: function() {return `Pode ser usado para capturar Pokémon de evento. Expira ao final do evento`},
}

item.epochFeather = {
    type: "key",
    rotation: 1,
    info: function() {return `Pode ser usado para capturar Pokémon de evento. Expira ao final do evento`},
}

item.pokeflute = {
    type: "key",
    rotation: 1,
    info: function() {return `Pode ser usado para capturar Pokémon de evento. Expira ao final do evento`},
}










item.oldGateau = {
    type: "key",
    event: `halloween`,
    info: function() {return `Item sazonal, dropado aleatoriamente ao derrotar Pokémon selvagens. Expira em ${season[saved.currentSeason].end.month}/${season[saved.currentSeason].end.day}`},
}































item.hpUp = {
    subtitle: `(Hp)`,
    type: 'key',
    vitamin: true,
    info: function() {return `Uso: Aumenta o IV de HP de um Pokémon em 1`},
}

item.protein = {
    subtitle: `(Attack)`,
    type: 'key',
    vitamin: true,
    info: function() {return `Uso: Aumenta o IV de Ataque de um Pokémon em 1`},
}

item.iron = {
    subtitle: `(Defense)`,
    type: 'key',
    vitamin: true,
    info: function() {return `Uso: Aumenta o IV de Defesa de um Pokémon em 1`},
}

item.calcium = {
    subtitle: `(Special Attack)`,
    type: 'key',
    vitamin: true,
    info: function() {return `Uso: Aumenta o IV de Ataque Especial de um Pokémon em 1`},
}

item.zinc = {
    subtitle: `(Special Defense)`,
    type: 'key',
    vitamin: true,
    info: function() {return `Uso: Aumenta o IV de Defesa Especial de um Pokémon em 1`},
}

item.carbos = {
    subtitle: `(Speed)`,
    type: 'key',
    vitamin: true,
    info: function() {return `Uso: Aumenta o IV de Velocidade de um Pokémon em 1`},
}




item.waterStone = {
    evo: true,
    info: function() {return `Uso: Evolui certos tipos de Pokémon (deve estar no nível ${wildAreaLevel2}+)`},
}
item.thunderStone = {
    evo: true,
    info: function() {return `Uso: Evolui certos tipos de Pokémon (deve estar no nível ${wildAreaLevel2}+)`},
}
item.sunStone = {
    evo: true,
    info: function() {return `Uso: Evolui certos tipos de Pokémon (deve estar no nível ${wildAreaLevel2}+)`},
}

item.linkStone = {
    evo: true,
    info: function() {return `Uso: Evolui certos tipos de Pokémon (deve estar no nível ${wildAreaLevel4}+)`},
}

item.ovalStone = {
    evo: true,
    info: function() {return `Uso: Evolui certos tipos de Pokémon (deve estar no nível ${wildAreaLevel2}+)`},
}
item.moonStone = {
    evo: true,
    info: function() {return `Uso: Evolui certos tipos de Pokémon (deve estar no nível ${wildAreaLevel2}+)`},
}
item.leafStone = {
    evo: true,
    info: function() {return `Uso: Evolui certos tipos de Pokémon (deve estar no nível ${wildAreaLevel2}+)`},
}
item.iceStone = {
    evo: true,
    info: function() {return `Uso: Evolui certos tipos de Pokémon (deve estar no nível ${wildAreaLevel2}+)`},
}

item.fireStone = {
    evo: true,
    info: function() {return `Uso: Evolui certos tipos de Pokémon (deve estar no nível ${wildAreaLevel2}+)`},
}
item.duskStone = {
    evo: true,
    info: function() {return `Uso: Evolui certos tipos de Pokémon (deve estar no nível ${wildAreaLevel2}+)`},
}
item.dawnStone = {
    evo: true,
    info: function() {return `Uso: Evolui certos tipos de Pokémon (deve estar no nível ${wildAreaLevel2}+)`},
}

item.shinyStone = {
    evo: true,
    info: function() {return `Uso: Evolui certos tipos de Pokémon (deve estar no nível ${wildAreaLevel2}+)`},
}

item.oddRock = {
    evo: true,
    info: function() {return `Uso: Evolui certos tipos de Pokémon (deve estar no nível ${wildAreaLevel4}+)`},
}


item.everstone = {
    rename: `neverstone`,
    type: "key",
    genetics: true,
    info: function() {return `Item de auxílio genético: Sorteia novamente a habilidade do Pokémon hospedeiro. Possui uma chance aumentada de sortear habilidades incomuns e raras`},
}

item.powerAnklet = {
    subtitle: `(Speed)`,
    type: "key",
    genetics: true,
    info: function() {return `Item de auxílio genético: Garante a chance de herdar o IV de Velocidade`},
}

item.powerBand = {
    subtitle: `(Special Defense)`,
    type: "key",
    genetics: true,
    info: function() {return `Item de auxílio genético: Garante a chance de herdar o IV de Defesa Especial`},
}

item.powerBelt = {
    subtitle: `(Defense)`,
    type: "key",
    genetics: true,
    info: function() {return `Item de auxílio genético: Garante a chance de herdar o IV de Defesa`},
}

item.powerBracer = {
    subtitle: `(Attack)`,
    type: "key",
    genetics: true,
    info: function() {return `Item de auxílio genético: Garante a chance de herdar o IV de Ataque`},
}

item.powerLens = {
    subtitle: `(Special Attack)`,
    type: "key",
    genetics: true,
    info: function() {return `Item de auxílio genético: Garante a chance de herdar o IV de Ataque Especial`},
}

item.powerWeight = {
    subtitle: `(Hp)`,
    type: "key",
    genetics: true,
    info: function() {return `Item de auxílio genético: Garante a chance de herdar o IV de HP`},
}

item.machoBrace = {
    type: "key",
    genetics: true,
    info: function() {return `Item de auxílio genético: Multiplica por 10 a chance de herdar IVs`},
}

item.lockCapsule = {
    type: "key",
    genetics: true,
    info: function() {return `Item de auxílio genético: Transfere os golpes atualmente equipados da amostra para o movepool do hospedeiro. O hospedeiro manterá tanto seus golpes equipados quanto os recém-transferidos, mas a amostra perderá os seus equipados. Só pode ser usado com pelo menos um nível de compatibilidade, e não funciona em signature moves`},
}

item.destinyKnot = {
    type: "key",
    genetics: true,
    info: function() {return `Item de auxílio genético: Troca a habilidade do Pokémon pela da amostra. Só pode ser usado com pelo menos um nível de compatibilidade e não funciona em Hidden Abilities`},
}













item.abomasite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAbomasnow.id },
}

item.absolite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAbsol.id },
}

item.aerodactylite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAerodactyl.id },
}

item.aggronite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAggron.id },
}

item.alakazite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAlakazam.id },
}

item.altarianite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAltaria.id },
}

item.ampharosite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAmpharos.id },
}

item.audinite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaAudino.id },
}

item.banettite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaBanette.id },
}

item.barbaracite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaBarbaracle.id },
}

item.baxcaliburite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaBaxcalibur.id },
}

item.beedrillite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaBeedrill.id },
}

item.blastoisinite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaBlastoise.id },
}

item.blazikenite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaBlaziken.id },
}

item.cameruptite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaCamerupt.id },
}

item.charizarditeX = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaCharizardX.id },
}

item.charizarditeY = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaCharizardY.id },
}

item.diancite = {
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaDiancie.id },
}

item.heatranite = {
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaHeatran.id },
}

item.dragonitite = {
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaDragonite.id },
}

item.falinksite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaFalinks.id },
}

item.feralitite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaFeraligatr.id },
}

item.galladite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaGallade.id },
}

item.garchompite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaGarchomp.id },
}

item.glalitite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaGlalie.id },
}

item.gardevoirite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaGardevoir.id },
}

item.gengarite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaGengar.id },
}

item.gyaradosite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaGyarados.id },
}

item.heracronite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaHeracross.id },
}

item.houndoominite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaHoundoom.id },
}

item.hawluchanite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaHawlucha.id },
}

item.kangaskhanite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaKangaskhan.id },
}

item.lopunnite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaLopunny.id },
}

item.lucarionite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaLucario.id },
}

item.manectite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaManectric.id },
}

item.mawilite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaMawile.id },
}

item.medichamite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaMedicham.id },
}

item.metagrossite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaMetagross.id },
}

item.mewtwoniteX = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaMewtwoX.id },
}

item.mewtwoniteY = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaMewtwoY.id },
}

item.pidgeotite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaPidgeot.id },
}

item.pyroarite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaPyroar.id },
}


item.pinsirite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaPinsir.id },
}


item.raichutiteX = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaRaichuX.id },
}

item.raichutiteY = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaRaichuY.id },
}

item.sablenite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSableye.id },
}



item.salamencite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSalamence.id },
}

item.sceptilite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSceptile.id },
}

item.scizorite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaScizor.id },
}

item.sharpedonite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSharpedo.id },
}

item.slowbronite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSlowbro.id },
}

item.steelixite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSteelix.id },
}

item.swampertite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaSwampert.id },
}

item.tyranitarite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaTyranitar.id },
}

item.venusaurite = {
    
    evo: true,
    info: function() {return `Uso: Evolui um certo Pokémon<br>Se equipado: Aumenta o dano causado por ${format(this.heldBonusPkmn())} em x${this.heldBonusPower().toFixed(2)}`},
    heldBonusPower: function() { return 1.15+(0.1*returnItemLevel(this.id)) },
    heldBonusPkmn: function() { return pkmn.megaVenusaur.id },
}

















item.magazineSubscription = {
    type: "key",
    info: function() {return `Melhoria Permanente: Recompensas diárias de exportação concedem um Fashion Case extra`},
}

item.battlePass = {
    type: "key",
    info: function() {return `Melhoria Permanente: Treinadores na battle frontier concedem +3 Golden Bottle Caps extras`},
}

item.replicatorUpgradeS = {
    type: "key",
    info: function() {return `Melhoria Permanente: Diminui em 30 minutos o tempo necessário para operações genéticas (até um mínimo de 10 minutos)`},
}

item.replicatorUpgradeE = {
    type: "key",
    info: function() {return `Melhoria Permanente: Permite que TODOS os golpes sejam herdáveis por um hospedeiro de divisão B ou inferior (incluindo Signature e Egg moves). Para que isso aconteça, são necessários pelo menos dois níveis de compatibilidade<br><br>Duas ou mais Egg Moves exatas transferidas dessa forma não podem estar presentes ao mesmo tempo em um único time, a menos que o usuário do golpe possua esse golpe como uma Egg Move ou Signature Move inerente`},
}



item.mysteryEgg = {
    type: "key",
    info: function() {return `Um ovo ainda não chocado. Saia do combate para descobrir o conteúdo!`},
    hidden:true
}

item.tmDummy = {
    hidden:true
}

item.nothing = {
    hidden:true
}






item.buginiumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Independente de quem estiver segurando, a cada ${this.power()} turnos, executa um ataque coordenado do tipo Bug caso o portador não esteja desmaiado. Se será físico ou especial depende do maior status do portador (se forem iguais, será aleatório, mas causará x1.25 mais dano). Esse ataque se beneficia dos status e do tipo do portador, mas não de suas habilidades nem de seus buffs. Apenas um Z Crystal pode ser equipado por time`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `bug`
}

item.darkiniumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Independente de quem estiver segurando, a cada ${this.power()} turnos, executa um ataque coordenado do tipo Dark caso o portador não esteja desmaiado. Se será físico ou especial depende do maior status do portador (se forem iguais, será aleatório, mas causará x1.25 mais dano). Esse ataque se beneficia dos status e do tipo do portador, mas não de suas habilidades nem de seus buffs. Apenas um Z Crystal pode ser equipado por time`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `dark`
}

item.dragoniumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Independente de quem estiver segurando, a cada ${this.power()} turnos, executa um ataque coordenado do tipo Dragon caso o portador não esteja desmaiado. Se será físico ou especial depende do maior status do portador (se forem iguais, será aleatório, mas causará x1.25 mais dano). Esse ataque se beneficia dos status e do tipo do portador, mas não de suas habilidades nem de seus buffs. Apenas um Z Crystal pode ser equipado por time`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `dragon`
}

item.electriumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Independente de quem estiver segurando, a cada ${this.power()} turnos, executa um ataque coordenado do tipo Electric caso o portador não esteja desmaiado. Se será físico ou especial depende do maior status do portador (se forem iguais, será aleatório, mas causará x1.25 mais dano). Esse ataque se beneficia dos status e do tipo do portador, mas não de suas habilidades nem de seus buffs. Apenas um Z Crystal pode ser equipado por time`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `electric`
}

item.fairiumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Independente de quem estiver segurando, a cada ${this.power()} turnos, executa um ataque coordenado do tipo Fairy caso o portador não esteja desmaiado. Se será físico ou especial depende do maior status do portador (se forem iguais, será aleatório, mas causará x1.25 mais dano). Esse ataque se beneficia dos status e do tipo do portador, mas não de suas habilidades nem de seus buffs. Apenas um Z Crystal pode ser equipado por time`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `fairy`
}

item.fightiniumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Independente de quem estiver segurando, a cada ${this.power()} turnos, executa um ataque coordenado do tipo Fighting caso o portador não esteja desmaiado. Se será físico ou especial depende do maior status do portador (se forem iguais, será aleatório, mas causará x1.25 mais dano). Esse ataque se beneficia dos status e do tipo do portador, mas não de suas habilidades nem de seus buffs. Apenas um Z Crystal pode ser equipado por time`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `fighting`
}

item.firiumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Independente de quem estiver segurando, a cada ${this.power()} turnos, executa um ataque coordenado do tipo Fire caso o portador não esteja desmaiado. Se será físico ou especial depende do maior status do portador (se forem iguais, será aleatório, mas causará x1.25 mais dano). Esse ataque se beneficia dos status e do tipo do portador, mas não de suas habilidades nem de seus buffs. Apenas um Z Crystal pode ser equipado por time`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `fire`
}

item.flyiniumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Independente de quem estiver segurando, a cada ${this.power()} turnos, executa um ataque coordenado do tipo Flying caso o portador não esteja desmaiado. Se será físico ou especial depende do maior status do portador (se forem iguais, será aleatório, mas causará x1.25 mais dano). Esse ataque se beneficia dos status e do tipo do portador, mas não de suas habilidades nem de seus buffs. Apenas um Z Crystal pode ser equipado por time`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `flying`
}

item.ghostiumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Independente de quem estiver segurando, a cada ${this.power()} turnos, executa um ataque coordenado do tipo Ghost caso o portador não esteja desmaiado. Se será físico ou especial depende do maior status do portador (se forem iguais, será aleatório, mas causará x1.25 mais dano). Esse ataque se beneficia dos status e do tipo do portador, mas não de suas habilidades nem de seus buffs. Apenas um Z Crystal pode ser equipado por time`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `ghost`
}

item.grassiumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Independente de quem estiver segurando, a cada ${this.power()} turnos, executa um ataque coordenado do tipo Grass caso o portador não esteja desmaiado. Se será físico ou especial depende do maior status do portador (se forem iguais, será aleatório, mas causará x1.25 mais dano). Esse ataque se beneficia dos status e do tipo do portador, mas não de suas habilidades nem de seus buffs. Apenas um Z Crystal pode ser equipado por time`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `grass`
}

item.groundiumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Independente de quem estiver segurando, a cada ${this.power()} turnos, executa um ataque coordenado do tipo Ground caso o portador não esteja desmaiado. Se será físico ou especial depende do maior status do portador (se forem iguais, será aleatório, mas causará x1.25 mais dano). Esse ataque se beneficia dos status e do tipo do portador, mas não de suas habilidades nem de seus buffs. Apenas um Z Crystal pode ser equipado por time`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `ground`
}

item.iciumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Independente de quem estiver segurando, a cada ${this.power()} turnos, executa um ataque coordenado do tipo Ice caso o portador não esteja desmaiado. Se será físico ou especial depende do maior status do portador (se forem iguais, será aleatório, mas causará x1.25 mais dano). Esse ataque se beneficia dos status e do tipo do portador, mas não de suas habilidades nem de seus buffs. Apenas um Z Crystal pode ser equipado por time`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `ice`
}

item.normaliumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Independente de quem estiver segurando, a cada ${this.power()} turnos, executa um ataque coordenado do tipo Normal caso o portador não esteja desmaiado. Se será físico ou especial depende do maior status do portador (se forem iguais, será aleatório, mas causará x1.25 mais dano). Esse ataque se beneficia dos status e do tipo do portador, mas não de suas habilidades nem de seus buffs. Apenas um Z Crystal pode ser equipado por time`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `normal`
}

item.poisoniumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Independente de quem estiver segurando, a cada ${this.power()} turnos, executa um ataque coordenado do tipo Poison caso o portador não esteja desmaiado. Se será físico ou especial depende do maior status do portador (se forem iguais, será aleatório, mas causará x1.25 mais dano). Esse ataque se beneficia dos status e do tipo do portador, mas não de suas habilidades nem de seus buffs. Apenas um Z Crystal pode ser equipado por time`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `poison`
}

item.psychiumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Independente de quem estiver segurando, a cada ${this.power()} turnos, executa um ataque coordenado do tipo Psychic caso o portador não esteja desmaiado. Se será físico ou especial depende do maior status do portador (se forem iguais, será aleatório, mas causará x1.25 mais dano). Esse ataque se beneficia dos status e do tipo do portador, mas não de suas habilidades nem de seus buffs. Apenas um Z Crystal pode ser equipado por time`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `psychic`
}

item.rockiumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Independente de quem estiver segurando, a cada ${this.power()} turnos, executa um ataque coordenado do tipo Rock caso o portador não esteja desmaiado. Se será físico ou especial depende do maior status do portador (se forem iguais, será aleatório, mas causará x1.25 mais dano). Esse ataque se beneficia dos status e do tipo do portador, mas não de suas habilidades nem de seus buffs. Apenas um Z Crystal pode ser equipado por time`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `rock`
}

item.steeliumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Independente de quem estiver segurando, a cada ${this.power()} turnos, executa um ataque coordenado do tipo Steel caso o portador não esteja desmaiado. Se será físico ou especial depende do maior status do portador (se forem iguais, será aleatório, mas causará x1.25 mais dano). Esse ataque se beneficia dos status e do tipo do portador, mas não de suas habilidades nem de seus buffs. Apenas um Z Crystal pode ser equipado por time`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `steel`
}

item.wateriumZ = {
    type: "held",
    sort: "gem",
    info: function() {return `Se equipado: Independente de quem estiver segurando, a cada ${this.power()} turnos, executa um ataque coordenado do tipo Water caso o portador não esteja desmaiado. Se será físico ou especial depende do maior status do portador (se forem iguais, será aleatório, mas causará x1.25 mais dano). Esse ataque se beneficia dos status e do tipo do portador, mas não de suas habilidades nem de seus buffs. Apenas um Z Crystal pode ser equipado por time`},
    power : function() { return 20-(2*returnItemLevel(this.id))},
    zType: `water`
}




//normal
item.quickAttackTm  = {}
item.swiftTm  = {}
item.strengthTm  = {}
//fire
item.emberTm  = {}
item.incinerateTm = {}
item.flamethrowerTm = {}
//electric    
item.nuzzleTm = {}
item.thunderPunchTm = {}
item.thunderboltTm = {}
//ground
item.mudSlapTm = {}
item.bulldozeTm = {}
item.earthquakeTm = {}
//steel
item.bulletPunchTm = {}
item.metalClawTm = {}
item.flashCannonTm = {}
//flying
item.peckTm = {}
item.acrobaticsTm = {}
item.flyTm = {}
//poison
item.acidTm = {}
item.crossPoisonTm = {}
item.sludgeBombTm = {}
//ice
item.iceShardTm = {}
item.avalancheTm = {}
item.iceBeamTm = {}
//bug
item.twineedleTm = {}
item.bugBiteTm = {}
item.bugBuzzTm = {}
//water
item.waterGunTm = {}
item.waterPulseTm = {}
item.aquaTailTm = {}
//grass
item.leafageTm = {}
item.magicalLeafTm = {}
item.leafBladeTm = {}
//fighting
item.rockSmashTm = {}
item.forcePalmTm = {}
item.auraSphereTm = {}
//psychic
item.confusionTm = {}
item.psychoCutTm = {}
item.psychicTm = {}
//rock
item.rockThrowTm = {}
item.rockSlideTm = {}
item.powerGemTm = {}
//ghost
item.lickTm = {}
item.hexTm = {}
item.shadowBallTm = {}
//dragon
item.twisterTm = {}
item.dragonTailTm = {}
item.dragonRushTm = {}
item.dragonPulseTm = {}
//fighting
item.pursuitTm = {}
item.biteTm = {}
item.darkPulseTm = {}
//fairy
item.disarmingVoiceTm = {}
item.dazzlingGleamTm = {}
item.playRoughTm = {}

//shop


item.tackleTm = {}
item.quickAttackTm = {}
item.leerTm = {}


item.bulkUpTm = {}
item.thunderWaveTm = {}
item.toxicTm = {}
item.willOWispTm = {}

item.calmMindTm = {}
item.sunnyDayTm = {}
item.rainDanceTm = {}

item.crunchTm = {}
item.xScissorTm = {}
item.moonblastTm = {}

item.fireBlastTm = {}
item.hydroPumpTm = {}
item.thunderTm = {}
item.hyperBeamTm = {}

//frontier
item.swaggerTm = {}
item.ironDefenseTm = {}
item.feintAttackTm = {}
item.chillingWaterTm = {}
item.silverWindTm = {}
item.avalancheTm = {}
item.knockOffTm = {}
item.ominousWindTm = {}
item.flameChargeTm = {}
item.acidSprayTm = {}

item.hailTm = {}
item.fogTm = {}
item.sandstormTm = {}
item.electricTerrainTm = {}
item.mistyTerrainTm = {}
item.grassyTerrainTm = {}

item.nastyPlotTm = {}
item.swordsDanceTm = {}
item.voltSwitchTm = {}
item.uTurnTm = {}

item.chargeBeamTm = {}
item.dischargeTm = {}
item.scorchingSandsTm = {}
item.airShlashTm = {rename:`airSlashTm`}
item.poisonJabTm = {}
item.liquidationTm = {}
item.energyBallTm = {}
item.skyUppercutTm = {}
item.dracoMeteorTm = {}
item.spiritBreakTm = {}




item.trickRoomTm = {}
item.crossRoomTm = {}
item.weirdRoomTm = {}
item.safeguardTm = {}
item.lightScreenTm = {}



//memory

item.hydratationMemory = {rename:`hydrationMemory`}
item.sandVeilMemory = {}
item.snowCloakMemory = {}
item.marvelScaleMemory = {}
item.livingShieldMemory = {}
item.bigPecksMemory = {}
item.hyperCutterMemory = {}
item.synchronizeMemory = {}
item.iceBodyMemory = {}

item.rainDishMemory = {}
item.solarPowerMemory = {}
item.sandForceMemory = {}
item.scrappyMemory = {}

item.strongJawMemory = {}
item.toughClawsMemory = {}
item.ironFistMemory = {}
item.magicGuardMemory = {}

item.pickPocketMemory = {}







//decor


item.blueBarrette = { type: "decor", rarity: `common`} 
item.pinkBarrette = { type: "decor", rarity: `common`} 
item.greenBarrette = { type: "decor", rarity: `common`} 
item.blueBarrette = { type: "decor", rarity: `common`} 

item.blueFlower = { type: "decor", rarity: `common` } 
item.purpleFlower = { type: "decor", rarity: `common` } 
item.redFlower = { type: "decor", rarity: `common` } 

item.blueBalloon = { type: "decor", rarity: `common` } 
item.redBalloon = { type: "decor", rarity: `common` } 
item.greenBalloon = { type: "decor", rarity: `common` } 

item.professorHat = { type: "decor", rarity: `common` } 
item.academicHat = { type: "decor", rarity: `common` } 

item.redBall = { type: "decor", rarity: `common` } 
item.greenBall = { type: "decor", rarity: `common` } 
item.blueBall = { type: "decor", rarity: `common` } 

item.redHeaddress = { type: "decor", rarity: `common` } 
item.purpleHeaddress = { type: "decor", rarity: `common` } 
item.tealHeaddress = { type: "decor", rarity: `common` } 

item.blackTie = { type: "decor", rarity: `common` } 
item.whiteTie = { type: "decor", rarity: `common` } 
item.stripedTie = { type: "decor", rarity: `common` } 
item.greenTie = { type: "decor", rarity: `common` } 
item.orangeTie = { type: "decor", rarity: `common` } 
item.blueTie = { type: "decor", rarity: `common` } 

item.blackBowtie = { type: "decor", rarity: `common` } 
item.pinkBowtie = { type: "decor", rarity: `common` } 
item.blueBowtie = { type: "decor", rarity: `common` } 
item.yellowBowtie = { type: "decor", rarity: `common` } 

item.tealHeadband = { type: "decor", rarity: `common` } 
item.greenHeadband = { type: "decor", rarity: `common` } 
item.yellowHeadband = { type: "decor", rarity: `common` } 

item.blackScarf = { type: "decor", rarity: `common` } 
item.whiteScarf = { type: "decor", rarity: `common` } 
item.redScarf = { type: "decor", rarity: `common` } 
item.blueScarf = { type: "decor", rarity: `common` } 

item.yellowStar = { type: "decor", rarity: `common` } 
item.tealStar = { type: "decor", rarity: `common` } 
item.redStar = { type: "decor", rarity: `common` } 

item.blackMoustache = { type: "decor", rarity: `common` } 
item.whiteMoustache = { type: "decor", rarity: `common` } 

item.microphone = { type: "decor", rarity: `common` } 
item.oldUmbrella = { type: "decor", rarity: `common` } 
item.coloredParasol = { type: "decor", rarity: `common` } 
item.pokeballFlag = { type: "decor", rarity: `common` } 
item.pokeball = { type: "key", itemIcon: "pokeball", name: "Poke Ball", info: function(){ return `Pokebola utilizada no evento Daily Catch.` } }
item.greatball = { type: "key", itemIcon: "greatball", name: "Great Ball", info: function(){ return `Pokebola utilizada no evento Daily Catch. Possui taxa de captura maior que a Poke Ball.` } }
item.ultraball = { type: "key", itemIcon: "ultraball", name: "Ultra Ball", info: function(){ return `Pokebola utilizada no evento Daily Catch. Possui taxa de captura maior que a Great Ball.` } }
item.masterball = { type: "key", itemIcon: "masterball", name: "Master Ball", info: function(){ return `Pokebola utilizada no evento Daily Catch. Captura garantida!` } }
item.googlySpecs = { type: "decor", rarity: `common` } 
item.topHat = { type: "decor", rarity: `common` } 
item.gentlemanHat = { type: "decor", rarity: `common` } 
item.silverTiara = { type: "decor", rarity: `common` } 


//rare decor
item.frillyApron = { type: "decor", rarity: `rare` } 
item.chefHat = { type: "decor", rarity: `rare` } 
item.fluffyBeard = { type: "decor", rarity: `rare` } 
item.hummingNote = { type: "decor", rarity: `rare` } 
item.prettyDewdrop = { type: "decor", rarity: `rare` } 
item.spotlight = { type: "decor", rarity: `rare` } 
item.glitterPowder = { type: "decor", rarity: `rare` } 
item.confetti = { type: "decor", rarity: `rare` } 
item.comet = { type: "decor", rarity: `rare` } 
item.gorgeousSpecs = { type: "decor", rarity: `rare` } 
item.mysticSmoke = { type: "decor", rarity: `rare` } 













item.flashHerbaMemory = { rarity: "common", }
item.flashFaeMemory = { rarity: "common", }
item.flashPsychaMemory = { rarity: "common", }
item.flashCryoMemory = { rarity: "common", }
item.flashVenumMemory = { rarity: "common", }
item.flashUmbraMemory = { rarity: "common", }
item.flashPyroMemory = { rarity: "common", }
item.flashAquaMemory = { rarity: "common", }
item.flashElectroMemory = { rarity: "common", }
item.liberoMemory = { rarity: "common", }
item.recklessMemory = { rarity: "common", }
item.filterMemory = { rarity: "common", }
item.justifiedMemory = { rarity: "common", }
item.angerPointMemory = { rarity: "common", }
item.sharpnessMemory = { rarity: "common", }
item.gutsMemory = { rarity: "common", }
item.multiscaleMemory = { rarity: "common", }
item.noGuardMemory = { rarity: "common",  typings : ["fighting"] }
item.ambidextrousMemory = { rarity: "common",  typings : ["bug"] }
item.adaptabilityMemory = { rarity: "common",  typings : ["normal"] }
item.thickFatMemory = { rarity: "common", }
item.levitateMemory = { rarity: "common", }
item.sheerForceMemory = { rarity: "common", }
item.strategistMemory = { rarity: "common", }
item.moxieMemory = { rarity: "common", }
item.unburdenMemory = { rarity: "common", }
item.dauntingLookMemory = { rarity: "common", }
item.intimidateMemory = { rarity: "common", }
item.sandRushMemory = { rarity: "common", }
item.swiftSwimMemory = { rarity: "common", }
item.slushRushMemory = { rarity: "common", }
item.moltShedMemory = { rarity: "common", }
item.faeRushMemory = { rarity: "common", }
item.hyperconductorMemory = { rarity: "common", }
item.intangibleMemory = { rarity: "common", }
item.climaTactMemory = { rarity: "common", }
item.spikyPeltMemory = { rarity: "common", }
item.blackPeltMemory = { rarity: "common", }
item.pixiePeltMemory = { rarity: "common", rename:`fuzzyPeltMemory`}
item.fieryPeltMemory = { rarity: "common", }
item.moistPeltMemory = { rarity: "common", }
item.icyPeltMemory = { rarity: "common", }
item.sandyPeltMemory = { rarity: "common", }
item.grassyPeltMemory = { rarity: "common", }




//has
item.stonedMemory = { typings : ["rock"], rarity: "rare" }
item.staminaMemory = { typings : ["fighting"], rarity: "rare" }
item.gooeyMemory = { typings : ["poison"], rarity: "rare" }
item.shieldsDownMemory = { typings : ["steel"], rarity: "rare" }
item.costarMemory = { typings : ["fairy"], rarity: "rare" }
item.purifyingSaltMemory = { typings : ["rock"], rarity: "rare" }
item.scorchMemory = { typings : ["fire"], rarity: "rare" }
item.corrosionMemory = { typings : ["poison"], rarity: "rare" }
item.megaLauncherMemory = { typings : ["electric"], rarity: "rare" }
item.metalheadMemory = { typings : ["steel"], rarity: "rare" }
item.moodyMemory = { typings : ["normal"], rarity: "rare" }
item.mercilessMemory = { typings : ["dark"], rarity: "rare" }
item.colorSporeMemory = { typings : ["grass"], rarity: "rare" }
item.sandStreamMemory = { typings : ["ground"], rarity: "rare" }
item.snowWarningMemory = { typings : ["ice"], rarity: "rare" }
item.somberFieldMemory = { typings : ["dark"], rarity: "rare" }


//white exclusive
item.dancerMemory = { typings : ["fighting"], rarity: "white" }
item.cacophonyMemory = { typings : ["normal"], rarity: "white" }
item.windRiderMemory = { typings : ["flying"], rarity: "white" }
item.gorillaTacticsMemory = { typings : ["fighting"], rarity: "white" }
item.imposterMemory = { typings : ["dark"], rarity: "white" }
item.drizzleMemory = { typings : ["water"], rarity: "white" }
item.droughtMemory = { typings : ["fire"], rarity: "white" }
item.electricSurgeMemory = { typings : ["electric"], rarity: "white" }
item.grassySurgeMemory = { typings : ["grass"], rarity: "white" }
item.mistySurgeMemory = { typings : ["psychic"], rarity: "white" }
item.ferrilateMemory = { typings : ["steel"], rarity: "white" }
item.glaciateMemory = { typings : ["ice"], rarity: "white" }
item.terralateMemory = { typings : ["ground"], rarity: "white" }
item.toxilateMemory = { typings : ["poison"], rarity: "white" }
item.hydrolateMemory = { typings : ["water"], rarity: "white" }
item.pyrolateMemory = { typings : ["fire"], rarity: "white" }
item.chrysilateMemory = { typings : ["bug"], rarity: "white" }
item.galvanizeMemory = { typings : ["electric"], rarity: "white" }
item.gloomilateMemory = { typings : ["dark"], rarity: "white" }
item.espilateMemory = { typings : ["psychic"], rarity: "white" }
item.aerilateMemory = { typings : ["flying"], rarity: "white" }
item.pixilateMemory = { typings : ["fairy"], rarity: "white" }
item.verdifyMemory = { typings : ["grass"], rarity: "white" }
item.dragonMawMemory = { typings : ["dragon"], rarity: "white" }
item.iaidoMemory = { typings : ["steel"], rarity: "white" }




/*
item.blackCape = { type: "decor" } 
item.crown = { type: "decor" } 
item.determination = { type: "decor" } 
item.pinkHeartBalloon = { type: "decor" } 
item.silverTiara = { type: "decor" } 
*/

item.wealthyCoins = { type: "decor"} 
item.witchyHat = { type: "decor"} 


for (const i in item){
    item[i].id = i
    item[i].newItem = 0
    item[i].got = 0
}

//tms
for (const i in item){
    if (i.endsWith("Tm")) {
        item[i].move = i.slice(0, -2); 
        item[i].type = "tm";
        
        item[i].info = function () { return `Uso: Ensina o golpe <span data-move="${move[item[i].move].id}" ><span  style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor(move[item[i].move].type)}">${format(move[item[i].move].id)}</span></span> para Pokémon ${joinWithOr(move[item[i].move].moveset)}`}        
    }

    if (i.endsWith("Memory")) {
        item[i].ability = i.slice(0, -6); 
        item[i].type = "memory";
        
        item[i].image = "dark"
        

        if (item[i].typings && item[i].typings[0]!="normal") item[i].image = item[i].typings[0]
        else if (item[i].typings== undefined && ability[item[i].ability].type[0]!="all" && ability[item[i].ability].type[0]!="normal") item[i].image = ability[item[i].ability].type[0]

        if (item[i].typings!=undefined) item[i].info = function () { return `Uso: Ensina a habilidade <span data-ability="${ability[item[i].ability].id}" ><span  style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor(item[i].image)}">${format(ability[item[i].ability].id)}</span></span> para Pokémon ${joinWithOr(item[i].typings)}`}        
        else item[i].info = function () { return `Uso: Ensina a habilidade <span data-ability="${ability[item[i].ability].id}" ><span  style="color:white;cursor:help;padding: 0.1rem 0.7rem; border-radius: 0.2rem; font-size:1.1rem; width: auto; background: ${returnTypeColor(item[i].image)}">${format(ability[item[i].ability].id)}</span></span> para Pokémon ${joinWithOr(ability[item[i].ability].type)}`}        
    }

    if (item[i].type == "decor") {
    item[i].itemToUse =  true,
    item[i].info = function () { return `Uso: Desbloqueia esse cosmético para um Pokémon selecionado`}
    }        

}

function joinWithOr(list) {
    if (list.includes("all")) return "todos";

    const formatted = list.map(x => format(x));
    const len = formatted.length;

    if (len === 0) return "";
    if (len === 1) return formatted[0];
    if (len === 2) return `${formatted[0]} ou ${formatted[1]}`;

    return `${formatted.slice(0, -1).join(", ")}, ou ${formatted[len - 1]}`;
}

function joinWithAnd(list) {
    if (list.includes("all")) return "todos";

    const formatted = list.map(x => format(x));
    const len = formatted.length;

    if (len === 0) return "";
    if (len === 1) return formatted[0];
    if (len === 2) return `${formatted[0]} e ${formatted[1]}`;

    return `${formatted.slice(0, -1).join(", ")}, e ${formatted[len - 1]}`;
}
