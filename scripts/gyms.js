// PokeChill: Gym leader definitions, renderers and gym menu logic.
/**
 * =============================================================================
 * GINÁSIOS — Líder Aleatório (Boss Roulette)
 * =============================================================================
 */

const GYM_BASE_HP_MULTIPLIER = 4

// Configurações de Dificuldade Customizável (Ajuste aqui como quiser)
const GYM_CUSTOM_LEVEL = 100       // Nível fixo ou base para os líderes sorteados
const GYM_CUSTOM_HP_MULT = 15      // Multiplicador de HP customizado para o desafio

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
        order: 1,
        unlockAreaId: null,
        name: "Gym Leader Brock",
        badge: "Boulder Badge",
        badgeItemId: "gymBadgeBrock",
        city: "Pewter City",
        sprite: "brock",
        background: "gym",
        level: 20,
        description: "Especialista em Pokémon do tipo Pedra.",
        team: {
            slot1: pkmn.onix, slot1Moves: [move.rockThrow.id],
            slot2: pkmn.geodude, slot2Moves: [move.tackle.id]
        }
    },
    {
        areaId: "vsGymLeaderMisty",
        region: "kanto",
        order: 2,
        unlockAreaId: "vsGymLeaderBrock",
        name: "Gym Leader Misty",
        badge: "Cascade Badge",
        badgeItemId: "gymBadgeMisty",
        city: "Cerulean City",
        sprite: "misty",
        background: "gym",
        level: 40,
        description: "Especialista em Pokémon do tipo Água.",
        team: {
            slot1: pkmn.staryu, slot1Moves: [move.waterGun.id],
            slot2: pkmn.starmie, slot2Moves: [move.bubbleBeam.id]
        }
    },
    {
        areaId: "vsGymLeaderLtsurge",
        region: "kanto",
        order: 3,
        unlockAreaId: "vsGymLeaderMisty",
        name: "Gym Leader Lt. Surge",
        badge: "Thunder Badge",
        badgeItemId: "gymBadgeLtsurge",
        city: "Vermilion City",
        sprite: "ltsurge",
        background: "gym",
        level: 60,
        description: "Especialista em Pokémon do tipo Elétrico.",
        team: {
            slot1: pkmn.raichu, slot1Moves: [move.thunderbolt.id]
        }
    },
    {
        areaId: "vsGymLeaderErika",
        region: "kanto",
        order: 4,
        unlockAreaId: "vsGymLeaderLtsurge",
        name: "Gym Leader Erika",
        badge: "Rainbow Badge",
        badgeItemId: "gymBadgeErika",
        city: "Celadon City",
        sprite: "erika",
        background: "gym",
        level: 80,
        description: "Especialista em Pokémon do tipo Grama.",
        team: {
            slot1 : pkmn.vileplume, slot1Moves : [move.trailblaze.id, move.sludge.id, move.razorLeaf.id, move.acid.id],
            slot2 : pkmn.clefable, slot2Moves : [move.lunarDance.id, move.alluringVoice.id, move.fairyWind.id, move.disarmingVoice.id],
            slot3 : pkmn.tangela, slot3Moves : [move.seedBomb.id, move.leafage.id, move.razorLeaf.id, move.cottonSpore.id],
            slot4 : pkmn.dewgong, slot4Moves : [move.surf.id, move.auroraBeam.id, move.scald.id, move.blizzard.id],
            slot5 : pkmn.victreebel, slot5Moves : [move.appleAcid.id, move.noxiousTorque.id, move.seedBomb.id, move.toxic.id],
            slot6 : pkmn.exeggutor, slot6Moves : [move.barrage.id, move.futureSight.id, move.magicalLeaf.id, move.psybeam.id],
        },
    },
    {
        areaId: "vsGymLeaderKoga",
        region: "kanto",
        order: 5,
        unlockAreaId: "vsGymLeaderErika",
        name: "Gym Leader Koga",
        badge: "Soul Badge",
        badgeItemId: "gymBadgeKoga",
        city: "Fuchsia City",
        sprite: "koga",
        background: "gym",
        level: 100,
        description: "Especialista em Pokémon do tipo Posion.",
        team: {
            slot1 : pkmn.venomoth, slot1Moves : [move.stunSpore.id, move.psychic.id, move.crossPoison.id, move.hyperBeam.id],
            slot2 : pkmn.muk, slot2Moves : [move.sludge.id, move.hyperBeam.id, move.toxic.id, move.crossPoison.id],
            slot3 : pkmn.weezing, slot3Moves : [move.sludge.id, move.fireBlast.id, move.toxic.id, move.hyperBeam.id],
            slot4 : pkmn.hypno, slot4Moves : [move.psychic.id, move.powerupPunch.id, move.psybeam.id, move.lowSweep.id],
            slot5 : pkmn.tangela, slot5Moves : [move.seedBomb.id, move.leafage.id, move.razorLeaf.id, move.cottonSpore.id],
            slot6 : pkmn.parasect, slot6Moves : [move.seedBomb.id, move.razorLeaf.id, move.cottonSpore.id, move.bugBuzz.id],
        },
    },
    {
        areaId: "vsGymLeaderSabrina",
        region: "kanto",
        order: 6,
        unlockAreaId: "vsGymLeaderKoga",
        name: "Gym Leader Sabrina",
        badge: "Marsh Badge",
        badgeItemId: "gymBadgeSabrina",
        city: "Saffron City",
        sprite: "sabrina",
        background: "gym",
        level: 100,
        description: "Especialista em Pokémon do tipo Psíquico.",
        team: {
            slot1 : pkmn.alakazam, slot1Moves : [move.amnesia.id, move.psychic.id, move.twinBeam.id, move.dig.id],
            slot2 : pkmn.snorlax, slot2Moves : [move.amnesia.id, move.hyperBeam.id, move.iceBeam.id, move.thunderbolt.id],
            slot3 : pkmn.mrmime, slot3Moves : [move.amnesia.id, move.confusion.id, move.futureSight.id, move.psybeam.id],
            slot4 : pkmn.hypno, slot4Moves : [move.amnesia.id, move.powerupPunch.id, move.psybeam.id, move.lowSweep.id],
            slot5 : pkmn.exeggutor, slot5Moves : [move.barrage.id, move.futureSight.id, move.magicalLeaf.id, move.psybeam.id],
            slot6 : pkmn.wigglytuff, slot6Moves : [move.hyperVoice.id, move.iceBeam.id, move.moonblast.id, move.hyperBeam.id],
        },
    },
    {
        areaId: "vsGymLeaderBlaine",
        region: "kanto",
        order: 7,
        unlockAreaId: "vsGymLeaderSabrina",
        name: "Gym Leader Blaine",
        badge: "Volcano Badge",
        badgeItemId: "gymBadgeBlaine",
        city: "Cinnabar City",
        sprite: "blaine",
        background: "gym",
        level: 100,
        description: "Especialista em Pokémon do tipo Fogo.",
        team: {
            slot1 : pkmn.charizard, slot1Moves : [move.flamethrower.id, move.firePunch.id, move.fireBlast.id, move.flareBlitz.id],
            slot2 : pkmn.arcanine, slot2Moves : [move.fireFang.id, move.fireSpin.id, move.flamethrower.id, move.flareBlitz.id],
            slot3 : pkmn.rapidash, slot3Moves : [move.overheat.id, move.heatWave.id, move.fireFang.id, move.flameCharge.id],
            slot4 : pkmn.ninetales, slot4Moves : [move.flamethrower.id, move.fireFang.id, move.fireBlast.id, move.fireSpin.id],
            slot5 : pkmn.flareon, slot5Moves : [move.fireBlast.id, move.fireFang.id, move.flameCharge.id, move.flamethrower.id],
            slot6 : pkmn.magmar, slot6Moves : [move.firePunch.id, move.flamethrower.id, move.fireBlast.id, move.blazeKick.id],
        },
    },
    {
        areaId: "vsGymLeaderGiovanni",
        region: "kanto",
        order: 8,
        unlockAreaId: "vsGymLeaderBlaine",
        name: "Gym Leader Giovanni",
        badge: "Earth Badge",
        badgeItemId: "gymBadgeGiovanni",
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
            slot6 : pkmn.mewtwo, slot6Moves : [move.calmMind.id, move.psychic.id, move.shadowBall.id, move.zenHeadbut.id],
        },
    }
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
    // 1. Drop Garantido: 1x Auto Refight Ticket
    const ticketId = "autoRefightTicket"; // Modifique aqui para o ID exato do seu item de ticket
    if (item[ticketId] !== undefined) {
        item[ticketId].got++;
        item[ticketId].newItem++;
    }

    // 2. Drop do Pokémon do Líder enfrentado
    if (area.team) {
        // Mapeia quais slots do time do líder possuem um Pokémon válido preenchido
        const validSlots = [];
        for (let i = 1; i <= 6; i++) {
            if (area.team[`slot${i}`]) {
                validSlots.push(area.team[`slot${i}`]);
            }
        }

    if (validSlots.length > 0) {
            const chosenPkmn = validSlots[Math.floor(Math.random() * validSlots.length)];
            
            // O jogo usa isso para saber que tem que entregar o Pokémon
            chosenPkmn.newPokemon = true;
            
            // ADICIONE ISSO: O nosso post-it personalizado!
            chosenPkmn.fromGym = true; 
    }
}

    area.gymDefeatCount = getGymDefeatCount(area) + 1;
    area.defeated = true;
    
    // Após vencer, limpa o líder atual para forçar um novo sorteio na próxima abertura de menu
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
