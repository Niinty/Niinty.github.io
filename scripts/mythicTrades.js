// PokeChill: Mythic trade shop entries and pokéball trade configuration.
/**
 * =============================================================================
 * SISTEMA DE POKÉBOLAS MÍTICAS E TROCAS NA LOJA
 * =============================================================================
 * Este arquivo centraliza a configuração dos 20 Pokémon míticos trocáveis
 * por pokebolas especiais. É carregado antes de shop.js e explore.js.
 *
 * Fluxo do jogador:
 * 1. Derrota inimigos em combate (exceto Treino) → chance de dropar uma pokebola
 * 2. Junta 100 da pokebola correspondente
 * 3. Poke-Mart → categoria Pokemon → troca pelo mítico
 */

/** Lista completa: pokebola (id do item) ↔ Pokémon mítico */
const MYTHIC_TRADES = [
    { ball: "dreamball", ballLabel: "Dream Ball", pkmnId: "mew", name: "Mew" },
    { ball: "strangeball", ballLabel: "Strange Ball", pkmnId: "celebi", name: "Celebi" },
    { ball: "parkball", ballLabel: "Park Ball", pkmnId: "jirachi", name: "Jirachi" },
    { ball: "originball", ballLabel: "Origin Ball", pkmnId: "deoxys", name: "Deoxys" },
    { ball: "diveball", ballLabel: "Dive Ball", pkmnId: "manaphy", name: "Manaphy" },
    { ball: "hisuianheavyball", ballLabel: "Hisuian Heavy Ball", pkmnId: "darkrai", name: "Darkrai" },
    { ball: "friendball", ballLabel: "Friend Ball", pkmnId: "shaymin", name: "Shaymin" },
    { ball: "hisuianpokeball", ballLabel: "Hisuian Poke Ball", pkmnId: "victini", name: "Victini" },
    { ball: "lureball", ballLabel: "Lure Ball", pkmnId: "keldeo", name: "Keldeo" },
    { ball: "hisuianultraball", ballLabel: "Hisuian Ultra Ball", pkmnId: "meloetta", name: "Meloetta" },
    { ball: "netball", ballLabel: "Net Ball", pkmnId: "genesect", name: "Genesect" },
    { ball: "loveball", ballLabel: "Love Ball", pkmnId: "diancie", name: "Diancie" },
    { ball: "healball", ballLabel: "Heal Ball", pkmnId: "hoopa", name: "Hoopa" },
    { ball: "cherishball", ballLabel: "Cherish Ball", pkmnId: "volcanion", name: "Volcanion" },
    { ball: "luxuryball", ballLabel: "Luxury Ball", pkmnId: "magearna", name: "Magearna" },
    { ball: "leadenball", ballLabel: "Leaden Ball", pkmnId: "marshadow", name: "Marshadow" },
    { ball: "quickball", ballLabel: "Quick Ball", pkmnId: "zeraora", name: "Zeraora" },
    { ball: "heavyball", ballLabel: "Heavy Ball", pkmnId: "meltan", name: "Meltan" },
    { ball: "duskball", ballLabel: "Dusk Ball", pkmnId: "zarude", name: "Zarude" },
    { ball: "wingball", ballLabel: "Wing Ball", pkmnId: "pecharunt", name: "Pecharunt" },
]

/** Chance (0–1) de dropar 1 pokebola mítica ao derrotar um inimigo fora do Treino */
const MYTHIC_BALL_DROP_CHANCE = 0.00008 // Aproximadamente 1 pokebola a cada 12.500 batalhas (ajuste para balancear)

/** Quantidade de pokebolas necessárias na Poke-Mart para resgatar o mítico */
const MYTHIC_BALL_TRADE_COST = 100

/**
 * Registra cada pokebola como item no dicionário global `item`.
 * Chamado uma vez ao carregar itemDictionary.js (após `const item = {}`).
 */
function registerMythicBallItems() {
    for (const trade of MYTHIC_TRADES) {
        const pkmnName = trade.name
        const ballLabel = trade.ballLabel
        item[trade.ball] = {
            id: trade.ball,
            type: "key",
            rarity: "epic",
            rename: trade.ballLabel,
            subtitle: "(Epic)",
            info: function() {
                return `Dropa ao vencer batalhas (exceto Treino). Troque ${MYTHIC_BALL_TRADE_COST} ${ballLabel} por ${pkmnName} na Poke-Mart (Pokemon). (Possui: ${this.got})`
            }
        }
    }
}

/**
 * Cria entradas na loja (objeto global `shop`) para trocar 100 pokebolas pelo mítico.
 * Chamado ao carregar shop.js (após `const shop = {}`).
 */
function registerMythicShopEntries() {
    for (const trade of MYTHIC_TRADES) {
        const pkmnId = trade.pkmnId
        shop[`shop${pkmnId}`] = {
            pkmn: pkmnId,
            sprite: pkmnId,
            name: trade.name,
            price: MYTHIC_BALL_TRADE_COST,
            currency: trade.ball,
            category: "pokemon",
            stock: 1,
            condition: (function(id) {
                return function() { return pkmn[id].caught < 1 }
            })(pkmnId),
            effect: (function(id) {
                return function() {
                    givePkmn(pkmn[id], 10)
                    pkmn[id].newPokemon = true
                    updateItemBag()
                    saveGame()
                }
            })(pkmnId),
        }
    }
}

// --- Inicialização ao carregar (depois de itemDictionary.js) ---
registerMythicBallItems()
for (const trade of MYTHIC_TRADES) {
    item[trade.ball].id = trade.ball
    item[trade.ball].newItem = 0
    item[trade.ball].got = 0
}

/**
 * Tenta dropar uma pokebola mítica aleatória após vitória em combate.
 * @returns {boolean} true se dropou; false se não dropou ou combate inválido
 */
function tryDropMythicBall() {
    if (!saved.currentArea || !areas[saved.currentArea]) return false

    // Treino nunca dropa pokebolas míticas
    if (saved.currentArea === areas.training.id) return false

    if (!rng(MYTHIC_BALL_DROP_CHANCE)) return false

    const trade = arrayPick(MYTHIC_TRADES)
    item[trade.ball].newItem++
    item[trade.ball].got++
    return true
}

