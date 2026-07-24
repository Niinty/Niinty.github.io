// PokeChill: Pokémon database and Pokédex definitions.
const pkmn = {}

// National Pokédex

const evolutionLevel1 = 30
const evolutionLevel2 = 50
const evolutionLevel3 = 70

// 001 Bulbasaur → Ivysaur → Venusaur
pkmn.bulbasaur = {
    type: ["grass","poison"],
    bst: {
        hp: 45,
        atk: 49,
        def: 49,
        satk: 65,
        sdef: 65,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.ivysaur, level: evolutionLevel1 } } },
    hiddenAbility: ability.thickFat,
    lore: `Por algum tempo após o seu nascimento, ele cresce alimentando-se da semente em suas costas.`,
    signature : move.frenzyPlant
}

pkmn.ivysaur = {
    type: ["grass","poison"],
    bst: {
        hp: 60,
        atk: 62,
        def: 63,
        satk: 80,
        sdef: 80,
        spe: 60,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.venusaur, level: evolutionLevel2 },
            2: { pkmn: pkmn.venusaurF, item: item.shinyStone } 
        } 
    },
    hiddenAbility: ability.thickFat,
    lore: `Há um bulbo nas costas deste Pokémon. Para sustentar seu peso, as pernas e o tronco de Ivysaur crescem grossos e fortes. Se ele começar a passar mais tempo deitado sob a luz do sol, é sinal de que o botão logo florescerá e se transformará em uma grande flor.`,
    signature : move.frenzyPlant
}

pkmn.venusaur = {
    type: ["grass","poison"],
    bst: {
        hp: 80,
        atk: 82,
        def: 83,
        satk: 100,
        sdef: 100,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaVenusaur, item: item.venusaurite } } },
    hiddenAbility: ability.thickFat,
    lore: `Há uma grande flor nas costas de Venusaur. Dizem que a flor adquire cores vivas quando recebe bastante nutrição e luz solar. O aroma da flor acalma as emoções das pessoas.`,
    signature : move.frenzyPlant
}

pkmn.venusaurF = {
    //tagObtainedIn: "unobtainable",  // ← excluído do Arceus
    type: ["grass","poison"],
    bst: {
        hp: 80,
        atk: 82,
        def: 83,
        satk: 100,
        sdef: 100,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaVenusaur, item: item.venusaurite } } },
    hiddenAbility: ability.thickFat,
    lore: `Enquanto se aquece e absorve a luz do sol, as pétalas de sua flor liberam um aroma suave e relaxante.`,
    signature : move.frenzyPlant
}

pkmn.venusaurClone = {
    type: ["poison","grass"],
    bst: {
        hp: 80*1.1,
        atk: 82*1.1,
        def: 83*1.1,
        satk: 100*1.1,
        sdef: 100*1.1,
        spe: 80*1.1,
    },
    hiddenAbility: ability.imposter,
    lore: `Nascido de tentativas de recriar um poderoso Venusaur, este Pokémon desenvolveu características únicas e imprevisíveis. Sua flor absorve energia de forma anormal, emitindo um perfume estranho que parece mexer com as emoções de quem se aproxima.`,
    signature : move.frenzyPlant
}

pkmn.megaVenusaur = {
    type: ["grass","poison"],
    bst: {
        hp: 80*1.2,
        atk: 100*1.2,
        def: 123*1.2,
        satk: 122*1.2,
        sdef: 120*1.2,
        spe: 80*1.2,
    },
    hiddenAbility: ability.thickFat,
    lore: `Para sustentar sua flor, que cresceu devido à Mega Evolução, suas costas e pernas ficaram mais fortes.`,
    signature : move.frenzyPlant
}

pkmn.venusaurGmax = {
    type: ["grass","poison"],
    bst: {
        hp: 80*1.15,
        atk: 100*1.15,
        def: 123*1.15,
        satk: 122*1.15,
        sdef: 120*1.15,
        spe: 80*1.15,
    },
    hiddenAbility: ability.thickFat,
    lore: `Há uma grande flor nas costas do Venusaur. Diz-se que a flor assume cores vivas se receber bastante nutrição e luz solar. O aroma da flor acalma as emoções das pessoas.`,
    signature : move.frenzyPlant
}

// 004 Charmander → Charmeleon → Charizard
pkmn.charmander = {
    type: ["fire"],
    bst: {
        hp: 39,
        atk: 52,
        def: 43,
        satk: 60,
        sdef: 50,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.charmeleon, level: evolutionLevel1 } } },
    lore: `A chama na ponta da cauda é um indicador de sua vitalidade. Se estiver saudável, sua cauda queima intensamente.`,
    hiddenAbility: ability.toughClaws,
    signature : move.flameBurst
}

pkmn.charmeleon = {
    type: ["fire"],
    bst: {
        hp: 58,
        atk: 64,
        def: 58,
        satk: 80,
        sdef: 65,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.charizard, level: evolutionLevel2 } } },
    lore: `Nas montanhas rochosas onde Charmeleon vive, suas caudas flamejantes brilham à noite como estrelas.`,
    hiddenAbility: ability.toughClaws,
    signature : move.flameBurst
}

pkmn.charizard = {
    type: ["fire","flying"],
    bst: {
        hp: 78,
        atk: 84,
        def: 78,
        satk: 109,
        sdef: 85,
        spe: 100,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.megaCharizardX, item: item.charizarditeX }, 
            2: { pkmn: pkmn.megaCharizardY, item: item.charizarditeY },
        } 
    },
    hiddenAbility: ability.toughClaws,
    lore: `Dizem que o fogo de Charizard queima com mais intensidade se ele tiver passado por batalhas difíceis.`,
    signature : move.flameBurst
}

pkmn.charizardClone = {
    type: ["flying","fire"],
    bst: {
        hp: 78*1.1,
        atk: 84*1.1,
        def: 78*1.1,
        satk: 109*1.1,
        sdef: 85*1.1,
        spe: 100*1.1,
    },
    hiddenAbility: ability.imposter,
    lore: `Exalando chamas intensas e quentes, ele pode derreter quase tudo. Seu hálito inflige dor terrível aos inimigos.`,
    signature : move.flameBurst
}

pkmn.megaCharizardX = {
    type: ["fire","dragon"],
    bst: {
        hp: 78*1.2,
        atk: 130*1.2,
        def: 111*1.2,
        satk: 130*1.2,
        sdef: 85*1.2,
        spe: 100*1.2,
    },
    hiddenAbility: ability.toughClaws,
    lore: `O poder avassalador que preenche todo o seu corpo faz com que ele fique negro e crie intensas chamas azuis.`,
    signature : move.brutalClaw
}

pkmn.megaCharizardY = {
    type: ["fire","flying"],
    bst: {
        hp: 78*1.2,
        atk: 104*1.2,
        def: 78*1.2,
        satk: 159*1.2,
        sdef: 115*1.2,
        spe: 100*1.2,
    },
    hiddenAbility: ability.drought,
    lore: `Sua ligação com seu Treinador é a fonte de seu poder. Possui velocidade e manobrabilidade superiores às de um caça a jato.`,
    signature : move.flameBurst
}

pkmn.charizardGmax = {
    type: ["fire","flying"],
    bst: {
        hp: 78*1.15,
        atk: 104*1.15,
        def: 78*1.15,
        satk: 159*1.15,
        sdef: 115*1.15,
        spe: 100*1.15,
    },
    hiddenAbility: ability.drought,
    lore: `Esta figura colossal de Charizard, com asas flamejantes, foi criada pela energia Gigantamax.`,
    signature : move.flameBurst
}

// 007 Squirtle → Wartortle → Blastoise
pkmn.squirtle = {
    type: ["water"],
    bst: {
        hp: 44,
        atk: 48,
        def: 65,
        satk: 50,
        sdef: 64,
        spe: 43,
    },
    evolve: function() { return { 1: { pkmn: pkmn.wartortle, level: evolutionLevel1 } } },
    lore: `Ele se abriga em sua concha e, em seguida, contra-ataca com jatos de água sempre que possível.`,
    hiddenAbility: ability.rainDish,
    signature : move.hydroCannon
}

pkmn.wartortle = {
    type: ["water"],
    bst: {
        hp: 59,
        atk: 63,
        def: 80,
        satk: 65,
        sdef: 80,
        spe: 58,
    },
    evolve: function() { return { 1: { pkmn: pkmn.blastoise, level: evolutionLevel2 } } },
    lore: `Diz-se que vive 10.000 anos. Sua cauda peluda é popular como símbolo de longevidade.`,
    hiddenAbility: ability.rainDish,
    signature : move.hydroCannon
}

pkmn.blastoise = {
    type: ["water"],
    bst: {
        hp: 79,
        atk: 83,
        def: 100,
        satk: 85,
        sdef: 105,
        spe: 78,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaBlastoise, item: item.blastoisinite } } },
    lore: `Os jatos de água expelidos pelos canhões de foguete em seu casco podem perfurar aço espesso.`,
    hiddenAbility: ability.rainDish,
    signature : move.hydroCannon
}

pkmn.blastoiseClone = {
    type: ["water"],
    bst: {
        hp: 79,
        atk: 83,
        def: 100,
        satk: 85,
        sdef: 105,
        spe: 78,
    },
    hiddenAbility: ability.imposter,
    lore: `Assim que mira no inimigo, dispara água com ainda mais força que uma mangueira de incêndio.`,
    signature : move.hydroCannon
}

pkmn.megaBlastoise = {
    type: ["water"],
    bst: {
        hp: 79*1.2,
        atk: 103*1.2,
        def: 120*1.2,
        satk: 135*1.2,
        sdef: 115*1.2,
        spe: 78*1.2,
    },
    signature : move.hydroCannon,
    lore: `O canhão em suas costas é tão potente quanto o de um tanque. Suas pernas e costas robustas permitem que ele suporte o recuo do disparo.`,
    hiddenAbility: ability.megaLauncher
}

pkmn.blastoiseGmax = {
    type: ["water"],
    bst: {
        hp: 79*1.15,
        atk: 103*1.15,
        def: 120*1.15,
        satk: 135*1.15,
        sdef: 115*1.15,
        spe: 78*1.15,
    },
    signature : move.hydroCannon,
    lore: `Seu casco cresceu para acompanhar seu corpo maciço, apresentando 31 canhões — 12 grandes e um canhão central principal que pode ser apontado independentemente.`,
    hiddenAbility: ability.megaLauncher
}

// 010 Caterpie → Metapod → Butterfree
pkmn.caterpie = {
    type: ["bug"],
    bst: {
        hp: 45,
        atk: 30,
        def: 35,
        satk: 20,
        sdef: 20,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.metapod, level: evolutionLevel1 } } },
    lore: `É fácil de capturar e cresce rapidamente, tornando-se uma das principais recomendações para Treinadores Pokémon iniciantes.`,
    hiddenAbility: ability.tintedLens,
}

pkmn.metapod = {
    type: ["bug"],
    bst: {
        hp: 50,
        atk: 20,
        def: 55,
        satk: 25,
        sdef: 25,
        spe: 30,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.butterfree, level: evolutionLevel2 },
            2: { pkmn: pkmn.butterfreeF, item: item.shinyStone },
        } 
    },
    lore: `Sua carapaça está cheia de suas partes internas macias. Ele não se move muito por causa do risco de acabar derramando suas entranhas sem querer.`,
    hiddenAbility: ability.tintedLens,
}

pkmn.butterfree = {
    type: ["bug","flying"],
    bst: {
        hp: 60,
        atk: 45,
        def: 50,
        satk: 90,
        sdef: 80,
        spe: 70,
    },
    lore: `Néctar de flores bonitas é sua comida favorita. Em campos floridos, ele trava batalhas acirradas contra Cutiefly por território.`,
    hiddenAbility: ability.tintedLens,
}

pkmn.butterfreeF = {
    type: ["bug","flying"],
    bst: {
        hp: 60,
        atk: 45,
        def: 50,
        satk: 90,
        sdef: 80,
        spe: 70,
    },
    lore: `O pó repelente à água em suas asas permite que ele colete mel, mesmo nas chuvas mais fortes.`,
    hiddenAbility: ability.tintedLens,
}

pkmn.butterfreeGmax = {
    type: ["bug","flying"],
    bst: {
        hp: 60*1.15,
        atk: 45*1.15,
        def: 50*1.15,
        satk: 90*1.15,
        sdef: 80*1.15,
        spe: 70*1.15,
    },
    lore: `Depois de prender seus oponentes em um tornado capaz de arremessar um caminhão de 10 toneladas, ele os finaliza com suas escamas venenosas.`,
    hiddenAbility: ability.tintedLens,
}

// 013 Weedle → Kakuna → Beedrill
pkmn.weedle = {
    type: ["bug","poison"],
    bst: {
        hp: 40,
        atk: 35,
        def: 30,
        satk: 20,
        sdef: 20,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.kakuna, level: evolutionLevel1 } } },
    lore: `Weedle possui um olfato extremamente apurado. Ele é capaz de distinguir suas folhas favoritas daquelas de que não gosta apenas farejando com sua grande probóscide vermelha (nariz).`,
    hiddenAbility: ability.adaptability,
    eggMove : move.toxicThread
}

pkmn.kakuna = {
    type: ["bug","poison"],
    bst: {
        hp: 45,
        atk: 25,
        def: 50,
        satk: 25,
        sdef: 25,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.beedrill, level: evolutionLevel2 } } },
    lore: `Kakuna permanece praticamente imóvel enquanto se prende a uma árvore. Porém, internamente, ele está extremamente ativo enquanto se prepara para sua próxima evolução. Isso pode ser percebido pelo quão quente sua carapaça fica ao toque.`,
    hiddenAbility: ability.adaptability,
    eggMove : move.toxicThread
}

pkmn.beedrill = {
    type: ["bug","poison"],
    bst: {
        hp: 65,
        atk: 90,
        def: 40,
        satk: 45,
        sdef: 80,
        spe: 75,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaBeedrill, item: item.beedrillite } } },
    lore: `Beedrill é extremamente territorial. Ninguém deveria se aproximar de seu ninho — isso é pela própria segurança. Se enfurecidos, eles atacarão em um enxame furioso.`,
    hiddenAbility: ability.adaptability,
    eggMove : move.toxicThread
}

pkmn.megaBeedrill = {
    type: ["bug","poison"],
    bst: {
        hp: 80*1.2,
        atk: 150*1.2,
        def: 40*1.2,
        satk: 15*1.2,
        sdef: 80*1.2,
        spe: 160*1.2,
    },
    hiddenAbility: ability.adaptability,
    lore: `Suas patas se tornaram ferrões venenosos. Ele perfura sua presa repetidamente com os ferrões em seus membros, desferindo o golpe final com o ferrão em sua parte traseira.`,
    eggMove : move.toxicThread,
    signature : move.tailGlow,
}

// 016 Pidgey → Pidgeotto → Pidgeot
pkmn.pidgey = {
    type: ["normal","flying"],
    bst: {
        hp: 40,
        atk: 45,
        def: 40,
        satk: 35,
        sdef: 35,
        spe: 56,
    },
    evolve: function() { return { 1: { pkmn: pkmn.pidgeotto, level: evolutionLevel1 } } },
    lore: `É dócil e prefere evitar conflitos. Porém, se for incomodado, pode revidar ferozmente.`,
    hiddenAbility: ability.unburden,
    eggMove : move.meFirst
}

pkmn.pidgeotto = {
    type: ["normal","flying"],
    bst: {
        hp: 80,
        atk: 60,
        def: 55,
        satk: 50,
        sdef: 50,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.pidgeot, level: evolutionLevel2 } } },
    lore: `As garras de suas patas são bem desenvolvidas. Ele consegue carregar presas, como um Exeggcute, até seu ninho a mais de 95 quilômetros de distância.`,
    hiddenAbility: ability.unburden,
    eggMove : move.meFirst
}

pkmn.pidgeot = {
    type: ["normal","flying"],
    bst: {
        hp: 83,
        atk: 80,
        def: 75,
        satk: 70,
        sdef: 70,
        spe: 101,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaPidgeot, item: item.pidgeotite } } },
    lore: `Ele abre amplamente suas magníficas asas para intimidar inimigos. Cruza os céus em velocidade Mach 2.`,
    hiddenAbility: ability.unburden,
    eggMove : move.meFirst
}

pkmn.megaPidgeot = {
    type: ["normal","flying"],
    bst: {
        hp: 83*1.2,
        atk: 80*1.2,
        def: 80*1.2,
        satk: 135*1.2,
        sdef: 80*1.2,
        spe: 121*1.2,
    },
    hiddenAbility: ability.noGuard,
    lore: `Com sua força muscular agora muito aumentada, ele consegue voar continuamente por duas semanas sem descansar.`,
    eggMove : move.meFirst,
    signature : move.braveBird,
}

// 019 Rattata → Raticate
pkmn.rattata = {
    type: ["normal"],
    bst: {
        hp: 30,
        atk: 56,
        def: 35,
        satk: 25,
        sdef: 35,
        spe: 72,
    },
    evolve: function() { return { 1: { pkmn: pkmn.raticate, level: evolutionLevel1 } } },
    lore: `Rattata é extremamente cauteloso. Mesmo enquanto dorme, ele permanece atento movendo constantemente suas orelhas para escutar ao redor. Ele não é exigente quanto ao lugar onde vive — fará seu ninho em qualquer lugar.`,
    hiddenAbility: ability.guts,
}

pkmn.rattataF = {
    type: ["normal"],
    bst: {
        hp: 30,
        atk: 56,
        def: 35,
        satk: 25,
        sdef: 35,
        spe: 72,
    },
    evolve: function() { 
        return {
            1: { pkmn: pkmn.raticateF, level: evolutionLevel1 },
        }
    },
    lore: `Vivendo onde quer que haja comida disponível, ele vasculha incessantemente por mantimentos o dia inteiro.`,
    hiddenAbility: ability.guts,
}

pkmn.alolanRattata = {
    type: ["dark", "normal"],
    bst: {
        hp: 30,
        atk: 56,
        def: 35,
        satk: 25,
        sdef: 35,
        spe: 72,
    },
    evolve: function() { return { 1: { pkmn: pkmn.alolanRaticate, level: evolutionLevel1 } } },
    lore: `Com seus incisivos, ele rói portas e invade as casas das pessoas. Depois, com um movimento de seus bigodes, rouba qualquer comida que encontrar.`,
    hiddenAbility: ability.blackPelt,
}

pkmn.raticate = {
    type: ["normal"],
    bst: {
        hp: 55,
        atk: 81,
        def: 60,
        satk: 50,
        sdef: 70,
        spe: 97,
    },
    hiddenAbility: ability.guts,
    lore: `As presas resistentes de Raticate crescem continuamente. Para mantê-las desgastadas, ele rói pedras e troncos. Pode até mastigar as paredes das casas.`,
}

pkmn.raticateF = {
    type: ["normal"],
    bst: {
        hp: 55,
        atk: 81,
        def: 60,
        satk: 50,
        sdef: 70,
        spe: 97,
    },
    hiddenAbility: ability.guts,
    lore: `.Seus bigodes o ajudam a manter o equilíbrio. Suas presas nunca param de crescer, então ele rói para desgastá-las.`,
}

pkmn.alolanRaticate = {
    type: ["dark", "normal"],
    bst: {
        hp: 75,
        atk: 71,
        def: 70,
        satk: 40,
        sdef: 80,
        spe: 77,
    },
    hiddenAbility: ability.blackPelt,
    lore: `Ele possui uma personalidade incrivelmente gananciosa. Seu ninho fica cheio de comida reunida pelos Rattata sob suas ordens, tanta que ele sequer consegue comer tudo.`,
}

// 021 Spearow → Fearow
pkmn.spearow = {
    type: ["normal","flying"],
    bst: {
        hp: 40,
        atk: 60,
        def: 30,
        satk: 31,
        sdef: 31,
        spe: 70,
    },
    evolve: function() { return { 1: { pkmn: pkmn.fearow, level: evolutionLevel1 } } },
    hiddenAbility: ability.bigPecks,
    lore: `Suas asas curtas o impedem de voar para longe. Ele se move rapidamente saltando pela grama alta em busca de insetos para se alimentar.`,
}

pkmn.fearow = {
    type: ["normal","flying"],
    bst: {
        hp: 65,
        atk: 90,
        def: 65,
        satk: 61,
        sdef: 61,
        spe: 100,
    },
    hiddenAbility: ability.bigPecks,
    lore: `Desenhou asas grandes e fortes que o permitem voar o dia todo sem cansar. Ele usa seu longo bico para capturar presas no solo ou na água.`,
}

// 023 Ekans → Arbok
pkmn.ekans = {
    type: ["poison"],
    bst: {
        hp: 35,
        atk: 60,
        def: 44,
        satk: 40,
        sdef: 54,
        spe: 55,
    },
    evolve: function() { return { 1: { pkmn: pkmn.arbok, level: evolutionLevel1 } } },
    hiddenAbility: ability.intimidate,
    lore: `Ele se move silenciosamente pela grama para atacar suas presas por trás. Engole ovos de Pokémon passarinhos inteiros, um de cada vez.`,
}

pkmn.arbok = {
    type: ["poison"],
    bst: {
        hp: 60,
        atk: 95,
        def: 69,
        satk: 65,
        sdef: 79,
        spe: 80,
    },
    hiddenAbility: ability.intimidate,
    lore: `O padrão assustador em sua barriga serve para intimidar os inimigos. Ele prende suas vítimas apertando-as com seu corpo musculoso e injetando um veneno mortal.`,
}

// 025 Pichu → Pikachu → Raichu

pkmn.spikyPichu = {
    type: ["electric"],
    bst: {
        hp: 20,
        atk: 40,
        def: 15,
        satk: 35,
        sdef: 35,
        spe: 60,
    },
    hiddenAbility: ability.electricSurge,
    signature : move.voltTackle,
    lore: `Uma variação rara de Pichu com uma mutação na orelha esquerda. Embora suas bochechas guardem pouca eletricidade, ele descarrega faíscas ao menor sinal de susto.`,
}

pkmn.pichu = {
    type: ["electric"],
    bst: {
        hp: 20,
        atk: 40,
        def: 15,
        satk: 35,
        sdef: 35,
        spe: 60,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.pikachu, level: evolutionLevel1 },
            2: { pkmn: pkmn.pikachuF, item: item.shinyStone },
        }
    },
    hiddenAbility: ability.electricSurge,
    signature : move.voltTackle,
    lore: `Ele ainda não é habilidoso em armazenar eletricidade. Quando se assusta ou ri, acaba liberando descargas elétricas acidentais pelas bochechas.`,
}

pkmn.pikachu = {
    type: ["electric"],
    bst: {
        hp: 35,
        atk: 55,
        def: 40,
        satk: 50,
        sdef: 50,
        spe: 90,
    },
    evolve: function() { return { 1: { pkmn: pkmn.raichu, item: item.thunderStone } } },
    hiddenAbility: ability.electricSurge,
    signature : move.voltTackle,
    lore: `Ele levanta sua cauda para vigiar os arredores. Às vezes, sua cauda é atingida por raios nessa posição, o que ajuda a recarregar sua energia elétrica.`,
}

pkmn.pikachuF = {
    type: ["electric"],
    bst: {
        hp: 35,
        atk: 55,
        def: 40,
        satk: 50,
        sdef: 50,
        spe: 90,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.raichuF, item: item.thunderStone },
        }
    },
    hiddenAbility: ability.electricSurge,
    signature : move.voltTackle,
    lore: `Possui pequenas bolsas elétricas em ambas as bochechas. Se ameaçado, dispara descargas elétricas a partir dessas bolsas.`,
}

pkmn.pikachuGmax = {
    type: ["electric"],
    bst: {
        hp: 200*1.15,
        atk: 120*1.15,
        def: 90*1.15,
        satk: 120*1.15,
        sdef: 90*1.15,
        spe: 110*1.15,
    },
    signature : move.voltTackle,
    hiddenAbility: ability.electricSurge,
    lore: `Quando esmaga seus oponentes com sua cauda em formato de raio, libera uma descarga de eletricidade equivalente a um raio da natureza.`
}

pkmn.pikachuAsh = {
    type: ["electric"],
    bst: {
        hp: 35,
        atk: 55,
        def: 40,
        satk: 50,
        sdef: 50,
        spe: 90,
    },
    hiddenAbility: ability.electricSurge,
    signature : move.voltTackle,
    lore: `Este Pikachu usa o boné de seu parceiro de longa data. A forte conexão entre os dois permitiu que ele ultrapassasse os limites comuns de sua espécie.`,
}

pkmn.pikachuWorld = {
    type: ["electric"],
    bst: {
        hp: 35,
        atk: 55,
        def: 40,
        satk: 50,
        sdef: 50,
        spe: 90,
    },
    hiddenAbility: ability.electricSurge,
    signature : move.voltTackle,
    lore: `Um Pikachu que viajou por diversas regiões ao lado de seu treinador, absorvendo a experiência de inúmeras batalhas ao redor do mundo.`,
}

pkmn.pikachuHoenn = {
    type: ["electric"],
    bst: {
        hp: 35,
        atk: 55,
        def: 40,
        satk: 50,
        sdef: 50,
        spe: 90,
    },
    hiddenAbility: ability.electricSurge,
    signature : move.voltTackle,
    lore: `Ostentando um boné que remete às suas aventuras na ensolarada região de Hoenn, este Pokémon carrega o espírito de exploração em seu olhar.`,
}

pkmn.pikachuUnova = {
    type: ["electric"],
    bst: {
        hp: 35,
        atk: 55,
        def: 40,
        satk: 50,
        sdef: 50,
        spe: 90,
    },
    hiddenAbility: ability.electricSurge,
    signature : move.voltTackle,
    lore: `Este Pikachu usa o boné que marcou sua jornada pelas terras urbanas e misteriosas de Unova, mantendo suas bochechas elétricas sempre prontas para o combate.`,
}

pkmn.pikachuKalos = {
    type: ["electric"],
    bst: {
        hp: 35,
        atk: 55,
        def: 40,
        satk: 50,
        sdef: 50,
        spe: 90,
    },
    hiddenAbility: ability.electricSurge,
    signature : move.voltTackle,
    lore: `Relembrando a região onde o mistério da Mega Evolução foi desvendado, este Pikachu veste orgulhosamente o boné usado em suas andanças por Kalos.`,
}

pkmn.pikachuBelle = {
    type: ["electric","normal"],
    bst: {
        hp: 60,
        atk: 90,
        def: 55,
        satk: 90,
        sdef: 80,
        spe: 110,
    },
    signature : move.voltTackle,
    lore: `Vestida com um traje elegante e clássico de concurso, esta Pikachu encanta a todos com suas apresentações graciosas e golpes elétricos refinados.`,
}

pkmn.pikachuLibre = {
    type: ["electric","fighting"],
    bst: {
        hp: 60,
        atk: 90,
        def: 55,
        satk: 90,
        sdef: 80,
        spe: 110,
    },
    signature : move.voltTackle,
    lore: `Uma lutadora destemida que usa roupas de lucha libre. Ela domina o ringue combinando velocidade elétrica com golpes de luta devastadores vindos do ar.`,
}

pkmn.pikachuPhd = {
    type: ["electric","psychic"],
    bst: {
        hp: 60,
        atk: 90,
        def: 55,
        satk: 90,
        sdef: 80,
        spe: 110,
    },
    signature : move.voltTackle,
    lore: `Com seus óculos e jaleco de cientista, esta Pikachu estuda os mistérios da energia elétrica, usando sua mente brilhante para prever os movimentos dos oponentes.`,
}

pkmn.pikachuPopstar = {
    type: ["electric","fairy"],
    bst: {
        hp: 60,
        atk: 90,
        def: 55,
        satk: 90,
        sdef: 80,
        spe: 110,
    },
    signature : move.voltTackle,
    lore: `Uma verdadeira idol dos palcos. Seu figurino fofo e suas canções energéticas espalham alegria, eletrizando o público e os aliados durante as batalhas.`,
}

pkmn.pikachuRockstar = {
    type: ["electric","fire"],
    bst: {
        hp: 60,
        atk: 90,
        def: 55,
        satk: 90,
        sdef: 80,
        spe: 110,
    },
    signature : move.voltTackle,
    lore: `Com uma jaqueta de couro cheia de atitude, este Pikachu traz a energia do rock'n'roll para o combate, transformando faíscas elétricas em riffs explosivos e escaldantes.`,
}

pkmn.raichu = {
    type: ["electric"],
    bst: {
        hp: 60,
        atk: 90,
        def: 55,
        satk: 90,
        sdef: 80,
        spe: 110,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.megaRaichuX, item: item.raichutiteX }, 
            2: { pkmn: pkmn.megaRaichuY, item: item.raichutiteY },
        } 
    },
    hiddenAbility: ability.electricSurge,
    signature : move.voltTackle,
    lore: `Se suas bolsas elétricas ficarem vazias, ele levanta a cauda para coletar eletricidade da atmosfera. Seu corpo brilha fracamente no escuro quando está totalmente carregado.`,
}

pkmn.raichuF = {
    type: ["electric"],
    bst: {
        hp: 60,
        atk: 90,
        def: 55,
        satk: 90,
        sdef: 80,
        spe: 110,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.megaRaichuX, item: item.raichutiteX }, 
            2: { pkmn: pkmn.megaRaichuY, item: item.raichutiteY },
        } 
    },
    hiddenAbility: ability.electricSurge,
    signature : move.voltTackle,
    lore: `Sua cauda longa serve como aterramento para se proteger de sua própria eletricidade de alta voltagem.`,
}

pkmn.alolanRaichu = {
    type: ["electric", "psychic"],
    bst: {
        hp: 60,
        atk: 85,
        def: 50,
        satk: 95,
        sdef: 85,
        spe: 110,
    },
    hiddenAbility: ability.electricSurge,
    signature : move.voltTackle,
    lore: `Ele usa seus poderes psíquicos para concentrar eletricidade em sua cauda e flutuar sobre ela. Os cientistas locais ainda não sabem o motivo de sua mudança de forma em Alola.`,
}

pkmn.megaRaichuX = {
    type: ["electric"],
    bst: {
        hp: 120*1.2,
        atk: 175*1.2,
        def: 95*1.2,
        satk: 90*1.2,
        sdef: 95*1.2,
        spe: 100*1.2,
    },
    hiddenAbility: ability.ambidextrous,
    signature : move.voltTackle,
    lore: `A energia da Mega Evolução expandiu seu sistema nervoso. Ele consegue descarregar correntes elétricas brutais de ambas as patas dianteiras simultaneamente sem sofrer recuo.`,
}

pkmn.megaRaichuY = {
    type: ["electric"],
    bst: {
        hp: 60*1.2,
        atk: 160*1.2,
        def: 55*1.2,
        satk: 160*1.2,
        sdef: 80*1.2,
        spe: 140*1.2,
    },
    hiddenAbility: ability.electricSurge,
    signature : move.voltTackle,
    lore: `Sob o efeito da Mega Evolução, sua cauda age como um para-raios hipereficiente, transformando o campo de batalha em uma tempestade elétrica contínua e devastadora.`,
}

// 027 Sandshrew → Sandslash

// 027 Sandshrew → Sandslash

pkmn.sandshrew = {
    type: ["ground"],
    bst: {
        hp: 50,
        atk: 75,
        def: 85,
        satk: 20,
        sdef: 30,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.sandslash, level: evolutionLevel1 } } },
    hiddenAbility: ability.skillLink,
    eggMove : move.boneRush,
    lore: `Ele prefere viver em áreas arenosas e áridas. Quando se sente ameaçado, ele se enrola como uma bola para se proteger de ataques e rolar para longe.`,
}
pkmn.sandslash = {
    type: ["ground"],
    bst: {
        hp: 75,
        atk: 100,
        def: 110,
        satk: 45,
        sdef: 55,
        spe: 65,
    },
    hiddenAbility: ability.skillLink,
    eggMove : move.boneRush,
    lore: `Sua carapaça de espinhos o protege de predadores. Ele corre em alta velocidade pelas dunas e usa suas garras afiadas para cavar buracos profundos em segundos.`,
}

pkmn.alolanSandshrew = {
    type: ["ice", "steel"],
    bst: {
        hp: 50,
        atk: 75,
        def: 90,
        satk: 10,
        sdef: 35,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.alolanSandslash, level: evolutionLevel1 } } },
    hiddenAbility: ability.slushRush,
    signature : move.iceBall,
    lore: `Sua pele mudou para uma carapaça de gelo duro como aço após migrar para montanhas nevadas. Ele desliza pelo gelo usando sua barriga lisa.`,
}

pkmn.alolanSandslash = {
    type: ["ice", "steel"],
    bst: {
        hp: 75,
        atk: 100,
        def: 120,
        satk: 25,
        sdef: 65,
        spe: 65,
    },
    hiddenAbility: ability.slushRush,
    signature : move.iceBall,
    lore: `Os espinhos em suas costas são cobertos por uma camada espessa de gelo cortante. Ele abre caminho por nevascas severas usando suas garras gigantes de gelo.`,
}

// 029 Nidoran♀ → Nidorina → Nidoqueen
pkmn.nidoranF = {
    type: ["poison"],
    bst: {
        hp: 55,
        atk: 47,
        def: 52,
        satk: 40,
        sdef: 40,
        spe: 41,
    },
    evolve: function() { return { 1: { pkmn: pkmn.nidorina, level: evolutionLevel1 } } },
    hiddenAbility: ability.sheerForce,
    eggMove : move.poisonTail,
    lore: `Embora seja pequena e pacífica por natureza, suas pequenas farpas contêm um veneno perigoso. Ela reage agressivamente se for pisada acidentalmente.`,
}

pkmn.nidorina = {
    type: ["poison"],
    bst: {
        hp: 70,
        atk: 62,
        def: 67,
        satk: 55,
        sdef: 55,
        spe: 56,
    },
    evolve: function() { return { 1: { pkmn: pkmn.nidoqueen, item: item.moonStone } } },
    hiddenAbility: ability.sheerForce,
    eggMove : move.poisonTail,
    lore: `Quando está com seus companheiros ou família, ela recolhe seus espinhos para não machucar ninguém. Ela fica nervosa rapidamente se for separada do grupo.`,
}

pkmn.nidoqueen = {
    type: ["poison","ground"],
    bst: {
        hp: 90,
        atk: 105,
        def: 87,
        satk: 75,
        sdef: 85,
        spe: 76,
    },
    hiddenAbility: ability.sheerForce,
    eggMove : move.poisonTail,
    lore: `Seu corpo robusto é protegido por escamas duras como rocha. Ela usa seu peso massivo para derrubar adversários e defende seus filhotes com a própria vida.`,
}

// 032 Nidoran♂ → Nidorino → Nidoking
pkmn.nidoranM = {
    type: ["poison"],
    bst: {
        hp: 46,
        atk: 57,
        def: 40,
        satk: 40,
        sdef: 40,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.nidorino, level: evolutionLevel1 } } },
    hiddenAbility: ability.sheerForce,
    lore: `Ele mexe suas grandes orelhas constantemente para ouvir ruídos distantes. O chifre em sua testa secreta um veneno potente ao menor impacto.`,
}

pkmn.nidorino = {
    type: ["poison"],
    bst: {
        hp: 61,
        atk: 72,
        def: 57,
        satk: 55,
        sdef: 55,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.nidoking, item: item.moonStone } } },
    hiddenAbility: ability.sheerForce,
    lore: `Tem uma personalidade irritadiça e violenta. Ele avança contra qualquer ameaça em potencial, perfurando o inimigo com seu chifre resistente para injetar toxinas.`,
}

pkmn.nidoking = {
    type: ["poison","ground"],
    bst: {
        hp: 81,
        atk: 102,
        def: 77,
        satk: 85,
        sdef: 75,
        spe: 85,
    },
    hiddenAbility: ability.sheerForce,
    lore: `Sua cauda poderosa tem força para quebrar uma torre de transmissão de energia. Uma vez que inicia um ataque furioso, nada consegue pará-lo até que o alvo seja esmagado.`,
}

// 035 Cleffa → Clefairy → Clefable
pkmn.cleffa = {
    type: ["fairy"],
    bst: {
        hp: 50,
        atk: 25,
        def: 28,
        satk: 45,
        sdef: 55,
        spe: 15,
    },
    evolve: function() { return { 1: { pkmn: pkmn.clefairy, level: evolutionLevel1 } } },
    hiddenAbility: ability.magicGuard,
    eggMove : move.lunarDance,
    lore: `Devido ao seu formato estrelado, muitas pessoas acreditam que este Pokémon chegou à Terra pegando carona em um meteoro cadente durante a noite.`,
}

pkmn.clefairy = {
    type: ["fairy"],
    bst: {
        hp: 70,
        atk: 45,
        def: 48,
        satk: 60,
        sdef: 65,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.clefable, item: item.moonStone } } },
    hiddenAbility: ability.magicGuard,
    eggMove : move.lunarDance,
    lore: `Sua aparência adorável o tornou um Pokémon muito popular. Eles se reúnem para dançar em noites de lua cheia, flutuando levemente pelo ar.`,
}

pkmn.clefable = {
    type: ["fairy"],
    bst: {
        hp: 95,
        atk: 70,
        def: 73,
        satk: 95,
        sdef: 90,
        spe: 60,
    },
    hiddenAbility: ability.magicGuard,
    eggMove : move.lunarDance,
    lore: `Sua audição é extremamente aguçada, permitindo-lhe ouvir um alfinete caindo a quilômetros de distância. Por isso, prefere viver em montanhas silenciosas e isoladas.`,
}

//Sem pedra
pkmn.megaClefable = {
    type: ["fairy", "flying"],
    bst: {
        hp: 95*1.2,
        atk: 80*1.2,
        def: 93*1.2,
        satk: 135*1.2,
        sdef: 110*1.2,
        spe: 70*1.2,
    },
    hiddenAbility: ability.magicGuard,
    eggMove : move.lunarDance,
    lore: `A energia oculta da Pedra da Lua transbordou através da Mega Evolução. Suas asas cresceram tanto que ele agora consegue voar diretamente em direção ao espaço sideral.`,
    signature : move.lightOfRuin,
}

// 037 Vulpix → Ninetales
pkmn.vulpix = {
    type: ["fire"],
    bst: {
        hp: 38,
        atk: 41,
        def: 40,
        satk: 50,
        sdef: 65,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.ninetales, item: item.fireStone } } },
    hiddenAbility: ability.drought,
    lore: `Quando nasce, tem apenas uma cauda. Conforme cresce, a cauda se divide em seis.`,
}

pkmn.alolanVulpix = {
    type: ["ice"],
    bst: {
        hp: 38,
        atk: 41,
        def: 40,
        satk: 50,
        sdef: 65,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.alolanNinetales, level: evolutionLevel2 } } },
    hiddenAbility: ability.snowWarning,
    lore: `Exala um ar mais frio do que -15°C. As pessoas mais velhas de Alola o chamam pelo nome antigo: Keokeo.`,
}

pkmn.ninetales = {
    type: ["fire"],
    bst: {
        hp: 73,
        atk: 76,
        def: 75,
        satk: 81,
        sdef: 100,
        spe: 100,
    },
    hiddenAbility: ability.drought,
    lore: `Dizem que cada uma de suas nove caudas possui um poder místico. Pode viver até mil anos.`,
}

pkmn.alolanNinetales = {
    type: ["ice", "fairy"],
    bst: {
        hp: 73,
        atk: 67,
        def: 75,
        satk: 81,
        sdef: 100,
        spe: 109,
    },
    hiddenAbility: ability.snowWarning,
    lore: `Habita montanhas perpetuamente cobertas de neve e é reverenciada como a encarnação de uma divindade.`,
}

// 039 Igglybuff → Jigglypuff → Wigglytuff
pkmn.igglybuff = {
    type: ["normal","fairy"],
    bst: {
        hp: 90,
        atk: 30,
        def: 15,
        satk: 40,
        sdef: 20,
        spe: 15,
    },
    evolve: function() { return { 1: { pkmn: pkmn.jigglypuff, level: evolutionLevel1 } } },
    hiddenAbility: ability.pixilate,
    eggMove : move.eggBomb,
    lore: `Seu corpo é tão elástico que, se ele começar a pular, não consegue parar de quicar.`,
}

pkmn.jigglypuff = {
    type: ["normal","fairy"],
    bst: {
        hp: 115,
        atk: 45,
        def: 20,
        satk: 45,
        sdef: 25,
        spe: 20,
    },
    evolve: function() { return { 1: { pkmn: pkmn.wigglytuff, item: item.moonStone } } },
    hiddenAbility: ability.pixilate,
    eggMove : move.eggBomb,
    lore: `Seus olhos grandes e redondos brilham quando ele começa a cantar uma melodia hipnótica que faz todos adormecerem.`,
}

pkmn.wigglytuff = {
    type: ["normal","fairy"],
    bst: {
        hp: 140,
        atk: 70,
        def: 45,
        satk: 85,
        sdef: 50,
        spe: 45,
    },
    hiddenAbility: ability.pixilate,
    eggMove : move.eggBomb,
    lore: `Seu corpo é tão macio e elástico que, se inflar, ele pode continuar flutuando para sempre.`,
}

// 041 Zubat → Golbat → Crobat
pkmn.zubat = {
    type: ["poison","flying"],
    bst: {
        hp: 40,
        atk: 45,
        def: 35,
        satk: 30,
        sdef: 40,
        spe: 55,
    },
    evolve: function() { return { 1: { pkmn: pkmn.golbat, level: evolutionLevel1 } } },
    hiddenAbility: ability.dauntingLook,
    lore: `Ele não possui olhos e vive em cavernas escuras, usando ondas ultrassônicas para navegar e sugar o sangue de presas vivas.`,
}

pkmn.zubatF = {
    type: ["poison","flying"],
    bst: {
        hp: 40,
        atk: 45,
        def: 35,
        satk: 30,
        sdef: 40,
        spe: 55,
    },
    evolve: function() { return { 1: { pkmn: pkmn.golbatF, level: evolutionLevel1 } } },
    hiddenAbility: ability.dauntingLook,
    lore: `Dorme em cavernas durante o dia. Não possui olhos, então, para verificar o ambiente enquanto voa, emite ondas ultrassônicas.`,
}

pkmn.golbat = {
    type: ["poison","flying"],
    bst: {
        hp: 75,
        atk: 80,
        def: 70,
        satk: 65,
        sdef: 75,
        spe: 90,
    },
    evolve: function() { return { 1: { pkmn: pkmn.crobat, item: item.linkStone } } },
    hiddenAbility: ability.dauntingLook,
    lore: `Ele adora sangue fresco. Se morder, não solta até estar totalmente saciado.`,
}

pkmn.golbatF = {
    type: ["poison","flying"],
    bst: {
        hp: 75,
        atk: 80,
        def: 70,
        satk: 65,
        sdef: 75,
        spe: 90,
    },
    evolve: function() { return { 1: { pkmn: pkmn.crobat, item: item.linkStone } } },
    hiddenAbility: ability.dauntingLook,
    lore: `Uma vez que morde, não para de drenar energia da vítima, mesmo que fique pesado demais para voar.`,
}

pkmn.crobat = {
    type: ["poison","flying"],
    bst: {
        hp: 85,
        atk: 90,
        def: 80,
        satk: 70,
        sdef: 80,
        spe: 130,
    },
    hiddenAbility: ability.dauntingLook,
    lore: `Voa silenciosamente. Se ele voar durante o dia, é porque está exausto.`,
}

// 043 Oddish → Gloom → Vileplume / Bellossom
pkmn.oddish = {
    type: ["grass","poison"],
    bst: {
        hp: 45,
        atk: 50,
        def: 55,
        satk: 75,
        sdef: 65,
        spe: 30,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.gloom, level: evolutionLevel1 },
            2: { pkmn: pkmn.gloomF, item: item.shinyStone },
        }
    },
    hiddenAbility: ability.chlorophyll,
    signature : move.trailblaze,
    lore: `Durante o dia, ele se enterra no solo para absorver nutrientes, parecendo uma planta.`,
}

pkmn.gloom = {
    type: ["grass","poison"],
    bst: {
        hp: 60,
        atk: 65,
        def: 70,
        satk: 85,
        sdef: 75,
        spe: 40,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.vileplume, item: item.leafStone }, 
            2: { pkmn: pkmn.bellossom, item: item.sunStone },
        } 
    },
    hiddenAbility: ability.chlorophyll,
    signature : move.trailblaze,
    lore: `O cheiro fétido que exala de sua boca é capaz de desmaiar humanos a quilômetros.`,
}

pkmn.gloomF = {
    type: ["grass","poison"],
    bst: {
        hp: 60,
        atk: 65,
        def: 70,
        satk: 85,
        sdef: 75,
        spe: 40,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.vileplumeF, item: item.leafStone }, 
            2: { pkmn: pkmn.bellossom, item: item.sunStone }, 
        } 
    },
    hiddenAbility: ability.chlorophyll,
    signature : move.trailblaze,
    lore: `O mel que baba de sua boca tem um cheiro tão atroz que consegue fazer narizes se contorcerem a mais de um quilômetro e meio de distância.`,
}

pkmn.vileplume = {
    type: ["grass","poison"],
    bst: {
        hp: 75,
        atk: 80,
        def: 85,
        satk: 110,
        sdef: 90,
        spe: 50,
    },
    hiddenAbility: ability.chlorophyll,
    signature : move.trailblaze,
    lore: `Suas pétalas imensas liberam um pólen altamente tóxico que causa paralisia severa.`,
}

pkmn.vileplumeF = {
    type: ["grass","poison"],
    bst: {
        hp: 75,
        atk: 80,
        def: 85,
        satk: 110,
        sdef: 90,
        spe: 50,
    },
    hiddenAbility: ability.chlorophyll,
    signature : move.trailblaze,
    lore: `Suas pétalas são as maiores do mundo. Ele espalha cruelmente um pólen que causa alergia a partir de suas pétalas.`,
}

pkmn.bellossom = {
    type: ["grass"],
    bst: {
        hp: 75,
        atk: 80,
        def: 95,
        satk: 90,
        sdef: 100,
        spe: 50,
    },
    hiddenAbility: ability.dancer,
    signature : move.trailblaze,
    lore: `Quando dançam juntas, suas pétalas produzem um som hipnótico e relaxante.`,
}

// 046 Paras → Parasect
pkmn.paras = {
    type: ["bug","grass"],
    bst: {
        hp: 35,
        atk: 70,
        def: 55,
        satk: 45,
        sdef: 55,
        spe: 25,
    },
    evolve: function() { return { 1: { pkmn: pkmn.parasect, level: evolutionLevel2 } } },
    hiddenAbility: ability.colorSpore,
    lore: `Os fungos em suas costas crescem sugando nutrientes do hospedeiro, controlando-o.`,
}

pkmn.parasect = {
    type: ["bug","grass"],
    bst: {
        hp: 60,
        atk: 95,
        def: 80,
        satk: 60,
        sdef: 80,
        spe: 30,
    },
    hiddenAbility: ability.colorSpore,
    lore: `O cogumelo nas costas assumiu o controle total do inseto, que agora vagueia sem rumo.`,
}

// 048 Venonat → Venomoth
pkmn.venonat = {
    type: ["bug","poison"],
    bst: {
        hp: 60,
        atk: 55,
        def: 50,
        satk: 40,
        sdef: 55,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.venomoth, level: evolutionLevel2 } } },
    hiddenAbility: ability.moltShed,
    lore: `Seus olhos servem como radar, emitindo raios que podem paralisar vítimas.`,
}

pkmn.venomoth = {
    type: ["bug","poison"],
    bst: {
        hp: 70,
        atk: 65,
        def: 60,
        satk: 90,
        sdef: 75,
        spe: 90,
    },
    hiddenAbility: ability.moltShed,
    lore: `Suas asas soltam pó tóxico ao bater, que pode causar náuseas ou inconsciência.`,
}

// 050 Diglett → Dugtrio
pkmn.diglett = {
    type: ["ground"],
    bst: {
        hp: 10,
        atk: 55,
        def: 25,
        satk: 35,
        sdef: 45,
        spe: 95,
    },
    evolve: function() { return { 1: { pkmn: pkmn.dugtrio, level: evolutionLevel2 } } },
    hiddenAbility: ability.sandForce,
    lore: `Ele vive no subsolo. A superfície que ele revira é ideal para o plantio de vegetais.`,
}

pkmn.alolanDiglett = {
    type: ["ground", "steel"],
    bst: {
        hp: 10,
        atk: 55,
        def: 30,
        satk: 35,
        sdef: 45,
        spe: 90,
    },
    evolve: function() { return { 1: { pkmn: pkmn.alolanDugtrio, level: evolutionLevel2 } } },
    lore: `Graças ao solo vulcânico rico em ferro de Alola, ele desenvolveu lindos bigodes metálicos na cabeça`,
}

pkmn.dugtrio = {
    type: ["ground"],
    bst: {
        hp: 35,
        atk: 100,
        def: 50,
        satk: 50,
        sdef: 70,
        spe: 120,
    },
    hiddenAbility: ability.sandForce,
    lore: `Um trio de Diglett que trabalha em equipe para escavar túneis em alta velocidade.`,
}

pkmn.alolanDugtrio = {
    type: ["ground", "steel"],
    bst: {
        hp: 35,
        atk: 100,
        def: 60,
        satk: 50,
        sdef: 70,
        spe: 110,
    },
    hiddenAbility: ability.ferrilate,
    lore: `Na região de Alola, é considerado uma divindade feminina da terra. Acredita-se que pegar seus pelos traga má sorte.`, 
}

// 052 Meowth → Persian / Galarian Meowth → Perrserker
pkmn.meowth = {
    type: ["normal"],
    bst: {
        hp: 40,
        atk: 45,
        def: 35,
        satk: 40,
        sdef: 40,
        spe: 90,
    },
    evolve: function() { return { 1: { pkmn: pkmn.persian, level: evolutionLevel2 } } },
    hiddenAbility: ability.technician,
    signature : move.payDay,
    lore: `Adora objetos brilhantes e coleciona moedas roubadas de humanos.`,
}

pkmn.meowthGmax = {
    type: ["normal"],
    bst: {
        hp: 90*1.15,
        atk: 45*1.15,
        def: 35*1.15,
        satk: 40*1.15,
        sdef: 40*1.15,
        spe: 40*1.15,
    },
    hiddenAbility: ability.technician,
    signature : move.payDay,
    lore: `"O seu desejo por objetos brilhantes aumenta a tal ponto que ele causa danos às janelas de arranha-céus e paredes externas para afiar as suas garras. A moeda gigante na sua cabeça emite tanto poder que envolve toda a área num brilho dourado`,
}

pkmn.alolanMeowth = {
    type: ["dark"],
    bst: {
        hp: 40,
        atk: 35,
        def: 35,
        satk: 50,
        sdef: 40,
        spe: 90,
    },
    evolve: function() { return { 1: { pkmn: pkmn.alolanPersian, level: evolutionLevel2 } } },
    hiddenAbility: ability.technician,
    signature : move.payDay,
    lore: `Originalmente não era encontrado em Alola. Eles se tornaram selvagens e aumentaram em população devido à ação humana.`,
}

pkmn.galarianMeowth = {
    type: ["steel"],
    bst: {
        hp: 50,
        atk: 65,
        def: 55,
        satk: 40,
        sdef: 40,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.perrserker, level: evolutionLevel2 } } },
    hiddenAbility: ability.technician,
    signature : move.payDay,
    lore: `Viver com um povo selvagem e marinheiro endureceu tanto o corpo deste Pokémon que partes dele se transformaram em ferro.`,
}

pkmn.persian = {
    type: ["normal"],
    bst: {
        hp: 65,
        atk: 70,
        def: 60,
        satk: 65,
        sdef: 65,
        spe: 115,
    },
    hiddenAbility: ability.technician,
    signature : move.payDay,
    lore: `Destaca-se pelo temperamento cruel e violento, atacando quando a cauda é erguida ou ao olhar nos olhos, com garras afiadas.`,
}

pkmn.alolanPersian = {
    type: ["dark"],
    bst: {
        hp: 65,
        atk: 60,
        def: 60,
        satk: 75,
        sdef: 65,
        spe: 115,
    },
    hiddenAbility: ability.technician,
    signature : move.payDay,
    lore: `Seu rosto redondo e sua pelagem macia e aveludada fizeram dele um Pokémon muito popular em Alola.`,
}

pkmn.perrserker = {
  type: ["steel"],
  bst: {
    hp: 70,
    atk: 110,
    def: 100,
    satk: 50,
    sdef: 60,
    spe: 50,
  },
  hiddenAbility: ability.technician,
  signature : move.payDay,
  lore: `O que parece ser um capacete de ferro é, na verdade, cabelo endurecido. Este Pokémon vive para a emoção da batalha.`,
}

// 054 Psyduck → Golduck
pkmn.psyduck = {
    type: ["water"],
    bst: {
        hp: 50,
        atk: 52,
        def: 48,
        satk: 65,
        sdef: 50,
        spe: 55,
    },
    evolve: function() { return { 1: { pkmn: pkmn.golduck, level: evolutionLevel2 } } },
    hiddenAbility: ability.rainDish,
    signature : move.soak,
    lore: `Sofre de dores de cabeça constantes. Quando a dor aumenta, libera poderes psíquicos.`,
}

pkmn.golduck = {
    type: ["water"],
    bst: {
        hp: 80,
        atk: 82,
        def: 78,
        satk: 95,
        sdef: 80,
        spe: 85,
    },
    hiddenAbility: ability.rainDish,
    signature : move.soak,
    lore: `Seus nados são graciosos, mas pode nadar em velocidades espantosas com suas nadadeiras.`,
}

// 056 Mankey → Primeape
pkmn.mankey = {
    type: ["fighting"],
    bst: {
        hp: 40,
        atk: 80,
        def: 35,
        satk: 35,
        sdef: 45,
        spe: 70,
    },
    evolve: function() { return { 1: { pkmn: pkmn.primeape, level: evolutionLevel2 } } },
    hiddenAbility: ability.rivalry,
    signature : move.rageFist,
    lore: `Ele se enfurece facilmente. Se um membro do grupo se irrita, todos começam a brigar.`,
}

pkmn.primeape = {
    type: ["fighting"],
    bst: {
        hp: 65,
        atk: 105,
        def: 60,
        satk: 60,
        sdef: 70,
        spe: 95,
    },
    hiddenAbility: ability.rivalry,
    signature : move.rageFist,
    lore: `Ele é tão agressivo que nunca para de perseguir quem o irrita, mesmo que isso custe sua vida.`,
    evolve: function() { return { 1: { pkmn: pkmn.annihilape, item: item.oddRock } } }
}

pkmn.annihilape = {
  type: ["fighting", "ghost"],
  bst: {
    hp: 110,
    atk: 115,
    def: 80,
    satk: 50,
    sdef: 90,
    spe: 90,
  },
    hiddenAbility: ability.rivalry,
    signature : move.rageFist,
    lore: `Quando sua raiva subiu além de um ponto crítico, este Pokémon ganhou poder que é desvinculado dos limites de seu corpo físico.`,
}

// 058 Growlithe → Arcanine
pkmn.growlithe = {
    type: ["fire"],
    bst: {
        hp: 55,
        atk: 70,
        def: 45,
        satk: 70,
        sdef: 50,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.arcanine, item: item.fireStone } } },
    hiddenAbility: ability.fieryPelt,
    eggMove : move.howl,
    lore: `Ele é extremamente leal ao seu treinador, protegendo-o com seu sopro de fogo.`,
}

pkmn.hisuianGrowlithe = {
    type: ["fire", "rock"],
    bst: {
        hp: 55,
        atk: 70,
        def: 55,
        satk: 70,
        sdef: 50,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.hisuianArcanine, level: evolutionLevel2 } } },
    hiddenAbility: ability.sandyPelt,
    signature : move.heatCrash,
    lore: `Eles patrulham seu território em pares. Acredito que os componentes de rocha ígnea na pelagem dessa espécie sejam resultado da atividade vulcânica em seu habitat.`,
}

pkmn.arcanine = {
    type: ["fire"],
    bst: {
        hp: 90,
        atk: 110,
        def: 80,
        satk: 100,
        sdef: 80,
        spe: 95,
    },
    hiddenAbility: ability.fieryPelt,
    eggMove : move.howl,
    lore: `Considerado um Pokémon lendário em muitas regiões por sua velocidade e elegância.`,
}

pkmn.hisuianArcanine = {
    type: ["fire", "rock"],
    bst: {
        hp: 90,
        atk: 110,
        def: 80,
        satk: 100,
        sdef: 80,
        spe: 95,
    },
    hiddenAbility: ability.sandyPelt,
    signature : move.heatCrash,
    lore: `Ataca os inimigos com presas envoltas em chamas ardentes. Apesar do seu volume, desvia-se habilmente para todos os lados, conduzindo os adversários a uma perseguição enganadoramente divertida, enquanto dança à volta deles.`,
}

// 060 Poliwag → Poliwhirl → Poliwrath / Politoed
pkmn.poliwag = {
    type: ["water"],
    bst: {
        hp: 40,
        atk: 50,
        def: 40,
        satk: 40,
        sdef: 40,
        spe: 90,
    },
    evolve: function() { return { 1: { pkmn: pkmn.poliwhirl, level: evolutionLevel2 } } },
    hiddenAbility: ability.swiftSwim,
}

pkmn.poliwhirl = {
    type: ["water"],
    bst: {
        hp: 75,
        atk: 75,
        def: 65,
        satk: 50,
        sdef: 50,
        spe: 90,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.poliwrath, item: item.waterStone }, 
            2: { pkmn: pkmn.politoed, item: item.oddRock }, 
        } 
    },
    hiddenAbility: ability.swiftSwim,
}

pkmn.poliwrath = {
    type: ["water","fighting"],
    bst: {
        hp: 90,
        atk: 95,
        def: 95,
        satk: 70,
        sdef: 90,
        spe: 70,
    },
    hiddenAbility: ability.swiftSwim,
}

pkmn.politoed = {
    type: ["water"],
    bst: {
        hp: 90,
        atk: 75,
        def: 75,
        satk: 90,
        sdef: 100,
        spe: 70,
    },
    hiddenAbility: ability.drizzle,
}

// 063 Abra → Kadabra → Alakazam
pkmn.abra = {
    type: ["psychic"],
    bst: {
        hp: 25,
        atk: 20,
        def: 15,
        satk: 105,
        sdef: 55,
        spe: 90,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.kadabra, level: evolutionLevel1 },
            2: { pkmn: pkmn.kadabraF, item: item.shinyStone },
        } 
    },
    hiddenAbility: ability.magicGuard,
    signature : move.kinesis,
    lore: `Ele pressente ataques iminentes e se teletransporta para um local seguro antes que os ataques possam atingi-lo.`,
}

pkmn.kadabra = {
    type: ["psychic"],
    bst: {
        hp: 40,
        atk: 35,
        def: 30,
        satk: 120,
        sdef: 100,
        spe: 105,
    },
    evolve: function() { return { 1: { pkmn: pkmn.alakazam, item: item.linkStone } } },
    hiddenAbility: ability.magicGuard,
    signature : move.kinesis,
    lore: `Possui fortes capacidades mentais, mas seus poderes psíquicos são reduzidos à metade quando não está segurando uma colher de prata.`,
}

pkmn.kadabraF = {
    type: ["psychic"],
    bst: {
        hp: 40,
        atk: 35,
        def: 30,
        satk: 120,
        sdef: 100,
        spe: 105,
    },
    evolve: function() { return { 1: { pkmn: pkmn.alakazamF, item: item.linkStone } } },
    hiddenAbility: ability.magicGuard,
    signature : move.kinesis,
    lore: `A telecinese deste Pokémon é imensamente poderosa. Para se preparar para a evolução, o Kadabra armazena energia psíquica na estrela em sua testa.`,
}

pkmn.alakazam = {
    type: ["psychic"],
    bst: {
        hp: 55,
        atk: 50,
        def: 45,
        satk: 135,
        sdef: 95,
        spe: 120,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaAlakazam, item: item.alakazite } } },
    hiddenAbility: ability.magicGuard,
    signature : move.kinesis,
    lore: `Diz-se que as colheres agarradas em suas mãos foram criadas por seus poderes psíquicos.`,
}

pkmn.alakazamF = {
    type: ["psychic"],
    bst: {
        hp: 55,
        atk: 50,
        def: 45,
        satk: 135,
        sdef: 95,
        spe: 120,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaAlakazam, item: item.alakazite } } },
    hiddenAbility: ability.magicGuard,
    signature : move.kinesis,
    lore: `Possui uma memória perfeita, lembrando de tudo que ocorreu desde o seu nascimento até a morte.`,
}

pkmn.megaAlakazam = {
    type: ["psychic"],
    bst: {
        hp: 55*1.2,
        atk: 50*1.2,
        def: 65*1.2,
        satk: 175*1.2,
        sdef: 105*1.2,
        spe: 150*1.2,
    },
    hiddenAbility: ability.magicGuard,
    signature : move.kinesis,
    lore: `Embora tenha fortes habilidades psíquicas e alta inteligência, os músculos de um Alakazam são muito fracos. Ele usa o poder psíquico para mover seu corpo.`,
}

// 066 Machop → Machoke → Machamp
pkmn.machop = {
    type: ["fighting"],
    bst: {
        hp: 70,
        atk: 80,
        def: 50,
        satk: 35,
        sdef: 35,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.machoke, level: evolutionLevel2 } } },
    hiddenAbility: ability.guts,
    signature : move.dynamicPunch,
    lore: `Seu corpo inteiro é repleto de músculos. Mesmo sendo pequeno, ele consegue levantar até cem adultos de uma só vez.`,
}

pkmn.machoke = {
    type: ["fighting"],
    bst: {
        hp: 80,
        atk: 100,
        def: 70,
        satk: 50,
        sdef: 60,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.machamp, item: item.linkStone } } },
    hiddenAbility: ability.guts,
    signature : move.dynamicPunch,
    lore: `Seu corpo musculoso é tão forte que ele precisa usar um cinto de treino para evitar que seu poder fique fora de controle.`,
}

pkmn.machamp = {
    type: ["fighting"],
    bst: {
        hp: 90,
        atk: 130,
        def: 80,
        satk: 65,
        sdef: 85,
        spe: 55,
    },
    hiddenAbility: ability.guts,
    signature : move.dynamicPunch,
    lore: `Com seus quatro braços, Machamp consegue lançar uma sucessão rápida de socos e chaves usando técnicas de luta especializadas.`,
}

pkmn.machampGmax = {
    type: ["fighting"],
    bst: {
        hp: 90*1.15,
        atk: 130*1.15,
        def: 80*1.15,
        satk: 65*1.15,
        sdef: 85*1.15,
        spe: 55*1.15,
    },
    hiddenAbility: ability.guts,
    signature : move.dynamicPunch,
    lore: `A energia Dynamax faz seus músculos incharem a proporções colossais, permitindo golpes capazes de arremessar caminhões pelo ar.`,
}

// 069 Bellsprout → Weepinbell → Victreebel
pkmn.bellsprout = {
    type: ["grass","poison"],
    bst: {
        hp: 50,
        atk: 75,
        def: 35,
        satk: 70,
        sdef: 30,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.weepinbell, level: evolutionLevel1 } } },
    hiddenAbility: ability.chlorophyll,
    eggMove : move.appleAcid,
    lore: `Suas raízes finas absorvem água escondida no solo. Quando algo se aproxima, ele o prende com uma vinha e o cospe fora com desdém.`,
}

pkmn.weepinbell = {
    type: ["grass","poison"],
    bst: {
        hp: 65,
        atk: 90,
        def: 50,
        satk: 85,
        sdef: 45,
        spe: 55,
    },
    evolve: function() { return { 1: { pkmn: pkmn.victreebel, item: item.leafStone } } },
    hiddenAbility: ability.chlorophyll,
    eggMove : move.appleAcid,
    lore: `Ele digere presas capturadas usando um fluido ácido secretado no interior de sua boca em forma de sino.`,
}

pkmn.victreebel = {
    type: ["grass","poison"],
    bst: {
        hp: 80,
        atk: 105,
        def: 65,
        satk: 100,
        sdef: 70,
        spe: 70,
    },
    hiddenAbility: ability.chlorophyll,
    eggMove : move.appleAcid,
    lore: `Sua boca aberta libera um aroma doce que atrai presas, engolindo-as inteiras. Já foi visto com pernas de esqueleto saindo de sua boca.`,
}

//Sem pedra
pkmn.megaVictreebel = {
    type: ["grass","poison"],
    bst: {
        hp: 80*1.2,
        atk: 125*1.2,
        def: 85*1.2,
        satk: 135*1.2,
        sdef: 95*1.2,
        spe: 70*1.2,
    },
    hiddenAbility: ability.chlorophyll,
    eggMove : move.appleAcid,
    lore: `A megaevolução deixa suas raízes ainda mais profundas e sua boca gigantesca, capaz de engolir presas do tamanho de uma pessoa.`,
    signature : move.barbBarrage,
}

// 072 Tentacool → Tentacruel
pkmn.tentacool = {
    type: ["water","poison"],
    bst: {
        hp: 40,
        atk: 40,
        def: 35,
        satk: 50,
        sdef: 100,
        spe: 70,
    },
    evolve: function() { return { 1: { pkmn: pkmn.tentacruel, level: evolutionLevel2 } } },
    hiddenAbility: ability.merciless,
    eggMove : move.venoshock,
    lore: `Flutua na superfície do oceano à deriva. Ao anoitecer, seu corpo cristalino brilha em azul, avisando embarcações próximas.`,
}

pkmn.tentacruel = {
    type: ["water","poison"],
    bst: {
        hp: 80,
        atk: 70,
        def: 65,
        satk: 80,
        sdef: 120,
        spe: 100,
    },
    hiddenAbility: ability.merciless,
    eggMove : move.venoshock,
    lore: `Seus dois grandes tentáculos podem se esticar e encolher livremente para prender presas e sugar seus fluidos corporais.`,
}

// 074 Geodude → Graveler → Golem
pkmn.geodude = {
    type: ["rock","ground"],
    bst: {
        hp: 40,
        atk: 80,
        def: 100,
        satk: 30,
        sdef: 30,
        spe: 20,
    },
    evolve: function() { return { 1: { pkmn: pkmn.graveler, level: evolutionLevel2 } } },
    hiddenAbility: ability.stoned,
    eggMove : move.rockWrecker,
    lore: `Encontrado com frequência em trilhas de montanha, entre outros lugares parecidos. Se pisarem nele por acidente, ele fica furioso.`,
}

pkmn.alolanGeodude = {
    type: ["rock", "electric"],
    bst: {
        hp: 40,
        atk: 80,
        def: 100,
        satk: 30,
        sdef: 30,
        spe: 20,
    },
    evolve: function() { return { 1: { pkmn: pkmn.alolanGraveler, level: evolutionLevel2 } } },
    hiddenAbility: ability.stoned,
    eggMove : move.electroBall,
    lore: `Rico em minério de ferro, seu corpo é fortemente magnético. Ele se agrupa com outros de sua espécie usando o magnetismo mútuo.`,
}

pkmn.graveler = {
    type: ["rock","ground"],
    bst: {
        hp: 55,
        atk: 95,
        def: 115,
        satk: 45,
        sdef: 45,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.golem, item: item.linkStone } } },
    hiddenAbility: ability.stoned,
    eggMove : move.rockWrecker,
    lore: `Rola descendo encostas para se mover. Ele avança em linha reta, incapaz de virar, então destrói tudo o que encontra pelo caminho.`,
}

pkmn.alolanGraveler = {
    type: ["rock", "electric"],
    bst: {
        hp: 55,
        atk: 95,
        def: 115,
        satk: 45,
        sdef: 45,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.alolanGolem, level: evolutionLevel2 } } },
    hiddenAbility: ability.stoned,
    eggMove : move.auraWheel,
    lore: `Seu corpo funciona como um ímã, então quando dois se aproximam demais, ficam presos e não conseguem se separar.`,
}

pkmn.golem = {
    type: ["rock","ground"],
    bst: {
        hp: 80,
        atk: 120,
        def: 130,
        satk: 55,
        sdef: 65,
        spe: 45,
    },
    hiddenAbility: ability.stoned,
    eggMove : move.rockWrecker,
    lore: `Depois que muda de forma, sua casca torna-se dura como aço. Partes dela se desprendem e viram pedras quando ele se move.`,
}

pkmn.alolanGolem = {
    type: ["rock", "electric"],
    bst: {
        hp: 80,
        atk: 120,
        def: 130,
        satk: 55,
        sdef: 65,
        spe: 45,
    },
    hiddenAbility: ability.stoned,
    eggMove : move.auraWheel,
    lore: `Seu corpo magnético atrai pedaços de sucata metálica. Comparado ao Golem comum, este é mais gentil e menos combativo.`,
}

// 077 Ponyta → Rapidash
pkmn.ponyta = {
    type: ["fire"],
    bst: {
        hp: 50,
        atk: 85,
        def: 55,
        satk: 65,
        sdef: 65,
        spe: 90,
    },
    evolve: function() { return { 1: { pkmn: pkmn.rapidash, level: evolutionLevel3 } } },
    hiddenAbility: ability.flameGuard,
    lore: `Seus cascos são dez vezes mais duros que diamantes, e ele consegue esmagar rocha dura com facilidade enquanto galopa.`,
}

pkmn.galarianPonyta = {
    type: ["psychic"],
    bst: {
        hp: 50,
        atk: 85,
        def: 55,
        satk: 65,
        sdef: 65,
        spe: 90,
    },
    evolve: function() { return { 1: { pkmn: pkmn.galarianRapidash, level: evolutionLevel3 } } },
    hiddenAbility: ability.pastelVeil,
    lore: `Habita antigas florestas, onde a energia mágica que flutua no ar concedeu a esse Pokémon sua bela e etérea juba.`,
}

pkmn.rapidash = {
    type: ["fire"],
    bst: {
        hp: 65,
        atk: 100,
        def: 70,
        satk: 80,
        sdef: 80,
        spe: 105,
    },
    hiddenAbility: ability.flameGuard,
    lore: `Extremamente veloz, este Pokémon consegue correr um quilômetro em apenas dezessete segundos, deixando um rastro de fogo.`,
}

pkmn.galarianRapidash = {
    type: ["psychic", "fairy"],
    bst: {
        hp: 65,
        atk: 100,
        def: 70,
        satk: 80,
        sdef: 80,
        spe: 105,
    },
    hiddenAbility: ability.pastelVeil,
    lore: `Sua elegância e velocidade o tornaram um símbolo de nobreza. O chifre em sua testa pode cortar através do que quer que toque.`,
}

// 079 Slowpoke → Slowbro / Slowking
pkmn.slowpoke = {
    type: ["water","psychic"],
    bst: {
        hp: 90,
        atk: 65,
        def: 65,
        satk: 40,
        sdef: 40,
        spe: 15,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.slowbro, level: evolutionLevel2 }, 
            2: { pkmn: pkmn.slowking, item: item.oddRock }, 
        } 
    },
    hiddenAbility: ability.unaware,
    signature : move.chillyReception,
    lore: `Distraído e lento, leva cinco segundos para sentir dor quando algo o morde ou pisa em sua cauda.`,
}

pkmn.galarianSlowpoke = {
    type: ["psychic"],
    bst: {
        hp: 90,
        atk: 65,
        def: 65,
        satk: 40,
        sdef: 40,
        spe: 15,
    },
    evolve: function() { 
        return {
            1: { pkmn: pkmn.galarianSlowbro, level: evolutionLevel2 }, 
            2: { pkmn: pkmn.galarianSlowking, item: item.oddRock },
        } 
    },
    lore: `Sua dieta consiste quase inteiramente de uma erva local muito amarga, o que parece ter mudado sua personalidade e fisiologia.`,
}

pkmn.slowbro = {
    type: ["water","psychic"],
    bst: {
        hp: 95,
        atk: 75,
        def: 110,
        satk: 100,
        sdef: 80,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaSlowbro, item: item.slowbronite } } },
    hiddenAbility: ability.unaware,
    signature : move.chillyReception,
    lore: `Nasceu quando um Shellder mordeu a cauda de um Slowpoke. Diz-se que ele perde seus poderes se o Shellder se soltar.`,
}

pkmn.megaSlowbro = {
    type: ["water","psychic"],
    bst: {
        hp: 95*1.2,
        atk: 75*1.2,
        def: 180*1.2,
        satk: 130*1.2,
        sdef: 80*1.2,
        spe: 30*1.2,
    },
    hiddenAbility: ability.unaware,
    signature : move.chillyReception,
    lore: `A megaevolução faz com que o Shellder engula quase todo o corpo de Slowbro, aumentando drasticamente seu poder psíquico.`,
}

pkmn.galarianSlowbro = {
    type: ["poison","psychic"],
    bst: {
        hp: 95,
        atk: 100,
        def: 95,
        satk: 100,
        sdef: 70,
        spe: 30,
    },
    lore: `A toxina liberada pela erva que Shellder comeu se espalhou por seu corpo, transformando seu braço em uma arma que dispara jatos.`,
}

pkmn.slowking = {
    type: ["water","psychic"],
    bst: {
        hp: 95,
        atk: 75,
        def: 80,
        satk: 100,
        sdef: 110,
        spe: 30,
    },
    hiddenAbility: ability.strategist,
    lore: `Toxinas liberadas pelo Shellder em sua cabeça se espalharam pelo cérebro de Slowpoke, despertando habilidades psíquicas latentes.`,
}

pkmn.galarianSlowking = {
    type: ["poison","psychic"],
    bst: {
        hp: 95,
        atk: 65,
        def: 80,
        satk: 110,
        sdef: 110,
        spe: 30,
    },
    lore: `As substâncias venenosas da erva local subiram até sua cabeça, e o líquido dentro do frasco que ele bebe se tornou uma poção misteriosa.`,
}

// 081 Magnemite → Magneton → Magnezone
pkmn.magnemite = {
    type: ["electric","steel"],
    bst: {
        hp: 25,
        atk: 35,
        def: 70,
        satk: 95,
        sdef: 55,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.magneton, level: evolutionLevel2 } } },
    hiddenAbility: ability.levitate,
    lore: `Ele flutua no ar usando ondas eletromagnéticas geradas por seu corpo. Chega mais perto de linhas de alta tensão para se recarregar.`,
}

pkmn.magneton = {
    type: ["electric","steel"],
    bst: {
        hp: 50,
        atk: 60,
        def: 95,
        satk: 120,
        sdef: 70,
        spe: 70,
    },
    evolve: function() { return { 1: { pkmn: pkmn.magnezone, item: item.thunderStone } } },
    hiddenAbility: ability.levitate,
    lore: `Formado por três Magnemite unidos por um forte campo magnético. Emite fortes ondas de rádio que podem causar interferência estática.`,
}

pkmn.magnezone = {
    type: ["electric","steel"],
    bst: {
        hp: 70,
        atk: 70,
        def: 115,
        satk: 130,
        sdef: 90,
        spe: 60,
    },
    hiddenAbility: ability.levitate,
    lore: `Um misterioso ímã em seu núcleo pode captar sinais de rádio do espaço, o que levou a especulações de que se comunica com alienígenas.`,
}

// 083 Farfetch'd / Galarian Farfetch'd → Sirfetch'd
pkmn.farfetchd = {
    type: ["normal","flying"],
    bst: {
        hp: 52,
        atk: 90,
        def: 55,
        satk: 58,
        sdef: 62,
        spe: 60,
    },
    lore: `Ele carrega um talo verde como se fosse uma espada. Já foi visto brandindo esse talo enquanto luta contra rivais por território.`,
}

pkmn.galarianFarfetchd = {
    type: ["fighting"],
    bst: {
        hp: 52,
        atk: 95,
        def: 55,
        satk: 58,
        sdef: 62,
        spe: 55,
    },
    evolve: function() { return { 1: { pkmn: pkmn.sirfetchd, level: evolutionLevel2 } } },
    hiddenAbility: ability.reckless,
    signature : move.meteorAssault,
    lore: `Vive nas montanhas, onde mastiga um talo fibroso o dia todo para fortalecer seu pescoço e desenvolver seus músculos peitorais.`,
}

pkmn.sirfetchd = {
  type: ["fighting"],
  bst: {
    hp: 62,
    atk: 135,
    def: 95,
    satk: 68,
    sdef: 82,
    spe: 65,
  },
    hiddenAbility: ability.reckless,
    signature : move.meteorAssault,
    lore: `Sua lança nunca se separa dele, mesmo durante o sono. É considerado um herói cavalheiresco entre outros Pokémon.`,
}

// 084 Doduo → Dodrio
pkmn.doduo = {
    type: ["normal","flying"],
    bst: {
        hp: 35,
        atk: 85,
        def: 45,
        satk: 35,
        sdef: 35,
        spe: 75,
    },
    evolve: function() { return { 1: { pkmn: pkmn.dodrio, level: evolutionLevel2 } } },
    hiddenAbility: ability.parentalBond,
    signature : move.triAttack,
    lore: `Mesmo enquanto come ou dorme, uma das cabeças permanece sempre vigilante quanto a qualquer sinal de perigo. Quando ameaçado, ele foge a mais de 100 quilômetros por hora.`,
}

pkmn.doduoF = {
    type: ["normal","flying"],
    bst: {
        hp: 35,
        atk: 85,
        def: 45,
        satk: 35,
        sdef: 35,
        spe: 75,
    },
    evolve: function() { return { 1: { pkmn: pkmn.dodrioF, level: evolutionLevel2 } } },
    hiddenAbility: ability.parentalBond,
    signature : move.triAttack,
    lore: `Ele vive em uma planície gramada onde pode enxergar a longas distâncias. Se avistar um inimigo, ele foge a quase 100 km/h.`,
}

pkmn.dodrio = {
    type: ["normal","flying"],
    bst: {
        hp: 60,
        atk: 110,
        def: 70,
        satk: 60,
        sdef: 60,
        spe: 110,
    },
    hiddenAbility: ability.parentalBond,
    signature : move.triAttack,
    lore: `Ele coleta dados e planeja três vezes mais sabiamente, mas pode pensar demais e ficar imobilizado.`,
}

pkmn.dodrioF = {
    type: ["normal","flying"],
    bst: {
        hp: 60,
        atk: 110,
        def: 70,
        satk: 60,
        sdef: 60,
        spe: 110,
    },
    hiddenAbility: ability.parentalBond,
    signature : move.triAttack,
    lore: `Uma espécie estranha que é raramente encontrada. As três cabeças representam, respectivamente, alegria, tristeza e raiva.`,
}

// 086 Seel → Dewgong
pkmn.seel = {
    type: ["water"],
    bst: {
        hp: 65,
        atk: 45,
        def: 55,
        satk: 45,
        sdef: 70,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.dewgong, level: evolutionLevel2 } } },
    hiddenAbility: ability.moistPelt,
    lore: `Sua pele grossa o protege mesmo em águas geladas. Ele nada graciosamente pelo mar gelado usando a saliência em sua cabeça para quebrar o gelo.`,
}

pkmn.dewgong = {
    type: ["water","ice"],
    bst: {
        hp: 90,
        atk: 70,
        def: 80,
        satk: 70,
        sdef: 95,
        spe: 70,
    },
    hiddenAbility: ability.moistPelt,
    lore: `Vive em mares gelados. Seu corpo elegante e branco é adorado como um símbolo de pureza, e cientistas do gelo o admiram.`,
}

// 088 Grimer → Muk
pkmn.grimer = {
    type: ["poison"],
    bst: {
        hp: 80,
        atk: 80,
        def: 50,
        satk: 40,
        sdef: 50,
        spe: 25,
    },
    evolve: function() { return { 1: { pkmn: pkmn.muk, level: evolutionLevel2 } } },
    hiddenAbility: ability.toxicBoost,
    signature : move.venoshock,
    lore: `Nascido de lodo acumulado em áreas poluídas, este Pokémon adora comer lixo, produzindo gás fétido de seu corpo pegajoso.`,
}

pkmn.alolanGrimer = {
    type: ["poison", "dark"],
    bst: {
        hp: 80,
        atk: 80,
        def: 50,
        satk: 40,
        sdef: 50,
        spe: 25,
    },
    evolve: function() { return { 1: { pkmn: pkmn.alolanMuk, level: evolutionLevel2 } } },
    hiddenAbility: ability.powerOfAlchemy,
    lore: `Sua dieta rica em sal fez seu corpo pegajoso desenvolver um cheiro peculiar. Cristais de sal se formam em sua superfície.`,
}

pkmn.muk = {
    type: ["poison"],
    bst: {
        hp: 105,
        atk: 105,
        def: 75,
        satk: 65,
        sdef: 100,
        spe: 50,
    },
    hiddenAbility: ability.toxicBoost,
    signature : move.venoshock,
    lore: `Onde quer que este Pokémon passe, plantas e grama murcham e morrem devido às toxinas liberadas por seu corpo viscoso.`,
}

pkmn.alolanMuk = {
    type: ["poison", "dark"],
    bst: {
        hp: 105,
        atk: 105,
        def: 75,
        satk: 65,
        sdef: 100,
        spe: 50,
    },
    hiddenAbility: ability.powerOfAlchemy,
    lore: `Seu corpo colorido é cheio de bactérias que decompõem lixo. Quanto mais lixo ele come, mais brilhante fica sua cor.`,
}

// 090 Shellder → Cloyster
pkmn.shellder = {
    type: ["water"],
    bst: {
        hp: 30,
        atk: 65,
        def: 100,
        satk: 45,
        sdef: 25,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.cloyster, item: item.waterStone } } },
    hiddenAbility: ability.skillLink,
    signature : move.clamp,
    lore: `Sua concha dura é composta de material mais resistente que diamante. A parte interna nunca foi vista por ninguém.`,
}

pkmn.cloyster = {
    type: ["water","ice"],
    bst: {
        hp: 50,
        atk: 95,
        def: 180,
        satk: 85,
        sdef: 45,
        spe: 70,
    },
    hiddenAbility: ability.skillLink,
    signature : move.clamp,
    lore: `Depois de sua evolução, sua carcaça fica ainda mais dura, e espinhos afiados brotam dela. Ele nunca se move por conta própria.`,
}

// 092 Gastly → Haunter → Gengar
pkmn.gastly = {
    type: ["ghost","poison"],
    bst: {
        hp: 30,
        atk: 35,
        def: 30,
        satk: 100,
        sdef: 35,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.haunter, level: evolutionLevel2 } } },
    hiddenAbility: ability.levitate,
    lore: `Praticamente feito de gás, ele engolfa alvos para colocá-los para dormir sem que percebam, causando sufocamento silencioso.`,
}

pkmn.haunter = {
    type: ["ghost","poison"],
    bst: {
        hp: 45,
        atk: 50,
        def: 45,
        satk: 115,
        sdef: 55,
        spe: 95,
    },
    evolve: function() { return { 1: { pkmn: pkmn.gengar, item: item.linkStone } } },
    hiddenAbility: ability.levitate,
    lore: `Se este Pokémon acenar para você da escuridão, nunca aceite o convite. A alma será sugada por sua língua áspera.`,
}

pkmn.gengar = {
    type: ["ghost","poison"],
    bst: {
        hp: 60,
        atk: 65,
        def: 60,
        satk: 130,
        sdef: 75,
        spe: 110,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaGengar, item: item.gengarite } } },
    hiddenAbility: ability.levitate,
    lore: `Diz-se que Gengar surge das sombras para roubar as vidas daqueles que se perderam nas montanhas.`,
}

pkmn.megaGengar = {
    type: ["ghost","poison"],
    bst: {
        hp: 90*1.2,
        atk: 65*1.2,
        def: 80*1.2,
        satk: 180*1.2,
        sdef: 125*1.2,
        spe: 130*1.2,
    },
    hiddenAbility: ability.somberField,
    signature : move.shadowForce,
    lore: `A megaevolução torna sua sombra ainda mais espessa e assustadora, permitindo que ele se funda completamente com a escuridão.`,
}

pkmn.gengarGmax = {
    type: ["ghost","poison"],
    bst: {
        hp: 110*1.15,
        atk: 65*1.15,
        def: 80*1.15,
        satk: 190*1.15,
        sdef: 95*1.15,
        spe: 90*1.15,
    },
    hiddenAbility: ability.somberField,
    lore: `Sua boca se torna enorme o suficiente para engolir cidades inteiras. Diz-se que ele nunca sacia sua fome insaciável por almas.`,
}

// 095 Onix
pkmn.onix = {
    type: ["rock","ground"],
    bst: {
        hp: 35,
        atk: 45,
        def: 160,
        satk: 30,
        sdef: 45,
        spe: 70,
    },
    evolve: function() { return { 1: { pkmn: pkmn.steelix, item: item.metalCoat } } },
    hiddenAbility: ability.sheerForce,
    lore: `Enquanto cresce, seu corpo cinza vai se tornando mais arredondado e liso, como se fosse polido por atrito subterrâneo.`,
}

pkmn.steelix = {
    type: ["steel","ground"],
    bst: {
        hp: 75,
        atk: 85,
        def: 200,
        satk: 55,
        sdef: 65,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaSteelix, item: item.steelixite } } },
    hiddenAbility: ability.sheerForce,
    lore: `Ao viver por muito tempo nas profundezas da terra, sua estrutura celular sofreu uma mudança que o transformou em uma criatura de puro aço.`,
}

pkmn.megaSteelix = {
    type: ["steel","ground"],
    bst: {
        hp: 75*1.2,
        atk: 125*1.2,
        def: 230*1.2,
        satk: 55*1.2,
        sdef: 95*1.2,
        spe: 30*1.2,
    },
    hiddenAbility: ability.sheerForce,
    lore: `Sua megaevolução alonga ainda mais seu corpo metálico, capaz de perfurar através de camadas de rocha com facilidade extraordinária.`,
    signature : move.boneRush,
}

// 096 Drowzee → Hypno
pkmn.drowzee = {
    type: ["psychic"],
    bst: {
        hp: 60,
        atk: 48,
        def: 45,
        satk: 43,
        sdef: 90,
        spe: 42,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.hypno, level: evolutionLevel2 },
            2: { pkmn: pkmn.hypnoF, item: item.shinyStone }, 
        }
    },
    hiddenAbility: ability.sinisterGuard,
    lore: `Diz-se que se um bebê fizer uma careta engraçada enquanto dorme, foi porque Drowzee estava tentando comer seu sonho.`,
}

pkmn.hypno = {
    type: ["psychic"],
    bst: {
        hp: 85,
        atk: 73,
        def: 70,
        satk: 73,
        sdef: 115,
        spe: 67,
    },
    hiddenAbility: ability.sinisterGuard,
    lore: `Ele balança um pêndulo para hipnotizar suas vítimas. Houve casos de crianças desaparecidas.`,
}

pkmn.hypnoF = {
    type: ["psychic"],
    bst: {
        hp: 85,
        atk: 73,
        def: 70,
        satk: 73,
        sdef: 115,
        spe: 67,
    },
    hiddenAbility: ability.sinisterGuard,
    lore: `Ele carrega um pêndulo prateado e seu movimento arqueado, juntamente com o brilho, induz o oponente a um estado profundo de hipnose em questão de segundos.`,
}

// 098 Krabby → Kingler
pkmn.krabby = {
    type: ["water"],
    bst: {
        hp: 30,
        atk: 105,
        def: 90,
        satk: 25,
        sdef: 25,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.kingler, level: evolutionLevel2 } } },
    hiddenAbility: ability.toughClaws,
    signature : move.crabhammer,
    lore: `Encontrado enterrado nas areias das praias. Seus dois grandes pincers regeneram rapidamente se forem perdidos em uma batalha.`,
}

pkmn.kingler = {
    type: ["water"],
    bst: {
        hp: 55,
        atk: 130,
        def: 115,
        satk: 50,
        sdef: 50,
        spe: 75,
    },
    hiddenAbility: ability.toughClaws,
    signature : move.crabhammer,
    lore: `Sua enorme garra pesa cem toneladas de força quando fechada, mas é pesada demais para ele controlar com precisão.`,
}

pkmn.kinglerGmax = {
    type: ["water"],
    bst: {
        hp: 55*1.15,
        atk: 130*1.15,
        def: 115*1.15,
        satk: 50*1.15,
        sdef: 50*1.15,
        spe: 75*1.15,
    },
    hiddenAbility: ability.toughClaws,
    signature : move.crabhammer,
    lore: `A energia Dynamax faz com que sua grande garra cresça a proporções gigantescas, permitindo golpes de força devastadora.`,
}

// 100 Voltorb → Electrode
pkmn.voltorb = {
    type: ["electric"],
    bst: {
        hp: 40,
        atk: 30,
        def: 50,
        satk: 55,
        sdef: 55,
        spe: 100,
    },
    evolve: function() { return { 1: { pkmn: pkmn.electrode, level: evolutionLevel2 } } },
    hiddenAbility: ability.hyperconductor,
    signature : move.electroBall,
    lore: `Foi descoberto quando alguém confundiu uma Poké Bola abandonada com este Pokémon, que se disfarça para se proteger.`,
}

pkmn.hisuianVoltorb = {
    type: ["electric", "grass"],
    bst: {
        hp: 40,
        atk: 30,
        def: 50,
        satk: 55,
        sdef: 55,
        spe: 100,
    },
    evolve: function() { return { 1: { pkmn: pkmn.hisuianElectrode, level: evolutionLevel2 } } },
    hiddenAbility: ability.grassySurge,
    signature : move.chloroblast,
    lore: `Uma antiga forma que se assemelha mais a uma noz do que a uma esfera moderna, capaz de explodir com facilidade quando assustada.`,
}

pkmn.electrode = {
    type: ["electric"],
    bst: {
        hp: 60,
        atk: 50,
        def: 70,
        satk: 80,
        sdef: 80,
        spe: 150,
    },
    hiddenAbility: ability.hyperconductor,
    signature : move.electroBall,
    lore: `Ele armazena eletricidade negativa gerada por seu corpo esférico. Ao mínimo estímulo, ele explode com um estrondo ensurdecedor.`,
}

pkmn.hisuianElectrode = {
    type: ["electric", "grass"],
    bst: {
        hp: 60,
        atk: 50,
        def: 70,
        satk: 80,
        sdef: 80,
        spe: 150,
    },
    hiddenAbility: ability.grassySurge,
    signature : move.chloroblast,
    lore: `Diz-se que essa forma antiga foi confundida por viajantes com uma fruta caída de uma árvore, até explodir repentinamente.`,
}

// 102 Exeggcute → Exeggutor
pkmn.exeggcute = {
    type: ["grass","psychic"],
    bst: {
        hp: 60,
        atk: 40,
        def: 80,
        satk: 60,
        sdef: 45,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.exeggutor, item: item.leafStone } } },
    hiddenAbility: ability.parentalBond,
    signature : move.barrage,
    lore: `Composto por seis ovos que formam uma unidade. Se separados, eles se comunicam por telepatia e voltam a se reunir rapidamente.`,
}

pkmn.exeggutor = {
    type: ["grass","psychic"],
    bst: {
        hp: 95,
        atk: 95,
        def: 85,
        satk: 125,
        sdef: 75,
        spe: 55,
    },
    hiddenAbility: ability.parentalBond,
    signature : move.barrage,
    lore: `As três cabeças deste Pokémon pensam de forma independente, e não parecem se dar muito bem, cada uma agindo por conta própria.`,
}

pkmn.alolanExeggutor = {
    type: ["grass", "dragon"],
    bst: {
        hp: 95,
        atk: 105,
        def: 85,
        satk: 125,
        sdef: 75,
        spe: 45,
    },
    hiddenAbility: ability.skillLink,
    eggMove : move.barrage,
    lore: `Devido ao clima quente e à luz solar abundante de Alola, seu pescoço cresceu extraordinariamente, e um sexto membro surgiu como cauda.`,
}

// 104 Cubone → Marowak
pkmn.cubone = {
    type: ["ground"],
    bst: {
        hp: 50,
        atk: 50,
        def: 95,
        satk: 40,
        sdef: 50,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.marowak, level: evolutionLevel2 } } },
    hiddenAbility: ability.parentalBond,
    signature : move.boneRush,
    lore: `Ele usa o crânio de sua mãe falecida como uma máscara, escondendo sua verdadeira face e a tristeza por trás dela.`,
}

pkmn.marowak = {
    type: ["ground"],
    bst: {
        hp: 60,
        atk: 80,
        def: 110,
        satk: 50,
        sdef: 80,
        spe: 45,
    },
    hiddenAbility: ability.parentalBond,
    signature : move.boneRush,
    lore: `Ele se tornou forte ao superar a tristeza da perda de sua mãe. Ataca com o osso que carrega usando técnicas precisas semelhantes a um boomerang.`,
}

pkmn.alolanMarowak = {
    type: ["fire", "ghost"],
    bst: {
        hp: 60,
        atk: 80,
        def: 110,
        satk: 50,
        sdef: 80,
        spe: 45,
    },
    hiddenAbility: ability.dancer,
    lore: `Ele dança sob a lua cheia para acalmar as almas dos companheiros perdidos, empunhando um osso em chamas que ele mesmo incendeia.`,
}

// 236-106-107-237 Tyrogue → Hitmonlee / Hitmonchan / Hitmontop
pkmn.tyrogue = {
    type: ["fighting"],
    bst: {
        hp: 35,
        atk: 35,
        def: 35,
        satk: 35,
        sdef: 35,
        spe: 35,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.hitmonchan, level: evolutionLevel2 },
            2: { pkmn: pkmn.hitmonlee, item: item.blackBelt },
            3: { pkmn: pkmn.hitmontop, item: item.oddRock } 
        } 
    },
    hiddenAbility: ability.unburden,
    lore: `Ele se torna mais forte lutando repetidamente. Sua forma final depende de quais de seus atributos foram mais treinados durante o crescimento.`,
}

pkmn.hitmonlee = {
    type: ["fighting"],
    bst: {
        hp: 50,
        atk: 120,
        def: 53,
        satk: 35,
        sdef: 110,
        spe: 87,
    },
    hiddenAbility: ability.technician,
    lore: `Suas pernas podem se esticar livremente em qualquer direção, permitindo chutes surpreendentes vindos de ângulos inesperados.`,
}

pkmn.hitmonchan = {
    type: ["fighting"],
    bst: {
        hp: 50,
        atk: 105,
        def: 79,
        satk: 35,
        sdef: 110,
        spe: 76,
    },
    hiddenAbility: ability.ironFist,
    lore: `Cada um de seus socos carrega o peso de anos de treinamento, e diz-se que estilos de luta diferentes moldam a forma de seus punhos.`,
}

pkmn.hitmontop = {
    type: ["fighting"],
    bst: {
        hp: 50,
        atk: 95,
        def: 95,
        satk: 35,
        sdef: 110,
        spe: 70,
    },
    hiddenAbility: ability.contrary,
    lore: `Ele gira sobre a cabeça em alta velocidade enquanto ataca com chutes, um estilo de luta que ninguém mais conseguiu dominar.`,
}

// 108 Lickitung → Lickylicky
pkmn.lickitung = {
    type: ["normal"],
    bst: {
        hp: 90,
        atk: 55,
        def: 75,
        satk: 60,
        sdef: 75,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.lickilicky, item: item.ovalStone } } },
    hiddenAbility: ability.thickFat,
    lore: `Sua língua comprida pode se esticar ao dobro do comprimento de seu corpo, e ele a usa para lamber e examinar tudo ao seu redor.`,
}

pkmn.lickilicky = {
    type: ["normal"],
    bst: {
        hp: 110,
        atk: 85,
        def: 95,
        satk: 80,
        sdef: 95,
        spe: 50,
    },
    hiddenAbility: ability.thickFat,
    lore: `Sua língua extremamente desenvolvida contém terminações nervosas sensíveis, permitindo distinguir sabores com precisão surpreendente.`,
}

// 109 Koffing → Weezing
pkmn.koffing = {
    type: ["poison"],
    bst: {
        hp: 40,
        atk: 65,
        def: 95,
        satk: 60,
        sdef: 45,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.weezing, level: evolutionLevel2 } } },
    hiddenAbility: ability.levitate,
    lore: `Este Pokémon esférico está cheio de gases tóxicos formados pela decomposição de lixo. Ele explode se for exposto a chamas.`,
}

pkmn.weezing = {
    type: ["poison"],
    bst: {
        hp: 65,
        atk: 90,
        def: 120,
        satk: 85,
        sdef: 70,
        spe: 60,
    },
    hiddenAbility: ability.levitate,
    lore: `A fusão de dois Koffing produz gases ainda mais fedorentos. Se um deles inala um gás bom, o outro adoece.`,
}

pkmn.galarianWeezing = {
    type: ["poison", "fairy"],
    bst: {
        hp: 65,
        atk: 90,
        def: 120,
        satk: 85,
        sdef: 70,
        spe: 60,
    },
    hiddenAbility: ability.aromaVeil,
    lore: `Ele filtra o ar poluído absorvendo partículas nocivas e liberando ar limpo pela chaminé em sua cabeça, tornando as cidades mais saudáveis.`,
}

// 111 Rhyhorn → Rhydon → Rhyperior
pkmn.rhyhorn = {
    type: ["ground","rock"],
    bst: {
        hp: 80,
        atk: 85,
        def: 95,
        satk: 30,
        sdef: 30,
        spe: 25,
    },
    evolve: function() { return { 1: { pkmn: pkmn.rhydon, level: evolutionLevel3 } } },
    hiddenAbility: ability.sandRush,
    signature : move.rockWrecker,
    lore: `Sua inteligência é baixa; ele só entende comandos de "avançar" e "atacar".`,
}

pkmn.rhyhornF = {
    type: ["ground","rock"],
    bst: {
        hp: 80,
        atk: 85,
        def: 95,
        satk: 30,
        sdef: 30,
        spe: 25,
    },
    evolve: function() { return { 1: { pkmn: pkmn.rhydonF, level: evolutionLevel3 } } },
    hiddenAbility: ability.sandRush,
    signature : move.rockWrecker,
    lore: `Forte, mas não muito inteligente, pode destruir até mesmo um arranha-céu com suas investidas.`,
}

pkmn.rhydon = {
    type: ["ground","rock"],
    bst: {
        hp: 105,
        atk: 130,
        def: 120,
        satk: 45,
        sdef: 45,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.rhyperior, item: item.linkStone } } },
    hiddenAbility: ability.sandRush,
    signature : move.rockWrecker,
    lore: `O primeiro Pokémon a ser criado. Sua pele é tão dura que resiste até à lava vulcânica.`,
}

pkmn.rhydonF = {
    type: ["ground","rock"],
    bst: {
        hp: 105,
        atk: 130,
        def: 120,
        satk: 45,
        sdef: 45,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.rhyperior, item: item.linkStone } } },
    hiddenAbility: ability.sandRush,
    signature : move.rockWrecker,
    lore: `Evoluiu para andar sobre as patas traseiras, o que lhe permitiu expandir seu habitat até áreas montanhosas íngremes.`,
}

pkmn.rhyperior = {
    type: ["ground","rock"],
    bst: {
        hp: 115,
        atk: 140,
        def: 130,
        satk: 55,
        sdef: 55,
        spe: 40,
    },
    hiddenAbility: ability.sandRush,
    signature : move.rockWrecker,
    lore: `Seus punhos podem disparar pedras usando os buracos em suas palmas como se fossem canhões, alcançando alvos distantes.`,
}

// 113 Happiny → Chansey → Blissey
pkmn.happiny = {
    type: ["normal"],
    bst: {
        hp: 100,
        atk: 5,
        def: 5,
        satk: 15,
        sdef: 65,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.chansey, item: item.ovalStone } } },
    hiddenAbility: ability.sereneGrace,
    signature : move.eggBomb,
    lore: `Ela carrega uma pedra redonda que se parece com um ovo, imitando os movimentos de Chansey enquanto brinca com ela.`,
}

pkmn.chansey = {
    type: ["normal"],
    bst: {
        hp: 250,
        atk: 5,
        def: 5,
        satk: 35,
        sdef: 105,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.blissey, level: evolutionLevel2 } } },
    hiddenAbility: ability.sereneGrace,
    signature : move.eggBomb,
    lore: `Extremamente tímida, raramente é encontrada em áreas selvagens. O ovo que carrega é nutritivo e delicioso, mas ela nunca o compartilha com estranhos.`,
}

pkmn.blissey = {
    type: ["normal"],
    bst: {
        hp: 255,
        atk: 10,
        def: 10,
        satk: 75,
        sdef: 135,
        spe: 55,
    },
    hiddenAbility: ability.sereneGrace,
    signature : move.eggBomb,
    lore: `A gordura macia de todo o seu corpo esconde um ovo que ela produz continuamente com ingredientes nutritivos únicos, compartilhado apenas com feridos.`,
}

// 114 Tangela → Tangrowth
pkmn.tangela = {
    type: ["grass"],
    bst: {
        hp: 65,
        atk: 55,
        def: 115,
        satk: 100,
        sdef: 40,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.tangrowth, level: evolutionLevel2 } } },
    hiddenAbility: ability.growthAbsorb,
    lore: `Seu corpo está completamente coberto por longas vinhas azuis. Ninguém sabe qual é a verdadeira aparência escondida sob elas.`,
}

pkmn.tangelaEvent = {
    rename: `tangela`,
    hidden: true,
    type: ["ghost"],
    bst: {
        hp: 65,
        atk: 55,
        def: 115,
        satk: 100,
        sdef: 40,
        spe: 60,
    },
    hiddenAbility: ability.curseAbsorb,
    lore: `Numa variação vista apenas em ocasiões especiais, suas vinhas parecem brilhar com uma tonalidade diferente do normal, atraindo atenção.`,
}

pkmn.tangrowth = {
    type: ["grass"],
    bst: {
        hp: 100,
        atk: 100,
        def: 125,
        satk: 110,
        sdef: 50,
        spe: 50,
    },
    hiddenAbility: ability.growthAbsorb,
    lore: `Suas vinhas cresceram tanto que começaram a se mover por conta própria, agarrando qualquer coisa que se aproxime demais.`,
}

// 115 Kangaskhan
pkmn.kangaskhan = {
    type: ["normal"],
    bst: {
        hp: 105,
        atk: 95,
        def: 80,
        satk: 40,
        sdef: 80,
        spe: 90,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaKangaskhan, item: item.kangaskhanite } } },
    hiddenAbility: ability.parentalBond,
    eggMove : move.headCharge,
    lore: `Ela cria seu filhote na bolsa em sua barriga por vários anos, raramente deixando-o sair até que esteja pronto para se defender sozinho.`,
}

pkmn.megaKangaskhan = {
    type: ["normal"],
    bst: {
        hp: 120*1.2,
        atk: 125*1.2,
        def: 100*1.2,
        satk: 60*1.2,
        sdef: 100*1.2,
        spe: 100*1.2,
    },
    hiddenAbility: ability.parentalBond,
    eggMove : move.headCharge,
    lore: `A megaevolução faz com que o filhote em sua bolsa também se torne mais forte, lutando ao lado da mãe em perfeita sincronia.`,
}

// 116 Horsea → Seadra → Kingdra
pkmn.horsea = {
    type: ["water"],
    bst: {
        hp: 30,
        atk: 40,
        def: 70,
        satk: 70,
        sdef: 25,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.seadra, level: evolutionLevel2 } } },
    eggMove : move.snipeShot,
    hiddenAbility: ability.reckless,
    lore: `Ele vive em mares tropicais rasos. Quando ameaçado, dispara jatos de tinta preta e foge nadando de costas usando sua nadadeira dorsal.`,
}

pkmn.seadra = {
    type: ["water"],
    bst: {
        hp: 55,
        atk: 65,
        def: 95,
        satk: 95,
        sdef: 45,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.kingdra, level: evolutionLevel3 } } },
    eggMove : move.snipeShot,
    hiddenAbility: ability.reckless,
    lore: `As pontas afiadas em seu corpo secretam veneno potente. Pescadores temem picadas fatais vindas de suas nadadeiras semelhantes a lâminas.`,
}

pkmn.kingdra = {
    type: ["water","dragon"],
    bst: {
        hp: 75,
        atk: 95,
        def: 95,
        satk: 95,
        sdef: 95,
        spe: 85,
    },
    eggMove : move.snipeShot,
    hiddenAbility: ability.reckless,
    lore: `Diz-se que este Pokémon dorme no fundo de redemoinhos oceânicos. Quando desperta, cria tempestades violentas vindas do mar profundo.`,
}

// 118 Goldeen → Seaking
pkmn.goldeen = {
    type: ["water"],
    bst: {
        hp: 45,
        atk: 67,
        def: 60,
        satk: 35,
        sdef: 50,
        spe: 63,
    },
    evolve: function() { return { 1: { pkmn: pkmn.seaking, level: evolutionLevel2 } } },
    hiddenAbility: ability.swiftSwim,
    lore: `Seus movimentos na água são elegantes, mas pode saltar obstáculos com força bruta.`,
}

pkmn.goldeenF = {
    type: ["water"],
    bst: {
        hp: 45,
        atk: 67,
        def: 60,
        satk: 35,
        sdef: 50,
        spe: 63,
    },
    evolve: function() { return { 1: { pkmn: pkmn.seakingF, level: evolutionLevel2 } } },
    hiddenAbility: ability.swiftSwim,
    lore: `O Goldeen possui um temperamento bastante selvagem. Embora nade graciosamente, é conhecido por usar seu chifre para atacar e quebrar vidros de aquários caso seja mantido em cativeiro. Seu chifre costuma ser maior nos machos do que nas fêmeas.`,
}

pkmn.seaking = {
    type: ["water"],
    bst: {
        hp: 80,
        atk: 92,
        def: 65,
        satk: 65,
        sdef: 80,
        spe: 68,
    },
    hiddenAbility: ability.swiftSwim,
    lore: `Durante a época de reprodução, eles mudam de cor e constroem ninhos esculpidos em rochas.`,
}

pkmn.seakingF = {
    type: ["water"],
    bst: {
        hp: 80,
        atk: 92,
        def: 65,
        satk: 65,
        sdef: 80,
        spe: 68,
    },
    hiddenAbility: ability.swiftSwim,
    lore: `Extremamente protetor com seus ovos, o macho e a fêmea se revezam patrulhando o ninho por mais de um mês.`,
}

// 120 Staryu → Starmie
pkmn.staryu = {
    type: ["water"],
    bst: {
        hp: 30,
        atk: 45,
        def: 55,
        satk: 70,
        sdef: 55,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.starmie, item: item.waterStone } } },
    hiddenAbility: ability.synchronize,
    signature : move.camouflage,
    lore: `Seu núcleo central brilha em sete cores durante a noite ao longo da costa. Ele pode regenerar qualquer parte perdida de seu corpo.`,
}

pkmn.starmie = {
    type: ["water","psychic"],
    bst: {
        hp: 60,
        atk: 75,
        def: 85,
        satk: 100,
        sdef: 85,
        spe: 115,
    },
    hiddenAbility: ability.synchronize,
    signature : move.camouflage,
    lore: `Seu núcleo misterioso brilha em sete cores. Alguns pesquisadores acreditam que este Pokémon veio do espaço sideral.`,
}

//Sem Pedra
pkmn.megaStarmie = {
    type: ["water","psychic"],
    bst: {
        hp: 60*1.2,
        atk: 140*1.2,
        def: 105*1.2,
        satk: 130*1.2,
        sdef: 105*1.2,
        spe: 120*1.2,
    },
    hiddenAbility: ability.moxie,
    signature : move.camouflage,
    lore: `Sua megaevolução intensifica o brilho de seu núcleo central, que agora emite luzes ainda mais vibrantes em padrões complexos.`,
}

// 122 Mime Jr. → Mr. Mime / Galarian Mr. Mime → Mr. Rime
pkmn.mimejr = {
    rename: `mimeJr`,
    type: ["psychic","fairy"],
    bst: {
        hp: 20,
        atk: 25,
        def: 45,
        satk: 70,
        sdef: 90,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.mrmime, level: evolutionLevel1 } } },
    hiddenAbility: ability.technician,
    signature : move.mimic,
    lore: `Ele aprende a imitar os gestos e expressões de seus pais observando-os de perto, praticando constantemente para se tornar melhor.`,
}

pkmn.mrmime = {
    rename: `mrMime`,
    type: ["psychic","fairy"],
    bst: {
        hp: 40,
        atk: 45,
        def: 65,
        satk: 100,
        sdef: 120,
        spe: 90,
    },
    hiddenAbility: ability.technician,
    signature : move.mimic,
    lore: `Sua habilidade de pantomima é tão convincente que paredes invisíveis criadas por seus gestos parecem realmente existir.`,
}

pkmn.galarianMrmime = {
    rename: `galarian mrMime`,
    type: ["ice","psychic"],
    bst: {
        hp: 50,
        atk: 65,
        def: 65,
        satk: 90,
        sdef: 90,
        spe: 100,
    },
    evolve: function() { return { 1: { pkmn: pkmn.mrRime, item: item.iceStone } } },
    lore: `Ele dança com movimentos gráceis, e o ritmo hipnótico gerado por sua batuta de gelo pode congelar até os pensamentos de quem assiste.`,
}

pkmn.mrRime = {
  type: ["ice","psychic"],
  bst: {
    hp: 80,
    atk: 85,
    def: 75,
    satk: 110,
    sdef: 100,
    spe: 70,
  },
    signature : move.mimic,
    lore: `Ele adora fazer os outros rirem com sua dança cômica, mas seus passos escondem uma técnica de combate surpreendentemente sofisticada.`,
}

// 123 Scyther → Scizor / Kleavor
pkmn.scyther = {
    type: ["bug","flying"],
    bst: {
        hp: 70,
        atk: 110,
        def: 80,
        satk: 55,
        sdef: 80,
        spe: 105,
    },
    evolve: function() { return { 1: { pkmn: pkmn.scizor, item: item.metalCoat } } },
    hiddenAbility: ability.technician,
    lore: `Ele se move tão rápido que corta presas antes mesmo que elas percebam o movimento.`,
}

pkmn.scytherF = {
    type: ["bug","flying"],
    bst: {
        hp: 70,
        atk: 110,
        def: 80,
        satk: 55,
        sdef: 80,
        spe: 105,
    },
    evolve: function() { return { 1: { pkmn: pkmn.scizor, item: item.metalCoat } } },
    hiddenAbility: ability.technician,
    lore: `As foices afiadas em seus antebraços tornam-se cada vez mais afiadas ao cortar objetos duros. Ele corta a grama com suas lâminas afiadas, movendo-se rápido demais para o olho humano rastrear.`,
}

pkmn.scizor = {
    type: ["bug","steel"],
    bst: {
        hp: 70,
        atk: 130,
        def: 100,
        satk: 55,
        sdef: 80,
        spe: 95,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaScizor, item: item.scizorite } } },
    hiddenAbility: ability.technician,
    lore: `Suas garras de aço são mais afiadas que qualquer lâmina. Ele ataca voando silenciosamente e cortando o alvo antes que perceba.`,
}

pkmn.megaScizor = {
    type: ["bug","steel"],
    bst: {
        hp: 70*1.2,
        atk: 150*1.2,
        def: 140*1.2,
        satk: 65*1.2,
        sdef: 100*1.2,
        spe: 75*1.2,
    },
    hiddenAbility: ability.technician,
    signature : move.megahorn,
    lore: `A megaevolução torna seu exoesqueleto ainda mais denso e reforçado, permitindo voos e ataques em velocidades impressionantes.`,
}

pkmn.kleavor = {
    type: ["bug", "rock"],
    bst: {
        hp: 70,
        atk: 135,
        def: 95,
        satk: 45,
        sdef: 70,
        spe: 85,
    },
    lore: `Uma forma ancestral de Scizor cujos braços evoluíram como machados de pedra, usados para desbravar florestas densas.`,
}

// 124 Smoochum → Jynx
pkmn.smoochum = {
    type: ["ice","psychic"],
    bst: {
        hp: 45,
        atk: 30,
        def: 15,
        satk: 85,
        sdef: 65,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.jynx, level: evolutionLevel2 } } },
    hiddenAbility: ability.strategist,
    signature : move.lovelyKiss,
    lore: `Ela testa a maciez dos lábios de tudo que encontra, encostando-os em pedras e no chão, o que às vezes a deixa com um gosto ruim na boca.`,
}

pkmn.jynx = {
    type: ["ice","psychic"],
    bst: {
        hp: 65,
        atk: 50,
        def: 35,
        satk: 115,
        sdef: 95,
        spe: 95,
    },
    hiddenAbility: ability.strategist,
    signature : move.lovelyKiss,
    lore: `Ela se move ritmicamente como se estivesse dançando, um comportamento que fez algumas pessoas acreditarem que ela podia se comunicar por gestos.`,
}

// 125 Elekid → Electabuzz → Electivire
pkmn.elekid = {
    type: ["electric"],
    bst: {
        hp: 45,
        atk: 63,
        def: 37,
        satk: 65,
        sdef: 55,
        spe: 95,
    },
    evolve: function() { return { 1: { pkmn: pkmn.electabuzz, level: evolutionLevel2 } } },
    hiddenAbility: ability.voltAbsorb,
    lore: `Sua movimentação faz seu corpo gerar eletricidade. Em noites de tempestade, este Pokémon é dito atrair raios.`,
}

pkmn.electabuzz = {
    type: ["electric"],
    bst: {
        hp: 65,
        atk: 83,
        def: 57,
        satk: 95,
        sdef: 85,
        spe: 105,
    },
    evolve: function() { return { 1: { pkmn: pkmn.electivire, item: item.linkStone } } },
    hiddenAbility: ability.voltAbsorb,
    lore: ``,
}

pkmn.electivire = {
    type: ["electric"],
    bst: {
        hp: 75,
        atk: 123,
        def: 67,
        satk: 95,
        sdef: 85,
        spe: 95,
    },
    hiddenAbility: ability.voltAbsorb,
    lore: ``,
}

// 126 Magby → Magmar → Magmortar
pkmn.magby = {
    type: ["fire"],
    bst: {
        hp: 45,
        atk: 75,
        def: 37,
        satk: 70,
        sdef: 55,
        spe: 83,
    },
    evolve: function() { return { 1: { pkmn: pkmn.magmar, level: evolutionLevel2 } } },
    hiddenAbility: ability.flareBoost,
    eggMove : move.armorCannon,
    lore: `Seu corpo está sempre coberto de chamas. Se for pego por um humano, sua temperatura corporal sobe imediatamente.`,
}

pkmn.magmar = {
    type: ["fire"],
    bst: {
        hp: 65,
        atk: 75,
        def: 55,
        satk: 95,
        sdef: 55,
        spe: 93,
    },
    evolve: function() { return { 1: { pkmn: pkmn.magmortar, item: item.linkStone } } },
    hiddenAbility: ability.flareBoost,
    eggMove : move.armorCannon,
    lore: ``,
}

pkmn.magmortar = {
    type: ["fire"],
    bst: {
        hp: 75,
        atk: 95,
        def: 67,
        satk: 125,
        sdef: 95,
        spe: 83,
    },
    hiddenAbility: ability.megaLauncher,
    eggMove : move.armorCannon,
    lore: ``,
}

// 127 Pinsir
pkmn.pinsir = {
    type: ["bug"],
    bst: {
        hp: 65,
        atk: 125,
        def: 100,
        satk: 55,
        sdef: 70,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaPinsir, item: item.pinsirite } } },
    hiddenAbility: ability.aerilate,
    eggMove : move.cometPunch,
    lore: ``,
}

pkmn.megaPinsir = {
    type: ["bug","flying"],
    bst: {
        hp: 99*1.2,
        atk: 155*1.2,
        def: 120*1.2,
        satk: 80*1.2,
        sdef: 90*1.2,
        spe: 105*1.2,
    },
    hiddenAbility: ability.aerilate,
    eggMove : move.camouflage,
    lore: `Após a Mega Evolução, ele torna-se capaz de voar. Talvez por estar tão feliz, ele raramente toca o chão.`,
}

// 128 Tauros
pkmn.tauros = {
    type: ["normal"],
    bst: {
        hp: 75,
        atk: 100,
        def: 95,
        satk: 40,
        sdef: 70,
        spe: 110,
    },
    hiddenAbility: ability.sheerForce,
    lore: `Conhecido por sua constante necessidade de causar alvoroço, este Pokémon derruba árvores grossas para se acalmar caso lhe falte um oponente de batalha.`
}

pkmn.taurosCombat = {
    type: ["fighting"],
    bst: {
        hp: 75,
        atk: 110,
        def: 105,
        satk: 30,
        sdef: 70,
        spe: 100,
    },
    hiddenAbility: ability.angerPoint,
    lore: ``,
}

pkmn.taurosBlaze = {
    type: ["fighting", "fire"],
    bst: {
        hp: 75,
        atk: 110,
        def: 105,
        satk: 30,
        sdef: 70,
        spe: 100,
    },
    hiddenAbility: ability.angerPoint,
    lore: ``,
}

pkmn.taurosAqua = {
    type: ["fighting", "water"],
    bst: {
        hp: 75,
        atk: 110,
        def: 105,
        satk: 30,
        sdef: 70,
        spe: 100,
    },
    hiddenAbility: ability.angerPoint,
    lore: ``,
}

// 129 Magikarp → Gyarados
pkmn.magikarp = {
    type: ["water"],
    bst: {
        hp: 20,
        atk: 10,
        def: 55,
        satk: 15,
        sdef: 20,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.gyarados, level: evolutionLevel1 } } },
    hiddenAbility: ability.waterGuard,
    signature : move.splash,
    lore: `Famoso por ser o Pokémon mais inútil e fraco, mas consegue saltar montanhas inteiras.`,
}

pkmn.magikarpF = {
    type: ["water"],
    bst: {
        hp: 20,
        atk: 10,
        def: 55,
        satk: 15,
        sdef: 20,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.gyaradosF, level: evolutionLevel1 } } },
    hiddenAbility: ability.waterGuard,
    signature : move.splash,
    lore: `Um Pokémon famoso por não fazer nada além de se debater. É considerado muito fraco.`,
}

pkmn.magikarpKoi = {
    type: ["flying","water"],
    bst: {
        hp: 120,
        atk: 20,
        def: 80,
        satk: 100,
        sdef: 80,
        spe: 80,
    },
    signature : move.splash,
    lore: ``,
}

pkmn.magikarpRegal = {
    type: ["flying","steel"],
    bst: {
        hp: 120,
        atk: 20,
        def: 80,
        satk: 100,
        sdef: 80,
        spe: 80,
    },
    signature : move.splash,
    lore: ``,
}

pkmn.magikarpSakura = {
    type: ["flying","fairy"],
    bst: {
        hp: 120,
        atk: 20,
        def: 80,
        satk: 100,
        sdef: 80,
        spe: 80,
    },
    signature : move.splash,
    lore: ``,
}

pkmn.magikarpSkelly = {
    type: ["flying","dark"],
    bst: {
        hp: 120,
        atk: 20,
        def: 80,
        satk: 100,
        sdef: 80,
        spe: 80,
    },
    signature : move.splash,
    lore: ``,
}

pkmn.magikarpSoar = {
    type: ["flying"],
    bst: {
        hp: 120,
        atk: 20,
        def: 80,
        satk: 100,
        sdef: 80,
        spe: 80,
    },
    signature : move.splash,
    lore: ``,
}

pkmn.magikarpTiger = {
    type: ["flying","ground"],
    bst: {
        hp: 120,
        atk: 20,
        def: 80,
        satk: 100,
        sdef: 80,
        spe: 80,
    },
    signature : move.splash,
    lore: ``,
}

pkmn.gyarados = {
    type: ["water","flying"],
    bst: {
        hp: 95,
        atk: 125,
        def: 79,
        satk: 60,
        sdef: 100,
        spe: 81,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaGyarados, item: item.gyaradosite } } },
    hiddenAbility: ability.intimidate,
    lore: `Quando ele entra em fúria, é capaz de destruir cidades inteiras com suas rajadas de água.`,
}

pkmn.gyaradosF = {
    type: ["water","flying"],
    bst: {
        hp: 95,
        atk: 125,
        def: 79,
        satk: 60,
        sdef: 100,
        spe: 81,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaGyarados, item: item.gyaradosite } } },
    hiddenAbility: ability.intimidate,
    lore: `Quando o Magikarp evolui, suas células cerebrais passam por uma transformação estrutural. Dizem que essa mudança é a culpada pela natureza extremamente violenta deste Pokémon.`,
}

pkmn.megaGyarados = {
    type: ["water","dark"],
    bst: {
        hp: 95*1.2,
        atk: 155*1.2,
        def: 109*1.2,
        satk: 70*1.2,
        sdef: 130*1.2,
        spe: 81*1.2,
    },
    hiddenAbility: ability.intimidate,
    lore: ``,
}

// 131 Lapras
pkmn.lapras = {
    type: ["water","ice"],
    bst: {
        hp: 130,
        atk: 85,
        def: 80,
        satk: 85,
        sdef: 95,
        spe: 60,
    },
    hiddenAbility: ability.waterAbsorb,
    eggMove : move.sparklingAria,
    lore: ``,
}

pkmn.laprasGmax = {
    type: ["water","ice"],
    bst: {
        hp: 130*1.15,
        atk: 85*1.15,
        def: 80*1.15,
        satk: 85*1.15,
        sdef: 95*1.15,
        spe: 60*1.15,
    },
    hiddenAbility: ability.waterAbsorb,
    eggMove : move.sparklingAria,
    lore: ``,
}

// 132 Ditto
pkmn.ditto = {
    type: ["normal"],
    bst: {
        hp: 48,
        atk: 48,
        def: 48,
        satk: 48,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.imposter,
    lore: `Believed to be the result of an attempt to replicate the ancestor of all Pokémon. The experiment did not achieve its intended goal, and the creature that emerged was deemed a failure.`
}

// 133 Eevee → Vaporeon / Jolteon / Flareon / Espeon / Umbreon / Leafeon / Glaceon / Sylveon
pkmn.eevee = {
    type: ["normal"],
    bst: {
        hp: 55,
        atk: 55,
        def: 50,
        satk: 45,
        sdef: 65,
        spe: 55,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.vaporeon, item: item.waterStone },
            2: { pkmn: pkmn.jolteon, item: item.thunderStone },
            3: { pkmn: pkmn.flareon, item: item.fireStone },
            4: { pkmn: pkmn.espeon, item: item.dawnStone },
            5: { pkmn: pkmn.umbreon, item: item.duskStone },
            6: { pkmn: pkmn.leafeon, item: item.leafStone },
            7: { pkmn: pkmn.glaceon, item: item.iceStone },
            8: { pkmn: pkmn.sylveon, item: item.shinyStone } 
        }
    },
    hiddenAbility: ability.normalize,
    signature : move.batonPass,
    lore: `Sua composição genética é instável, permitindo que evolua para diversas formas.`,
}

pkmn.eeveeF = {
    type: ["normal"],
    bst: {
        hp: 55,
        atk: 55,
        def: 50,
        satk: 45,
        sdef: 65,
        spe: 55,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.vaporeon, item: item.waterStone },
            2: { pkmn: pkmn.jolteon, item: item.thunderStone },
            3: { pkmn: pkmn.flareon, item: item.fireStone },
            4: { pkmn: pkmn.espeon, item: item.dawnStone },
            5: { pkmn: pkmn.umbreon, item: item.duskStone },
            6: { pkmn: pkmn.leafeon, item: item.leafStone },
            7: { pkmn: pkmn.glaceon, item: item.iceStone },
            8: { pkmn: pkmn.sylveon, item: item.shinyStone } 
        }
    },
    hiddenAbility: ability.normalize,
    signature : move.batonPass,
    lore: `Seu DNA é facilmente influenciado pelo ambiente, permitindo que ele se adapte perfeitamente a diferentes habitats.`,
}

pkmn.eeveeGmax = {
    type: ["normal"],
    bst: {
        hp: 55*1.15,
        atk: 55*1.15,
        def: 50*1.15,
        satk: 45*1.15,
        sdef: 65*1.15,
        spe: 55*1.15,
    },
    hiddenAbility: ability.normalize,
    signature : move.batonPass,
    lore: ``,
}

pkmn.vaporeon = {
    type: ["water"],
    bst: {
        hp: 130,
        atk: 65,
        def: 60,
        satk: 110,
        sdef: 95,
        spe: 65,
    },
    hiddenAbility: ability.hydrolate,
    lore: ``,
}

pkmn.jolteon = {
    type: ["electric"],
    bst: {
        hp: 65,
        atk: 65,
        def: 60,
        satk: 110,
        sdef: 95,
        spe: 130,
    },
    hiddenAbility: ability.galvanize,
    lore: ``,
}

pkmn.flareon = {
    type: ["fire"],
    bst: {
        hp: 65,
        atk: 130,
        def: 60,
        satk: 95,
        sdef: 110,
        spe: 65,
    },
    hiddenAbility: ability.pyrolate,
    eggMove : move.sacredFire,
    lore: ``,
}

pkmn.espeon = {
    type: ["psychic"],
    bst: {
        hp: 65,
        atk: 65,
        def: 60,
        satk: 130,
        sdef: 95,
        spe: 110,
    },
    hiddenAbility: ability.espilate,
    signature : move.morningSun,
    lore: `Um Pokémon extremamente sensível, ele usa o pelo em sua testa para captar padrões sutis no ar e prever o tempo e as ações do oponente.`,
}

pkmn.umbreon = {
    type: ["dark"],
    bst: {
        hp: 95,
        atk: 65,
        def: 110,
        satk: 60,
        sdef: 130,
        spe: 65,
    },
    hiddenAbility: ability.gloomilate,
    lore: `Quando a escuridão cai, os anéis amarelos em seu corpo brilham, permitindo que ele confunda inimigos enquanto se esconde nas sombras.`,
}

pkmn.leafeon = {
    type: ["grass"],
    bst: {
        hp: 65,
        atk: 110,
        def: 130,
        satk: 60,
        sdef: 65,
        spe: 95,
    },
    hiddenAbility: ability.verdify,
    lore: ``,
}

pkmn.glaceon = {
    type: ["ice"],
    bst: {
        hp: 65,
        atk: 60,
        def: 110,
        satk: 130,
        sdef: 95,
        spe: 65,
    },
    hiddenAbility: ability.glaciate,
    eggMove : move.snowscape,
    lore: ``,
}

pkmn.sylveon = {
  type: ["fairy"],
  bst: {
    hp: 95,
    atk: 65,
    def: 65,
    satk: 110,
    sdef: 130,
    spe: 60,
  },
    hiddenAbility: ability.pixilate,
    lore: `Seus laços sensíveis emitem uma energia calmante que acalma até criaturas selvagens ferozes, tornando batalhas mais amenas.`,
}

// 137 Porygon → Porygon2 → Porygon-Z
pkmn.porygon = {
    type: ["normal"],
    bst: {
        hp: 65,
        atk: 60,
        def: 70,
        satk: 85,
        sdef: 75,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.porygon2, level: evolutionLevel2 } } },
    hiddenAbility: ability.adaptability,
    signature : move.conversion,
    lore: ``,
}

pkmn.porygon2 = {
    type: ["normal"],
    bst: {
        hp: 85,
        atk: 80,
        def: 90,
        satk: 105,
        sdef: 95,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.porygonZ, item: item.linkStone } } },
    hiddenAbility: ability.adaptability,
    signature : move.conversion,
    lore: `Recebeu um programa de inteligência artificial atualizado, permitindo que se mova pelo ciberespaço com muito mais eficiência que o original.`,
}

pkmn.porygonZ = {
    type: ["normal"],
    bst: {
        hp: 85,
        atk: 80,
        def: 70,
        satk: 135,
        sdef: 75,
        spe: 90,
    },
    hiddenAbility: ability.adaptability,
    signature : move.conversion,
    lore: ``,
}

// 138 Omanyte → Omastar
pkmn.omanyte = {
    type: ["rock","water"],
    bst: {
        hp: 35,
        atk: 40,
        def: 100,
        satk: 90,
        sdef: 55,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.omastar, level: evolutionLevel3 } } },
    hiddenAbility: ability.costar,
    eggMove : move.sparklingAria
}

pkmn.omastar = {
    type: ["rock","water"],
    bst: {
        hp: 70,
        atk: 60,
        def: 125,
        satk: 115,
        sdef: 70,
        spe: 55,
    },
    hiddenAbility: ability.costar,
    eggMove : move.sparklingAria

}

// 140 Kabuto → Kabutops
pkmn.kabuto = {
    type: ["rock","water"],
    bst: {
        hp: 30,
        atk: 80,
        def: 90,
        satk: 55,
        sdef: 45,
        spe: 55,
    },
    evolve: function() { return { 1: { pkmn: pkmn.kabutops, level: evolutionLevel3 } } },
    hiddenAbility: ability.stoned,
}

pkmn.kabutops = {
    type: ["rock","water"],
    bst: {
        hp: 60,
        atk: 115,
        def: 105,
        satk: 65,
        sdef: 70,
        spe: 80,
    },
    hiddenAbility: ability.stoned,
}

// 142 Aerodactyl
pkmn.aerodactyl = {
    type: ["rock","flying"],
    bst: {
        hp: 80,
        atk: 105,
        def: 65,
        satk: 60,
        sdef: 75,
        spe: 130,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaAerodactyl, item: item.aerodactylite } } },
    hiddenAbility: ability.toughClaws,
}

pkmn.megaAerodactyl = {
    type: ["rock","flying"],
    bst: {
        hp: 80*1.2,
        atk: 135*1.2,
        def: 85*1.2,
        satk: 70*1.2,
        sdef: 95*1.2,
        spe: 150*1.2,
    },
    hiddenAbility: ability.toughClaws,
    signature : move.flyingPress,
    lore: `Parte de suas células de pedra se desprenderam, tornando-o mais rápido e capaz de voar com maior destreza. Sua natureza agressiva, contudo, tornou-se ainda mais cruel.`,
}

// 143 Munchlax → Snorlax
pkmn.munchlax = {
    type: ["normal"],
    bst: {
        hp: 135,
        atk: 85,
        def: 40,
        satk: 40,
        sdef: 85,
        spe: 5,
    },
    evolve: function() { return { 1: { pkmn: pkmn.snorlax, level: evolutionLevel2 } } },
    hiddenAbility: ability.thickFat,
    signature : move.bellyDrum
}

pkmn.snorlax = {
    type: ["normal"],
    bst: {
        hp: 160,
        atk: 110,
        def: 65,
        satk: 65,
        sdef: 110,
        spe: 30,
    },
    hiddenAbility: ability.thickFat,
    signature : move.bellyDrum
}

pkmn.snorlaxGmax = {
    type: ["normal"],
    bst: {
        hp: 160*1.15,
        atk: 110*1.15,
        def: 65*1.15,
        satk: 65*1.15,
        sdef: 110*1.15,
        spe: 30*1.15,
    },
    hiddenAbility: ability.thickFat,
    signature : move.bellyDrum
}

// Lendário
// 144 Articuno
pkmn.articuno = {
    type: ["ice","flying"],
    bst: {
        hp: 90*1.3,
        atk: 85*1.3,
        def: 100*1.3,
        satk: 95*1.3,
        sdef: 125*1.3,
        spe: 85*1.3,
    },
    hiddenAbility: ability.glacialBody,
    lore : `Articuno é um Pokémon pássaro lendário que pode controlar o gelo. O bater de suas asas resfria o ar. Como resultado, diz-se que quando este Pokémon voa, a neve cai.`,
    eggMove : move.snowscape
}

// Lendário
pkmn.galarianArticuno = {
    type: ["psychic","flying"],
    bst: {
        hp: 90*1.3,
        atk: 85*1.3,
        def: 85*1.3,
        satk: 125*1.3,
        sdef: 150*1.3,
        spe: 95*1.3,
    },
    hiddenAbility: ability.justified,
    signature : move.freezingGlare
}

// Lendário
// 145 Zapdos
pkmn.zapdos = {
    type: ["electric","flying"],
    bst: {
        hp: 90*1.3,
        atk: 90*1.3,
        def: 85*1.3,
        satk: 125*1.3,
        sdef: 90*1.3,
        spe: 100*1.3,
    },
    hiddenAbility: ability.dauntingLook,
    lore: `Zapdos é um Pokémon pássaro lendário que possui a habilidade de controlar a eletricidade. Ele geralmente vive em nuvens de tempestade. Ele ganha poder se for atingido por raios.`,
    eggMove : move.charge
}

// Lendário
pkmn.galarianZapdos = {
    type: ["fighting","flying"],
    bst: {
        hp: 90*1.3,
        atk: 125*1.3,
        def: 90*1.3,
        satk: 85*1.3,
        sdef: 90*1.3,
        spe: 150*1.3,
    },
    hiddenAbility: ability.angerPoint,
    signature : move.thunderousKick
}

// Lendário
// 146 Moltres
pkmn.moltres = {
    type: ["fire","flying"],
    bst: {
        hp: 90*1.3,
        atk: 100*1.3,
        def: 90*1.3,
        satk: 125*1.3,
        sdef: 85*1.3,
        spe: 90*1.3,
    },
    hiddenAbility: ability.fieryPelt,
    lore : `Moltres é um Pokémon pássaro lendário que possui a habilidade de controlar o fogo. Se este Pokémon estiver ferido, diz-se que ele mergulha seu corpo no magma derretido de um vulcão para queimar e curar a si mesmo.`,
    eggMove : move.magmaStorm
}

// Lendário
pkmn.galarianMoltres = {
    type: ["dark","flying"],
    bst: {
        hp: 90*1.3,
        atk: 85*1.3,
        def: 90*1.3,
        satk: 150*1.3,
        sdef: 125*1.3,
        spe: 90*1.3,
    },
    hiddenAbility: ability.gloomilate,
    signature : move.fieryWrath
}

// 147 Dratini → Dragonair → Dragonite
pkmn.dratini = {
    type: ["dragon"],
    bst: {
        hp: 41,
        atk: 64,
        def: 45,
        satk: 50,
        sdef: 50,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.dragonair, level: evolutionLevel2 } } },
    hiddenAbility: ability.multiscale,
}

pkmn.dragonair = {
    type: ["dragon"],
    bst: {
        hp: 80,
        atk: 84,
        def: 65,
        satk: 70,
        sdef: 70,
        spe: 70,
    },
    evolve: function() { return { 1: { pkmn: pkmn.dragonite, level: evolutionLevel3 } } },
    hiddenAbility: ability.multiscale,
}

pkmn.dragonite = {
    type: ["dragon","flying"],
    bst: {
        hp: 91,
        atk: 134,
        def: 95,
        satk: 100,
        sdef: 100,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaDragonite, item: item.dragonitite } } },
    hiddenAbility: ability.multiscale,
}

pkmn.megaDragonite = {
    type: ["dragon","flying"],
    bst: {
        hp: 91*1.2,
        atk: 124*1.2,
        def: 115*1.2,
        satk: 145*1.2,
        sdef: 125*1.2,
        spe: 100*1.2,
    },
    hiddenAbility: ability.multiscale,
    signature : move.clangingScales,
    lore: `Para Mega Dragonite, terminar uma batalha rapidamente é um ato de gentileza com o adversário. Mesmo em combate, se perceber alguém em perigo, interromperá tudo para ajudá-lo imediatamente.`,
}

// Lendário
// 150 Mewtwo
pkmn.mewtwo = {
    type: ["psychic"],
    bst: {
        hp: 106*1.3,
        atk: 110*1.3,
        def: 90*1.3,
        satk: 154*1.3,
        sdef: 90*1.3,
        spe: 130*1.3,
    },
    evolve: function() { return { 
        1: { pkmn: pkmn.megaMewtwoX, item: item.mewtwoniteX },
        2: { pkmn: pkmn.megaMewtwoY, item: item.mewtwoniteY } } },
    hiddenAbility: ability.aromaVeil,
    lore: `Mewtwo é um Pokémon criado por manipulação genética. No entanto, embora o poder científico dos humanos tenha criado o corpo desse Pokémon, eles falharam miseravelmente em conceder a Mewtwo um coração compassivo.`,
    signature : move.kinesis
}

pkmn.giovanniMewtwo = {
    type: ["psychic"],
    bst: {
        hp: 106*1.35,
        atk: 110*1.35,
        def: 90*1.35,
        satk: 154*1.35,
        sdef: 90*1.35,
        spe: 130*1.35,
    },
    hiddenAbility: ability.aromaVeil,
    lore: `Forçado a usar uma armadura cibernética desenvolvida por Giovanni. O traje suprime e canaliza seu poder devastador, transformando sua fúria existencial na arma militar mais temida do planeta.`,
    signature : move.kinesis
}

pkmn.megaMewtwoX = {
    type: ["psychic","fighting"],
    bst: {
        hp: 106*1.4,
        atk: 190*1.4,
        def: 100*1.4,
        satk: 154*1.4,
        sdef: 100*1.4,
        spe: 130*1.4,
    },
    hiddenAbility: ability.parentalBond,
    lore: `O poder psíquico fortaleceu seus músculos. Ele possui uma força de preensão de uma tonelada e consegue percorrer 100 metros em exatos dois segundos!`
}

pkmn.megaMewtwoY = {
    type: ["psychic"],
    bst: {
        hp: 106*1.4,
        atk: 150*1.4,
        def: 70*1.4,
        satk: 194*1.4,
        sdef: 120*1.4,
        spe: 140*1.4,
    },
    hiddenAbility: ability.supremeOverlord,
    lore: `Apesar de seu tamanho reduzido, seu poder mental cresceu de forma fenomenal. Com um simples pensamento, ele pode reduzir um arranha-céu a escombros.`
}

// Mítico
// 151 Mew
pkmn.mew = {
    type: ["psychic"],
    bst: {
        hp: 100*1.5,
        atk: 100*1.5,
        def: 100*1.5,
        satk: 100*1.5,
        sdef: 100*1.5,
        spe: 100*1.5,
    },
    hiddenAbility: ability.protean,
    lore: `The origin from which all Pokemon as we know trace their beginnings. Its form, small and gentle, carries the memory of every creature that would follow.`
}

// 152 Chikorita → Bayleef → Meganium
pkmn.chikorita = {
    type: ["grass"],
    bst: {
        hp: 45,
        atk: 49,
        def: 65,
        satk: 49,
        sdef: 65,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.bayleef, level: evolutionLevel1 } } },
    hiddenAbility: ability.costar,
    eggMove : move.floralHealing,
    lore: `A folha em sua cabeça libera um aroma agradável quando ela balança, o que acalma Pokémon próximos e reduz sua agressividade.`
}

pkmn.bayleef = {
    type: ["grass"],
    bst: {
        hp: 60,
        atk: 62,
        def: 80,
        satk: 63,
        sdef: 80,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.meganium, level: evolutionLevel2 } } },
    hiddenAbility: ability.costar,
    eggMove : move.floralHealing,
    lore: `O aroma que exala de sua folha de pescoço deixa quem o cheira com uma sensação de bem-estar, embora quem inale demais possa espirrar.`
}

pkmn.meganium = {
    type: ["grass"],
    bst: {
        hp: 80,
        atk: 82,
        def: 100,
        satk: 83,
        sdef: 100,
        spe: 80,
    },
    hiddenAbility: ability.costar,
    eggMove : move.floralHealing,
    lore: `Sua flor de pescoço libera um perfume calmante tão potente que pode curar sentimentos de raiva das pessoas ao redor.`
}

//Sem pedra
pkmn.megaMeganium = {
    type: ["grass", "fairy"],
    bst: {
        hp: 80*1.2,
        atk: 92*1.2,
        def: 115*1.2,
        satk: 143*1.2,
        sdef: 115*1.2,
        spe: 80*1.2,
    },
    hiddenAbility: ability.costar,
    eggMove : move.floralHealing,
    signature : move.seedFlare,
    lore: `Graças à energia acumulada, Mega Meganium dispara Raio Solar instantaneamente e também se tornou muito mais poderoso em combate físico, chegando a esmagar adversários resistentes aos seus ataques especiais.`,
}

// 155 Cyndaquil → Quilava → Typhlosion
pkmn.cyndaquil = {
    type: ["fire"],
    bst: {
        hp: 39,
        atk: 52,
        def: 43,
        satk: 60,
        sdef: 50,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.quilava, level: evolutionLevel1 } } },
    hiddenAbility: ability.flareBoost,
    signature : move.inferno,
    lore: `Chamas saltam de suas costas quando ele está assustado ou animado. As chamas se tornam mais intensas conforme ele fica mais forte.`
}

pkmn.quilava = {
    type: ["fire"],
    bst: {
        hp: 58,
        atk: 64,
        def: 58,
        satk: 80,
        sdef: 65,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.typhlosion, level: evolutionLevel2 } } },
    hiddenAbility: ability.flareBoost,
    signature : move.inferno,
    lore: `Se atacado, ele acende suas costas em chamas para intimidar o inimigo, embora seu corpo real seja bem menos assustador.`
}

pkmn.typhlosion = {
    type: ["fire"],
    bst: {
        hp: 78,
        atk: 84,
        def: 78,
        satk: 109,
        sdef: 85,
        spe: 100,
    },
    hiddenAbility: ability.flareBoost,
    signature : move.inferno,
    lore: `Ele cria ilusões de calor tremulante para esconder seus verdadeiros movimentos enquanto luta, confundindo o oponente.`
}

pkmn.hisuianTyphlosion = {
    type: ["fire", "ghost"],
    bst: {
        hp: 73,
        atk: 84,
        def: 78,
        satk: 119,
        sdef: 85,
        spe: 95,
    },
    lore: ``
}

// 158 Totodile → Croconaw → Feraligatr
pkmn.totodile = {
    type: ["water"],
    bst: {
        hp: 50,
        atk: 65,
        def: 64,
        satk: 44,
        sdef: 48,
        spe: 43,
    },
    evolve: function() { return { 1: { pkmn: pkmn.croconaw, level: evolutionLevel1 } } },
    hiddenAbility: ability.sheerForce,
    lore: `Suas mandíbulas robustas parecem enormes demais para seu corpo, mas ele ainda não sabe controlar bem a força de sua mordida.`
}

pkmn.croconaw = {
    type: ["water"],
    bst: {
        hp: 65,
        atk: 80,
        def: 80,
        satk: 59,
        sdef: 63,
        spe: 58,
    },
    evolve: function() { return { 1: { pkmn: pkmn.feraligatr, level: evolutionLevel2 } } },
    hiddenAbility: ability.sheerForce,
    lore: `Seus dentes são difíceis de arrancar quando cravados em algo, e ele frequentemente perde dentes em batalhas, sendo rapidamente substituídos.`
}

pkmn.feraligatr = {
    type: ["water"],
    bst: {
        hp: 85,
        atk: 105,
        def: 100,
        satk: 79,
        sdef: 83,
        spe: 78,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaFeraligatr, item: item.feralitite } } },
    hiddenAbility: ability.sheerForce,
    lore: `Ele intimida rivais escancarando a mandíbula, e o som de suas escamas raspando umas nas outras é um aviso claro para inimigos recuarem.`
}

pkmn.megaFeraligatr = {
    type: ["water", "dragon"],
    bst: {
        hp: 85*1.2,
        atk: 160*1.2,
        def: 125*1.2,
        satk: 89*1.2,
        sdef: 93*1.2,
        spe: 78*1.2,
    },
    hiddenAbility: ability.thousandArms,
    signature : move.clamp,
    lore: `A Megaevolução fez com que a sua barbatana dorsal se tornasse gigantesca. Usando essa barbatana junto com a força de seus braços, ficou com uma 'mordida' pelo menos 10 vezes mais poderosa do que era antes de Megaevoluir. Até coisas que, antes, eram grandes demais para Feraligatr enfrentar, agora podem ser trituradas em pedacinhos.`,
}

// 161 Sentret → Furret
pkmn.sentret = {
    type: ["normal"],
    bst: {
        hp: 35,
        atk: 46,
        def: 34,
        satk: 35,
        sdef: 45,
        spe: 20,
    },
    evolve: function() { return { 1: { pkmn: pkmn.furret, level: evolutionLevel1 } } },
    signature : move.meFirst,
    hiddenAbility: ability.costar,
    lore: `Ele fica de guarda usando sua cauda para se equilibrar em pé, observando os arredores enquanto o resto do grupo dorme.`
}

pkmn.furret = {
    type: ["normal"],
    bst: {
        hp: 85,
        atk: 76,
        def: 64,
        satk: 45,
        sdef: 55,
        spe: 90,
    },
    signature : move.meFirst,
    hiddenAbility: ability.costar,
    lore: `Seu corpo longo e fino permite que ele se esgueire por buracos estreitos para escapar de predadores em terrenos rochosos.`
}

// 163 Hoothoot → Noctowl
pkmn.hoothoot = {
    type: ["normal","flying"],
    bst: {
        hp: 60,
        atk: 30,
        def: 30,
        satk: 36,
        sdef: 56,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.noctowl, level: evolutionLevel1 } } },
    hiddenAbility: ability.tintedLens,
    lore: `Ele fica em pé sobre uma perna o dia inteiro, balançando o corpo em um ritmo constante, como se marcasse o tempo com precisão.`
}

pkmn.noctowl = {
    type: ["normal","flying"],
    bst: {
        hp: 100,
        atk: 50,
        def: 50,
        satk: 76,
        sdef: 96,
        spe: 70,
    },
    hiddenAbility: ability.tintedLens,
    lore: `Seus olhos conseguem captar até a menor quantidade de luz, e ele pode girar a cabeça 180 graus para observar o que está atrás dele.`
}

// 165 Ledyba → Ledian
pkmn.ledyba = {
    type: ["bug","flying"],
    bst: {
        hp: 40,
        atk: 40,
        def: 30,
        satk: 20,
        sdef: 80,
        spe: 55,
    },
    evolve: function() { return { 1: { pkmn: pkmn.ledian, level: evolutionLevel1 } } },
    hiddenAbility: ability.ironFist,
    signature : move.cometPunch,
    lore: `Ele se agrupa em grandes números quando está frio, e a comunicação entre eles ocorre através de sinais transmitidos por suas antenas.`
}

pkmn.ledian = {
    type: ["bug","flying"],
    bst: {
        hp: 55,
        atk: 55,
        def: 50,
        satk: 35,
        sdef: 110,
        spe: 85,
    },
    hiddenAbility: ability.ironFist,
    signature : move.cometPunch,
    lore: `Diz-se que quanto mais estrelas brilham no céu noturno, mais poder ele reúne, aumentando sua energia durante noites claras.`
}

// 167 Spinarak → Ariados
pkmn.spinarak = {
    type: ["bug","poison"],
    bst: {
        hp: 40,
        atk: 60,
        def: 40,
        satk: 40,
        sdef: 40,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.ariados, level: evolutionLevel1 } } },
    signature : move.toxicThread,
    hiddenAbility: ability.moltShed,
    lore: `Ele constrói teias que vibram de formas diferentes dependendo do que ficou preso, permitindo distinguir presas de intrusos.`
}

pkmn.ariados = {
    type: ["bug","poison"],
    bst: {
        hp: 80,
        atk: 100,
        def: 70,
        satk: 60,
        sdef: 70,
        spe: 40,
    },
    signature : move.toxicThread,
    hiddenAbility: ability.moltShed,
    lore: `Ele dispara fios de teia de sua boca para prender presas à distância, e nunca esquece o rastro de uma vítima que escapou uma vez.`
}

// 169 Crobat

// 170 Chinchou → Lanturn
pkmn.chinchou = {
    type: ["water","electric"],
    bst: {
        hp: 75,
        atk: 38,
        def: 38,
        satk: 56,
        sdef: 56,
        spe: 67,
    },
    evolve: function() { return { 1: { pkmn: pkmn.lanturn, level: evolutionLevel2 } } },
    hiddenAbility: ability.voltAbsorb,
    eggMove : move.tailGlow,
    lore: `Suas duas antenas bioluminescentes funcionam de formas diferentes: uma emite fraco choque elétrico, a outra gera luz para atrair presas.`
}

pkmn.lanturn = {
    type: ["water","electric"],
    bst: {
        hp: 125,
        atk: 58,
        def: 58,
        satk: 76,
        sdef: 76,
        spe: 67,
    },
    hiddenAbility: ability.voltAbsorb,
    eggMove : move.tailGlow,
    lore: `Sua luz forte pode iluminar o oceano profundo, mas às vezes brilha tanto que cega presas e as deixa desorientadas para serem capturadas.`
}

// 172 Pichu
// 173 Cleffa
// 174 Igglybuff

// 175 Togepi → Togetic → Togekiss
pkmn.togepi = {
    type: ["fairy"],
    bst: {
        hp: 35,
        atk: 20,
        def: 65,
        satk: 40,
        sdef: 65,
        spe: 20,
    },
    evolve: function() { return { 1: { pkmn: pkmn.togetic, level: evolutionLevel2 } } },
    hiddenAbility: ability.sereneGrace,
    signature : move.metronome,
    lore: `Sua casca está cheia de alegria escondida. Diz-se que ela compartilha felicidade com quem trata este Pokémon com gentileza.`
}

pkmn.togetic = {
    type: ["fairy","flying"],
    bst: {
        hp: 55,
        atk: 40,
        def: 85,
        satk: 80,
        sdef: 105,
        spe: 40,
    },
  evolve: function() { return { 1: { pkmn: pkmn.togekiss, item: item.shinyStone /*o equivalente*/ } } },
    hiddenAbility: ability.sereneGrace,
    signature : move.metronome,
    lore: `Ele só é visto por pessoas gentis e puras de coração, e voa até elas para trazer felicidade e boa sorte.`
}

pkmn.togekiss = {
    type: ["fairy","flying"],
    bst: {
        hp: 85,
        atk: 50,
        def: 95,
        satk: 120,
        sdef: 115,
        spe: 80,
    },
    hiddenAbility: ability.sereneGrace,
    signature : move.metronome,
    lore: ``
}

// 177 Natu → Xatu
pkmn.natu = {
    type: ["psychic", "flying"],
    bst: {
        hp: 40,
        atk: 50,
        def: 45,
        satk: 70,
        sdef: 45,
        spe: 70,
    },
    evolve: function() { return { 1: { pkmn: pkmn.xatu, level: evolutionLevel2 } } },
    eggMove : move.aeroblast,
    hiddenAbility: ability.neuroforce,
    lore: `Como suas asas ainda não estão desenvolvidas, ele pula ao invés de voar, e observa tudo com um olhar fixo e penetrante.`
}

pkmn.xatu = {
    type: ["psychic","flying"],
    bst: {
        hp: 65,
        atk: 75,
        def: 70,
        satk: 95,
        sdef: 70,
        spe: 95,
    },
    eggMove : move.aeroblast,
    hiddenAbility: ability.neuroforce,
    lore: `Diz-se que ele fica parado, imóvel, olhando fixamente para o sol, capaz de ver tanto o passado quanto o futuro.`
}

// 179 Mareep → Flaafy → Ampharos
pkmn.mareep = {
    type: ["electric"],
    bst: {
        hp: 55,
        atk: 40,
        def: 40,
        satk: 65,
        sdef: 45,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.flaaffy, level: evolutionLevel1 } } },
    hiddenAbility: ability.flashElectro,
    eggMove : move.zapCannon,
    lore: `Sua lã acumula eletricidade estática, e quanto mais carregada ela fica, mais os cachos se encrespam e brilham no escuro.`
}

pkmn.flaaffy = {
    type: ["electric"],
    bst: {
        hp: 70,
        atk: 55,
        def: 55,
        satk: 80,
        sdef: 60,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.ampharos, level: evolutionLevel2 } } },
    hiddenAbility: ability.flashElectro,
    eggMove : move.zapCannon,
    lore: `Partes de sua lã caem naturalmente, revelando uma pele lisa e semelhante à borracha, ideal para isolar a eletricidade que ele gera.`
}

pkmn.ampharos = {
    type: ["electric"],
    bst: {
        hp: 90,
        atk: 75,
        def: 85,
        satk: 115,
        sdef: 90,
        spe: 55,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaAmpharos, item: item.ampharosite } } },
    hiddenAbility: ability.flashElectro,
    eggMove : move.zapCannon,
    lore: `A luz que brilha na ponta de sua cauda pode ser vista de muito longe, e já foi usada como farol para guiar viajantes perdidos.`
}

pkmn.megaAmpharos = {
    type: ["electric","dragon"],
    bst: {
        hp: 90*1.2,
        atk: 95*1.2,
        def: 105*1.2,
        satk: 165*1.2,
        sdef: 110*1.2,
        spe: 45*1.2,
    },
    hiddenAbility: ability.flashElectro,
    eggMove : move.zapCannon,
    lore: `A energia da Mega Evolução estimulou seus genes, fazendo com que sua pelagem branca voltasse a crescer. Seus chifres também se tornaram mais longos.`,
}

// 182 Bellossom

// 183 Azurill → Marill → Azumarill
pkmn.azurill = {
    type: ["normal","fairy"],
    bst: {
        hp: 50,
        atk: 20,
        def: 40,
        satk: 20,
        sdef: 40,
        spe: 20,
    },
    evolve: function() { return { 1: { pkmn: pkmn.marill, level: evolutionLevel1 } } },
    hiddenAbility: ability.hugePower,
    lore: ``
}

pkmn.marill = {
    type: ["water","fairy"],
    bst: {
        hp: 70,
        atk: 20,
        def: 50,
        satk: 20,
        sdef: 50,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.azumarill, item: item.waterStone } } },
    hiddenAbility: ability.hugePower,
    lore: `Sua cauda flutuante é cheia de óleo, e ele a usa como boia para nadar sem se afogar, mesmo não sendo um bom nadador.`
}

pkmn.azumarill = {
    type: ["water","fairy"],
    bst: {
        hp: 100,
        atk: 80,
        def: 80,
        satk: 60,
        sdef: 80,
        spe: 50,
    },
    hiddenAbility: ability.hugePower,
    lore: `Sua cauda grande e flutuante contém uma bolsa de ar que o ajuda a boiar, permitindo que ele resgate outros Pokémon que se afogam.`
}

// 185 Bonsly → Sudowoodo
pkmn.bonsly = {
    type: ["rock"],
    bst: {
        hp: 50,
        atk: 80,
        def: 95,
        satk: 10,
        sdef: 45,
        spe: 10,
    },
    evolve: function() { return { 1: { pkmn: pkmn.sudowoodo, level: evolutionLevel1 } } },
    eggMove : move.mimic,
    lore: ``
}

pkmn.sudowoodo = {
    type: ["rock"],
    bst: {
        hp: 70,
        atk: 100,
        def: 115,
        satk: 30,
        sdef: 65,
        spe: 30,
    },
    eggMove : move.mimic,
    lore: `Ele se disfarça de árvore para evitar ser atacado, mas seu corpo verdadeiro odeia água, pois pode dissolver sua estrutura de madeira falsa.`
}

// 186 Politoed

// 187 Hoppip → Skiploom → Jumpluff
pkmn.hoppip = {
    type: ["grass","flying"],
    bst: {
        hp: 35,
        atk: 35,
        def: 40,
        satk: 35,
        sdef: 55,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.skiploom, level: evolutionLevel1 } } },
    hiddenAbility: ability.windRider,
    eggMove : move.aeroblast,
    lore: `Tão leve que o vento pode levá-lo embora facilmente. Em dias de vento forte, ele se agarra à grama para não voar para longe.`
}

pkmn.skiploom = {
    type: ["grass","flying"],
    bst: {
        hp: 55,
        atk: 45,
        def: 50,
        satk: 45,
        sdef: 65,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.jumpluff, level: evolutionLevel2 } } },
    hiddenAbility: ability.windRider,
    eggMove : move.aeroblast,
    lore: `Sua flor se abre e fecha de acordo com a temperatura, e ela funciona como uma espécie de termômetro natural para os aldeões.`
}

pkmn.jumpluff = {
    type: ["grass","flying"],
    bst: {
        hp: 75,
        atk: 55,
        def: 70,
        satk: 55,
        sdef: 95,
        spe: 110,
    },
    hiddenAbility: ability.windRider,
    eggMove : move.aeroblast,
    lore: `Ele monta correntes de vento quentes para viajar ao redor do mundo, soltando esporos algodoados que flutuam à distância.`
}

// 190 Aipom → Ambipom
pkmn.aipom = {
    type: ["normal"],
    bst: {
        hp: 55,
        atk: 70,
        def: 55,
        satk: 40,
        sdef: 55,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.ambipom, level: evolutionLevel2 } } },
    hiddenAbility: ability.skillLink,
    eggMove : move.batonPass,
    lore: `Sua cauda é mais hábil que suas próprias mãos, e ele a usa para tudo, desde pegar objetos até construir seu próprio ninho.`
}

pkmn.ambipom = {
    type: ["normal"],
    bst: {
        hp: 75,
        atk: 100,
        def: 66,
        satk: 60,
        sdef: 66,
        spe: 115,
    },
    hiddenAbility: ability.skillLink,
    eggMove : move.batonPass,
    lore: ``
}

// 191 Sunkern → Sunflora
pkmn.sunkern = {
    type: ["grass"],
    bst: {
        hp: 30,
        atk: 30,
        def: 30,
        satk: 30,
        sdef: 30,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.sunflora, item: item.sunStone } } },
    hiddenAbility: ability.flowerVeil,
    lore: `Ele tenta ficar completamente imóvel para economizar energia, já que só precisa de água para sobreviver por dias sem se mover.`
}

pkmn.sunflora = {
    type: ["grass"],
    bst: {
        hp: 75,
        atk: 75,
        def: 55,
        satk: 105,
        sdef: 85,
        spe: 30,
    },
    hiddenAbility: ability.flowerVeil,
    lore: `Ela converte toda a luz solar absorvida em energia de movimento, ficando extremamente ativa em dias ensolarados.`
}

// 193 Yanma → Yanmega
pkmn.yanma = {
    type: ["bug","flying"],
    bst: {
        hp: 65,
        atk: 65,
        def: 45,
        satk: 75,
        sdef: 45,
        spe: 95,
    },
    evolve: function() { return { 1: { pkmn: pkmn.yanmega, level: evolutionLevel3 } } },
    hiddenAbility: ability.speedBoost,
    eggMove : move.braveBird,
    lore: `Seus grandes olhos podem enxergar 360 graus ao redor sem mover a cabeça, tornando quase impossível pegá-lo de surpresa.`
}

pkmn.yanmega = {
    type: ["bug","flying"],
    bst: {
        hp: 86,
        atk: 76,
        def: 86,
        satk: 116,
        sdef: 56,
        spe: 95,
    },
    hiddenAbility: ability.speedBoost,
    eggMove : move.braveBird,
    lore: ``
}

// 194 Wooper → Quagsire / Paldean Wooper → Clodsire
pkmn.wooper = {
    type: ["water","ground"],
    bst: {
        hp: 55,
        atk: 45,
        def: 45,
        satk: 25,
        sdef: 25,
        spe: 15,
    },
    evolve: function() { return { 1: { pkmn: pkmn.quagsire, level: evolutionLevel1 } } },
    signature : move.mudSport,
    hiddenAbility: ability.unaware,
    lore: `Ele vive tanto na água quanto em terra, cobrindo o próprio corpo com uma camada viscosa de toxina para se proteger de predadores.`
}

pkmn.paldeanWooper = {
    type: ["poison","ground"],
    bst: {
        hp: 55,
        atk: 45,
        def: 45,
        satk: 25,
        sdef: 25,
        spe: 15,
    },
    evolve: function() { return { 1: { pkmn: pkmn.clodsire, level: evolutionLevel2 } } },
    hiddenAbility: ability.gooey,
    lore: ``
}

pkmn.quagsire = {
    type: ["water","ground"],
    bst: {
        hp: 95,
        atk: 85,
        def: 85,
        satk: 65,
        sdef: 65,
        spe: 35,
    },
    signature : move.mudSport,
    hiddenAbility: ability.unaware,
    lore: `Distraído por natureza, ele bate a cabeça em pedras enquanto nada sem perceber, e não parece se importar nem um pouco com isso.`
}

pkmn.clodsire = {
  type: ["poison", "ground"],
  bst: {
    hp: 130,
    atk: 75,
    def: 60,
    satk: 45,
    sdef: 100,
    spe: 20,
  },
    hiddenAbility: ability.gooey,
    lore: ``
}

// 196 Espeon
// 197 Umbreon

// 198 Murkrow → Honchkrow
pkmn.murkrow = {
    type: ["dark","flying"],
    bst: {
        hp: 60,
        atk: 85,
        def: 42,
        satk: 85,
        sdef: 42,
        spe: 91,
    },
    evolve: function() { return { 1: { pkmn: pkmn.honchkrow, item: item.duskStone } } },
    hiddenAbility: ability.prankster,
    lore: `Considerado um símbolo de má sorte por algumas culturas, ele adora coletar objetos brilhantes e é atraído por sinais de infortúnio.`
}

pkmn.honchkrow = {
    type: ["dark","flying"],
    bst: {
        hp: 100,
        atk: 125,
        def: 52,
        satk: 105,
        sdef: 52,
        spe: 71,
    },
    hiddenAbility: ability.prankster,
    lore: ``
}

// 199 Slowking

// 200 Misdreavus → Mismagius
pkmn.misdreavus = {
    type: ["ghost"],
    bst: {
        hp: 60,
        atk: 60,
        def: 60,
        satk: 85,
        sdef: 85,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.mismagius, item: item.duskStone } } },
    hiddenAbility: ability.levitate,
    lore: `Ele adora assustar as pessoas soltando um grito arrepiante no meio da noite, alimentando-se do medo que provoca nos outros.`
}

pkmn.mismagius = {
    type: ["ghost"],
    bst: {
        hp: 60,
        atk: 60,
        def: 60,
        satk: 105,
        sdef: 105,
        spe: 105,
    },
    hiddenAbility: ability.levitate,
    lore: ``
}

// 201 Unown
pkmn.unownA = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.adaptability,
    lore: ``
}

pkmn.unownB = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.beastBoost,
}

pkmn.unownC = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.climaTact,
}

pkmn.unownD = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.dancer,
}

pkmn.unownE = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.espilate,
}

pkmn.unownF = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.filter,
}

pkmn.unownG = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.gorillaTactics,
}

pkmn.unownH = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.hugePower,
}

pkmn.unownI = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.imposter,
}

pkmn.unownJ = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.justified,
}

pkmn.unownK = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    }
}

pkmn.unownL = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.libero,
}

pkmn.unownM = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.magicGuard,
}

pkmn.unownN = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.noGuard,
}

pkmn.unownO = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.ownTempo,
}

pkmn.unownP = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.parentalBond,
}

pkmn.unownQ = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.quarkDrive,
}

pkmn.unownR = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.reckless,
}

pkmn.unownS = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.simple,
}

pkmn.unownT = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.technician,
}

pkmn.unownU = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.unburden,
}

pkmn.unownV = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.voltAbsorb,
}

pkmn.unownW = {
    type: ["psychic"],
    bst: {
        hp: 1,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    },
    hiddenAbility: ability.wonderGuard,
}

pkmn.unownX = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    }
}

pkmn.unownY = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    }
}

pkmn.unownZ = {
    type: ["psychic"],
    bst: {
        hp: 48,
        atk: 72,
        def: 48,
        satk: 72,
        sdef: 48,
        spe: 48,
    }
}

pkmn.unownExclamation = {
    type: ["psychic"],
    bst: {
        hp: 80,
        atk: 72,
        def: 48,
        satk: 100,
        sdef: 120,
        spe: 48,
    },
    hiddenAbility: ability.angerPoint,
}

pkmn.unownQuestion = {
    type: ["psychic"],
    bst: {
        hp: 80,
        atk: 72,
        def: 48,
        satk: 100,
        sdef: 120,
        spe: 48,
    },
    hiddenAbility: ability.unaware,
}

// 202 Wynaut → Wobbuffet
pkmn.wynaut = {
    type: ["psychic"],
    bst: {
        hp: 95,
        atk: 23,
        def: 48,
        satk: 23,
        sdef: 48,
        spe: 23,
    },
    evolve: function() { return { 1: { pkmn: pkmn.wobbuffet, level: evolutionLevel2 } } },
    hiddenAbility: ability.unaware,
     lore: `A cauda preta indica o humor; se estiver irritado, ele bate a cauda com força no chão.`,
}

pkmn.wobbuffet = {
    type: ["psychic"],
    bst: {
        hp: 190,
        atk: 33,
        def: 58,
        satk: 83,
        sdef: 58,
        spe: 33,
    },
    hiddenAbility: ability.unaware,
    lore: `A cauda preta possui marcas que parecem olhos. Se alguém atacar ou tocar na cauda dele, o Wobbuffet se torna extremamente feroz e agressivo.`,
}

// 203 Girafarig → Farigiraf
pkmn.girafarig = {
    type: ["normal","psychic"],
    bst: {
        hp: 70,
        atk: 80,
        def: 65,
        satk: 90,
        sdef: 65,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.farigiraf, item: item.oddRock } } },
    hiddenAbility: ability.neuroforce,
    eggMove : move.psyshieldBash,
    lore: `Sua cauda tem uma cabeça própria com cérebro rudimentar, capaz de morder por instinto mesmo enquanto a cabeça principal dorme.`,
}

pkmn.farigiraf = {
  type: ["normal", "psychic"],
  bst: {
    hp: 120,
    atk: 90,
    def: 70,
    satk: 110,
    sdef: 70,
    spe: 60,
  }
}

// 204 Pineco → Forretress
pkmn.pineco = {
    type: ["bug"],
    bst: {
        hp: 50,
        atk: 65,
        def: 90,
        satk: 35,
        sdef: 35,
        spe: 15,
    },
    evolve: function() { return { 1: { pkmn: pkmn.forretress, level: evolutionLevel2 } } },
    hiddenAbility: ability.stamina,
    lore: `Ele se pendura em galhos de árvores parecendo uma pinha comum, permanecendo completamente imóvel até que algo o perturbe.`,
}

pkmn.forretress = {
    type: ["bug","steel"],
    bst: {
        hp: 75,
        atk: 90,
        def: 140,
        satk: 60,
        sdef: 60,
        spe: 40,
    },
    hiddenAbility: ability.stamina,
    lore: `Sua concha extremamente dura pode suportar até uma explosão de bomba, protegendo o corpo mole em seu interior.`,
}

// 206 Dunsparce → Dudunsparce
pkmn.dunsparce = {
    type: ["normal"],
    bst: {
        hp: 100,
        atk: 70,
        def: 70,
        satk: 65,
        sdef: 65,
        spe: 45,
    },
    hiddenAbility: ability.sereneGrace,
    signature : move.hyperDrill,
    lore: `Ele foge cavando no solo assim que percebe perigo, desaparecendo rapidamente com seu corpo em forma de tubo serpenteante.`,
}

pkmn.dudunsparce = {
  type: ["normal"],
  bst: {
    hp: 125,
    atk: 100,
    def: 80,
    satk: 85,
    sdef: 75,
    spe: 55,
  },
    signature : move.hyperDrill,
    lore: ``,
}

pkmn.dududunsparce = {
  type: ["normal"],
  bst: {
    hp: 125,
    atk: 100,
    def: 80,
    satk: 85,
    sdef: 75,
    spe: 55,
  },
    signature : move.hyperDrill,
    lore: ``,
}

// 207 Gligar → Gliscor
pkmn.gligar = {
    type: ["ground","flying"],
    bst: {
        hp: 65,
        atk: 75,
        def: 105,
        satk: 35,
        sdef: 65,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.gliscor, level: evolutionLevel3 } } },
    hiddenAbility: ability.toxicBoost,
    lore: `Ele plana pelo ar usando suas asas em forma de morcego, agarrando-se à cabeça de vítimas desavisadas para picá-las com sua cauda.`,
}

pkmn.gliscor = {
    type: ["ground","flying"],
    bst: {
        hp: 75,
        atk: 95,
        def: 125,
        satk: 45,
        sdef: 75,
        spe: 95,
    },
    hiddenAbility: ability.toxicBoost,
    lore: ``,
}

// 208 Steelix

// 209 Snubbull → Granbull
pkmn.snubbull = {
    type: ["fairy"],
    bst: {
        hp: 60,
        atk: 80,
        def: 50,
        satk: 40,
        sdef: 40,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.granbull, level: evolutionLevel1 } } },
    hiddenAbility: ability.pixiePelt,
    lore: `Apesar de sua expressão assustadora, é um Pokémon extremamente afetuoso que adora ficar perto de seu treinador o tempo todo.`,
}

pkmn.granbull = {
    type: ["fairy"],
    bst: {
        hp: 90,
        atk: 120,
        def: 75,
        satk: 60,
        sdef: 60,
        spe: 45,
    },
    hiddenAbility: ability.pixiePelt,
    lore: `Suas presas grandes cresceram tanto que atrapalham sua mordida, então ele prefere usar a cabeça para atacar de frente.`,
}

// 211 Qwilfish / Hisuian Qwilfish → Overqwil
pkmn.qwilfish = {
    type: ["water","poison"],
    bst: {
        hp: 65,
        atk: 95,
        def: 75,
        satk: 55,
        sdef: 55,
        spe: 85,
    },
    hiddenAbility: ability.intimidate,
    signature : move.barbBarrage,
    lore: `Ele engole água para inflar o próprio corpo, disparando os espinhos em suas costas como projéteis venenosos contra predadores.`,
}

pkmn.hisuianQwilfish = {
    type: ["dark", "poison"],
    bst: {
        hp: 65,
        atk: 95,
        def: 85,
        satk: 55,
        sdef: 55,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.overqwil, level: evolutionLevel2 } } },
    signature : move.barbBarrage,
    hiddenAbility: ability.merciless,
    lore: ``,
}

pkmn.overqwil = {
    type: ["dark", "poison"],
    bst: {
        hp: 85,
        atk: 115,
        def: 95,
        satk: 65,
        sdef: 65,
        spe: 85,
    },
    signature : move.barbBarrage,
    hiddenAbility: ability.merciless,
    lore: ``,
}

// 212 Scizor

// 213 Shuckle
pkmn.shuckle = {
    type: ["bug","rock"],
    bst: {
        hp: 20,
        atk: 10,
        def: 230,
        satk: 10,
        sdef: 230,
        spe: 5,
    },
    hiddenAbility: ability.contrary,
    eggMove : move.batonPass,
    lore: `Ele guarda frutas dentro de sua concha, onde elas se decompõem lentamente em um suco espesso e ácido usado como alimento.`,
}

// 214 Heracross
pkmn.heracross = {
    type: ["bug","fighting"],
    bst: {
        hp: 80,
        atk: 125,
        def: 75,
        satk: 40,
        sdef: 95,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaHeracross, item: item.heracronite } } },
    hiddenAbility: ability.skillLink,
    signature : move.megahorn,
    lore: `Seu chifre poderoso pode arremessar objetos muito mais pesados que seu próprio corpo, usado tanto para lutar quanto para se alimentar de seiva de árvores.`,
}

pkmn.megaHeracross = {
    type: ["bug","fighting"],
    bst: {
        hp: 80*1.2,
        atk: 185*1.2,
        def: 115*1.2,
        satk: 40*1.2,
        sdef: 105*1.2,
        spe: 75*1.2,
    },
    hiddenAbility: ability.skillLink,
    signature : move.megahorn,
    lore: `A energia da Mega Evolução sobrecarrega seu corpo, fazendo com que seus músculos se contraiam excessivamente. Ele sente um desconforto constante, o que o torna extremamente irritado e agressivo em batalha.`,
}

// 215 Sneasel → Weavile / Hisuian Sneasel → Sneasler
pkmn.sneasel = {
    type: ["dark","ice"],
    bst: {
        hp: 55,
        atk: 95,
        def: 55,
        satk: 35,
        sdef: 75,
        spe: 115,
    },
    evolve: function() { return { 1: { pkmn: pkmn.weavile, item: item.duskStone} } },
    hiddenAbility: ability.sharpness,
    signature : move.tripleAxel,
    lore: `Suas garras afiadas são usadas para roubar ovos de ninhos de Pokémon Pássaro antes que os pais percebam.`,
}

pkmn.hisuianSneasel = {
    type: ["fighting", "poison"],
    bst: {
        hp: 55,
        atk: 95,
        def: 55,
        satk: 35,
        sdef: 75,
        spe: 115,
    },
    evolve: function() { return { 1: { pkmn: pkmn.hisuianSneasler, level: evolutionLevel2 } } },
    hiddenAbility: ability.merciless,
    lore: ``,
}

pkmn.weavile = {
    type: ["dark","ice"],
    bst: {
        hp: 70,
        atk: 120,
        def: 65,
        satk: 45,
        sdef: 85,
        spe: 125,
    },
    hiddenAbility: ability.sharpness,
    signature : move.tripleAxel,
    lore: ``,
}

pkmn.hisuianSneasler = {
    rename: `sneasler`,
    type: ["fighting", "poison"],
    bst: {
        hp: 70,
        atk: 120,
        def: 65,
        satk: 45,
        sdef: 85,
        spe: 125,
    },
    hiddenAbility: ability.merciless,
    lore: ``,
}

// 216 Teddiursa → Ursaring → Ursaluna
pkmn.teddiursa = {
    type: ["normal"],
    bst: {
        hp: 60,
        atk: 80,
        def: 50,
        satk: 50,
        sdef: 50,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.ursaring, level: evolutionLevel2 } } },
    hiddenAbility: ability.guts,
    signature : move.headlongRush,
    lore: `Ele lambe o mel que gruda em suas patas dianteiras, e a mistura com sua própria saliva cria um cheiro doce único de cada indivíduo.`,
}

pkmn.ursaring = {
    type: ["normal"],
    bst: {
        hp: 90,
        atk: 130,
        def: 75,
        satk: 75,
        sdef: 75,
        spe: 55,
    },
    hiddenAbility: ability.guts,
    signature : move.headlongRush,
    lore: `Suas garras afiadas conseguem abrir troncos de árvores em busca de insetos, e seu olfato apurado o leva direto a fontes de mel.`,
}

pkmn.ursaluna = {
    type: ["ground", "normal"],
    bst: {
        hp: 130,
        atk: 140,
        def: 105,
        satk: 45,
        sdef: 80,
        spe: 50,
    },
    lore: ``,
}

pkmn.ursalunaBloodmoon = {
    type: ["ground", "normal"],
    bst: {
        hp: 113,
        atk: 70,
        def: 120,
        satk: 135,
        sdef: 65,
        spe: 52,
    },
    lore: ``,
}

// 218 Slugma → Magcargo
pkmn.slugma = {
    type: ["fire"],
    bst: {
        hp: 40,
        atk: 40,
        def: 40,
        satk: 70,
        sdef: 40,
        spe: 20,
    },
    evolve: function() { return { 1: { pkmn: pkmn.magcargo, level: evolutionLevel2 } } },
    hiddenAbility: ability.flameBody,
    lore: `Seu corpo é feito de magma fundido. Se ele parar de se mover, sua superfície esfria e endurece, e ele não consegue mais se locomover.`,
}

pkmn.magcargo = {
    type: ["fire","rock"],
    bst: {
        hp: 60,
        atk: 50,
        def: 120,
        satk: 90,
        sdef: 80,
        spe: 30,
    },
    hiddenAbility: ability.flameBody,
    lore: `Sua concha é feita de magma resfriado, tão frágil que uma leve pancada pode rachá-la, revelando o calor intenso por dentro.`,
}

// 220 Swinub → Piloswine → Mamoswine
pkmn.swinub = {
    type: ["ice","ground"],
    bst: {
        hp: 50,
        atk: 50,
        def: 40,
        satk: 30,
        sdef: 30,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.piloswine, level: evolutionLevel2 } } },
    hiddenAbility: ability.thickFat,
    eggMove : move.highHorsepower,
    lore: `Ele usa o focinho para farejar comida escondida sob a neve, embora seu olfato às vezes o leve direto a lixo em vez de comida.`,
}

pkmn.piloswine = {
    type: ["ice","ground"],
    bst: {
        hp: 100,
        atk: 100,
        def: 80,
        satk: 60,
        sdef: 60,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.mamoswine, item: item.iceStone } } },
    hiddenAbility: ability.thickFat,
    eggMove : move.highHorsepower,
    lore: `Sua pelagem grossa o protege de temperaturas extremas, e ele pode farejar comida enterrada sob metros de neve com grande precisão.`,
}

pkmn.mamoswine = {
    type: ["ice","ground"],
    bst: {
        hp: 110,
        atk: 130,
        def: 80,
        satk: 70,
        sdef: 60,
        spe: 80,
    },
    hiddenAbility: ability.thickFat,
    eggMove : move.highHorsepower,
    lore: ``,
}

// 222 Corsola / Galarian Corsola → Cursola
pkmn.corsola = {
    type: ["water","rock"],
    bst: {
        hp: 55,
        atk: 55,
        def: 85,
        satk: 65,
        sdef: 85,
        spe: 35,
    },
    hiddenAbility: ability.costar,
    lore: `Seus galhos coralinos crescem continuamente e se regeneram rapidamente se forem quebrados, florescendo em águas quentes e limpas.`,
}

pkmn.galarianCorsola = {
    type: ["ghost"],
    bst: {
        hp: 60,
        atk: 55,
        def: 100,
        satk: 65,
        sdef: 100,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.cursola, level: evolutionLevel2 } } },
    lore: ``,
}

pkmn.cursola = {
  type: ["ghost"],
  bst: {
    hp: 60,
    atk: 95,
    def: 50,
    satk: 145,
    sdef: 130,
    spe: 30,
  },
    lore: ``,
}

// 223 Remoraid → Octillery
pkmn.remoraid = {
    type: ["water"],
    bst: {
        hp: 35,
        atk: 65,
        def: 35,
        satk: 65,
        sdef: 35,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.octillery, level: evolutionLevel2 } } },
    hiddenAbility: ability.moody,
    lore: `Ele dispara jatos de tinta com precisão impressionante, mirando presas a vários metros de distância usando sua boca em forma de bico.`,
}

pkmn.octillery = {
    type: ["water"],
    bst: {
        hp: 75,
        atk: 105,
        def: 75,
        satk: 105,
        sdef: 75,
        spe: 45,
    },
    hiddenAbility: ability.moody,
    lore: `Ele se esconde dentro de conchas vazias ou buracos em rochas, disparando tinta contra qualquer coisa que se aproxime demais.`,
}

// 225 Delibird
pkmn.delibird = {
    type: ["ice","flying"],
    bst: {
        hp: 45,
        atk: 55,
        def: 45,
        satk: 65,
        sdef: 45,
        spe: 75,
    },
    lore: `Ele carrega comida em sua cauda peluda, generosamente entregando parte de seus suprimentos para viajantes perdidos nas montanhas nevadas.`,
}

// 226 Mantyke → Mantine
pkmn.mantyke = {
    type: ["water","flying"],
    bst: {
        hp: 45,
        atk: 20,
        def: 50,
        satk: 60,
        sdef: 120,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.mantine, item: item.waterStone } } },
    hiddenAbility: ability.waterAbsorb,
    lore: ``,
}

pkmn.mantine = {
    type: ["water","flying"],
    bst: {
        hp: 85,
        atk: 40,
        def: 70,
        satk: 80,
        sdef: 140,
        spe: 70,
    },
    hiddenAbility: ability.waterAbsorb,
    lore: `Ele nada graciosamente pelos oceanos, e pequenos Remoraid costumam nadar ao seu redor, alimentando-se dos restos de plâncton que escapam.`,
}

// 227 Skarmory
pkmn.skarmory = {
    type: ["steel","flying"],
    bst: {
        hp: 65,
        atk: 80,
        def: 140,
        satk: 40,
        sdef: 70,
        spe: 70,
    },
    lore: `Seu corpo é coberto por um exoesqueleto de aço afiado como lâmina, capaz de cortar árvores inteiras com um único bater de asas.`,
}

//Sem pedra
pkmn.megaSkarmory = {
    type: ["steel","flying"],
    bst: {
        hp: 65*1.2,
        atk: 140*1.2,
        def: 110*1.2,
        satk: 40*1.2,
        sdef: 100*1.2,
        spe: 110*1.2,
    },
    hiddenAbility: ability.wonderGuard,
    signature : move.gearUp,
    lore: `Ele voa mais rápido que a velocidade do som. Depois de criar ondas de choque para arremessar seus inimigos para longe, finaliza-os com suas garras afiadas.`,
}

// 228 Houndour → Houndoom
pkmn.houndour = {
    type: ["dark","fire"],
    bst: {
        hp: 45,
        atk: 60,
        def: 30,
        satk: 80,
        sdef: 50,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.houndoom, level: evolutionLevel2 } } },
    hiddenAbility: ability.solarPower,
    eggMove: move.howl,
    lore: `Eles caçam em matilhas coordenadas, comunicando-se através de latidos que soam quase como uma linguagem complexa entre si.`,
}

pkmn.houndoom = {
    type: ["dark","fire"],
    bst: {
        hp: 75,
        atk: 90,
        def: 50,
        satk: 110,
        sdef: 80,
        spe: 95,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaHoundoom, item: item.houndoominite } } },
    hiddenAbility: ability.solarPower,
    eggMove: move.howl,
    lore: `O formato de sua cauda lembra a ponta de uma lança, e diz-se que quem vê a Lua através de seus chifres retorcidos terá azar.`,
}

pkmn.megaHoundoom = {
    type: ["dark","fire"],
    bst: {
        hp: 75*1.2,
        atk: 90*1.2,
        def: 90*1.2,
        satk: 140*1.2,
        sdef: 90*1.2,
        spe: 115*1.2,
    },
    hiddenAbility: ability.solarPower,
    eggMove: move.howl,
    lore: `Sua energia aumenta drasticamente devido à Mega Evolução, fazendo com que suas garras e rabo derretam devido ao calor intenso. As garras e partes da cauda que derreteram emitem uma fumaça tóxica que, ao ser inalada, causa queimaduras permanentes.`,
}

// 230 Kingdra

// 231 Phanpy → Donphan
pkmn.phanpy = {
    type: ["ground"],
    bst: {
        hp: 90,
        atk: 60,
        def: 60,
        satk: 40,
        sdef: 40,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.donphan, level: evolutionLevel2 } } },
    lore: `Ele usa a tromba para carregar água e borrifar sobre si mesmo, e adora cavar buracos ao longo das margens de rios.`,
}

pkmn.donphan = {
    type: ["ground"],
    bst: {
        hp: 90,
        atk: 120,
        def: 120,
        satk: 60,
        sdef: 60,
        spe: 50,
    },
    lore: `Ele se enrola em uma bola e rola em alta velocidade para atacar, capaz de derrubar árvores grandes com o impacto.`,
}

// 233 Porygon2

// 234 Stantler → Wyrdeer
pkmn.stantler = {
    type: ["normal"],
    bst: {
        hp: 73,
        atk: 95,
        def: 62,
        satk: 85,
        sdef: 65,
        spe: 85,
    },
    signature : move.psyshieldBash,
    lore: `Seus chifres imponentes têm o poder de distorcer o espaço ao redor, criando ilusões que confundem tanto predadores quanto presas.`,
}

pkmn.wyrdeer = {
    type: ["normal", "psychic"],
    bst: {
        hp: 103,
        atk: 105,
        def: 72,
        satk: 105,
        sdef: 75,
        spe: 65,
    },
    signature : move.psyshieldBash,
    hiddenAbility: ability.pixiePelt,
    lore: ``,
}

// 235 Smeargle
pkmn.smeargle = {
    type: ["normal"],
    bst: {
        hp: 55,
        atk: 20,
        def: 35,
        satk: 20,
        sdef: 45,
        spe: 75,
    },
    hiddenAbility: ability.moody,
    signature : move.sketch,
    lore: `O fluido que secreta da ponta da cauda muda de composição a cada vez, permitindo que ele pinte marcas territoriais com cores únicas.`,
}

// 236 Tyrogue
// 237 Hitmontop
// 238 Smoochum
// 239 Elekid
// 240 Magby

// 241 Miltank
pkmn.miltank = {
    type: ["normal"],
    bst: {
        hp: 95,
        atk: 80,
        def: 105,
        satk: 40,
        sdef: 70,
        spe: 100,
    },
    hiddenAbility: ability.stamina,
    lore: `Seu leite nutritivo é uma bebida popular entre pessoas de todas as idades, e ela precisa ser ordenhada diariamente para se manter saudável.`,
}

// 242 Blissey

// Lendário
// 243 Raikou
pkmn.raikou = {
    type: ["electric"],
    bst: {
        hp: 90*1.3,
        atk: 85*1.3,
        def: 75*1.3,
        satk: 115*1.3,
        sdef: 100*1.3,
        spe: 115*1.3,
    },
    signature: move.auraWheel,
    hiddenAbility: ability.moody,
    lore: `Raikou personifica a velocidade do relâmpago. Os rugidos deste Pokémon enviam ondas de choque que fazem o ar estremecer e sacodem o chão como se raios tivessem acabado de cair.`,
}

// Lendário
// 244 Entei
pkmn.entei = {
    type: ["fire"],
    bst: {
        hp: 115*1.3,
        atk: 115*1.3,
        def: 85*1.3,
        satk: 90*1.3,
        sdef: 75*1.3,
        spe: 100*1.3,
    },
    signature: move.pyroBall,
    hiddenAbility: ability.hugePower,
    lore: `Entei personifica a paixão do magma. Acredita-se que este Pokémon tenha nascido durante a erupção de um vulcão. Ele lança enormes explosões de fogo que consomem completamente tudo o que tocam.`,
}

// Lendário
// 245 Suicune
pkmn.suicune = {
    type: ["water"],
    bst: {
        hp: 100*1.3,
        atk: 75*1.3,
        def: 115*1.3,
        satk: 90*1.3,
        sdef: 115*1.3,
        spe: 85*1.3,
    },
    signature: move.aquaStep,
    hiddenAbility: ability.parentalBond,
    lore: `Suicune personifica a compaixão de uma nascente de água pura. Ele percorre a terra com graciosidade. Este Pokémon tem o poder de purificar água contaminada.`,
}

// 246 Larvitar → Pupitar → Tyranitar
pkmn.larvitar = {
    type: ["rock","ground"],
    bst: {
        hp: 50,
        atk: 64,
        def: 50,
        satk: 45,
        sdef: 50,
        spe: 41,
    },
    evolve: function() { return { 1: { pkmn: pkmn.pupitar, level: evolutionLevel2 } } },
    hiddenAbility: ability.sandStream,
    lore: `Ele nasce das profundezas da terra, e se alimenta de terra o suficiente para formar montanhas ao longo de décadas de crescimento.`,
}

pkmn.pupitar = {
    type: ["rock","ground"],
    bst: {
        hp: 70,
        atk: 84,
        def: 70,
        satk: 65,
        sdef: 70,
        spe: 51,
    },
    evolve: function() { return { 1: { pkmn: pkmn.tyranitar, level: evolutionLevel3 } } },
    hiddenAbility: ability.sandStream,
    lore: `Dentro de sua carapaça extremamente dura, um processo intenso de mudança física ocorre, liberando energia suficiente para explodir uma montanha.`,
}

pkmn.tyranitar = {
    type: ["rock","dark"],
    bst: {
        hp: 100,
        atk: 134,
        def: 110,
        satk: 95,
        sdef: 100,
        spe: 61,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaTyranitar, item: item.tyranitarite } } },
    hiddenAbility: ability.sandStream,
    lore: `Tão poderoso que é capaz de causar terremotos apenas se movendo, ele destrói montanhas e altera paisagens inteiras sem esforço.`,
}

pkmn.megaTyranitar = {
    type: ["rock","dark"],
    bst: {
        hp: 100*1.2,
        atk: 164*1.2,
        def: 150*1.2,
        satk: 95*1.2,
        sdef: 120*1.2,
        spe: 71*1.2,
    },
    hiddenAbility: ability.sandStream,
    signature : move.ruination,
    lore: `A energia da Mega Evolução forçou sua armadura a se romper. Ele ganhou um poder de destruição ainda maior, tornando-se uma força incontrolável da natureza que pode reduzir montanhas a escombros sem esforço.`,
}

// Lendário
// 249 Lugia
pkmn.lugia = {
    type: ["psychic","flying"],
    bst: {
        hp: 106*1.35,
        atk: 90*1.35,
        def: 130*1.35,
        satk: 90*1.35,
        sdef: 154*1.35,
        spe: 110*1.35,
    },
    signature: move.aeroblast,
    hiddenAbility: ability.hydrolate,
    lore: `As asas de Lugia possuem um poder devastador — um simples bater de asas pode destruir casas comuns. Por isso, este Pokémon escolhe viver longe da vista de todos, nas profundezas do mar.`,
}

// Lendário
// 250 Ho-oh
pkmn.hooh = {
    type: ["fire","flying"],
    bst: {
        hp: 106*1.35,
        atk: 130*1.35,
        def: 90*1.35,
        satk: 110*1.35,
        sdef: 154*1.35,
        spe: 90*1.35,
    },
    signature: move.sacredFire,
    hiddenAbility: ability.pyrolate,
    lore: `As penas de Ho-Oh brilham em sete cores diferentes dependendo do ângulo em que a luz as atinge. Dizem que essas penas trazem felicidade para aqueles que as carregam. Conta-se que este Pokémon vive ao pé de um arco-íris.`,
}

// Mítico
// 251 Celebi
pkmn.celebi = {
    type: ["psychic","grass"],
    bst: {
        hp: 100*1.5,
        atk: 100*1.5,
        def: 100*1.5,
        satk: 100*1.5,
        sdef: 100*1.5,
        spe: 100*1.5,
    },
    hiddenAbility: ability.grassySurge,
    lore: `Nas lendas, diz-se que ele apenas aparece em tempos de paz e sua presença é um sinal de que o futuro da humanidade está assegurado.`
}

// 252 Treecko → Grovyle → Sceptile
pkmn.treecko = {
    type: ["grass"],
    bst: {
        hp: 40,
        atk: 45,
        def: 35,
        satk: 65,
        sdef: 55,
        spe: 70,
    },
    evolve: function() { return { 1: { pkmn: pkmn.grovyle, level: evolutionLevel1 } } },
    hiddenAbility: ability.tintedLens,
    eggMove : move.dragonDarts,
    lore: `Ele fica frio ao toque e prefere lugares sombreados e úmidos na floresta. Almofadas especiais em seus pés permitem que ele escale superfícies verticais sem esforço.`,
}

pkmn.grovyle = {
    type: ["grass"],
    bst: {
        hp: 50,
        atk: 65,
        def: 45,
        satk: 85,
        sdef: 65,
        spe: 95,
    },
    evolve: function() { return { 1: { pkmn: pkmn.sceptile, level: evolutionLevel2 } } },
    hiddenAbility: ability.tintedLens,
    eggMove : move.dragonDarts,
    lore: `Ele é ágil, movendo-se pelas árvores e vinhas da floresta com uma agilidade que nenhum caçador consegue acompanhar.`,
}

pkmn.sceptile = {
    type: ["grass"],
    bst: {
        hp: 70,
        atk: 85,
        def: 65,
        satk: 105,
        sdef: 85,
        spe: 120,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaSceptile, item: item.sceptilite } } },
    hiddenAbility: ability.tintedLens,
    eggMove : move.dragonDarts,
    lore: `As folhas afiadas em seus braços podem cortar árvores grossas. Nas profundezas da floresta, ele é o Pokémon mais rápido de todos.`,
}

pkmn.megaSceptile = {
    type: ["grass","dragon"],
    bst: {
        hp: 80*1.2,
        atk: 110*1.2,
        def: 85*1.2,
        satk: 155*1.2,
        sdef: 85*1.2,
        spe: 155*1.2,
    },
    hiddenAbility: ability.tintedLens,
    eggMove : move.dragonDarts,
    signature : move.seedFlare,
    lore: `A energia da Mega Evolução faz com que parte de sua cauda cresça de forma explosiva, permitindo que ele a lance como um projétil contra seus inimigos. Ele é capaz de regenerar a cauda imediatamente após o disparo e possui uma agilidade ainda mais apurada para desviar de ataques.`,
}

// 255 Torchic → Combusken → Blaziken
pkmn.torchic = {
    type: ["fire"],
    bst: {
        hp: 45,
        atk: 60,
        def: 40,
        satk: 70,
        sdef: 50,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.combusken, level: evolutionLevel1 } } },
    signature : move.blazeKick,
    hiddenAbility: ability.speedBoost,
    lore: `Uma bolsa de fogo em seu interior mantém seu corpo aquecido. Quando abraçado, ele parece levemente mais quente que o normal.`,
}

pkmn.combusken = {
    type: ["fire","fighting"],
    bst: {
        hp: 60,
        atk: 85,
        def: 60,
        satk: 85,
        sdef: 60,
        spe: 55,
    },
    evolve: function() { return { 1: { pkmn: pkmn.blaziken, level: evolutionLevel2 } } },
    signature : move.blazeKick,
    hiddenAbility: ability.speedBoost,
    lore: `Ele fica mais forte após cada batalha, e o fogo que ruge em sua garganta cresce em intensidade conforme sua experiência aumenta.`,
}

pkmn.blaziken = {
    type: ["fire","fighting"],
    bst: {
        hp: 80,
        atk: 120,
        def: 70,
        satk: 110,
        sdef: 70,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaBlaziken, item: item.blazikenite } } },
    signature : move.blazeKick,
    hiddenAbility: ability.speedBoost,
    lore: `Seus poderosos chutes flamejantes podem derrubar uma torre de concreto de uma só vez. Ele guerreia sem hesitação.`,
}

pkmn.megaBlaziken = {
    type: ["fire","fighting"],
    bst: {
        hp: 80*1.2,
        atk: 160*1.2,
        def: 80*1.2,
        satk: 130*1.2,
        sdef: 80*1.2,
        spe: 100*1.2,
    },
    signature : move.blazeKick,
    hiddenAbility: ability.speedBoost,
    lore: `A energia da Mega Evolução estimulou seus músculos das pernas, conferindo-lhe uma força de salto incomparável. Ele luta utilizando chamas que exalam de seus punhos e pés, e quanto mais intensa a batalha, mais poderosas essas chamas se tornam.`,
}

// 258 Mudkip → Marshtomp → Swampert
pkmn.mudkip = {
    type: ["water"],
    bst: {
        hp: 50,
        atk: 70,
        def: 50,
        satk: 50,
        sdef: 50,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.marshtomp, level: evolutionLevel1 } } },
    hiddenAbility: ability.swiftSwim,
    eggMove : move.crabhammer,
    lore: `As nadadeiras em sua cabeça funcionam como um radar, detectando movimentos de água e ar ao seu redor, mesmo em completa escuridão.`,
}

pkmn.marshtomp = {
    type: ["water","ground"],
    bst: {
        hp: 80,
        atk: 85,
        def: 70,
        satk: 60,
        sdef: 70,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.swampert, level: evolutionLevel2 } } },
    hiddenAbility: ability.swiftSwim,
    eggMove : move.crabhammer,
    lore: `Seu corpo é envolto por uma camada de lama que o protege, e ele se move muito mais rápido em pântanos do que em terreno seco.`,
}

pkmn.swampert = {
    type: ["water","ground"],
    bst: {
        hp: 100,
        atk: 110,
        def: 90,
        satk: 85,
        sdef: 90,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaSwampert, item: item.swampertite } } },
    hiddenAbility: ability.swiftSwim,
    eggMove : move.crabhammer,
    lore: `Seus braços musculosos permitem que ele avance contra correntes fortes, e é conhecido por prever tempestades antes que elas cheguem.`,
}

pkmn.megaSwampert = {
    type: ["water","ground"],
    bst: {
        hp: 100*1.2,
        atk: 150*1.2,
        def: 110,
        satk: 95*1.2,
        sdef: 110*1.2,
        spe: 70*1.2,
    },
    hiddenAbility: ability.swiftSwim,
    eggMove : move.crabhammer,
    signature : move.clamp,
    lore: `A energia da Mega Evolução fortalece ainda mais seus músculos, conferindo-lhe uma força física avassaladora. Ele é capaz de nadar em velocidades extraordinárias, movendo-se com tanta destreza na água quanto na terra, tornando-se um predador implacável em ambos os ambientes.`,
}

// 261 Poochyena → Mightyena
pkmn.poochyena = {
    type: ["dark"],
    bst: {
        hp: 35,
        atk: 55,
        def: 35,
        satk: 30,
        sdef: 30,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.mightyena, level: evolutionLevel1 } } },
    hiddenAbility: ability.moxie,
    signature : move.howl,
    lore: `Ele persegue presas incansavelmente até que estejam completamente exaustas, um instinto de caça herdado de seus ancestrais selvagens.`,
}

pkmn.mightyena = {
    type: ["dark"],
    bst: {
        hp: 70,
        atk: 90,
        def: 70,
        satk: 60,
        sdef: 60,
        spe: 70,
    },
    hiddenAbility: ability.moxie,
    signature : move.howl,
    lore: `Eles se movem e caçam em matilhas coordenadas, obedecendo apenas a treinadores que provarem ser mais fortes e determinados que eles.`,
}

// 263 Zigzagoon → Linoone / Galarian Zigzagoon → Galarian Linoone → Obstagoon
pkmn.zigzagoon = {
    type: ["normal"],
    bst: {
        hp: 38,
        atk: 30,
        def: 41,
        satk: 30,
        sdef: 41,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.linoone, level: evolutionLevel1 } } },
    lore: `Ele se move em um padrão de zigue-zague inconstante, tornando quase impossível prever para onde irá em seguida.`,
}

pkmn.galarianZigzagoon = {
    type: ["dark", "normal"],
    bst: {
        hp: 38,
        atk: 30,
        def: 41,
        satk: 30,
        sdef: 41,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.galarianLinoone, level: evolutionLevel1 } } },
    hiddenAbility: ability.blackPelt,
}

pkmn.linoone = {
    type: ["normal"],
    bst: {
        hp: 78,
        atk: 70,
        def: 61,
        satk: 50,
        sdef: 61,
        spe: 100,
    },
    lore: `Ele consegue correr em linha reta a mais de 100 quilômetros por hora, mas tem extrema dificuldade em fazer curvas.`,
}

pkmn.galarianLinoone = {
    type: ["dark", "normal"],
    bst: {
        hp: 78,
        atk: 70,
        def: 61,
        satk: 50,
        sdef: 61,
        spe: 100,
    },
    evolve: function() { return { 1: { pkmn: pkmn.obstagoon, level: evolutionLevel3 } } },
    hiddenAbility: ability.blackPelt,
}

pkmn.obstagoon = {
  type: ["dark","normal"],
  bst: {
    hp: 93,
    atk: 90,
    def: 101,
    satk: 60,
    sdef: 81,
    spe: 95,
  },
    hiddenAbility: ability.guts,
}

// 265 Wurmple → Silcoon / Cascoon → Beautifly / Dustox
pkmn.wurmple = {
    type: ["bug"],
    bst: {
        hp: 45,
        atk: 45,
        def: 35,
        satk: 20,
        sdef: 30,
        spe: 20,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.silcoon, item: item.shinyStone }, 
            2: { pkmn: pkmn.cascoon, item: item.sunStone } 
        } 
    },
    hiddenAbility: ability.rivalry,
    lore: `Suas antenas conseguem detectar minerais no solo e, dependendo do ambiente onde vive, evolui de formas diferentes.`,
}

pkmn.silcoon = {
    type: ["bug"],
    bst: {
        hp: 50,
        atk: 35,
        def: 55,
        satk: 25,
        sdef: 25,
        spe: 15,
    },
    evolve: function() { return { 1: { pkmn: pkmn.beautifly, level: evolutionLevel1 } } },
    hiddenAbility: ability.rivalry,
    lore: `Ele se pendura silenciosamente de um galho, esperando pacientemente enquanto sua estrutura interna se prepara para a evolução final.`,
}

pkmn.beautifly = {
    type: ["bug","flying"],
    bst: {
        hp: 60,
        atk: 70,
        def: 50,
        satk: 100,
        sdef: 50,
        spe: 65,
    },
    hiddenAbility: ability.galeWings,
    lore: `Sua longa probóscide suga o néctar de flores, e suas asas coloridas com padrões únicos são admiradas em todo o mundo.`,
}

pkmn.cascoon = {
    type: ["bug"],
    bst: {
        hp: 50,
        atk: 35,
        def: 55,
        satk: 25,
        sdef: 25,
        spe: 15,
    },
    evolve: function() { return { 1: { pkmn: pkmn.dustox, level: evolutionLevel1 } } },
    hiddenAbility: ability.moltShed,
    lore: `Ele permanece completamente imóvel dentro de seu casulo áspero, aguardando o momento certo para emergir em sua forma adulta.`,
}

pkmn.dustox = {
    type: ["bug","poison"],
    bst: {
        hp: 80,
        atk: 50,
        def: 80,
        satk: 80,
        sdef: 90,
        spe: 65,
    },
    hiddenAbility: ability.moltShed,
    lore: `As escamas venenosas em suas asas espalham um pó tóxico sempre que ele bate as asas, mantendo predadores à distância.`,
}

// 270 Lotad → Lombre → Ludicolo
pkmn.lotad = {
    type: ["water","grass"],
    bst: {
        hp: 40,
        atk: 30,
        def: 30,
        satk: 40,
        sdef: 50,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.lombre, level: evolutionLevel1 } } },
    hiddenAbility: ability.drizzle,
    eggMove : move.aquaStep,
    lore: `A folha em sua cabeça começa a murchar se ficar longe da água por muito tempo, então ele busca lugares úmidos para viver.`,
}

pkmn.lombre = {
    type: ["water","grass"],
    bst: {
        hp: 60,
        atk: 50,
        def: 50,
        satk: 60,
        sdef: 70,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.ludicolo, item: item.waterStone } } },
    hiddenAbility: ability.drizzle,
    eggMove : move.aquaStep,
    lore: `Ele se alimenta de algas no fundo de lagos, e prefere viver em água fria a temperatura ambiente.`,
}

pkmn.ludicolo = {
    type: ["water","grass"],
    bst: {
        hp: 80,
        atk: 70,
        def: 70,
        satk: 90,
        sdef: 100,
        spe: 70,
    },
    hiddenAbility: ability.drizzle,
    eggMove : move.aquaStep,
    lore: `Ao ouvir música festiva ou tambores, ele começa a dançar de forma incontrolável, algo que parece acontecer de forma involuntária.`,
}

// 273 Seedot → Nuzleaf → Shiftry
pkmn.seedot = {
    type: ["grass"],
    bst: {
        hp: 40,
        atk: 40,
        def: 50,
        satk: 30,
        sdef: 30,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.nuzleaf, level: evolutionLevel1 } } },
    hiddenAbility: ability.windRider,
    lore: `Ele se pendura de galhos parecendo uma noz comum, e cai no chão quando maduro, rolando para encontrar solo fértil.`,
}

pkmn.nuzleaf = {
    type: ["grass","dark"],
    bst: {
        hp: 70,
        atk: 70,
        def: 40,
        satk: 60,
        sdef: 40,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.shiftry, item: item.leafStone } } },
    hiddenAbility: ability.windRider,
    lore: `Ele vive nas profundezas da floresta e assusta caminhantes tocando uma melodia estranha e assustadora com a folha em seu nariz.`,
}

pkmn.shiftry = {
    type: ["grass","dark"],
    bst: {
        hp: 90,
        atk: 100,
        def: 60,
        satk: 90,
        sdef: 60,
        spe: 80,
    },
    hiddenAbility: ability.windRider,
    lore: `Diz-se que ele pode invocar rajadas de vento poderosas apenas abrindo seus leques feitos de folhas, capazes de derrubar uma casa.`,
}

// 276 Taillow → Swellow
pkmn.taillow = {
    type: ["normal","flying"],
    bst: {
        hp: 40,
        atk: 55,
        def: 30,
        satk: 30,
        sdef: 30,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.swellow, level: evolutionLevel1 } } },
    hiddenAbility: ability.guts,
    lore: `Apesar de seu pequeno tamanho, ele é corajoso o suficiente para enfrentar inimigos muito maiores sem hesitar.`,
}

pkmn.swellow = {
    type: ["normal","flying"],
    bst: {
        hp: 60,
        atk: 85,
        def: 60,
        satk: 50,
        sdef: 50,
        spe: 125,
    },
    hiddenAbility: ability.guts,
    lore: `Ele voa graciosamente pelo céu em busca de presas, e retorna sempre ao mesmo ninho, não importa a distância percorrida.`,
}

// 278 Wingull → Pelipper
pkmn.wingull = {
    type: ["water","flying"],
    bst: {
        hp: 40,
        atk: 30,
        def: 30,
        satk: 55,
        sdef: 30,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.pelipper, level: evolutionLevel2 } } },
    hiddenAbility: ability.drizzle,
    lore: `Ele plana sobre correntes de ar marítimo usando suas asas rígidas, e pousa na superfície da água para pescar.`,
}

pkmn.pelipper = {
    type: ["water","flying"],
    bst: {
        hp: 60,
        atk: 50,
        def: 100,
        satk: 85,
        sdef: 70,
        spe: 65,
    },
    hiddenAbility: ability.drizzle,
    lore: `Ele carrega ovos e até pequenos Pokémon dentro de seu grande bico, protegendo-os enquanto voa sobre o oceano.`,
}

// 280 Ralts → Kirlia → Gardevoir / Gallade
pkmn.ralts = {
    type: ["psychic","fairy"],
    bst: {
        hp: 28,
        atk: 25,
        def: 25,
        satk: 45,
        sdef: 35,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.kirlia, level: evolutionLevel1 } } },
    hiddenAbility: ability.pixilate,
    lore: `Ele se sente atraído por sentimentos positivos, e se aproxima de pessoas que estão felizes ou apaixonadas.`,
}

pkmn.kirlia = {
    type: ["psychic","fairy"],
    bst: {
        hp: 38,
        atk: 35,
        def: 35,
        satk: 65,
        sdef: 55,
        spe: 50,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.gardevoir, level: evolutionLevel2 },
            2: { pkmn: pkmn.gallade, item: item.dawnStone }
        } 
    },
    hiddenAbility: ability.pixilate,
    lore: `Ela consegue perceber as emoções das pessoas ao seu redor, e quando seu treinador está feliz, ela dança de alegria.`,
}

pkmn.gardevoir = {
    type: ["psychic","fairy"],
    bst: {
        hp: 68,
        atk: 65,
        def: 65,
        satk: 125,
        sdef: 115,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaGardevoir, item: item.gardevoirite } } },
    hiddenAbility: ability.pixilate,
    lore: `Ela usa seus poderes psíquicos para proteger seu treinador, criando um campo de distorção capaz de desviar até ataques poderosos.`,
}

pkmn.megaGardevoir = {
    type: ["psychic","fairy"],
    bst: {
        hp: 78*1.2,
        atk: 85*1.2,
        def: 65*1.2,
        satk: 165*1.2,
        sdef: 155*1.2,
        spe: 110*1.2,
    },
    hiddenAbility: ability.pixilate,
    signature : move.lovelyKiss,
    lore: `Graças à energia da Mega Evolução, ela é capaz de liberar todo o seu poder psíquico. Dizem que, quando ele abre totalmente o coração, é capaz de conjurar uma energia devastadora a partir de suas emoções.`,
}

pkmn.gallade = {
    type: ["psychic","fighting"],
    bst: {
        hp: 68,
        atk: 125,
        def: 65,
        satk: 65,
        sdef: 115,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaGallade, item: item.galladite } } },
    hiddenAbility: ability.supremeOverlord,
}

pkmn.megaGallade = {
    type: ["psychic","fighting"],
    bst: {
        hp: 78*1.2,
        atk: 165*1.2,
        def: 105*1.2,
        satk: 65*1.2,
        sdef: 115*1.2,
        spe: 110*1.2,
    },
    hiddenAbility: ability.supremeOverlord,
    signature : move.meteorAssault,
    lore: `A energia da Mega Evolução manifestou-se em uma habilidade de combate superior. Seus braços, agora capazes de se estender como lâminas, permitem que ele realize ataques rápidos e precisos. Ele é um mestre da esgrima que luta com uma elegância inigualável, antecipando os movimentos de seus oponentes com reflexos sobre-humanos.`,
}

// 283 Surskit → Masquerain
pkmn.surskit = {
    type: ["bug","water"],
    bst: {
        hp: 40,
        atk: 30,
        def: 32,
        satk: 50,
        sdef: 52,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.masquerain, level: evolutionLevel1 } } },
    hiddenAbility: ability.simple,
    lore: `Suas pernas secretam um óleo que permite que ele deslize sobre a água sem afundar, movendo-se suavemente na superfície de lagoas.`,
}

pkmn.masquerain = {
    type: ["bug","flying"],
    bst: {
        hp: 70,
        atk: 60,
        def: 62,
        satk: 80,
        sdef: 82,
        spe: 80,
    },
    hiddenAbility: ability.galeWings,
    lore: `As grandes antenas em sua cabeça se assemelham a olhos, usadas para intimidar predadores e afastar ameaças.`,
}

// 285 Shroomish → Breloom
pkmn.shroomish = {
    type: ["grass"],
    bst: {
        hp: 60,
        atk: 40,
        def: 60,
        satk: 40,
        sdef: 60,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.breloom, level: evolutionLevel1 } } },
    hiddenAbility: ability.colorSpore,
    lore: `Ele libera esporos venenosos de seu corpo quando se sente ameaçado, causando espirros violentos em quem os inala.`,
}

pkmn.breloom = {
    type: ["grass","fighting"],
    bst: {
        hp: 60,
        atk: 130,
        def: 80,
        satk: 60,
        sdef: 60,
        spe: 70,
    },
    hiddenAbility: ability.colorSpore,
    lore: `Seus punhos socam com a força de um golpe de boxe profissional, e seus esporos podem causar envenenamento severo.`,
}

// 287 Slakoth → Vigoroth → Slaking
pkmn.slakoth = {
    type: ["normal"],
    bst: {
        hp: 60,
        atk: 60,
        def: 60,
        satk: 35,
        sdef: 35,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.vigoroth, level: evolutionLevel1 } } },
    hiddenAbility: ability.sheerForce,
    lore: `Ele passa a maior parte do dia praticamente imóvel, movendo-se apenas o mínimo necessário para se alimentar.`,
}

pkmn.vigoroth = {
    type: ["normal"],
    bst: {
        hp: 80,
        atk: 80,
        def: 80,
        satk: 55,
        sdef: 55,
        spe: 90,
    },
    evolve: function() { return { 1: { pkmn: pkmn.slaking, level: evolutionLevel2 } } },
    hiddenAbility: ability.sheerForce,
    lore: `A energia constante fervendo em seu corpo o deixa incapaz de ficar parado, e ele precisa se mover continuamente para se sentir bem.`,
}

pkmn.slaking = {
    type: ["normal"],
    bst: {
        hp: 120,
        atk: 140,
        def: 100,
        satk: 95,
        sdef: 65,
        spe: 0,
    },
    hiddenAbility: ability.sheerForce,
    lore: `Considerado o Pokémon mais preguiçoso, ele só se move quando é absolutamente necessário, apesar de possuir força imensa.`,
}

// 290 Nincada → Ninjask / Shedinja
pkmn.nincada = {
    type: ["bug","ground"],
    bst: {
        hp: 31,
        atk: 45,
        def: 90,
        satk: 30,
        sdef: 30,
        spe: 40,
    },
    evolve: function() { 
        return { 1: { pkmn: pkmn.ninjask, level: evolutionLevel1 },
                 2: { pkmn: pkmn.shedinja, item: item.oddRock } }
    },
    hiddenAbility: ability.speedBoost,
    lore: `Ele vive debaixo da terra, sugando seiva das raízes de árvores através de suas garras afiadas, esperando pacientemente para evoluir.`,
}

pkmn.ninjask = {
    type: ["bug","flying"],
    bst: {
        hp: 61,
        atk: 90,
        def: 45,
        satk: 50,
        sdef: 50,
        spe: 160,
    },
    hiddenAbility: ability.speedBoost,
    lore: `Ele se move tão rápido que se torna praticamente invisível a olho nu, e seu zumbido agudo é ouvido antes mesmo de ser visto.`,
}

pkmn.shedinja = {
    type: ["bug","ghost"],
    bst: {
        hp: 1,
        atk: 90,
        def: 45,
        satk: 30,
        sdef: 30,
        spe: 40,
    },
    hiddenAbility: ability.wonderGuard,
    eggMove : move.shadowForce,
    lore: `Ele emerge da casca deixada para trás quando Nincada evolui, e diz-se que espreitar dentro de seu buraco nas costas rouba a alma de quem olhar.`,
}

// 293 Whismur → Loudred → Exploud
pkmn.whismur = {
    type: ["normal"],
    bst: {
        hp: 64,
        atk: 51,
        def: 23,
        satk: 51,
        sdef: 23,
        spe: 28,
    },
    evolve: function() { return { 1: { pkmn: pkmn.loudred, level: evolutionLevel1 } } },
    signature : move.boomburst,
    hiddenAbility: ability.cacophony,
    lore: `Ele começa a chorar baixinho quando assustado, mas o choro rapidamente aumenta até se tornar um grito ensurdecedor.`,
}

pkmn.loudred = {
    type: ["normal"],
    bst: {
        hp: 84,
        atk: 71,
        def: 43,
        satk: 71,
        sdef: 43,
        spe: 48,
    },
    evolve: function() { return { 1: { pkmn: pkmn.exploud, level: evolutionLevel3 } } },
    signature : move.boomburst,
    hiddenAbility: ability.cacophony,
    lore: `Ele grita através dos sacos de ar em seu corpo, produzindo um som tão alto que pode causar dor de cabeça em quem estiver por perto.`,
}

pkmn.exploud = {
    type: ["normal"],
    bst: {
        hp: 104,
        atk: 91,
        def: 63,
        satk: 91,
        sdef: 73,
        spe: 68,
    },
    signature : move.boomburst,
    hiddenAbility: ability.cacophony,
    lore: `Os tubos ao longo de seu corpo produzem sons variados quando o ar passa por eles, criando uma cacofonia capaz de ser ouvida a quilômetros.`,
}

// 296 Makuhita → Hariyama
pkmn.makuhita = {
    type: ["fighting"],
    bst: {
        hp: 72,
        atk: 60,
        def: 30,
        satk: 20,
        sdef: 30,
        spe: 25,
    },
    evolve: function() { return { 1: { pkmn: pkmn.hariyama, level: evolutionLevel2 } } },
    hiddenAbility: ability.noGuard,
    lore: `Ele se treina batendo repetidamente contra árvores e rochas, fortalecendo o corpo através de dor autoimposta constante.`,
}

pkmn.hariyama = {
    type: ["fighting"],
    bst: {
        hp: 144,
        atk: 120,
        def: 60,
        satk: 40,
        sdef: 60,
        spe: 50,
    },
    hiddenAbility: ability.noGuard,
    lore: `Seu tapa poderoso pode arremessar um caminhão para longe, e ele passa os dias treinando em cachoeiras para fortalecer o espírito.`,
}

// 298 Azurill

// 299 Nosepass → Probopass
pkmn.nosepass = {
    type: ["rock"],
    bst: {
        hp: 30,
        atk: 45,
        def: 135,
        satk: 45,
        sdef: 90,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.probopass, item: item.thunderStone } } },
    hiddenAbility: ability.sandyPelt,
    lore: `Sua bússola em forma de nariz sempre aponta para o norte magnético, e ele é usado por viajantes perdidos como guia.`,
}

pkmn.probopass = {
    type: ["rock","steel"],
    bst: {
        hp: 60,
        atk: 55,
        def: 145,
        satk: 75,
        sdef: 150,
        spe: 40,
    },
    hiddenAbility: ability.sandyPelt,
    lore: `Seu grande nariz magnético controla três pequenos satélites que orbitam ao redor de sua cabeça, auxiliando em ataques e defesa.`,
}

// 300 Skitty → Delcatty
pkmn.skitty = {
    type: ["normal"],
    bst: {
        hp: 50,
        atk: 45,
        def: 45,
        satk: 35,
        sdef: 35,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.delcatty, item: item.moonStone } } },
    hiddenAbility: ability.normalize,
    lore: `Ela adora perseguir qualquer coisa que gire ou se mova rapidamente, e sua cauda felpuda é usada para brincar com objetos pequenos.`,
}

pkmn.delcatty = {
    type: ["normal"],
    bst: {
        hp: 80,
        atk: 65,
        def: 65,
        satk: 55,
        sdef: 55,
        spe: 90,
    },
    hiddenAbility: ability.normalize,
    lore: `Ela nunca constrói um ninho fixo, preferindo dormir em qualquer lugar confortável que encontrar, mudando de local constantemente.`,
}

// 302 Sableye
pkmn.sableye = {
    type: ["dark","ghost"],
    bst: {
        hp: 50,
        atk: 75,
        def: 75,
        satk: 65,
        sdef: 65,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaSableye, item: item.sablenite } } },
    hiddenAbility: ability.prankster,
    eggMove : move.trickOrTreat,
    lore: `Ele vive em cavernas escuras, e suas gemas nos olhos brilham com uma luz própria que lhe permite enxergar mesmo na escuridão total.`,
}

pkmn.megaSableye = {
    type: ["dark","ghost"],
    bst: {
        hp: 50*1.2,
        atk: 85*1.2,
        def: 160*1.2,
        satk: 85*1.2,
        sdef: 160*1.2,
        spe: 20*1.2,
    },
    hiddenAbility: ability.prankster,
    eggMove : move.trickOrTreat,
    signature : move.darkestLariat,
    lore: `A energia da Mega Evolução fez com que a joia em seu peito crescesse de forma descomunal, tornando-se tão grande que o Pokémon não consegue mais carregar o peso. Ele a utiliza como um escudo impenetrável, protegendo-se de qualquer ataque enquanto observa seus inimigos com astúcia.`,
}

// 303 Mawile
pkmn.mawile = {
    type: ["steel","fairy"],
    bst: {
        hp: 50,
        atk: 85,
        def: 85,
        satk: 55,
        sdef: 55,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaMawile, item: item.mawilite } } },
    hiddenAbility: ability.hugePower,
    lore: `Suas mandíbulas em forma de chifres na cabeça são, na verdade, feitas de aço afiado, capazes de esmagar tudo o que mordem.`,
}

pkmn.megaMawile = {
    type: ["steel","fairy"],
    bst: {
        hp: 80*1.2,
        atk: 200*1.2,
        def: 125*1.2,
        satk: 60*1.2,
        sdef: 95*1.2,
        spe: 50*1.2,
    },
    hiddenAbility: ability.strongJaw,
    signature : move.shiftGear,
    lore: `As mandíbulas em sua cabeça aumentaram e se dividiram em duas. Elas são controladas independentemente, permitindo que o Pokémon morda o inimigo por dois ângulos diferentes simultaneamente.`,
}

// 304 Aron → Lairon → Aggron
pkmn.aron = {
    type: ["steel","rock"],
    bst: {
        hp: 50,
        atk: 70,
        def: 100,
        satk: 40,
        sdef: 40,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.lairon, level: evolutionLevel2 } } },
    hiddenAbility: ability.metalhead,
    eggMove : move.noRetreat,
    lore: `Sua carapaça de aço é tão resistente que ele consegue mastigar rochas e metal como se fossem alimento comum, digerindo os minerais.`,
}

pkmn.lairon = {
    type: ["steel","rock"],
    bst: {
        hp: 60,
        atk: 90,
        def: 140,
        satk: 50,
        sdef: 50,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.aggron, level: evolutionLevel3 } } },
    hiddenAbility: ability.metalhead,
    eggMove : move.noRetreat,
    lore: `Ele afia sua carapaça de ferro raspando-a contra grandes rochas, tornando-a ainda mais afiada e resistente com o tempo.`,
}

pkmn.aggron = {
    type: ["steel","rock"],
    bst: {
        hp: 70,
        atk: 110,
        def: 180,
        satk: 60,
        sdef: 60,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaAggron, item: item.aggronite } } },
    hiddenAbility: ability.metalhead,
    eggMove : move.noRetreat,
    lore: `Ele considera todo o seu território uma extensão de si mesmo, e ataca ferozmente qualquer coisa que perturbe as montanhas onde vive.`,
}

pkmn.megaAggron = {
    type: ["steel"],
    bst: {
        hp: 70*1.2,
        atk: 140*1.2,
        def: 230*1.2,
        satk: 60*1.2,
        sdef: 80*1.2,
        spe: 50*1.2,
    },
    hiddenAbility: ability.metalhead,
    eggMove : move.noRetreat,
    signature : move.shiftGear,
    lore: `A energia da Mega Evolução fez com que sua armadura de ferro se tornasse incrivelmente dura e resistente. Embora seja muito mais pesado, ele exibe um poder destrutivo maior, usando seus chifres gigantescos para perfurar aço como se fosse papel.`,
}

// 307 Meditite → Medicham
pkmn.meditite = {
    type: ["fighting","psychic"],
    bst: {
        hp: 30,
        atk: 40,
        def: 55,
        satk: 40,
        sdef: 55,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.medicham, level: evolutionLevel2 } } },
    hiddenAbility: ability.hugePower,
    signature : move.hiJumpKick,
    lore: `Ele medita diariamente em locais isolados, subsistindo com muito pouca comida enquanto aprimora seus poderes psíquicos.`,
}

pkmn.medicham = {
    type: ["fighting","psychic"],
    bst: {
        hp: 60,
        atk: 60,
        def: 75,
        satk: 60,
        sdef: 75,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaMedicham, item: item.medichamite } } },
    hiddenAbility: ability.hugePower,
    signature : move.hiJumpKick,
    lore: `Anos de treinamento meditativo aguçaram seus sentidos a tal ponto que ele consegue prever os movimentos do oponente antes que aconteçam.`,
}

pkmn.megaMedicham = {
    type: ["fighting","psychic"],
    bst: {
        hp: 60*1.2,
        atk: 160*1.2,
        def: 85*1.2,
        satk: 80*1.2,
        sdef: 85*1.2,
        spe: 100*1.2,
    },
    hiddenAbility: ability.hugePower,
    signature : move.hiJumpKick,
    lore: `A energia da Mega Evolução despertou seus sentidos ocultos. Ao atingir um estado de concentração absoluta, ele consegue prever os movimentos do adversário e lutar com uma precisão técnica que parece sobrenatural.`,
}

// 309 Electrike → Manectric
pkmn.electrike = {
    type: ["electric"],
    bst: {
        hp: 40,
        atk: 45,
        def: 40,
        satk: 65,
        sdef: 40,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.manectric, level: evolutionLevel2 } } },
    hiddenAbility: ability.intimidate,
    eggMove : move.charge,
    lore: `Seu pelo gera eletricidade estática por fricção, e ele a usa para se comunicar com outros de sua espécie a longas distâncias.`,
}

pkmn.manectric = {
    type: ["electric"],
    bst: {
        hp: 70,
        atk: 75,
        def: 60,
        satk: 105,
        sdef: 60,
        spe: 105,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaManectric, item: item.manectite } } },
    hiddenAbility: ability.intimidate,
    eggMove : move.charge,
    lore: `Ele acumula eletricidade nas nuvens ao redor de seu corpo, e diz-se que aparece sempre que uma tempestade elétrica se aproxima.`,
}

pkmn.megaManectric = {
    type: ["electric"],
    bst: {
        hp: 70*1.2,
        atk: 75*1.2,
        def: 80*1.2,
        satk: 135*1.2,
        sdef: 80*1.2,
        spe: 135*1.2,
    },
    hiddenAbility: ability.intimidate,
    eggMove : move.charge,
    signature : move.boltStrike,
    lore: `A energia da Mega Evolução é liberada através de seus pelos, gerando uma descarga elétrica tão intensa que cria nuvens de trovão. Ele é capaz de atingir velocidades extremas enquanto libera essas descargas para atordoar seus oponentes.`,
}

// 311 Plusle
pkmn.plusle = {
    type: ["electric"],
    bst: {
        hp: 60,
        atk: 50,
        def: 40,
        satk: 85,
        sdef: 75,
        spe: 95,
    },
    signature : move.ionise,
    hiddenAbility: ability.spikyPelt,
    lore: `Ele torce por seus companheiros de batalha fazendo faíscas saltarem de seu corpo, encorajando aliados com energia positiva.`,
}

// 312 Minun
pkmn.minun = {
    type: ["electric"],
    bst: {
        hp: 60,
        atk: 40,
        def: 50,
        satk: 75,
        sdef: 85,
        spe: 95,
    },
    signature : move.ionise,
    hiddenAbility: ability.hyperconductor,
    lore: `Ele conecta suas mãos com as de Plusle para gerar eletricidade em conjunto, criando faíscas mais poderosas quando estão juntos.`,
}

// 313 Volbeat
pkmn.volbeat = {
    type: ["bug"],
    bst: {
        hp: 65,
        atk: 73,
        def: 55,
        satk: 47,
        sdef: 75,
        spe: 85,
    },
    hiddenAbility: ability.dancer,
    eggMove : move.lunarDance,
    lore: `À noite, ele usa a luz em sua cauda para desenhar padrões luminosos no céu, atraindo parceiros e comunicando-se com outros.`,
}

// 314 Illumise
pkmn.illumise = {
    type: ["bug"],
    bst: {
        hp: 65,
        atk: 47,
        def: 55,
        satk: 73,
        sdef: 75,
        spe: 85,
    },
    hiddenAbility: ability.dancer,
    signature : move.tailGlow,
    lore: `Ela guia grupos de Volbeat através de padrões de voo específicos, liderando displays de luz coordenados durante a noite.`,
}

// 315 Roselia

// 316 Gulpin → Swalot
pkmn.gulpin = {
    type: ["poison"],
    bst: {
        hp: 70,
        atk: 43,
        def: 53,
        satk: 43,
        sdef: 53,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.swalot, level: evolutionLevel2 } } },
    hiddenAbility: ability.toxicBoost,
    signature : move.venoshock,
    lore: `Seu estômago ocupa quase todo o corpo, e ele pode digerir praticamente qualquer coisa, mesmo objetos considerados não comestíveis.`,
}

pkmn.swalot = {
    type: ["poison"],
    bst: {
        hp: 100,
        atk: 73,
        def: 83,
        satk: 73,
        sdef: 83,
        spe: 55,
    },
    hiddenAbility: ability.toxicBoost,
    signature : move.venoshock,
    lore: `Ele pode engolir objetos maiores que o próprio corpo inteiro sem mastigar, dissolvendo tudo com um ácido estomacal extremamente potente.`,
}

// 318 Carvanha → Sharpedo
pkmn.carvanha = {
    type: ["water","dark"],
    bst: {
        hp: 45,
        atk: 90,
        def: 20,
        satk: 65,
        sdef: 20,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.sharpedo, level: evolutionLevel2 } } },
    hiddenAbility: ability.strongJaw,
    lore: `Eles caçam em grandes cardumes, atacando presas muito maiores que eles próprios com suas mandíbulas afiadas como navalhas.`,
}

pkmn.sharpedo = {
    type: ["water","dark"],
    bst: {
        hp: 70,
        atk: 120,
        def: 40,
        satk: 95,
        sdef: 40,
        spe: 95,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaSharpedo, item: item.sharpedonite } } },
    hiddenAbility: ability.strongJaw,
    lore: `Conhecido como o pirata dos mares, ele é extremamente agressivo e pode nadar a 120 quilômetros por hora impulsionado por jatos de água.`,
}

pkmn.megaSharpedo = {
    type: ["water","dark"],
    bst: {
        hp: 70*1.2,
        atk: 140*1.2,
        def: 70*1.2,
        satk: 110*1.2,
        sdef: 65*1.2,
        spe: 160*1.2,
    },
    hiddenAbility: ability.strongJaw,
    signature : move.jetPunch,
    lore: `A energia da Mega Evolução causou um crescimento excessivo em seu corpo, resultando em presas mais afiadas e em uma carapaça ainda mais dura. Suas cicatrizes de batalhas passadas servem como prova de sua ferocidade, e ele agora é capaz de destruir qualquer material, rasgando o aço com a facilidade de quem corta papel.`,
}

// 320 Wailmer → Wailord
pkmn.wailmer = {
    type: ["water"],
    bst: {
        hp: 130,
        atk: 70,
        def: 35,
        satk: 70,
        sdef: 35,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.wailord, level: evolutionLevel3 } } },
    hiddenAbility: ability.stamina,
    lore: `Ele pode inflar o corpo inteiro engolindo grandes quantidades de água, e é capaz de saltar sobre penhascos de 20 metros usando essa técnica.`,
}

pkmn.wailord = {
    type: ["water"],
    bst: {
        hp: 170,
        atk: 90,
        def: 45,
        satk: 90,
        sdef: 45,
        spe: 60,
    },
    hiddenAbility: ability.stamina,
    lore: `O maior de todos os Pokémon conhecidos, ele nada suavemente pelos oceanos em grupos, comunicando-se por longas distâncias através de cantos graves.`,
}

// 322 Numel → Camerupt
pkmn.numel = {
    type: ["fire","ground"],
    bst: {
        hp: 60,
        atk: 60,
        def: 40,
        satk: 65,
        sdef: 45,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.camerupt, level: evolutionLevel2 } } },
    hiddenAbility: ability.sheerForce,
    eggMove : move.sacredFire,
    lore: `A protuberância em suas costas contém magma fervente, e se ele cair, o magma pode vazar, causando queimaduras graves.`,
}

pkmn.camerupt = {
    type: ["fire","ground"],
    bst: {
        hp: 70,
        atk: 100,
        def: 70,
        satk: 105,
        sdef: 75,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaCamerupt, item: item.cameruptite } } },
    hiddenAbility: ability.sheerForce,
    eggMove : move.sacredFire,
    lore: `As corcovas em suas costas ocasionalmente entram em erupção, cuspindo magma que pode alcançar temperaturas superiores a 10.000°C.`,
}

pkmn.megaCamerupt = {
    type: ["fire","ground"],
    bst: {
        hp: 100*1.2,
        atk: 120*1.2,
        def: 100*1.2,
        satk: 145*1.2,
        sdef: 125*1.2,
        spe: 20*1.2,
    },
    hiddenAbility: ability.sheerForce,
    eggMove : move.sacredFire,
    signature : move.fieryDance,
    lore: `A energia da Mega Evolução fez com que o vulcão em suas costas entrasse em erupção, liberando uma torrente de magma que transborda constantemente. Ele é capaz de disparar bolas de lava fervente de seu corpo e possui um temperamento extremamente explosivo, condizente com a montanha de fogo que carrega.`,
}

// 324 Torkoal
pkmn.torkoal = {
    type: ["fire"],
    bst: {
        hp: 70,
        atk: 85,
        def: 140,
        satk: 85,
        sdef: 70,
        spe: 20,
    },
    hiddenAbility: ability.drought,
    eggMove: ability.weatherBall,
    lore: `Ele queima carvão dentro de sua concha para gerar fumaça espessa, usada tanto para se propelir quanto para confundir predadores.`,
}

// 325 Spoink → Grumpig
pkmn.spoink = {
    type: ["psychic"],
    bst: {
        hp: 60,
        atk: 25,
        def: 35,
        satk: 70,
        sdef: 80,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.grumpig, level: evolutionLevel2 } } },
    hiddenAbility: ability.espilate,
    lore: `Ele salta continuamente sobre a própria cauda, mantendo seu coração batendo. Se parar de pular, seu coração pode parar também.`,
}

pkmn.grumpig = {
    type: ["psychic"],
    bst: {
        hp: 80,
        atk: 45,
        def: 65,
        satk: 90,
        sdef: 110,
        spe: 80,
    },
    hiddenAbility: ability.espilate,
    lore: `Ele dança em um ritmo peculiar enquanto usa poderes psíquicos, coletando pérolas brancas e negras que considera seus tesouros mais valiosos.`,
}

// 327 Spinda
pkmn.spinda = {
    type: ["normal"],
    bst: {
        hp: 60,
        atk: 60,
        def: 60,
        satk: 60,
        sdef: 60,
        spe: 60,
    },
    hiddenAbility: ability.moody,
    eggMove : move.metronome,
    lore: `Os padrões de manchas em seu corpo são únicos para cada indivíduo, e seus movimentos aparentemente erráticos confundem até predadores experientes.`,
}

// 328 Trapinch → Vibrava → Flygon
pkmn.trapinch = {
    type: ["ground"],
    bst: {
        hp: 45,
        atk: 100,
        def: 45,
        satk: 45,
        sdef: 45,
        spe: 10,
    },
    evolve: function() { return { 1: { pkmn: pkmn.vibrava, level: evolutionLevel2 } } },
    hiddenAbility: ability.reckless,
    eggMove : move.dragonEnergy,
    lore: `Suas mandíbulas poderosas conseguem esmagar rochas, e ele constrói armadilhas em forma de funil na areia para capturar presas.`,
}

pkmn.vibrava = {
    type: ["ground","dragon"],
    bst: {
        hp: 50,
        atk: 70,
        def: 50,
        satk: 50,
        sdef: 50,
        spe: 70,
    },
    evolve: function() { return { 1: { pkmn: pkmn.flygon, level: evolutionLevel3 } } },
    hiddenAbility: ability.reckless,
    eggMove : move.dragonEnergy,
    lore: `As asas em desenvolvimento deste Pokémon vibram, produzindo ondas sonoras ultrassônicas capazes de causar dores de cabeça em quem estiver por perto.`,
}

pkmn.flygon = {
    type: ["ground","dragon"],
    bst: {
        hp: 80,
        atk: 100,
        def: 80,
        satk: 100,
        sdef: 80,
        spe: 100,
    },
    hiddenAbility: ability.reckless,
    eggMove : move.dragonEnergy,
    lore: `O bater de suas asas cria uma tempestade de areia que esconde seus movimentos, o que lhe rendeu o apelido de espírito do deserto.`,
}

// 331 Cacnea → Cacturne
pkmn.cacnea = {
    type: ["grass"],
    bst: {
        hp: 50,
        atk: 85,
        def: 40,
        satk: 85,
        sdef: 40,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.cacturne, level: evolutionLevel2 } } },
    hiddenAbility: ability.waterAbsorb,
    signature : move.needleArm,
    lore: `Seus espinhos afiados cobrem todo o corpo, mas ele deseja secretamente ser abraçado, apesar da dor que isso causaria a quem tentasse.`,
}

pkmn.cacturne = {
    type: ["grass","dark"],
    bst: {
        hp: 70,
        atk: 115,
        def: 60,
        satk: 115,
        sdef: 60,
        spe: 55,
    },
    hiddenAbility: ability.waterAbsorb,
    signature : move.needleArm,
    lore: `Ele fica completamente imóvel durante o dia sob o sol do deserto, e começa a caçar apenas depois que a noite cai.`,
}

// 333 Swablu → Altaria
pkmn.swablu = {
    type: ["normal","flying"],
    bst: {
        hp: 45,
        atk: 40,
        def: 60,
        satk: 40,
        sdef: 75,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.altaria, level: evolutionLevel2 } } },
    hiddenAbility: ability.normalize,
    eggMove: move.aromaticMist,
    lore: `Suas asas macias como algodão são usadas por pessoas para limpar coisas, e a cor delas fica mais suja quanto mais tempo passa sem tomar banho de chuva.`,
}

pkmn.altaria = {
    type: ["dragon","flying"],
    bst: {
        hp: 75,
        atk: 70,
        def: 90,
        satk: 70,
        sdef: 105,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaAltaria, item: item.altarianite } } },
    hiddenAbility: ability.dragonMaw,
    eggMove: move.aromaticMist,
    lore: `Seu canto suave lembra o de um coro angelical, e suas asas de nuvem são tão macias que parecem verdadeiras nuvens flutuando.`,
}

pkmn.megaAltaria = {
    type: ["dragon","fairy"],
    bst: {
        hp: 75*1.2,
        atk: 110*1.2,
        def: 110*1.2,
        satk: 110*1.2,
        sdef: 105*1.2,
        spe: 80*1.2,
    },
    hiddenAbility: ability.pixilate,
    eggMove: move.aromaticMist,
    signature : move.clangingScales,
    lore: `A energia da Mega Evolução fez com que suas penas crescessem de forma exuberante, envolvendo seu corpo em uma camada de algodão tão densa que atua como um escudo. Ele é conhecido por ser um Pokémon extremamente carinhoso e protetor, mas, ao ser levado à batalha, demonstra uma confiança serena e uma força mágica que surpreende seus adversários.`,
}

// 335 Zangoose
pkmn.zangoose = {
    type: ["normal"],
    bst: {
        hp: 73,
        atk: 115,
        def: 60,
        satk: 60,
        sdef: 60,
        spe: 90,
    },
    hiddenAbility: ability.toxicBoost,
    lore: `Ele é o inimigo natural de Seviper, e a rivalidade entre as duas espécies é tão antiga que nenhum dos dois consegue explicar como começou.`,
}

// 336 Seviper
pkmn.seviper = {
    type: ["poison"],
    bst: {
        hp: 73,
        atk: 100,
        def: 60,
        satk: 100,
        sdef: 60,
        spe: 65,
    },
    signature : move.poisonTail,
    lore: `Sua cauda em forma de lâmina é coberta de veneno mortal, e ele a usa em combates ferozes contra seu rival natural, Zangoose.`,
}

// 337 Lunatone
pkmn.lunatone = {
    type: ["rock","psychic"],
    bst: {
        hp: 90,
        atk: 55,
        def: 65,
        satk: 95,
        sdef: 85,
        spe: 70,
    },
    hiddenAbility: ability.levitate,
    eggMove : move.lunarDance,
    lore: `Diz-se que ele foi encontrado logo após a queda de um meteoro, e seu poder parece flutuar de acordo com as fases da lua.`,
}

// 338 Solrock
pkmn.solrock = {
    type: ["rock","psychic"],
    bst: {
        hp: 90,
        atk: 95,
        def: 85,
        satk: 55,
        sdef: 65,
        spe: 70,
    },
    hiddenAbility: ability.levitate,
    lore: `Ele gira constantemente como uma pequena estrela, e sua energia parece intensificar-se sob a luz direta do sol.`,
}

// 339 Barboach → Whiscash
pkmn.barboach = {
    type: ["water","ground"],
    bst: {
        hp: 50,
        atk: 48,
        def: 43,
        satk: 46,
        sdef: 41,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.whiscash, level: evolutionLevel2 } } },
    hiddenAbility : ability.rainDish,
    lore: `Seu corpo escorregadio o torna quase impossível de segurar, e ele se enterra na lama para escapar de predadores rapidamente.`,
}

pkmn.whiscash = {
    type: ["water","ground"],
    bst: {
        hp: 110,
        atk: 100,
        def: 73,
        satk: 100,
        sdef: 71,
        spe: 60,
    },
    hiddenAbility : ability.rainDish,
    lore: `Diz-se que terremotos ocorrem sempre que ele se agita embaixo da terra, um mito antigo repetido por gerações de agricultores locais.`,
}

// 341 Corphish → Crawdaunt
pkmn.corphish = {
    type: ["water"],
    bst: {
        hp: 43,
        atk: 80,
        def: 65,
        satk: 50,
        sdef: 35,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.crawdaunt, level: evolutionLevel2 } } },
    lore: `Originalmente uma espécie estrangeira, ele se adaptou rapidamente a rios e lagos, se tornando extremamente resistente e difícil de erradicar.`,
}

pkmn.crawdaunt = {
    type: ["water","dark"],
    bst: {
        hp: 63,
        atk: 120,
        def: 85,
        satk: 90,
        sdef: 55,
        spe: 55,
    },
    lore: `Ele é extremamente territorial e ataca ferozmente qualquer intruso que se aproxime demais de seu riacho, usando suas garras poderosas.`,
}

// 343 Baltoy → Claydol
pkmn.baltoy = {
    type: ["ground","psychic"],
    bst: {
        hp: 40,
        atk: 40,
        def: 55,
        satk: 40,
        sdef: 70,
        spe: 55,
    },
    evolve: function() { return { 1: { pkmn: pkmn.claydol, level: evolutionLevel2 } } },
    hiddenAbility: ability.powerOfAlchemy,
    lore: `Ele gira constantemente sobre uma única perna, como um pião, e se comunica através de padrões de movimento gravados em cerâmica antiga.`,
}

pkmn.claydol = {
    type: ["ground","psychic"],
    bst: {
        hp: 60,
        atk: 70,
        def: 105,
        satk: 70,
        sdef: 120,
        spe: 75,
    },
    hiddenAbility: ability.powerOfAlchemy,
    lore: `Diz-se que ele foi criado a partir de uma estátua de barro há milhares de anos, e ainda hoje flutua usando poderes psíquicos misteriosos.`,
}

// 345 Lileep → Cradily
pkmn.lileep = {
    type: ["rock","grass"],
    bst: {
        hp: 66,
        atk: 41,
        def: 77,
        satk: 61,
        sdef: 87,
        spe: 23,
    },
    evolve: function() { return { 1: { pkmn: pkmn.cradily, level: evolutionLevel3 } } },
    hiddenAbility: ability.megaLauncher,
    eggMove : move.chloroblast,
    lore: `Um Pokémon antigo revivido a partir de um fóssil, ele permanece enraizado no fundo do mar, capturando presas com suas vinhas.`,
}

pkmn.cradily = {
    type: ["rock","grass"],
    bst: {
        hp: 86,
        atk: 81,
        def: 97,
        satk: 81,
        sdef: 107,
        spe: 43,
    },
    hiddenAbility: ability.megaLauncher,
    eggMove : move.chloroblast,
    lore: `Suas vinhas venenosas capturam presas e as prendem enquanto ele permanece parado, digerindo lentamente tudo o que consegue capturar.`,
}

// 347 Anorith → Armaldo
pkmn.anorith = {
    type: ["rock","bug"],
    bst: {
        hp: 45,
        atk: 95,
        def: 50,
        satk: 40,
        sdef: 50,
        spe: 75,
    },
    evolve: function() { return { 1: { pkmn: pkmn.armaldo, level: evolutionLevel3 } } },
    eggMove : move.rockWrecker,
    lore: `Um Pokémon primitivo dos mares antigos, ele usa seus braços em forma de garra para nadar e capturar pequenas presas no fundo do oceano.`,
}

pkmn.armaldo = {
    type: ["rock","bug"],
    bst: {
        hp: 75,
        atk: 125,
        def: 100,
        satk: 70,
        sdef: 80,
        spe: 45,
    },
    eggMove : move.rockWrecker,
    lore: `Sua carapaça extremamente resistente o ajudou a sobreviver às eras glaciais que extinguiram a maioria de seus parentes antigos.`,
}

// 349 Feebas → Milotic
pkmn.feebas = {
    type: ["water"],
    bst: {
        hp: 20,
        atk: 15,
        def: 20,
        satk: 10,
        sdef: 55,
        spe: 80,
    },
    hiddenAbility: ability.multiscale,
    evolve: function() { return { 1: { pkmn: pkmn.milotic, level: evolutionLevel3 } } },
    lore: `Apesar de sua aparência pouco atraente, ele guarda um potencial extraordinário escondido, que só se revela sob condições muito específicas.`,
}

pkmn.milotic = {
    type: ["water"],
    bst: {
        hp: 95,
        atk: 60,
        def: 79,
        satk: 100,
        sdef: 125,
        spe: 81,
    },
    hiddenAbility: ability.multiscale,
    lore: `Considerado o Pokémon mais belo de todos, seu corpo elegante e escamas brilhantes já inspiraram inúmeras obras de arte.`,
}

// 351 Castform
pkmn.castform = {
    type: ["normal"],
    bst: {
        hp: 70,
        atk: 70,
        def: 70,
        satk: 70,
        sdef: 70,
        spe: 70,
    },
    signature : move.weatherBall,
    hiddenAbility: ability.climaTact,
    lore: `Seu corpo muda de forma de acordo com o clima ao seu redor, refletindo perfeitamente as condições atmosféricas do ambiente.`,
}

pkmn.castformSunny = {
    type: ["fire"],
    bst: {
        hp: 70,
        atk: 70,
        def: 70,
        satk: 70,
        sdef: 70,
        spe: 70,
    },
    signature : move.weatherBall,
    hiddenAbility: ability.solarPower,
    lore: `Sob luz solar intensa, seu corpo se transforma, tornando-se mais quente e ativo, como se a própria energia do sol o revigorasse.`,
}

pkmn.castformRainy = {
    type: ["water"],
    bst: {
        hp: 70,
        atk: 70,
        def: 70,
        satk: 70,
        sdef: 70,
        spe: 70,
    },
    signature : move.weatherBall,
    lore: `Sob chuva forte, seu corpo assume uma forma aquática, permitindo que ele se mova com mais facilidade em ambientes úmidos.`,
}

pkmn.castformSnowy = {
    type: ["ice"],
    bst: {
        hp: 70,
        atk: 70,
        def: 70,
        satk: 70,
        sdef: 70,
        spe: 70,
    },
    signature : move.weatherBall,
    lore: `Sob neve intensa, seu corpo se transforma em uma forma gelada, adaptando-se perfeitamente às baixas temperaturas do inverno.`,
}

// 352 Kecleon
pkmn.kecleon = {
    type: ["normal"],
    bst: {
        hp: 60,
        atk: 90,
        def: 70,
        satk: 60,
        sdef: 120,
        spe: 40,
    },
    hiddenAbility: ability.protean,
    lore: `Ele consegue mudar a cor de seu corpo para se camuflar perfeitamente com o ambiente ao redor, tornando-se praticamente invisível.`,
}

// 353 Shuppet → Banette
pkmn.shuppet = {
    type: ["ghost"],
    bst: {
        hp: 44,
        atk: 75,
        def: 35,
        satk: 63,
        sdef: 33,
        spe: 45,
    },
    hiddenAbility: ability.prankster,
    evolve: function() { return { 1: { pkmn: pkmn.banette, level: evolutionLevel2 } } },
    eggMove : move.shadowForce,
    lore: `Ele se alimenta de sentimentos de inveja e rancor, e é atraído por lugares onde emoções negativas são intensas.`,
}

pkmn.banette = {
    type: ["ghost"],
    bst: {
        hp: 64,
        atk: 115,
        def: 65,
        satk: 83,
        sdef: 63,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaBanette, item: item.banettite } } },
    hiddenAbility: ability.prankster,
    eggMove : move.shadowForce,
    lore: `Criado a partir de uma boneca abandonada, diz-se que ele guarda um profundo rancor contra a criança que o descartou.`,
}

pkmn.megaBanette = {
    type: ["ghost"],
    bst: {
        hp: 64*1.2,
        atk: 165*1.2,
        def: 75*1.2,
        satk: 93*1.2,
        sdef: 83*1.2,
        spe: 75*1.2,
    },
    hiddenAbility: ability.prankster,
    eggMove : move.shadowForce,
    signature : move.rageFist,
    lore: `A energia da Mega Evolução liberou sua vontade amaldiçoada. Ele é movido por um ódio profundo e vingativo, e dizem que, ao abrir seus zíperes, ele libera uma força tão poderosa que pode transformar qualquer um em um boneco amaldiçoado.`,
}

// 355 Duskull → Dusclops → Dusknoir 
pkmn.duskull = {
    type: ["ghost"],
    bst: {
        hp: 20,
        atk: 40,
        def: 90,
        satk: 30,
        sdef: 90,
        spe: 25,
    },
    evolve: function() { return { 1: { pkmn: pkmn.dusclops, level: evolutionLevel2 } } },
    hiddenAbility: ability.intangible,
    eggMove : move.spectralThief,
    lore: `Ele consegue atravessar paredes sólidas, e é dito que guia crianças perdidas para casa, embora também possa levá-las ao mundo dos espíritos.`,
}

pkmn.dusclops = {
    type: ["ghost"],
    bst: {
        hp: 40,
        atk: 70,
        def: 130,
        satk: 60,
        sdef: 130,
        spe: 25,
    },
    evolve: function() { return { 1: { pkmn: pkmn.dusknoir, item: item.oddRock } } },
    hiddenAbility: ability.intangible,
    eggMove : move.spectralThief,
    lore: `Diz-se que qualquer coisa que entre em seu corpo oco desaparece para outra dimensão, nunca mais sendo vista novamente.`,
}

pkmn.dusknoir = {
    type: ["ghost"],
    bst: {
        hp: 45,
        atk: 100,
        def: 135,
        satk: 65,
        sdef: 135,
        spe: 45,
    },
    hiddenAbility: ability.intangible,
    eggMove : move.spectralThief,
    lore: `Diz-se que ele recebe sinais de outra dimensão através da antena em sua cabeça, guiando almas perdidas para o além.`,
}

// 357 Tropius
pkmn.tropius = {
    type: ["grass","flying"],
    bst: {
        hp: 99,
        atk: 68,
        def: 83,
        satk: 72,
        sdef: 87,
        spe: 51,
    },
    hiddenAbility: ability.galeWings,
    eggMove : move.aeroblast,
    lore: `Os cachos de fruta em seu pescoço amadurecem com o tempo, e ele os compartilha generosamente com outros Pokémon famintos.`,
}

// 358 Chingling → Chimecho
pkmn.chingling = {
    type: ["psychic"],
    bst: {
        hp: 45,
        atk: 30,
        def: 50,
        satk: 65,
        sdef: 50,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.chimecho, item: item.shinyStone } } },
    hiddenAbility: ability.cacophony,
    eggMove: move.howl,
    lore: `Ele produz um som de sino ao se mover, e o timbre muda dependendo de suas emoções, ficando mais agudo quando está assustado.`,
}

pkmn.chimecho = {
    type: ["psychic"],
    bst: {
        hp: 75,
        atk: 50,
        def: 80,
        satk: 95,
        sdef: 90,
        spe: 65,
    },
    hiddenAbility: ability.cacophony,
    eggMove: move.howl,
    lore: `Ele balança suavemente pendurado em uma árvore, e o som que produz é dito trazer paz de espírito a quem o escuta.`,
}

//Sem pedra
pkmn.megaChimecho = {
    type: ["psychic", "steel"],
    bst: {
        hp: 75*1.2,
        atk: 50*1.2,
        def: 110*1.2,
        satk: 135*1.2,
        sdef: 120*1.2,
        spe: 65*1.2,
    },
    hiddenAbility: ability.cacophony,
    eggMove: move.howl,
    signature : move.kinesis,
    lore: `Ele faz seu corpo inteiro vibrar para atacar em todas as direções usando ondas sonoras. Aqueles que ouvem essas vibrações ficam tão confusos que esquecem quem são.`,
}

// 359 Absol
pkmn.absol = {
    type: ["dark"],
    bst: {
        hp: 65,
        atk: 130,
        def: 60,
        satk: 75,
        sdef: 60,
        spe: 75,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaAbsol, item: item.absolite } } },
    hiddenAbility: ability.sereneGrace,
    lore: `Sua aparição é frequentemente associada a desastres iminentes, embora na verdade ele apenas sinta o perigo chegando e tente avisar as pessoas.`,
}

pkmn.megaAbsol = {
    type: ["dark"],
    bst: {
        hp: 65*1.2,
        atk: 150*1.2,
        def: 60*1.2,
        satk: 115*1.2,
        sdef: 60*1.2,
        spe: 115*1.2,
    },
    hiddenAbility: ability.sereneGrace,
    signature : move.fieryWrath,
    lore: `A energia da Mega Evolução liberou sua vitalidade oculta. As asas que brotaram de suas costas se parecem com uma aura aterrorizante, e ele as usa para afugentar seus oponentes, exibindo um aspecto que muitos descrevem como angelical ou demoníaco.`,
}

//Sem pedra
pkmn.megaAbsolZ = {
    type: ["dark", "ghost"],
    bst: {
        hp: 65*1.2,
        atk: 200*1.2,
        def: 60*1.2,
        satk: 125*1.2,
        sdef: 60*1.2,
        spe: 151*1.2,
    },
    hiddenAbility: ability.sereneGrace,
    signature : move.ruination,
    lore: `A garra em suas costas se formou pelo enrijecimento da energia, usada para abater inimigos com um único golpe rápido. A lenda diz que isso é, na verdade, um ato de misericórdia, projetado para evitar que seus oponentes sofram.`,
}

// 360 Wynaut

// 361 Snorunt → Glalie / Froslass
pkmn.snorunt = {
    type: ["ice"],
    bst: {
        hp: 50,
        atk: 50,
        def: 50,
        satk: 50,
        sdef: 50,
        spe: 50,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.glalie, level: evolutionLevel3 },
            2: { pkmn: pkmn.froslass, item: item.dawnStone }
        }
    },
    hiddenAbility: ability.moody,
    signature : move.snowscape,
    lore: `Diz-se que ele traz sorte para uma casa que visita durante o inverno, mas foge assim que a primavera chega.`,
}

pkmn.snoruntEvent = {
    rename: `snorunt`,
    hidden:true,
    type: ["ice","ghost"],
    bst: {
        hp: 50,
        atk: 50,
        def: 50,
        satk: 50,
        sdef: 50,
        spe: 50,
    },
    hiddenAbility: ability.moody,
    signature : move.snowscape,
}

pkmn.glalie = {
    type: ["ice"],
    bst: {
        hp: 80,
        atk: 80,
        def: 80,
        satk: 80,
        sdef: 80,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaGlalie, item: item.glalitite } } },
    hiddenAbility: ability.moody,
    signature : move.snowscape,
    lore: `Seu corpo é feito de gelo tão duro quanto aço, capaz de congelar o ar úmido ao redor instantaneamente com sua respiração fria.`,
}

pkmn.megaGlalie = {
    type: ["ice"],
    bst: {
        hp: 80*1.2,
        atk: 120*1.2,
        def: 80*1.2,
        satk: 120*1.2,
        sdef: 80*1.2,
        spe: 100*1.2,
    },
    hiddenAbility: ability.glaciate,
    signature : move.snowscape,
    lore: `A energia da Mega Evolução liberou uma força destrutiva contida em seu núcleo. Sua mandíbula ficou deformada e travada em uma posição de abertura permanente, permitindo que ele exale um ar congelante tão intenso que pode cristalizar instantaneamente qualquer coisa ao seu redor. Ele é incapaz de controlar a imensa energia que emana de seu corpo.`,
}

pkmn.froslass = {
    type: ["ice","ghost"],
    bst: {
        hp: 70,
        atk: 80,
        def: 70,
        satk: 80,
        sdef: 70,
        spe: 110,
    },
    signature : move.snowscape,
    hiddenAbility: ability.iceBody,
    lore: `Formada a partir do espírito de uma mulher que morreu congelada nas montanhas, ela congela qualquer coisa que tocar com suas mãos geladas.`,
}

//Sem pedra
pkmn.megaFroslass = {
    type: ["ice","ghost"],
    bst: {
        hp: 70*1.2,
        atk: 80*1.2,
        def: 70*1.2,
        satk: 140*1.2,
        sdef: 100*1.2,
        spe: 120*1.2,
    },
    hiddenAbility: ability.snowWarning,
    signature : move.glaciate,
    lore: `Este Pokémon pode usar um ar gélido e sinistro impregnado de energia fantasmagórica para congelar até mesmo coisas intangíveis, como chamas ou o vento.`,
}

// 363 Spheal → Sealeo → Walrein
pkmn.spheal = {
    type: ["ice","water"],
    bst: {
        hp: 70,
        atk: 55,
        def: 50,
        satk: 55,
        sdef: 50,
        spe: 25,
    },
    evolve: function() { return { 1: { pkmn: pkmn.sealeo, level: evolutionLevel2 } } },
    hiddenAbility: ability.icyPelt,
    eggMove: move.mountainGale,
    lore: `Ele rola pelo gelo e pela neve para se mover, já que suas nadadeiras curtas dificultam a caminhada em terreno sólido.`,
}

pkmn.sealeo = {
    type: ["ice","water"],
    bst: {
        hp: 90,
        atk: 75,
        def: 70,
        satk: 75,
        sdef: 70,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.walrein, level: evolutionLevel3 } } },
    hiddenAbility: ability.icyPelt,
    eggMove: move.mountainGale,
    lore: `Ele equilibra objetos na ponta do nariz enquanto rola, uma habilidade que aprimora constantemente por pura diversão.`,
}

pkmn.walrein = {
    type: ["ice","water"],
    bst: {
        hp: 110,
        atk: 95,
        def: 90,
        satk: 95,
        sdef: 90,
        spe: 65,
    },
    hiddenAbility: ability.icyPelt,
    eggMove: move.mountainGale,
    lore: `Suas presas grandes e duras podem quebrar gelo espesso com facilidade, e seu grito de guerra pode ser ouvido a quilômetros de distância.`,
}

// 366 Clamperl → Huntail / Gorebyss
pkmn.clamperl = {
    type: ["water"],
    bst: {
        hp: 35,
        atk: 64,
        def: 85,
        satk: 74,
        sdef: 55,
        spe: 32,
    },
    evolve: function() {
        return {
            1: { pkmn: pkmn.huntail, item: item.waterStone },
            2: { pkmn: pkmn.gorebyss, item: item.oddRock }
        } 
    },
    hiddenAbility: ability.drizzle,
    eggMove: ability.weatherBall,
    lore: `Ele se prende a rochas no fundo do oceano usando seu corpo em forma de concha, esperando pacientemente por décadas antes de evoluir.`,
}

pkmn.huntail = {
    type: ["water"],
    bst: {
        hp: 55,
        atk: 104,
        def: 105,
        satk: 94,
        sdef: 75,
        spe: 52,
    },
    eggMove : move.batonPass,
    hiddenAbility: ability.simple,
    lore: `Adaptado às profundezas escuras do oceano, sua cauda se assemelha à cabeça de uma enguia, atraindo presas curiosas para perto.`,
}

pkmn.gorebyss = {
    type: ["water"],
    bst: {
        hp: 55,
        atk: 84,
        def: 105,
        satk: 114,
        sdef: 75,
        spe: 52,
    },
    hiddenAbility: ability.drizzle,
    eggMove: ability.weatherBall,
    lore: `Seu focinho fino e elegante permite que ela perfure e sugue fluidos corporais de presas com extrema precisão.`,
}

// 369 Relicanth
pkmn.relicanth = {
    type: ["water","rock"],
    bst: {
        hp: 100,
        atk: 90,
        def: 130,
        satk: 45,
        sdef: 65,
        spe: 55,
    },
    hiddenAbility: ability.metalhead,
    eggMove: ability.rockWrecker,
    lore: `Praticamente inalterado por cem milhões de anos, ele é considerado um fóssil vivo, sobrevivendo nas profundezas desde tempos ancestrais.`,
}

// 370 Luvdisc
pkmn.luvdisc = {
    type: ["water"],
    bst: {
        hp: 43,
        atk: 30,
        def: 55,
        satk: 40,
        sdef: 65,
        spe: 97,
    },
    hiddenAbility: ability.multiscale,
    lore: `Formado em pares durante a época de acasalamento, diz-se que encontrar um casal deles juntos traz sorte no amor.`,
}

// 371 Bagon → Shelgon → Salamence
pkmn.bagon = {
    type: ["dragon"],
    bst: {
        hp: 45,
        atk: 75,
        def: 60,
        satk: 40,
        sdef: 30,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.shelgon, level: evolutionLevel2 } } },
    hiddenAbility: ability.moxie,
    lore: `Ele sonha em voar, e por isso repetidamente bate a cabeça contra rochas duras, esperando um dia desenvolver asas verdadeiras.`,
}

pkmn.shelgon = {
    type: ["dragon"],
    bst: {
        hp: 65,
        atk: 95,
        def: 100,
        satk: 60,
        sdef: 50,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.salamence, level: evolutionLevel3 } } },
    hiddenAbility: ability.moxie,
    lore: `Sua carapaça extremamente dura protege um corpo mole e ainda em desenvolvimento, enquanto ele se prepara para a metamorfose final.`,
}

pkmn.salamence = {
    type: ["dragon","flying"],
    bst: {
        hp: 95,
        atk: 135,
        def: 80,
        satk: 110,
        sdef: 80,
        spe: 100,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaSalamence, item: item.salamencite } } },
    hiddenAbility: ability.moxie,
    lore: `Quando finalmente ganha asas, ele se torna tão feliz que voa sem parar, destruindo tudo em seu caminho em pura exuberância.`,
}

pkmn.megaSalamence = {
    type: ["dragon","flying"],
    bst: {
        hp: 95*1.2,
        atk: 145*1.2,
        def: 130*1.2,
        satk: 120*1.2,
        sdef: 90*1.2,
        spe: 120*1.2,
    },
    hiddenAbility: ability.aerilate,
    signature : move.dragonDarts,
    lore: `A energia da Mega Evolução fez com que suas asas se fundissem em uma forma de crescente rígida e aerodinâmica. Esse formato de meia-lua funciona como uma lâmina gigantesca; ele corta o céu com tamanha velocidade e ferocidade que o solo abaixo de sua trajetória é esculpido pelo vento e pelo calor que emana de seu corpo.`,
}

// 374 Beldum → Metang → Metagross
pkmn.beldum = {
    type: ["steel","psychic"],
    bst: {
        hp: 40,
        atk: 55,
        def: 80,
        satk: 35,
        sdef: 60,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.metang, level: evolutionLevel2 } } },
    hiddenAbility: ability.levitate,
    lore: `Seu corpo é conectado por um magnetismo poderoso a outros de sua espécie, e ele se comunica através de sinais eletromagnéticos.`,
}

pkmn.metang = {
    type: ["steel","psychic"],
    bst: {
        hp: 60,
        atk: 75,
        def: 100,
        satk: 55,
        sdef: 80,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.metagross, level: evolutionLevel3 } } },
    hiddenAbility: ability.levitate,
    lore: `Formado pela fusão de dois Beldum, seus cérebros combinados criam um poder psíquico muito maior que a soma de suas partes individuais.`,
}

pkmn.metagross = {
    type: ["steel","psychic"],
    bst: {
        hp: 80,
        atk: 135,
        def: 130,
        satk: 95,
        sdef: 90,
        spe: 70,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaMetagross, item: item.metagrossite } } },
    hiddenAbility: ability.levitate,
    lore: `Formado pela fusão de dois Metang, seus quatro cérebros combinados o tornam capaz de resolver cálculos mais rápido que um supercomputador.`,
}

pkmn.megaMetagross = {
    type: ["steel","psychic"],
    bst: {
        hp: 80*1.2,
        atk: 145*1.2,
        def: 150*1.2,
        satk: 105*1.2,
        sdef: 110*1.2,
        spe: 110*1.2,
    },
    hiddenAbility: ability.toughClaws,
    signature : move.anchorShot,
    lore: `A energia da Mega Evolução estimulou seus cérebros, unindo os quatro cérebros do Metagross original em uma supercomputação hiper-avançada. Ele analisa as batalhas com uma precisão fria e impiedosa, utilizando suas garras como ganchos para fixar o oponente antes de desferir ataques fatais com sua força sobre-humana.`,
}

// 377 Regirock
pkmn.regirock = {
    type: ["rock"],
    bst: {
        hp: 80*1.3,
        atk: 100*1.3,
        def: 200*1.3,
        satk: 50*1.3,
        sdef: 100*1.3,
        spe: 50*1.3,
    },
    hiddenAbility: ability.solid,
    signature : move.zapCannon,
    lore: `Composto inteiramente de rochas antigas, seu corpo se autorregenera substituindo pedras danificadas por outras encontradas ao redor.`,
}

// 378 Regice
pkmn.regice = {
    type: ["ice"],
    bst: {
        hp: 80*1.3,
        atk: 50*1.3,
        def: 100*1.3,
        satk: 100*1.3,
        sdef: 200*1.3,
        spe: 50*1.3,
    },
    hiddenAbility: ability.iceBody,
    signature : move.zapCannon,
    lore: `Seu corpo é feito de gelo formado há dez mil anos, e a temperatura ao seu redor nunca sobe, não importa o clima.`,
}

// 379 Registeel
pkmn.registeel = {
    type: ["steel"],
    bst: {
        hp: 80*1.3,
        atk: 75*1.3,
        def: 150*1.3,
        satk: 75*1.3,
        sdef: 150*1.3,
        spe: 20*1.3,
    },
    hiddenAbility: ability.bastion,
    signature : move.zapCannon,
    lore: `Seu corpo metálico é mais leve do que parece, mas é feito de uma substância desconhecida mais resistente que qualquer metal conhecido.`,
}

// 380 Latias
pkmn.latias = {
    type: ["dragon","psychic"],
    bst: {
        hp: 80*1.3,
        atk: 80*1.3,
        def: 90*1.3,
        satk: 110*1.3,
        sdef: 130*1.3,
        spe: 110*1.3,
    },
    hiddenAbility: ability.levitate,
    signature : move.mistBall,
    lore: `Ela pode se camuflar refratando luz ao seu redor, e é extremamente protetora com aqueles que trata como família.`,
}

pkmn.megaLatias = {
    type: ["dragon","psychic"],
    bst: {
        hp: 120*1.35,
        atk: 100*1.35,
        def: 120*1.35,
        satk: 140*1.35,
        sdef: 180*1.35,
        spe: 140*1.35,
    },
    hiddenAbility: ability.levitate,
    signature : move.mistBall,
    lore: `A megaevolução aprimora seus poderes psíquicos, permitindo que ela se comunique telepaticamente com maior clareza e alcance.`,
}

// 381 Latios
pkmn.latios = {
    type: ["dragon","psychic"],
    bst: {
        hp: 80*1.3,
        atk: 90*1.3,
        def: 80*1.3,
        satk: 130*1.3,
        sdef: 110*1.3,
        spe: 110*1.3,
    },
    hiddenAbility: ability.levitate,
    signature : move.lusterPurge,
    lore: `Ele pode voar a velocidades superiores a Mach 2, e é dito que consegue entender a linguagem humana através de telepatia.`,
}

pkmn.megaLatios = {
    type: ["dragon","psychic"],
    bst: {
        hp: 120*1.35,
        atk: 140*1.35,
        def: 100*1.35,
        satk: 180*1.35,
        sdef: 120*1.35,
        spe: 140*1.35,
    },
    hiddenAbility: ability.levitate,
    signature : move.lusterPurge,
    lore: `A megaevolução expande suas asas dramaticamente, permitindo voos ainda mais rápidos através do céu.`,
}

// 382 Kyogre
pkmn.kyogre = {
    type: ["water"],
    bst: {
        hp: 100*1.3,
        atk: 100*1.3,
        def: 90*1.3,
        satk: 150*1.3,
        sdef: 140*1.3,
        spe: 90*1.3,
    },
    hiddenAbility: ability.drizzle,
    lore: `A reminder of the power that once carved the seas. Its ancient rivalry with Groudon lingers quietly, a balance written into the land and water.`
}

pkmn.kyogrePrimal = {
    type: ["water"],
    bst: {
        hp: 100*1.4,
        atk: 150*1.4,
        def: 90*1.4,
        satk: 180*1.4,
        sdef: 160*1.4,
        spe: 90*1.4,
    },
    lore: `The oceans made visible, and the force that first shaped the seas across the world. Waves rise and storms gather at its will.`
}

// 383 Groudon
pkmn.groudon = {
    type: ["ground"],
    bst: {
        hp: 100*1.3,
        atk: 150*1.3,
        def: 140*1.3,
        satk: 100*1.3,
        sdef: 90*1.3,
        spe: 90*1.3,
    },
    hiddenAbility: ability.drought,
    lore: `A reminder of the power that once carved the lands. Its ancient rivalry with Kyogre lingers quietly, a balance written into the land and water.`

}

pkmn.groudonPrimal = {
    type: ["ground","fire"],
    bst: {
        hp: 100*1.4,
        atk: 180*1.4,
        def: 160*1.4,
        satk: 150*1.4,
        sdef: 90*1.4,
        spe: 90*1.4,
    },
    lore: `The continents made whole, and the force that first shaped the land across the world. Mountains rise and deserts stretch at its will.`
}

// 384 Rayquaza
pkmn.rayquaza = {
    type: ["dragon","flying"],
    bst: {
        hp: 105*1.3,
        atk: 150*1.3,
        def: 90*1*1.3,
        satk: 150*1.3,
        sdef: 90*1.3,
        spe: 95*1.3,
    },
    lore: `The force that watches over the world from above. It tempers the chaos of the seas and the land, acting as a mediator between Kyogre and Groudon. The winds and currents obey its passage, and it stands as guardian of the skies.`
}

pkmn.megaRayquaza = {
    type: ["dragon","flying"],
    bst: {
        hp: 105*1.4,
        atk: 200*1.4,
        def: 120*1.4,
        satk: 200*1.4,
        sdef: 120*1.4,
        spe: 115*1.4,
    },
    lore: `Ascending the atmosphere, its reach extending into the upper skies. Protecting not only the world below but the space above, guarding against threats from beyond.`
}

// 385 Jirachi
pkmn.jirachi = {
    type: ["steel","psychic"],
    bst: {
        hp: 100*1.5,
        atk: 125*1.5,
        def: 100*1.5,
        satk: 125*1.5,
        sdef: 100*1.5,
        spe: 100*1.5,
    },
    hiddenAbility: ability.sereneGrace,
    signature : move.doomDesire,
    lore: `The embodiment of wishing, awakening only once in a thousand years. In those brief moments, it listens to the desires carried in the hearts of others, and its power brings those wishes into reality.`
}

// 386 Deoxys
pkmn.deoxys = {
    type: ["psychic"],
    bst: {
        hp: 50*1.5,
        atk: 150*1.5,
        def: 50*1.5,
        satk: 150*1.5,
        sdef: 50*1.5,
        spe: 150*1.5,
    },
    lore: `Formado a partir de um vírus espacial alterado por um raio laser, sua estrutura genética é completamente diferente de qualquer Pokémon da Terra.`,
}

pkmn.deoxysAttack = {
    type: ["psychic"],
    bst: {
        hp: 50*1.5,
        atk: 200*1.5,
        def: 20,
        satk: 200*1.5,
        sdef: 20,
        spe: 150*1.5,
    },
    lore: `Nesta forma, seus braços se tornam mais longos e finos, otimizados inteiramente para ataques ofensivos poderosos.`,
}

pkmn.deoxysDefense = {
    type: ["psychic"],
    bst: {
        hp: 50*1.5,
        atk: 70,
        def: 200*1.5,
        satk: 70,
        sdef: 200*1.5,
        spe: 90*1.5,
    },
    lore: `Nesta forma, seu corpo se torna mais robusto e protegido, priorizando resistência sobre velocidade ou força de ataque.`,
}

pkmn.deoxysSpeed = {
    type: ["psychic"],
    bst: {
        hp: 50,
        atk: 115*1.5,
        def: 90,
        satk: 115*1.5,
        sdef: 90,
        spe: 200*1.5,
    },
    lore: `Nesta forma, seu corpo se torna mais esguio e leve, permitindo que se mova a velocidades extraordinárias.`,
}

// 387 Turtwig → Grotle → Torterra
pkmn.turtwig = {
    type: ["grass"],
    bst: {
        hp: 55,
        atk: 68,
        def: 64,
        satk: 45,
        sdef: 55,
        spe: 31,
    },
    evolve: function() { return { 1: { pkmn: pkmn.grotle, level: evolutionLevel1 } } },
    lore: `Ele realiza fotossíntese com o seu corpo, produzindo oxigênio. A folha em sua cabeça murcha se ele estiver com sede.`
}

pkmn.grotle = {
    type: ["grass"],
    bst: {
        hp: 75,
        atk: 89,
        def: 85,
        satk: 55,
        sdef: 65,
        spe: 36,
    },
    evolve: function() { return { 1: { pkmn: pkmn.torterra, level: evolutionLevel2 } } },
    lore: `Ele carrega uma pequena floresta em suas costas, e outros Pokémon menores costumam descansar à sombra das árvores que crescem nela.`,
}

pkmn.torterra = {
    type: ["grass","ground"],
    bst: {
        hp: 95,
        atk: 109,
        def: 105,
        satk: 75,
        sdef: 85,
        spe: 56,
    },
    lore: `Um ecossistema inteiro floresce sobre suas costas, com árvores antigas tão grandes que pequenos Pokémon constroem ninhos nelas.`,
}

// 390 Chimchar → Monferno → Infernape
pkmn.chimchar = {
    type: ["fire"],
    bst: {
        hp: 44,
        atk: 58,
        def: 44,
        satk: 58,
        sdef: 44,
        spe: 61,
    },
    evolve: function() { return { 1: { pkmn: pkmn.monferno, level: evolutionLevel1 } } },
    hiddenAbility: ability.sheerForce,
    eggMove : move.blazeKick,
    lore: `A chama em sua cauda nunca se apaga enquanto ele estiver saudável, e ele esfrega gravetos secos usando o próprio fogo interno para gerar mais calor.`,
}

pkmn.monferno = {
    type: ["fire","fighting"],
    bst: {
        hp: 64,
        atk: 78,
        def: 52,
        satk: 78,
        sdef: 52,
        spe: 81,
    },
    evolve: function() { return { 1: { pkmn: pkmn.infernape, level: evolutionLevel2 } } },
    hiddenAbility: ability.sheerForce,
    eggMove : move.blazeKick,
    lore: `Ele usa a chama em sua cauda para lançar ataques de fogo enquanto salta ágilmente entre galhos de árvores, como um verdadeiro acrobata.`,
}

pkmn.infernape = {
    type: ["fire","fighting"],
    bst: {
        hp: 76,
        atk: 104,
        def: 71,
        satk: 104,
        sdef: 71,
        spe: 108,
    },
    hiddenAbility: ability.sheerForce,
    eggMove : move.blazeKick,
    lore: `A chama flamejante em sua cabeça reflete sua natureza feroz, e ele luta usando uma combinação de golpes de fogo e artes marciais.`,
}

// 393 Piplup → Prinplup → Empoleon
pkmn.piplup = {
    type: ["water"],
    bst: {
        hp: 53,
        atk: 51,
        def: 53,
        satk: 61,
        sdef: 56,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.prinplup, level: evolutionLevel1 } } },
    hiddenAbility: ability.supremeOverlord,
    lore: `Orgulhoso e teimoso, ele odeia receber ajuda de humanos, embora ainda não consiga nadar muito bem por conta própria.`,
}

pkmn.prinplup = {
    type: ["water"],
    bst: {
        hp: 64,
        atk: 66,
        def: 68,
        satk: 81,
        sdef: 76,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.empoleon, level: evolutionLevel2 } } },
    hiddenAbility: ability.supremeOverlord,
    lore: `Extremamente orgulhoso, ele prefere viver e caçar sozinho, e briga com outros de sua espécie que tentam se aproximar demais.`,
}

pkmn.empoleon = {
    type: ["water","steel"],
    bst: {
        hp: 84,
        atk: 86,
        def: 88,
        satk: 111,
        sdef: 101,
        spe: 60,
    },
    hiddenAbility: ability.supremeOverlord,
    lore: `Suas asas em forma de lâminas de aço podem cortar através de icebergs, e ele lidera com autoridade grupos de Piplup mais jovens.`,
}

// 396 Starly → Staravia → Staraptor
pkmn.starly = {
    type: ["normal","flying"],
    bst: {
        hp: 40,
        atk: 55,
        def: 30,
        satk: 30,
        sdef: 30,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.staravia, level: evolutionLevel1 } } },
    hiddenAbility: ability.reckless,
    signature : move.braveBird,
    lore: `Eles voam em grandes bandos para se proteger de predadores maiores, batendo as asas juntos para intimidar ameaças.`,
}

pkmn.staravia = {
    type: ["normal","flying"],
    bst: {
        hp: 55,
        atk: 75,
        def: 50,
        satk: 40,
        sdef: 40,
        spe: 80,
    },
    evolve: function() { return { 1: { pkmn: pkmn.staraptor, level: evolutionLevel2 } } },
    hiddenAbility: ability.reckless,
    signature : move.braveBird,
    lore: `Bandos rivais de Staravia frequentemente entram em conflito por território, criando brigas ruidosas que podem durar o dia todo.`,
}

pkmn.staraptor = {
    type: ["normal","flying"],
    bst: {
        hp: 85,
        atk: 120,
        def: 70,
        satk: 50,
        sdef: 60,
        spe: 100,
    },
    hiddenAbility: ability.reckless,
    signature : move.braveBird,
    lore: `Suas garras poderosas podem carregar uma presa do tamanho de um Bidoof adulto enquanto voa a grandes altitudes.`,
}

pkmn.megaStaraptor = {
    type: ["fighting","flying"],
    bst: {
        hp: 85*1.2,
        atk: 140*1.2,
        def: 100*1.2,
        satk: 60*1.2,
        sdef: 90*1.2,
        spe: 110*1.2,
    },
    lore: `A megaevolução aumenta drasticamente sua envergadura e força nas garras, tornando-o um predador aéreo ainda mais formidável.`,
}

// 399 Bidoof → Bibarel
pkmn.bidoof = {
    type: ["normal"],
    bst: {
        hp: 59,
        atk: 45,
        def: 40,
        satk: 35,
        sdef: 40,
        spe: 31,
    },
    evolve: function() { return { 1: { pkmn: pkmn.bibarel, level: evolutionLevel1 } } },
    hiddenAbility: ability.simple,
    eggMove : move.aquaStep,
    lore: `Seus dentes frontais nunca param de crescer, então ele precisa roer coisas constantemente para mantê-los em um tamanho gerenciável.`,
}

pkmn.bibarel = {
    type: ["normal","water"],
    bst: {
        hp: 79,
        atk: 85,
        def: 60,
        satk: 55,
        sdef: 60,
        spe: 71,
    },
    hiddenAbility: ability.simple,
    eggMove : move.aquaStep,
    lore: `Ele constrói represas em rios usando troncos que corta com seus dentes afiados, criando lagoas onde outros Pokémon aquáticos podem viver.`,
}

// 401 Kricketot → Kricketune
pkmn.kricketot = {
    type: ["bug"],
    bst: {
        hp: 37,
        atk: 25,
        def: 41,
        satk: 25,
        sdef: 41,
        spe: 25,
    },
    evolve: function() { return { 1: { pkmn: pkmn.kricketune, level: evolutionLevel1 } } },
    hiddenAbility: ability.metalhead,
    eggMove : move.megahorn,
    lore: `O som que produz batendo as antenas lembra o canto de grilos, e muda de tom dependendo da temperatura do ambiente.`,
}

pkmn.kricketune = {
    type: ["bug"],
    bst: {
        hp: 77,
        atk: 85,
        def: 51,
        satk: 55,
        sdef: 51,
        spe: 65,
    },
    hiddenAbility: ability.metalhead,
    eggMove : move.megahorn,
    lore: `Ele é considerado um verdadeiro músico entre os Pokémon, compondo melodias complexas ao esfregar suas antenas como se fossem um instrumento.`,
}

// 403 Shinx → Luxio → Luxray
pkmn.shinx = {
    type: ["electric"],
    bst: {
        hp: 45,
        atk: 65,
        def: 34,
        satk: 40,
        sdef: 34,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.luxio, level: evolutionLevel1 } } },
    hiddenAbility: ability.guts,
    signature : move.charge,
    lore: `Seu corpo emite um brilho fraco quando está assustado, e a intensidade da luz aumenta proporcionalmente ao seu nível de medo.`,
}

pkmn.luxio = {
    type: ["electric"],
    bst: {
        hp: 60,
        atk: 85,
        def: 49,
        satk: 60,
        sdef: 49,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.luxray, level: evolutionLevel2 } } },
    hiddenAbility: ability.guts,
    signature : move.charge,
    lore: `As garras em suas quatro patas acumulam eletricidade, e ele a descarrega ao arranhar o oponente durante um combate.`,
}

pkmn.luxray = {
    type: ["electric"],
    bst: {
        hp: 80,
        atk: 120,
        def: 79,
        satk: 95,
        sdef: 79,
        spe: 70,
    },
    hiddenAbility: ability.guts,
    signature : move.charge,
    lore: `Seus olhos conseguem enxergar através de paredes e do solo, permitindo que ele localize presas escondidas a longas distâncias.`,
}

// 406 Budew → Roselia → Roserade
pkmn.budew = {
    type: ["grass","poison"],
    bst: {
        hp: 40,
        atk: 30,
        def: 35,
        satk: 50,
        sdef: 70,
        spe: 55,
    },
    hiddenAbility: ability.grassySurge,
    evolve: function() { return { 1: { pkmn: pkmn.roselia, level: evolutionLevel1 } } },
    lore: `Ele mantém a flor em sua cabeça fechada durante o frio, e a abre apenas quando sente que a primavera está próxima.`,
}

pkmn.roselia = {
    type: ["grass","poison"],
    bst: {
        hp: 50,
        atk: 60,
        def: 45,
        satk: 100,
        sdef: 80,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.roserade, item: item.shinyStone } } },
    hiddenAbility: ability.grassySurge,
    lore: `As flores em suas mãos liberam um aroma que pode acalmar ou, se necessário, espinhos que injetam veneno potente em atacantes.`,
}

pkmn.roserade = {
    type: ["grass","poison"],
    bst: {
        hp: 60,
        atk: 70,
        def: 65,
        satk: 125,
        sdef: 105,
        spe: 90,
    },
    hiddenAbility: ability.grassySurge,
    lore: `Suas duas mãos em forma de flor contêm venenos diferentes: uma pode causar a morte instantânea, a outra provoca dor lenta e persistente.`,
}

// 408 Cranidos → Rampardos
pkmn.cranidos = {
    type: ["rock"],
    bst: {
        hp: 67,
        atk: 125,
        def: 40,
        satk: 30,
        sdef: 30,
        spe: 58,
    },
    evolve: function() { return { 1: { pkmn: pkmn.rampardos, level: evolutionLevel2 } } },
    hiddenAbility: ability.sheerForce,
    lore: `Vivendo há cem milhões de anos, seu crânio extremamente duro era usado para investidas poderosas contra rivais e presas.`,
}

pkmn.rampardos = {
    type: ["rock"],
    bst: {
        hp: 97,
        atk: 165,
        def: 60,
        satk: 65,
        sdef: 50,
        spe: 58,
    },
    hiddenAbility: ability.sheerForce,
    lore: `Seu crânio é tão denso que ele pode atravessar troncos de árvores grossas sem sentir dor, embora às vezes esqueça o que estava fazendo.`,
}

// 410 Shieldon → Bastiodon
pkmn.shieldon = {
    type: ["rock","steel"],
    bst: {
        hp: 30,
        atk: 42,
        def: 118,
        satk: 42,
        sdef: 88,
        spe: 30,
    },
    evolve: function() { return { 1: { pkmn: pkmn.bastiodon, level: evolutionLevel2 } } },
    hiddenAbility: ability.metalhead,
    eggMove: ability.rockWrecker,
    lore: `Seu rosto era protegido por uma placa óssea extremamente resistente, usada para se defender de predadores nas florestas antigas.`,
}

pkmn.bastiodon = {
    type: ["rock","steel"],
    bst: {
        hp: 60,
        atk: 52,
        def: 168,
        satk: 47,
        sdef: 138,
        spe: 30,
    },
    hiddenAbility: ability.metalhead,
    eggMove: ability.rockWrecker,
    lore: `Grupos deles formavam uma parede viva usando seus rostos blindados para proteger seus filhotes de predadores maiores.`,
}

// 412 Burmy → Wormadam / Mothim
pkmn.burmy = {
    rename: `burmy Plant`,
    type: ["bug"],
    bst: {
        hp: 40,
        atk: 29,
        def: 45,
        satk: 29,
        sdef: 45,
        spe: 36,
    },
    evolve: function() {
        return {
            1: { pkmn: pkmn.wormadam, item: item.leafStone },
            2: { pkmn: pkmn.mothim, item: item.shinyStone }
        } 
    },
    lore: `Ele constrói uma casca protetora usando materiais do ambiente onde vive, seja galhos, areia ou até lixo, camuflando-se perfeitamente.`,
}

pkmn.burmySandy = {
    type: ["bug"],
    bst: {
        hp: 40,
        atk: 29,
        def: 45,
        satk: 29,
        sdef: 45,
        spe: 36,
    },
    evolve: function() {
        return {
            1: { pkmn: pkmn.wormadamSandy, item: item.oddRock },
            2: { pkmn: pkmn.mothim, item: item.shinyStone }
        } 
    },
    eggMove: move.mudSport,
}

pkmn.burmyTrash = {
    type: ["bug"],
    bst: {
        hp: 40,
        atk: 29,
        def: 45,
        satk: 29,
        sdef: 45,
        spe: 36,
    },
    evolve: function() {
        return {
            1: { pkmn: pkmn.wormadamTrash, item: item.metalCoat },
            2: { pkmn: pkmn.mothim, item: item.shinyStone }
        } 
    },
}

pkmn.wormadam = {
    rename: `wormadam Plant`,
    type: ["bug","grass"],
    bst: {
        hp: 60,
        atk: 79,
        def: 105,
        satk: 59,
        sdef: 85,
        spe: 36,
    },
    lore: `Sua casca permanece a mesma desde quando era Burmy, refletindo o ambiente onde ela evoluiu pela última vez.`,
}

pkmn.wormadamSandy = {
    type: ["bug","ground"],
    bst: {
        hp: 60,
        atk: 59,
        def: 85,
        satk: 79,
        sdef: 105,
        spe: 36,
    },
    eggMove: move.mudSport,
    lore: `Esta forma constrói sua casca usando areia e terra, tornando-se mais resistente a ataques físicos do que as outras variantes.`,
}

pkmn.wormadamTrash = {
    type: ["bug","steel"],
    bst: {
        hp: 60,
        atk: 69,
        def: 95,
        satk: 69,
        sdef: 95,
        spe: 36,
    },
    lore: `Esta forma constrói sua casca usando restos metálicos e lixo, adaptando-se a ambientes urbanos poluídos.`,
}

pkmn.mothim = {
    type: ["bug","flying"],
    bst: {
        hp: 70,
        atk: 94,
        def: 50,
        satk: 94,
        sdef: 50,
        spe: 66,
    },
    hiddenAbility: ability.tintedLens,
    lore: `Ele voa por longas distâncias à noite em busca de mel, e é atraído por luzes brilhantes em áreas urbanas.`,
}

// 415 Combee → Vespiquen
pkmn.combee = {
    type: ["bug","flying"],
    bst: {
        hp: 30,
        atk: 30,
        def: 42,
        satk: 30,
        sdef: 42,
        spe: 70,
    },
    evolve: function() { return { 1: { pkmn: pkmn.vespiquen, level: evolutionLevel2 } } },
    hiddenAbility: ability.chrysilate,
    signature : move.attackOrder,
    lore: `Três deles se combinam para formar uma única unidade, trabalhando juntos coletando pólen e produzindo mel doce para sua colmeia.`,
}

pkmn.vespiquen = {
    type: ["bug","flying"],
    bst: {
        hp: 70,
        atk: 80,
        def: 102,
        satk: 80,
        sdef: 102,
        spe: 40,
    },
    hiddenAbility: ability.chrysilate,
    signature : move.attackOrder,
    lore: `Ela comanda um exército de Combee, e o mel especial que produz é usado para alimentar e proteger toda a colônia.`,
}

// 417 Pachirisu
pkmn.pachirisu = {
    type: ["electric"],
    bst: {
        hp: 60,
        atk: 45,
        def: 70,
        satk: 45,
        sdef: 90,
        spe: 95,
    },
    hiddenAbility: ability.simple,
    eggMove : move.auraWheel,
    lore: `Ele armazena eletricidade em bolsas nas bochechas, e a energia esfria muito quando ele dorme, aquecendo novamente ao acordar.`,
}

// 418 Buizel → Floatzel
pkmn.buizel = {
    type: ["water"],
    bst: {
        hp: 55,
        atk: 65,
        def: 35,
        satk: 60,
        sdef: 30,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.floatzel, level: evolutionLevel2 } } },
    hiddenAbility: ability.moistPelt,
    signature : move.tripleDive,
    lore: `As bolsas cheias de ar ao redor de seu pescoço o ajudam a flutuar, e ele nada girando o corpo como uma hélice.`,
}

pkmn.floatzel = {
    type: ["water"],
    bst: {
        hp: 85,
        atk: 105,
        def: 55,
        satk: 85,
        sdef: 50,
        spe: 115,
    },
    hiddenAbility: ability.moistPelt,
    signature : move.tripleDive,
    lore: `Seu rabo flutuante é usado como boia salva-vidas, e diz-se que ele já resgatou pessoas se afogando em rios com correnteza forte.`,
}

// 420 Cherubi → Cherrim
pkmn.cherubi = {
    type: ["grass"],
    bst: {
        hp: 45,
        atk: 35,
        def: 45,
        satk: 62,
        sdef: 53,
        spe: 35,
    },
    evolve: function() { return { 1: { pkmn: pkmn.cherrim, level: evolutionLevel2 } } },
    hiddenAbility: ability.drought,
    eggMove : move.frenzyPlant,
    lore: `A pequena esfera vermelha em sua cabeça acumula nutrientes que serão usados durante sua evolução, ficando maior conforme absorve luz solar.`,
}

pkmn.cherrim = {
    type: ["grass"],
    bst: {
        hp: 70,
        atk: 60,
        def: 70,
        satk: 87,
        sdef: 78,
        spe: 85,
    },
    hiddenAbility: ability.drought,
    eggMove : move.frenzyPlant,
    lore: `Suas pétalas permanecem fechadas em dias nublados, mas se abrem completamente sob luz solar direta, revelando uma forma radiante.`,
}

pkmn.cherrimSunshine = {
    type: ["grass"],
    bst: {
        hp: 70,
        atk: 90,
        def: 70,
        satk: 87,
        sdef: 117,
        spe: 85,
    },
    hiddenAbility: ability.drought,
    eggMove : move.frenzyPlant,
    lore: `Sob sol forte, suas pétalas se abrem completamente, e ela dança suavemente enquanto absorve energia solar máxima.`,
}

// 422 Shellos → Gastrodon
pkmn.shellos = {
    rename: `shellos West`,
    type: ["water"],
    bst: {
        hp: 76,
        atk: 48,
        def: 48,
        satk: 57,
        sdef: 62,
        spe: 34,
    },
    evolve: function() { return { 1: { pkmn: pkmn.gastrodon, level: evolutionLevel2 } } },
    hiddenAbility: ability.sandForce,
    lore: `Sua aparência varia dependendo da costa onde vive, um lado do mar produzindo uma variante e o outro lado, outra completamente diferente.`,
}

pkmn.shellosEast = {
    rename: `shellosEast`,
    type: ["water"],
    bst: {
        hp: 76,
        atk: 48,
        def: 48,
        satk: 57,
        sdef: 62,
        spe: 34,
    },
    evolve: function() { return { 1: { pkmn: pkmn.gastrodonEast, level: evolutionLevel2 } } },
    hiddenAbility: ability.gooey,
    lore: `Esta variante costeira desenvolveu um corpo mais viscoso e resistente, adaptado às correntes mais fortes do lado leste.`,
}

pkmn.gastrodon = {
    rename: `gastrodonWest`,
    type: ["water","ground"],
    bst: {
        hp: 111,
        atk: 83,
        def: 68,
        satk: 92,
        sdef: 82,
        spe: 39,
    },
    hiddenAbility: ability.sandForce,
    lore: `Seu corpo mole pode se regenerar mesmo se um pedaço for cortado, e ele se alimenta principalmente de pequenos organismos na lama.`,
}

pkmn.gastrodonEast = {
    type: ["water","ground"],
    bst: {
        hp: 111,
        atk: 83,
        def: 68,
        satk: 92,
        sdef: 82,
        spe: 39,
    },
    hiddenAbility: ability.gooey,
}

// 424 Ambipom

// 425 Drifloon → Drifblim
pkmn.drifloon = {
    type: ["ghost","flying"],
    bst: {
        hp: 90,
        atk: 50,
        def: 34,
        satk: 60,
        sdef: 44,
        spe: 70,
    },
    evolve: function() { return { 1: { pkmn: pkmn.drifblim, level: evolutionLevel2 } } },
    hiddenAbility: ability.windRider,
    lore: `Formado a partir de almas perdidas, diz-se que crianças que seguram seu corpo balão podem ser levadas para o mundo dos espíritos.`,
}

pkmn.drifblim = {
    type: ["ghost","flying"],
    bst: {
        hp: 150,
        atk: 80,
        def: 44,
        satk: 90,
        sdef: 54,
        spe: 80,
    },
    hiddenAbility: ability.windRider,
    lore: `Ele flutua ao sabor do vento, carregando pessoas e Pokémon em seu corpo gasoso, embora sua rota nunca seja completamente previsível.`,
}

// 427 Buneary → Lopunny
pkmn.buneary = {
    type: ["normal"],
    bst: {
        hp: 55,
        atk: 66,
        def: 44,
        satk: 44,
        sdef: 56,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.lopunny, level: evolutionLevel2 } } },
    hiddenAbility: ability.scrappy,
    lore: `Ela enrola as orelhas com força quando está nervosa, e as estala como um chicote quando decide atacar de repente.`,
}

pkmn.lopunny = {
    type: ["normal"],
    bst: {
        hp: 65,
        atk: 76,
        def: 84,
        satk: 54,
        sdef: 96,
        spe: 105,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaLopunny, item: item.lopunnite } } },
    hiddenAbility: ability.scrappy,
    eggMove: move.hiJumpKick,
    lore: `Suas orelhas longas e macias são extremamente sensíveis, e ela as mantém sempre limpas e bem cuidadas com grande cuidado.`,
}

pkmn.megaLopunny = {
    type: ["normal","fighting"],
    bst: {
        hp: 80*1.2,
        atk: 136*1.2,
        def: 94*1.2,
        satk: 54*1.2,
        sdef: 96*1.2,
        spe: 135*1.2,
    },
    hiddenAbility: ability.scrappy,
    eggMove: move.hiJumpKick,
    signature : move.crushGrip,
    lore: `A energia da Mega Evolução liberou seu instinto selvagem. Ele se torna extremamente agressivo e combate com uma técnica de luta implacável, utilizando suas pernas poderosas para desferir chutes que podem pulverizar rochas. A pelagem que cresce em seu corpo atua como uma proteção contra o impacto de seus próprios golpes destrutivos.`,
}

// 429 Mismagius
// 430 Honchkrow

// 431 Glameow → Purugly
pkmn.glameow = {
    type: ["normal"],
    bst: {
        hp: 49,
        atk: 55,
        def: 42,
        satk: 42,
        sdef: 37,
        spe: 85,
    },
    evolve: function() { return { 1: { pkmn: pkmn.purugly, level: evolutionLevel2 } } },
    hiddenAbility: ability.thickFat,
    lore: `Sua cauda em forma de gancho é usada tanto para se equilibrar quanto para desferir golpes rápidos e precisos contra oponentes.`,
}

pkmn.purugly = {
    type: ["normal"],
    bst: {
        hp: 71,
        atk: 82,
        def: 64,
        satk: 64,
        sdef: 59,
        spe: 112,
    },
    hiddenAbility: ability.thickFat,
    lore: `Ela infla o próprio corpo para parecer maior e mais intimidadora, expulsando outros Pokémon de seu território sem hesitar.`,
}

// 433 Chingling

// 434 Stunky → Skuntank
pkmn.stunky = {
    type: ["poison","dark"],
    bst: {
        hp: 63,
        atk: 63,
        def: 47,
        satk: 41,
        sdef: 41,
        spe: 74,
    },
    evolve: function() { return { 1: { pkmn: pkmn.skuntank, level: evolutionLevel2 } } },
    lore: `O fluido fétido que ele libera de sua cauda pode ser sentido a mais de um quilômetro de distância, afastando praticamente qualquer predador.`,
}

pkmn.skuntank = {
    type: ["poison","dark"],
    bst: {
        hp: 103,
        atk: 93,
        def: 67,
        satk: 71,
        sdef: 61,
        spe: 84,
    },
    lore: `O odor que ele produz é tão forte que pode ser detectado a mais de seis quilômetros, e fica ainda pior se ele ficar irritado.`,
}

// 436 Bronzor → Bronzong
pkmn.bronzor = {
    type: ["steel","psychic"],
    bst: {
        hp: 57,
        atk: 24,
        def: 86,
        satk: 24,
        sdef: 86,
        spe: 23,
    },
    evolve: function() { return { 1: { pkmn: pkmn.bronzong, level: evolutionLevel2 } } },
    hiddenAbility: ability.levitate,
    lore: `Sua superfície espelhada já foi usada como espelho em tempos antigos, e diz-se que olhar para ele por muito tempo pode causar tontura.`,
}

pkmn.bronzong = {
    type: ["steel","psychic"],
    bst: {
        hp: 67,
        atk: 89,
        def: 116,
        satk: 79,
        sdef: 116,
        spe: 33,
    },
    hiddenAbility: ability.levitate,
    lore: `Em tempos antigos, ele era invocado por agricultores em rituais para trazer chuva durante longos períodos de seca.`,
}

// 438 Bonsly
// 439 Mime Jr.
// 440 Happiny

// 441 Chatot
pkmn.chatot = {
    type: ["normal","flying"],
    bst: {
        hp: 76,
        atk: 65,
        def: 45,
        satk: 92,
        sdef: 42,
        spe: 91,
    },
    signature : move.chatter,
    hiddenAbility: ability.cacophony,
    lore: `Ele consegue imitar praticamente qualquer som que ouve, incluindo a fala humana, embora nem sempre entenda o significado do que repete.`,
}

// 442 Spiritomb
pkmn.spiritomb = {
    type: ["ghost","dark"],
    bst: {
        hp: 50,
        atk: 92,
        def: 108,
        satk: 92,
        sdef: 108,
        spe: 35,
    },
    hiddenAbility: ability.powerOfAlchemy,
    lore: `Formado pela fusão de 108 espíritos selados em uma placa de granito há centenas de anos como punição por seus pecados.`,
}

// 443 Gible → Gabite → Garchomp
pkmn.gible = {
    type: ["dragon","ground"],
    bst: {
        hp: 58,
        atk: 70,
        def: 45,
        satk: 40,
        sdef: 45,
        spe: 42,
    },
    evolve: function() { return { 1: { pkmn: pkmn.gabite, level: evolutionLevel2 } } },
    hiddenAbility: ability.sandForce,
    eggMove: move.mudSport,
    lore: `Ele se esconde em cavernas e ataca qualquer coisa que passe por perto, mordendo com suas mandíbulas afiadas como se fossem uma armadilha viva.`,
}

pkmn.gabite = {
    type: ["dragon","ground"],
    bst: {
        hp: 68,
        atk: 90,
        def: 65,
        satk: 50,
        sdef: 55,
        spe: 82,
    },
    evolve: function() { return { 1: { pkmn: pkmn.garchomp, level: evolutionLevel3 } } },
    hiddenAbility: ability.sandForce,
    eggMove: move.mudSport,
    lore: `Ele adora colecionar pedras preciosas e gemas brilhantes, escondendo seu tesouro nas profundezas de sua caverna.`,
}

pkmn.garchomp = {
    type: ["dragon","ground"],
    bst: {
        hp: 108,
        atk: 130,
        def: 95,
        satk: 80,
        sdef: 85,
        spe: 102,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.megaGarchomp, item: item.garchompite }, 
          //2: { pkmn: pkmn.megaGarchompZ, item: item.garchompiteZ }
        } 
    },
    hiddenAbility: ability.sandForce,
    eggMove: move.mudSport,
    lore: `Suas asas em formato de jato permitem que ele voe a velocidades supersônicas, cortando o ar como um verdadeiro caça a jato.`,
}

pkmn.megaGarchomp = {
    type: ["dragon","ground"],
    bst: {
        hp: 108*1.2,
        atk: 170*1.2,
        def: 115*1.2,
        satk: 120*1.2,
        sdef: 95*1.2,
        spe: 92*1.2,
    },
    hiddenAbility: ability.sandForce,
    eggMove: move.mudSport,
    signature : move.roarOfTime,
    lore: `A energia da Mega Evolução fez com que os ossos de seus braços derretessem e se transformassem em foices gigantescas. Ele se torna brutal e cruel, atacando seus inimigos impiedosamente com essas novas lâminas.`,
}

/*pkmn.megaGarchompZ = {
    type: ["dragon"],
    bst: {
        hp: 108*1.2,
        atk: 130*1.2,
        def: 85*1.2,
        satk: 141*1.2,
        sdef: 85*1.2,
        spe: 151*1.2,
    }
}*/

// 446 Munchlax

// 447 Riolu → Lucario
pkmn.riolu = {
    type: ["fighting"],
    bst: {
        hp: 40,
        atk: 70,
        def: 40,
        satk: 35,
        sdef: 40,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.lucario, level: evolutionLevel2 } } },
    hiddenAbility: ability.adaptability,
    lore: `Ele se comunica através de ondas de aura que emite, capazes de transmitir emoções para aqueles que conseguem senti-las.`,
}

pkmn.lucario = {
    type: ["fighting","steel"],
    bst: {
        hp: 70,
        atk: 110,
        def: 70,
        satk: 115,
        sdef: 70,
        spe: 90,
    },
    evolve: function() { 
        return {
            1: { pkmn: pkmn.megaLucario, item: item.lucarionite },
            2: { pkmn: pkmn.megaLucarioZ, item: item.lucarioniteZ },
        } 
    },
    hiddenAbility: ability.adaptability,
    lore: `Ele consegue ler a aura de qualquer ser vivo, permitindo que enxergue pensamentos e sentimentos e até veja através de objetos sólidos.`,
}

pkmn.megaLucario = {
    type: ["fighting","steel"],
    bst: {
        hp: 80*1.2,
        atk: 155*1.2,
        def: 98*1.2,
        satk: 155*1.2,
        sdef: 70*1.2,
        spe: 137*1.2,
    },
    hiddenAbility: ability.adaptability,
    signature : move.thunderousKick,
    lore: `A energia da Mega Evolução liberou o poder latente de seu corpo. Ele se tornou impiedoso em batalha, com uma aura que se manifesta de forma tão intensa que chega a queimar suas próprias patas. A partir do momento em que a batalha começa, ele não mostra qualquer hesitação ou piedade para com seu adversário.`,
}

pkmn.megaLucarioZ = {
    type: ["fighting","steel"],
    bst: {
        hp: 80*1.2,
        atk: 135*1.2,
        def: 98*1.2,
        satk: 205*1.2,
        sdef: 70*1.2,
        spe: 207*1.2,
    },
    hiddenAbility: ability.adaptability,
    signature : move.dynamicPunch,
    lore: `Ao se cobrir inteiramente com sua aura, o Mega Lucario Z consegue desviar de todos os tipos de ataques, lutando como se estivesse dançando graciosamente. Seus punhos e canelas são endurecidos com energia de aço, permitindo que ele desferir golpes tão rápidos que surpreendem os adversários.`,
}

// 449 Hippopotas → Hippowdon
pkmn.hippopotas = {
    type: ["ground"],
    bst: {
        hp: 68,
        atk: 72,
        def: 78,
        satk: 38,
        sdef: 42,
        spe: 32,
    },
    evolve: function() { return { 1: { pkmn: pkmn.hippowdon, level: evolutionLevel2 } } },
    hiddenAbility: ability.sandStream,
    lore: `Ele vive em áreas desérticas e cobre o corpo com areia para se proteger do sol escaldante e se camuflar de predadores.`,
}

pkmn.hippowdon = {
    type: ["ground"],
    bst: {
        hp: 108,
        atk: 112,
        def: 118,
        satk: 68,
        sdef: 72,
        spe: 47,
    },
    hiddenAbility: ability.sandStream,
    lore: `Ele dispara jatos de areia de seus poros ao respirar, criando tempestades de areia capazes de enterrar aldeias inteiras.`,
}

// 451 Skorupi → Drapion
pkmn.skorupi = {
    type: ["poison","bug"],
    bst: {
        hp: 40,
        atk: 50,
        def: 90,
        satk: 30,
        sdef: 55,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.drapion, level: evolutionLevel3 } } },
    eggMove : move.acupressure,
    hiddenAbility: ability.merciless,
    lore: `Ele se enterra na areia e espera pacientemente, às vezes por dias, até que uma presa desavisada se aproxime o suficiente para atacar.`,
}

pkmn.drapion = {
    type: ["poison","dark"],
    bst: {
        hp: 70,
        atk: 90,
        def: 110,
        satk: 60,
        sdef: 75,
        spe: 95,
    },
    eggMove : move.acupressure,
    hiddenAbility: ability.merciless,
    lore: `Suas garras podem cortar através de rochas, e seu veneno é tão potente que uma única picada pode paralisar um animal grande.`,
}

// 453 Croagunk → Toxicroak
pkmn.croagunk = {
    type: ["poison","fighting"],
    bst: {
        hp: 48,
        atk: 61,
        def: 40,
        satk: 61,
        sdef: 40,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.toxicroak, level: evolutionLevel2 } } },
    signature : move.venoshock,
    lore: `As bolsas em suas bochechas contêm um veneno que ele usa para golpear inimigos desprevenidos com socos surpresa.`,
}

pkmn.toxicroak = {
    type: ["poison","fighting"],
    bst: {
        hp: 83,
        atk: 106,
        def: 65,
        satk: 86,
        sdef: 65,
        spe: 85,
    },
    signature : move.venoshock,
    lore: `As garras venenosas em suas mãos podem perfurar até rochas, e ele as usa em uma sequência de golpes rápidos e mortais.`,
}

// 455 Carnivine
pkmn.carnivine = {
    type: ["grass"],
    bst: {
        hp: 74,
        atk: 100,
        def: 72,
        satk: 100,
        sdef: 72,
        spe: 46,
    },
    signature : move.reckless,
    eggMove : move.frenzyPlant,
    lore: `Ele se pendura de árvores usando sua cauda e espera pacientemente, atraindo presas com um aroma doce antes de prendê-las em sua boca.`,
}

// 456 Finneon → Lumineon
pkmn.finneon = {
    type: ["water"],
    bst: {
        hp: 49,
        atk: 49,
        def: 56,
        satk: 49,
        sdef: 61,
        spe: 66,
    },
    evolve: function() { return { 1: { pkmn: pkmn.lumineon, level: evolutionLevel2 } } },
    hiddenAbility: ability.swiftSwim,
    lore: `As manchas em suas nadadeiras brilham à noite, formando padrões que mudam de acordo com os ciclos da lua.`,
}

pkmn.lumineon = {
    type: ["water"],
    bst: {
        hp: 69,
        atk: 69,
        def: 76,
        satk: 69,
        sdef: 86,
        spe: 91,
    },
    hiddenAbility: ability.swiftSwim,
    lore: `Suas nadadeiras longas e translúcidas brilham como um farol, guiando outros Pokémon aquáticos em segurança através de águas escuras.`,
}

// 458 Mantyke

// 459 Snover → Abomasnow
pkmn.snover = {
    type: ["grass","ice"],
    bst: {
        hp: 60,
        atk: 62,
        def: 50,
        satk: 62,
        sdef: 60,
        spe: 40,
    },
    evolve: function() { return { 1: { pkmn: pkmn.abomasnow, level: evolutionLevel3 } } },
    hiddenAbility: ability.snowWarning,
    eggMove : move.freezeDry,
    lore: `A neve que se acumula em seus galhos nunca derrete completamente, mesmo durante os meses mais quentes do ano.`,
}

pkmn.abomasnow = {
    type: ["grass","ice"],
    bst: {
        hp: 90,
        atk: 92,
        def: 75,
        satk: 92,
        sdef: 85,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaAbomasnow, item: item.abomasite } } },
    hiddenAbility: ability.snowWarning,
    eggMove : move.freezeDry,
    lore: `Ele pode causar nevascas violentas apenas sacudindo o corpo, cobrindo áreas inteiras com uma camada espessa de neve fresca.`,
}

pkmn.megaAbomasnow = {
    type: ["grass","ice"],
    bst: {
        hp: 120*1.2,
        atk: 132*1.2,
        def: 105*1.2,
        satk: 132*1.2,
        sdef: 105*1.2,
        spe: 30*1.2,
    },
    hiddenAbility: ability.snowWarning,
    eggMove : move.freezeDry,
    signature : move.tripleAxel,
    lore: `A energia da Mega Evolução fez com que ele ficasse ainda maior e mais coberto de gelo. O gelo que cresce em suas costas é extremamente resistente, e ele é capaz de criar nevascas intensas, cobrindo vastas áreas com gelo e neve em questão de instantes.`,
}

// 461 Weavile
// 462 Magnezone
// 463 Lickylicky
// 464 Rhyperior
// 465 Tangrowth
// 466 Electivire
// 467 Magmortar
// 468 Togekiss
// 469 Yanmega
// 470 Leafeon
// 471 Glaceon
// 472 Gliscor
// 473 Mamoswine
// 474 Porygon-Z
// 475 Gallade
// 476 Probopass
// 477 Dusknoir
// 478 Froslass

// 479 Rotom
pkmn.rotom = {
    type: ["electric","ghost"],
    bst: {
        hp: 50,
        atk: 50,
        def: 77,
        satk: 95,
        sdef: 77,
        spe: 91,
    },
    hiddenAbility: ability.levitate,
    eggMove : move.conversion,
    lore: `Ele consegue entrar em aparelhos eletrônicos e alterar sua forma para corresponder ao dispositivo, causando travamentos e mau funcionamento.`,
}

pkmn.rotomHeat = {
    type: ["electric","fire"],
    bst: {
        hp: 50,
        atk: 65,
        def: 107,
        satk: 105,
        sdef: 107,
        spe: 86,
    },
    hiddenAbility: ability.pyrolate,
    lore: `Ao entrar em um forno, ele ganha a capacidade de gerar calor intenso, controlando chamas através do aparelho possuído.`,
}

pkmn.rotomWash = {
    type: ["electric","water"],
    bst: {
        hp: 50,
        atk: 65,
        def: 107,
        satk: 105,
        sdef: 107,
        spe: 86,
    },
    hiddenAbility: ability.hydrolate,
    lore: `Ao entrar em uma máquina de lavar, ele ganha controle sobre jatos de água poderosos disparados pelo aparelho.`,
}

pkmn.rotomFrost = {
    type: ["electric","ice"],
    bst: {
        hp: 50,
        atk: 65,
        def: 107,
        satk: 105,
        sdef: 107,
        spe: 86,
    },
    hiddenAbility: ability.glaciate,
    eggMove : move.freezeDry,
    lore: `Ao entrar em um freezer, ele ganha a capacidade de gerar frio intenso, controlando rajadas geladas através do aparelho.`,
}

pkmn.rotomFan = {
    type: ["electric","flying"],
    bst: {
        hp: 50,
        atk: 65,
        def: 107,
        satk: 105,
        sdef: 107,
        spe: 86,
    },
    hiddenAbility: ability.aerilate,
    lore: `Ao entrar em um ventilador, ele ganha controle sobre correntes de vento fortes geradas pelas pás giratórias do aparelho.`,
}

pkmn.rotomMow = {
    type: ["electric","grass"],
    bst: {
        hp: 50,
        atk: 65,
        def: 107,
        satk: 105,
        sdef: 107,
        spe: 86,
    },
    hiddenAbility: ability.verdify,
    lore: `Ao entrar em um cortador de grama, ele ganha a capacidade de cortar plantas com lâminas giratórias afiadas.`,
}

// 480 Uxie
pkmn.uxie = {
    type: ["psychic"],
    bst: {
        hp: 75*1.3,
        atk: 30*1.3,
        def: 120*1.3,
        satk: 75*1.3,
        sdef: 150*1.3,
        spe: 80*1.3,
    },
    hiddenAbility: ability.sinisterGuard,
    signature : move.mysticalPower,
    lore: `Nasceu para dar forma ao conhecimento. Quando o mundo ainda engatinhava, concedeu entendimento à humanidade, permitindo que o pensamento e a memória florescessem. Sua presença é capaz de silenciar os conflitos dos deuses do tempo e do espaço.`
}

// 481 Mesprit
pkmn.mesprit = {
    type: ["psychic"],
    bst: {
        hp: 100*1.3,
        atk: 105*1.3,
        def: 105*1.3,
        satk: 105*1.3,
        sdef: 105*1.3,
        spe: 120*1.3,
    },
    hiddenAbility: ability.levitate,
    signature : move.mysticalPower,
    lore: `Nasceu para dar forma às emoções. Quando o mundo ainda engatinhava, concedeu sentimentos à humanidade, permitindo que a alegria, a tristeza e a empatia florescessem. Sua presença apazigua a inquietação dos deuses do tempo e do espaço.`
}

// 482 Azelf
pkmn.azelf = {
    type: ["psychic"],
    bst: {
        hp: 75*1.3,
        atk: 100*1.3,
        def: 70*1.3,
        satk: 120*1.3,
        sdef: 70*1.3,
        spe: 155*1.3,
    },
    hiddenAbility: ability.prankster,
    signature : move.mysticalPower,
    lore: `Nasceu para dar forma à vontade. Quando o mundo ainda engatinhava, concedeu determinação à humanidade, permitindo que a ação, a escolha e a perseverança florescessem. Sua presença fortalece o espírito dos deuses do tempo e do espaço.`
}

// 483 Dialga
pkmn.dialga = {
    type: ["steel","dragon"],
    bst: {
        hp: 100*1.35,
        atk: 120*1.35,
        def: 120*1.35,
        satk: 150*1.35,
        sdef: 100*1.35,
        spe: 90*1.35,
    },
    hiddenAbility: ability.gooey,
    signature : move.roarOfTime,
    lore: `Limitado por um corpo que o próprio tempo é capaz de sustentar, ainda governa o passado e o futuro. Seu poder permanece selado, pois o mundo não suportaria contemplar a plenitude da eternidade encarnada.`
}

pkmn.dialgaOrigin = {
    type: ["steel","dragon"],
    bst: {
        hp: 100*1.35,
        atk: 100*1.35,
        def: 190*1.35,
        satk: 160*1.35,
        sdef: 120*1.35,
        spe: 90*1.35,
    },
    hiddenAbility: ability.gooey,
    signature : move.roarOfTime,
    lore: `Criado pelo Original quando o universo ainda aguardava seu primeiro momento, surgiu para governar o curso do tempo. Com o pulsar de seu coração, a corrente temporal começou a fluir; por sua vontade, passado e futuro foram divididos e postos em ordem. Sem sua existência, toda a vida estaria aprisionada em uma estagnação eterna.`
}

// 484 Palkia
pkmn.palkia = {
    type: ["water","dragon"],
    bst: {
        hp: 90*1.35,
        atk: 120*1.35,
        def: 100*1.35,
        satk: 150*1.35,
        sdef: 120*1.35,
        spe: 100*1.35,
    },
    signature : move.spacialRend,
    hiddenAbility: ability.supremeOverlord,
    lore: `Limitado por um corpo que o próprio espaço é capaz de sustentar, ainda governa a distância e a separação entre todas as coisas. Seu poder permanece selado, pois o mundo não suportaria o peso da vastidão infinita encarnada.`
}

pkmn.palkiaOrigin = {
    type: ["water","dragon"],
    bst: {
        hp: 90*1.35,
        atk: 100*1.35,
        def: 120*1.35,
        satk: 190*1.35,
        sdef: 160*1.35,
        spe: 100*1.35,
    },
    signature : move.spacialRend,
    hiddenAbility: ability.supremeOverlord,
    lore: `Criado pelo Original quando o universo ainda era desprovido de limites, surgiu para governar a extensão do espaço. Por sua existência, a vastidão foi concebida; por sua vontade, todas as distâncias passaram a existir. Sem sua presença, não haveria separação entre céu e terra, nem horizontes a alcançar, e a própria vida não teria por onde seguir seu caminho.`
}

// 485 Heatran
pkmn.heatran = {
    type: ["fire","steel"],
    bst: {
        hp: 91*1.3,
        atk: 90*1.3,
        def: 146*1.3,
        satk: 130*1.3,
        sdef: 106*1.3,
        spe: 77*1.3,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaHeatran, item: item.heatranite } } },
    hiddenAbility: ability.pyrolate,
    signature : move.magmaStorm,
    lore: `Nascido nas profundezas da terra, percorre mares de magma e cavernas abrasadoras. Seu intenso calor e pressão moldam vulcões por toda a região.`
}

pkmn.megaHeatran = {
    type: ["fire","steel"],
    bst: {
        hp: 120*1.35,
        atk: 120*1.35,
        def: 106*1.35,
        satk: 175*1.35,
        sdef: 201*1.35,
        spe: 67*1.35,
    },
    hiddenAbility: ability.pyrolate,
    signature : move.magmaStorm,
    lore: `Dizem que, quando libera todo o seu poder, sua temperatura corporal pode ultrapassar 1 milhão de graus Celsius. O calor avassalador que emana de seu corpo mantém os inimigos à distância.`
}

// 486 Regigigas
pkmn.regigigas = {
    type: ["normal"],
    bst: {
        hp: 200*1.3,
        atk: 160*1.3,
        def: 110*1.3,
        satk: 80*1.3,
        sdef: 110*1.3,
        spe: 50*1.3,
    },
    hiddenAbility: ability.normalize,
    signature : move.crushGrip,
    lore: `Com força incomparável, Regigigas arrastou os continentes para seus lugares usando cordas de pedra e gelo. Seu trabalho deu forma ao mundo e estabeleceu a ordem das terras. Após concluir essa tarefa monumental, mergulhou em um sono que durou eras.`
}

// 487 Giratina
pkmn.giratina = {
    type: ["ghost","dragon"],
    bst: {
        hp: 150*1.35,
        atk: 100*1.35,
        def: 120*1.35,
        satk: 100*1.35,
        sdef: 120*1.35,
        spe: 90*1.35,
    },
    hiddenAbility: ability.stamina,
    signature : move.shadowForce,
    lore: `Limitado por um corpo que a própria realidade é capaz de suportar, ainda governa a antimatéria e tudo aquilo que se opõe à criação. Seu poder permanece selado, pois o mundo não resistiria à força capaz de desfazer toda a existência e reduzir a criação ao nada.`
}

pkmn.giratinaOrigin = {
    type: ["ghost","dragon"],
    bst: {
        hp: 100*1.35,
        atk: 160*1.35,
        def: 100*1.35,
        satk: 150*1.35,
        sdef: 100*1.35,
        spe: 160*1.35,
    },
    hiddenAbility: ability.stamina,
    signature : move.shadowForce,
    lore: `Criado pelo Original quando as leis da criação foram estabelecidas, surgiu como sua contraposição. Investido com poder sobre a antimatéria, foi expulso por sua violência e relegado a um reino onde a lógica entra em colapso e conceitos como cima, baixo, distância e direção deixam de existir.`
}

// 488 Cresselia
pkmn.cresselia = {
    type: ["psychic"],
    bst: {
        hp: 150*1.3,
        atk: 70*1.3,
        def: 120*1.3,
        satk: 75*1.3,
        sdef: 130*1.3,
        spe: 85*1.3,
    },
    hiddenAbility: ability.magicGuard,
    signature : move.lunarDance,
    lore: `Encarnação da luz lunar. Desde tempos imemoriais, vela pelo sono e pelos sonhos, concedendo repouso tranquilo onde a escuridão se faz presente. Suas plumas dispersam os pesadelos gerados por :contentReference[oaicite:0]{index=0}, mantendo o delicado equilíbrio da noite que foi estabelecido sobre o mundo.`
}

// 489 Phione
pkmn.phione = {
    type: ["water"],
    bst: {
        hp: 80*1.5,
        atk: 80*1.5,
        def: 80*1.5,
        satk: 80*1.5,
        sdef: 80*1.5,
        spe: 80*1.5,
    },
    eggMove : move.tailGlow,
    lore: `Ele vive em mares tropicais quentes, flutuando suavemente com a bolsa em sua cabeça, embora não consiga se reproduzir naturalmente como outros Pokémon.`,
}

// 490 Manaphy
pkmn.manaphy = {
    type: ["water"],
    bst: {
        hp: 100*1.5,
        atk: 100*1.5,
        def: 100*1.5,
        satk: 100*1.5,
        sdef: 100*1.5,
        spe: 100*1.5,
    },
    lore: `The prince of the seas, the chosen of its kind, born with a bond that links all ocean life. It guides the creatures of the waters, preserving harmony beneath the waves.`,
    eggMove : move.tailGlow
}

// 491 Darkrai
pkmn.darkrai = {
    type: ["dark"],
    bst: {
        hp: 70*1.5,
        atk: 90*1.5,
        def: 90*1.5,
        satk: 155*1.5,
        sdef: 100*1.5,
        spe: 155*1.5,
    },
    hiddenAbility: ability.lightAbsorb,
    lore: `The embodiment of night shadow. From the earliest ages, it has been bound to dreams, drawing forth fear and unrest where its presence lingers. Nightmares follow in its wake, not by intent, but as a reflection of its nature.`
}

pkmn.megaDarkrai = {
    type: ["dark"],
    bst: {
        hp: 70*1.5,
        atk: 120*1.5,
        def: 150*1.5,
        satk: 165*1.5,
        sdef: 150*1.5,
        spe: 85*1.5,
    },
    hiddenAbility: ability.lightAbsorb,
    signature : move.fieryWrath,
    lore: `Ele cria um domínio de pesadelos do qual ninguém consegue escapar. Quanto mais profundo o medo de sua presa, mais poderoso Mega Darkrai se torna.`,
}

// 492 Shaymin
pkmn.shaymin = {
    type: ["grass"],
    bst: {
        hp: 100*1.5,
        atk: 100*1.5,
        def: 100*1.5,
        satk: 125*1.5,
        sdef: 125*1.5,
        spe: 100*1.5,
    },
    hiddenAbility: ability.verdify,
    lore: `Embodying gratitude and the renewal of life, It moves across barren lands, leaving fields of flowers in its wake and restoring the vitality of nature, bringing growth and bloom to places long abandoned.`
}

pkmn.shayminSky = {
    type: ["grass", "flying"],
    bst: {
        hp: 100*1.5,
        atk: 103*1.5,
        def: 75*1.5,
        satk: 170*1.5,
        sdef: 75*1.5,
        spe: 170*1.5,
    },
    hiddenAbility: ability.verdify,
    lore: `Embodying gratitude and the renewal of life, It moves across barren lands, leaving fields of flowers in its wake and restoring the vitality of nature, bringing growth and bloom to places long abandoned.`
}

// 493 Arceus
pkmn.arceus = {
    type : ["normal"],
    bst: {
    hp: 120*1.5,
    atk : 120*1.5,
    def: 120*1.5,
    satk : 120*1.5,
    sdef: 120*1.5,
    spe: 120*1.5,
    },
    signature : move.judgment,
    hiddenAbility: ability.thousandArms,
    lore: `Emerging from nothing, existence was created from its birth. Pillars that govern reality shaped by its will, and yet, only a vessel for the eye to see, and the mind to comprehend.`
}

/*

pkmn.arceusFighting = {
    type : ["fighting"],
    bst: {
    hp: 120*1.35,
    atk : 120*1.35,
    def: 120*1.35,
    satk : 120*1.35,
    sdef: 120*1.35,
    spe: 120*1.35,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusflying = {
    type : ["flying"],
    bst: {
    hp: 120*1.35,
    atk : 120*1.35,
    def: 120*1.35,
    satk : 120*1.35,
    sdef: 120*1.35,
    spe: 120*1.35,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusPoison = {
    type : ["poison"],
    bst: {
    hp: 120*1.35,
    atk : 120*1.35,
    def: 120*1.35,
    satk : 120*1.35,
    sdef: 120*1.35,
    spe: 120*1.35,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusGround = {
    type : ["ground"],
    bst: {
    hp: 120*1.35,
    atk : 120*1.35,
    def: 120*1.35,
    satk : 120*1.35,
    sdef: 120*1.35,
    spe: 120*1.35,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusRock = {
    type : ["rock"],
    bst: {
    hp: 120*1.35,
    atk : 120*1.35,
    def: 120*1.35,
    satk : 120*1.35,
    sdef: 120*1.35,
    spe: 120*1.35,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}


pkmn.arceusBug = {
    type : ["bug"],
    bst: {
    hp: 120*1.35,
    atk : 120*1.35,
    def: 120*1.35,
    satk : 120*1.35,
    sdef: 120*1.35,
    spe: 120*1.35,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}
    
pkmn.arceusGhost = {
    type : ["ghost"],
    bst: {
    hp: 120*1.35,
    atk : 120*1.35,
    def: 120*1.35,
    satk : 120*1.35,
    sdef: 120*1.35,
    spe: 120*1.35,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusSteel = {
    type : ["steel"],
    bst: {
    hp: 120*1.35,
    atk : 120*1.35,
    def: 120*1.35,
    satk : 120*1.35,
    sdef: 120*1.35,
    spe: 120*1.35,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusFire = {
    type : ["fire"],
    bst: {
    hp: 120*1.35,
    atk : 120*1.35,
    def: 120*1.35,
    satk : 120*1.35,
    sdef: 120*1.35,
    spe: 120*1.35,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusWater = {
    type : ["water"],
    bst: {
    hp: 120*1.35,
    atk : 120*1.35,
    def: 120*1.35,
    satk : 120*1.35,
    sdef: 120*1.35,
    spe: 120*1.35,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusGrass = {
    type : ["grass"],
    bst: {
    hp: 120*1.35,
    atk : 120*1.35,
    def: 120*1.35,
    satk : 120*1.35,
    sdef: 120*1.35,
    spe: 120*1.35,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusElectric = {
    type : ["electric"],
    bst: {
    hp: 120*1.35,
    atk : 120*1.35,
    def: 120*1.35,
    satk : 120*1.35,
    sdef: 120*1.35,
    spe: 120*1.35,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusPsychic = {
    type : ["psychic"],
    bst: {
    hp: 120*1.35,
    atk : 120*1.35,
    def: 120*1.35,
    satk : 120*1.35,
    sdef: 120*1.35,
    spe: 120*1.35,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusIce = {
    type : ["ice"],
    bst: {
    hp: 120*1.35,
    atk : 120*1.35,
    def: 120*1.35,
    satk : 120*1.35,
    sdef: 120*1.35,
    spe: 120*1.35,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusDragon = {
    type : ["dragon"],
    bst: {
    hp: 120*1.35,
    atk : 120*1.35,
    def: 120*1.35,
    satk : 120*1.35,
    sdef: 120*1.35,
    spe: 120*1.35,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusDark = {
    type : ["dark"],
    bst: {
    hp: 120*1.35,
    atk : 120*1.35,
    def: 120*1.35,
    satk : 120*1.35,
    sdef: 120*1.35,
    spe: 120*1.35,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

pkmn.arceusFairy = {
    type : ["fairy"],
    bst: {
    hp: 120*1.35,
    atk : 120*1.35,
    def: 120*1.35,
    satk : 120*1.35,
    sdef: 120*1.35,
    spe: 120*1.35,
    },
    signature : move.judgment,
    lore: `Emerging from nothing, existence was created from its birth, setting the threads of the universe in motion. The pillars that govern reality shaped by its thousand arms, and yet this is only a vessel, one that the mind can tolerate.`
}

*/

// 494 Victini
pkmn.victini = {
    type: ["psychic","fire"],
    bst: {
        hp: 100*1.5,
        atk: 100*1.5,
        def: 100*1.5,
        satk: 100*1.5,
        sdef: 100*1.5,
        spe: 100*1.5,
    },
    signature : move.vCreate,
    lore: `Ele compartilha energia infinita com treinadores que o capturam, e diz-se que qualquer batalha vencida ao seu lado se torna uma vitória lendária.`,
}

// 495 Snivy → Servine → Serperior
pkmn.snivy = {
    type: ["grass"],
    bst: {
        hp: 45,
        atk: 45,
        def: 55,
        satk: 45,
        sdef: 55,
        spe: 63,
    },
    evolve: function() { return { 1: { pkmn: pkmn.servine, level: evolutionLevel1 } } },
    hiddenAbility: ability.contrary,
    lore: `Ele usa fotossíntese para gerar energia, e fica extremamente calmo e ágil sob luz solar direta.`,
}

pkmn.servine = {
    type: ["grass"],
    bst: {
        hp: 60,
        atk: 60,
        def: 75,
        satk: 60,
        sdef: 75,
        spe: 83,
    },
    evolve: function() { return { 1: { pkmn: pkmn.serperior, level: evolutionLevel2 } } },
    hiddenAbility: ability.contrary,
    lore: `Chicotes vegetais em seu corpo podem repelir ataques com facilidade, e ele se move pela floresta com elegância silenciosa.`,
}

pkmn.serperior = {
    type: ["grass"],
    bst: {
        hp: 75,
        atk: 70,
        def: 95,
        satk: 75,
        sdef: 95,
        spe: 113,
    },
    hiddenAbility: ability.contrary,
    lore: `Ele controla o próprio corpo de forma tão precisa que consegue permanecer completamente imóvel enquanto observa os arredores com olhar dominante.`,
}

// 498 Tepig → Pignite → Emboar
pkmn.tepig = {
    type: ["fire"],
    bst: {
        hp: 65,
        atk: 63,
        def: 45,
        satk: 45,
        sdef: 45,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.pignite, level: evolutionLevel1 } } },
    hiddenAbility: ability.fieryPelt,
    signature : move.heatCrash,
    lore: `Ele solta fogo pelo nariz quando espirra, e a chama fica mais forte conforme sua energia interna aumenta.`,
}

pkmn.pignite = {
    type: ["fire","fighting"],
    bst: {
        hp: 90,
        atk: 93,
        def: 55,
        satk: 70,
        sdef: 55,
        spe: 55,
    },
    evolve: function() { return { 1: { pkmn: pkmn.emboar, level: evolutionLevel2 } } },
    hiddenAbility: ability.fieryPelt,
    signature : move.heatCrash,
    lore: `As chamas em seu corpo ficam mais intensas quando ele está animado, e ele soca com força usando punhos flamejantes.`,
}

pkmn.emboar = {
    type: ["fire","fighting"],
    bst: {
        hp: 110,
        atk: 123,
        def: 65,
        satk: 100,
        sdef: 65,
        spe: 65,
    },
    hiddenAbility: ability.fieryPelt,
    signature : move.heatCrash,
    lore: `Ele é gentil com Pokémon mais fracos, mas mostra fúria total contra oponentes fortes, socando com fogo intenso vindo do estômago.`,
}

//Sem pedra
pkmn.megaEmboar = {
    type: ["fire","fighting"],
    bst: {
        hp: 110*1.2,
        atk: 148*1.2,
        def: 75*1.2,
        satk: 110*1.2,
        sdef: 110*1.2,
        spe: 75*1.2,
    },
    hiddenAbility: ability.fieryPelt,
    signature : move.heatCrash,
    lore: `Empunhando uma chama ardente em forma de lança serpentina, ele avança para resgatar seus aliados em perigo.`,
}

// 501 Oshawott → Dewott → Samurott
pkmn.oshawott = {
    type: ["water"],
    bst: {
        hp: 55,
        atk: 55,
        def: 45,
        satk: 63,
        sdef: 45,
        spe: 45,
    },
    evolve: function() { return { 1: { pkmn: pkmn.dewott, level: evolutionLevel1 } } },
    hiddenAbility: ability.iaido,
    signature : move.razorShell,
    lore: `A concha em sua barriga funciona como uma espada, usada tanto para lutar quanto para cortar frutas duras.`,
}

pkmn.dewott = {
    type: ["water"],
    bst: {
        hp: 75,
        atk: 75,
        def: 60,
        satk: 83,
        sdef: 60,
        spe: 60,
    },
    evolve: function() { return { 1: { pkmn: pkmn.samurott, level: evolutionLevel2 } } },
    hiddenAbility: ability.iaido,
    signature : move.razorShell,
    lore: `Ele carrega duas conchas como se fossem espadas gêmeas, praticando técnicas de combate refinadas diariamente.`,
}

pkmn.samurott = {
    type: ["water"],
    bst: {
        hp: 95,
        atk: 100,
        def: 85,
        satk: 108,
        sdef: 70,
        spe: 70,
    },
    hiddenAbility: ability.iaido,
    signature : move.razorShell,
    lore: `Sua armadura semelhante à de um samurai o torna extremamente disciplinado, e ele ataca com precisão letal usando a lâmina em seu queixo.`,
}

pkmn.hisuianSamurott = {
    type: ["water", "dark"],
    bst: {
        hp: 90,
        atk: 128,
        def: 80,
        satk: 80,
        sdef: 65,
        spe: 85,
    },
    hiddenAbility: ability.iaido,
    signature : move.razorShell,
    lore: `Uma forma antiga mais selvagem, com uma crina afiada que ele usa em combates diretos e brutais.`,
}

// 504 Patrat → Watchog
pkmn.patrat = {
  type: ["normal"],
  bst: {
    hp: 45,
    atk: 55,
    def: 39,
    satk: 35,
    sdef: 39,
    spe: 42,
  },
    evolve: function() { return { 1: { pkmn: pkmn.watchog, level: evolutionLevel1 } } },
    lore: `Ele fica de vigia usando a cauda para se equilibrar, memorizando tudo o que vê para relatar depois a seus companheiros.`,
}

pkmn.watchog = {
  type: ["normal"],
  bst: {
    hp: 60,
    atk: 85,
    def: 69,
    satk: 60,
    sdef: 69,
    spe: 77,
  },
    lore: `Os órgãos luminosos em seus olhos emitem luz forte o suficiente para paralisar inimigos de medo instantaneamente.`,
}

// 506 Lillipup → Herdier → Stoutland
pkmn.lillipup = {
  type: ["normal"],
  bst: {
    hp: 45,
    atk: 60,
    def: 45,
    satk: 25,
    sdef: 45,
    spe: 55,
  },
    evolve: function() { return { 1: { pkmn: pkmn.herdier, level: evolutionLevel1 } } },
    hiddenAbility: ability.intimidate,
    lore: `Seu pelo funciona como uma antena sensível, captando sons e cheiros de longe mesmo enquanto está dormindo.`,
}

pkmn.herdier = {
  type: ["normal"],
  bst: {
    hp: 85,
    atk: 80,
    def: 65,
    satk: 35,
    sdef: 65,
    spe: 70,
  },
    evolve: function() { return { 1: { pkmn: pkmn.stoutland, level: evolutionLevel2 } } },
    hiddenAbility: ability.intimidate,
    lore: `Seu pelo denso protege seu corpo como uma armadura, e ele é extremamente leal a quem cuida bem dele.`,
}

pkmn.stoutland = {
  type: ["normal"],
  bst: {
    hp: 85,
    atk: 110,
    def: 90,
    satk: 45,
    sdef: 90,
    spe: 80,
  },
    hiddenAbility: ability.intimidate,
    lore: `Seu bigode volumoso consegue detectar mudanças climáticas, e ele guia viajantes perdidos através de tempestades de neve.`,
}

// 509 Purrloin → Liepard
pkmn.purrloin = {
  type: ["dark"],
  bst: {
    hp: 41,
    atk: 50,
    def: 37,
    satk: 50,
    sdef: 37,
    spe: 66,
  },
    evolve: function() { return { 1: { pkmn: pkmn.liepard, level: evolutionLevel1 } } },
    hiddenAbility: ability.prankster,
    lore: `Ele finge ser fofo para baixar a guarda das pessoas antes de roubar seus pertences com movimentos rápidos e silenciosos.`,
}

pkmn.liepard = {
  type: ["dark"],
  bst: {
    hp: 64,
    atk: 88,
    def: 50,
    satk: 88,
    sdef: 50,
    spe: 106,
  },
    hiddenAbility: ability.prankster,
    lore: `Ele se move silenciosamente pela noite, atacando presas com garras afiadas antes que percebam sua presença.`,
}

// 511 Pansage → Simisage
pkmn.pansage = {
  type: ["grass"],
  bst: {
    hp: 50,
    atk: 53,
    def: 48,
    satk: 53,
    sdef: 48,
    spe: 64,
  },
    evolve: function() { return { 1: { pkmn: pkmn.simisage, item: item.leafStone /* o candy si lo usas */ } } },
    lore: `O broto em sua cabeça contém nutrientes que ele compartilha com Pokémon amigáveis, sendo extremamente generoso por natureza.`,
}

pkmn.simisage = {
  type: ["grass"],
  bst: {
    hp: 75,
    atk: 98,
    def: 63,
    satk: 98,
    sdef: 63,
    spe: 101,
  },
    lore: `Ele socorre outros Pokémon com galhos de plantas, e vive em grupos organizados nas copas das árvores mais altas.`,
}

// 513 Pansear → Simisear
pkmn.pansear = {
  type: ["fire"],
  bst: {
    hp: 50,
    atk: 53,
    def: 48,
    satk: 53,
    sdef: 48,
    spe: 64,
  },
    evolve: function() { return { 1: { pkmn: pkmn.simisear, item: item.fireStone } } },
    hiddenAbility: ability.scorch,
    eggMove : move.burnUp,
    lore: `O broto em sua cabeça atinge temperaturas altas quando ele está animado, e ele assa frutas silvestres antes de comê-las.`,
}

pkmn.simisear = {
  type: ["fire"],
  bst: {
    hp: 75,
    atk: 98,
    def: 63,
    satk: 98,
    sdef: 63,
    spe: 101,
  },
    hiddenAbility: ability.scorch,
    eggMove : move.burnUp,
    lore: `As chamas em seu topete podem assar comida instantaneamente, e ele prepara refeições para todo o grupo com essa habilidade.`,
}

// 515 Panpour → Simipour
pkmn.panpour = {
  type: ["water"],
  bst: {
    hp: 50,
    atk: 53,
    def: 48,
    satk: 53,
    sdef: 48,
    spe: 64,
  },
    evolve: function() { return { 1: { pkmn: pkmn.simipour, item: item.waterStone } } },
    hiddenAbility: ability.moistPelt,
    eggMove : move.snipeShot,
    lore: `A água armazenada em seu topete pode ser usada para regar plantas, e ele nunca deixa a vegetação ao redor secar.`,
}

pkmn.simipour = {
  type: ["water"],
  bst: {
    hp: 75,
    atk: 98,
    def: 63,
    satk: 98,
    sdef: 63,
    spe: 101,
  },
    hiddenAbility: ability.moistPelt,
    eggMove : move.snipeShot,
    lore: `Ele controla a água armazenada em seu topete com precisão, disparando jatos fortes o suficiente para cortar madeira.`,
}

// 517 Munna → Musharna
pkmn.munna = {
  type: ["psychic"],
  bst: {
    hp: 76,
    atk: 25,
    def: 45,
    satk: 67,
    sdef: 55,
    spe: 24,
  },
    evolve: function() { return { 1: { pkmn: pkmn.musharna, item: item.dawnStone /* o equivalente */ } } },
    hiddenAbility: ability.aromaVeil,
    eggMove : move.storedPower,
    lore: `Ele se alimenta de sonhos, flutuando silenciosamente até quartos onde pessoas dormem para absorver energia onírica.`,
}

pkmn.musharna = {
  type: ["psychic"],
  bst: {
    hp: 116,
    atk: 55,
    def: 85,
    satk: 107,
    sdef: 95,
    spe: 29,
  },
    hiddenAbility: ability.aromaVeil,
    eggMove : move.storedPower,
    lore: `A névoa rosada que exala pode fazer qualquer um adormecer instantaneamente, e ela se alimenta apenas de sonhos bons.`,
}

// 519 Pidove → Tranquill → Unfezant
pkmn.pidove = {
  type: ["normal","flying"],
  bst: {
    hp: 50,
    atk: 55,
    def: 50,
    satk: 36,
    sdef: 30,
    spe: 43,
  },
    evolve: function() { return { 1: { pkmn: pkmn.tranquill, level: evolutionLevel1 } } },
    hiddenAbility: ability.rivalry,
    lore: `Ele tem péssima memória, esquecendo facilmente onde está indo, mas seu senso de direção instintivo sempre o guia de volta ao ninho.`,
}

pkmn.tranquill = {
  type: ["normal","flying"],
  bst: {
    hp: 80,
    atk: 77,
    def: 62,
    satk: 50,
    sdef: 42,
    spe: 65,
  },
    evolve: function() { return { 1: { pkmn: pkmn.unfezant, level: evolutionLevel2 } } },
    hiddenAbility: ability.rivalry,
    lore: `Ele é usado como mensageiro por viajantes, sempre entregando cartas ao destino correto graças ao seu senso de orientação apurado.`,
}

pkmn.unfezant = {
  type: ["normal","flying"],
  bst: {
    hp: 80,
    atk: 115,
    def: 80,
    satk: 65,
    sdef: 55,
    spe: 93,
  },
    hiddenAbility: ability.rivalry,
    lore: `Machos exibem penas coloridas e vibrantes para impressionar fêmeas, enquanto fêmeas caçam com uma eficiência silenciosa impressionante.`,
}

// 522 Blitzle → Zebstrika
pkmn.blitzle = {
  type: ["electric"],
  bst: {
    hp: 45,
    atk: 60,
    def: 32,
    satk: 50,
    sdef: 32,
    spe: 76,
  },
    evolve: function() { return { 1: { pkmn: pkmn.zebstrika, level: evolutionLevel2 } } },
    hiddenAbility: ability.hyperconductor,
    lore: `As listras em seu corpo brilham quando ele gera eletricidade, e ele se comunica com outros através de padrões de luz.`,
}

pkmn.zebstrika = {
  type: ["electric"],
  bst: {
    hp: 75,
    atk: 100,
    def: 63,
    satk: 80,
    sdef: 63,
    spe: 116,
  },
    hiddenAbility: ability.hyperconductor,
    lore: `Ele corre tão rápido que cria trovões visíveis atrás de si, e sua crina se acende com energia elétrica em pleno galope.`,
}

// 524 Roggenrola → Boldore → Gigalith
pkmn.roggenrola = {
  type: ["rock"],
  bst: {
    hp: 55,
    atk: 75,
    def: 85,
    satk: 35,
    sdef: 35,
    spe: 15,
  },
    evolve: function() { return { 1: { pkmn: pkmn.boldore, level: evolutionLevel2 } } },
    hiddenAbility: ability.sandForce,
    eggMove : move.rockWrecker,
    lore: `O núcleo duro dentro de seu corpo é mais resistente que qualquer rocha comum, formado sob imensa pressão subterrânea.`,
}

pkmn.boldore = {
  type: ["rock"],
  bst: {
    hp: 80,
    atk: 105,
    def: 105,
    satk: 50,
    sdef: 50,
    spe: 20,
  },
    evolve: function() { return { 1: { pkmn: pkmn.gigalith, item: item.linkStone/*o un objeto de “union” si lo usas*/ } } },
    hiddenAbility: ability.sandForce,
    eggMove : move.rockWrecker,
    lore: `Cristais brilhantes cobrem seu corpo, e ele emite um brilho fraco de dentro de cavernas escuras onde vive.`,
}

pkmn.gigalith = {
  type: ["rock"],
  bst: {
    hp: 85,
    atk: 135,
    def: 130,
    satk: 60,
    sdef: 80,
    spe: 25,
  },
    hiddenAbility: ability.sandForce,
    eggMove : move.rockWrecker,
    lore: `A energia solar armazenada em seus cristais pode ser liberada em um único raio poderoso capaz de destruir rochas grandes.`,
}

// 527 Woobat → Swoobat
pkmn.woobat = {
  type: ["psychic","flying"],
  bst: {
    hp: 65,
    atk: 45,
    def: 53,
    satk: 65,
    sdef: 53,
    spe: 72,
  },
    evolve: function() { return { 1: { pkmn: pkmn.swoobat, level: evolutionLevel2 } } },
    hiddenAbility: ability.simple,
    lore: `Ele se prende a paredes de cavernas usando o coração em seu peito como ventosa, soltando-se apenas para caçar.`,
}

pkmn.swoobat = {
  type: ["psychic","flying"],
  bst: {
    hp: 87,
    atk: 55,
    def: 85,
    satk: 77,
    sdef: 85,
    spe: 134,
  },
    hiddenAbility: ability.simple,
    lore: `Ele emite ondas sonoras através do coração em seu peito, usadas tanto para eco-localização quanto para atacar inimigos.`,
}

// 529 Drilbur → Excadrill
pkmn.drilbur = {
  type: ["ground"],
  bst: {
    hp: 75,
    atk: 95,
    def: 40,
    satk: 30,
    sdef: 45,
    spe: 68,
  },
    evolve: function() { return { 1: { pkmn: pkmn.excadrill, level: evolutionLevel2 } } },
    hiddenAbility: ability.sandForce,
    lore: `Suas garras em forma de broca podem escavar através de solo duro rapidamente, criando túneis complexos debaixo da terra.`,
}

pkmn.excadrill = {
  type: ["ground","steel"],
  bst: {
    hp: 110,
    atk: 135,
    def: 60,
    satk: 50,
    sdef: 65,
    spe: 88,
  },
  hiddenAbility: ability.sandForce,
  lore: `Ele consegue cavar através de rocha sólida como se fosse terra macia, criando túneis a velocidades impressionantes.`,
}

//Sem pedra
pkmn.megaExcadrill = {
  type: ["ground","steel"],
  bst: {
    hp: 110*1.2,
    atk: 165*1.2,
    def: 100*1.2,
    satk: 65*1.2,
    sdef: 65*1.2,
    spe: 103*1.2,
  },
  hiddenAbility: ability.moody,
  signature : move.sandsearStorm,
  lore: `Sua velocidade de rotação aumentou drasticamente graças à Megaevolução. Ele atravessa qualquer obstáculo enquanto avança pelo solo, deixando para trás um enorme túnel.`,
}

// 531 Audino
pkmn.audino = {
  type: ["normal"],
  bst: {
    hp: 109,
    atk: 70,
    def: 106,
    satk: 70,
    sdef: 106,
    spe: 50,
  },
    evolve: function() { return { 1: { pkmn: pkmn.megaAudino, item: item.audinite } } },
    signature : move.acupressure,
    hiddenAbility: ability.sweetVeil,
    lore: `As protuberâncias sensíveis em suas orelhas conseguem detectar o estado emocional e físico de outros seres, sendo usadas em cuidados médicos.`,
}

pkmn.megaAudino = {
    type: ["normal","fairy"],
    bst: {
        hp: 143*1.2,
        atk: 60*1.2,
        def: 126*1.2,
        satk: 80*1.2,
        sdef: 126*1.2,
        spe: 50*1.2,
    },
    signature : move.acupressure,
    hiddenAbility: ability.sweetVeil,
    lore: `A energia da Mega Evolução liberou um poder curativo latente. O Mega Audino emite pulsos de energia que acalmam a hostilidade de quem está ao seu redor. Sua presença é tão reconfortante que qualquer criatura que entre em contato com suas antenas entra em um estado de relaxamento profundo, tornando a batalha um ambiente de tranquilidade.`,
}

// 532 Timburr → Gurdurr → Conkeldurr
pkmn.timburr = {
  type: ["fighting"],
  bst: {
    hp: 75,
    atk: 80,
    def: 55,
    satk: 25,
    sdef: 35,
    spe: 35,
  },
    evolve: function() { return { 1: { pkmn: pkmn.gurdurr, level: evolutionLevel2 } } },
    hiddenAbility: ability.ironFist,
    lore: `Ele carrega uma viga de madeira que usa tanto para treinar músculos quanto para ajudar na construção de estruturas.`,
}

pkmn.gurdurr = {
  type: ["fighting"],
  bst: {
    hp: 85,
    atk: 105,
    def: 85,
    satk: 40,
    sdef: 50,
    spe: 40,
  },
    evolve: function() { return { 1: { pkmn: pkmn.conkeldurr, item: item.linkStone/*o “union” si usas algo así*/ } } },
    hiddenAbility: ability.ironFist,
    lore: `Sua barra de ferro é extremamente pesada, e ele a usa tanto como arma quanto como ferramenta em trabalhos de construção.`,
}

pkmn.conkeldurr = {
  type: ["fighting"],
  bst: {
    hp: 105,
    atk: 140,
    def: 95,
    satk: 55,
    sdef: 65,
    spe: 45,
  },
    hiddenAbility: ability.ironFist,
    lore: `Ele carrega colunas de concreto como se fossem leves, e sua força é tamanha que consegue esmagar rochas com as próprias mãos.`,
}

// 535 Tympole → Palpitoad → Seismitoad
pkmn.tympole = {
  type: ["water"],
  bst: {
    hp: 55,
    atk: 50,
    def: 40,
    satk: 50,
    sdef: 40,
    spe: 65,
  },
  evolve: function() { return { 1: { pkmn: pkmn.palpitoad, level: evolutionLevel2 } } },
    hiddenAbility: ability.terralate,
    lore: `Ele produz vibrações sonoras através da água usando seu corpo, uma forma de comunicação usada por toda a espécie.`,
}

pkmn.palpitoad = {
  type: ["water","ground"],
  bst: {
    hp: 90,
    atk: 65,
    def: 55,
    satk: 65,
    sdef: 55,
    spe: 70,
  },
  evolve: function() { return { 1: { pkmn: pkmn.seismitoad, level: evolutionLevel2 } } },
    hiddenAbility: ability.terralate,
    lore: `As protuberâncias em sua cabeça vibram para gerar ondas sonoras que atordoam presas antes de capturá-las com a língua.`,
}

pkmn.seismitoad = {
  type: ["water","ground"],
  bst: {
    hp: 105,
    atk: 95,
    def: 75,
    satk: 85,
    sdef: 75,
    spe: 74,
  },
    hiddenAbility: ability.terralate,
    lore: `Ele pode causar pequenos terremotos batendo os dedos das mãos no chão, uma técnica usada tanto para caçar quanto para se defender.`,
}

// 538 Throh
pkmn.throh = {
  type: ["fighting"],
  bst: {
    hp: 120,
    atk: 100,
    def: 85,
    satk: 30,
    sdef: 85,
    spe: 45,
  },
    hiddenAbility: ability.guts,
    lore: `Ele passa o tempo treinando técnicas de arremesso em outros Pokémon, sempre em busca de aprimorar sua força física.`,
}

// 539 Sawk
pkmn.sawk = {
  type: ["fighting"],
  bst: {
    hp: 75,
    atk: 125,
    def: 75,
    satk: 30,
    sdef: 75,
    spe: 85,
  },
    hiddenAbility: ability.ambidextrous,
    eggMove : move.hiJumpKick,
    lore: `Ele treina intensamente em cachoeiras isoladas, aperfeiçoando chutes e socos que podem quebrar rochas com facilidade.`,
}

// 540 Sewaddle → Swadloon → Leavanny
pkmn.sewaddle = {
  type: ["bug","grass"],
  bst: {
    hp: 45,
    atk: 53,
    def: 70,
    satk: 40,
    sdef: 60,
    spe: 42,
  },
  evolve: function() { return { 
    1: { pkmn: pkmn.swadloon, level: evolutionLevel1 } 
  } },
    eggMove : move.trailblaze,
    lore: `Ele constrói uma capa protetora usando folhas costuradas com fios que produz da própria boca, protegendo-se do frio.`,
}

pkmn.swadloon = {
  type: ["bug","grass"],
  bst: {
    hp: 55,
    atk: 73,
    def: 90,
    satk: 50,
    sdef: 80,
    spe: 57,
  },
    evolve: function() { return { 1: { pkmn: pkmn.leavanny, item: item.leafStone } } },
    eggMove : move.trailblaze,
    lore: `Ele mastiga folhas e as espalha ao redor de sua área, criando um ambiente rico em nutrientes para outras plantas crescerem.`,
}

pkmn.leavanny = {
  type: ["bug","grass"],
  bst: {
    hp: 75,
    atk: 103,
    def: 80,
    satk: 70,
    sdef: 80,
    spe: 92,
  },
    eggMove : move.trailblaze,
    lore: `Ela cuida de Sewaddle abandonados como se fossem seus próprios filhotes, costurando roupas de folhas para protegê-los.`,
}

// 543 Venipede → Whirlipede → Scolipede
pkmn.venipede = {
  type: ["bug","poison"],
  bst: {
    hp: 30,
    atk: 45,
    def: 59,
    satk: 30,
    sdef: 39,
    spe: 57,
  },
    evolve: function() { return { 1: { pkmn: pkmn.whirlipede, level: evolutionLevel1 } } },
    hiddenAbility: ability.speedBoost,
    lore: `Suas presas venenosas injetam toxinas que enfraquecem presas rapidamente, permitindo que ele as capture com facilidade.`,
}

pkmn.whirlipede = {
  type: ["bug","poison"],
  bst: {
    hp: 40,
    atk: 55,
    def: 99,
    satk: 40,
    sdef: 79,
    spe: 47,
  },
    evolve: function() { return { 1: { pkmn: pkmn.scolipede, level: evolutionLevel2 } } },
    hiddenAbility: ability.speedBoost,
    lore: `Seu corpo endurecido funciona como uma armadura giratória, usada para atacar predadores rolando em alta velocidade.`,
}

pkmn.scolipede = {
  type: ["bug","poison"],
  bst: {
    hp: 60,
    atk: 100,
    def: 89,
    satk: 55,
    sdef: 69,
    spe: 112,
  },
    hiddenAbility: ability.speedBoost,
    lore: `Suas presas duplas injetam um veneno potente o suficiente para paralisar um oponente muito maior que ele em segundos.`,
}

//Sem pedra
pkmn.megaScolipede = {
  type: ["bug","poison"],
  bst: {
    hp: 60*1.2,
    atk: 140*1.2,
    def: 149*1.2,
    satk: 75*1.2,
    sdef: 99*1.2,
    spe: 62*1.2,
  },
    hiddenAbility: ability.fullMetalBody,
    signature : move.attackOrder,
    lore: `Os espinhos que cobrem todo o seu corpo foram fortalecidos pela Megaevolução. Ao acelerar em alta velocidade, ele desfere investidas devastadoras que perfuram qualquer inimigo em seu caminho.`,
}


// 546 Cottonee → Whimsicott
pkmn.cottonee = {
  type: ["grass","fairy"],
  bst: {
    hp: 40,
    atk: 27,
    def: 60,
    satk: 37,
    sdef: 50,
    spe: 66,
  },
    evolve: function() { return { 1: { pkmn: pkmn.whimsicott, item: item.sunStone /*o equivalente*/ } } },
    signature : move.cottonGuard,
    lore: `Seu corpo leve como algodão pode ser levado pelo vento por longas distâncias, e ele se agarra a galhos para não se perder.`,
}

pkmn.whimsicott = {
  type: ["grass","fairy"],
  bst: {
    hp: 60,
    atk: 67,
    def: 85,
    satk: 77,
    sdef: 75,
    spe: 116,
  },
    signature : move.cottonGuard,
    lore: `Ele adora pregar peças em pessoas, escondendo-se dentro de correntes de vento antes de reaparecer em lugares inesperados.`,
}

// 548 Petilil → Lilligant
pkmn.petilil = {
  type: ["grass"],
  bst: {
    hp: 45,
    atk: 35,
    def: 50,
    satk: 70,
    sdef: 50,
    spe: 30,
  },
    evolve: function() { return { 1: { pkmn: pkmn.lilligant, item: item.sunStone } } },
    hiddenAbility: ability.costar,
    lore: `As folhas em sua cabeça contêm nutrientes valiosos, e ela precisa de solo fértil e água limpa para crescer saudável.`,
}

pkmn.lilligant = {
  type: ["grass"],
  bst: {
    hp: 70,
    atk: 60,
    def: 75,
    satk: 110,
    sdef: 75,
    spe: 90,
  },
    hiddenAbility: ability.costar,
    lore: `O aroma de suas pétalas pode acalmar até os ânimos mais exaltados, e ela é cultivada em jardins por sua beleza excepcional.`,
}

pkmn.hisuianLilligant = {
  type: ["grass", "fighting"],
  bst: {
    hp: 70,
    atk: 105,
    def: 75,
    satk: 50,
    sdef: 75,
    spe: 105,
  },
    hiddenAbility: ability.costar,
    lore: `Uma forma antiga mais resistente, adaptada a terrenos ásperos, com pétalas que brilham sob a luz do luar.`,
}

// 550 Basculin → Basculegion
pkmn.basculin = {
  rename: `basculin Red`,
  type: ["water"],
  bst: {
    hp: 70,
    atk: 92,
    def: 65,
    satk: 80,
    sdef: 55,
    spe: 98,
  },
    hiddenAbility: ability.adaptability,
    lore: `Duas formas rivais desta espécie brigam constantemente por território, cada uma com uma personalidade distinta e agressiva.`,
}

pkmn.basculinBlue = {
  type: ["water"],
  bst: {
    hp: 70,
    atk: 92,
    def: 65,
    satk: 80,
    sdef: 55,
    spe: 98,
  },
    hiddenAbility: ability.adaptability,
    lore: `Esta variação mais calma prefere evitar confrontos diretos, mas ainda assim compete ferozmente por comida com a forma rival.`,
}

pkmn.basculinWhite = {
  type: ["water"],
  bst: {
    hp: 70,
    atk: 92,
    def: 65,
    satk: 80,
    sdef: 55,
    spe: 98,
  },
  evolve: function() {
    return {
      1: { pkmn: pkmn.basculegionM, item: item.waterStone },
      2: { pkmn: pkmn.basculegionF, item: item.duskStone },
    }
  },
  hiddenAbility: ability.adaptability,
}

pkmn.basculegionM = {
    type: ["water", "ghost"],
    bst: {
        hp: 120,
        atk: 112,
        def: 65,
        satk: 80,
        sdef: 75,
        spe: 78,
    },
}

pkmn.basculegionF = {
    type: ["water", "ghost"],
    bst: {
        hp: 120,
        atk: 92,
        def: 65,
        satk: 100,
        sdef: 75,
        spe: 78,
    },
}

// 551 Sandile → Krokorok → Krookodile
pkmn.sandile = {
  type: ["ground","dark"],
  bst: {
    hp: 50,
    atk: 72,
    def: 35,
    satk: 35,
    sdef: 35,
    spe: 65,
  },
    evolve: function() { return { 1: { pkmn: pkmn.krokorok, level: evolutionLevel2 } } },
    hiddenAbility: ability.moxie,
    lore: `Ele se enterra na areia deixando apenas os olhos de fora, esperando pacientemente que uma presa desavisada se aproxime.`,
}

pkmn.krokorok = {
  type: ["ground","dark"],
  bst: {
    hp: 60,
    atk: 82,
    def: 45,
    satk: 45,
    sdef: 45,
    spe: 74,
  },
    evolve: function() { return { 1: { pkmn: pkmn.krookodile, level: evolutionLevel3 } } },
    hiddenAbility: ability.moxie,
    lore: `Seus olhos conseguem enxergar através de tempestades de areia usando um órgão especial que funciona como um radar térmico.`,
}

pkmn.krookodile = {
  type: ["ground","dark"],
  bst: {
    hp: 95,
    atk: 117,
    def: 80,
    satk: 65,
    sdef: 70,
    spe: 92,
  },
    hiddenAbility: ability.moxie,
    lore: `Suas mandíbulas poderosas podem esmagar rochas, e ele caça em grupos organizados através do deserto escaldante.`,
}

// 554 Darumaka → Darmanitan
pkmn.darumaka = {
  type: ["fire"],
  bst: {
    hp: 70,
    atk: 90,
    def: 45,
    satk: 15,
    sdef: 45,
    spe: 50,
  },
    evolve: function() { return { 1: { pkmn: pkmn.darmanitan, level: evolutionLevel2 } } },
    hiddenAbility: ability.gorillaTactics,
    eggMove : move.blazeKick,
    lore: `Ele armazena energia térmica em seu corpo durante o dia e a libera lentamente durante a noite fria do deserto.`,
}

pkmn.galarianDarumaka = {
  type: ["ice"],
  bst: {
    hp: 70,
    atk: 90,
    def: 45,
    satk: 15,
    sdef: 45,
    spe: 50,
  },
    evolve: function() { return { 1: { pkmn: pkmn.galarianDarmanitan, item: item.iceStone } } },
    lore: `Adaptada a climas gelados, esta forma armazena energia fria em vez de calor, tornando-se letárgica quando aquecida.`,
}

pkmn.darmanitan = {
  type: ["fire"],
  bst: {
    hp: 105,
    atk: 140,
    def: 55,
    satk: 30,
    sdef: 55,
    spe: 95,
  },
    hiddenAbility: ability.gorillaTactics,
    eggMove : move.blazeKick,
    lore: `Quando perde toda sua energia térmica, ele entra em um estado de imobilidade completa até recuperar as forças.`,
}

pkmn.galarianDarmanitan = {
  type: ["ice"],
  bst: {
    hp: 105,
    atk: 160,
    def: 55,
    satk: 30,
    sdef: 55,
    spe: 135,
  },
    lore: `Adaptada ao frio extremo, essa forma usa a energia gelada armazenada para atacar com socos capazes de congelar instantaneamente.`,
}

// 556 Maractus
pkmn.maractus = {
  type: ["grass"],
  bst: {
    hp: 75,
    atk: 86,
    def: 67,
    satk: 106,
    sdef: 67,
    spe: 60,
  },
    hiddenAbility: ability.waterAbsorb,
    eggMove : move.acupressure,
    lore: `Ele balança os braços como maracas, produzindo um som rítmico usado em rituais tradicionais de dança em regiões áridas.`,
}

// 557 Dwebble → Crustle
pkmn.dwebble = {
  type: ["bug","rock"],
  bst: {
    hp: 50,
    atk: 65,
    def: 85,
    satk: 35,
    sdef: 35,
    spe: 55,
  },
    evolve: function() { return { 1: { pkmn: pkmn.crustle, level: evolutionLevel2 } } },
    hiddenAbility: ability.filter,
    lore: `Ele carrega uma pedra oca em suas costas como se fosse uma concha, trocando por uma nova sempre que cresce demais.`,
}

pkmn.crustle = {
  type: ["bug","rock"],
  bst: {
    hp: 70,
    atk: 95,
    def: 125,
    satk: 65,
    sdef: 75,
    spe: 45,
  },
    hiddenAbility: ability.filter,
    lore: `Ele defende ferozmente a grande rocha que carrega nas costas, considerando-a sua casa e território mais precioso.`,
}

// 559 Scraggy → Scrafty
pkmn.scraggy = {
  type: ["dark","fighting"],
  bst: {
    hp: 50,
    atk: 75,
    def: 70,
    satk: 35,
    sdef: 70,
    spe: 48,
  },
    evolve: function() { return { 1: { pkmn: pkmn.scrafty, level: evolutionLevel2 } } },
    hiddenAbility: ability.moxie,
    lore: `Ele puxa a pele solta ao redor do pescoço para cima como se fosse uma calça, endurecendo-a para amortecer investidas de cabeça.`,
}

pkmn.scrafty = {
  type: ["dark","fighting"],
  bst: {
    hp: 65,
    atk: 90,
    def: 115,
    satk: 45,
    sdef: 115,
    spe: 58,
  },
    hiddenAbility: ability.moxie,
    lore: `Sua pele endurecida ao redor da cintura funciona como uma armadura, e ele usa investidas de cabeça brutais em combate.`,
}

pkmn.megaScrafty = {
  type: ["dark","fighting"],
  bst: {
    hp: 65*1.2,
    atk: 130*1.2,
    def: 135*1.2,
    satk: 55*1.2,
    sdef: 135*1.2,
    spe: 68*1.2,
  },
    hiddenAbility: ability.moxie,
    signature : move.meteorAssault,
    lore: `A Megaevolução fez com que a pele que Scrafty troca se tornasse branca, ficando resistente e flexível. É claro que este Pokémon continua tão briguento quanto sempre foi.`,
}

// 561 Sigilyph
pkmn.sigilyph = {
  type: ["psychic","flying"],
  bst: {
    hp: 72,
    atk: 58,
    def: 80,
    satk: 103,
    sdef: 80,
    spe: 97,
  },
    hiddenAbility: ability.magicGuard,
    signature : move.storedPower,
    lore: `Ele voa em padrões geométricos precisos sobre ruínas antigas, guardando segredos que ninguém mais conseguiu decifrar.`,
}

// 562 Yamask → Cofagrigus / Galarian Yamask → Runerigus
pkmn.yamask = {
  type: ["ghost"],
  bst: {
    hp: 38,
    atk: 30,
    def: 85,
    satk: 55,
    sdef: 65,
    spe: 30,
  },
    evolve: function() { return { 1: { pkmn: pkmn.cofagrigus, level: evolutionLevel2 } } },
    hiddenAbility: ability.somberField,
    lore: `Ele carrega uma máscara que já foi seu rosto em uma vida passada, e chora sempre que se lembra de quem costumava ser.`,
}

pkmn.galarianYamask = {
  type: ["ground", "ghost"],
  bst: {
    hp: 38,
    atk: 55,
    def: 85,
    satk: 30,
    sdef: 65,
    spe: 30,
  },
    evolve: function() { return { 1: { pkmn: pkmn.runerigus, level: evolutionLevel2 } } },
    hiddenAbility: ability.powerOfAlchemy,
    lore: `Esta forma carrega uma placa de pedra em vez de uma máscara, gravada com o número de vidas que já tirou.`,
}

pkmn.cofagrigus = {
  type: ["ghost"],
  bst: {
    hp: 58,
    atk: 50,
    def: 145,
    satk: 95,
    sdef: 105,
    spe: 30,
  },
    hiddenAbility: ability.somberField,
    lore: `Ele engole vivos aqueles que se aproximam demais de seu sarcófago dourado, transformando-os em múmias eternas.`,
}

pkmn.runerigus = {
  type: ["ground","ghost"],
  bst: {
    hp: 58,
    atk: 95,
    def: 145,
    satk: 50,
    sdef: 105,
    spe: 30,
  },
    hiddenAbility: ability.powerOfAlchemy,
}

// 564 Tirtouga → Carracosta
pkmn.tirtouga = {
  type: ["water","rock"],
  bst: {
    hp: 54,
    atk: 78,
    def: 103,
    satk: 53,
    sdef: 45,
    spe: 22,
  },
    evolve: function() { return { 1: { pkmn: pkmn.carracosta, level: evolutionLevel2 } } },
    hiddenAbility: ability.shieldsDown,
    eggMove : move.razorShell,
    lore: `Um Pokémon antigo revivido a partir de um fóssil, sua concha extremamente resistente o protegia das pressões do oceano profundo.`,
}

pkmn.carracosta = {
  type: ["water","rock"],
  bst: {
    hp: 74,
    atk: 108,
    def: 133,
    satk: 83,
    sdef: 65,
    spe: 32,
  },
    hiddenAbility: ability.shieldsDown,
    eggMove : move.razorShell,
    lore: `Sua concha extremamente dura pode suportar o impacto de um tsunami, e ele nadava pelos oceanos antigos com grande força.`,
}

// 566 Archen → Archeops
pkmn.archen = {
  type: ["rock","flying"],
  bst: {
    hp: 55,
    atk: 112,
    def: 45,
    satk: 74,
    sdef: 45,
    spe: 70,
  },
    evolve: function() { return { 1: { pkmn: pkmn.archeops, level: evolutionLevel2 } } },
    hiddenAbility: ability.stoned,
    lore: `Considerado o ancestral de todos os Pokémon voadores, ele planava mais do que realmente voava devido às suas asas primitivas.`,

}

pkmn.archeops = {
  type: ["rock","flying"],
  bst: {
    hp: 75,
    atk: 120,
    def: 65,
    satk: 92,
    sdef: 65,
    spe: 110,
  },
    hiddenAbility: ability.stoned,
    lore: `Apesar de ser um excelente voador, ele tem dificuldade extrema para decolar do chão, precisando de uma corrida antes de alçar voo.`,
}

// 568 Trubbish → Garbodor
pkmn.trubbish = {
  type: ["poison"],
  bst: {
    hp: 50,
    atk: 50,
    def: 62,
    satk: 40,
    sdef: 62,
    spe: 65,
  },
    evolve: function() { return { 1: { pkmn: pkmn.garbodor, level: evolutionLevel2 } } },
    hiddenAbility: ability.toxicBoost,
    lore: `Formado a partir de um saco de lixo que ganhou vida misteriosamente, ele adora o cheiro de lixo podre e se alimenta dele.`,
}

pkmn.garbodor = {
  type: ["poison"],
  bst: {
    hp: 80,
    atk: 95,
    def: 82,
    satk: 60,
    sdef: 82,
    spe: 75,
  },
    hiddenAbility: ability.toxicBoost,
    lore: `Seu corpo é composto inteiramente de lixo compactado, e ele dispara líquidos tóxicos de dentro de sua estrutura amorfa.`,
}

pkmn.garbodorGmax = {
  type: ["poison"],
  bst: {
    hp: 80*1.15,
    atk: 95*1.15,
    def: 82*1.15,
    satk: 60*1.15,
    sdef: 82*1.15,
    spe: 75*1.15,
  },
    hiddenAbility: ability.toxicBoost,
}

// 570 Zorua → Zoroark
pkmn.zorua = {
  type: ["dark"],
  bst: {
    hp: 40,
    atk: 65,
    def: 40,
    satk: 80,
    sdef: 40,
    spe: 65,
  },
    evolve: function() { return { 1: { pkmn: pkmn.zoroark, level: evolutionLevel2 } } },
    hiddenAbility: ability.imposter,
    eggMove : move.mimic,
    lore: `Ele pode se transformar na aparência de qualquer pessoa ou Pokémon, usando ilusões para se proteger de predadores.`,
}

pkmn.hisuianZorua = {
  type: ["normal", "ghost"],
  bst: {
    hp: 35,
    atk: 60,
    def: 40,
    satk: 85,
    sdef: 40,
    spe: 70,
  },
    evolve: function() { return { 1: { pkmn: pkmn.hisuianZoroark, level: evolutionLevel2 } } },
    hiddenAbility: ability.merciless,
    lore: `Uma forma antiga que usa ilusões assustadoras baseadas em lendas locais para afastar intrusos de seu território.`,
}

pkmn.zoroark = {
  type: ["dark"],
  bst: {
    hp: 60,
    atk: 105,
    def: 60,
    satk: 120,
    sdef: 60,
    spe: 105,
  },
    hiddenAbility: ability.imposter,
    eggMove : move.mimic,
    lore: `Suas ilusões são tão convincentes que podem enganar até treinadores experientes, protegendo ferozmente seus filhotes de qualquer ameaça.`,
}

pkmn.hisuianZoroark = {
  type: ["normal", "ghost"],
  bst: {
    hp: 55,
    atk: 100,
    def: 60,
    satk: 125,
    sdef: 60,
    spe: 110,
  },
    hiddenAbility: ability.merciless,
    lore: `Esta forma antiga cria ilusões de fogo espectral, usadas para proteger sua alcateia de caçadores humanos.`,
}

// 572 Minccino → Cinccino
pkmn.minccino = {
  type: ["normal"],
  bst: {
    hp: 55,
    atk: 50,
    def: 40,
    satk: 40,
    sdef: 40,
    spe: 75,
  },
    evolve: function() { return { 1: { pkmn: pkmn.cinccino, item: item.shinyStone /*o equivalente*/ } } },
    hiddenAbility: ability.skillLink,
    lore: `Ela limpa constantemente sua cauda felpuda, e é conhecida por deixar qualquer lugar onde vive impecavelmente organizado.`,
}

pkmn.cinccino = {
  type: ["normal"],
  bst: {
    hp: 75,
    atk: 95,
    def: 60,
    satk: 65,
    sdef: 60,
    spe: 115,
  },
    hiddenAbility: ability.skillLink,
    lore: `Sua cauda de pelo denso é usada tradicionalmente para fazer espanadores de altíssima qualidade, muito valorizados por colecionadores.`,
}

// 574 Gothita → Gothorita → Gothitelle
pkmn.gothita = {
  type: ["psychic"],
  bst: {
    hp: 45,
    atk: 30,
    def: 50,
    satk: 55,
    sdef: 65,
    spe: 45,
  },
    evolve: function() { return { 1: { pkmn: pkmn.gothorita, level: evolutionLevel2 } } },
    hiddenAbility: ability.justified,
    lore: `Ela consegue enxergar padrões de energia estelar invisíveis a olho humano, e observa o céu noturno com fascínio constante.`,
}

pkmn.gothorita = {
  type: ["psychic"],
  bst: {
    hp: 60,
    atk: 45,
    def: 70,
    satk: 75,
    sdef: 85,
    spe: 55,
  },
    evolve: function() { return { 1: { pkmn: pkmn.gothitelle, level: evolutionLevel3 } } },
    hiddenAbility: ability.justified,
    lore: `Sob a luz da lua cheia, seus poderes psíquicos se intensificam drasticamente, permitindo que ela controle objetos à distância.`,
}

pkmn.gothitelle = {
  type: ["psychic"],
  bst: {
    hp: 70,
    atk: 55,
    def: 95,
    satk: 95,
    sdef: 110,
    spe: 65,
  },
    hiddenAbility: ability.justified,
    lore: `Ela pode prever o futuro observando as estrelas, e guia pessoas perdidas usando um mapa estelar gravado em sua memória.`,
}

// 577 Solosis → Duosion → Reuniclus
pkmn.solosis = {
  type: ["psychic"],
  bst: {
    hp: 45,
    atk: 30,
    def: 40,
    satk: 105,
    sdef: 50,
    spe: 20,
  },
    evolve: function() { return { 1: { pkmn: pkmn.duosion, level: evolutionLevel2 } } },
    hiddenAbility: ability.magicGuard,
    lore: `Seu corpo é protegido por um fluido denso, e ele se comunica através de ondas psíquicas ao invés de sons.`,
}

pkmn.duosion = {
  type: ["psychic"],
  bst: {
    hp: 75,
    atk: 40,
    def: 50,
    satk: 125,
    sdef: 60,
    spe: 30,
  },
    evolve: function() { return { 1: { pkmn: pkmn.reuniclus, level: evolutionLevel3 } } },
    hiddenAbility: ability.magicGuard,
    lore: `Seus dois cérebros pensam de forma independente, e às vezes discordam sobre qual ação tomar durante uma batalha.`,
}

pkmn.reuniclus = {
  type: ["psychic"],
  bst: {
    hp: 110,
    atk: 65,
    def: 75,
    satk: 125,
    sdef: 85,
    spe: 30,
  },
    hiddenAbility: ability.magicGuard,
    lore: `Seus poderes psíquicos combinados de múltiplos cérebros permitem que ele mova objetos pesados apenas com o pensamento.`,
}

// 580 Ducklett → Swanna
pkmn.ducklett = {
  type: ["water","flying"],
  bst: {
    hp: 62,
    atk: 44,
    def: 50,
    satk: 44,
    sdef: 50,
    spe: 55,
  },
    evolve: function() { return { 1: { pkmn: pkmn.swanna, level: evolutionLevel2 } } },
    hiddenAbility: ability.drizzle,
    lore: `Ele mergulha na água para pescar pequenos peixes, e a camada oleosa em suas penas o mantém seco mesmo debaixo d'água.`,
}

pkmn.swanna = {
  type: ["water","flying"],
  bst: {
    hp: 75,
    atk: 87,
    def: 63,
    satk: 87,
    sdef: 63,
    spe: 98,
  },
    hiddenAbility: ability.drizzle,
    lore: `Ela é extremamente elegante enquanto nada, mas nas profundezas da água pedala furiosamente para se manter equilibrada.`,
}

// 582 Vanillite → Vanillish → Vanilluxe
pkmn.vanillite = {
  type: ["ice"],
  bst: {
    hp: 36,
    atk: 50,
    def: 50,
    satk: 65,
    sdef: 60,
    spe: 44,
  },
    evolve: function() { return { 1: { pkmn: pkmn.vanillish, level: evolutionLevel2 } } },
    hiddenAbility: ability.snowWarning,
    lore: `Formado a partir de neve pura e cristalizada, ele derrete lentamente se ficar longe do frio por muito tempo.`,
}

pkmn.vanillish = {
  type: ["ice"],
  bst: {
    hp: 51,
    atk: 65,
    def: 65,
    satk: 80,
    sdef: 75,
    spe: 59,
  },
    evolve: function() { return { 1: { pkmn: pkmn.vanilluxe, level: evolutionLevel3 } } },
    hiddenAbility: ability.snowWarning,
    lore: `Sua estrutura de gelo é mais estável que a de sua forma anterior, mas ainda assim precisa de temperaturas baixas para sobreviver.`,
}

pkmn.vanilluxe = {
  type: ["ice"],
  bst: {
    hp: 71,
    atk: 95,
    def: 85,
    satk: 110,
    sdef: 95,
    spe: 79,
  },
    hiddenAbility: ability.snowWarning,
    lore: `Suas duas cabeças de gelo podem gerar nevascas conjuntas, cobrindo áreas inteiras com uma camada espessa de neve fresca.`,
}

// 585 Deerling → Sawsbuck
pkmn.deerling = {
  type: ["normal","grass"],
  bst: {
    hp: 60,
    atk: 60,
    def: 50,
    satk: 40,
    sdef: 50,
    spe: 75,
  },
    evolve: function() { return { 1: { pkmn: pkmn.sawsbuck, level: evolutionLevel2 } } },
    hiddenAbility: ability.sereneGrace,
    eggMove : move.camouflage,
    lore: `Sua aparência muda de acordo com a estação do ano, refletindo perfeitamente as cores da vegetação ao seu redor.`,
}

pkmn.deerlingAutumn = {
  type: ["normal","fire"],
  bst: {
    hp: 60,
    atk: 60,
    def: 50,
    satk: 40,
    sdef: 50,
    spe: 75,
  },
  evolve: function() { return { 1: { pkmn: pkmn.sawsbuckAutumn, level: evolutionLevel2 } } },
    hiddenAbility: ability.sereneGrace,
    eggMove : move.camouflage
}

pkmn.deerlingSpring = {
  type: ["normal","fairy"],
  bst: {
    hp: 60,
    atk: 60,
    def: 50,
    satk: 40,
    sdef: 50,
    spe: 75,
  },
  evolve: function() { return { 1: { pkmn: pkmn.sawsbuckSpring, level: evolutionLevel2 } } },
    hiddenAbility: ability.sereneGrace,
    eggMove : move.camouflage
}

pkmn.deerlingWinter = {
  type: ["normal","ice"],
  bst: {
    hp: 60,
    atk: 60,
    def: 50,
    satk: 40,
    sdef: 50,
    spe: 75,
  },
  evolve: function() { return { 1: { pkmn: pkmn.sawsbuckWinter, level: evolutionLevel2 } } },
    hiddenAbility: ability.sereneGrace,
    eggMove : move.camouflage
}

pkmn.sawsbuck = {
  type: ["normal","grass"],
  bst: {
    hp: 80,
    atk: 100,
    def: 70,
    satk: 60,
    sdef: 70,
    spe: 95,
  },
    hiddenAbility: ability.sereneGrace,
    eggMove : move.camouflage,
    lore: `Seus chifres florescem de forma diferente em cada estação, e ele migra em grandes manadas seguindo as mudanças climáticas.`,
}

pkmn.sawsbuckAutumn = {
  type: ["normal","fire"],
  bst: {
    hp: 80,
    atk: 100,
    def: 70,
    satk: 60,
    sdef: 70,
    spe: 95,
  },
    hiddenAbility: ability.sereneGrace,
    eggMove : move.camouflage
}

pkmn.sawsbuckSpring = {
  type: ["normal","fairy"],
  bst: {
    hp: 80,
    atk: 100,
    def: 70,
    satk: 60,
    sdef: 70,
    spe: 95,
  },
    hiddenAbility: ability.sereneGrace,
    eggMove : move.camouflage
}

pkmn.sawsbuckWinter = {
  type: ["normal","ice"],
  bst: {
    hp: 80,
    atk: 100,
    def: 70,
    satk: 60,
    sdef: 70,
    spe: 95,
  },
    hiddenAbility: ability.sereneGrace,
    eggMove : move.camouflage
}

// 587 Emolga
pkmn.emolga = {
  type: ["electric","flying"],
  bst: {
    hp: 55,
    atk: 75,
    def: 60,
    satk: 75,
    sdef: 60,
    spe: 103,
  },
    hiddenAbility: ability.windRider,
    lore: `A membrana entre seus braços e pernas permite que ele plane entre árvores, gerando eletricidade estática pelo atrito com o ar.`,
}

pkmn.emolgaEvent = {
  rename: `emolga`,
  hidden:true,
  type: ["dark","flying"],
  bst: {
    hp: 55,
    atk: 75,
    def: 60,
    satk: 75,
    sdef: 60,
    spe: 103,
  },
}

// 588 Karrablast → Escavalier
pkmn.karrablast = {
  type: ["bug"],
  bst: {
    hp: 50,
    atk: 75,
    def: 45,
    satk: 40,
    sdef: 45,
    spe: 60,
  },
    evolve: function() { return { 1: { pkmn: pkmn.escavalier, item: item.linkStone } } },
    eggMove : move.megahorn,
    lore: `Ele é misteriosamente atraído por Shelmet, e sua evolução só ocorre através de uma troca entre as duas espécies rivais.`,
}

pkmn.escavalier = {
  type: ["bug","steel"],
  bst: {
    hp: 70,
    atk: 135,
    def: 105,
    satk: 60,
    sdef: 105,
    spe: 20,
  },
    eggMove : move.megahorn,
    lore: `Sua armadura de cavaleiro medieval é, na verdade, a concha que ele roubou de um Shelmet durante sua evolução.`,
}

// 590 Foongus → Amoonguss
pkmn.foongus = {
  type: ["grass","poison"],
  bst: {
    hp: 69,
    atk: 55,
    def: 45,
    satk: 55,
    sdef: 55,
    spe: 15,
  },
    evolve: function() { return { 1: { pkmn: pkmn.amoonguss, level: evolutionLevel2 } } },
    hiddenAbility: ability.colorSpore,
    lore: `Ele se disfarça de Poké Bola para atrair pessoas curiosas, liberando esporos venenosos quando alguém se aproxima demais.`,
}

pkmn.amoonguss = {
  type: ["grass","poison"],
  bst: {
    hp: 114,
    atk: 85,
    def: 70,
    satk: 85,
    sdef: 80,
    spe: 30,
  },
    hiddenAbility: ability.imposter,
    lore: `Seus dois chapéus se assemelham a Poké Bolas gigantes, e ele libera esporos tóxicos capazes de causar paralisia severa.`,
}

// 592 Frillish → Jellicent
pkmn.frillish = {
  type: ["water","ghost"],
  bst: {
    hp: 55,
    atk: 40,
    def: 50,
    satk: 65,
    sdef: 85,
    spe: 40,
  },
    evolve: function() { return { 1: { pkmn: pkmn.jellicent, level: evolutionLevel3 } } },
    lore: `Ele flutua silenciosamente pelas profundezas do oceano, envolvendo presas em seus tentáculos gelatinosos antes de paralisá-las.`,
}

pkmn.jellicent = {
  type: ["water","ghost"],
  bst: {
    hp: 100,
    atk: 60,
    def: 70,
    satk: 85,
    sdef: 105,
    spe: 60,
  },
    lore: `Formado por água do oceano em decomposição, diz-se que ele afunda navios arrastando marinheiros para as profundezas.`,
}

// 594 Alomomola
pkmn.alomomola = {
  type: ["water"],
  bst: {
    hp: 165,
    atk: 75,
    def: 80,
    satk: 40,
    sdef: 45,
    spe: 65,
  },
    lore: `Ela carrega Pokémon feridos em sua barbatana macia, curando-os com um muco especial que ela produz naturalmente.`,
}

// 595 Joltik → Galvantula
pkmn.joltik = {
  type: ["bug","electric"],
  bst: {
    hp: 50,
    atk: 47,
    def: 50,
    satk: 57,
    sdef: 50,
    spe: 65,
  },
    evolve: function() { return { 1: { pkmn: pkmn.galvantula, level: evolutionLevel2 } } },
    hiddenAbility: ability.libero,
    eggMove : move.electroBall,
    lore: `Ele se agarra a Pokémon maiores para absorver eletricidade estática, já que não consegue gerar energia suficiente sozinho.`,
}

pkmn.galvantula = {
  type: ["bug","electric"],
  bst: {
    hp: 70,
    atk: 77,
    def: 60,
    satk: 97,
    sdef: 60,
    spe: 108,
  },
    hiddenAbility: ability.libero,
    eggMove : move.electroBall,
    lore: `Suas teias eletrificadas podem paralisar qualquer presa que tocar nelas, e ele as usa para capturar alimentos com eficiência.`,
}

// 597 Ferroseed → Ferrothorn
pkmn.ferroseed = {
  type: ["grass","steel"],
  bst: {
    hp: 44,
    atk: 50,
    def: 91,
    satk: 24,
    sdef: 86,
    spe: 10,
  },
    evolve: function() { return { 1: { pkmn: pkmn.ferrothorn, level: evolutionLevel3 } } },
    hiddenAbility: ability.ferrilate,
    lore: `Seus espinhos de metal se soltam facilmente quando ele é atacado, cravando-se no agressor como uma defesa dolorosa.`,
}

pkmn.ferrothorn = {
  type: ["grass","steel"],
  bst: {
    hp: 74,
    atk: 94,
    def: 131,
    satk: 54,
    sdef: 116,
    spe: 20,
  },
    hiddenAbility: ability.ferrilate,
    lore: `Ele se pendura de tetos de cavernas usando raízes de metal, deixando cair espinhos afiados sobre qualquer intruso que passe embaixo.`,
}

// 599 Klink → Klang → Klinklang
pkmn.klink = {
  type: ["steel"],
  bst: {
    hp: 40,
    atk: 55,
    def: 70,
    satk: 45,
    sdef: 60,
    spe: 30,
  },
    evolve: function() { return { 1: { pkmn: pkmn.klang, level: evolutionLevel2 } } },
    hiddenAbility: ability.fullMetalBody,
    signature : move.shiftGear,
    lore: `Duas engrenagens vivas que se encaixam perfeitamente, girando continuamente para gerar energia que sustenta ambas.`,
}

pkmn.klang = {
  type: ["steel"],
  bst: {
    hp: 60,
    atk: 80,
    def: 95,
    satk: 70,
    sdef: 85,
    spe: 50,
  },
    evolve: function() { return { 1: { pkmn: pkmn.klinklang, level: evolutionLevel3 } } },
    hiddenAbility: ability.fullMetalBody,
    signature : move.shiftGear,
    lore: `Formado por quatro engrenagens combinadas, ele gera energia suficiente para operar máquinas antigas encontradas em ruínas.`,
}

pkmn.klinklang = {
  type: ["steel"],
  bst: {
    hp: 60,
    atk: 100,
    def: 115,
    satk: 70,
    sdef: 85,
    spe: 90,
  },
    hiddenAbility: ability.fullMetalBody,
    signature : move.shiftGear,
    lore: `Suas três engrenagens giram em velocidades diferentes, gerando uma quantidade extraordinária de energia mecânica pura.`,
}

// 602 Tynamo → Eelektrik → Eelektross
pkmn.tynamo = {
  type: ["electric"],
  bst: {
    hp: 35,
    atk: 55,
    def: 40,
    satk: 45,
    sdef: 40,
    spe: 60,
  },
    evolve: function() { return { 1: { pkmn: pkmn.eelektrik, level: evolutionLevel2 } } },
    hiddenAbility: ability.levitate,
    signature : move.zingZap,
    lore: `Sozinho, ele é extremamente fraco, mas em grandes grupos consegue gerar eletricidade forte o suficiente para derrubar um prédio.`,
}

pkmn.eelektrik = {
  type: ["electric"],
  bst: {
    hp: 65,
    atk: 85,
    def: 70,
    satk: 75,
    sdef: 70,
    spe: 40,
  },
    evolve: function() { return { 1: { pkmn: pkmn.eelektross, item: item.thunderStone } } },
    hiddenAbility: ability.levitate,
    signature : move.zingZap,
    lore: `Ele se enrola ao redor de presas antes de eletrocutá-las, gerando choques poderosos através de órgãos especializados em seu corpo.`,
}

pkmn.eelektross = {
  type: ["electric"],
  bst: {
    hp: 85,
    atk: 115,
    def: 80,
    satk: 105,
    sdef: 80,
    spe: 50,
  },
    hiddenAbility: ability.levitate,
    signature : move.zingZap,
    lore: `Suas ventosas podem se prender a qualquer superfície, permitindo que ele saia da água e ataque presas em terra firme.`,
}

pkmn.megaEelektross = {
  type: ["electric"],
  bst: {
    hp: 85*1.2,
    atk: 145*1.2,
    def: 80*1.2,
    satk: 135*1.2,
    sdef: 90*1.2,
    spe: 80*1.2,
  },
    hiddenAbility: ability.levitate,
    signature : move.zingZap,
    lore: `A energia da Megaevolução estimulou seus órgãos elétricos ao limite. Ele envolve todo o seu corpo em eletricidade antes de atacar suas presas com uma mordida fulminante.`,
}

// 605 Elgyem → Beheeyem
pkmn.elgyem = {
  type: ["psychic"],
  bst: {
    hp: 55,
    atk: 55,
    def: 55,
    satk: 85,
    sdef: 55,
    spe: 30,
  },
    evolve: function() { return { 1: { pkmn: pkmn.beheeyem, level: evolutionLevel3 } } },
    lore: `Diz-se que ele veio do espaço sideral, e seu cérebro grande permite que ele controle mentes com poderes psíquicos avançados.`,
}

pkmn.beheeyem = {
  type: ["psychic"],
  bst: {
    hp: 75,
    atk: 75,
    def: 75,
    satk: 125,
    sdef: 95,
    spe: 40,
  },
    lore: `Ele se comunica através de sinais luminosos emitidos por seus dedos, um método de linguagem completamente alienígena para humanos.`,
}

// 607 Litwick → Lampent → Chandelure
pkmn.litwick = {
  type: ["ghost","fire"],
  bst: {
    hp: 50,
    atk: 30,
    def: 55,
    satk: 65,
    sdef: 55,
    spe: 20,
  },
    evolve: function() { return { 1: { pkmn: pkmn.lampent, level: evolutionLevel3 } } },
    hiddenAbility: ability.flashPyro,
    lore: `Sua chama, na verdade, é alimentada pela energia vital que ele suga de pessoas e Pokémon que se aproximam demais dele.`,
}

pkmn.lampent = {
  type: ["ghost","fire"],
  bst: {
    hp: 60,
    atk: 40,
    def: 60,
    satk: 95,
    sdef: 60,
    spe: 55,
  },
    evolve: function() { return { 1: { pkmn: pkmn.chandelure, item: item.duskStone } } },
    hiddenAbility: ability.flashPyro,
    lore: `Ele espreita hospitais e locais onde a morte é iminente, esperando para absorver a energia vital de quem está prestes a partir.`,
}

pkmn.chandelure = {
  type: ["ghost","fire"],
  bst: {
    hp: 60,
    atk: 55,
    def: 90,
    satk: 145,
    sdef: 90,
    spe: 80,
  },
    hiddenAbility: ability.flashPyro,
    lore: `Suas chamas roxas queimam a alma de qualquer um que se aproxime, e diz-se que ele guia espíritos para o outro mundo.`,
}

pkmn.megaChandelure = {
  type: ["ghost","fire"],
  bst: {
    hp: 60*1.2,
    atk: 75*1.2,
    def: 110*1.2,
    satk: 175*1.2,
    sdef: 110*1.2,
    spe: 90*1.2,
  },
    hiddenAbility: ability.moody,
    signature : move.torchSong,
    lore: `Um de seus olhos é uma janela que liga o nosso mundo ao além. Este Pokémon atrai o ódio e o converte em poder.`,
}

// 610 Axew → Fraxure → Haxorus
pkmn.axew = {
  type: ["dragon"],
  bst: {
    hp: 46,
    atk: 87,
    def: 60,
    satk: 30,
    sdef: 40,
    spe: 57,
  },
    evolve: function() { return { 1: { pkmn: pkmn.fraxure, level: evolutionLevel2 } } },
    hiddenAbility: ability.rivalry,
    lore: `Suas presas quebram com frequência durante o treino, mas voltam a crescer rapidamente, ficando ainda mais afiadas cada vez.`,
}

pkmn.fraxure = {
  type: ["dragon"],
  bst: {
    hp: 66,
    atk: 117,
    def: 70,
    satk: 40,
    sdef: 50,
    spe: 67,
  },
    evolve: function() { return { 1: { pkmn: pkmn.haxorus, level: evolutionLevel3 } } },
    hiddenAbility: ability.rivalry,
    lore: `Ele afia suas presas raspando-as contra rochas duras, e guarda ciosamente qualquer presa quebrada que perde durante uma batalha.`,
}

pkmn.haxorus = {
  type: ["dragon"],
  bst: {
    hp: 76,
    atk: 147,
    def: 90,
    satk: 60,
    sdef: 70,
    spe: 97,
  },
    hiddenAbility: ability.rivalry,
    lore: `Apesar de suas presas extremamente afiadas capazes de cortar aço, ele é surpreendentemente gentil e evita conflitos desnecessários.`,
}

// 613 Cubchoo → Beartic
pkmn.cubchoo = {
  type: ["ice"],
  bst: {
    hp: 55,
    atk: 70,
    def: 40,
    satk: 60,
    sdef: 40,
    spe: 40,
  },
    evolve: function() { return { 1: { pkmn: pkmn.beartic, level: evolutionLevel2 } } },
    hiddenAbility: ability.slushRush,
    lore: `Seu nariz está sempre escorrendo, e o muco congelado que ele espirra pode ser usado como uma arma gelada surpreendentemente eficaz.`,
}

pkmn.beartic = {
  type: ["ice"],
  bst: {
    hp: 95,
    atk: 110,
    def: 80,
    satk: 70,
    sdef: 80,
    spe: 50,
  },
    hiddenAbility: ability.slushRush,
    lore: `Suas garras de gelo afiadas podem cortar através de icebergs, e ele caça com paciência extrema em ambientes congelados.`,
}

// 615 Cryogonal
pkmn.cryogonal = {
  type: ["ice"],
  bst: {
    hp: 70,
    atk: 50,
    def: 30,
    satk: 95,
    sdef: 135,
    spe: 105,
  },
    hiddenAbility: ability.levitate,
    signature : move.freezeDry,
    lore: `Formado por cristais de gelo unidos por uma corrente, ele flutua pelo céu gelado como se fosse feito de neve viva.`,
}

// 616 Shelmet → Accelgor
pkmn.shelmet = {
  type: ["bug"],
  bst: {
    hp: 50,
    atk: 40,
    def: 85,
    satk: 40,
    sdef: 65,
    spe: 25,
  },
    evolve: function() { return { 1: { pkmn: pkmn.accelgor, item: item.linkStone } } },
    hiddenAbility: ability.unburden,
    eggMove : move.meFirst,
    lore: `Ele se retrai completamente dentro de sua concha ao sentir perigo, e sua evolução misteriosamente depende de uma troca com Karrablast.`,
}

pkmn.accelgor = {
  type: ["bug"],
  bst: {
    hp: 80,
    atk: 70,
    def: 40,
    satk: 100,
    sdef: 60,
    spe: 145,
  },
    hiddenAbility: ability.unburden,
    eggMove : move.meFirst,
    lore: `Depois de se livrar de sua concha pesada durante a evolução, ele se torna extremamente ágil e rápido, quase impossível de alcançar.`,
}

// 618 Stunfisk
pkmn.stunfisk = {
  type: ["ground","electric"],
  bst: {
    hp: 109,
    atk: 66,
    def: 84,
    satk: 81,
    sdef: 99,
    spe: 32,
  },
    hiddenAbility: ability.simple,
    eggMove : move.camouflage,
    lore: `Ele se enterra na lama, deixando apenas a boca de fora, imitando uma armadilha para atrair predadores desavisados.`,
}

pkmn.galarianStunfisk = {
  type: ["ground","steel"],
  bst: {
    hp: 109,
    atk: 81,
    def: 99,
    satk: 66,
    sdef: 84,
    spe: 32,
  },
    hiddenAbility: ability.terralate,
    lore: `Esta forma se camufla como uma armadilha de metal enferrujado, atraindo presas curiosas antes de fechar a boca com força.`,
}

// 619 Mienfoo → Mienshao
pkmn.mienfoo = {
    type: ["fighting"],
    bst: {
        hp: 45,
        atk: 85,
        def: 50,
        satk: 55,
        sdef: 50,
        spe: 65,
    },
    evolve: function() { return { 1: { pkmn: pkmn.mienshao, level: evolutionLevel3 } } },
    hiddenAbility: ability.ambidextrous,
    lore: `Ele treina constantemente em movimentos rápidos de artes marciais, e nunca desperdiça energia com movimentos desnecessários.`,
}

pkmn.mienshao = {
  type: ["fighting"],
  bst: {
    hp: 65,
    atk: 125,
    def: 60,
    satk: 95,
    sdef: 60,
    spe: 105,
  },
    hiddenAbility: ability.ambidextrous,
    lore: `Seus longos pelos nos braços são usados como chicotes em combate, complementando chutes e socos extremamente precisos.`,
}

// 621 Druddigon
pkmn.druddigon = {
  type: ["dragon"],
  bst: {
    hp: 77,
    atk: 120,
    def: 90,
    satk: 60,
    sdef: 90,
    spe: 48,
  },
    hiddenAbility: ability.merciless,
    lore: `Ele vive isolado em cavernas escuras, e sua pele extremamente dura o torna quase invulnerável a ataques físicos comuns.`,
}

// 622 Golett → Golurk
pkmn.golett = {
  type: ["ground","ghost"],
  bst: {
    hp: 59,
    atk: 74,
    def: 50,
    satk: 35,
    sdef: 50,
    spe: 35,
  },
    evolve: function() { return { 1: { pkmn: pkmn.golurk, level: evolutionLevel3 } } },
    hiddenAbility: ability.ironFist,
    lore: `Criado por civilizações antigas para servir como protetor, ele se move sem vontade própria, seguindo apenas instruções gravadas.`,
}

pkmn.golurk = {
  type: ["ground","ghost"],
  bst: {
    hp: 89,
    atk: 124,
    def: 80,
    satk: 55,
    sdef: 80,
    spe: 55,
  },
    hiddenAbility: ability.moxie,
    lore: `Diz-se que civilizações perdidas o usavam como arma de guerra, e ele ainda guarda segredos sobre tecnologias esquecidas.`,
}

/*
pkmn.megaGolurk = {
  type: ["ground","ghost"],
  bst: {
    hp: 89*1.2,
    atk: 159*1.2,
    def: 105*1.2,
    satk: 70*1.2,
    sdef: 105*1.2,
    spe: 55*1.2,
  },
  lore: `A megaevolução reativa antigos sistemas internos, tornando seus punhos capazes de golpes com força devastadora.`,
}
*/

// 624 Pawniard → Bisharp → Kingambit
pkmn.pawniard = {
  type: ["dark","steel"],
  bst: {
    hp: 45,
    atk: 85,
    def: 70,
    satk: 40,
    sdef: 40,
    spe: 60,
  },
    evolve: function() { return { 1: { pkmn: pkmn.bisharp, level: evolutionLevel3 } } },
    hiddenAbility: ability.sharpness,
    eggMove : move.falseSurrender,
    lore: `Ele afia suas lâminas raspando-as umas nas outras, e se move em grupos organizados sob o comando de um líder mais forte.`,
}

pkmn.bisharp = {
  type: ["dark","steel"],
  bst: {
    hp: 65,
    atk: 125,
    def: 100,
    satk: 60,
    sdef: 70,
    spe: 70,
  },
    hiddenAbility: ability.sharpness,
    evolve: function() { return { 1: { pkmn: pkmn.kingambit, item: item.oddRock } } },
    eggMove : move.falseSurrender,
    lore: `Ele lidera grupos de Pawniard com disciplina rígida, e suas lâminas de metal podem cortar através de qualquer armadura.`,
}

pkmn.kingambit = {
  type: ["dark", "steel"],
  bst: {
    hp: 120,
    atk: 135,
    def: 120,
    satk: 60,
    sdef: 85,
    spe: 50,
  },
    hiddenAbility: ability.supremeOverlord,
    eggMove : move.falseSurrender
}

// 626 Bouffalant
pkmn.bouffalant = {
  type: ["normal"],
  bst: {
    hp: 95,
    atk: 110,
    def: 95,
    satk: 40,
    sdef: 95,
    spe: 55,
  },
    signature : move.headCharge,
    hiddenAbility: ability.metalhead,
    lore: `Sua juba espessa absorve o impacto de investidas de cabeça, permitindo que ele colida com força total sem se ferir.`,
}

// 627 Rufflet → Braviary
pkmn.rufflet = {
  type: ["normal","flying"],
  bst: {
    hp: 70,
    atk: 83,
    def: 50,
    satk: 37,
    sdef: 50,
    spe: 60,
  },
    evolve: function() { return { 1: { pkmn: pkmn.braviary, level: evolutionLevel3 } } },
    hiddenAbility: ability.galeWings,
    eggMove : move.braveBird,
    lore: `Ele desafia qualquer coisa que veja, não importa quão mais forte ou maior, buscando constantemente provar sua própria força.`,
}

pkmn.braviary = {
  type: ["normal","flying"],
  bst: {
    hp: 100,
    atk: 123,
    def: 75,
    satk: 57,
    sdef: 75,
    spe: 80,
  },
    hiddenAbility: ability.galeWings,
    eggMove : move.braveBird,
    lore: `Suas cicatrizes de batalha são exibidas com orgulho, cada uma representando um combate vencido contra um oponente formidável.`,
}

pkmn.hisuianBraviary = {
  type: ["psychic","flying"],
  bst: {
    hp: 110,
    atk: 83,
    def: 70,
    satk: 112,
    sdef: 70,
    spe: 65,
  },
    hiddenAbility: ability.galeWings,
    eggMove : move.braveBird,
    lore: `Uma forma antiga movida puramente por raiva, capaz de voos frenéticos impulsionados por fúria acumulada.`,
}

// 629 Vullaby → Mandibuzz
pkmn.vullaby = {
  type: ["dark","flying"],
  bst: {
    hp: 70,
    atk: 55,
    def: 75,
    satk: 45,
    sdef: 65,
    spe: 60,
  },
    evolve: function() { return { 1: { pkmn: pkmn.mandibuzz, level: evolutionLevel3 } } },
    lore: `Ela usa os ossos que carrega como uma saia para se proteger, trocando-a por uma nova sempre que cresce demais.`,
}

pkmn.mandibuzz = {
  type: ["dark","flying"],
  bst: {
    hp: 110,
    atk: 65,
    def: 105,
    satk: 55,
    sdef: 95,
    spe: 80,
  },
    lore: `Ela decora seu corpo com ossos coletados, e é considerada um símbolo de má sorte por muitas culturas ao redor do mundo.`,
}

// 631 Heatmor
pkmn.heatmor = {
  type: ["fire"],
  bst: {
    hp: 85,
    atk: 105,
    def: 66,
    satk: 105,
    sdef: 66,
    spe: 65,
  },
    hiddenAbility: ability.scorch,
    eggMove : move.burnUp,
    lore: `Sua língua alongada e flamejante é usada para invadir ninhos de Durant, seu inimigo natural, em busca de comida.`,
}

// 632 Durant
pkmn.durant = {
  type: ["bug","steel"],
  bst: {
    hp: 58,
    atk: 109,
    def: 112,
    satk: 48,
    sdef: 48,
    spe: 109,
  },
    hiddenAbility: ability.fullMetalBody,
    lore: `Eles trabalham em colônias extremamente organizadas, e defendem seus túneis ferozmente contra invasões de Heatmor.`,
}

// 633 Deino → Zweilous → Hydreigon
pkmn.deino = {
  type: ["dark","dragon"],
  bst: {
    hp: 52,
    atk: 65,
    def: 50,
    satk: 45,
    sdef: 50,
    spe: 38,
  },
    evolve: function() { return { 1: { pkmn: pkmn.zweilous, level: evolutionLevel2 } } },
    hiddenAbility: ability.rivalry,
    eggMove : move.dragonEnergy,
    lore: `Cego desde o nascimento, ele confia inteiramente no olfato e na audição para se mover e encontrar comida.`,
}

pkmn.zweilous = {
  type: ["dark","dragon"],
  bst: {
    hp: 80,
    atk: 90,
    def: 70,
    satk: 65,
    sdef: 70,
    spe: 58,
  },
    evolve: function() { return { 1: { pkmn: pkmn.hydreigon, level: evolutionLevel3 } } },
    hiddenAbility: ability.rivalry,
    eggMove : move.dragonEnergy,
    lore: `Suas duas cabeças frequentemente brigam entre si por comida, tornando-o um Pokémon extremamente instável e imprevisível.`,
}

pkmn.hydreigon = {
  type: ["dark","dragon"],
  bst: {
    hp: 92,
    atk: 105,
    def: 90,
    satk: 125,
    sdef: 90,
    spe: 98,
  },
    hiddenAbility: ability.rivalry,
    eggMove : move.dragonEnergy,
    lore: `Suas três cabeças devoram tudo o que veem pela frente, e ele é considerado extremamente perigoso e voraz por natureza.`,
}

// 636 Larvesta → Volcarona
pkmn.larvesta = {
  type: ["bug","fire"],
  bst: {
    hp: 55,
    atk: 85,
    def: 55,
    satk: 50,
    sdef: 55,
    spe: 60,
  },
    evolve: function() { return { 1: { pkmn: pkmn.volcarona, level: evolutionLevel3 } } },
    signature : move.fieryDance,
    lore: `Ele nasce envolto em chamas, e diz-se que o sol o protegeu desde os tempos antigos até os dias de hoje.`,
}

pkmn.volcarona = {
  type: ["bug","fire"],
  bst: {
    hp: 85,
    atk: 60,
    def: 65,
    satk: 135,
    sdef: 105,
    spe: 100,
  },
    signature : move.fieryDance,
    lore: `Suas asas em chamas podem incinerar tudo ao redor, e diz-se que ela substituiu o sol durante uma era de frio extremo.`,
}

// 638 Cobalion
pkmn.cobalion = {
  type: ["steel","fighting"],
  bst: {
    hp: 91*1.3,
    atk: 90*1.3,
    def: 129*1.3,
    satk: 90*1.3,
    sdef: 72*1.3,
    spe: 108*1.3,
  },
    hiddenAbility: ability.fullMetalBody,
    signature : move.gearUp,
    lore: `Ele tem um corpo e um coração de aço. Trabalhou com seus aliados para punir pessoas quando elas machucavam Pokémon.`,
}

// 639 Terrakion
pkmn.terrakion = {
  type: ["rock","fighting"],
  bst: {
    hp: 91*1.3,
    atk: 129*1.3,
    def: 90*1.3,
    satk: 72*1.3,
    sdef: 90*1.3,
    spe: 108*1.3,
  },
    hiddenAbility: ability.stamina,
    signature : move.rockWrecker,
    lore: `Sua investida é forte o bastante para atravessar a muralha de um castelo gigantesco com um único golpe. Este Pokémon é mencionado em lendas.`,
}

// 640 Virizion
pkmn.virizion = {
  type: ["grass","fighting"],
  bst: {
    hp: 91*1.3,
    atk: 90*1.3,
    def: 72*1.3,
    satk: 90*1.3,
    sdef: 129*1.3,
    spe: 108*1.3,
  },
    hiddenAbility: ability.stamina,
    signature : move.drumBeating,
    lore: `De sua cabeça brotam chifres afiados como lâminas. Usando movimentos semelhantes a redemoinhos, ele confunde os oponentes e os corta rapidamente.`,
}

// 641 Tornadus
pkmn.tornadus = {
  type: ["flying"],
  bst: {
    hp: 79*1.3,
    atk: 115*1.3,
    def: 70*1.3,
    satk: 125*1.3,
    sdef: 80*1.3,
    spe: 111*1.3,
  },
    hiddenAbility: ability.climaTact,
    signature : move.flyingPress,
    lore: `Tornadus expele uma enorme quantidade de energia pela cauda, causando tempestades violentas. Seu poder é grande o suficiente para arrancar casas do chão e levá-las pelos ares.`,
}

pkmn.tornadusTherian = {
    type: ["flying"],
    bst: {
        hp: 129*1.3,
        atk: 100*1.3,
        def: 80*1.3,
        satk: 110*1.3,
        sdef: 90*1.3,
        spe: 121*1.3,
    },
    lore: `Nesta forma, ele assume uma aparência mais robusta, controlando tornados poderosos com força física ainda maior.`,
}

// 642 Thundurus
pkmn.thundurus = {
  type: ["electric","flying"],
  bst: {
    hp: 79*1.3,
    atk: 115*1.3,
    def: 70*1.3,
    satk: 125*1.3,
    sdef: 80*1.3,
    spe: 111*1.3,
  },
    hiddenAbility: ability.climaTact,
    signature : move.zingZap,
    lore: `Os espinhos em sua cauda descarregam imensos raios elétricos. Ele voa pela região de Unova disparando relâmpagos por onde passa.`,
}

pkmn.thundurusTherian = {
    type: ["electric","flying"],
    bst: {
        hp: 129*1.3,
        atk: 115*1.3,
        def: 70*1.3,
        satk: 145*1.3,
        sdef: 80*1.3,
        spe: 121*1.3,
    },
    hiddenAbility: ability.prankster,
    lore: `Nesta forma, seu corpo se torna mais alongado, permitindo que ele controle relâmpagos com precisão devastadora.`,
}

// 645 Landorus
pkmn.landorus = {
  type: ["ground","flying"],
  bst: {
    hp: 89*1.3,
    atk: 125*1.3,
    def: 90*1.3,
    satk: 115*1.3,
    sdef: 80*1.3,
    spe: 101*1.3,
  },
    hiddenAbility: ability.climaTact,
    signature : move.sandsearStorm,
    lore: `As terras visitadas por Landorus produzem colheitas tão abundantes que ele passou a ser reverenciado como o Guardião dos Campos.`,
}

pkmn.landorusTherian = {
    type: ["ground","flying"],
    bst: {
        hp: 129*1.3,
        atk: 145*1.3,
        def: 90*1.3,
        satk: 105*1.3,
        sdef: 110*1.3,
        spe: 91*1.3,
    },
    lore: `Nesta forma, ele adquire uma aparência mais terrena, capaz de fertilizar solos áridos com sua energia natural.`,
}

// 905 Enamorus
pkmn.enamorus = {
  type: ["fairy","flying"],
  bst: {
    hp: 74*1.3,
    atk: 115*1.3,
    def: 70*1.3,
    satk: 135*1.3,
    sdef: 80*1.3,
    spe: 106*1.3,
  },
    hiddenAbility: ability.contrary,
}

pkmn.enamorusTherian = {
    type: ["fairy","flying"],
    bst: {
        hp: 74*1.3,
        atk: 115*1.3,
        def: 110*1.3,
        satk: 135*1.3,
        sdef: 140*1.3,
        spe: 46*1.3,
    }
}

// 643 Reshiram
pkmn.reshiram = {
  type: ["dragon","fire"],
  bst: {
    hp: 100*1.3,
    atk: 120*1.3,
    def: 100*1.3,
    satk: 150*1.3,
    sdef: 120*1.3,
    spe: 90*1.3,
  },
    hiddenAbility: ability.treasureOfRuin,
    signature : move.blueFlare,
    lore: `Quando a cauda de Reshiram entra em combustão, a energia térmica gerada movimenta a atmosfera e altera o clima do mundo.`,
}

// 644 Zekrom
pkmn.zekrom = {
  type: ["dragon","electric"],
  bst: {
    hp: 100*1.3,
    atk: 150*1.3,
    def: 120*1.3,
    satk: 120*1.3,
    sdef: 100*1.3,
    spe: 90*1.3,
  },
    hiddenAbility: ability.treasureOfRuin,
    signature : move.boltStrike,
    lore: `Ocultando-se em nuvens de tempestade, ele voa por toda a região de Unova. Ele gera eletricidade em sua cauda.`,
}


// 646 Kyurem
pkmn.kyurem = {
  type: ["dragon","ice"],
  bst: {
    hp: 125*1.35,
    atk: 130*1.35,
    def: 90*1.35,
    satk: 130*1.35,
    sdef: 90*1.35,
    spe: 95*1.35,
  },
    hiddenAbility: ability.glaciate,
    signature : move.glaciate,
    lore: `Este lendário Pokémon de gelo aguarda que um herói preencha as partes ausentes de seu corpo com a Verdade ou os Ideais.`,
}

pkmn.kyuremBlack = {
    type: ["dragon","ice"],
    bst: {
        hp: 165*1.35,
        atk: 180*1.35,
        def: 100*1.35,
        satk: 120*1.35,
        sdef: 90*1.35,
        spe: 110*1.35,
    },
    hiddenAbility: ability.glaciate,
    signature : move.glaciate,
    lore: `A semelhança entre os genes de Zekrom e Kyurem permitiu que Kyurem absorvesse Zekrom. Agora, Kyurem pode usar tanto o poder da eletricidade quanto o do gelo.`,
}

pkmn.kyuremWhite = {
    type: ["dragon","ice"],
    bst: {
        hp: 165*1.35,
        atk: 120*1.35,
        def: 90*1.35,
        satk: 180*1.35,
        sdef: 100*1.35,
        spe: 110*1.35,
    },
    hiddenAbility: ability.glaciate,
    signature : move.glaciate,
    lore: `A semelhança entre os genes de Reshiram e Kyurem permitiu que Kyurem absorvesse Reshiram. Agora, Kyurem pode usar tanto o poder do fogo quanto o do gelo.`,
}

// 647 Keldeo
pkmn.keldeo = {
  type: ["water","fighting"],
  bst: {
    hp: 91*1.5,
    atk: 72*1.5,
    def: 90*1.5,
    satk: 129*1.5,
    sdef: 90*1.5,
    spe: 108*1.5,
  },
    lore: `Ele viaja em busca de batalhas dignas para aperfeiçoar suas habilidades, seguindo os passos de lendários guerreiros antigos.`,
}

pkmn.keldeoResolute = {
  type: ["water","fighting"],
  bst: {
    hp: 91*1.5,
    atk: 72*1.5,
    def: 90*1.5,
    satk: 129*1.5,
    sdef: 90*1.5,
    spe: 108*1.5,
  },
    lore: `Após completar seu treinamento com os Guerreiros da Espada, ele assume uma postura mais determinada e afiada em combate.`,
}

// 648 Meloetta
pkmn.meloetta = {
  type: ["normal","psychic"],
  bst: {
    hp: 100*1.5,
    atk: 77*1.5,
    def: 77*1.5,
    satk: 128*1.5,
    sdef: 128*1.5,
    spe: 90*1.5,
  },
    hiddenAbility: ability.cacophony,
    signature : move.relicSong,
    lore: `Seu canto pode alterar o ambiente ao redor, e diz-se que sua melodia foi transmitida através de gerações desde tempos antigos.`,
}

pkmn.meloettaPirouette = {
  type: ["normal","fighting"],
  bst: {
    hp: 100*1.5,
    atk: 128*1.5,
    def: 90*1.5,
    satk: 77*1.5,
    sdef: 77*1.5,
    spe: 128*1.5,
  },
    hiddenAbility: ability.cacophony,
    signature : move.relicSong,
    lore: `Ao dançar em um ritmo específico, sua forma muda completamente, transformando sua melodia serena em uma dança de combate.`,
}

// 649 Genesect
pkmn.genesect = {
  type: ["bug","steel"],
  bst: {
    hp: 71*1.5,
    atk: 120*1.5,
    def: 95*1.5,
    satk: 120*1.5,
    sdef: 95*1.5,
    spe: 99*1.5,
  },
    hiddenAbility: ability.megaLauncher,
    eggMove : move.conversion,
    lore: `Um Pokémon antigo modificado com tecnologia avançada, seu canhão nas costas foi instalado para maximizar seu poder de combate.`,
}

/*

pkmn.genesectDouse = {
  type: ["bug","water"],
  bst: {
    hp: 71,
    atk: 120,
    def: 95,
    satk: 120,
    sdef: 95,
    spe: 99,
  },
    hiddenAbility: ability.megaLauncher,
}

pkmn.genesectShock = {
  type: ["bug","electric"],
  bst: {
    hp: 71,
    atk: 120,
    def: 95,
    satk: 120,
    sdef: 95,
    spe: 99,
  },
    hiddenAbility: ability.megaLauncher,
}

pkmn.genesectBurn = {
  type: ["bug","fire"],
  bst: {
    hp: 71,
    atk: 120,
    def: 95,
    satk: 120,
    sdef: 95,
    spe: 99,
  },
    hiddenAbility: ability.megaLauncher,
}

pkmn.genesectChill = {
  type: ["bug","ice"],
  bst: {
    hp: 71,
    atk: 120,
    def: 95,
    satk: 120,
    sdef: 95,
    spe: 99,
  },
    hiddenAbility: ability.megaLauncher,
}

*/

// 650 Chespin → Quilladin → Chesnaught
pkmn.chespin = {
  type: ["grass"],
  bst: {
    hp: 56,
    atk: 61,
    def: 65,
    satk: 48,
    sdef: 45,
    spe: 38,
  },
    evolve: function() { return { 1: { pkmn: pkmn.quilladin, level: evolutionLevel1 } } },
    lore: `Sua armadura de espinhos protege partes vitais do corpo, mas seu peito ainda é vulnerável, então ele evita ataques frontais diretos.`,
}

pkmn.quilladin = {
  type: ["grass"],
  bst: {
    hp: 61,
    atk: 78,
    def: 95,
    satk: 56,
    sdef: 58,
    spe: 57,
  },
    evolve: function() { return { 1: { pkmn: pkmn.chesnaught, level: evolutionLevel2 } } },
    lore: `Sua armadura ficou ainda mais resistente, e ele avança sem hesitação contra qualquer oponente, confiando totalmente em sua defesa.`,
}

pkmn.chesnaught = {
  type: ["grass","fighting"],
  bst: {
    hp: 88,
    atk: 107,
    def: 122,
    satk: 74,
    sdef: 75,
    spe: 64,
  },
    lore: `Seus braços grossos como troncos de árvore podem bloquear qualquer ataque, e ele protege companheiros mais fracos com o próprio corpo.`,
}

pkmn.megaChesnaught = {
  type: ["grass","fighting"],
  bst: {
    hp: 88*1.2,
    atk: 137*1.2,
    def: 172*1.2,
    satk: 74*1.2,
    sdef: 115*1.2,
    spe: 44*1.2,
  },
    hiddenAbility: ability.treasureOfRuin,
    signature : move.seedFlare,
    lore: `As espinhas de sua carapaça se alongaram e se tornaram como lanças. Ele encara qualquer adversário de frente para proteger aqueles que estão atrás dele.`,
}

// 653 Fennekin → Braixen → Delphox
pkmn.fennekin = {
  type: ["fire"],
  bst: {
    hp: 40,
    atk: 45,
    def: 40,
    satk: 62,
    sdef: 60,
    spe: 60,
  },
    evolve: function() { return { 1: { pkmn: pkmn.braixen, level: evolutionLevel1 } } },
    hiddenAbility: ability.fieryPelt,
    signature : move.mysticalFire,
    lore: `Ele solta ar quente pelas orelhas quando late, e mastiga gravetos para acalmar os nervos antes de uma batalha.`,
}

pkmn.braixen = {
  type: ["fire"],
  bst: {
    hp: 70,
    atk: 59,
    def: 58,
    satk: 90,
    sdef: 75,
    spe: 73,
  },
    evolve: function() { return { 1: { pkmn: pkmn.delphox, level: evolutionLevel2 } } },
    hiddenAbility: ability.fieryPelt,
    signature : move.mysticalFire,
    lore: `Ele guarda um graveto na cauda, e o atrita para gerar faíscas antes de lançar poderosos ataques de fogo.`,
}

pkmn.delphox = {
  type: ["fire","psychic"],
  bst: {
    hp: 75,
    atk: 69,
    def: 72,
    satk: 114,
    sdef: 100,
    spe: 104,
  },
    hiddenAbility: ability.fieryPelt,
    signature : move.mysticalFire,
    lore: `Ela consegue ver o futuro observando as chamas que sopra de dentro do graveto que segura, prevendo os movimentos do adversário.`,
}

pkmn.megaDelphox = {
  type: ["fire","psychic"],
  bst: {
    hp: 75*1.2,
    atk: 69*1.2,
    def: 72*1.2,
    satk: 159*1.2,
    sdef: 125*1.2,
    spe: 134*1.2,
  },
    hiddenAbility: ability.fieryPelt,
    signature : move.mysticalFire,
    lore: `A Megaevolução ampliou ainda mais seus poderes psíquicos e suas chamas místicas. Ao girar seu cajado flamejante, Mega Delphox pode prever os movimentos do inimigo e envolvê-lo em um redemoinho de fogo.`,
}

// 656 Froakie → Frogadier → Greninja
pkmn.froakie = {
  type: ["water"],
  bst: {
    hp: 41,
    atk: 56,
    def: 40,
    satk: 62,
    sdef: 44,
    spe: 71,
  },
    evolve: function() { return { 1: { pkmn: pkmn.frogadier, level: evolutionLevel1 } } },
    hiddenAbility: ability.protean,
    signature : move.waterShuriken,
    lore: `Ele cobre o corpo com bolhas espumosas que amortecem impactos, e a espuma se torna mais resistente quanto mais ele treina.`,
}

pkmn.frogadier = {
  type: ["water"],
  bst: {
    hp: 54,
    atk: 63,
    def: 52,
    satk: 83,
    sdef: 56,
    spe: 97,
  },
    evolve: function() { return { 1: { pkmn: pkmn.greninja, level: evolutionLevel2 } } },
    hiddenAbility: ability.protean,
    signature : move.waterShuriken,
    lore: `Ele consegue lançar pedrinhas cobertas de espuma com precisão cirúrgica, atingindo alvos a mais de dez metros de distância.`,
}

pkmn.greninja = {
  type: ["water","dark"],
  bst: {
    hp: 72,
    atk: 95,
    def: 67,
    satk: 103,
    sdef: 71,
    spe: 122,
  },
    hiddenAbility: ability.protean,
    signature : move.waterShuriken,
    lore: `Ele se move tão rápido que parece invisível, e cria estrelas de água afiadas o suficiente para cortar através de um poste de metal.`,
}

pkmn.greninjaAsh = {
  rename: `Ash Greninja`,
  type: ["water","dark"],
  bst: {
    hp: 72,
    atk: 125,
    def: 77,
    satk: 133,
    sdef: 81,
    spe: 142,
  },
    hiddenAbility: ability.protean,
    signature : move.waterShuriken
}

pkmn.megaGreninja = {
  type: ["water","dark"],
  bst: {
    hp: 72*1.2,
    atk: 125*1.2,
    def: 77*1.2,
    satk: 133*1.2,
    sdef: 81*1.2,
    spe: 142*1.2,
  },
    lore: `A megaevolução aumenta sua velocidade a níveis extremos, criando uma espécie de aliado sombrio que aparece atrás dele em batalha.`,
}

// 659 Bunnelby → Diggersby
pkmn.bunnelby = {
  type: ["normal"],
  bst: {
    hp: 38,
    atk: 36,
    def: 38,
    satk: 32,
    sdef: 36,
    spe: 57,
  },
    evolve: function() { return { 1: { pkmn: pkmn.diggersby, level: evolutionLevel1 } } },
    hiddenAbility: ability.hugePower,
    eggMove : move.highHorsepower,
    lore: `Suas orelhas funcionam como pás, permitindo que ele cave túneis subterrâneos rapidamente em busca de raízes para comer.`,
}

pkmn.diggersby = {
  type: ["normal","ground"],
  bst: {
    hp: 85,
    atk: 56,
    def: 77,
    satk: 50,
    sdef: 77,
    spe: 78,
  },
    hiddenAbility: ability.hugePower,
    eggMove : move.highHorsepower,
    lore: `Suas orelhas são fortes o suficiente para escavar através de rocha sólida, e ele constrói complexos sistemas de túneis subterrâneos.`,
}

// 661 Fletchling → Fletchinder → Talonflame
pkmn.fletchling = {
  type: ["normal","flying"],
  bst: {
    hp: 45,
    atk: 50,
    def: 43,
    satk: 40,
    sdef: 38,
    spe: 62,
  },
    evolve: function() { return { 1: { pkmn: pkmn.fletchinder, level: evolutionLevel1 } } },
    hiddenAbility: ability.galeWings,
    eggMove : move.braveBird,
    lore: `Seu canto é tão bonito que é usado como música ambiente, embora ele se torne extremamente feroz ao defender seu território.`,
}

pkmn.fletchinder = {
  type: ["fire","flying"],
  bst: {
    hp: 80,
    atk: 73,
    def: 55,
    satk: 56,
    sdef: 52,
    spe: 84,
  },
    evolve: function() { return { 1: { pkmn: pkmn.talonflame, level: evolutionLevel2 } } },
    hiddenAbility: ability.galeWings,
    eggMove : move.braveBird,
    lore: `As brasas em sua cauda ficam mais quentes conforme ele se anima, e ele ataca mergulhando em alta velocidade contra presas.`,
}

pkmn.talonflame = {
  type: ["fire","flying"],
  bst: {
    hp: 80,
    atk: 81,
    def: 71,
    satk: 74,
    sdef: 69,
    spe: 126,
  },
    hiddenAbility: ability.galeWings,
    eggMove : move.braveBird,
    lore: `Suas asas em chamas permitem mergulhos a mais de 300 quilômetros por hora, capazes de derrubar presas em um único golpe certeiro.`,
}

// 664 Scatterbug → Spewpa → Vivillon
pkmn.scatterbug = {
  type: ["bug"],
  bst: {
    hp: 38,
    atk: 35,
    def: 40,
    satk: 27,
    sdef: 25,
    spe: 35,
  },
    evolve: function() { return { 1: { pkmn: pkmn.spewpa, level: evolutionLevel1 } } },
    hiddenAbility: ability.tintedLens,
    lore: `Os padrões do pó que cobre seu corpo variam de acordo com a região onde ele vive, refletindo o clima e a cultura locais.`,
}

pkmn.spewpa = {
  type: ["bug"],
  bst: {
    hp: 45,
    atk: 22,
    def: 60,
    satk: 27,
    sdef: 30,
    spe: 29,
  },
    evolve: function() { return { 1: { pkmn: pkmn.vivillon, level: evolutionLevel1 } } },
    hiddenAbility: ability.tintedLens,
    lore: `Ele permanece completamente imóvel dentro de seu casulo protetor, absorvendo nutrientes enquanto se prepara para a metamorfose final.`,
}

pkmn.vivillon = {
  type: ["bug","flying"],
  bst: {
    hp: 80,
    atk: 52,
    def: 50,
    satk: 90,
    sdef: 50,
    spe: 89,
  },
    hiddenAbility: ability.tintedLens,
    lore: `As escamas em suas asas formam padrões únicos, variando de acordo com a região específica onde ele nasceu e cresceu.`,
}

pkmn.vivillonArchipelago = {
  type: ["flying","rock"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonContinental = {
  type: ["flying","electric"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonElegant = {
  type: ["flying","ghost"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonFancy = {
  type: ["flying","fairy"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonGarden = {
  type: ["flying","grass"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonHighPlains = {
  type: ["flying","fighting"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonIcySnow = {
  type: ["flying","ice"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonJungle = {
  type: ["flying","bug"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonMarine = {
  type: ["flying","water"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonModern = {
  type: ["flying","steel"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonMonsoon = {
  type: ["flying"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonOcean = {
  type: ["flying","fire"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonPokeball = {
  type: ["bug","flying"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonPolar = {
  type: ["flying","dark"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonRiver = {
  type: ["flying","water"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonSandstorm = {
  type: ["flying","ground"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonSavanna = {
  type: ["flying","bug"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonSun = {
  type: ["flying","psychic"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

pkmn.vivillonTundra = {
  type: ["flying","ice"],
  bst: {
    hp: 80,
    atk: 0,
    def: 50,
    satk: 140,
    sdef: 50,
    spe: 100,
  },
    hiddenAbility: ability.tintedLens,
}

// 667 Litleo → Pyroar
pkmn.litleo = {
  type: ["fire","normal"],
  bst: {
    hp: 62,
    atk: 50,
    def: 58,
    satk: 73,
    sdef: 54,
    spe: 72,
  },
    evolve: function() { return { 1: { pkmn: pkmn.pyroar, level: evolutionLevel2 } } },
    hiddenAbility: ability.moxie,
    signature : move.nobleRoar,
    lore: `Machos e fêmeas vivem em grupos organizados chamados orgulho, onde fêmeas geralmente lideram a caça pelo território.`,
}

pkmn.pyroar = {
  type: ["fire","normal"],
  bst: {
    hp: 86,
    atk: 68,
    def: 72,
    satk: 109,
    sdef: 66,
    spe: 106,
  },
    hiddenAbility: ability.moxie,
    signature : move.nobleRoar,
    evolve: function() { return { 1: { pkmn: pkmn.megaPyroar, item: item.pyroarite } } },
    lore: `Sua juba flamejante pode se acender ainda mais quando ele está protegendo seus filhotes de qualquer ameaça externa.`,
}

pkmn.megaPyroar = {
  type: ["fire","normal"],
  bst: {
    hp: 86*1.2,
    atk: 88*1.2,
    def: 92*1.2,
    satk: 129*1.2,
    sdef: 86*1.2,
    spe: 126*1.2,
  },
    hiddenAbility: ability.moxie,
    signature : move.nobleRoar,
    lore: `A megaevolução intensifica sua juba de fogo, tornando seu rugido capaz de intimidar até os predadores mais temíveis.`,
}

// 669 Flabébé → Floette → Florges
pkmn.flabebe = {
  type: ["fairy"],
  bst: {
    hp: 44,
    atk: 38,
    def: 39,
    satk: 61,
    sdef: 79,
    spe: 42,
  },
    evolve: function() { return { 1: { pkmn: pkmn.floette, level: evolutionLevel1 } } },
    hiddenAbility: ability.naturalCure,
    lore: `Ela se liga a uma única flor durante toda a vida, e a cor da flor determina o tipo de energia que ela consegue canalizar.`,
}

pkmn.flabebeBlue = {
  type: ["fairy","water"],
  bst: {
    hp: 44,
    atk: 38,
    def: 39,
    satk: 61,
    sdef: 79,
    spe: 42,
  },
  evolve: function() { return { 1: { pkmn: pkmn.floetteBlue, level: evolutionLevel1 } } },
  hiddenAbility: ability.naturalCure,
}

pkmn.flabebeOrange = {
  type: ["fairy","ground"],
  bst: {
    hp: 44,
    atk: 38,
    def: 39,
    satk: 61,
    sdef: 79,
    spe: 42,
  },
  evolve: function() { return { 1: { pkmn: pkmn.floetteOrange, level: evolutionLevel1 } } },
  hiddenAbility: ability.naturalCure,
}

pkmn.flabebeWhite = {
  type: ["fairy","ice"],
  bst: {
    hp: 44,
    atk: 38,
    def: 39,
    satk: 61,
    sdef: 79,
    spe: 42,
  },
  evolve: function() { return { 1: { pkmn: pkmn.floetteWhite, level: evolutionLevel1 } } },
  hiddenAbility: ability.naturalCure,
}

pkmn.flabebeYellow = {
  type: ["fairy","electric"],
  bst: {
    hp: 44,
    atk: 38,
    def: 39,
    satk: 61,
    sdef: 79,
    spe: 42,
  },
  evolve: function() { return { 1: { pkmn: pkmn.floetteYellow, level: evolutionLevel1 } } },
  hiddenAbility: ability.naturalCure,
}

pkmn.floette = {
  type: ["fairy"],
  bst: {
    hp: 54,
    atk: 45,
    def: 47,
    satk: 75,
    sdef: 98,
    spe: 52,
  },
    evolve: function() { return { 1: { pkmn: pkmn.florges, item: item.shinyStone } } },
    hiddenAbility: ability.naturalCure,
    lore: `Ela consegue voar por curtas distâncias segurando sua flor, e cuida dela com extremo carinho, regando-a diariamente.`,
}

pkmn.floetteBlue = {
  type: ["fairy","water"],
  bst: {
    hp: 54,
    atk: 45,
    def: 47,
    satk: 75,
    sdef: 98,
    spe: 52,
  },
  evolve: function() { return { 1: { pkmn: pkmn.florgesBlue, item: item.shinyStone } } },
  hiddenAbility: ability.naturalCure,
}

pkmn.floetteOrange = {
  type: ["fairy","ground"],
  bst: {
    hp: 54,
    atk: 45,
    def: 47,
    satk: 75,
    sdef: 98,
    spe: 52,
  },
  evolve: function() { return { 1: { pkmn: pkmn.florgesOrange, item: item.shinyStone } } },
  hiddenAbility: ability.naturalCure,
}

pkmn.floetteWhite = {
  type: ["fairy","ice"],
  bst: {
    hp: 54,
    atk: 45,
    def: 47,
    satk: 75,
    sdef: 98,
    spe: 52,
  },
  evolve: function() { return { 1: { pkmn: pkmn.florgesWhite, item: item.shinyStone } } },
  hiddenAbility: ability.naturalCure,
}

pkmn.floetteYellow = {
  type: ["fairy","electric"],
  bst: {
    hp: 54,
    atk: 45,
    def: 47,
    satk: 75,
    sdef: 98,
    spe: 52,
  },
  evolve: function() { return { 1: { pkmn: pkmn.florgesYellow, item: item.shinyStone } } },
  hiddenAbility: ability.naturalCure,
}

pkmn.floetteEternal = {
  type: ["fairy"],
  bst: {
    hp: 74,
    atk: 65,
    def: 67,
    satk: 125,
    sdef: 128,
    spe: 92,
  },
  // evolve: function() { return { 1: { pkmn: pkmn.megaFloette, item: item.floettite } } },
  hiddenAbility: ability.naturalCure,
}

pkmn.megaFloette = {
  type: ["fairy"],
  bst: {
    hp: 120*1.2,
    atk: 85*1.2,
    def: 87*1.2,
    satk: 205*1.2,
    sdef: 148*1.2,
    spe: 102*1.2,
  },
    lore: `Uma variação rara ligada a uma flor eterna; dizem que ela nunca envelhece enquanto permanecer ao lado dessa flor especial.`,
}

pkmn.florges = {
  type: ["fairy"],
  bst: {
    hp: 78,
    atk: 65,
    def: 68,
    satk: 112,
    sdef: 134,
    spe: 75,
  },
    hiddenAbility: ability.naturalCure,
    lore: `Ela dedica a vida inteira a cuidar de jardins de flores, e sua energia está diretamente ligada à saúde das plantas ao redor.`,
}

pkmn.florgesBlue = {
  type: ["fairy","water"],
  bst: {
    hp: 78,
    atk: 65,
    def: 68,
    satk: 112,
    sdef: 134,
    spe: 75,
  },
    hiddenAbility: ability.naturalCure,
}

pkmn.florgesOrange = {
  type: ["fairy","ground"],
  bst: {
    hp: 78,
    atk: 65,
    def: 68,
    satk: 112,
    sdef: 134,
    spe: 75,
  },
    hiddenAbility: ability.naturalCure,
}

pkmn.florgesWhite = {
  type: ["fairy","ice"],
  bst: {
    hp: 78,
    atk: 65,
    def: 68,
    satk: 112,
    sdef: 134,
    spe: 75,
  },
    hiddenAbility: ability.naturalCure,
}

pkmn.florgesYellow = {
  type: ["fairy","electric"],
  bst: {
    hp: 78,
    atk: 65,
    def: 68,
    satk: 112,
    sdef: 134,
    spe: 75,
  },
    hiddenAbility: ability.naturalCure,
}

// 672 Skiddo → Gogoat
pkmn.skiddo = {
  type: ["grass"],
  bst: {
    hp: 66,
    atk: 65,
    def: 48,
    satk: 62,
    sdef: 57,
    spe: 52,
  },
    evolve: function() { return { 1: { pkmn: pkmn.gogoat, level: evolutionLevel2 } } },
    hiddenAbility: ability.grassyPelt,
    eggMove : move.trailblaze,
    lore: `Seu pelo cresce continuamente, e é usado tradicionalmente para tecer tapetes macios e resistentes em vilarejos rurais.`,
}

pkmn.gogoat = {
  type: ["grass"],
  bst: {
    hp: 123,
    atk: 100,
    def: 62,
    satk: 97,
    sdef: 81,
    spe: 68,
  },
    hiddenAbility: ability.grassyPelt,
    eggMove : move.trailblaze,
    lore: `Ele é montado como meio de transporte em terrenos íngremes, e seus chifres sensíveis permitem que o cavaleiro o guie apenas tocando.`,
}

// 674 Pancham → Pangoro
pkmn.pancham = {
  type: ["fighting"],
  bst: {
    hp: 67,
    atk: 82,
    def: 62,
    satk: 46,
    sdef: 48,
    spe: 43,
  },
    evolve: function() { return { 1: { pkmn: pkmn.pangoro, level: evolutionLevel2 } } },
    hiddenAbility: ability.ironFist,
    lore: `Ele tenta constantemente parecer assustador para impressionar outros, mas raramente consegue intimidar alguém de verdade.`,
}

pkmn.pangoro = {
  type: ["fighting","dark"],
  bst: {
    hp: 95,
    atk: 124,
    def: 78,
    satk: 69,
    sdef: 71,
    spe: 58,
  },
    hiddenAbility: ability.ironFist,
    lore: `Ele carrega um talo de bambu que usa como arma, e nunca ataca por trás, considerando isso covardia entre guerreiros.`,
}

// 676 Furfrou
pkmn.furfrou = {
  type: ["normal"],
  bst: {
    hp: 75,
    atk: 80,
    def: 60,
    satk: 65,
    sdef: 90,
    spe: 102,
  },
    lore: `Seu pelo pode ser cortado e estilizado de diversas formas, uma tradição que remonta a estilos usados por realeza antiga.`,
}

pkmn.furfrouHeart = {
  type: ["normal","fairy"],
  bst: {
    hp: 75,
    atk: 80,
    def: 60,
    satk: 65,
    sdef: 90,
    spe: 102,
  },
}

pkmn.furfrouStar = {
  type: ["normal","ice"],
  bst: {
    hp: 75,
    atk: 80,
    def: 60,
    satk: 65,
    sdef: 90,
    spe: 102,
  },
}

pkmn.furfrouDiamond = {
  type: ["normal","electric"],
  bst: {
    hp: 75,
    atk: 80,
    def: 60,
    satk: 65,
    sdef: 90,
    spe: 102,
  },
}

pkmn.furfrouDebutante = {
  type: ["normal","ground"],
  bst: {
    hp: 75,
    atk: 80,
    def: 60,
    satk: 65,
    sdef: 90,
    spe: 102,
  },
}

pkmn.furfrouMatron = {
  type: ["normal","psychic"],
  bst: {
    hp: 75,
    atk: 80,
    def: 60,
    satk: 65,
    sdef: 90,
    spe: 102,
  },
}

pkmn.furfrouDandy = {
  type: ["normal","grass"],
  bst: {
    hp: 75,
    atk: 80,
    def: 60,
    satk: 65,
    sdef: 90,
    spe: 102,
  },
}

pkmn.furfrouReine = {
  type: ["normal","steel"],
  bst: {
    hp: 75,
    atk: 80,
    def: 60,
    satk: 65,
    sdef: 90,
    spe: 102,
  },
}

pkmn.furfrouKabuki = {
  type: ["normal","fire"],
  bst: {
    hp: 75,
    atk: 80,
    def: 60,
    satk: 65,
    sdef: 90,
    spe: 102,
  },
}

pkmn.furfrouPharaoh = {
  type: ["normal","water"],
  bst: {
    hp: 75,
    atk: 80,
    def: 60,
    satk: 65,
    sdef: 90,
    spe: 102,
  },
}

// 677 Espurr → Meowstic
pkmn.espurr = {
  type: ["psychic"],
  bst: {
    hp: 62,
    atk: 48,
    def: 54,
    satk: 63,
    sdef: 60,
    spe: 68,
  },
    evolve: function() { return { 1: { pkmn: pkmn.meowstic, level: evolutionLevel2 } } },
    hiddenAbility: ability.pixiePelt,
    lore: `O poder psíquico em seus olhos é tão intenso que ele precisa mantê-los fechados a maior parte do tempo para evitar destruir tudo ao redor.`,
}

pkmn.meowstic = {
  type: ["psychic"],
  bst: {
    hp: 74,
    atk: 48,
    def: 76,
    satk: 83,
    sdef: 81,
    spe: 104,
  },
    hiddenAbility: ability.pixiePelt,
    lore: `Ele mantém as orelhas sempre abaixadas para conter seus poderes psíquicos, liberando-os apenas quando decide atacar de verdade.`,
}

/*

pkmn.megaMeowstic = {
  type: ["psychic"],
  bst: {
    hp: 74,
    atk: 48,
    def: 76,
    satk: 143,
    sdef: 101,
    spe: 124,
  },
  lore: `A megaevolução libera completamente seus poderes psíquicos contidos, amplificando drasticamente sua força mental.`,
}

*/

// 679 Honedge → Doublade → Aegislash
pkmn.honedge = {
  type: ["steel","ghost"],
  bst: {
    hp: 45,
    atk: 80,
    def: 100,
    satk: 35,
    sdef: 37,
    spe: 28,
  },
    evolve: function() { return { 1: { pkmn: pkmn.doublade, level: evolutionLevel2 } } },
    hiddenAbility: ability.iaido,
    signature : move.kingsShield,
    lore: `Formado pela alma de um antigo espadachim, diz-se que ele suga a energia vital de quem segura seu cabo dourado.`,
}

pkmn.doublade = {
  type: ["steel","ghost"],
  bst: {
    hp: 59,
    atk: 110,
    def: 150,
    satk: 45,
    sdef: 49,
    spe: 35,
  },
    evolve: function() { return { 1: { pkmn: pkmn.aegislash, item: item.duskStone } } },
    hiddenAbility: ability.iaido,
    signature : move.kingsShield,
    lore: `Duas espadas unidas por uma corrente espiritual, elas se movem em perfeita sincronia para atacar com precisão mortal.`,
}

pkmn.aegislash = {
  type: ["steel","ghost"],
  bst: {
    hp: 60,
    atk: 50,
    def: 150,
    satk: 50,
    sdef: 150,
    spe: 60,
  },
    hiddenAbility: ability.iaido,
    signature : move.kingsShield,
    lore: `Ele alterna entre uma postura defensiva de escudo e uma ofensiva de espada, decidindo estrategicamente qual usar durante o combate.`,
}

// 682 Spritzee → Aromatisse
pkmn.spritzee = {
  type: ["fairy"],
  bst: {
    hp: 78,
    atk: 52,
    def: 60,
    satk: 63,
    sdef: 65,
    spe: 23,
  },
    evolve: function() { return { 1: { pkmn: pkmn.aromatisse, item: item.shinyStone } } },
    hiddenAbility: ability.mistySurge,
    signature : move.aromaticMist,
    lore: `O aroma doce que ela exala pode acalmar qualquer um instantaneamente, e já foi usado como perfume por nobres antigos.`,
}

pkmn.aromatisse = {
  type: ["fairy"],
  bst: {
    hp: 101,
    atk: 72,
    def: 72,
    satk: 99,
    sdef: 89,
    spe: 29,
  },
    hiddenAbility: ability.mistySurge,
    signature : move.aromaticMist,
    lore: `Ela cria perfumes complexos misturando diferentes essências, capazes de curar ferimentos ou provocar sono profundo.`,
}

// 684 Swirlix → Slurpuff
pkmn.swirlix = {
  type: ["fairy"],
  bst: {
    hp: 62,
    atk: 48,
    def: 66,
    satk: 59,
    sdef: 57,
    spe: 49,
  },
    evolve: function() { return { 1: { pkmn: pkmn.slurpuff, item: item.shinyStone } } },
    hiddenAbility: ability.unburden,
    eggMove : move.bellyDrum,
    lore: `Seu pelo é tão doce quanto algodão-doce, e ele precisa se alimentar de açúcar constantemente para manter sua energia.`,
}

pkmn.slurpuff = {
  type: ["fairy"],
  bst: {
    hp: 82,
    atk: 80,
    def: 86,
    satk: 85,
    sdef: 75,
    spe: 72,
  },
    hiddenAbility: ability.unburden,
    eggMove : move.bellyDrum,
    lore: `Seu olfato extremamente apurado consegue distinguir milhões de aromas diferentes, tornando-o um excelente ajudante de confeiteiros.`,
}

// 686 Inkay → Malamar
pkmn.inkay = {
  type: ["dark","psychic"],
  bst: {
    hp: 53,
    atk: 54,
    def: 53,
    satk: 37,
    sdef: 46,
    spe: 45,
  },
    evolve: function() { return { 1: { pkmn: pkmn.malamar, level: evolutionLevel2 } } },
    hiddenAbility: ability.contrary,
    eggMove : move.luminaCrash,
    lore: `As luzes que piscam em seu corpo hipnotizam presas e predadores, deixando-os momentaneamente confusos e vulneráveis.`,
}

pkmn.malamar = {
  type: ["dark","psychic"],
  bst: {
    hp: 86,
    atk: 92,
    def: 88,
    satk: 68,
    sdef: 75,
    spe: 73,
  },
    hiddenAbility: ability.contrary,
    eggMove : move.luminaCrash,
    lore: `Ele controla mentes usando padrões de luz hipnotizantes emitidos de seu corpo, manipulando até humanos para fazer sua vontade.`,
}

pkmn.megaMalamar = {
  type: ["dark","psychic"],
  bst: {
    hp: 86*1.2,
    atk: 102*1.2,
    def: 88*1.2,
    satk: 98*1.2,
    sdef: 120*1.2,
    spe: 88*1.2,
  },
    hiddenAbility: ability.contrary,
    eggMove : move.luminaCrash,
    lore: `A megaevolução amplifica seus poderes hipnóticos, tornando seus padrões de luz quase impossíveis de resistir.`,
}

// 688 Binacle → Barbaracle
pkmn.binacle = {
  type: ["rock","water"],
  bst: {
    hp: 42,
    atk: 52,
    def: 67,
    satk: 39,
    sdef: 56,
    spe: 50,
  },
    evolve: function() { return { 1: { pkmn: pkmn.barbaracle, level: evolutionLevel2 } } },
    hiddenAbility: ability.ambidextrous,
    lore: `Dois seres pequenos que vivem sempre juntos em uma única concha, cooperando para sobreviver às marés fortes.`,
}

pkmn.barbaracle = {
  type: ["rock","water"],
  bst: {
    hp: 72,
    atk: 105,
    def: 115,
    satk: 54,
    sdef: 86,
    spe: 68,
  },
    evolve: function() { return { 1: { pkmn: pkmn.megaBarbaracle, item: item.barbaracite } } },
    hiddenAbility: ability.ambidextrous,
    lore: `Seis braços controlados por uma única mente central atacam simultaneamente, tornando seus golpes quase impossíveis de prever.`,
}

pkmn.megaBarbaracle = {
  type: ["rock","fighting"],
  bst: {
    hp: 72*1.2,
    atk: 150*1.2,
    def: 150*1.2,
    satk: 64*1.2,
    sdef: 106*1.2,
    spe: 88*1.2,
  },
    hiddenAbility: ability.ambidextrous,
    signature : move.rockWrecker,
    lore: `Ele usa seus muitos braços para brincar com seus oponentes. Isso mantém sua cabeça extremamente ocupada.`,
}

// 690 Skrelp → Dragalge
pkmn.skrelp = {
  type: ["poison","water"],
  bst: {
    hp: 50,
    atk: 60,
    def: 60,
    satk: 60,
    sdef: 60,
    spe: 30,
  },
    evolve: function() { return { 1: { pkmn: pkmn.dragalge, level: evolutionLevel3 } } },
    hiddenAbility: ability.toxilate,
    eggMove : move.snipeShot,
    lore: `Ele se camufla como algas marinhas em decomposição, enganando predadores enquanto espera pacientemente por uma presa.`,
}

pkmn.dragalge = {
  type: ["poison","dragon"],
  bst: {
    hp: 65,
    atk: 75,
    def: 90,
    satk: 97,
    sdef: 123,
    spe: 44,
  },
    hiddenAbility: ability.toxilate,
    eggMove : move.snipeShot,
    lore: `Seu corpo secreta uma toxina poderosa que se espalha pela água ao redor, tornando perigosa qualquer aproximação.`,
}

pkmn.megaDragalge = {
  type: ["poison","dragon"],
  bst: {
    hp: 95*1.2,
    atk: 85*1.2,
    def: 135*1.2,
    satk: 132*1.2,
    sdef: 163*1.2,
    spe: 44*1.2,
  },
    hiddenAbility: ability.toxilate,
    eggMove : move.snipeShot,
    signature : move.spacialRend,
    lore: `As algas presas ao seu corpo se multiplicaram graças à Megaevolução. Ele libera um veneno altamente corrosivo que pode contaminar até mesmo vastas áreas do oceano.`,
}

// 692 Clauncher → Clawitzer
pkmn.clauncher = {
  type: ["water"],
  bst: {
    hp: 50,
    atk: 53,
    def: 62,
    satk: 58,
    sdef: 63,
    spe: 44,
  },
    evolve: function() { return { 1: { pkmn: pkmn.clawitzer, level: evolutionLevel2 } } },
    hiddenAbility: ability.megaLauncher,
    eggMove : move.hydroCannon,
    lore: `Sua garra dispara jatos de água pressurizada com força suficiente para perfurar metal fino a curta distância.`,
}

pkmn.clawitzer = {
  type: ["water"],
  bst: {
    hp: 71,
    atk: 73,
    def: 88,
    satk: 120,
    sdef: 89,
    spe: 59,
  },
    hiddenAbility: ability.megaLauncher,
    eggMove : move.hydroCannon,
    lore: `Sua garra canhão pode disparar jatos de água tão poderosos que o impulso de recuo o empurra vários metros para trás.`,
}

// 694 Helioptile → Heliolisk
pkmn.helioptile = {
  type: ["electric","normal"],
  bst: {
    hp: 44,
    atk: 38,
    def: 33,
    satk: 61,
    sdef: 43,
    spe: 70,
  },
    evolve: function() { return { 1: { pkmn: pkmn.heliolisk, item: item.sunStone } } },
    signature : move.electrify,
    lore: `As membranas ao redor de seu pescoço absorvem luz solar, convertendo-a em eletricidade que ele armazena para usar depois.`,
}

pkmn.heliolisk = {
  type: ["electric","normal"],
  bst: {
    hp: 62,
    atk: 55,
    def: 52,
    satk: 109,
    sdef: 94,
    spe: 109,
  },
    signature : move.electrify,
    lore: `Sua gola se expande para capturar ainda mais luz solar, gerando eletricidade suficiente para iluminar uma cidade inteira.`,
}

// 696 Tyrunt → Tyrantrum
pkmn.tyrunt = {
  type: ["rock","dragon"],
  bst: {
    hp: 58,
    atk: 89,
    def: 77,
    satk: 45,
    sdef: 45,
    spe: 48,
  },
    evolve: function() { return { 1: { pkmn: pkmn.tyrantrum, level: evolutionLevel3 } } },
    hiddenAbility: ability.strongJaw,
    lore: `Um Pokémon antigo revivido a partir de um fóssil, ele é extremamente teimoso e faz birra sempre que não consegue o que quer.`,
}

pkmn.tyrantrum = {
  type: ["rock","dragon"],
  bst: {
    hp: 82,
    atk: 121,
    def: 119,
    satk: 69,
    sdef: 59,
    spe: 71,
  },
    hiddenAbility: ability.strongJaw,
    lore: `Suas mandíbulas poderosas podem esmagar carros inteiros, e ele governava seu território com autoridade absoluta na era antiga.`,
}

// 698 Amaura → Aurorus
pkmn.amaura = {
  type: ["rock","ice"],
  bst: {
    hp: 77,
    atk: 59,
    def: 50,
    satk: 67,
    sdef: 63,
    spe: 46,
  },
    evolve: function() { return { 1: { pkmn: pkmn.aurorus, item: item.iceStone } } },
    hiddenAbility: ability.snowWarning,
    eggMove: ability.weatherBall,
    lore: `Revivida a partir de um fóssil congelado, ela emite um brilho fraco de seu corpo, lembrando as auroras de sua era natal.`,
}

pkmn.aurorus = {
  type: ["rock","ice"],
  bst: {
    hp: 123,
    atk: 77,
    def: 72,
    satk: 99,
    sdef: 92,
    spe: 58,
  },
    hiddenAbility: ability.snowWarning,
    eggMove: ability.weatherBall,
    lore: `Ela pode congelar tudo ao redor apenas expondo o pescoço, uma habilidade que a ajudava a sobreviver em climas extremamente frios.`,
}

// 700 Sylveon

// 701 Hawlucha
pkmn.hawlucha = {
  type: ["fighting","flying"],
  bst: {
    hp: 78,
    atk: 92,
    def: 75,
    satk: 74,
    sdef: 63,
    spe: 118,
  },
    evolve: function() { return { 1: { pkmn: pkmn.megaHawlucha, item: item.hawluchanite } } },
    hiddenAbility: ability.unburden,
    signature : move.flyingPress,
    lore: `Ele treina constantemente técnicas de luta livre, e considera cada batalha uma oportunidade de mostrar seus movimentos mais impressionantes.`,
}

pkmn.megaHawlucha = {
  type: ["fighting","flying"],
  bst: {
    hp: 78*1.2,
    atk: 137*1.2,
    def: 100*1.2,
    satk: 74*1.2,
    sdef: 93*1.2,
    spe: 118*1.2,
  },
    hiddenAbility: ability.reckless,
    signature : move.flyingPress,
    lore: `A megaevolução amplifica sua agilidade e força nas pernas, permitindo golpes aéreos ainda mais espetaculares.`,
}

// 702 Dedenne
pkmn.dedenne = {
  type: ["electric","fairy"],
  bst: {
    hp: 67,
    atk: 58,
    def: 57,
    satk: 81,
    sdef: 67,
    spe: 101,
  },
    hiddenAbility: ability.faeRush,
    lore: `Ele armazena eletricidade em bolsas nas bochechas, e usa os bigodes como antenas para se comunicar a longas distâncias.`,
}

// 703 Carbink
pkmn.carbink = {
  type: ["rock","fairy"],
  bst: {
    hp: 50,
    atk: 50,
    def: 150,
    satk: 50,
    sdef: 150,
    spe: 50,
  },
    hiddenAbility: ability.purifyingSalt,
    lore: `Formado a partir de pressão intensa nas profundezas da terra, seu corpo é composto de diamantes puros extremamente raros.`,
}

// 704 Goomy → Sliggoo → Goodra
pkmn.goomy = {
  type: ["dragon"],
  bst: {
    hp: 45,
    atk: 50,
    def: 35,
    satk: 55,
    sdef: 75,
    spe: 40,
  },
    evolve: function() { return { 1: { pkmn: pkmn.sliggoo, level: evolutionLevel3 } } },
    hiddenAbility: ability.gooey,
    lore: `Considerado o Pokémon Dragão mais fraco fisicamente, ele compensa com uma capacidade de crescimento e evolução surpreendente.`,
}

pkmn.sliggoo = {
  type: ["dragon"],
  bst: {
    hp: 68,
    atk: 75,
    def: 53,
    satk: 83,
    sdef: 113,
    spe: 60,
  },
    evolve: function() { return { 1: { pkmn: pkmn.goodra, level: evolutionLevel3 } } },
    hiddenAbility: ability.gooey,
    lore: `Seu corpo gelatinoso secreta um muco espesso que pode dissolver quase qualquer coisa que ele tocar.`,
}

pkmn.hisuianSliggoo = {
  type: ["steel", "dragon"],
  bst: {
    hp: 58,
    atk: 75,
    def: 83,
    satk: 83,
    sdef: 113,
    spe: 40,
  },
    evolve: function() { return { 1: { pkmn: pkmn.hisuianGoodra, level: evolutionLevel3 } } },
    hiddenAbility: ability.gooey,
    lore: `Uma forma antiga adaptada a climas frios, com um muco mais denso que a protege de temperaturas congelantes.`,
}

pkmn.goodra = {
  type: ["dragon"],
  bst: {
    hp: 90,
    atk: 100,
    def: 70,
    satk: 110,
    sdef: 150,
    spe: 80,
  },
    hiddenAbility: ability.gooey,
    lore: `Seu corpo coberto de muco pegajoso pode se agarrar a praticamente qualquer superfície, e ele é extremamente gentil por natureza.`,
}

pkmn.hisuianGoodra = {
  type: ["steel", "dragon"],
  bst: {
    hp: 80,
    atk: 100,
    def: 100,
    satk: 110,
    sdef: 150,
    spe: 60,
  },
    hiddenAbility: ability.gooey,
    lore: `Esta forma antiga desenvolveu uma armadura natural sobre o muco, protegendo-a de predadores em ambientes hostis.`,
}

// 707 Klefki
pkmn.klefki = {
  type: ["steel","fairy"],
  bst: {
    hp: 57,
    atk: 80,
    def: 91,
    satk: 80,
    sdef: 87,
    spe: 75,
  },
    signature : move.fairyLock,
    lore: `Ele coleta chaves de qualquer lugar que visita, guardando-as cuidadosamente e usando-as para trancar portas contra intrusos.`,
}

// 708 Phantump → Trevenant
pkmn.phantump = {
  type: ["ghost","grass"],
  bst: {
    hp: 43,
    atk: 70,
    def: 48,
    satk: 50,
    sdef: 60,
    spe: 38,
  },
    evolve: function() { return { 1: { pkmn: pkmn.trevenant, level: evolutionLevel2 } } },
    signature : move.forestCurse,
    lore: `Formado a partir do espírito de uma criança perdida na floresta, seu tronco sombrio ainda guarda memórias de uma vida passada.`,
}

pkmn.trevenant = {
  type: ["ghost","grass"],
  bst: {
    hp: 85,
    atk: 110,
    def: 76,
    satk: 65,
    sdef: 82,
    spe: 56,
  },
    signature : move.forestCurse,
    lore: `Ele controla a floresta ao seu redor como se fosse uma extensão de seu próprio corpo, protegendo ferozmente as árvores locais.`,
}

// 710 Pumpkaboo → Gourgeist
pkmn.pumpkaboo = {
  type: ["ghost","grass"],
  bst: {
    hp: 49,
    atk: 66,
    def: 70,
    satk: 44,
    sdef: 55,
    spe: 51,
  },
    evolve: function() { return { 1: { pkmn: pkmn.gourgeist, level: evolutionLevel3 } } },
    signature : move.trickOrTreat,
    lore: `Ele guia espíritos perdidos ao entardecer, e o tamanho de sua abóbora determina a quantidade de energia espiritual que carrega.`,
}

pkmn.gourgeist = {
  type: ["ghost","grass"],
  bst: {
    hp: 65,
    atk: 90,
    def: 122,
    satk: 58,
    sdef: 75,
    spe: 84,
  },
    signature : move.trickOrTreat,
    lore: `Ele canta uma melodia assustadora enquanto se aproxima de vítimas, sugando sua energia vital através de sua boca em forma de abóbora.`,
}

// 712 Bergmite → Avalugg
pkmn.bergmite = {
  type: ["ice"],
  bst: {
    hp: 55,
    atk: 69,
    def: 85,
    satk: 32,
    sdef: 35,
    spe: 28,
  },
    evolve: function() { return { 1: { pkmn: pkmn.avalugg, level: evolutionLevel2 } } },
    hiddenAbility: ability.iceBody,
    signature : move.mountainGale,
    lore: `Seu corpo de gelo cresce continuamente ao longo da vida, e ele se protege escondendo-se dentro de sua própria carapaça congelada.`,
}

pkmn.avalugg = {
  type: ["ice"],
  bst: {
    hp: 95,
    atk: 117,
    def: 184,
    satk: 44,
    sdef: 46,
    spe: 28,
  },
    hiddenAbility: ability.iceBody,
    signature : move.mountainGale,
    lore: `Sua estrutura corporal de gelo é tão resistente que ele é usado como meio de transporte através de terrenos nevados traiçoeiros.`,
}

pkmn.hisuianAvalugg = {
  type: ["ice", "rock"],
  bst: {
    hp: 95,
    atk: 127,
    def: 184,
    satk: 34,
    sdef: 36,
    spe: 38,
  },
    signature : move.mountainGale,
    lore: `Uma forma antiga e mais robusta, capaz de suportar avalanches inteiras sem sofrer qualquer dano significativo.`,
}

// 714 Noibat → Noivern
pkmn.noibat = {
  type: ["flying","dragon"],
  bst: {
    hp: 40,
    atk: 30,
    def: 35,
    satk: 45,
    sdef: 40,
    spe: 55,
  },
    evolve: function() { return { 1: { pkmn: pkmn.noivern, level: evolutionLevel3 } } },
    hiddenAbility: ability.cacophony,
    eggMove : move.boomburst,
    lore: `As ondas sonoras que emite de suas orelhas grandes podem causar tontura severa em qualquer um que fique muito próximo.`,
}

pkmn.noivern = {
  type: ["flying","dragon"],
  bst: {
    hp: 85,
    atk: 70,
    def: 80,
    satk: 97,
    sdef: 80,
    spe: 123,
  },
    hiddenAbility: ability.cacophony,
    eggMove : move.roarOfTime,
    lore: `Suas ondas sonoras ultrassônicas podem derrubar árvores inteiras, e ele caça voando silenciosamente através da noite escura.`,
}

// 716 Xerneas
pkmn.xerneas = {
    type: ["fairy"],
    bst: {
        hp: 126*1.3,
        atk: 131*1.3,
        def: 95*1.3,
        satk: 131*1.3,
        sdef: 98*1.3,
        spe: 99*1.3,
    },
    lore: `Diz-se que ele pode conceder vida eterna a criaturas ao seu redor, embora tenha dormido mil anos após perder essa energia.`,
}

// 717 Yveltal
pkmn.yveltal = {
    type: ["dark","flying"],
    bst: {
        hp: 126*1.3,
        atk: 131*1.3,
        def: 95*1.3,
        satk: 131*1.3,
        sdef: 98*1.3,
        spe: 99*1.3,
    },
    lore: `Quando sua vida chega ao fim, ele absorve a energia vital de tudo ao redor antes de entrar em um sono de mil anos.`,
}

// 718 Zygarde
pkmn.zygarde10 = {
    rename: `zygarde 10%`,
    type: ["dragon","ground"],
    bst: {
        hp: 54,
        atk: 100,
        def: 71,
        satk: 61,
        sdef: 85,
        spe: 115,
    },
    lore: `Nesta forma menor e mais ágil, ele é formado apenas por uma fração de suas células, priorizando velocidade sobre força bruta.`,
}

pkmn.zygarde50 = {
    rename: `zygarde 50%`,
    type: ["dragon","ground"],
    bst: {
        hp: 138,
        atk: 100,
        def: 151,
        satk: 81,
        sdef: 95,
        spe: 95,
    }
}

pkmn.zygarde100 = {
    rename: `zygarde 100%`,
    type: ["dragon","ground"],
    bst: {
        hp: 216*1.35,
        atk: 100*1.35,
        def: 181*1.35,
        satk: 91*1.35,
        sdef: 125*1.35,
        spe: 85*1.35,
    },
    // evolve: function() { return { 1: { pkmn: pkmn.megaZygarde, item: item.zygardite } } },
}

pkmn.megaZygarde = {
    type: ["dragon","ground"],
    bst: {
        hp: 216*1.4,
        atk: 100*1.4,
        def: 91*1.4,
        satk: 216*1.4,
        sdef: 85*1.4,
        spe: 100*1.4,
    },
    lore: `Em sua forma completa, ele reúne todas as suas células dispersas para se tornar um guardião poderoso capaz de restaurar o equilíbrio do ecossistema.`,
}

// 719 Diancie
pkmn.diancie = {
    type: ["rock","fairy"],
    bst: {
        hp: 50*1.5,
        atk: 100*1.5,
        def: 150*1.5,
        satk: 100*1.5,
        sdef: 150*1.5,
        spe: 50*1.5,
    },
    evolve: function() { return { 1: { pkmn: pkmn.megaDiancie, item: item.diancite } } },
    lore: `Ela pode criar diamantes comprimindo carbono com poderes psíquicos, embora ainda esteja aprendendo a controlar completamente essa habilidade.`,
}

pkmn.megaDiancie = {
    type: ["rock","fairy"],
    bst: {
        hp: 50*1.5,
        atk: 160*1.5,
        def: 110*1.5,
        satk: 160*1.5,
        sdef: 110*1.5,
        spe: 110*1.5,
    },
    hiddenAbility: ability.thousandArms,
    signature : move.lovelyKiss,
    lore: `A compressão súbita do poder para criar diamantes empurra as impurezas para a superfície de seu corpo, onde elas se tornam diamantes.`,
}

// 720 Hoopa
pkmn.hoopa = {
    type: ["psychic","ghost"],
    bst: {
        hp: 80*1.5,
        atk: 110*1.5,
        def: 60*1.5,
        satk: 150*1.5,
        sdef: 130*1.5,
        spe: 70*1.5,
    },
    lore: `Ele pode criar portais dimensionais para teleportar objetos e pessoas para qualquer lugar, embora prefira usar isso para travessuras.`,
}

pkmn.hoopaUnbound = {
    type: ["psychic","dark"],
    bst: {
        hp: 80*1.5,
        atk: 160*1.5,
        def: 60*1.5,
        satk: 170*1.5,
        sdef: 130*1.5,
        spe: 80*1.5,
    },
    lore: `Ao remover os anéis que o prendiam, ele libera uma forma muito mais poderosa e destrutiva, quase impossível de controlar.`,
}

// 721 Volcanion
pkmn.volcanion = {
    type: ["fire","water"],
    bst: {
        hp: 80*1.5,
        atk: 110*1.5,
        def: 120*1.5,
        satk: 130*1.5,
        sdef: 90*1.5,
        spe: 70*1.5,
    },
    lore: `Ele expele vapor superaquecido de seus braços com força suficiente para explodir uma montanha, e vive isolado longe de humanos.`,
}

// 722 Rowlet → Dartrix → Decidueye
pkmn.rowlet = {
  type: ["grass","flying"],
  bst: {
    hp: 68,
    atk: 55,
    def: 55,
    satk: 50,
    sdef: 50,
    spe: 42,
  },
    evolve: function() { return { 1: { pkmn: pkmn.dartrix, level: evolutionLevel1 } } },
    hiddenAbility: ability.noGuard,
    lore: `Ele voa silenciosamente através da noite, usando penas especiais que absorvem o som para se aproximar de presas sem ser detectado.`,
}

pkmn.dartrix = {
  type: ["grass","flying"],
  bst: {
    hp: 78,
    atk: 75,
    def: 75,
    satk: 70,
    sdef: 70,
    spe: 52,
  },
    evolve: function() { return { 1: { pkmn: pkmn.decidueye, level: evolutionLevel2 } } },
    hiddenAbility: ability.noGuard,
    lore: `Ele é extremamente vaidoso com sua aparência, alisando constantemente as penas com o bico para manter-se sempre elegante.`,
}

pkmn.decidueye = {
  type: ["grass","ghost"],
  bst: {
    hp: 88,
    atk: 107,
    def: 75,
    satk: 100,
    sdef: 75,
    spe: 70,
  },
    hiddenAbility: ability.noGuard,
    lore: `Ele dispara flechas de penas com precisão mortal, escondendo-se nas sombras da floresta antes de atacar silenciosamente.`,
}

pkmn.hisuianDecidueye = {
  type: ["grass","fighting"],
  bst: {
    hp: 88,
    atk: 112,
    def: 80,
    satk: 95,
    sdef: 95,
    spe: 60,
  },
    lore: `Uma forma antiga adaptada para batalhas diretas, disparando flechas em rajadas rápidas contra múltiplos alvos.`,
}

// 725 Litten → Torracat → Incineroar
pkmn.litten = {
  type: ["fire"],
  bst: {
    hp: 45,
    atk: 65,
    def: 40,
    satk: 60,
    sdef: 40,
    spe: 70,
  },
    evolve: function() { return { 1: { pkmn: pkmn.torracat, level: evolutionLevel1 } } },
    hiddenAbility: ability.intimidate,
    signature : move.darkestLariat,
    lore: `Ele lambe o próprio pelo constantemente, e as bolas de pelo que engole são combustível para as chamas que solta pela boca.`,
}


pkmn.torracat = {
  type: ["fire"],
  bst: {
    hp: 65,
    atk: 85,
    def: 50,
    satk: 80,
    sdef: 50,
    spe: 90,
  },
    evolve: function() { return { 1: { pkmn: pkmn.incineroar, level: evolutionLevel2 } } },
    hiddenAbility: ability.intimidate,
    signature : move.darkestLariat,
    lore: `O sino em seu pescoço soa quando ele está animado, e suas chamas internas ficam mais intensas conforme ele se energiza.`,
}

pkmn.incineroar = {
  type: ["fire","dark"],
  bst: {
    hp: 95,
    atk: 115,
    def: 90,
    satk: 80,
    sdef: 90,
    spe: 60,
  },
    hiddenAbility: ability.intimidate,
    signature : move.darkestLariat,
    lore: `Apesar de sua atitude arrogante em batalha, ele é extremamente gentil com Pokémon feridos, cuidando deles em segredo.`,
}

// 728 Popplio → Brionne → Primarina
pkmn.popplio = {
  type: ["water"],
  bst: {
    hp: 50,
    atk: 54,
    def: 54,
    satk: 66,
    sdef: 56,
    spe: 40,
  },
    evolve: function() { return { 1: { pkmn: pkmn.brionne, level: evolutionLevel1 } } },
    hiddenAbility: ability.cacophony,
    signature : move.sparklingAria,
    lore: `Ele sopra bolhas da boca e as usa para realizar acrobacias impressionantes, praticando truques constantemente para se apresentar.`,
}

pkmn.brionne = {
  type: ["water"],
  bst: {
    hp: 60,
    atk: 69,
    def: 69,
    satk: 91,
    sdef: 81,
    spe: 50,
  },
    evolve: function() { return { 1: { pkmn: pkmn.primarina, level: evolutionLevel2 } } },
    hiddenAbility: ability.cacophony,
    signature : move.sparklingAria,
    lore: `Ela dança graciosamente sobre bolhas que cria, e seu canto pode acalmar ou atordoar presas, dependendo da intenção.`,
}

pkmn.primarina = {
  type: ["water","fairy"],
  bst: {
    hp: 80,
    atk: 74,
    def: 74,
    satk: 126,
    sdef: 100,
    spe: 60,
  },
    hiddenAbility: ability.cacophony,
    signature : move.sparklingAria,
    lore: `Seu canto belíssimo pode criar bolhas com propriedades tóxicas, capazes de explodir com força suficiente para afundar um navio pequeno.`,
}

// 731 Pikipek → Trumbeak → Toucannon
pkmn.pikipek = {
  type: ["normal","flying"],
  bst: {
    hp: 35,
    atk: 75,
    def: 30,
    satk: 30,
    sdef: 30,
    spe: 65,
  },
    evolve: function() { return { 1: { pkmn: pkmn.trumbeak, level: evolutionLevel1 } } },
    hiddenAbility: ability.skillLink,
    signature : move.beakBlast,
    lore: `Ele bica árvores repetidamente a uma velocidade de até dezesseis vezes por segundo, armazenando comida dentro dos buracos que cria.`,
}

pkmn.trumbeak = {
  type: ["normal","flying"],
  bst: {
    hp: 55,
    atk: 85,
    def: 50,
    satk: 40,
    sdef: 50,
    spe: 75,
  },
    evolve: function() { return { 1: { pkmn: pkmn.toucannon, level: evolutionLevel2 } } },
    hiddenAbility: ability.skillLink,
    signature : move.beakBlast,
    lore: `Ele armazena bagas dentro do bico, e as dispara com força suficiente para atordoar predadores maiores que ele.`,
}

pkmn.toucannon = {
  type: ["normal","flying"],
  bst: {
    hp: 80,
    atk: 120,
    def: 75,
    satk: 75,
    sdef: 75,
    spe: 60,
  },
    hiddenAbility: ability.skillLink,
    signature : move.beakBlast,
    lore: `Seu bico funciona como um canhão, disparando sementes em alta velocidade com uma força equivalente a uma bala de verdade.`,
}

// 734 Yungoos → Gumshoos
pkmn.yungoos = {
  type: ["normal"],
  bst: {
    hp: 48,
    atk: 70,
    def: 30,
    satk: 30,
    sdef: 30,
    spe: 45,
  },
    evolve: function() { return { 1: { pkmn: pkmn.gumshoos, level: evolutionLevel1 } } },
    hiddenAbility: ability.adaptability,
    lore: `Seu metabolismo extremamente acelerado o faz precisar comer constantemente, e ele ataca qualquer coisa que pareça comestível.`,
}

pkmn.gumshoos = {
  type: ["normal"],
  bst: {
    hp: 88,
    atk: 110,
    def: 60,
    satk: 55,
    sdef: 60,
    spe: 45,
  },
    hiddenAbility: ability.adaptability,
    lore: `Ele espera pacientemente por horas em um só lugar, observando até que a presa perfeita passe por perto para atacar.`,
}

// 736 Grubbin → Charjabug → Vikavolt
pkmn.grubbin = {
  type: ["bug"],
  bst: {
    hp: 47,
    atk: 62,
    def: 45,
    satk: 55,
    sdef: 45,
    spe: 46,
  },
    evolve: function() { return { 1: { pkmn: pkmn.charjabug, level: evolutionLevel2 } } },
    eggMove : move.auraWheel,
    lore: `Suas mandíbulas fortes conseguem morder através de galhos grossos, e ele se prende a árvores usando um fio pegajoso que produz.`,
}

pkmn.charjabug = {
  type: ["bug","electric"],
  bst: {
    hp: 57,
    atk: 82,
    def: 95,
    satk: 55,
    sdef: 75,
    spe: 36,
  },
    evolve: function() { return { 1: { pkmn: pkmn.vikavolt, item: item.thunderStone } } },
    eggMove : move.auraWheel,
    lore: `Seu corpo funciona como uma bateria viva, armazenando eletricidade que outras pessoas usam para recarregar seus aparelhos eletrônicos.`,
}

pkmn.vikavolt = {
  type: ["bug","electric"],
  bst: {
    hp: 77,
    atk: 70,
    def: 90,
    satk: 145,
    sdef: 75,
    spe: 43,
  },
    eggMove : move.auraWheel,
    lore: `Suas mandíbulas em forma de chifre disparam raios elétricos poderosos, e ele voa usando um mecanismo similar a um jato.`,
}

// 739 Crabrawler → Crabominable
pkmn.crabrawler = {
  type: ["fighting"],
  bst: {
    hp: 47,
    atk: 82,
    def: 57,
    satk: 42,
    sdef: 47,
    spe: 63,
  },
    evolve: function() { return { 1: { pkmn: pkmn.crabominable, level: evolutionLevel2 } } },
    hiddenAbility: ability.icyPelt,
    signature : move.iceHammer,
    lore: `Ele soca tudo o que vê usando suas garras poderosas, treinando constantemente para se tornar ainda mais forte em combate.`,
}

pkmn.crabominable = {
  type: ["fighting","ice"],
  bst: {
    hp: 97,
    atk: 132,
    def: 77,
    satk: 62,
    sdef: 67,
    spe: 43,
  },
    hiddenAbility: ability.icyPelt,
    signature : move.iceHammer,
    lore: `Vivendo em montanhas geladas, seus pelos grossos e garras congeladas podem esmagar gelo espesso com um único golpe.`,
}

pkmn.megaCrabominable = {
  type: ["fighting","ice"],
  bst: {
    hp: 97*1.2,
    atk: 157*1.2,
    def: 122*1.2,
    satk: 62*1.2,
    sdef: 107*1.2,
    spe: 33*1.2,
  },
    hiddenAbility: ability.refrigerate,
    signature : move.glaciate,
    lore: `Seus pelos cresceram por todo o corpo devido à Megaevolução. Ele usa os punhos gigantescos para esmagar qualquer obstáculo que encontre pelo caminho.`,
}

// 741 Oricorio
pkmn.oricorioBaile = {
  type: ["fire","flying"],
  bst: {
    hp: 75,
    atk: 70,
    def: 70,
    satk: 98,
    sdef: 100,
    spe: 110,
  },
    signature : move.revelationDance,
    hiddenAbility: ability.dancer,
}

pkmn.oricorioPomPom = {
  type: ["electric","flying"],
  bst: {
    hp: 75,
    atk: 70,
    def: 70,
    satk: 98,
    sdef: 100,
    spe: 110,
  },
    signature : move.revelationDance,
    hiddenAbility: ability.dancer,
}

pkmn.oricorioPau = {
  type: ["psychic","flying"],
  bst: {
    hp: 75,
    atk: 70,
    def: 70,
    satk: 98,
    sdef: 100,
    spe: 110,
  },
    signature : move.revelationDance,
    hiddenAbility: ability.dancer,
}

pkmn.oricorioSensu = {
  type: ["ghost","flying"],
  bst: {
    hp: 75,
    atk: 70,
    def: 70,
    satk: 98,
    sdef: 100,
    spe: 110,
  },
    signature : move.revelationDance,
    hiddenAbility: ability.dancer,
}

// 742 Cutiefly → Ribombee
pkmn.cutiefly = {
  type: ["bug","fairy"],
  bst: {
    hp: 40,
    atk: 45,
    def: 40,
    satk: 55,
    sdef: 40,
    spe: 84,
  },
    evolve: function() { return { 1: { pkmn: pkmn.ribombee, level: evolutionLevel2 } } },
    hiddenAbility: ability.faeRush,
    lore: `Ela consegue enxergar campos magnéticos, o que a ajuda a encontrar flores ricas em néctar mesmo à distância.`,
}

pkmn.ribombee = {
  type: ["bug","fairy"],
  bst: {
    hp: 60,
    atk: 55,
    def: 60,
    satk: 95,
    sdef: 70,
    spe: 124,
  },
    hiddenAbility: ability.faeRush,
    lore: `Ela coleta pólen de várias flores para criar pós especiais com efeitos diferentes, usados tanto para curar quanto para atacar.`,
}

// 744 Rockruff → Lycanroc
pkmn.rockruff = {
    type: ["rock"],
    bst: {
        hp: 45,
        atk: 65,
        def: 40,
        satk: 30,
        sdef: 40,
        spe: 60,
    },
    evolve: function() { 
        return { 
            1: { pkmn: pkmn.lycanrocMidday, item: item.sunStone }, 
            2: { pkmn: pkmn.lycanrocMidnight, item: item.moonStone },
        } 
    },
    hiddenAbility: ability.sandyPelt,
    lore: `Ele late alegremente para seu treinador, e sua natureza amigável esconde um potencial de evolução que muda de acordo com o ambiente.`,
}

pkmn.lycanrocMidday = {
    type: ["rock"],
    bst: {
        hp: 75,
        atk: 115,
        def: 65,
        satk: 55,
        sdef: 65,
        spe: 112,
    },
    hiddenAbility: ability.sandyPelt,
}

pkmn.lycanrocMidnight = {
    type: ["rock"],
    bst: {
        hp: 85,
        atk: 115,
        def: 75,
        satk: 55,
        sdef: 75,
        spe: 82,
    },
    hiddenAbility: ability.moody,
    lore: `Sob a lua cheia, esta forma se torna mais selvagem e agressiva, atacando com força bruta ao invés de velocidade.`,
}

pkmn.lycanrocDusk = {
    type: ["rock"],
    bst: {
        hp: 75,
        atk: 117,
        def: 65,
        satk: 55,
        sdef: 65,
        spe: 110,
    },
    lore: `Formado durante o crepúsculo, ele combina a lealdade de sua forma diurna com a ferocidade de sua forma noturna.`,
}

// 746 Wishiwashi
pkmn.wishiwashi = {
  type: ["water"],
  bst: {
    hp: 45,
    atk: 20,
    def: 20,
    satk: 25,
    sdef: 25,
    spe: 40,
  },
    lore: `Sozinho, ele é extremamente fraco e tímido, mas em grandes cardumes consegue formar um corpo gigante e intimidador.`,
}

pkmn.wishiwashiSchool = {
  type: ["water"],
  bst: {
    hp: 45,
    atk: 140,
    def: 130,
    satk: 140,
    sdef: 135,
    spe: 30,
  },
    lore: `Quando ameaçado, centenas deles se reúnem formando um único peixe gigante, capaz de afugentar predadores muito maiores.`,
}

// 747 Mareanie → Toxapex
pkmn.mareanie = {
  type: ["poison","water"],
  bst: {
    hp: 50,
    atk: 53,
    def: 62,
    satk: 43,
    sdef: 52,
    spe: 45,
  },
    evolve: function() { return { 1: { pkmn: pkmn.toxapex, level: evolutionLevel2 } } },
    lore: `Ela se alimenta mordiscando os tentáculos de Corsola, e é considerada uma praga por pescadores devido à sua natureza destrutiva.`,
}

pkmn.toxapex = {
  type: ["poison","water"],
  bst: {
    hp: 50,
    atk: 63,
    def: 152,
    satk: 53,
    sdef: 142,
    spe: 35,
  },
    lore: `Seus espinhos venenosos podem injetar toxinas suficientes para paralisar até uma baleia, e ela se protege girando dentro de sua concha.`,
}

// 749 Mudbray → Mudsdale
pkmn.mudbray = {
  type: ["ground"],
  bst: {
    hp: 70,
    atk: 100,
    def: 70,
    satk: 45,
    sdef: 55,
    spe: 45,
  },
    evolve: function() { return { 1: { pkmn: pkmn.mudsdale, level: evolutionLevel2 } } },
    signature : move.highHorsepower,
    hiddenAbility: ability.stamina,
    lore: `Ele come lama rica em minerais para fortalecer seus cascos, que se tornam duros o suficiente para quebrar rochas.`,
}

pkmn.mudsdale = {
  type: ["ground"],
  bst: {
    hp: 100,
    atk: 125,
    def: 100,
    satk: 55,
    sdef: 85,
    spe: 35,
  },
    signature : move.highHorsepower,
    hiddenAbility: ability.stamina,
    lore: `Seus cascos extremamente duros podem esmagar rochas com facilidade, e ele consegue puxar cargas de mais de dez toneladas.`,
}

// 751 Dewpider → Araquanid
pkmn.dewpider = {
  type: ["water","bug"],
  bst: {
    hp: 38,
    atk: 40,
    def: 52,
    satk: 40,
    sdef: 72,
    spe: 27,
  },
    evolve: function() { return { 1: { pkmn: pkmn.araquanid, level: evolutionLevel1 } } },
    eggMove : move.snipeShot,
    lore: `Ele carrega uma bolha de ar sobre a cabeça para respirar em terra, e caça mergulhando na água quando precisa se alimentar.`,
}

pkmn.araquanid = {
  type: ["water","bug"],
  bst: {
    hp: 68,
    atk: 70,
    def: 92,
    satk: 50,
    sdef: 132,
    spe: 42,
  },
    eggMove : move.snipeShot,
    lore: `Sua bolha de água pode crescer o suficiente para envolver e sufocar presas muito maiores que seu próprio corpo.`,
}

// 753 Fomantis → Lurantis
pkmn.fomantis = {
  type: ["grass"],
  bst: {
    hp: 40,
    atk: 55,
    def: 35,
    satk: 50,
    sdef: 35,
    spe: 35,
  },
    evolve: function() { return { 1: { pkmn: pkmn.lurantis, level: evolutionLevel2 } } },
    hiddenAbility: ability.contrary,
    eggMove : move.needleArm,
    lore: `Ele se move em direção à luz solar durante o dia, e permanece completamente imóvel à noite para economizar energia.`,
}

pkmn.lurantis = {
  type: ["grass"],
  bst: {
    hp: 70,
    atk: 105,
    def: 70,
    satk: 80,
    sdef: 90,
    spe: 45,
  },
    hiddenAbility: ability.contrary,
    eggMove : move.needleArm,
    lore: `Suas pétalas em forma de foice podem cortar através de galhos grossos, e ela se camufla perfeitamente entre flores reais.`,
}

// 755 Morelull → Shiinotic
pkmn.morelull = {
  type: ["grass","fairy"],
  bst: {
    hp: 40,
    atk: 35,
    def: 55,
    satk: 65,
    sdef: 75,
    spe: 15,
  },
    evolve: function() { return { 1: { pkmn: pkmn.shiinotic, level: evolutionLevel2 } } },
    hiddenAbility: ability.colorSpore,
    lore: `Os esporos brilhantes que ele libera podem causar sono instantâneo em qualquer criatura que os respire.`,
}

pkmn.shiinotic = {
  type: ["grass","fairy"],
  bst: {
    hp: 60,
    atk: 45,
    def: 80,
    satk: 90,
    sdef: 100,
    spe: 30,
  },
    hiddenAbility: ability.colorSpore,
    lore: `Ele pisca luzes de seu corpo em padrões hipnóticos, atraindo presas curiosas para mais perto antes de atacar com esporos.`,
}

// 757 Salandit → Salazzle
pkmn.salandit = {
  type: ["poison","fire"],
  bst: {
    hp: 48,
    atk: 44,
    def: 40,
    satk: 71,
    sdef: 40,
    spe: 77,
  },
    evolve: function() { return { 1: { pkmn: pkmn.salazzle, level: evolutionLevel2 } } },
    signature : move.fireLash,
    hiddenAbility: ability.corrosion,
    lore: `A fumaça tóxica que ele libera de suas narinas é usada tanto para caçar quanto para se comunicar com outros de sua espécie.`,
}

pkmn.salazzle = {
  type: ["poison","fire"],
  bst: {
    hp: 68,
    atk: 64,
    def: 60,
    satk: 111,
    sdef: 60,
    spe: 117,
  },
    signature : move.fireLash,
    hiddenAbility: ability.corrosion,
    lore: `Ela secreta um veneno com feromônios poderosos, capazes de deixar até machos rivais completamente sob seu controle.`,
}

// 759 Stufful → Bewear
pkmn.stufful = {
  type: ["normal","fighting"],
  bst: {
    hp: 70,
    atk: 75,
    def: 50,
    satk: 45,
    sdef: 50,
    spe: 50,
  },
    evolve: function() { return { 1: { pkmn: pkmn.bewear, level: evolutionLevel2 } } },
    hiddenAbility: ability.angerPoint,
    lore: `Apesar de sua aparência fofa, ele é extremamente forte, e não gosta nem um pouco de ser tocado por estranhos.`,
}

pkmn.bewear = {
  type: ["normal","fighting"],
  bst: {
    hp: 120,
    atk: 125,
    def: 80,
    satk: 55,
    sdef: 60,
    spe: 60,
  },
    hiddenAbility: ability.angerPoint,
    lore: `Seu abraço pode esmagar ossos facilmente, mas ele demonstra afeto dessa forma sem perceber o quão perigoso isso realmente é.`,
}

// 761 Bounsweet → Steenee → Tsareena
pkmn.bounsweet = {
  type: ["grass"],
  bst: {
    hp: 42,
    atk: 30,
    def: 38,
    satk: 30,
    sdef: 38,
    spe: 32,
  },
    evolve: function() { return { 1: { pkmn: pkmn.steenee, level: evolutionLevel1 } } },
    signature : move.tropKick,
    hiddenAbility: ability.libero,
    lore: `Seu aroma doce como fruta atrai predadores, então ela precisa correr constantemente para escapar de perigo.`,
}

pkmn.steenee = {
  type: ["grass"],
  bst: {
    hp: 52,
    atk: 40,
    def: 48,
    satk: 40,
    sdef: 48,
    spe: 62,
  },
    evolve: function() { return { 1: { pkmn: pkmn.tsareena, level: evolutionLevel2 } } },
    signature : move.tropKick,
    hiddenAbility: ability.libero,
    lore: `Ela balança o quadril para chicotear seu caule contra oponentes, uma técnica que aprimora constantemente através da prática.`,
}

pkmn.tsareena = {
  type: ["grass"],
  bst: {
    hp: 72,
    atk: 120,
    def: 98,
    satk: 50,
    sdef: 98,
    spe: 72,
  },
    signature : move.tropKick,
    hiddenAbility: ability.libero,
    lore: `Seus chutes poderosos podem quebrar rochas com facilidade, e ela trata Pokémon mais fracos com desdém e superioridade.`,
}

// 764 Comfey
pkmn.comfey = {
  type: ["fairy"],
  bst: {
    hp: 51,
    atk: 52,
    def: 90,
    satk: 82,
    sdef: 110,
    spe: 100,
  },
    signature : move.floralHealing,
    hiddenAbility: ability.purifyingSalt,
    lore: `Ela usa as flores presas em sua guirlanda para curar ferimentos, e cada flor tem propriedades medicinais diferentes.`,
}

// 765 Oranguru
pkmn.oranguru = {
  type: ["normal","psychic"],
  bst: {
    hp: 90,
    atk: 60,
    def: 80,
    satk: 90,
    sdef: 110,
    spe: 60,
  },
    hiddenAbility: ability.strategist,
    eggMove : move.storedPower,
    lore: `Ele é considerado extremamente sábio, e observa cuidadosamente o comportamento humano antes de decidir como agir.`,
}

// 766 Passimian
pkmn.passimian = {
  type: ["fighting"],
  bst: {
    hp: 100,
    atk: 120,
    def: 90,
    satk: 40,
    sdef: 60,
    spe: 80,
  },
    hiddenAbility: ability.gorillaTactics,
    eggMove : move.hiJumpKick,
    lore: `Eles vivem em grupos organizados que se revezam guardando frutas, e lançam pedras com precisão impressionante contra intrusos.`,
}

// 767 Wimpod → Golisopod
pkmn.wimpod = {
  type: ["bug","water"],
  bst: {
    hp: 25,
    atk: 35,
    def: 40,
    satk: 20,
    sdef: 30,
    spe: 80,
  },
    evolve: function() { return { 1: { pkmn: pkmn.golisopod, level: evolutionLevel2 } } },
    hiddenAbility: ability.ambidextrous,
    eggMove : move.razorShell,
    lore: `Ele foge de qualquer sinal de perigo, mesmo que isso signifique perder partes do próprio corpo, que se regeneram rapidamente depois.`,
}

pkmn.golisopod = {
  type: ["bug","water"],
  bst: {
    hp: 75,
    atk: 125,
    def: 140,
    satk: 60,
    sdef: 90,
    spe: 40,
  },
    hiddenAbility: ability.ambidextrous,
    eggMove : move.razorShell,
    lore: `Sua armadura extremamente resistente pode suportar explosões de bombas, mas ele ainda prefere fugir a lutar sempre que possível.`,
}

/*

pkmn.megaGolisopod = {
  type: ["bug","steel"],
  bst: {
    hp: 75*1.2,
    atk: 150*1.2,
    def: 175*1.2,
    satk: 70*1.2,
    sdef: 120*1.2,
    spe: 40*1.2,
  },
}

*/

// 769 Sandygast → Palossand
pkmn.sandygast = {
  type: ["ghost","ground"],
  bst: {
    hp: 55,
    atk: 55,
    def: 80,
    satk: 70,
    sdef: 45,
    spe: 15,
  },
    evolve: function() { return { 1: { pkmn: pkmn.palossand, level: evolutionLevel3 } } },
    lore: `Formado por um espírito que possui um monte de areia, ele controla essa areia para atrair vítimas e sugar sua energia vital.`,
}

pkmn.palossand = {
  type: ["ghost","ground"],
  bst: {
    hp: 85,
    atk: 75,
    def: 110,
    satk: 100,
    sdef: 75,
    spe: 35,
  },
    lore: `Ele suga a energia vital de qualquer coisa que afunde em sua areia, e sua fortaleza pode desmoronar sobre vítimas desavisadas.`,
}

// 771 Pyukumuku
pkmn.pyukumuku = {
  type: ["water"],
  bst: {
    hp: 55,
    atk: 60,
    def: 130,
    satk: 30,
    sdef: 130,
    spe: 5,
  },
    lore: `Seus órgãos internos saem pela boca quando ele está estressado, mas ele consegue colocá-los de volta sem qualquer problema.`,
}

// 772 Type: Null → Silvally
pkmn.typeNull = {
  type: ["normal"],
  bst: {
    hp: 95,
    atk: 95,
    def: 95,
    satk: 95,
    sdef: 95,
    spe: 59,
  },
    evolve: function() { return { 1: { pkmn: pkmn.silvally, level: evolutionLevel3 } } },
    hiddenAbility: ability.adaptability,
    eggMove : move.conversion,
    lore: `Foi construído com partes de diferentes criaturas para se adaptar a qualquer situação de batalha.`,
}

pkmn.silvally = {
  type: ["normal"],
  bst: {
    hp: 110,
    atk: 95,
    def: 95,
    satk: 95,
    sdef: 95,
    spe: 95,
  },
    hiddenAbility: ability.adaptability,
    eggMove : move.conversion,
    lore: `Criado para combater uma ameaça específica, ele pode mudar de tipo usando discos especiais equipados em seu corpo.`,
}

// 774 Minior
pkmn.minior = {
  type: ["rock","flying"],
  bst: {
    hp: 60,
    atk: 60,
    def: 100,
    satk: 60,
    sdef: 100,
    spe: 60,
  },
    hiddenAbility: ability.shieldsDown,
    eggMove : move.lunarDance,
    lore: `Seu núcleo colorido é protegido por uma casca rochosa formada a partir de partículas atmosféricas durante sua queda do espaço.`,
}

pkmn.miniorBlue = {
  type: ["rock","water"],
  bst: {
    hp: 100,
    atk: 60,
    def: 50,
    satk: 120,
    sdef: 50,
    spe: 60,
  },
    hiddenAbility: ability.brittleArmor,
    eggMove : move.lunarDance

}

pkmn.miniorGreen = {
  type: ["rock","grass"],
  bst: {
    hp: 100,
    atk: 60,
    def: 50,
    satk: 120,
    sdef: 50,
    spe: 60,
  },
    hiddenAbility: ability.brittleArmor,
    eggMove : move.lunarDance

}

pkmn.miniorIndigo = {
  type: ["rock","ice"],
  bst: {
    hp: 100,
    atk: 60,
    def: 50,
    satk: 120,
    sdef: 50,
    spe: 60,
  },
    hiddenAbility: ability.brittleArmor,
    eggMove : move.lunarDance

}

pkmn.miniorOrange = {
  type: ["rock","fire"],
  bst: {
    hp: 100,
    atk: 60,
    def: 50,
    satk: 120,
    sdef: 50,
    spe: 60,
  },
    hiddenAbility: ability.brittleArmor,
    eggMove : move.lunarDance

}

pkmn.miniorRed = {
  type: ["rock","psychic"],
  bst: {
    hp: 100,
    atk: 60,
    def: 50,
    satk: 120,
    sdef: 50,
    spe: 60,
  },
    hiddenAbility: ability.brittleArmor,
    eggMove : move.lunarDance

}

pkmn.miniorViolet = {
  type: ["rock","ghost"],
  bst: {
    hp: 100,
    atk: 60,
    def: 50,
    satk: 120,
    sdef: 50,
    spe: 60,
  },
    hiddenAbility: ability.brittleArmor,
    eggMove : move.lunarDance

}

pkmn.miniorYellow = {
  type: ["rock","electric"],
  bst: {
    hp: 100,
    atk: 60,
    def: 50,
    satk: 120,
    sdef: 50,
    spe: 60,
  },
    hiddenAbility: ability.brittleArmor,
    eggMove : move.lunarDance

}

// 775 Komala
pkmn.komala = {
  type: ["normal"],
  bst: {
    hp: 65,
    atk: 115,
    def: 65,
    satk: 75,
    sdef: 95,
    spe: 65,
  },
    lore: `Ele nunca acorda, passando toda a vida dormindo agarrado a um galho, e seus sonhos determinam seu humor durante o sono.`,
}

// 776 Turtonator
pkmn.turtonator = {
  type: ["fire","dragon"],
  bst: {
    hp: 60,
    atk: 78,
    def: 135,
    satk: 91,
    sdef: 85,
    spe: 36,
  },
    hiddenAbility: ability.megaLauncher,
    eggMove : move.pyroBall,
    lore: `Sua concha é feita de material altamente explosivo, e ele evita atacar a barriga macia, seu único ponto verdadeiramente vulnerável.`,
}

// 777 Togedemaru
pkmn.togedemaru = {
  type: ["electric","steel"],
  bst: {
    hp: 65,
    atk: 98,
    def: 63,
    satk: 40,
    sdef: 73,
    spe: 96,
  },
    signature : move.zingZap,
    lore: `Suas agulhas afiadas armazenam eletricidade estática, e ele se enrola em uma bola espinhosa para se defender de predadores.`,
}

// 778 Mimikyu
pkmn.mimikyu = {
  type: ["ghost","fairy"],
  bst: {
    hp: 55,
    atk: 90,
    def: 80,
    satk: 50,
    sdef: 105,
    spe: 96,
  },
    hiddenAbility: ability.imposter,
    eggMove : move.mimic,
    lore: `Ele se disfarça de Pikachu na esperança de ser amado, mas sua verdadeira forma por baixo do disfarce é tão assustadora que pode causar desmaios em quem a vê.`,
}

// 779 Bruxish
pkmn.bruxish = {
  type: ["water","psychic"],
  bst: {
    hp: 68,
    atk: 105,
    def: 70,
    satk: 70,
    sdef: 70,
    spe: 92,
  },
    hiddenAbility: ability.strongJaw,
    lore: `Seus dentes afiados podem esmagar corais duros com facilidade, e ele emite ondas psíquicas através de sua íris colorida.`,
}

// 780 Drampa
pkmn.drampa = {
  type: ["normal","dragon"],
  bst: {
    hp: 78,
    atk: 60,
    def: 85,
    satk: 135,
    sdef: 91,
    spe: 36,
  },
    lore: `Apesar de sua aparência gentil, ele se torna extremamente violento se algum de seus filhotes for ameaçado por qualquer motivo.`,
}

pkmn.megaDrampa = {
  type: ["normal","dragon"],
  bst: {
    hp: 78*1.2,
    atk: 85*1.2,
    def: 110*1.2,
    satk: 160*1.2,
    sdef: 116*1.2,
    spe: 36*1.2,
  },
    hiddenAbility: ability.gooey,
    signature : move.spacialRend,
    lore: `Quando alguém ameaça aqueles de quem gosta, a energia da Megaevolução desperta sua verdadeira fúria. Seu sopro de dragão é tão poderoso que pode varrer montanhas inteiras.`,
}

// 781 Dhelmise
pkmn.dhelmise = {
  type: ["ghost","grass"],
  bst: {
    hp: 70,
    atk: 131,
    def: 100,
    satk: 86,
    sdef: 90,
    spe: 40,
  },
    signature : move.anchorShot,
    lore: `Formado por algas marinhas que possuíram uma âncora afundada, ele arrasta destroços de navios usando sua corrente como uma arma.`,
}

// 782 Jangmo-o → Hakamo-o → Kommo-o
pkmn.jangmoo = {
  type: ["dragon"],
  bst: {
    hp: 45,
    atk: 55,
    def: 65,
    satk: 45,
    sdef: 45,
    spe: 45,
  },
    evolve: function() { return { 1: { pkmn: pkmn.hakamoo, level: evolutionLevel2 } } },
    signature : move.clangingScales,
    hiddenAbility: ability.cacophony,
    lore: `Suas escamas produzem um som percussivo quando ele dança, um ritual tradicional passado de geração em geração entre sua espécie.`,
}

pkmn.hakamoo = {
  type: ["dragon","fighting"],
  bst: {
    hp: 55,
    atk: 75,
    def: 90,
    satk: 55,
    sdef: 65,
    spe: 65,
  },
    evolve: function() { return { 1: { pkmn: pkmn.kommoo, level: evolutionLevel3 } } },
    signature : move.clangingScales,
    hiddenAbility: ability.cacophony,
    lore: `Ele dança com movimentos ainda mais complexos, e suas escamas endurecidas podem cortar através de metal fino.`,
}

pkmn.kommoo = {
  type: ["dragon","fighting"],
  bst: {
    hp: 75,
    atk: 110,
    def: 125,
    satk: 100,
    sdef: 105,
    spe: 85,
  },
    signature : move.clangingScales,
    hiddenAbility: ability.cacophony,
    lore: `Sua dança de batalha é tão ritmada quanto mortal, e as escamas em seu pescoço podem gerar um som capaz de atordoar oponentes.`,
}

// 785 Tapu Koko
pkmn.tapuKoko = {
  type: ["electric","fairy"],
  bst: {
    hp: 90,
    atk: 115,
    def: 85,
    satk: 95,
    sdef: 75,
    spe: 160,
  },
    hiddenAbility: ability.electricSurge,
    eggMove: move.electrify,
    lore: `Considerado a divindade guardiã de sua ilha, ele aparece durante tempestades, absorvendo eletricidade das nuvens ao seu redor.`,
}

// 786 Tapu Lele
pkmn.tapuLele = {
  type: ["psychic","fairy"],
  bst: {
    hp: 90,
    atk: 85,
    def: 75,
    satk: 150,
    sdef: 125,
    spe: 95,
  },
    hiddenAbility: ability.mistySurge,
    eggMove: move.fairyLock,
    lore: `Ela espalha pólen de cura de suas asas, embora esse mesmo pólen também possa causar confusão em quem o inala.`,
}

// 787 Tapu Bulu
pkmn.tapuBulu = {
  type: ["grass","fairy"],
  bst: {
    hp: 90,
    atk: 130,
    def: 175,
    satk: 85,
    sdef: 95,
    spe: 75,
  },
    hiddenAbility: ability.grassySurge,
    eggMove: move.forestCurse,
    lore: `Ele usa o tronco em suas costas como uma arma, capaz de derrubar árvores inteiras com um único golpe poderoso.`,
}

// 788 Tapu Fini
pkmn.tapuFini = {
  type: ["water","fairy"],
  bst: {
    hp: 90,
    atk: 75,
    def: 115,
    satk: 95,
    sdef: 170,
    spe: 85,
  },
    hiddenAbility: ability.mistySurge,
    eggMove: move.soak,
    lore: `Ela cria uma névoa protetora que envolve sua ilha, purificando corrupção e mantendo o equilíbrio natural do ecossistema.`,
}

// 789 Cosmog → Cosmoem → Solgaleo / Lunala
pkmn.cosmog = {
  type: ["psychic"],
  bst: {
    hp: 43,
    atk: 29,
    def: 31,
    satk: 29,
    sdef: 31,
    spe: 37,
  },
    evolve: function() { return { 1: { pkmn: pkmn.cosmoem, level: evolutionLevel3 } } },
    eggMove : move.kinesis,
    lore: `Considerado o Pokémon mais fraco fisicamente, seu corpo esconde um poder cósmico imenso que ainda não consegue controlar.`,
}

pkmn.cosmoem = {
  type: ["psychic"],
  bst: {
    hp: 100,
    atk: 50,
    def: 161,
    satk: 100,
    sdef: 161,
    spe: 37,
  },
    eggMove : move.kinesis,
    lore: `Seu núcleo denso pesa mais que qualquer estrela conhecida, contendo energia suficiente para criar um universo inteiro dentro dele.`,
}

pkmn.solgaleo = {
  type: ["psychic","steel"],
  bst: {
    hp: 137*1.3,
    atk: 137*1.3,
    def: 107*1.3,
    satk: 113*1.3,
    sdef: 89*1.3,
    spe: 97*1.3,
  },
    hiddenAbility: ability.fullMetalBody,
    signature : move.sunsteelStrike,
    lore: `Diz-se que ele vem de outra dimensão, e sua juba brilhante como o sol pode cegar qualquer inimigo que olhe diretamente para ele.`,
}

pkmn.lunala = {
  type: ["psychic","ghost"],
  bst: {
    hp: 137*1.3,
    atk: 113*1.3,
    def: 89*1.3,
    satk: 137*1.3,
    sdef: 107*1.3,
    spe: 97*1.3,
  },
    signature : move.moongeistBeam,
    lore: `Suas asas absorvem luz completamente, e diz-se que ele pode abrir portais para outras dimensões usando esse poder único.`,
}

// 793 Nihilego
pkmn.nihilego = {
  type: ["rock","poison"],
  bst: {
    hp: 109*1.25,
    atk: 53*1.25,
    def: 50*1.25,
    satk: 147*1.25,
    sdef: 141*1.25,
    spe: 103*1.25,
  },
    hiddenAbility: ability.beastBoost,
    eggMove : move.mimic,
    lore: `Um parasita alienígena que se prende ao cérebro de sua vítima, controlando seus movimentos através de neurotoxinas poderosas.`,
}

// 794 Buzzwole
pkmn.buzzwole = {
  type: ["bug","fighting"],
  bst: {
    hp: 120*1.25,
    atk: 140*1.25,
    def: 140*1.25,
    satk: 53*1.25,
    sdef: 53*1.25,
    spe: 79*1.25,
  },
    hiddenAbility: ability.beastBoost,
    lore: `Seus músculos incrivelmente inchados podem se expandir ainda mais quando ele flexiona, aumentando drasticamente sua força física.`,
}

// 795 Pheromosa
pkmn.pheromosa = {
  type: ["bug","fighting"],
  bst: {
    hp: 80*1.25,
    atk: 140*1.25,
    def: 40*1.25,
    satk: 140*1.25,
    sdef: 40*1.25,
    spe: 161*1.25,
  },
    hiddenAbility: ability.beastBoost,
    eggMove : move.meFirst,
    lore: `Extremamente veloz e ágil, ela evita qualquer tipo de sujeira, e seus chutes podem quebrar ossos com facilidade impressionante.`,
}

// 796 Xurkitree
pkmn.xurkitree = {
  type: ["electric"],
  bst: {
    hp: 100*1.25,
    atk: 89*1.25,
    def: 80*1.25,
    satk: 180*1.25,
    sdef: 80*1.25,
    spe: 100*1.25,
  },
    hiddenAbility: ability.beastBoost,
    eggMove : move.ionise,
    lore: `Seu corpo em forma de árvore absorve eletricidade de tempestades, canalizando-a através de seus galhos brilhantes.`,
}

// 797 Celesteela
pkmn.celesteela = {
  type: ["steel","flying"],
  bst: {
    hp: 80*1.25,
    atk: 120*1.25,
    def: 120*1.25,
    satk: 107*1.25,
    sdef: 101*1.25,
    spe: 61*1.25,
  },
    hiddenAbility: ability.beastBoost,
    eggMove : move.anchorShot,
    lore: `Ela viaja através do espaço usando propulsores em seus braços, e sua altura pode ultrapassar a de um prédio inteiro.`,
}

// 798 Kartana
pkmn.kartana = {
  type: ["grass","steel"],
  bst: {
    hp: 59*1.25,
    atk: 181*1.25,
    def: 140*1.25,
    satk: 60*1.25,
    sdef: 40*1.25,
    spe: 120*1.25,
  },
    hiddenAbility: ability.beastBoost,
    lore: `Suas bordas são mais afiadas que qualquer lâmina feita por humanos, capazes de cortar através de aço grosso com facilidade.`,
}

// 799 Guzzlord
pkmn.guzzlord = {
  type: ["dark","dragon"],
  bst: {
    hp: 223*1.25,
    atk: 131*1.25,
    def: 80*1.25,
    satk: 100*1.25,
    sdef: 53*1.25,
    spe: 43*1.25,
  },
    hiddenAbility: ability.beastBoost,
    lore: `Ele devora tudo o que encontra pela frente, incluindo montanhas inteiras, e nunca parece satisfeito, não importa quanto coma.`,
}

// 800 Necrozma
pkmn.necrozma = {
  type: ["psychic"],
  bst: {
    hp: 105,
    atk: 115,
    def: 101,
    satk: 137,
    sdef: 120,
    spe: 79,
  },
    hiddenAbility: ability.lightAbsorb,
    signature : move.prismaticLaser,
    lore: `Diz-se que ele já foi uma fonte de luz que perdeu sua energia, tornando-se uma criatura sombria em busca de recuperar seu brilho original.`,
}

pkmn.necrozmaDawnWings = {
    type: ["psychic","ghost"],
    bst: {
        hp: 150,
        atk: 113,
        def: 109,
        satk: 167,
        sdef: 127,
        spe: 77,
    },
    lore: `Ao se fundir com Lunala, ele ganha asas capazes de manipular a luz das estrelas com precisão devastadora.`,
}

pkmn.necrozmaDuskMane = {
    type: ["psychic","steel"],
    bst: {
        hp: 150,
        atk: 167,
        def: 127,
        satk: 113,
        sdef: 109,
        spe: 77,
    },
    lore: `Ao se fundir com Solgaleo, ele ganha uma juba brilhante capaz de emitir rajadas de luz extremamente poderosas.`,
}

pkmn.ultraNecrozma = {
    type: ["psychic","dragon"],
    bst: {
        hp: 97*1.35,
        atk: 197*1.35,
        def: 97*1.35,
        satk: 197*1.35,
        sdef: 97*1.35,
        spe: 159*1.35,
    }
}

// 801 Magearna
pkmn.magearna = {
    type: ["steel","fairy"],
    bst: {
        hp: 80*1.5,
        atk: 95*1.5,
        def: 115*1.5,
        satk: 130*1.5,
        sdef: 115*1.5,
        spe: 65*1.5,
    },
    // evolve: function() { return { 1: { pkmn: pkmn.megaMagearna, item: item.magearnite } } },
    signature : move.gearUp,
    lore: `Criada há 500 anos por um cientista brilhante, seu coração artificial é capaz de armazenar as emoções de Pokémon ao seu redor.`,
}

pkmn.magearnaOriginal = {
    type: ["steel","fairy"],
    bst: {
        hp: 80*1.5,
        atk: 95*1.5,
        def: 115*1.5,
        satk: 130*1.5,
        sdef: 115*1.5,
        spe: 65*1.5,
    },
    signature : move.gearUp
}



pkmn.megaMagearna = {
    type: ["steel","fairy"],
    bst: {
        hp: 80*1.5,
        atk: 125*1.5,
        def: 155*1.5,
        satk: 170*1.5,
        sdef: 115*1.5,
        spe: 95*1.5,
    }
}

pkmn.megaMagearnaOriginal = {
    type: ["steel","fairy"],
    bst: {
        hp: 80*1.5,
        atk: 125*1.5,
        def: 155*1.5,
        satk: 170*1.5,
        sdef: 115*1.5,
        spe: 95*1.5,
    }
}

// 802 Marshadow
pkmn.marshadow = {
    hidden:true,
    type: ["fighting","ghost"],
    bst: {
        hp: 90*1.5,
        atk: 125*1.5,
        def: 80*1.5,
        satk: 90*1.5,
        sdef: 90*1.5,
        spe: 125*1.5,
    },
    hiddenAbility: ability.soulAsterism,
    signature : move.spectralThief,
    lore: `Ele se esconde nas sombras de outros Pokémon, imitando seus movimentos e emergindo apenas durante a noite para lutar.`,
}

// 803 Poipole → Naganadel
pkmn.poipole = {
  type: ["poison"],
  bst: {
    hp: 67*1.25,
    atk: 73*1.25,
    def: 67*1.25,
    satk: 73*1.25,
    sdef: 67*1.25,
    spe: 73*1.25,
  },
    evolve: function() { return { 1: { pkmn: pkmn.naganadel, level: evolutionLevel3 } } },
    hiddenAbility: ability.beastBoost,
    eggMove : move.toxicThread,
    lore: `Ele dispara agulhas venenosas de sua cabeça, e apesar de sua aparência agressiva, é extremamente amigável com quem confia.`,
}

pkmn.naganadel = {
  type: ["poison","dragon"],
  bst: {
    hp: 80*1.25,
    atk: 80*1.25,
    def: 80*1.25,
    satk: 127*1.25,
    sdef: 80*1.25,
    spe: 121*1.25,
  },
    hiddenAbility: ability.beastBoost,
    eggMove : move.toxicThread,
    lore: `Seu corpo produz um veneno tão potente que uma única gota pode ser fatal, armazenado em sacos especiais em suas costas.`,
}

// 805 Stakataka
pkmn.stakataka = {
  type: ["rock","steel"],
  bst: {
    hp: 80*1.25,
    atk: 141*1.25,
    def: 211*1.25,
    satk: 53*1.25,
    sdef: 101*1.25,
    spe: 13*1.25,
  },
    hiddenAbility: ability.beastBoost,
    eggMove : move.noRetreat,
    lore: `Formado por pedras empilhadas que ganharam vida misteriosamente, seu peso imenso pode esmagar qualquer coisa embaixo dele.`,
}

// 806 Blacephalon
pkmn.blacephalon = {
  type: ["fire","ghost"],
  bst: {
    hp: 53*1.25,
    atk: 127*1.25,
    def: 53*1.25,
    satk: 151*1.25,
    sdef: 79*1.25,
    spe: 107*1.25,
  },
    signature : move.mindBlown,
    hiddenAbility: ability.beastBoost,
    lore: `Sua cabeça pode explodir repetidamente sem causar dano a si mesmo, um espetáculo usado para assustar e confundir inimigos.`,
}

// 807 Zeraora
pkmn.zeraora = {
  type: ["electric"],
  bst: {
    hp: 88*1.5,
    atk: 122*1.5,
    def: 75*1.5,
    satk: 102*1.5,
    sdef: 80*1.5,
    spe: 153*1.5,
  },
    lore: `Ele pode gerar eletricidade forte o suficiente para iluminar uma cidade inteira, e se move tão rápido que parece teletransportar.`,
}



pkmn.megaZeraora = {
  type: ["electric"],
  bst: {
    hp: 88*1.65,
    atk: 157*1.65,
    def: 75*1.65,
    satk: 147*1.65,
    sdef: 80*1.65,
    spe: 153*1.65,
  },
}



// 808 Meltan → Melmetal
pkmn.meltan = {
  type: ["steel"],
  bst: {
    hp: 46*1.5,
    atk: 65*1.5,
    def: 65*1.5,
    satk: 55*1.5,
    sdef: 35*1.5,
    spe: 34*1.5,
  },
    evolve: function() { return { 1: { pkmn: pkmn.melmetal, level: evolutionLevel3 } } },
    hiddenAbility: ability.ferrilate,
    eggMove : move.gigatonHammer,
    lore: `Formado por um líquido metálico misterioso, ele consegue derreter e absorver metal de qualquer objeto que tocar.`,
}

pkmn.melmetal = {
  type: ["steel"],
  bst: {
    hp: 135*1.5,
    atk: 143*1.5,
    def: 143*1.5,
    satk: 80*1.5,
    sdef: 65*1.5,
    spe: 34*1.5,
  },
    hiddenAbility: ability.ferrilate,
    eggMove : move.gigatonHammer,
    lore: `Seu corpo consegue se contrair e expandir livremente, e dizem que uma manada inteira já foi vista se fundindo em uma única entidade colossal.`,
}

pkmn.melmetalGmax = {
  type: ["steel"],
  bst: {
    hp: 135*1.15,
    atk: 143*1.15,
    def: 143*1.15,
    satk: 80*1.15,
    sdef: 65*1.15,
    spe: 34*1.15,
  },
    hiddenAbility: ability.ferrilate,
    eggMove : move.gigatonHammer
}

// 810 Grookey → Thwackey → Rillaboom
pkmn.grookey = {
  type: ["grass"],
  bst: {
    hp: 50,
    atk: 65,
    def: 50,
    satk: 40,
    sdef: 40,
    spe: 65,
  },
  evolve: function() { return { 1: { pkmn: pkmn.thwackey, level: evolutionLevel1 } } },
    hiddenAbility: ability.grassySurge,
    signature : move.drumBeating
}

pkmn.thwackey = {
  type: ["grass"],
  bst: {
    hp: 70,
    atk: 85,
    def: 70,
    satk: 55,
    sdef: 60,
    spe: 80,
  },
  evolve: function() { return { 1: { pkmn: pkmn.rillaboom, level: evolutionLevel2 } } },
    hiddenAbility: ability.grassySurge,
    signature : move.drumBeating
}

pkmn.rillaboom = {
  type: ["grass"],
  bst: {
    hp: 100,
    atk: 125,
    def: 90,
    satk: 60,
    sdef: 70,
    spe: 85,
  },
    hiddenAbility: ability.grassySurge,
    signature : move.drumBeating
}

pkmn.rillaboomGmax = {
  type: ["grass"],
  bst: {
    hp: 100*1.15,
    atk: 125*1.15,
    def: 90*1.15,
    satk: 60*1.15,
    sdef: 70*1.15,
    spe: 85*1.15,
  },
    hiddenAbility: ability.grassySurge,
    signature : move.drumBeating
}

// 813 Scorbunny → Raboot → Cinderace
pkmn.scorbunny = {
  type: ["fire"],
  bst: {
    hp: 50,
    atk: 71,
    def: 40,
    satk: 40,
    sdef: 40,
    spe: 69,
  },
  evolve: function() { return { 1: { pkmn: pkmn.raboot, level: evolutionLevel1 } } },
    signature : move.pyroBall,
    hiddenAbility: ability.libero,
}

pkmn.raboot = {
  type: ["fire"],
  bst: {
    hp: 65,
    atk: 86,
    def: 60,
    satk: 55,
    sdef: 60,
    spe: 94,
  },
  evolve: function() { return { 1: { pkmn: pkmn.cinderace, level: evolutionLevel2 } } },
    signature : move.pyroBall,
    hiddenAbility: ability.libero,
}

pkmn.cinderace = {
  type: ["fire"],
  bst: {
    hp: 80,
    atk: 110,
    def: 70,
    satk: 65,
    sdef: 75,
    spe: 119,
  },
    signature : move.pyroBall,
    hiddenAbility: ability.libero,
}

pkmn.cinderaceGmax = {
  type: ["fire"],
  bst: {
    hp: 80*1.15,
    atk: 110*1.15,
    def: 70*1.15,
    satk: 65*1.15,
    sdef: 75*1.15,
    spe: 119*1.15,
  },
    signature : move.pyroBall,
    hiddenAbility: ability.libero,
}

// 816 Sobble → Drizzile → Inteleon
pkmn.sobble = {
  type: ["water"],
  bst: {
    hp: 50,
    atk: 40,
    def: 40,
    satk: 70,
    sdef: 40,
    spe: 70,
  },
  evolve: function() { return { 1: { pkmn: pkmn.drizzile, level: evolutionLevel1 } } },
    signature : move.snipeShot
}

pkmn.drizzile = {
  type: ["water"],
  bst: {
    hp: 65,
    atk: 60,
    def: 55,
    satk: 95,
    sdef: 55,
    spe: 90,
  },
  evolve: function() { return { 1: { pkmn: pkmn.inteleon, level: evolutionLevel2 } } },
    signature : move.snipeShot
}

pkmn.inteleon = {
  type: ["water"],
  bst: {
    hp: 70,
    atk: 85,
    def: 65,
    satk: 125,
    sdef: 65,
    spe: 120,
  },
    signature : move.snipeShot
}

pkmn.inteleonGmax = {
  type: ["water"],
  bst: {
    hp: 70*1.15,
    atk: 85*1.15,
    def: 65*1.15,
    satk: 125*1.15,
    sdef: 65*1.15,
    spe: 120*1.15,
  },
    signature : move.snipeShot
}

// 819 Skwovet → Greedent
pkmn.skwovet = {
  type: ["normal"],
  bst: {
    hp: 70,
    atk: 55,
    def: 55,
    satk: 35,
    sdef: 35,
    spe: 25,
  },
  evolve: function() { return { 1: { pkmn: pkmn.greedent, level: evolutionLevel2 } } },
}

pkmn.greedent = {
  type: ["normal"],
  bst: {
    hp: 120,
    atk: 95,
    def: 95,
    satk: 55,
    sdef: 75,
    spe: 20,
  },
}

// 821 Rookidee → Corvisquire → Corviknight
pkmn.rookidee = {
  type: ["flying"],
  bst: {
    hp: 38,
    atk: 47,
    def: 35,
    satk: 33,
    sdef: 35,
    spe: 57,
  },
  evolve: function() { return { 1: { pkmn: pkmn.corvisquire, level: evolutionLevel1 } } },
    hiddenAbility: ability.ferrilate,
    eggMove : move.beakBlast
}

pkmn.corvisquire = {
  type: ["flying"],
  bst: {
    hp: 68,
    atk: 67,
    def: 55,
    satk: 43,
    sdef: 55,
    spe: 77,
  },
  evolve: function() { return { 1: { pkmn: pkmn.corviknight, level: evolutionLevel2 } } },
    hiddenAbility: ability.ferrilate,
    eggMove : move.beakBlast
}

pkmn.corviknight = {
  type: ["flying","steel"],
  bst: {
    hp: 98,
    atk: 87,
    def: 105,
    satk: 53,
    sdef: 85,
    spe: 67,
  },
    hiddenAbility: ability.ferrilate,
    eggMove : move.beakBlast
}

pkmn.corviknightGmax = {
  type: ["flying","steel"],
  bst: {
    hp: 98*1.15,
    atk: 87*1.15,
    def: 105*1.15,
    satk: 53*1.15,
    sdef: 85*1.15,
    spe: 67*1.15,
  },
}

// 824 Blipbug → Dottler → Orbeetle
pkmn.blipbug = {
  type: ["bug"],
  bst: {
    hp: 25,
    atk: 20,
    def: 20,
    satk: 25,
    sdef: 45,
    spe: 45,
  },
  evolve: function() { return { 1: { pkmn: pkmn.dottler, level: evolutionLevel1 } } },
    eggMove: move.magicPowder,
}

pkmn.dottler = {
  type: ["bug","psychic"],
  bst: {
    hp: 50,
    atk: 35,
    def: 80,
    satk: 50,
    sdef: 90,
    spe: 30,
  },
  evolve: function() { return { 1: { pkmn: pkmn.orbeetle, level: evolutionLevel2 } } },
    eggMove: move.magicPowder,
}

pkmn.orbeetle = {
  type: ["bug","psychic"],
  bst: {
    hp: 60,
    atk: 45,
    def: 110,
    satk: 80,
    sdef: 120,
    spe: 90,
  },
    eggMove: move.magicPowder,
}

pkmn.orbeetleGmax = {
  type: ["bug","psychic"],
  bst: {
    hp: 60*1.15,
    atk: 45*1.15,
    def: 110*1.15,
    satk: 80*1.15,
    sdef: 120*1.15,
    spe: 90*1.15,
  },
    eggMove: move.magicPowder,
}

// 827 Nickit → Thievul
pkmn.nickit = {
  type: ["dark"],
  bst: {
    hp: 40,
    atk: 28,
    def: 28,
    satk: 47,
    sdef: 52,
    spe: 50,
  },
  evolve: function() { return { 1: { pkmn: pkmn.thievul, level: evolutionLevel1 } } },
    hiddenAbility: ability.unburden,
}

pkmn.thievul = {
  type: ["dark"],
  bst: {
    hp: 70,
    atk: 58,
    def: 58,
    satk: 87,
    sdef: 92,
    spe: 90,
  },
    hiddenAbility: ability.pickPocket,
}

// 829 Gossifleur → Eldegoss
pkmn.gossifleur = {
  type: ["grass"],
  bst: {
    hp: 40,
    atk: 40,
    def: 60,
    satk: 40,
    sdef: 60,
    spe: 10,
  },
  evolve: function() { return { 1: { pkmn: pkmn.eldegoss, level: evolutionLevel1 } } },
    hiddenAbility: ability.flowerVeil,
}

pkmn.eldegoss = {
  type: ["grass"],
  bst: {
    hp: 60,
    atk: 50,
    def: 90,
    satk: 80,
    sdef: 120,
    spe: 60,
  },
    hiddenAbility: ability.flowerVeil,
}

// 831 Wooloo → Dubwool
pkmn.wooloo = {
  type: ["normal"],
  bst: {
    hp: 42,
    atk: 40,
    def: 55,
    satk: 40,
    sdef: 45,
    spe: 48,
  },
  evolve: function() { return { 1: { pkmn: pkmn.dubwool, level: evolutionLevel2 } } },
}

pkmn.dubwool = {
  type: ["normal"],
  bst: {
    hp: 72,
    atk: 80,
    def: 100,
    satk: 60,
    sdef: 90,
    spe: 88,
  },
}

// 833 Chewtle → Drednaw
pkmn.chewtle = {
  type: ["water"],
  bst: {
    hp: 50,
    atk: 64,
    def: 50,
    satk: 38,
    sdef: 38,
    spe: 44,
  },
  evolve: function() { return { 1: { pkmn: pkmn.drednaw, level: evolutionLevel1 } } },
    hiddenAbility: ability.strongJaw,
}

pkmn.drednaw = {
  type: ["water","rock"],
  bst: {
    hp: 90,
    atk: 115,
    def: 90,
    satk: 48,
    sdef: 68,
    spe: 60,
  },
    hiddenAbility: ability.strongJaw,
}

pkmn.drednawGmax = {
  type: ["water","rock"],
  bst: {
    hp: 90*1.15,
    atk: 115*1.15,
    def: 90*1.15,
    satk: 48*1.15,
    sdef: 68*1.15,
    spe: 60*1.15,
  },
    hiddenAbility: ability.strongJaw,
}

// 835 Yamper → Boltund
pkmn.yamper = {
  type: ["electric"],
  bst: {
    hp: 59,
    atk: 45,
    def: 50,
    satk: 40,
    sdef: 50,
    spe: 26,
  },
  evolve: function() { return { 1: { pkmn: pkmn.boltund, level: evolutionLevel2 } } },
    hiddenAbility: ability.strongJaw,
    eggMove : move.zingZap
}

pkmn.boltund = {
  type: ["electric"],
  bst: {
    hp: 69,
    atk: 90,
    def: 60,
    satk: 90,
    sdef: 60,
    spe: 121,
  },
    hiddenAbility: ability.strongJaw,
    eggMove : move.zingZap
}

// 837 Rolycoly → Carkol → Coalossal
pkmn.rolycoly = {
  type: ["rock"],
  bst: {
    hp: 30,
    atk: 40,
    def: 50,
    satk: 40,
    sdef: 50,
    spe: 30,
  },
  evolve: function() { return { 1: { pkmn: pkmn.carkol, level: evolutionLevel1 } } },
    hiddenAbility: ability.solarPower,
}

pkmn.carkol = {
  type: ["rock","fire"],
  bst: {
    hp: 80,
    atk: 60,
    def: 90,
    satk: 60,
    sdef: 70,
    spe: 50,
  },
  evolve: function() { return { 1: { pkmn: pkmn.coalossal, level: evolutionLevel2 } } },
    hiddenAbility: ability.solarPower,
}

pkmn.coalossal = {
  type: ["rock","fire"],
  bst: {
    hp: 110,
    atk: 80,
    def: 120,
    satk: 80,
    sdef: 90,
    spe: 30,
  },
    hiddenAbility: ability.solarPower,
}

pkmn.coalossalGmax = {
  type: ["rock","fire"],
  bst: {
    hp: 110*1.15,
    atk: 80*1.15,
    def: 120*1.15,
    satk: 80*1.15,
    sdef: 90*1.15,
    spe: 30*1.15,
  },
    hiddenAbility: ability.solarPower,
}

// 840 Applin → Flapple / Appletun
pkmn.applin = {
  type: ["grass","dragon"],
  bst: {
    hp: 40,
    atk: 40,
    def: 80,
    satk: 40,
    sdef: 40,
    spe: 20,
  },
  evolve: function() { 
    return { 
      1: { pkmn: pkmn.flapple, item: item.leafStone }, 
      2: { pkmn: pkmn.appletun, item: item.dragonFang },
      // 3: { pkmn: pkmn.dipplin, item: item.oddRock },
    } 
  },
    hiddenAbility: ability.thickFat,
    signature : move.appleAcid
}

pkmn.flapple = {
  type: ["grass","dragon"],
  bst: {
    hp: 70,
    atk: 110,
    def: 80,
    satk: 95,
    sdef: 60,
    spe: 70,
  },
    hiddenAbility: ability.thickFat,
    signature : move.appleAcid
}

pkmn.appletun = {
  type: ["grass","dragon"],
  bst: {
    hp: 110,
    atk: 85,
    def: 80,
    satk: 100,
    sdef: 80,
    spe: 30,
  },
    hiddenAbility: ability.dragonGuard,
    signature : move.appleAcid
}

pkmn.appletunGmax = {
  type: ["grass","dragon"],
  bst: {
    hp: 110*1.15,
    atk: 85*1.15,
    def: 80*1.15,
    satk: 100*1.15,
    sdef: 80*1.15,
    spe: 30*1.15,
  },
    hiddenAbility: ability.dragonGuard,
    signature : move.appleAcid
}

pkmn.dipplin = {
    type: ["grass","dragon"],
    bst: {
        hp: 80,
        atk: 80,
        def: 110,
        satk: 95,
        sdef: 80,
        spe: 40,
    },
  // evolve: function() { return { 1: { pkmn: pkmn.hydrapple, level: evolutionLevel3 } } },
}

pkmn.hydrapple = {
    type: ["grass", "dragon"],
    bst: {
        hp: 106,
        atk: 80,
        def: 110,
        satk: 120,
        sdef: 80,
        spe: 44,
    }
}

// 843 Silicobra → Sandaconda
pkmn.silicobra = {
  type: ["ground"],
  bst: {
    hp: 52,
    atk: 57,
    def: 75,
    satk: 35,
    sdef: 50,
    spe: 28,
  },
  evolve: function() { return { 1: { pkmn: pkmn.sandaconda, level: evolutionLevel2 } } },
    hiddenAbility: ability.sandyPelt,
}

pkmn.sandaconda = {
  type: ["ground"],
  bst: {
    hp: 72,
    atk: 107,
    def: 125,
    satk: 65,
    sdef: 70,
    spe: 71,
  },
    hiddenAbility: ability.sandyPelt,
}

pkmn.sandacondaGmax = {
  type: ["ground"],
  bst: {
    hp: 72*1.15,
    atk: 107*1.15,
    def: 125*1.15,
    satk: 65*1.15,
    sdef: 70*1.15,
    spe: 71*1.15,
  },
    hiddenAbility: ability.sandyPelt,
}

// 845 Cramorant
pkmn.cramorant = {
  type: ["flying","water"],
  bst: {
    hp: 70,
    atk: 85,
    def: 55,
    satk: 85,
    sdef: 95,
    spe: 85,
  },
}

// 846 Arrokuda → Barraskewda
pkmn.arrokuda = {
  type: ["water"],
  bst: {
    hp: 41,
    atk: 63,
    def: 40,
    satk: 40,
    sdef: 30,
    spe: 66,
  },
  evolve: function() { return { 1: { pkmn: pkmn.barraskewda, level: evolutionLevel2 } } },
    hiddenAbility: ability.swiftSwim,
}

pkmn.barraskewda = {
  type: ["water"],
  bst: {
    hp: 61,
    atk: 123,
    def: 60,
    satk: 60,
    sdef: 50,
    spe: 136,
  },
    hiddenAbility: ability.swiftSwim,
}

// 848 Toxel → Toxtricity
pkmn.toxel = {
  type: ["electric","poison"],
  bst: {
    hp: 40,
    atk: 38,
    def: 35,
    satk: 54,
    sdef: 35,
    spe: 40,
  },
  evolve: function() { return { 1: { pkmn: pkmn.toxtricity, level: evolutionLevel2 } } },
    hiddenAbility: ability.galvanize,
    eggMove : move.boomburst
}

pkmn.toxtricity = {
  type: ["electric","poison"],
  bst: {
    hp: 75,
    atk: 98,
    def: 70,
    satk: 114,
    sdef: 70,
    spe: 75,
  },
    hiddenAbility: ability.galvanize,
    eggMove : move.boomburst
}

pkmn.toxtricityGmax = {
  type: ["electric","poison"],
  bst: {
    hp: 75*1.15,
    atk: 98*1.15,
    def: 70*1.15,
    satk: 114*1.15,
    sdef: 70*1.15,
    spe: 75*1.15,
  },
    hiddenAbility: ability.galvanize,
    eggMove : move.boomburst
}

// 850 Sizzlipede → Centiskorch
pkmn.sizzlipede = {
  type: ["fire","bug"],
  bst: {
    hp: 50,
    atk: 65,
    def: 45,
    satk: 50,
    sdef: 50,
    spe: 45,
  },
  evolve: function() { return { 1: { pkmn: pkmn.centiskorch, level: evolutionLevel2 } } },
    signature : move.burnUp,
    hiddenAbility: ability.scorch,
}

pkmn.centiskorch = {
  type: ["fire","bug"],
  bst: {
    hp: 100,
    atk: 115,
    def: 65,
    satk: 90,
    sdef: 90,
    spe: 65,
  },
    signature : move.burnUp,
    hiddenAbility: ability.scorch,
}

pkmn.centiskorchGmax = {
  type: ["fire","bug"],
  bst: {
    hp: 100*1.15,
    atk: 115*1.15,
    def: 65*1.15,
    satk: 90*1.15,
    sdef: 90*1.15,
    spe: 65*1.15,
  },
    signature : move.burnUp,
    hiddenAbility: ability.scorch,
}

// 852 Clobbopus → Grapploct
pkmn.clobbopus = {
  type: ["fighting"],
  bst: {
    hp: 50,
    atk: 68,
    def: 60,
    satk: 50,
    sdef: 50,
    spe: 32,
  },
  evolve: function() { return { 1: { pkmn: pkmn.grapploct, level: evolutionLevel2 } } },
    hiddenAbility: ability.technician,
}

pkmn.grapploct = {
  type: ["fighting"],
  bst: {
    hp: 80,
    atk: 118,
    def: 90,
    satk: 70,
    sdef: 80,
    spe: 42,
  },
    hiddenAbility: ability.technician,
}

// 854 Sinistea → Polteageist
pkmn.sinistea = {
  type: ["ghost"],
  bst: {
    hp: 40,
    atk: 45,
    def: 45,
    satk: 74,
    sdef: 54,
    spe: 50,
  },
  evolve: function() { return { 1: { pkmn: pkmn.polteageist, item: item.duskStone } } },
    signature : move.teatime,
    hiddenAbility: ability.somberField,
}

pkmn.polteageist = {
  type: ["ghost"],
  bst: {
    hp: 60,
    atk: 65,
    def: 65,
    satk: 134,
    sdef: 114,
    spe: 70,
  },
    signature : move.teatime,
    hiddenAbility: ability.somberField,
}

// 856 Hatenna → Hattrem → Hatterene
pkmn.hatenna = {
  type: ["psychic"],
  bst: {
    hp: 42,
    atk: 30,
    def: 45,
    satk: 56,
    sdef: 53,
    spe: 39,
  },
  evolve: function() { return { 1: { pkmn: pkmn.hattrem, level: evolutionLevel2 } } },
    signature : move.magicPowder,
    hiddenAbility: ability.neuroforce,

}

pkmn.hattrem = {
  type: ["psychic"],
  bst: {
    hp: 57,
    atk: 40,
    def: 65,
    satk: 90,
    sdef: 76,
    spe: 49,
  },
  evolve: function() { return { 1: { pkmn: pkmn.hatterene, level: evolutionLevel3 } } },
    signature : move.magicPowder,
        hiddenAbility: ability.neuroforce,

}

pkmn.hatterene = {
  type: ["psychic","fairy"],
  bst: {
    hp: 57,
    atk: 90,
    def: 95,
    satk: 136,
    sdef: 103,
    spe: 29,
  },
    signature : move.magicPowder,
        hiddenAbility: ability.neuroforce,

}

pkmn.hattereneGmax = {
  type: ["psychic","fairy"],
  bst: {
    hp: 57*1.15,
    atk: 90*1.15,
    def: 95*1.15,
    satk: 136*1.15,
    sdef: 103*1.15,
    spe: 29*1.15,
  },
    signature : move.magicPowder,
        hiddenAbility: ability.neuroforce,

}

// 859 Impidimp → Morgrem → Grimmsnarl
pkmn.impidimp = {
  type: ["dark","fairy"],
  bst: {
    hp: 45,
    atk: 45,
    def: 30,
    satk: 55,
    sdef: 40,
    spe: 50,
  },
  evolve: function() { return { 1: { pkmn: pkmn.morgrem, level: evolutionLevel2 } } },
    hiddenAbility: ability.prankster,
    signature : move.falseSurrender
}

pkmn.morgrem = {
  type: ["dark","fairy"],
  bst: {
    hp: 80,
    atk: 60,
    def: 45,
    satk: 75,
    sdef: 55,
    spe: 70,
  },
  evolve: function() { return { 1: { pkmn: pkmn.grimmsnarl, level: evolutionLevel3 } } },
    hiddenAbility: ability.prankster,
    signature : move.falseSurrender
}

pkmn.grimmsnarl = {
  type: ["dark","fairy"],
  bst: {
    hp: 95,
    atk: 120,
    def: 65,
    satk: 95,
    sdef: 75,
    spe: 60,
  },
    hiddenAbility: ability.prankster,
    signature : move.falseSurrender
}

pkmn.grimmsnarlGmax = {
  type: ["dark","fairy"],
  bst: {
    hp: 95*1.15,
    atk: 120*1.15,
    def: 65*1.15,
    satk: 95*1.15,
    sdef: 75*1.15,
    spe: 60*1.15,
  },
    hiddenAbility: ability.prankster,
    signature : move.falseSurrender
}

// 862 Obstagoon
// 863 Perrserker
// 864 Cursola
// 865 Sirfetch'd
// 866 Mr. Rime
// 867 Runerigus

// 868 Milcery → Alcremie
pkmn.milcery = {
  type: ["fairy"],
  bst: {
    hp: 45,
    atk: 40,
    def: 40,
    satk: 50,
    sdef: 61,
    spe: 34,
  },
  evolve: function() { return { 1: { pkmn: pkmn.alcremie, level: evolutionLevel2 } } },
    hiddenAbility: ability.mistySurge,
    eggMove : move.teatime
}

pkmn.alcremie = {
  type: ["fairy"],
  bst: {
    hp: 65,
    atk: 60,
    def: 75,
    satk: 110,
    sdef: 121,
    spe: 64,
  },
    hiddenAbility: ability.mistySurge,
    eggMove : move.teatime
}

pkmn.alcremieGmax = {
  type: ["fairy"],
  bst: {
    hp: 65*1.15,
    atk: 60*1.15,
    def: 75*1.15,
    satk: 110*1.15,
    sdef: 121*1.15,
    spe: 64*1.15,
  },
    hiddenAbility: ability.mistySurge,
    eggMove : move.teatime
}

// 870 Falinks
pkmn.falinks = {
  type: ["fighting"],
  bst: {
    hp: 65,
    atk: 100,
    def: 100,
    satk: 70,
    sdef: 60,
    spe: 75,
  },
    evolve: function() { return { 1: { pkmn: pkmn.megaFalinks, item: item.falinksite } } },
    hiddenAbility: ability.reckless,
    signature : move.noRetreat
}

pkmn.megaFalinks = {
  type: ["fighting"],
  bst: {
    hp: 125*1.2,
    atk: 135*1.2,
    def: 135*1.2,
    satk: 70*1.2,
    sdef: 65*1.2,
    spe: 100*1.2,
  },
    hiddenAbility: ability.reckless,
    signature : move.noRetreat
}

// 871 Pincurchin
pkmn.pincurchin = {
  type: ["electric"],
  bst: {
    hp: 48,
    atk: 101,
    def: 95,
    satk: 91,
    sdef: 85,
    spe: 15,
  },
    hiddenAbility: ability.electricSurge,
    eggMove : move.acupressure
}

// 872 Snom → Frosmoth
pkmn.snom = {
  type: ["ice","bug"],
  bst: {
    hp: 30,
    atk: 25,
    def: 35,
    satk: 45,
    sdef: 30,
    spe: 20,
  },
  evolve: function() { return { 1: { pkmn: pkmn.frosmoth, level: evolutionLevel3 } } },
    hiddenAbility: ability.glaciate,
    eggMove : move.snowscape
}

pkmn.frosmoth = {
  type: ["ice","bug"],
  bst: {
    hp: 70,
    atk: 65,
    def: 60,
    satk: 125,
    sdef: 90,
    spe: 65,
  },
    hiddenAbility: ability.glaciate,
    eggMove : move.snowscape
}

// 874 Stonjourner
pkmn.stonjourner = {
  type: ["rock"],
  bst: {
    hp: 100,
    atk: 125,
    def: 135,
    satk: 20,
    sdef: 20,
    spe: 70,
  },
    hiddenAbility: ability.stoned,
}

// 875 Eiscue
pkmn.eiscue = {
  type: ["ice"],
  bst: {
    hp: 75,
    atk: 80,
    def: 110,
    satk: 65,
    sdef: 90,
    spe: 50,
  },
    hiddenAbility: ability.dancer,
    eggMove : move.bellyDrum
}

// 876 Indeedee
pkmn.indeedee = {
  type: ["psychic","normal"],
  bst: {
    hp: 60,
    atk: 65,
    def: 55,
    satk: 105,
    sdef: 95,
    spe: 95,
  },
    hiddenAbility: ability.neuroforce,
    eggMove : move.storedPower
}

// 877 Morpeko
pkmn.morpeko = {
  type: ["electric","dark"],
  bst: {
    hp: 58,
    atk: 95,
    def: 58,
    satk: 70,
    sdef: 58,
    spe: 97,
  },
    hiddenAbility: ability.moody,
    signature : move.auraWheel
}

// 878 Cufant → Copperajah
pkmn.cufant = {
  type: ["steel"],
  bst: {
    hp: 72,
    atk: 80,
    def: 49,
    satk: 40,
    sdef: 49,
    spe: 40,
  },
  evolve: function() { return { 1: { pkmn: pkmn.copperajah, level: evolutionLevel2 } } },
    hiddenAbility: ability.sheerForce,
}

pkmn.copperajah = {
  type: ["steel"],
  bst: {
    hp: 122,
    atk: 130,
    def: 69,
    satk: 80,
    sdef: 69,
    spe: 30,
  },
    hiddenAbility: ability.sheerForce,
}

pkmn.copperajahGmax = {
  type: ["steel"],
  bst: {
    hp: 122*1.15,
    atk: 130*1.15,
    def: 69*1.15,
    satk: 80*1.15,
    sdef: 69*1.15,
    spe: 30*1.15,
  },
    hiddenAbility: ability.sheerForce,
}

// 880 Dracozolt
pkmn.dracozolt = {
  type: ["electric","dragon"],
  bst: {
    hp: 90,
    atk: 100,
    def: 90,
    satk: 80,
    sdef: 70,
    spe: 75,
  },
}

// 881 Arctozolt
pkmn.arctozolt = {
  type: ["electric","ice"],
  bst: {
    hp: 90,
    atk: 100,
    def: 90,
    satk: 90,
    sdef: 80,
    spe: 55,
  },
    hiddenAbility: ability.slushRush,
    eggMove : move.freezeDry
}


// 882 Dracovish
pkmn.dracovish = {
  type: ["water","dragon"],
  bst: {
    hp: 90,
    atk: 90,
    def: 100,
    satk: 70,
    sdef: 80,
    spe: 75,
  },
    hiddenAbility: ability.strongJaw,
    signature : move.fishiousRend
}

// 883 Arctovish
pkmn.arctovish = {
  type: ["water","ice"],
  bst: {
    hp: 90,
    atk: 90,
    def: 100,
    satk: 80,
    sdef: 90,
    spe: 55,
  },
    hiddenAbility: ability.slushRush,
    signature : move.fishiousRend
}

// 884 Duraludon → Archaludon
pkmn.duraludon = {
  type: ["steel","dragon"],
  bst: {
    hp: 70,
    atk: 95,
    def: 115,
    satk: 120,
    sdef: 50,
    spe: 85,
  },
    hiddenAbility: ability.stamina,
    eggMove : move.kingsShield
}

pkmn.duraludonGmax = {
  type: ["steel","dragon"],
  bst: {
    hp: 70*1.15,
    atk: 95*1.15,
    def: 115*1.15,
    satk: 120*1.15,
    sdef: 50*1.15,
    spe: 85*1.15,
  },
    hiddenAbility: ability.stamina,
    eggMove : move.kingsShield
}

pkmn.archaludon = {
    type: ["steel", "dragon"],
    bst: {
        hp: 90,
        atk: 105,
        def: 130,
        satk: 125,
        sdef: 65,
        spe: 85,
    },
    hiddenAbility: ability.stamina,
    eggMove : move.kingsShield
}

// 885 Dreepy → Drakloak → Dragapult
pkmn.dreepy = {
  type: ["dragon","ghost"],
  bst: {
    hp: 28,
    atk: 60,
    def: 30,
    satk: 40,
    sdef: 30,
    spe: 82,
  },
  evolve: function() { return { 1: { pkmn: pkmn.drakloak, level: evolutionLevel2 } } },
    signature : move.dragonDarts,
    hiddenAbility: ability.megaLauncher,
}

pkmn.drakloak = {
  type: ["dragon","ghost"],
  bst: {
    hp: 68,
    atk: 80,
    def: 50,
    satk: 60,
    sdef: 50,
    spe: 102,
  },
  evolve: function() { return { 1: { pkmn: pkmn.dragapult, level: evolutionLevel3 } } },
    signature : move.dragonDarts,
    hiddenAbility: ability.megaLauncher,
}

pkmn.dragapult = {
  type: ["dragon","ghost"],
  bst: {
    hp: 88,
    atk: 120,
    def: 75,
    satk: 100,
    sdef: 75,
    spe: 142,
  },
    signature : move.dragonDarts,
    hiddenAbility: ability.megaLauncher,
}

// 888 Zacian
pkmn.zacian = {
  type: ["fairy"],
  bst: {
    hp: 92*1.3,
    atk: 130*1.3,
    def: 115*1.3,
    satk: 80*1.3,
    sdef: 115*1.3,
    spe: 138*1.3,
  },
    hiddenAbility: ability.iaido,
}

pkmn.zacianCrowned = {
    type: ["fairy","steel"],
    bst: {
        hp: 92*1.3,
        atk: 170*1.3,
        def: 115*1.3,
        satk: 80*1.3,
        sdef: 115*1.3,
        spe: 148*1.3,
    }
}

// 889 Zamazenta
pkmn.zamazenta = {
  type: ["fighting"],
  bst: {
    hp: 92*1.3,
    atk: 130*1.3,
    def: 115*1.3,
    satk: 80*1.3,
    sdef: 115*1.3,
    spe: 138*1.3,
  },
    eggMove: move.howl,
}

pkmn.zamazentaCrowned = {
    type: ["fighting","steel"],
    bst: {
        hp: 92*1.3,
        atk: 130*1.3,
        def: 165*1.3,
        satk: 80*1.3,
        sdef: 165*1.3,
        spe: 128*1.3,
    }
}

// 890 Eternatus
pkmn.eternatus = {
  type: ["poison","dragon"],
  bst: {
    hp: 140*1.35,
    atk: 85*1.35,
    def: 95*1.35,
    satk: 145*1.35,
    sdef: 95*1.35,
    spe: 130*1.35,
  },
    hiddenAbility: ability.supremeOverlord,
}

// 891 Kubfu → Urshifu
pkmn.kubfu = {
  type: ["fighting"],
  bst: {
    hp: 60*1.3,
    atk: 90*1.3,
    def: 60*1.3,
    satk: 53*1.3,
    sdef: 50*1.3,
    spe: 72*1.3,
  },
  evolve: function() {
    return {
      1: { pkmn: pkmn.urshifuSingle, item: item.blackBelt },
      2: { pkmn: pkmn.urshifuRapid, item: item.waterStone },
    }
  }
}

pkmn.urshifuSingle = {
    rename: `urshifu S.`,
  type: ["fighting","dark"],
  bst: {
    hp: 100*1.3,
    atk: 130*1.3,
    def: 100*1.3,
    satk: 63*1.3,
    sdef: 60*1.3,
    spe: 97*1.3,
  },
}

pkmn.urshifuSingleGmax = {
    rename: `urshifu S. Gmax`,
  type: ["fighting","dark"],
  bst: {
    hp: 100*1.15,
    atk: 130*1.15,
    def: 100*1.15,
    satk: 63*1.15,
    sdef: 60*1.15,
    spe: 97*1.15,
  },
}

pkmn.urshifuRapid = {
    rename: `urshifu R.`,
  type: ["fighting","water"],
  bst: {
    hp: 100*1.3,
    atk: 130*1.3,
    def: 100*1.3,
    satk: 63*1.3,
    sdef: 60*1.3,
    spe: 97*1.3,
  },
}

pkmn.urshifuRapidGmax = {
    rename: `urshifu R. Gmax`,
  type: ["fighting","water"],
  bst: {
    hp: 100*1.15,
    atk: 130*1.15,
    def: 100*1.15,
    satk: 63*1.15,
    sdef: 60*1.15,
    spe: 97*1.15,
  },
}

// 893 Zarude
pkmn.zarude = {
  type: ["dark","grass"],
  bst: {
    hp: 105*1.5,
    atk: 120*1.5,
    def: 105*1.5,
    satk: 70*1.5,
    sdef: 95*1.5,
    spe: 105*1.5,
  },
}

pkmn.zarudeDada = {
  type: ["dark","grass"],
  bst: {
    hp: 105*1.5,
    atk: 120*1.5,
    def: 105*1.5,
    satk: 70*1.5,
    sdef: 95*1.5,
    spe: 105*1.5,
  },
}

// 894 Regieleki
pkmn.regieleki = {
  type: ["electric"],
  bst: {
    hp: 80,
    atk: 120,
    def: 50,
    satk: 120,
    sdef: 50,
    spe: 200,
  },
    hiddenAbility: ability.galvanize,
    signature : move.thunderCage
}

// 895 Regidrago
pkmn.regidrago = {
  type: ["dragon"],
  bst: {
    hp: 200,
    atk: 100,
    def: 80,
    satk: 100,
    sdef: 80,
    spe: 80,
  },
    hiddenAbility: ability.dragonMaw,
    signature : move.dragonEnergy

}

// 896 Glastrier
pkmn.glastrier = {
  type: ["ice"],
  bst: {
    hp: 100,
    atk: 145,
    def: 130,
    satk: 65,
    sdef: 110,
    spe: 30,
  },
}

// 897 Spectrier
pkmn.spectrier = {
  type: ["ghost"],
  bst: {
    hp: 100,
    atk: 65,
    def: 60,
    satk: 145,
    sdef: 80,
    spe: 130,
  },
}

// 898 Calyrex
pkmn.calyrex = {
  type: ["psychic","grass"],
  bst: {
    hp: 100*1.3,
    atk: 80*1.3,
    def: 80*1.3,
    satk: 80*1.3,
    sdef: 80*1.3,
    spe: 80*1.3,
  },
}

pkmn.calyrexIce = {
  type: ["psychic","ice"],
  bst: {
    hp: 100*1.3,
    atk: 165*1.3,
    def: 150*1.3,
    satk: 85*1.3,
    sdef: 130*1.3,
    spe: 50*1.3,
  },
}

pkmn.calyrexShadow = {
  type: ["psychic","ghost"],
  bst: {
    hp: 100*1.3,
    atk: 85*1.3,
    def: 80*1.3,
    satk: 165*1.3,
    sdef: 100*1.3,
    spe: 150*1.3,
  },
}

// 899 Wyrdeer
// 900 Kleavor
// 901 Ursaluna
// 902 Basculegion
// 903 Sneasler
// 904 Overqwil



// 906 Sprigatito → Floragato → Meowscarada
pkmn.sprigatito = {
  type: ["grass"],
  bst: {
    hp: 40,
    atk: 61,
    def: 54,
    satk: 45,
    sdef: 45,
    spe: 65,
  },
  evolve: function() { return { 1: { pkmn: pkmn.floragato, level: evolutionLevel1 } } },
    hiddenAbility: ability.grassyPelt,
    eggMove : move.needleArm
}

pkmn.floragato = {
  type: ["grass"],
  bst: {
    hp: 61,
    atk: 80,
    def: 63,
    satk: 60,
    sdef: 63,
    spe: 83,
  },
  evolve: function() { return { 1: { pkmn: pkmn.meowscarada, level: evolutionLevel2 } } },
    hiddenAbility: ability.grassyPelt,
    eggMove : move.needleArm
}

pkmn.meowscarada = {
  type: ["grass", "dark"],
  bst: {
    hp: 76,
    atk: 110,
    def: 70,
    satk: 81,
    sdef: 70,
    spe: 123,
  },
    hiddenAbility: ability.grassyPelt,
    eggMove : move.needleArm
}

// 909 Fuecoco → Crocalor → Skeledirge
pkmn.fuecoco = {
  type: ["fire"],
  bst: {
    hp: 67,
    atk: 45,
    def: 59,
    satk: 63,
    sdef: 40,
    spe: 36,
  },
  evolve: function() { return { 1: { pkmn: pkmn.crocalor, level: evolutionLevel1 } } },
    signature : move.torchSong
}

pkmn.crocalor = {
  type: ["fire"],
  bst: {
    hp: 81,
    atk: 55,
    def: 78,
    satk: 90,
    sdef: 58,
    spe: 49,
  },
  evolve: function() { return { 1: { pkmn: pkmn.skeledirge, level: evolutionLevel2 } } },
    signature : move.torchSong
}

pkmn.skeledirge = {
  type: ["fire", "ghost"],
  bst: {
    hp: 104,
    atk: 75,
    def: 100,
    satk: 110,
    sdef: 75,
    spe: 66,
  },
    signature : move.torchSong
}

// 912 Quaxly → Quaxwell → Quaquaval
pkmn.quaxly = {
  type: ["water"],
  bst: {
    hp: 55,
    atk: 65,
    def: 45,
    satk: 50,
    sdef: 45,
    spe: 50,
  },
  evolve: function() { return { 1: { pkmn: pkmn.quaxwell, level: evolutionLevel1 } } },
    hiddenAbility: ability.dancer,
    signature : move.aquaStep
}

pkmn.quaxwell = {
  type: ["water"],
  bst: {
    hp: 70,
    atk: 85,
    def: 65,
    satk: 65,
    sdef: 60,
    spe: 65,
  },
  evolve: function() { return { 1: { pkmn: pkmn.quaquaval, level: evolutionLevel2 } } },
    hiddenAbility: ability.dancer,
    signature : move.aquaStep
}

pkmn.quaquaval = {
  type: ["water", "fighting"],
  bst: {
    hp: 85,
    atk: 100,
    def: 80,
    satk: 85,
    sdef: 75,
    spe: 85,
  },
    hiddenAbility: ability.dancer,
    signature : move.aquaStep
}

// 915 Lechonk → Oinkologne
pkmn.lechonk = {
  type: ["normal"],
  bst: {
    hp: 54,
    atk: 45,
    def: 40,
    satk: 35,
    sdef: 45,
    spe: 35,
  },
  evolve: function() { return { 1: { pkmn: pkmn.oinkologne, level: evolutionLevel1 } } }
}

pkmn.oinkologne = {
  type: ["normal"],
  bst: {
    hp: 110,
    atk: 100,
    def: 75,
    satk: 59,
    sdef: 80,
    spe: 65,
  }
}

// 917 Tarountula → Spidops
pkmn.tarountula = {
  type: ["bug"],
  bst: {
    hp: 35,
    atk: 41,
    def: 45,
    satk: 29,
    sdef: 40,
    spe: 20,
  },
  evolve: function() { return { 1: { pkmn: pkmn.spidops, level: evolutionLevel1 } } }
}

pkmn.spidops = {
  type: ["bug"],
  bst: {
    hp: 60,
    atk: 79,
    def: 92,
    satk: 52,
    sdef: 86,
    spe: 35,
  }
}

// 919 Nymble → Lokix
pkmn.nymble = {
  type: ["bug"],
  bst: {
    hp: 33,
    atk: 46,
    def: 40,
    satk: 21,
    sdef: 25,
    spe: 45,
  },
  evolve: function() { return { 1: { pkmn: pkmn.lokix, level: evolutionLevel1 } } },
  hiddenAbility: ability.tintedLens,
}

pkmn.lokix = {
  type: ["bug", "dark"],
  bst: {
    hp: 71,
    atk: 102,
    def: 78,
    satk: 52,
    sdef: 55,
    spe: 92,
  },
  hiddenAbility: ability.tintedLens,
}

// 921 Pawmi → Pawmo → Pawmot
pkmn.pawmi = {
  type: ["electric"],
  bst: {
    hp: 45,
    atk: 50,
    def: 20,
    satk: 40,
    sdef: 25,
    spe: 60,
  },
  evolve: function() { return { 1: { pkmn: pkmn.pawmo, level: evolutionLevel1 } } },
    hiddenAbility: ability.spikyPelt,
    eggMove : move.hiJumpKick
}

pkmn.pawmo = {
  type: ["electric", "fighting"],
  bst: {
    hp: 60,
    atk: 75,
    def: 40,
    satk: 50,
    sdef: 40,
    spe: 85,
  },
  evolve: function() { return { 1: { pkmn: pkmn.pawmot, level: evolutionLevel2 } } },
    hiddenAbility: ability.spikyPelt,
    eggMove : move.hiJumpKick
}

pkmn.pawmot = {
  type: ["electric", "fighting"],
  bst: {
    hp: 90,
    atk: 125,
    def: 70,
    satk: 70,
    sdef: 60,
    spe: 105,
  },
    hiddenAbility: ability.spikyPelt,
    eggMove : move.hiJumpKick
}

// 924 Tandemaus → Maushold
pkmn.tandemaus = {
  type: ["normal"],
  bst: {
    hp: 50,
    atk: 50,
    def: 45,
    satk: 40,
    sdef: 45,
    spe: 75,
  },
  evolve: function() { return { 1: { pkmn: pkmn.maushold, level: evolutionLevel2 } } },
    signature : move.populationBomb
}

pkmn.maushold = {
  type: ["normal"],
  bst: {
    hp: 74,
    atk: 75,
    def: 70,
    satk: 65,
    sdef: 75,
    spe: 111,
  },
    signature : move.populationBomb
}

// 926 Fidough → Dachsbun
pkmn.fidough = {
  type: ["fairy"],
  bst: {
    hp: 37,
    atk: 55,
    def: 70,
    satk: 30,
    sdef: 55,
    spe: 65,
  },
  evolve: function() { return { 1: { pkmn: pkmn.dachsbun, level: evolutionLevel2 } } }
}

pkmn.dachsbun = {
  type: ["fairy"],
  bst: {
    hp: 57,
    atk: 80,
    def: 115,
    satk: 50,
    sdef: 80,
    spe: 95,
  }
}

// 928 Smoliv → Dolliv → Arboliva
pkmn.smoliv = {
  type: ["grass", "normal"],
  bst: {
    hp: 41,
    atk: 35,
    def: 45,
    satk: 58,
    sdef: 51,
    spe: 30,
  },
  evolve: function() { return { 1: { pkmn: pkmn.dolliv, item: item.leafStone } } },
    eggMove : move.frenzyPlant
}

pkmn.dolliv = {
  type: ["grass", "normal"],
  bst: {
    hp: 80,
    atk: 53,
    def: 60,
    satk: 78,
    sdef: 78,
    spe: 33,
  },
  evolve: function() { return { 1: { pkmn: pkmn.arboliva, level: evolutionLevel2 } } },
    eggMove : move.frenzyPlant
}

pkmn.arboliva = {
  type: ["grass", "normal"],
  bst: {
    hp: 78,
    atk: 69,
    def: 90,
    satk: 125,
    sdef: 109,
    spe: 39,
  },
    eggMove : move.frenzyPlant
}

// 931 Squawkabilly
pkmn.squawkabilly = {
  type: ["normal", "flying"],
  bst: {
    hp: 82,
    atk: 96,
    def: 51,
    satk: 45,
    sdef: 51,
    spe: 92,
  },
    eggMove : move.mimic
}

// 932 Nacli → Naclstack → Garganacl
pkmn.nacli = {
  type: ["rock"],
  bst: {
    hp: 55,
    atk: 55,
    def: 75,
    satk: 35,
    sdef: 35,
    spe: 25,
  },
  evolve: function() { return { 1: { pkmn: pkmn.naclstack, level: evolutionLevel1 } } },
     hiddenAbility: ability.purifyingSalt,
    eggMove : move.rockWrecker
}

pkmn.naclstack = {
  type: ["rock"],
  bst: {
    hp: 80,
    atk: 60,
    def: 100,
    satk: 45,
    sdef: 85,
    spe: 35,
  },
  evolve: function() { return { 1: { pkmn: pkmn.garganacl, level: evolutionLevel2 } } },
     hiddenAbility: ability.purifyingSalt,
    eggMove : move.rockWrecker
}

pkmn.garganacl = {
  type: ["rock"],
  bst: {
    hp: 100,
    atk: 100,
    def: 130,
    satk: 45,
    sdef: 90,
    spe: 35,
  },
     hiddenAbility: ability.purifyingSalt,
    eggMove : move.rockWrecker
}

// 935 Charcadet → Armarouge / Ceruledge
pkmn.charcadet = {
  type: ["fire"],
  bst: {
    hp: 40,
    atk: 50,
    def: 40,
    satk: 50,
    sdef: 40,
    spe: 35,
  },
  evolve: function() {
    return {
      1: { pkmn: pkmn.armarouge, item: item.linkStone },
      2: { pkmn: pkmn.ceruledge, item: item.oddRock },
    }
  }
}

pkmn.armarouge = {
  type: ["fire", "psychic"],
  bst: {
    hp: 85,
    atk: 60,
    def: 100,
    satk: 125,
    sdef: 80,
    spe: 125,
  },
    hiddenAbility: ability.megaLauncher,
    signature : move.armorCannon
}

pkmn.ceruledge = {
  type: ["fire", "ghost"],
  bst: {
    hp: 75,
    atk: 125,
    def: 80,
    satk: 60,
    sdef: 100,
    spe: 125,
  },
    hiddenAbility: ability.sharpness,
    signature : move.bitterBlade
}

// 938 Tadbulb → Bellibolt
pkmn.tadbulb = {
  type: ["electric"],
  bst: {
    hp: 61,
    atk: 31,
    def: 41,
    satk: 59,
    sdef: 35,
    spe: 45,
  },
  evolve: function() { return { 1: { pkmn: pkmn.bellibolt, level: evolutionLevel1 } } },
    hiddenAbility: ability.flashElectro,
    eggMove : move.electroBall
}

pkmn.bellibolt = {
  type: ["electric"],
  bst: {
    hp: 109,
    atk: 64,
    def: 91,
    satk: 103,
    sdef: 83,
    spe: 45,
  },
    hiddenAbility: ability.flashElectro,
    eggMove : move.electroBall
}

// 940 Wattrel → Kilowattrel
pkmn.wattrel = {
  type: ["electric", "flying"],
  bst: {
    hp: 40,
    atk: 40,
    def: 35,
    satk: 55,
    sdef: 40,
    spe: 70,
  },
  evolve: function() { return { 1: { pkmn: pkmn.kilowattrel, level: evolutionLevel1 } } },
    hiddenAbility: ability.justified,
}

pkmn.kilowattrel = {
  type: ["electric", "flying"],
  bst: {
    hp: 70,
    atk: 70,
    def: 60,
    satk: 105,
    sdef: 60,
    spe: 125,
  },
    hiddenAbility: ability.justified,
}

// 942 Maschiff → Mabostiff
pkmn.maschiff = {
  type: ["dark"],
  bst: {
    hp: 60,
    atk: 78,
    def: 60,
    satk: 40,
    sdef: 51,
    spe: 51,
  },
  evolve: function() { return { 1: { pkmn: pkmn.mabosstiff, level: evolutionLevel1 } } },
    hiddenAbility: ability.blackPelt,
}

pkmn.mabosstiff = {
  type: ["dark"],
  bst: {
    hp: 80,
    atk: 120,
    def: 90,
    satk: 60,
    sdef: 70,
    spe: 85,
  },
    hiddenAbility: ability.blackPelt,
}

// 944 Shroodle → Grafaiai
pkmn.shroodle = {
  type: ["poison", "normal"],
  bst: {
    hp: 40,
    atk: 65,
    def: 35,
    satk: 40,
    sdef: 35,
    spe: 75,
  },
  evolve: function() { return { 1: { pkmn: pkmn.grafaiai, level: evolutionLevel1 } } },
    hiddenAbility: ability.corrosion,
    eggMove : move.sketch
}

pkmn.grafaiai = {
  type: ["poison", "normal"],
  bst: {
    hp: 63,
    atk: 95,
    def: 65,
    satk: 80,
    sdef: 72,
    spe: 110,
  },
    hiddenAbility: ability.corrosion,
    eggMove : move.sketch
}

// 946 Bramblin → Brambleghast
pkmn.bramblin = {
  type: ["grass", "ghost"],
  bst: {
    hp: 40,
    atk: 65,
    def: 30,
    satk: 45,
    sdef: 35,
    spe: 60,
  },
  evolve: function() { return { 1: { pkmn: pkmn.brambleghast, level: evolutionLevel1 } } },
    hiddenAbility: ability.windRider,
}

pkmn.brambleghast = {
  type: ["grass", "ghost"],
  bst: {
    hp: 55,
    atk: 115,
    def: 70,
    satk: 80,
    sdef: 70,
    spe: 90,
  },
    hiddenAbility: ability.windRider,
}

// 948 Toedscool → Toedscruel
pkmn.toedscool = {
  type: ["ground", "grass"],
  bst: {
    hp: 40,
    atk: 40,
    def: 35,
    satk: 50,
    sdef: 100,
    spe: 70,
  },
  evolve: function() { return { 1: { pkmn: pkmn.toedscruel, level: evolutionLevel1 } } },
    hiddenAbility: ability.merciless,
}

pkmn.toedscruel = {
  type: ["ground", "grass"],
  bst: {
    hp: 80,
    atk: 70,
    def: 65,
    satk: 80,
    sdef: 120,
    spe: 100,
  },
    hiddenAbility: ability.merciless,
}

// 950 Klawf
pkmn.klawf = {
  type: ["rock"],
  bst: {
    hp: 70,
    atk: 100,
    def: 115,
    satk: 35,
    sdef: 55,
    spe: 75,
  }
}

// 951 Capsakid → Scovillain
pkmn.capsakid = {
  type: ["grass"],
  bst: {
    hp: 50,
    atk: 62,
    def: 40,
    satk: 62,
    sdef: 40,
    spe: 50,
  },
  evolve: function() { return { 1: { pkmn: pkmn.scovillain, level: evolutionLevel1 } } },
    hiddenAbility: ability.contrary,
    eggMove : move.inferno,
}


pkmn.scovillain = {
  type: ["grass", "fire"],
  bst: {
    hp: 65,
    atk: 108,
    def: 65,
    satk: 108,
    sdef: 65,
    spe: 75,
  },
    hiddenAbility: ability.contrary,
    eggMove : move.inferno,
}

pkmn.megaScovillain = {
  type: ["grass", "fire"],
  bst: {
    hp: 65*1.2,
    atk: 138*1.2,
    def: 85*1.2,
    satk: 138*1.2,
    sdef: 85*1.2,
    spe: 75*1.2,
  },
    hiddenAbility: ability.contrary,
    eggMove : move.inferno,
}

// 953 Rellor → Rabsca
pkmn.rellor = {
  type: ["bug"],
  bst: {
    hp: 41,
    atk: 50,
    def: 60,
    satk: 31,
    sdef: 58,
    spe: 30,
  },
  evolve: function() { return { 1: { pkmn: pkmn.rabsca, level: evolutionLevel1 } } },
    hiddenAbility: ability.chrysilate,
}

pkmn.rabsca = {
  type: ["bug", "psychic"],
  bst: {
    hp: 75,
    atk: 50,
    def: 85,
    satk: 115,
    sdef: 100,
    spe: 45,
  },
    hiddenAbility: ability.chrysilate,
}

// 955 Flittle → Espathra
pkmn.flittle = {
  type: ["psychic"],
  bst: {
    hp: 30,
    atk: 35,
    def: 30,
    satk: 55,
    sdef: 30,
    spe: 75,
  },
  evolve: function() { return { 1: { pkmn: pkmn.espathra, level: evolutionLevel1 } } },
    hiddenAbility: ability.speedBoost,
    signature : move.luminaCrash
}

pkmn.espathra = {
  type: ["psychic"],
  bst: {
    hp: 95,
    atk: 60,
    def: 60,
    satk: 101,
    sdef: 60,
    spe: 105,
  },
    hiddenAbility: ability.speedBoost,
    signature : move.luminaCrash
}

// 957 Tinkatink → Tinkatuff → Tinkaton
pkmn.tinkatink = {
  type: ["fairy", "steel"],
  bst: {
    hp: 50,
    atk: 45,
    def: 45,
    satk: 35,
    sdef: 64,
    spe: 58,
  },
  evolve: function() { return { 1: { pkmn: pkmn.tinkatuff, level: evolutionLevel1 } } },
    hiddenAbility: ability.hugePower,
    signature : move.gigatonHammer
}

pkmn.tinkatuff = {
  type: ["fairy", "steel"],
  bst: {
    hp: 65,
    atk: 55,
    def: 55,
    satk: 45,
    sdef: 82,
    spe: 78,
  },
  evolve: function() { return { 1: { pkmn: pkmn.tinkaton, level: evolutionLevel2 } } },
  hiddenAbility: ability.hugePower,
    signature : move.gigatonHammer
}

pkmn.tinkaton = {
  type: ["fairy", "steel"],
  bst: {
    hp: 85,
    atk: 75,
    def: 77,
    satk: 70,
    sdef: 105,
    spe: 94,
  },
    hiddenAbility: ability.hugePower,
    signature : move.gigatonHammer
}

// 960 Wiglett → Wugtrio
pkmn.wiglett = {
  type: ["water"],
  bst: {
    hp: 10,
    atk: 55,
    def: 25,
    satk: 35,
    sdef: 25,
    spe: 95,
  },
  evolve: function() { return { 1: { pkmn: pkmn.wugtrio, level: evolutionLevel1 } } },
    eggMove : move.tripleDive,
    hiddenAbility: ability.technician,
}

pkmn.wugtrio = {
  type: ["water"],
  bst: {
    hp: 35,
    atk: 100,
    def: 50,
    satk: 50,
    sdef: 70,
    spe: 120,
  },
    eggMove : move.tripleDive,
    hiddenAbility: ability.technician,
}

// 962 Bombirdier
pkmn.bombirdier = {
  type: ["flying", "dark"],
  bst: {
    hp: 70,
    atk: 103,
    def: 85,
    satk: 60,
    sdef: 85,
    spe: 82,
  }
}

// 963 Finizen → Palafin
pkmn.finizen = {
  type: ["water"],
  bst: {
    hp: 70,
    atk: 45,
    def: 40,
    satk: 45,
    sdef: 40,
    spe: 75,
  },
  evolve: function() { return { 1: { pkmn: pkmn.palafin, level: evolutionLevel1 } } },
    signature : move.jetPunch
}

pkmn.palafin = {
  type: ["water"],
  bst: {
    hp: 100,
    atk: 70,
    def: 72,
    satk: 53,
    sdef: 62,
    spe: 100,
  },
    signature : move.jetPunch
}

/*

pkmn.palafinHero = {
  type: ["water"],
  bst: {
    hp: 100,
    atk: 160,
    def: 97,
    satk: 106,
    sdef: 87,
    spe: 100,
  }
}

*/

// 965 Varoom → Revavroom
pkmn.varoom = {
  type: ["steel", "poison"],
  bst: {
    hp: 45,
    atk: 70,
    def: 63,
    satk: 30,
    sdef: 45,
    spe: 47,
  },
  evolve: function() { return { 1: { pkmn: pkmn.revavroom, level: evolutionLevel1 } } },
    hiddenAbility: ability.hyperconductor,
}

pkmn.revavroom = {
  type: ["steel", "poison"],
  bst: {
    hp: 80,
    atk: 119,
    def: 90,
    satk: 54,
    sdef: 67,
    spe: 90,
  },
    hiddenAbility: ability.hyperconductor,
}

// 967 Cyclizar
pkmn.cyclizar = {
  type: ["dragon", "normal"],
  bst: {
    hp: 70,
    atk: 95,
    def: 65,
    satk: 85,
    sdef: 65,
    spe: 121,
  }
}

// 968 Orthworm
pkmn.orthworm = {
  type: ["steel"],
  bst: {
    hp: 70,
    atk: 85,
    def: 145,
    satk: 60,
    sdef: 55,
    spe: 65,
  },
    hiddenAbility: ability.simple,
}

// 969 Glimmet → Glimmora
pkmn.glimmet = {
  type: ["rock", "poison"],
  bst: {
    hp: 48,
    atk: 35,
    def: 42,
    satk: 105,
    sdef: 60,
    spe: 60,
  },
  evolve: function() { return { 1: { pkmn: pkmn.glimmora, level: evolutionLevel1 } } },
    hiddenAbility: ability.corrosion,
}

pkmn.glimmora = {
  type: ["rock", "poison"],
  bst: {
    hp: 83,
    atk: 55,
    def: 90,
    satk: 130,
    sdef: 81,
    spe: 86,
  },
    hiddenAbility: ability.corrosion,
}

pkmn.megaGlimmora = {
  type: ["rock", "poison"],
  bst: {
    hp: 83*1.2,
    atk: 90*1.2,
    def: 105*1.2,
    satk: 150*1.2,
    sdef: 96*1.2,
    spe: 101*1.2,
  },
    hiddenAbility: ability.corrosion,
}

// 971 Greavard → Houndstone
pkmn.greavard = {
  type: ["ghost"],
  bst: {
    hp: 50,
    atk: 61,
    def: 60,
    satk: 30,
    sdef: 55,
    spe: 34,
  },
  evolve: function() { return { 1: { pkmn: pkmn.houndstone, level: evolutionLevel1 } } }
}

pkmn.houndstone = {
  type: ["ghost"],
  bst: {
    hp: 72,
    atk: 101,
    def: 100,
    satk: 50,
    sdef: 97,
    spe: 68,
  }
}

// 973 Flamigo
pkmn.flamigo = {
  type: ["flying", "fighting"],
  bst: {
    hp: 82,
    atk: 115,
    def: 74,
    satk: 75,
    sdef: 64,
    spe: 90,
  },
    hiddenAbility: ability.costar,
}

// 974 Cetoddle → Cetitan
pkmn.cetoddle = {
  type: ["ice"],
  bst: {
    hp: 108,
    atk: 68,
    def: 45,
    satk: 30,
    sdef: 40,
    spe: 43,
  },
  evolve: function() { return { 1: { pkmn: pkmn.cetitan, level: evolutionLevel3 } } },
    hiddenAbility: ability.iceBody,
}

pkmn.cetitan = {
  type: ["ice"],
  bst: {
    hp: 170,
    atk: 113,
    def: 65,
    satk: 45,
    sdef: 55,
    spe: 73,
  },
    hiddenAbility: ability.iceBody,
}

// 976 Veluza
pkmn.veluza = {
  type: ["water", "psychic"],
  bst: {
    hp: 90,
    atk: 102,
    def: 73,
    satk: 78,
    sdef: 65,
    spe: 70,
  }
}

// 977 Dondozo
pkmn.dondozo = {
  type: ["water"],
  bst: {
    hp: 150,
    atk: 100,
    def: 115,
    satk: 65,
    sdef: 65,
    spe: 35,
  }
}

// 978 Tatsugiri
pkmn.tatsugiri = {
  rename: `tatsugiri Curly`,
  type: ["dragon", "water"],
  bst: {
    hp: 68,
    atk: 50,
    def: 60,
    satk: 120,
    sdef: 95,
    spe: 82,
  },
  // evolve: function() { return { 1: { pkmn: pkmn.megaTatsugiriCurly, item: item.tatsugirinite } } }
}

pkmn.tatsugiriDroopy = {
  type: ["dragon", "water"],
  bst: {
    hp: 68,
    atk: 50,
    def: 60,
    satk: 120,
    sdef: 95,
    spe: 82,
  },
  // evolve: function() { return { 1: { pkmn: pkmn.megaTatsugiriDroopy, item: item.tatsugirinite } } }
}

pkmn.tatsugiriStretchy = {
  type: ["dragon", "water"],
  bst: {
    hp: 68,
    atk: 50,
    def: 60,
    satk: 120,
    sdef: 95,
    spe: 82,
  },
  // evolve: function() { return { 1: { pkmn: pkmn.megaTatsugiriStretchy, item: item.tatsugirinite } } }
}

/*

pkmn.megaTatsugiriCurly = {
  type: ["dragon", "water"],
  bst: {
    hp: 68*1.2,
    atk: 65*1.2,
    def: 90*1.2,
    satk: 135*1.2,
    sdef: 125*1.2,
    spe: 92*1.2,
  }
}

pkmn.megaTatsugiriDroopy = {
  type: ["dragon", "water"],
  bst: {
    hp: 68*1.2,
    atk: 65*1.2,
    def: 90*1.2,
    satk: 135*1.2,
    sdef: 125*1.2,
    spe: 92*1.2,
  }
}

pkmn.megaTatsugiriStretchy = {
  type: ["dragon", "water"],
  bst: {
    hp: 68*1.2,
    atk: 65*1.2,
    def: 90*1.2,
    satk: 135*1.2,
    sdef: 125*1.2,
    spe: 92*1.2,
  }
}

*/

// 979 Annihilape
// 980 Clodsire
// 981 Farigiraf
// 982 Dudunsparce
// 983 Kingambit

// 984 Great Tusk
pkmn.greatTusk = {
    type: ["ground", "fighting"],
    bst: {
        hp: 115*1.25,
        atk: 131*1.25,
        def: 131*1.25,
        satk: 53*1.25,
        sdef: 53*1.25,
        spe: 87*1.25,
    },
    hiddenAbility: ability.protosynthesis,
}

// 985 Scream Tail
pkmn.screamTail = {
    type: ["fairy", "psychic"],
    bst: {
        hp: 115*1.25,
        atk: 65*1.25,
        def: 99*1.25,
        satk: 65*1.25,
        sdef: 115*1.25,
        spe: 111*1.25,
    },
    hiddenAbility: ability.protosynthesis,
    eggMove : move.boomburst
}

// 986 Brute Bonnet
pkmn.bruteBonnet = {
    type: ["grass", "dark"],
    bst: {
        hp: 111*1.25,
        atk: 127*1.25,
        def: 99*1.25,
        satk: 79*1.25,
        sdef: 99*1.25,
        spe: 55*1.25,
    },
    hiddenAbility: ability.protosynthesis,
    eggMove : move.cottonGuard
}

// 987 Flutter Mane
pkmn.flutterMane = {
    type: ["ghost", "fairy"],
    bst: {
        hp: 75*1.25,
        atk: 55*1.25,
        def: 55*1.25,
        satk: 135*1.25,
        sdef: 135*1.25,
        spe: 135*1.25,
    },
    hiddenAbility: ability.protosynthesis,
}

// 988 Slither Wing
pkmn.slitherWing = {
    type: ["bug", "fighting"],
    bst: {
        hp: 85*1.25,
        atk: 135*1.25,
        def: 79*1.25,
        satk: 85*1.25,
        sdef: 105*1.25,
        spe: 81*1.25,
    },
    hiddenAbility: ability.protosynthesis,
}

// 989 Sandy Shocks
pkmn.sandyShocks = {
    type: ["electric", "ground"],
    bst: {
        hp: 85*1.25,
        atk: 81*1.25,
        def: 97*1.25,
        satk: 121*1.25,
        sdef: 85*1.25,
        spe: 101*1.25,
    },
    hiddenAbility: ability.protosynthesis,
    eggMove : move.ionise
}

// 990 Iron Treads
pkmn.ironTreads = {
    type: ["ground","steel"],
    bst: {
        hp: 110*1.25,
        atk: 112*1.25,
        def: 120*1.25,
        satk: 72*1.25,
        sdef: 70*1.25,
        spe: 106*1.25,
    },
    hiddenAbility: ability.quarkDrive,
}

// 991 Iron Bundle
pkmn.ironBundle = {
    type: ["ice","water"],
    bst: {
        hp: 56*1.25,
        atk: 80*1.25,
        def: 114*1.25,
        satk: 124*1.25,
        sdef: 60*1.25,
        spe: 136*1.25,
    },
    hiddenAbility: ability.quarkDrive,
}

// 992 Iron Hands
pkmn.ironHands = {
    type: ["fighting","electric"],
    bst: {
        hp: 154*1.25,
        atk: 150*1.25,
        def: 108*1.25,
        satk: 50*1.25,
        sdef: 68*1.25,
        spe: 50*1.25,
    },
    hiddenAbility: ability.quarkDrive,
}

// 993 Iron Jugulis
pkmn.ironJugulis = {
    type: ["dark","flying"],
    bst: {
        hp: 94*1.25,
        atk: 80*1.25,
        def: 86*1.25,
        satk: 122*1.25,
        sdef: 80*1.25,
        spe: 108*1.25,
    },
    hiddenAbility: ability.quarkDrive,
}

// 994 Iron Moth
pkmn.ironMoth = {
    type: ["fire","poison"],
    bst: {
        hp: 80*1.25,
        atk: 70*1.25,
        def: 60*1.25,
        satk: 140*1.25,
        sdef: 110*1.25,
        spe: 110*1.25,
    },
    hiddenAbility: ability.quarkDrive,
    signature : move.fieryDance
}

// 995 Iron Thorns
pkmn.ironThorns = {
    type: ["rock","electric"],
    bst: {
        hp: 100*1.25,
        atk: 154*1.25,
        def: 110*1.25,
        satk: 70*1.25,
        sdef: 84*1.25,
        spe: 72*1.25,
    },
    hiddenAbility: ability.quarkDrive,
}

// 996 Frigibax → Arctibax → Baxcalibur
pkmn.frigibax = {
  type: ["dragon", "ice"],
  bst: {
    hp: 65,
    atk: 75,
    def: 45,
    satk: 35,
    sdef: 45,
    spe: 55,
  },
  evolve: function() { return { 1: { pkmn: pkmn.arctibax, level: evolutionLevel2 } } },
    hiddenAbility: ability.sharpness,
    eggMove : move.spacialRend
}

pkmn.arctibax = {
  type: ["dragon", "ice"],
  bst: {
    hp: 90,
    atk: 95,
    def: 66,
    satk: 45,
    sdef: 65,
    spe: 62,
  },
  evolve: function() { return { 1: { pkmn: pkmn.baxcalibur, level: evolutionLevel3 } } },
    hiddenAbility: ability.sharpness,
    eggMove : move.spacialRend
}

pkmn.baxcalibur = {
  type: ["dragon", "ice"],
  bst: {
    hp: 115,
    atk: 145,
    def: 92,
    satk: 75,
    sdef: 86,
    spe: 87,
  },
    hiddenAbility: ability.sharpness,
    evolve: function() { return { 1: { pkmn: pkmn.megaBaxcalibur, item: item.baxcaliburite } } },
    eggMove : move.spacialRend
}

pkmn.megaBaxcalibur = {
  type: ["dragon", "ice"],
  bst: {
    hp: 115*1.2,
    atk: 175*1.2,
    def: 117*1.2,
    satk: 105*1.2,
    sdef: 101*1.2,
    spe: 87*1.2,
  },
    hiddenAbility: ability.sharpness,
    eggMove : move.spacialRend,
    signature : move.tripleAxel,
    lore: `A lâmina dorsal de Baxcalibur ficou ainda mais gigantesca graças à Megaevolução. Este Pokémon dispara feixes de energia a partir do punho localizado em seu plexo solar.`,
}

// 999 Gimmighoul → Gholdengo
pkmn.gimmighoul = {
  type: ["ghost"],
  bst: {
    hp: 45,
    atk: 30,
    def: 70,
    satk: 75,
    sdef: 70,
    spe: 10,
  },
    evolve: function() { return { 1: { pkmn: pkmn.gholdengo, level: evolutionLevel3 } } },
    eggMove : move.mimic
}

pkmn.gimmighoulRoaming = {
  type: ["ghost"],
  bst: {
    hp: 45,
    atk: 30,
    def: 25,
    satk: 75,
    sdef: 45,
    spe: 80,
  },
    eggMove : move.payDay
}

pkmn.gholdengo = {
  type: ["steel", "ghost"],
  bst: {
    hp: 87,
    atk: 60,
    def: 95,
    satk: 133,
    sdef: 91,
    spe: 84,
  },
    hiddenAbility: ability.goodAsGold,
    eggMove : move.payDay
}

// 1001 Wo-Chien
pkmn.woChien = {
  type: ["dark", "grass"],
  bst: {
    hp: 100*1.3,
    atk: 100*1.3,
    def: 200*1.3,
    satk: 120*1.3,
    sdef: 120*1.3,
    spe: 50*1.3,
  },
    hiddenAbility: ability.treasureOfRuin,
    signature : move.ruination
}

// 1002 Chien-Pao
pkmn.chienPao = {
  type: ["dark", "ice"],
  bst: {
    hp: 80*1.3,
    atk: 175*1.3,
    def: 125*1.3,
    satk: 90*1.3,
    sdef: 70*1.3,
    spe: 110*1.3,
  },
    hiddenAbility: ability.treasureOfRuin,
    signature : move.ruination
}

// 1003 Ting-Lu
pkmn.tingLu = {
  type: ["dark", "ground"],
  bst: {
    hp: 155*1.3,
    atk: 140*1.3,
    def: 152*1.3,
    satk: 40*1.3,
    sdef: 72*1.3,
    spe: 85*1.3,
  },
    hiddenAbility: ability.treasureOfRuin,
    signature : move.ruination
}

// 1004 Chi-Yu
pkmn.chiYu = {
  type: ["dark", "fire"],
  bst: {
    hp: 55*1.3,
    atk: 80*1.3,
    def: 80*1.3,
    satk: 175*1.3,
    sdef: 125*1.3,
    spe: 135*1.3,
  },
    hiddenAbility: ability.treasureOfRuin,
    signature : move.ruination
}

// 1005 Roaring Moon
pkmn.roaringMoon = {
    type: ["dragon", "dark"],
    bst: {
        hp: 105*1.25,
        atk: 139*1.25,
        def: 80*1.25,
        satk: 55*1.25,
        sdef: 101*1.25,
        spe: 119*1.25,
    },
    hiddenAbility: ability.protosynthesis,
}

// 1006 Iron Valiant
pkmn.ironValiant = {
    type: ["fairy","fighting"],
    bst: {
        hp: 74*1.25,
        atk: 130*1.25,
        def: 90*1.25,
        satk: 120*1.25,
        sdef: 60*1.25,
        spe: 116*1.25,
    },
    hiddenAbility: ability.quarkDrive,
}

// 1010 Iron Leaves
pkmn.ironLeaves = {
    type: ["grass","psychic"],
    bst: {
        hp: 90*1.25,
        atk: 130*1.25,
        def: 138*1.25,
        satk: 70*1.25,
        sdef: 108*1.25,
        spe: 104*1.25,
    },
    hiddenAbility: ability.quarkDrive,
}

// 1022 Iron Boulder
pkmn.ironBoulder = {
    type: ["rock","psychic"],
    bst: {
        hp: 90*1.25,
        atk: 120*1.25,
        def: 80*1.25,
        satk: 68*1.25,
        sdef: 108*1.25,
        spe: 124*1.25,
    },
    hiddenAbility: ability.quarkDrive,
}

// 1023 Iron Crown
pkmn.ironCrown = {
    type: ["steel","psychic"],
    bst: {
        hp: 90*1.25,
        atk: 72*1.25,
        def: 100*1.25,
        satk: 122*1.25,
        sdef: 138*1.25,
        spe: 98*1.25,
    },
    hiddenAbility: ability.quarkDrive,
}

// 1007 Koraidon
pkmn.koraidon = {
  type: ["fighting", "dragon"],
  bst: {
    hp: 115*1.3,
    atk: 135*1.3,
    def: 85*1.3,
    satk: 40*1.3,
    sdef: 95*1.3,
    spe: 155*1.3,
  }
}

// 1008 Miraidon
pkmn.miraidon = {
  type: ["electric", "dragon"],
  bst: {
    hp: 115*1.3,
    atk: 85*1.3,
    def: 70*1.3,
    satk: 135*1.3,
    sdef: 75*1.3,
    spe: 155*1.3,
  }
}

// 1009 Walking Wake
pkmn.walkingWake = {
  type: ["water", "dragon"],
  bst: {
    hp: 95*1.35,
    atk: 180*1.35,
    def: 110*1.35,
    satk: 190*1.35,
    sdef: 80*1.35,
    spe: 100*1.35,
  },
    hiddenAbility: ability.protosynthesis,
}

// 1020 Gouging Fire
pkmn.gougingFire = {
    type: ["fire","dragon"],
    bst: {
        hp: 105*1.35,
        atk: 115*1.35,
        def: 121*1.35,
        satk: 115*1.35,
        sdef: 93*1.35,
        spe: 91*1.35,
    },
    hiddenAbility: ability.protosynthesis,
}

// 1021 Raging Bolt
pkmn.ragingBolt = {
    type: ["electric","dragon"],
    bst: {
        hp: 155*1.35,
        atk: 73*1.35,
        def: 91*1.35,
        satk: 157*1.35,
        sdef: 89*1.35,
        spe: 75*1.35,
    },
    hiddenAbility: ability.protosynthesis,
}



// 1011 Dipplin

// 1012 Poltchageist → Sinistcha
pkmn.poltchageist = {
    type: ["grass","ghost"],
    bst: {
        hp: 40,
        atk: 45,
        def: 45,
        satk: 74,
        sdef: 54,
        spe: 50,
    },
    evolve: function() { return { 1: { pkmn: pkmn.sinistcha, item: item.leafStone } } },
}

pkmn.sinistcha = {
    type: ["grass","ghost"],
    bst: {
        hp: 71,
        atk: 60,
        def: 106,
        satk: 121,
        sdef: 80,
        spe: 70,
    }
}

// 1014 Okidogi
pkmn.okidogi = {
    type: ["poison","fighting"],
    bst: {
        hp: 88*1.3,
        atk: 128*1.3,
        def: 115*1.3,
        satk: 58*1.3,
        sdef: 86*1.3,
        spe: 80*1.3,
    }
}

// 1015 Munkidori
pkmn.munkidori = {
    type: ["poison","psychic"],
    bst: {
        hp: 88*1.3,
        atk: 75*1.3,
        def: 66*1.3,
        satk: 130*1.3,
        sdef: 90*1.3,
        spe: 106*1.3,
    }
}

// 1016 Fezandipiti
pkmn.fezandipiti = {
    type: ["poison","fairy"],
    bst: {
        hp: 88*1.3,
        atk: 91*1.3,
        def: 82*1.3,
        satk: 70*1.3,
        sdef: 125*1.3,
        spe: 99*1.3,
    }
}

// 1017 Ogerpon
pkmn.ogerponTeal = {
    type: ["grass"],
    bst: {
        hp: 80*1.3,
        atk: 120*1.3,
        def: 84*1.3,
        satk: 60*1.3,
        sdef: 96*1.3,
        spe: 110*1.3,
    }
}

pkmn.ogerponWellspring = {
    type: ["grass", "water"],
    bst: {
        hp: 80*1.3,
        atk: 120*1.3,
        def: 84*1.3,
        satk: 60*1.3,
        sdef: 96*1.3,
        spe: 110*1.3,
    }
}

pkmn.ogerponHearthflame = {
    type: ["grass", "fire"],
    bst: {
        hp: 80*1.3,
        atk: 120*1.3,
        def: 84*1.3,
        satk: 60*1.3,
        sdef: 96*1.3,
        spe: 110*1.3,
    }
}

pkmn.ogerponCornerstone = {
    type: ["grass", "rock"],
    bst: {
        hp: 80*1.3,
        atk: 120*1.3,
        def: 84*1.3,
        satk: 60*1.3,
        sdef: 96*1.3,
        spe: 110*1.3,
    }
}

// 1018 Archaludon
// 1019 Hydrapple





// 1024 Terapagos
pkmn.terapagos = {
    type: ["normal"],
    bst: {
        hp: 90*1.3,
        atk: 65*1.3,
        def: 85*1.3,
        satk: 65*1.3,
        sdef: 85*1.3,
        spe: 60*1.3,
    }
}

pkmn.terapagosTerastal = {
    type: ["normal"],
    bst: {
        hp: 95*1.3,
        atk: 95*1.3,
        def: 110*1.3,
        satk: 105*1.3,
        sdef: 110*1.3,
        spe: 85*1.3,
    }
}

pkmn.terapagosStellar = {
    type: ["normal"],
    bst: {
        hp: 200*1.3,
        atk: 105*1.3,
        def: 110*1.3,
        satk: 130*1.3,
        sdef: 110*1.3,
        spe: 85*1.3,
    }
}

// 1025 Pecharunt
pkmn.pecharunt = {
  type: ["poison", "ghost"],
  bst: {
    hp: 88*1.5,
    atk: 88*1.5,
    def: 160*1.5,
    satk: 88*1.5,
    sdef: 88*1.5,
    spe: 88*1.5,
  }
}

/*
const gmaxFactor = 1.2

pkmn.singleStrikeUrshifuGmax = {
    type : ["fighting","dark"],
    bst: {
    hp: 100*gmaxFactor,
    atk : 130*gmaxFactor,
    def: 100*gmaxFactor,
    satk : 63*gmaxFactor,
    sdef: 60*gmaxFactor,
    spe: 97*gmaxFactor,
    }
}*/


pkmn.missingno = {
    type: ["bird","normal"],
    bst: {
        hp: 33,
        atk: 137,
        def: 0,
        satk: 6,
        sdef: 29,
        spe: 0,
    },
    evolve: function() { return { 1: { pkmn: pkmn.kangaskhan, level: 128 } } },
    hidden: true,
    hiddenAbility: ability.static,
}

pkmn.f00 = {
    rename: `F-00`,
    type: ["steel","normal"],
    bst: {
        hp: 45,
        atk: 63,
        def: 37,
        satk: 65,
        sdef: 55,
        spe: 95,
    },
    hiddenAbility: ability.voltAbsorb,
    hidden: true
}

pkmn.ghost = {
    type: ["ghost"],
    bst: {
        hp: 45,
        atk: 50,
        def: 45,
        satk: 115,
        sdef: 55,
        spe: 95,
    },
    hiddenAbility: ability.intangible,
    hidden: true
}

pkmn.kabutopsB = {
    rename: `Kabutops-B`,
    type: ["rock","ghost"],
    bst: {
        hp: 60,
        atk: 115,
        def: 105,
        satk: 65,
        sdef: 70,
        spe: 80,
    },
    hiddenAbility: ability.powerOfAlchemy,
    hidden: true
}

pkmn.aerodactylB = {
    rename: `Aerodactyl-B`,
    type: ["rock","ghost"],
    bst: {
        hp: 80,
        atk: 105,
        def: 65,
        satk: 60,
        sdef: 75,
        spe: 130,
    },
    hiddenAbility: ability.powerOfAlchemy,
    hidden: true
}

pkmn.humanoid = {
    type: ["dark"],
    bst: {
        hp: 80,
        atk: 100,
        def: 70,
        satk: 50,
        sdef: 60,
        spe: 45,
    },
    hiddenAbility: ability.gooey,
    hidden: true
}

pkmn.crystalOnix = {
    type: ["rock","ice"],
    bst: {
        hp: 35,
        atk: 45,
        def: 160,
        satk: 30,
        sdef: 45,
        spe: 70,
    },
    hiddenAbility: ability.brittleArmor,
    hidden: true
}



for (const i in pkmn){
     pkmn[i].id = i
     pkmn[i].exp = 0
     pkmn[i].caught = 0
     pkmn[i].level = 1
     pkmn[i].movepool = []
     pkmn[i].newMoves = []

    pkmn[i].ivs = {
        hp:0,
        atk:0,
        def:0,
        satk:0,
        sdef:0,
        spe:0,
    }


    pkmn[i].moves = {
        slot1: null,
        slot2: null,
        slot3: null,
        slot4: null,
    }

}

for (const name in pkmn) {
  const bst = pkmn[name].bst;

  for (const stat in bst) {
    bst[stat] = statToRating(bst[stat]);
  }
}

function statToRating(baseStat) {
  const r = 1 + (baseStat - 20) * (5 / 180);
  return Math.min(6, Math.max(1, Math.round(r)));
}



const ribbon = {}

ribbon.souvenir ={
    name: `Souvenir Ribbon`,
    description: `Awarded in special occasions`
}

ribbon.tower1 ={
    name: `Endurance Ribbon`,
    description: `Awarded for reaching floor 30 in the Battle Tower`
}

ribbon.smile ={
    name: `Smile Ribbon`,
    description: `Awarded very rarely for spending a lot of time together`
}


