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
const GYM_LEVEL_CAP = 200
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
            slot3Moves : [move.thunderWave, move.confusion.id,move.futureSight.id, move.psybeam.id],
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

/** Monta o menu Ginásios — mostra regiões ou líderes da região selecionada */
function updateGyms(regionId) {
    const listing = document.getElementById("gyms-listing")
    if (!listing) return

    listing.innerHTML = ""
    document.getElementById("gyms-menu-header").style.backgroundImage = "url(img/bg/gym.png)"

    // Se não há região selecionada, mostra a tela de seleção de regiões
    if (!regionId && !_gymsCurrentRegion) {
        _renderGymsRegions(listing)
        return
    }

    const activeRegion = regionId || _gymsCurrentRegion
    _gymsCurrentRegion = activeRegion
    _renderGymsLeaders(listing, activeRegion)
}

function _renderGymsRegions(listing) {
    // Botão de voltar não necessário aqui — é a tela inicial
    const header = document.getElementById("gyms-menu-header")

    const regionGrid = document.createElement("div")
    regionGrid.style.cssText = "display:flex; flex-direction:column; gap:8px; padding:8px"

    GYM_REGIONS.forEach(function(region) {
        const leadersInRegion = GYMS_LEADERS.filter(function(g) { return g.region === region.id; })
        const total = leadersInRegion.length
        if (total === 0) return // Não mostra regiões sem líderes cadastrados

        const defeated = leadersInRegion.filter(function(g) {
            return areas[g.areaId] && areas[g.areaId].defeated
        }).length

        const card = document.createElement("div")
        card.style.cssText = [
            "display:flex; align-items:center; gap:12px; padding:12px 14px;",
            "border-radius:10px; border:1px solid rgba(255,255,255,0.08);",
            "background:rgba(255,255,255,0.03); cursor:pointer;",
            "border-left:3px solid " + region.color + ";",
            "transition:background 0.15s, transform 0.1s;"
        ].join("")

        card.onmouseover = function() { this.style.background = "rgba(255,255,255,0.07)"; this.style.transform = "translateX(2px)"; }
        card.onmouseout  = function() { this.style.background = "rgba(255,255,255,0.03)"; this.style.transform = ""; }
        card.onclick     = function() { updateGyms(region.id); }

        card.innerHTML = [
            '<span style="font-size:1.4rem;width:32px;text-align:center;flex-shrink:0">' + region.icon + '</span>',
            '<div style="flex:1;display:flex;flex-direction:column;gap:2px">',
                '<span style="font-size:0.95rem;font-weight:700;color:var(--light1,#e8ddd0)">' + region.name + '</span>',
                '<span style="font-size:0.72rem;color:var(--light2,#b0a898);opacity:0.8">' + defeated + ' / ' + total + ' leaders defeated</span>',
            '</div>',
            '<span style="color:var(--light2,#b0a898);font-size:1.2rem;opacity:0.5">›</span>',
        ].join("")

        regionGrid.appendChild(card)
    })

    listing.appendChild(regionGrid)
}

function _renderGymsLeaders(listing, regionId) {
    const regionConfig = GYM_REGIONS.find(function(r) { return r.id === regionId; })
    const regionName   = regionConfig ? regionConfig.name : regionId

    // Botão de voltar
    const backBtn = document.createElement("div")
    backBtn.style.cssText = "display:flex;align-items:center;gap:8px;padding:8px 8px 4px;cursor:pointer;opacity:0.7"
    backBtn.onmouseover = function() { this.style.opacity = "1"; }
    backBtn.onmouseout  = function() { this.style.opacity = "0.7"; }
    backBtn.onclick = function() { _gymsCurrentRegion = null; updateGyms(); }
    backBtn.innerHTML = '<span style="font-size:1.1rem">‹</span><span style="font-size:0.85rem">All Regions</span>'
    listing.appendChild(backBtn)

    // Filtra líderes da região
    const filtered = GYMS_LEADERS.filter(function(g) { return g.region === regionId; })

    if (filtered.length === 0) {
        listing.innerHTML += '<div style="text-align:center;padding:20px;opacity:0.6">No gym leaders in this region yet.</div>'
        return
    }

    const sorted = filtered.sort(function(a, b) { return a.order - b.order; })
    let anyListed = false

    for (const gym of sorted) {
        const area = areas[gym.areaId]
        if (!area) continue

        const unlocked = isGymLeaderUnlocked(gym)
        if (!unlocked) continue

        anyListed = true
        const effectiveLevel = getGymEffectiveLevel(area)
        const defeats = getGymDefeatCount(area)
        const rematchTag = area.defeated
            ? `<strong style="font-size:0.8rem; background:#4a6741; margin-left:0.2rem">Rematch ×${defeats}</strong>`
            : ""

        const divAreas = document.createElement("div")
        divAreas.className = "vs-card"
        divAreas.dataset.trainer = gym.areaId

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

        let nameTag = ""
        if (area.encounterEffect && !area.defeated) {
            nameTag = `<svg class="event-icon" style="color:#8B6914" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.795 2h-2c-1.886 0-2.829 0-3.414.586c-.586.586-.586 1.528-.586 3.414v3.5h10V6c0-1.886 0-2.828-.586-3.414S14.681 2 12.795 2" opacity="0.5"/><path fill="currentColor" fill-rule="evenodd" d="M13.23 5.783a3 3 0 0 0-2.872 0L5.564 8.397A3 3 0 0 0 4 11.031v4.938a3 3 0 0 0 1.564 2.634l4.794 2.614a3 3 0 0 0 2.872 0l4.795-2.614a3 3 0 0 0 1.564-2.634V11.03a3 3 0 0 0-1.564-2.634zM11.794 10.5c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354s-.19.088-.399.135l-.19.044c-.739.167-1.108.25-1.195.532c-.088.283.163.577.666 1.165l.13.152c.144.167.215.25.247.354s.022.215 0 .438l-.02.203c-.076.785-.114 1.178.116 1.352s.575.015 1.266-.303l.179-.082c.196-.09.294-.135.398-.135s.203.045.399.135l.179.082c.69.319 1.036.477 1.266.303s.192-.567.116-1.352l-.02-.203c-.022-.223-.033-.334 0-.438c.032-.103.103-.187.246-.354l.13-.152c.504-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.194-.532l-.191-.044c-.21-.047-.315-.07-.399-.135c-.084-.064-.138-.16-.246-.354l-.098-.176c-.38-.682-.57-1.023-.855-1.023" clip-rule="evenodd"/></svg>`
        }

        let fieldTag = ""
        if (area.fieldEffect) {
            fieldTag = `<strong style="font-size:1rem; background:#725AA4; margin-left:0.2rem">+ Field Effect</strong>`
        }

        const badgeTag = gym.badge
            ? `<strong style="font-size:0.85rem; background:#8B6914; margin-left:0.2rem">${gym.badge}</strong>`
            : ""
        const cityTag = gym.city
            ? `<span style="font-size:0.9rem; opacity:0.85">${gym.city}</span>`
            : ""

        const trainerName = area.name
        const trainerSprite = area.sprite
        const maxDiff = getGymMaxDifficulty()
        const diffPct = Math.round((getGymEffectiveHpMultiplier(area) / maxDiff) * 100)

        divAreas.innerHTML = `
            <span class="hitbox"></span>
            <img class="vs-card-flair" src="img/icons/pokeball.svg">
            <div class="vs-card-bg"></div>
            <span class="explore-ticket-left" style="z-index: 2;">
                <span id="gym-trainer-name-${gym.areaId}" style="font-size:1.3rem">${trainerName}${nameTag}</span>
                <span>${cityTag}</span>
                <span><strong style="font-size:1rem; background:#8B6914">Level ${effectiveLevel}</strong>${badgeTag}${fieldTag}${rematchTag}</span>
                <!-- Dificuldade removida por solicitação. -->
            </span>
            <div></div>
            <div class="vs-card-left">
                <img id="gym-trainer-image-${gym.areaId}" class="sprite-trim" src="img/trainers/${trainerSprite}.png">
            </div>
        `

        listing.appendChild(divAreas)
    }

    for (const gym of sorted) {
        if (isGymLeaderUnlocked(gym)) continue
        
        // MODIFICADO: Se a área global falhar, usamos os dados locais do array do líder para renderizar o card bloqueado com segurança
        const area = areas[gym.areaId]
        const displaySprite = area ? area.sprite : (gym.sprite || "brock")

        anyListed = true
        const divAreas = document.createElement("div")
        divAreas.className = "vs-card"
        divAreas.style.cursor = "default"
        divAreas.style.filter = "brightness(0.3)"
        divAreas.innerHTML = `
            <span class="hitbox"></span>
            <img class="vs-card-flair" src="img/icons/pokeball.svg">
            <div class="vs-card-bg"></div>
            <span class="explore-ticket-left" style="z-index: 2;">
                <span style="font-size:1.3rem">Locked</span>
                <span style="font-size:0.9rem; opacity:0.85">${gym.city || ""}</span>
            </span>
            <div></div>
            <div class="vs-card-left">
                <img class="sprite-trim" style="filter:brightness(0)" src="img/trainers/${displaySprite}.png">
            </div>
        `
        listing.appendChild(divAreas)
    }

    if (!anyListed) {
        const emptyDiv = document.createElement("div")
        emptyDiv.style.cssText = "display:flex;flex-direction:column;justify-content:center;align-items:center;background:#ECDEB7;border-radius:0.3rem;height:15rem;width:15rem;text-align:center"
        emptyDiv.innerHTML = '<img src="img/pkmn/sprite/pikachuRockstar.png">No gym leaders available yet.<br><span style="font-size:0.9rem;opacity:0.7">Defeat the previous leader to unlock the next</span>'
        listing.appendChild(emptyDiv)
    }
}


registerGymLeaders()
