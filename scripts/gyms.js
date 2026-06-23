// PokeChill: Gym leader definitions, renderers and gym menu logic.
/**
 * =============================================================================
 * GINÁSIOS — líderes de ginásio (menu separado do VS)
 * =============================================================================
 * Edite GYMS_LEADERS para mudar ordem, nomes, níveis, sprites, times, etc.
 *
 * areaId     → chave da batalha em areas (areasDictionary.js), ex: "vsGymLeaderBrock"
 * order      → ordem na lista (1 = primeiro ginásio)
 * unlockAreaId → areaId do líder anterior (null = sempre disponível)
 * badgeItemId → item de insígnia dropável / trocável na loja
 *
 * Campos opcionais (se definidos, sobrescrevem a área em areasDictionary):
 *   name, sprite, background, level, team, fieldEffect, itemReward, reward, encounterEffect
 *
 * Rematch: +10% nível (até 100) e +10% dificuldade (HP, até tier IV) por vitória.
 */

const GYM_BASE_HP_MULTIPLIER = 4

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

// Estado interno — região selecionada no menu
var _gymsCurrentRegion = null;
const GYM_LEVEL_CAP = 300
const GYM_SCALE_PER_DEFEAT = 1.02 // A dificuldade escala 1% a cada vitória, o que é um aumento suave que mantém os líderes desafiadores mesmo após várias derrotas. O limite de 100% (tier IV) garante que a dificuldade não se torne impossível, mas ainda assim oferece um desafio significativo para jogadores experientes.
const GYM_BADGE_DROP_CHANCE = 0.3 // Chance de dropar a insígnia ao derrotar o líder (se ainda não tiver a insígnia)

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
            slot1 : pkmn.vileplume,
            slot1Moves : [move.trailblaze.id, move.sludge.id, move.razorLeaf.id, move.acid.id],
            slot2 : pkmn.clefable,
            slot2Moves : [move.lunarDance.id, move.alluringVoice.id, move.fairyWind.id, move.disarmingVoice.id],
            slot3 : pkmn.tangela,
            slot3Moves : [move.seedBomb.id, move.leafage.id, move.razorLeaf.id, move.cottonSpore.id],
            slot4 : pkmn.dewgong,
            slot4Moves : [move.surf.id, move.auroraBeam.id, move.scald.id, move.blizzard.id],
            slot5 : pkmn.victreebel,
            slot5Moves : [move.appleAcid.id, move.noxiousTorque.id, move.seedBomb.id, move.toxic.id],
            slot6 : pkmn.exeggutor,
            slot6Moves : [move.barrage.id, move.futureSight.id, move.magicalLeaf.id, move.psybeam.id],
        },

        itemReward: {
                1: { item: item.spellTag.id,    amount: 1  },
                2: { item: item.fashionCase.id, amount: 3  },
                3: { item: item.bottleCap.id,   amount: 10 },
        },

        encounterEffect: function() {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").innerHTML = `New features unlocked!`
        document.getElementById("tooltipBottom").style.display = `none`
        document.getElementById("tooltipMid").innerHTML = `
        <div class="genetics-overview-tags" >
        <div style="filter:hue-rotate(100deg)" >Tier I Event Raids unlocked</div>
        <div style="filter:hue-rotate(0deg)" >New Dungeon: Victory Road</div>
        <div style="filter:hue-rotate(50deg)" >Level Training unlocked</div>
        </div>
        `
        openTooltip()
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
            slot1 : pkmn.venomoth,
            slot1Moves : [move.stunSpore.id, move.psychic.id, move.crossPoison.id, move.hyperBeam.id],
            slot2 : pkmn.muk,
            slot2Moves : [move.sludge.id, move.hyperBeam.id, move.toxic.id, move.crossPoison.id],
            slot3 : pkmn.weezing,
            slot3Moves : [move.sludge.id, move.fireBlast.id, move.toxic.id, move.hyperBeam.id],
            slot4 : pkmn.hypno,
            slot4Moves : [move.psychic.id, move.powerupPunch.id, move.psybeam.id, move.lowSweep.id],
            slot5 : pkmn.tangela,
            slot5Moves : [move.seedBomb.id, move.leafage.id, move.razorLeaf.id, move.cottonSpore.id],
            slot6 : pkmn.parasect,
            slot6Moves : [move.seedBomb.id, move.razorLeaf.id, move.cottonSpore.id, move.bugBuzz.id],
        },

        itemReward: {
                1: { item: item.fashionCase.id, amount: 3  },
                2: { item: item.bottleCap.id,   amount: 10 },
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
            slot1 : pkmn.alakazam,
            slot1Moves : [move.amnesia.id, move.psychic.id, move.twinBeam.id, move.dig.id],
            slot2 : pkmn.snorlax,
            slot2Moves : [move.amnesia.id, move.hyperBeam.id, move.iceBeam.id, move.thunderbolt.id],
            slot3 : pkmn.mrmime,
            slot3Moves : [move.amnesia.id, move.confusion.id, move.futureSight.id, move.psybeam.id],
            slot4 : pkmn.hypno,
            slot4Moves : [move.amnesia.id, move.powerupPunch.id, move.psybeam.id, move.lowSweep.id],
            slot5 : pkmn.exeggutor,
            slot5Moves : [move.barrage.id, move.futureSight.id, move.magicalLeaf.id, move.psybeam.id],
            slot6 : pkmn.wigglytuff,
            slot6Moves : [move.hyperVoice.id, move.iceBeam.id, move.moonblast.id, move.hyperBeam.id],
        },

        itemReward: {
                1: { item: item.fashionCase.id, amount: 3  },
                2: { item: item.bottleCap.id,   amount: 10 },
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
            slot1 : pkmn.charizard,
            slot1Moves : [move.flamethrower.id, move.firePunch.id, move.fireBlast.id, move.flareBlitz.id],
            slot2 : pkmn.arcanine,
            slot2Moves : [move.fireFang.id, move.fireSpin.id, move.flamethrower.id, move.flareBlitz.id],
            slot3 : pkmn.rapidash,
            slot3Moves : [move.overheat.id, move.heatWave.id, move.fireFang.id, move.flameCharge.id],
            slot4 : pkmn.ninetales,
            slot4Moves : [move.flamethrower.id, move.fireFang.id, move.fireBlast.id, move.fireSpin.id],
            slot5 : pkmn.flareon,
            slot5Moves : [move.fireBlast.id, move.fireFang.id, move.flameCharge.id, move.flamethrower.id],
            slot6 : pkmn.magmar,
            slot6Moves : [move.firePunch.id, move.flamethrower.id, move.fireBlast.id, move.blazeKick.id],
        },

        itemReward: {
                1: { item: item.fashionCase.id, amount: 3  },
                2: { item: item.bottleCap.id,   amount: 10 },
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
            slot1 : pkmn.nidoking,
            slot1Moves : [move.crossPoison.id,move.poisonClaw.id, move.sludgeWave.id, move.toxicThread.id],
            slot2 : pkmn.golem,
            slot2Moves : [move.highHorsepower.id, move.earthquake.id, move.magnitude.id, move.sandstorm.id],
            slot3 : pkmn.nidoqueen,
            slot3Moves : [move.toxicThread.id, move.venoshock.id, move.crossPoison.id, move.poisonClaw.id],
            slot4 : pkmn.dugtrio,
            slot4Moves : [move.dig.id, move.highHorsepower.id, move.bulldoze.id, move.earthquake.id],
            slot5 : pkmn.rhydon,
            slot5Moves : [move.rototiller.id, move.scorchingSands.id, move.earthPower.id, move.thunder.id],
            slot6 : pkmn.mewtwo,
            slot6Moves : [move.calmMind.id, move.psychic.id, move.shadowBall.id, move.zenHeadbut.id],
        },

        itemReward: {
                1: { item: item.fashionCase.id, amount: 3  },
                2: { item: item.bottleCap.id,   amount: 10 },
        },

        encounterEffect: function() {
        document.getElementById("tooltipTop").style.display = `none`
        document.getElementById("tooltipTitle").innerHTML = `New features unlocked!`
        document.getElementById("tooltipBottom").style.display = `none`
        document.getElementById("tooltipMid").innerHTML = `
        <div class="genetics-overview-tags" >
        <div style="filter:hue-rotate(100deg)" >Tier II Event Raids unlocked</div>
        <div style="filter:hue-rotate(0deg)" >Genetics unlocked</div>
        </div>
        `
        openTooltip()
        }
    },
    











    
]

function getGymMaxDifficulty() {
    return typeof tier4difficulty !== "undefined" ? tier4difficulty : 600
}

function getItemImageSrc(itemId) {
    const it = item[itemId]
    if (!it) return `img/items/${itemId}.png`
    if (it.itemIcon) {
        if (it.itemIcon === itemId) return `img/items/${it.itemIcon}.png`
        return `img/pkmn/sprite/${it.itemIcon}.png`
    }
    if (it.type === "memory") return `img/items/${it.image}Memory.png`
    if (it.type === "tm") return `img/items/tm${format(move[it.move].type)}.png`
    if (it.type === "decor") return `img/decor/${itemId}.png`
    return `img/items/${itemId}.png`
}

function getGymDefeatCount(area) {
    return area.gymDefeatCount || 0
}

function getGymBaseLevel(area) {
    return area.gymBaseLevel ?? area.level ?? 20
}

/** Nível efetivo do time do líder nesta luta (vitórias anteriores escalam +10%). */
function getGymEffectiveLevel(area) {
    const defeats = getGymDefeatCount(area)
    const scaled = Math.floor(getGymBaseLevel(area) * Math.pow(GYM_SCALE_PER_DEFEAT, defeats))
    return Math.min(GYM_LEVEL_CAP, Math.max(1, scaled))
}

/** Multiplicador de HP (mesma escala que raids: máx. tier IV). */
function getGymEffectiveHpMultiplier(area) {
    const defeats = getGymDefeatCount(area)
    const scaled = GYM_BASE_HP_MULTIPLIER * Math.pow(GYM_SCALE_PER_DEFEAT, defeats)
    return Math.min(getGymMaxDifficulty(), scaled)
}

function tryDropGymBadge(area) {
    if (!area?.isGym || !area.gymBadgeItemId) return false
    if (!rng(GYM_BADGE_DROP_CHANCE)) return false
    const badgeId = area.gymBadgeItemId
    if (!item[badgeId]) return false
    item[badgeId].got++
    item[badgeId].newItem++
    return true
}

function onGymLeaderDefeated(area) {
    const firstWin = !area.defeated

    if (firstWin) {
        if (area.reward) {
            const rewards = area.reward
            for (const i of rewards) {
                if (item[i.id] != undefined) {
                    let itemId = i.id
                    if (
                        (item[i.id].type == "held" && item[i.id].got >= 20 && item[i.id].heldBonusPkmn == undefined) ||
                        (item[i.id].heldBonusPkmn && pkmn[item[i.id].heldBonusPkmn()].caught == 0 && item[i.id].got >= 21) ||
                        (item[i.id].heldBonusPkmn && pkmn[item[i.id].heldBonusPkmn()].caught > 0 && item[i.id].got >= 20)
                    ) itemId = item.bottleCap.id
                    item[itemId].got++
                    item[itemId].newItem++
                }
                if (pkmn[i.id] != undefined) pkmn[i.id].newPokemon = true
            }
        }

        if (area.itemReward) {
            const rewards = area.itemReward
            for (const key in rewards) {
                const reward = rewards[key]
                const rewardId = reward.item
                const amount = reward.amount || 1
                if (item[rewardId] !== undefined) {
                    for (let n = 0; n < amount; n++) {
                        let itemId = rewardId
                        if (
                            (item[rewardId].type === "held" && item[rewardId].got >= 20 && item[rewardId].heldBonusPkmn === undefined) ||
                            (item[rewardId].heldBonusPkmn && pkmn[item[rewardId].heldBonusPkmn()].caught === 0 && item[rewardId].got >= 21) ||
                            (item[rewardId].heldBonusPkmn && pkmn[item[rewardId].heldBonusPkmn()].caught > 0 && item[rewardId].got >= 20)
                        ) itemId = item.bottleCap.id
                        item[itemId].got++
                        item[itemId].newItem++
                    }
                }
                if (pkmn[rewardId] !== undefined) pkmn[rewardId].newPokemon = true
            }
        }

        if (area.encounterEffect) area.encounterEffect()
        area.defeated = true
    }

    tryDropGymBadge(area)
    area.gymDefeatCount = getGymDefeatCount(area) + 1
}

/** Aplica GYMS_LEADERS nas áreas de combate e marca isGym para o menu Ginásios */
function registerGymLeaders() {
    const sorted = [...GYMS_LEADERS].sort((a, b) => a.order - b.order)

    for (const gym of sorted) {
        let area = areas[gym.areaId]

        if (!area && gym.team) {
            areas[gym.areaId] = buildGymAreaFromConfig(gym)
            area = areas[gym.areaId]
            area.id = gym.areaId
        }

        if (!area) {
            console.warn(`[Ginásios] Área não encontrada: ${gym.areaId}`)
            continue
        }

        area.isGym = true
        area.trainer = true
        area.type = area.type || "vs"
        area.gymOrder = gym.order
        area.gymBadge = gym.badge
        area.gymCity = gym.city
        area.gymDescription = gym.description
        area.gymBadgeItemId = gym.badgeItemId
        if (area.gymBaseLevel == null) area.gymBaseLevel = gym.level ?? area.level ?? 20
        if (area.gymDefeatCount == null) area.gymDefeatCount = 0

        if (gym.name != null) area.name = gym.name
        if (gym.sprite != null) area.sprite = gym.sprite
        if (gym.background != null) area.background = gym.background
        if (gym.level != null) area.level = gym.level
        if (gym.team != null) area.team = gym.team
        if (gym.fieldEffect != null) area.fieldEffect = gym.fieldEffect
        if (gym.itemReward != null) area.itemReward = gym.itemReward
        if (gym.reward != null) area.reward = gym.reward
        if (gym.encounterEffect != null) area.encounterEffect = gym.encounterEffect
    }
}

/** Cria uma área de ginásio só a partir do config (ginásios totalmente novos) */
function buildGymAreaFromConfig(gym) {
    return {
        name: gym.name || "Gym Leader",
        background: gym.background || "gym",
        sprite: gym.sprite || "brock",
        trainer: true,
        type: "vs",
        level: gym.level || 20,
        gymBaseLevel: gym.level || 20,
        gymBadgeItemId: gym.badgeItemId,
        gymDefeatCount: 0,
        team: gym.team,
        itemReward: gym.itemReward,
        reward: gym.reward,
        encounterEffect: gym.encounterEffect,
        fieldEffect: gym.fieldEffect,
    }
}

/** O ginásio está desbloqueado na lista? */
function isGymLeaderUnlocked(gym) {
    if (!gym.unlockAreaId) return true
    const prev = areas[gym.unlockAreaId]
    return prev && prev.defeated === true
}

/** 
 * MODO SORTEIO — sorteia um líder aleatório de todos os disponíveis.
 * Novo sorteio a cada vez que o jogador volta ao menu.
 * Drop: ticket de auto-refight + pokémon aleatório do time (chance de 10% shiny).
 */

// ── Configuração do sorteio ───────────────────────────────────────────────
const GYM_SORTEIO_DIFFICULTY    = 200;  // ← ajuste aqui: 25/70/200/600
const GYM_SORTEIO_LEVEL         = 200;  // ← nível do time do líder sorteado
const GYM_SORTEIO_SHINY_CHANCE  = 0.10; // ← 10% de chance de pokémon shiny

// Estado interno
var _gymSorteioAtual = null; // líder sorteado atualmente

/** Sorteia um líder aleatório entre todos os disponíveis */
function _sortearGymLeader() {
    const disponiveis = GYMS_LEADERS.filter(function(g) {
        return areas[g.areaId] !== undefined || g.team !== undefined;
    });
    if (disponiveis.length === 0) return null;
    return disponiveis[Math.floor(Math.random() * disponiveis.length)];
}

/** Pega um pokémon aleatório do time do líder */
function _getPkmnAleatorioDoTime(gym) {
    const area = areas[gym.areaId];
    const team = gym.team || (area && area.team);
    if (!team) return null;

    const slots = [];
    for (let i = 1; i <= 6; i++) {
        const p = team['slot' + i];
        if (p && p.id) slots.push(p.id);
    }
    if (slots.length === 0) return null;
    return slots[Math.floor(Math.random() * slots.length)];
}

/** Monta o menu Ginásios — mostra o líder sorteado */
function updateGyms() {
    const listing = document.getElementById("gyms-listing");
    if (!listing) return;

    listing.innerHTML = "";
    document.getElementById("gyms-menu-header").style.backgroundImage = "url(img/bg/gym.png)";

    // Sorteia novo líder a cada vez que o menu abre
    _gymSorteioAtual = _sortearGymLeader();

    if (!_gymSorteioAtual) {
        listing.innerHTML = '<div style="text-align:center;padding:20px;opacity:0.6">No gym leaders available.</div>';
        return;
    }

    const gym  = _gymSorteioAtual;
    const area = areas[gym.areaId];
    const team = gym.team || (area && area.team);

    // Monta preview do time
    var teamHTML = '';
    if (team) {
        teamHTML = '<div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px">';
        for (let i = 1; i <= 6; i++) {
            const p = team['slot' + i];
            if (p && p.id) {
                teamHTML += '<img src="img/pkmn/sprite/' + p.id + '.png" ' +
                    'style="width:40px;height:40px;image-rendering:pixelated" ' +
                    'onerror="this.style.display='none'">';
            }
        }
        teamHTML += '</div>';
    }

    // Pokémon que pode dropar
    const pkmnDrop = _getPkmnAleatorioDoTime(gym);
    const pkmnDropName = pkmnDrop ? format(pkmnDrop) : '?';
    const dropHTML = pkmnDrop
        ? '<div style="display:flex;align-items:center;gap:6px;margin-top:6px;font-size:0.8rem;opacity:0.85">' +
              '<img src="img/pkmn/sprite/' + pkmnDrop + '.png" style="width:28px;height:28px;image-rendering:pixelated">' +
              '<span>' + pkmnDropName + ' <span style="opacity:0.6">(' + (GYM_SORTEIO_SHINY_CHANCE * 100) + '% shiny)</span></span>' +
              '<img src="img/items/autoRefightTicket.png" style="width:22px;height:22px;image-rendering:pixelated;margin-left:6px">' +
              '<span style="opacity:0.6">Auto-Refight Ticket</span>' +
          '</div>'
        : '';

    const card = document.createElement("div");
    card.className = "vs-card";
    card.style.cursor = "pointer";
    card.innerHTML = `
        <span class="hitbox"></span>
        <img class="vs-card-flair" src="img/icons/pokeball.svg">
        <div class="vs-card-bg"></div>
        <span class="explore-ticket-left" style="z-index:2;">
            <span style="font-size:1.3rem">${gym.name || 'Gym Leader'}</span>
            <span style="font-size:0.9rem;opacity:0.85">${gym.city || ''}</span>
            <span>
                <strong style="font-size:1rem;background:#8B6914">Level ${GYM_SORTEIO_LEVEL}</strong>
                ${gym.badge ? '<strong style="font-size:0.85rem;background:#8B6914;margin-left:0.2rem">' + gym.badge + '</strong>' : ''}
            </span>
            ${teamHTML}
            <div style="margin-top:4px;font-size:0.75rem;opacity:0.7">⚔ Drops:</div>
            ${dropHTML}
        </span>
        <div></div>
        <div class="vs-card-left">
            <img class="sprite-trim" src="img/trainers/${gym.sprite || 'brock'}.png">
        </div>
    `;

    card.addEventListener("click", function() {
        _entrarGymSorteio(gym);
    });

    listing.appendChild(card);

    // Botão de novo sorteio
    const rerollBtn = document.createElement("div");
    rerollBtn.style.cssText = "text-align:center;padding:10px;cursor:pointer;opacity:0.7;font-size:0.85rem;";
    rerollBtn.textContent = "🔀 Sortear outro líder";
    rerollBtn.onmouseover = function() { this.style.opacity = "1"; };
    rerollBtn.onmouseout  = function() { this.style.opacity = "0.7"; };
    rerollBtn.onclick = function() { updateGyms(); };
    listing.appendChild(rerollBtn);
}

/** Inicia a batalha com o líder sorteado */
function _entrarGymSorteio(gym) {
    if (saved.currentArea !== undefined) return;

    const areaId = gym.areaId;

    // Garante que a área existe com os dados do sorteio
    if (!areas[areaId] && gym.team) {
        areas[areaId] = buildGymAreaFromConfig(gym);
        areas[areaId].id = areaId;
    }

    if (!areas[areaId]) return;

    // Aplica dificuldade e nível fixos do sorteio
    areas[areaId].difficulty = GYM_SORTEIO_DIFFICULTY;
    areas[areaId].level      = GYM_SORTEIO_LEVEL;
    areas[areaId].trainer    = true;
    areas[areaId].type       = areas[areaId].type || "vs";
    areas[areaId].isGym      = true;
    areas[areaId].gymBadgeItemId = gym.badgeItemId;

    // Define o drop ao vencer
    areas[areaId].encounterEffect = function() {
        // Auto-Refight Ticket sempre
        if (item.autoRefightTicket) {
            item.autoRefightTicket.got++;
            item.autoRefightTicket.newItem++;
        }

        // Pokémon aleatório do time
        const pkmnId = _getPkmnAleatorioDoTime(gym);
        if (pkmnId && pkmn[pkmnId]) {
            if (Math.random() < GYM_SORTEIO_SHINY_CHANCE) {
                pkmn[pkmnId].shiny = true;
            }
            pkmn[pkmnId].newPokemon = true;
        }
    };

    saved.currentAreaBuffer  = areaId;
    saved.currentArea        = areaId;
    saved.lastAreaJoined     = areaId;

    document.getElementById("preview-team-exit").style.display = "flex";
    document.getElementById("team-menu").style.zIndex          = "50";
    document.getElementById("team-menu").style.display         = "flex";
    document.getElementById("menu-button-parent").style.display = "none";
    document.getElementById("gyms-menu").style.display         = "none";
    updatePreviewTeam();
    afkSeconds = 0;
}


registerGymLeaders()
