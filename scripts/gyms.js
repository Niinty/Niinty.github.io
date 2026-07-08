// PokeChill: Gym leader definitions, renderers and gym menu logic.
/**
 * =============================================================================
 * GINÁSIOS — Líder Aleatório (Boss Roulette)
 * =============================================================================
 */

const GYM_BASE_HP_MULTIPLIER = 4

// Configurações de Dificuldade Customizável (Ajuste aqui como quiser)
const GYM_CUSTOM_LEVEL = 150       // Nível fixo ou base para os líderes sorteados
const GYM_CUSTOM_HP_MULT = 20      // Multiplicador de HP customizado para o desafio

// Regiões disponíveis no menu de Ginásios
const GYM_REGIONS = [
    { id: "kanto",  name: "Kanto",  color: "#E8534A", icon: "🔴" },
    { id: "johto",  name: "Johto",  color: "#C0A060", icon: "🟡" },
    { id: "hoenn",  name: "Hoenn",  color: "#4A90D9", icon: "🔵" },
    { id: "sinnoh", name: "Sinnoh", color: "#7B68EE", icon: "🟣" },
    { id: "unova",  name: "Unova",  color: "#888888", icon: "⚫" },
    { id: "kalos",  name: "Kalos",  color: "#5BA85A", icon: "🟢" },
    { id: "alola",  name: "Alola",  color: "#F4A460", icon: "🟠" },
    { id: "galar",  name: "Galar",  color: "#9370DB", icon: "🟣" },
    { id: "hisui",  name: "Hisui",  color: "#87CEEB", icon: "🩵" },
    { id: "paldea", name: "Paldea", color: "#E07B5A", icon: "🟠" },
];

// Estado interno — Armazena o líder atualmente sorteado
var _currentRandomGymLeader = null;

const GYM_LEVEL_CAP = 300
const GYM_SCALE_PER_DEFEAT = 1.02 
const GYM_BADGE_DROP_CHANCE = 0.3 

const GYMS_LEADERS = [
    {
        areaId: "vsGymLeaderBrock",
        region: "kanto",
        name: "Gym Leader Brock",
        city: "Pewter City",
        sprite: "brock",
        background: "gym",
        description: "Especialista em Pokémon do tipo Pedra.",
        team: {
            slot1 : pkmn.onix, slot1Moves : [move.rockWrecker.id, move.stoneEdge.id, move.powerGem.id, move.rockSlide.id],
            slot2 : pkmn.golem, slot2Moves : [move.meteorBeam.id, move.powerGem.id, move.rockSlide.id, move.smackDown.id],
            slot3 : pkmn.aerodactyl, slot3Moves : [move.rockPolish.id, move.smackDown.id, move.fly.id, move.ancientPower.id],
            slot4 : pkmn.rhydon, slot4Moves : [move.stoneEdge.id, move.rockTomb.id, move.thunder.id, move.earthquake.id],
            slot5 : pkmn.kabutops, slot5Moves : [move.rockPolish.id, move.rockSlide.id, move.ancientPower.id, move.rollout.id],
            slot6 : pkmn.omastar, slot6Moves : [move.smackDown.id, move.powerGem.id, move.surf.id, move.stoneEdge.id],
        }
    },
    {
        areaId: "vsGymLeaderMisty",
        region: "kanto",
        name: "Gym Leader Misty",
        city: "Cerulean City",
        sprite: "misty",
        background: "gym",
        description: "Especialista em Pokémon do tipo Água.",
        team: {
            slot1 : pkmn.lapras, slot1Moves : [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot2 : pkmn.cloyster, slot2Moves : [move.glaciate.id, move.mountainGale.id, move.snipeShot.id, move.tripleAxel.id],
            slot3 : pkmn.vaporeon, slot3Moves : [move.surf.id, move.fishiousRend.id, move.sparklingAria.id, move.hydroCannon.id],
            slot4 : pkmn.gyarados, slot4Moves : [move.clamp.id, move.surf.id, move.scald.id, move.hydroCannon.id],
            slot5 : pkmn.slowbro, slot5Moves : [move.jetPunch.id, move.snipeShot.id, move.fishiousRend.id, move.tripleDive.id],
            slot6 : pkmn.starmie, slot6Moves : [move.waterShuriken.id, move.aquaStep.id, move.surf.id, move.sparklingAria.id],
        }
    },
    {
        areaId: "vsGymLeaderLtsurge",
        region: "kanto",
        name: "Gym Leader Lt. Surge",
        city: "Vermilion City",
        sprite: "ltsurge",
        background: "gym",
        description: "Especialista em Pokémon do tipo Elétrico.",
        team: {
            slot1 : pkmn.raichu, slot1Moves : [move.thunder.id, move.boltStrike.id, move.thunderPunch.id, move.wildCharge.id],
            slot2 : pkmn.jolteon, slot2Moves : [move.zapCannon.id, move.wildCharge.id, move.electroBall.id, move.voltTackle.id],
            slot3 : pkmn.electabuzz, slot3Moves : [move.auraWheel.id, move.thunder.id, move.sparklingAria.id, move.discharge.id],
            slot4 : pkmn.electrode, slot4Moves : [move.boltStrike.id, move.zingZap.id, move.voltTackle.id, move.thunderCage.id],
            slot5 : pkmn.magneton, slot5Moves : [move.ionise.id, move.flashCannon.id, move.electroBall.id, move.thunder.id],
            slot6 : pkmn.zapdos, slot6Moves : [move.zapCannon.id, move.zingZap.id, move.auraWheel.id, move.voltTackle.id],
        }
    },
    {
        areaId: "vsGymLeaderErika",
        region: "kanto",
        name: "Gym Leader Erika",
        city: "Celadon City",
        sprite: "erika",
        background: "gym",
        description: "Especialista em Pokémon do tipo Grama.",
        team: {
            slot1 : pkmn.vileplume, slot1Moves : [move.trailblaze.id, move.sludge.id, move.razorLeaf.id, move.chloroblast.id],
            slot2 : pkmn.venusaur, slot2Moves : [move.seedFlare.id, move.toxic.id, move.cottonGuard.id, move.trailblaze.id],
            slot3 : pkmn.tangela, slot3Moves : [move.seedBomb.id, move.leafage.id, move.razorLeaf.id, move.tropKick.id],
            slot4 : pkmn.parasect, slot4Moves : [move.drumBeating.id, move.seedFlare.id, move.cottonGuard.id, move.chloroblast.id],
            slot5 : pkmn.victreebel, slot5Moves : [move.appleAcid.id, move.noxiousTorque.id, move.seedBomb.id, move.toxic.id],
            slot6 : pkmn.exeggutor, slot6Moves : [move.barrage.id, move.tropKick.id, move.magicalLeaf.id, move.psybeam.id],
        },
    },
    {
        areaId: "vsGymLeaderKoga",
        region: "kanto",
        name: "Gym Leader Koga",
        city: "Fuchsia City",
        sprite: "koga",
        background: "gym",
        description: "Especialista em Pokémon do tipo Poison.",
        team: {
            slot1 : pkmn.gengar, slot1Moves : [move.moongeistBeam.id, move.toxic.id, move.phantomForce.id, move.venoshock.id],
            slot2 : pkmn.muk, slot2Moves : [move.sludge.id, move.hyperBeam.id, move.toxic.id, move.crossPoison.id],
            slot3 : pkmn.nidoking, slot3Moves : [move.sludge.id, move.acidArmor.id, move.earthquake.id, move.sandsearStorm.id],
            slot4 : pkmn.venusaur, slot4Moves : [move.seedFlare.id, move.toxic.id, move.cottonGuard.id, move.trailblaze.id],
            slot5 : pkmn.nidoqueen, slot5Moves : [move.highHorsepower.id, move.crossPoison.id, move.acidArmor.id, move.sludgeBomb.id],
            slot6 : pkmn.tentacruel, slot6Moves : [move.surf.id, move.sludge.id, move.sludgeBomb.id, move.scald.id],
        },
    },
    {
        areaId: "vsGymLeaderJanine",
        region: "kanto",
        name: "Gym Leader Janine",
        city: "Fuchsia City",
        sprite: "janine",
        background: "gym",
        description: "Especialista em Pokémon do tipo Poison.",
        team: {
            slot1 : pkmn.weezing, slot1Moves : [move.sludgeBomb.id, move.toxic.id, move.crossPoison.id, move.venoshock.id],
            slot2 : pkmn.victreebel, slot2Moves : [move.sludge.id, move.drumBeating.id, move.poisonJab.id, move.trailblaze.id],
            slot3 : pkmn.nidoking, slot3Moves : [move.muddyWater.id, move.acidArmor.id, move.earthquake.id, move.sandsearStorm.id],
            slot4 : pkmn.venusaur, slot4Moves : [move.seedFlare.id, move.toxic.id, move.barbBarrage.id, move.trailblaze.id],
            slot5 : pkmn.golbat, slot5Moves : [move.acrobatics.id, move.crossPoison.id, move.peck.id, move.sludgeBomb.id],
            slot6 : pkmn.tentacruel, slot6Moves : [move.sludge.id, move.surf.id, move.sludgeBomb.id, move.scald.id],
        },
    },
    {
        areaId: "vsGymLeaderSabrina",
        region: "kanto",
        name: "Gym Leader Sabrina",
        city: "Saffron City",
        sprite: "sabrina",
        background: "gym",
        description: "Especialista em Pokémon do tipo Psíquico.",
        team: {
            slot1 : pkmn.alakazam, slot1Moves : [move.amnesia.id, move.psychic.id, move.twinBeam.id, move.kinesis.id],
            slot2 : pkmn.starmie, slot2Moves : [move.amnesia.id, move.lusterPurge.id, move.surf.id, move.prismaticLaser.id],
            slot3 : pkmn.mrmime, slot3Moves : [move.kinesis.id, move.confusion.id, move.futureSight.id, move.psybeam.id],
            slot4 : pkmn.hypno, slot4Moves : [move.amnesia.id, move.mistBall.id, move.psybeam.id, move.prismaticLaser.id],
            slot5 : pkmn.exeggutor, slot5Moves : [move.barrage.id, move.futureSight.id, move.prismaticLaser.id, move.psybeam.id],
            slot6 : pkmn.slowbro, slot6Moves : [move.kinesis.id, move.mistBall.id, move.mysticalPower.id, move.lunarDance.id],
        },
    },
    {
        areaId: "vsGymLeaderBlaine",
        region: "kanto",
        name: "Gym Leader Blaine",
        city: "Cinnabar City",
        sprite: "blaine",
        background: "gym",
        description: "Especialista em Pokémon do tipo Fogo.",
        team: {
            slot1 : pkmn.charizard, slot1Moves : [move.flamethrower.id, move.firePunch.id, move.fireBlast.id, move.flareBlitz.id],
            slot2 : pkmn.arcanine, slot2Moves : [move.fireFang.id, move.fireSpin.id, move.flamethrower.id, move.flareBlitz.id],
            slot3 : pkmn.rapidash, slot3Moves : [move.overheat.id, move.heatWave.id, move.fireFang.id, move.flameCharge.id],
            slot4 : pkmn.ninetales, slot4Moves : [move.flamethrower.id, move.fireFang.id, move.fireBlast.id, move.fireSpin.id],
            slot5 : pkmn.moltres, slot5Moves : [move.fireBlast.id, move.flameBurst.id, move.vCreate.id, move.flamethrower.id],
            slot6 : pkmn.magmar, slot6Moves : [move.firePunch.id, move.flamethrower.id, move.fireBlast.id, move.blazeKick.id],
        },
    },
    {
        areaId: "vsGymLeaderGiovanni",
        region: "kanto",
        name: "Gym Leader Giovanni",
        city: "Viridian City",
        sprite: "giovanni",
        background: "gym",
        level: 100,
        description: "Especialista em Pokémon do tipo Ground.",
        team: {
            slot1 : pkmn.nidoking, slot1Moves : [move.crossPoison.id,move.poisonClaw.id, move.sludgeWave.id, move.toxicThread.id],
            slot2 : pkmn.golem, slot2Moves : [move.highHorsepower.id, move.earthquake.id, move.magnitude.id, move.sandstorm.id],
            slot3 : pkmn.nidoqueen, slot3Moves : [move.toxicThread.id, move.venoshock.id, move.crossPoison.id, move.poisonClaw.id],
            slot4 : pkmn.dugtrio, slot4Moves : [move.dig.id, move.highHorsepower.id, move.bulldoze.id, move.earthquake.id],
            slot5 : pkmn.rhydon, slot5Moves : [move.rototiller.id, move.scorchingSands.id, move.earthPower.id, move.thunder.id],
            slot6 : pkmn.giovanniMewtwo, slot6Moves : [move.calmMind.id, move.psychic.id, move.shadowBall.id, move.zenHeadbut.id],
        },
    },

    {
        areaId: "vsGymLeaderCissy",
        region: "johto",
        name: "Gym Leader Cissy",
        city: "Mikan Island",
        sprite: "cissy",
        background: "gym",
        level: 100,
        description: "Especialista em Pokémon do tipo Agua.",
        team: {
            slot1 : pkmn.lapras, slot1Moves : [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot2 : pkmn.cloyster, slot2Moves : [move.glaciate.id, move.mountainGale.id, move.snipeShot.id, move.tripleAxel.id],
            slot3 : pkmn.blastoise, slot3Moves : [move.surf.id, move.fishiousRend.id, move.sparklingAria.id, move.hydroCannon.id],
            slot4 : pkmn.gyarados, slot4Moves : [move.clamp.id, move.surf.id, move.scald.id, move.hydroCannon.id],
            slot5 : pkmn.seadra, slot5Moves : [move.jetPunch.id, move.snipeShot.id, move.fishiousRend.id, move.tripleDive.id],
            slot6 : pkmn.starmie, slot6Moves : [move.waterShuriken.id, move.aquaStep.id, move.surf.id, move.sparklingAria.id],
        },
    },

    //Johto
    /*{
        areaId: "vsGymLeaderFalkner",
        region: "johto",
        name: "Gym Leader Falkner",
        city: "Violet City",
        sprite: "falkner",
        background: "gym",
        level: 100,
        description: "Especialista em Pokémon do tipo Voador.",
        team: {
            slot1: pkmn.geodude, slot1Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot2: pkmn.geodude, slot2Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot3: pkmn.geodude, slot3Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot4: pkmn.geodude, slot4Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot5: pkmn.geodude, slot5Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot6: pkmn.geodude, slot6Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
        },
    },
    {
        areaId: "vsGymLeaderBugsy",
        region: "johto",
        name: "Gym Leader Bugsy",
        city: "Azalea City",
        sprite: "bugsy",
        background: "gym",
        level: 100,
        description: "Especialista em Pokémon do tipo Inseto.",
        team: {
            slot1: pkmn.geodude, slot1Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot2: pkmn.geodude, slot2Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot3: pkmn.geodude, slot3Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot4: pkmn.geodude, slot4Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot5: pkmn.geodude, slot5Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot6: pkmn.geodude, slot6Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
        },
    },
    {
        areaId: "vsGymLeaderWhitney",
        region: "johto",
        name: "Gym Leader Whitney",
        city: "Goldenrod City",
        sprite: "whitney",
        background: "gym",
        level: 100,
        description: "Especialista em Pokémon do tipo Normal.",
        team: {
            slot1: pkmn.geodude, slot1Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot2: pkmn.geodude, slot2Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot3: pkmn.geodude, slot3Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot4: pkmn.geodude, slot4Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot5: pkmn.geodude, slot5Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot6: pkmn.geodude, slot6Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
        },
    },
    {
        areaId: "vsGymLeaderMorty",
        region: "johto",
        name: "Gym Leader Morty",
        city: "Ecruteak City",
        sprite: "morty",
        background: "gym",
        level: 100,
        description: "Especialista em Pokémon do tipo Fantasma.",
        team: {
            slot1: pkmn.geodude, slot1Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot2: pkmn.geodude, slot2Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot3: pkmn.geodude, slot3Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot4: pkmn.geodude, slot4Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot5: pkmn.geodude, slot5Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot6: pkmn.geodude, slot6Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
        },
    },
    {
        areaId: "vsGymLeaderChuck",
        region: "johto",
        name: "Gym Leader Chuck",
        city: "Cianwood City",
        sprite: "chuck",
        background: "gym",
        level: 100,
        description: "Especialista em Pokémon do tipo Lutador.",
        team: {
            slot1: pkmn.geodude, slot1Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot2: pkmn.geodude, slot2Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot3: pkmn.geodude, slot3Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot4: pkmn.geodude, slot4Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot5: pkmn.geodude, slot5Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot6: pkmn.geodude, slot6Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
        },
    },
    {
        areaId: "vsGymLeaderJasmine",
        region: "johto",
        name: "Gym Leader Jasmine",
        city: "Olivine City",
        sprite: "jasmine",
        background: "gym",
        level: 100,
        description: "Especialista em Pokémon do tipo Aço.",
        team: {
            slot1: pkmn.geodude, slot1Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot2: pkmn.geodude, slot2Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot3: pkmn.geodude, slot3Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot4: pkmn.geodude, slot4Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot5: pkmn.geodude, slot5Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot6: pkmn.geodude, slot6Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
        },
    },
    {
        areaId: "vsGymLeaderPryce",
        region: "johto",
        name: "Gym Leader Pryce",
        city: "Mahogany City",
        sprite: "pryce",
        background: "gym",
        level: 100,
        description: "Especialista em Pokémon do tipo Gelo.",
        team: {
            slot1: pkmn.geodude, slot1Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot2: pkmn.geodude, slot2Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot3: pkmn.geodude, slot3Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot4: pkmn.geodude, slot4Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot5: pkmn.geodude, slot5Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot6: pkmn.geodude, slot6Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
        },
    },
    {
        areaId: "vsGymLeaderClair",
        region: "johto",
        name: "Gym Leader Clair",
        city: "Blackthorn City",
        sprite: "clair",
        background: "gym",
        level: 100,
        description: "Especialista em Pokémon do tipo Dragão.",
        team: {
            slot1: pkmn.geodude, slot1Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot2: pkmn.geodude, slot2Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot3: pkmn.geodude, slot3Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot4: pkmn.geodude, slot4Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot5: pkmn.geodude, slot5Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
            slot6: pkmn.geodude, slot6Moves: [move.iceBall.id, move.surf.id, move.glaciate.id, move.scald.id],
        },
    },
    
    
    
 */
]

function getGymMaxDifficulty() {
    return typeof tier4difficulty !== "undefined" ? tier4difficulty : 600
}

function getGymDefeatCount(area) {
    return area.gymDefeatCount || 0
}

// Retorna a dificuldade customizada definida no topo do script
function getGymEffectiveLevel(area) {
    return GYM_CUSTOM_LEVEL;
}

function getGymEffectiveHpMultiplier(area) {
    return GYM_CUSTOM_HP_MULT;
}

// Sorteia um líder de qualquer região da lista global GYMS_LEADERS
function rollRandomGymLeader() {
    const randomIndex = Math.floor(Math.random() * GYMS_LEADERS.length);
    _currentRandomGymLeader = GYMS_LEADERS[randomIndex];
}

function onGymLeaderDefeated(area) {
    // 1. Drop Garantido do Ticket
    const ticketId = "autoRefightTicket";
    if (item[ticketId] !== undefined) {
        item[ticketId].got++;
        item[ticketId].newItem++;
    }

    // 2. Identifica o Pokémon da recompensa e CARIMBA ele
    if (area.team) {
        const validSlots = [];
        for (let i = 1; i <= 6; i++) {
            if (area.team[`slot${i}`]) {
                validSlots.push(area.team[`slot${i}`]);
            }
        }

        if (validSlots.length > 0) {
            const chosenPkmn = validSlots[Math.floor(Math.random() * validSlots.length)];
            
            chosenPkmn.newPokemon = true; // O sinalizador original do seu jogo
            chosenPkmn.isGymReward = true; // O NOSSO carimbo para os 10%
        }
    }

    area.gymDefeatCount = getGymDefeatCount(area) + 1;
    area.defeated = true;
    _currentRandomGymLeader = null;
}

/** Força o registro inicial de todas as áreas */
function registerGymLeaders() {
    for (const gym of GYMS_LEADERS) {
        let area = areas[gym.areaId]
        if (!area) {
            areas[gym.areaId] = buildGymAreaFromConfig(gym)
            area = areas[gym.areaId]
            area.id = gym.areaId
        }
        area.isGym = true
        area.trainer = true
        area.type = "vs"
        area.team = gym.team
        area.name = gym.name
        area.sprite = gym.sprite
        area.background = gym.background
        area.level = GYM_CUSTOM_LEVEL
    }
}

function buildGymAreaFromConfig(gym) {
    return {
        name: gym.name || "Gym Leader",
        background: gym.background || "gym",
        sprite: gym.sprite || "brock",
        trainer: true,
        type: "vs",
        level: GYM_CUSTOM_LEVEL,
        gymDefeatCount: 0,
        team: gym.team
    }
}

/** Renderiza a tela de Boss Roulette (Líder de Ginásio Aleatório) */
function updateGyms() {
    const listing = document.getElementById("gyms-listing")
    if (!listing) return

    listing.innerHTML = ""
    document.getElementById("gyms-menu-header").style.backgroundImage = "url(img/bg/gym.png)"

    // Se não houver um líder sorteado no momento, sorteia um agora
    if (!_currentRandomGymLeader) {
        rollRandomGymLeader();
    }

    const gym = _currentRandomGymLeader;
    const area = areas[gym.areaId];

    // Cria container para centralizar a interface da Roleta
    const rouletteContainer = document.createElement("div");
    rouletteContainer.style.cssText = "display:flex; flex-direction:column; gap:12px; padding:12px; align-items:center;"

    // Texto informativo superior
    const infoText = document.createElement("div");
    infoText.style.cssText = "font-size:0.95rem; text-align:center; color:var(--light1,#e8ddd0); opacity:0.9; font-weight:bold; margin-bottom: 4px;";
    const regionConfig = GYM_REGIONS.find(r => r.id === gym.region);
    infoText.innerHTML = `🎲 A Challenger Appears! From ${regionConfig ? regionConfig.icon + " " + regionConfig.name : gym.region.toUpperCase()}:`;
    rouletteContainer.appendChild(infoText);

    // Renderiza o card do líder sorteado
    const divAreas = document.createElement("div")
    divAreas.className = "vs-card"
    divAreas.dataset.trainer = gym.areaId
    divAreas.style.width = "100%"

    divAreas.addEventListener("click", () => {
        saved.currentAreaBuffer = gym.areaId
        document.getElementById("preview-team-exit").style.display = "flex"
        document.getElementById("team-menu").style.zIndex = "50"
        document.getElementById("team-menu").style.display = "flex"
        document.getElementById("menu-button-parent").style.display = "none"
        updatePreviewTeam()
        afkSeconds = 0
        document.getElementById("gyms-menu").style.display = "none"
    })

    const regionColor = regionConfig ? regionConfig.color : "#888888";

    divAreas.innerHTML = `
        <span class="hitbox"></span>
        <img class="vs-card-flair" src="img/icons/pokeball.svg">
        <div class="vs-card-bg" style="border-left: 5px solid ${regionColor}"></div>
        <span class="explore-ticket-left" style="z-index: 2;">
            <span style="font-size:1.3rem">${area.name}</span>
            <span style="font-size:0.9rem; opacity:0.85">${gym.city || ""}</span>
            <span>
                <strong style="font-size:1rem; background:#8B6914">Level ${GYM_CUSTOM_LEVEL}</strong>
                <strong style="font-size:0.85rem; background:#725AA4; margin-left:0.2rem">HP x${GYM_CUSTOM_HP_MULT}</strong>
            </span>
        </span>
        <div></div>
        <div class="vs-card-left">
            <img class="sprite-trim" src="img/trainers/${area.sprite}.png">
        </div>
    `
    rouletteContainer.appendChild(divAreas);

    // Botão para sortear outro oponente (Reroll)
    const rerollBtn = document.createElement("button");
    rerollBtn.className = "generic-button"; // use as classes de botões do seu CSS padrão se preferir
    rerollBtn.style.cssText = "padding: 8px 16px; background: #c63333; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: bold; font-size: 0.9rem; transition: background 0.2s;"
    rerollBtn.innerHTML = "🔄 Roll Another Leader";
    rerollBtn.onmouseover = function() { this.style.background = "#e04444"; }
    rerollBtn.onmouseout = function() { this.style.background = "#c63333"; }
    rerollBtn.onclick = function() {
        rollRandomGymLeader();
        updateGyms();
    }
    rouletteContainer.appendChild(rerollBtn);

    listing.appendChild(rouletteContainer);
}

// Inicializa
registerGymLeaders()
