// =============================================================================
// legends.js — Modo Legends | PokeChill v5.0
// Arquivo autônomo. Não modifica nenhum objeto global existente diretamente.
// Depende de: pkmn, item, areas, saved, format(), givePkmn(), saveGame()
// =============================================================================

// ---------------------------------------------------------------------------
// 1. CONFIGURAÇÃO DOS LENDÁRIOS
// Adicione novos lendários aqui no futuro. Apenas esta lista precisa crescer.
// ---------------------------------------------------------------------------

const LEGENDS_LIST = [

        {
        id: "articuno",
        region: "kanto",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "neverMeltIce", amount: 1, chance: 0.1 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "iceCave",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "zapdos",
        region: "kanto",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "magnet", amount: 1, chance: 0.1 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "trench",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "moltres",
        region: "kanto",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "charcoal", amount: 1, chance: 0.1 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "volcano",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "mewtwo",
        region: "kanto",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
            { itemId: "mewtwoniteX", amount: 1, chance: 0.001 },
            { itemId: "mewtwoniteY", amount: 1, chance: 0.001 },
        ],
        // Background da área de batalha
        background: "cave",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    //Lendarios de Johto  
    {
        id: "raikou",
        region: "johto",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "exploreHead1",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "entei",
        region: "johto",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "exploreHead1",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "suicune",
        region: "johto",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "exploreHead1",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "lugia",
        region: "johto",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "tower",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "hooh",
        region: "johto",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "tower",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    //Lendarios de Hoenn
        
    {
        id: "regirock",
        region: "hoenn",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "mountain",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "regice",
        region: "hoenn",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "iceCave",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "registeel",
        region: "hoenn",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "cave",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "latias",
        region: "hoenn",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "empty",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },   

    {
        id: "latios",
        region: "hoenn",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "empty",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },     

    {
        id: "kyogre",
        region: "hoenn",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "sea",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },    

    {
        id: "groudon",
        region: "hoenn",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "volcano",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },     

    {
        id: "rayquaza",
        region: "hoenn",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "trench",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },  


    //Lendarios de Sinnoh
    {
        id: "uxie",
        region: "sinnoh",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "dimension",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },  

    {
        id: "mesprit",
        region: "sinnoh",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "dimension",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },    

    {
        id: "azelf",
        region: "sinnoh",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "dimension",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },  

    {
        id: "dialga",
        region: "sinnoh",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "dimension",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },   

    {
        id: "palkia",
        region: "sinnoh",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "dimension",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "giratina",
        region: "sinnoh",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "dimension",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },     

    {
        id: "heatran",
        region: "sinnoh",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
            { itemId: "heatranite", amount: 1, chance: 0.001 },
        ],
        // Background da área de batalha
        background: "volcano",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    }, 

    {
        id: "regigigas",
        region: "sinnoh",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "forest",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },  

    {
        id: "cresselia",
        region: "sinnoh",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "night",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },         

    //Lendarios de Unova
    {
        id: "cobalion",
        region: "unova",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "cave",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },
                
    {
        id: "terrakion",
        region: "unova",
        unlockCost: 2,
        windowMs: 72 * 60 * 60 * 1000,
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        battleLevel: 300,
        difficulty: 600,
        catchRate: 0.01,
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        background: "mountain",
        giveLevel: 1,
    },
                
    {
        id: "virizion",
        region: "unova",
        unlockCost: 2,
        windowMs: 72 * 60 * 60 * 1000,
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        battleLevel: 300,
        difficulty: 600,
        catchRate: 0.01,
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        background: "forest",
        giveLevel: 1,
    },
                
    {
        id: "tornadus",
        region: "unova",
        unlockCost: 2,
        windowMs: 72 * 60 * 60 * 1000,
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        battleLevel: 300,
        difficulty: 600,
        catchRate: 0.01,
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        background: "sky",
        giveLevel: 1,
    },
                
    {
        id: "thundurus",
        region: "unova",
        unlockCost: 2,
        windowMs: 72 * 60 * 60 * 1000,
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        battleLevel: 300,
        difficulty: 600,
        catchRate: 0.01,
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        background: "sky",
        giveLevel: 1,
    },
                
    {
        id: "landorus",
        region: "unova",
        unlockCost: 2,
        windowMs: 72 * 60 * 60 * 1000,
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        battleLevel: 300,
        difficulty: 600,
        catchRate: 0.01,
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        background: "desert",
        giveLevel: 1,
    },
                
    {
        id: "reshiram",
        region: "unova",
        unlockCost: 2,
        windowMs: 72 * 60 * 60 * 1000,
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        battleLevel: 300,
        difficulty: 600,
        catchRate: 0.01,
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        background: "cave", // Ou outro cenário imponente que combine com a Dragonspiral Tower / N's Castle
        giveLevel: 1,
    },
                
    {
        id: "zekrom",
        region: "unova",
        unlockCost: 2,
        windowMs: 72 * 60 * 60 * 1000,
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        battleLevel: 300,
        difficulty: 600,
        catchRate: 0.01,
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        background: "cave", 
        giveLevel: 1,
    },
                
    {
        id: "kyurem",
        region: "unova",
        unlockCost: 2,
        windowMs: 72 * 60 * 60 * 1000,
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        battleLevel: 300,
        difficulty: 600,
        catchRate: 0.01,
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        background: "cave", // Referência à Giant Chasm
        giveLevel: 1,
    },

    //Lendarios de Kalos
    {
        id: "xerneas",
        region: "kalos",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "forest",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "yveltal",
        region: "kalos",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "night",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "zygarde",
        region: "kalos",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "space",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    //Lendarios de Alola
    {
        id: "cosmog",
        region: "alola",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "night",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "solgaleo",
        region: "alola",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "forest",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "lunala",
        region: "alola",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "night",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "necrozma",
        region: "alola",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "space",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "tapuKoko",
        region: "alola",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "exploreHead1",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "tapuLele",
        region: "alola",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "exploreHead1",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "tapuBulu",
        region: "alola",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "exploreHead1",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "tapuFini",
        region: "alola",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "exploreHead1",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    //Lendarios de Galar
    {
        id: "zacian",
        region: "galar",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "forest",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },
   
    {
        id: "zamazenta",
        region: "galar",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "dimension",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "galarianArticuno",
        region: "galar",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "dimension",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },    

    {
        id: "galarianZapdos",
        region: "galar",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "dimension",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },   

    {
        id: "galarianMoltres",
        region: "galar",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "dimension",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },  

    {
        id: "regieleki",
        region: "galar",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "dimension",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "regidrago",
        region: "galar",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "dimension",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },  

    {
        id: "calyrex",
        region: "galar",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "dimension",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "glastrier",
        region: "galar",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "snow",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },  

    {
        id: "spectrier",
        region: "galar",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "night",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },  

    {
        id: "kubfu",
        region: "galar",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "gym",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },  

    {
        id: "urshifu",
        region: "galar",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "gym",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    }, 

    //Lendarios de Hisui  
    {
        id: "enamorus",
        region: "hisui",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "forest",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

        //Lendarios de Paldea  
    {
        id: "koraidon",
        region: "paldea",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "forest",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "miraidon",
        region: "paldea",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "forest",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "woChien",
        region: "paldea",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "forest",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "chienPao",
        region: "paldea",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "snow",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },   

    {
        id: "tingLu",
        region: "paldea",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "mountain",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "chiYu",
        region: "paldea",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "volcano",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },

    {
        id: "ogerpon",
        region: "paldea",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "forest",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    }, 

    {
        id: "terapagos",
        region: "paldea",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 2,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 2.0,
        damageMultiplier: 5.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 300,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 600, // tier4difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.01,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            { itemId: "goldenBottleCap", amount: 1, chance: 0.75 },
            { itemId: "blackApricorn", amount: 1, chance: 0.05 },
        ],
        // Background da área de batalha
        background: "forest",
        // Nível com que o Pokémon é dado ao jogador ao capturar
        giveLevel: 1,
    },
        
    // ── Exemplo de como adicionar o próximo ──────────────────────────────────
    // {
    //     id: "lugia",
    //     unlockCost: 3,
    //     windowMs: 72 * 60 * 60 * 1000,
    //     hpMultiplier: 2.0,
    //     damageMultiplier: 2.0,
    //     battleLevel: 70,
    //     difficulty: 200,
    //     catchRate: 1.0,
    //     drops: [{ itemId: "mysticWater", amount: 1, chance: 1.0 }],
    //     background: "ocean",
    //     giveLevel: 70,
    // },
];

// ---------------------------------------------------------------------------
// 2. CONSTANTES INTERNAS
// ---------------------------------------------------------------------------

const LEGENDS_APRICORN_ID   = "blackApricorn";

// Regiões disponíveis no menu de seleção
const LEGENDS_REGIONS = [
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
    { id: "gen10",  name: "Gen 10", color: "#555555", icon: "⏳", comingSoon: true },
];
const LEGENDS_AREA_PREFIX   = "legendsBattle_";   // ex: "legendsBattle_mewtwo"
const LEGENDS_SAVE_KEY      = "legendsData";

// Estado interno — região atualmente selecionada
var _legendsCurrentRegion   = null;

// ---------------------------------------------------------------------------
// 3. INICIALIZAÇÃO DO SAVE
// Chamado por registerLegends() — garante que saved.legendsData existe
// ---------------------------------------------------------------------------

function initLegendsData() {
    if (!saved[LEGENDS_SAVE_KEY]) {
        saved[LEGENDS_SAVE_KEY] = {};
    }
    LEGENDS_LIST.forEach(function(legend) {
        if (!saved[LEGENDS_SAVE_KEY][legend.id]) {
            saved[LEGENDS_SAVE_KEY][legend.id] = {
                unlockedAt: null,   // timestamp ms | null = nunca desbloqueado
                defeatCount: 0,     // vitórias acumuladas (para futura escala)
            };
        }
    });
}

// ---------------------------------------------------------------------------
// 4. REGISTRO DAS ÁREAS DE BATALHA
// Injeta uma área do tipo "wild" em areas{} para cada lendário.
// A área usa spawns fixos (só o lendário) e encounterEffect para drops/captura.
// ---------------------------------------------------------------------------

function registerLegendAreas() {
    LEGENDS_LIST.forEach(function(legend) {
        var areaId = LEGENDS_AREA_PREFIX + legend.id;

        areas[areaId] = {
            id: areaId,
            name: format(legend.id),
            type: "wild",
            background: legend.background || "cave",
            difficulty: legend.difficulty,
            level: legend.battleLevel,
            // explore.js lê spawns.common / spawns.rare — formato obrigatório
            spawns: { rare: [pkmn[legend.id]] },
            trainer: false,
            reward: [],
            itemReward: {},
            defeated: false,
            hpPercentage: undefined,

            // Flag customizada para o sistema Legends identificar esta área
            isLegendsBattle: true,
            legendId: legend.id,

            // Modificadores aplicados apenas durante a batalha
            legendHpMultiplier:     legend.hpMultiplier,
            legendDmgMultiplier:    legend.damageMultiplier,

            // Chamado pelo explore.js ao derrotar o inimigo (hook padrão de encounterEffect)
            encounterEffect: function() {
                _onLegendDefeated(legend.id);
            },
        };
    });
}

// ---------------------------------------------------------------------------
// 5. LÓGICA DE DERROTA / RECOMPENSAS
// ---------------------------------------------------------------------------

function _onLegendDefeated(legendId) {
    var legend = _getLegendConfig(legendId);
    if (!legend) return;

    var saveData = saved[LEGENDS_SAVE_KEY][legendId];
    saveData.defeatCount = (saveData.defeatCount || 0) + 1;

    // Captura o Pokémon se taxa de captura for atingida
    // O leaveCombat detecta newPokemon=true e decide o que exibir (New!/IVs Up!/etc)
    if (Math.random() < legend.catchRate) {
        if (pkmn[legendId]) {
            pkmn[legendId].newPokemon = true;
        }
    }

    // Drops de itens
    legend.drops.forEach(function(drop) {
        if (Math.random() < drop.chance) {
            if (item[drop.itemId]) {
                item[drop.itemId].got = (item[drop.itemId].got || 0) + drop.amount;
                if (item[drop.itemId].newItem !== undefined) {
                    item[drop.itemId].newItem++;
                }
            }
        }
    });

}

// ---------------------------------------------------------------------------
// 6. UNLOCK / COOLDOWN
// ---------------------------------------------------------------------------

/**
 * Tenta desbloquear um lendário gastando Black Apricorns.
 * Retorna true em sucesso, false se sem recursos ou já ativo.
 */
function tryUnlockLegend(legendId) {
    var legend = _getLegendConfig(legendId);
    if (!legend) return false;

    var saveData = saved[LEGENDS_SAVE_KEY][legendId];
    var cost     = legend.unlockCost;

    // Verifica se ainda está dentro da janela ativa
    if (_isLegendActive(legendId)) return false;

    // Verifica recursos
    if (!item[LEGENDS_APRICORN_ID] || (item[LEGENDS_APRICORN_ID].got || 0) < cost) {
        return false;
    }

    // Desconta e desbloqueia
    item[LEGENDS_APRICORN_ID].got -= cost;
    saveData.unlockedAt = Date.now();

    if (typeof saveGame === "function") saveGame();
    return true;
}

/** Retorna true se a janela de 72h ainda está aberta */
function _isLegendActive(legendId) {
    var legend   = _getLegendConfig(legendId);
    var saveData = saved[LEGENDS_SAVE_KEY] && saved[LEGENDS_SAVE_KEY][legendId];
    if (!legend || !saveData || saveData.unlockedAt === null) return false;
    return (Date.now() - saveData.unlockedAt) < legend.windowMs;
}

/** Retorna ms restantes na janela, ou 0 se expirado/inativo */
function _legendRemainingMs(legendId) {
    var legend   = _getLegendConfig(legendId);
    var saveData = saved[LEGENDS_SAVE_KEY] && saved[LEGENDS_SAVE_KEY][legendId];
    if (!legend || !saveData || saveData.unlockedAt === null) return 0;
    var elapsed = Date.now() - saveData.unlockedAt;
    return Math.max(0, legend.windowMs - elapsed);
}

/** Formata ms em "XXh XXm XXs" */
function _formatLegendTimer(ms) {
    if (ms <= 0) return "Expired";
    var totalSec = Math.floor(ms / 1000);
    var h  = Math.floor(totalSec / 3600);
    var m  = Math.floor((totalSec % 3600) / 60);
    var s  = totalSec % 60;
    return h + "h " + _pad(m) + "m " + _pad(s) + "s";
}

function _pad(n) { return n < 10 ? "0" + n : "" + n; }

function _getLegendConfig(legendId) {
    for (var i = 0; i < LEGENDS_LIST.length; i++) {
        if (LEGENDS_LIST[i].id === legendId) return LEGENDS_LIST[i];
    }
    return null;
}

// ---------------------------------------------------------------------------
// 7. UI — MODAL DO MODO LEGENDS
// ---------------------------------------------------------------------------

var _legendsTimerInterval = null;

function openLegendsMenu() {
    _legendsCurrentRegion = null;
    _openLegendsModal(_buildLegendsRegionHTML());
}

function openLegendsRegion(regionId) {
    _legendsCurrentRegion = regionId;
    _openLegendsModal(_buildLegendsHTML(regionId));
    _legendsTimerInterval = setInterval(_updateLegendsTimers, 1000);
    _bindLegendCardEvents();
}

function _openLegendsModal(html) {
    // Para timer anterior se existir
    if (_legendsTimerInterval) {
        clearInterval(_legendsTimerInterval);
        _legendsTimerInterval = null;
    }

    var existing = document.getElementById("legends-modal");
    if (existing) existing.remove();

    var modal = document.createElement("div");
    modal.id  = "legends-modal";
    modal.className = "legends-modal-overlay";
    modal.innerHTML = html;
    document.body.appendChild(modal);

    modal.addEventListener("click", function(e) {
        if (e.target === modal) closeLegendsMenu();
    });
}

function closeLegendsMenu() {
    var modal = document.getElementById("legends-modal");
    if (modal) modal.remove();
    if (_legendsTimerInterval) {
        clearInterval(_legendsTimerInterval);
        _legendsTimerInterval = null;
    }
}

function _buildLegendsRegionHTML() {
    var apricornCount = _getApricornCount();

    var regionsHTML = LEGENDS_REGIONS.map(function(region) {
        // Conta lendários disponíveis e ativos nesta região
        var legendsInRegion = LEGENDS_LIST.filter(function(l) { return l.region === region.id; });
        var activeCount     = legendsInRegion.filter(function(l) { return _isLegendActive(l.id); }).length;
        var total           = legendsInRegion.length;
        var comingSoon      = region.comingSoon || total === 0;

        var badgeHTML = activeCount > 0
            ? '<span class="legends-region-badge">' + activeCount + ' active</span>'
            : '';

        return [
            '<div class="legends-region-card' + (comingSoon ? ' legends-region-card--soon' : '') + '" ',
                comingSoon ? '' : 'onclick="openLegendsRegion(\'' + region.id + '\')"',
                'style="--region-color:' + region.color + '">',
                '<span class="legends-region-icon">' + region.icon + '</span>',
                '<div class="legends-region-info">',
                    '<span class="legends-region-name">' + region.name + '</span>',
                    comingSoon
                        ? '<span class="legends-region-count legends-region-soon-text">Coming Soon</span>'
                        : '<span class="legends-region-count">' + total + ' Legendary Pokémon</span>',
                '</div>',
                badgeHTML,
                comingSoon ? '' : '<span class="legends-region-arrow">›</span>',
            '</div>',
        ].join('');
    }).join('');

    return [
        '<div class="legends-panel">',
            '<div class="legends-header">',
                '<div class="legends-title-wrap">',
                    '<span class="legends-icon">⚔</span>',
                    '<span class="legends-title">Legends</span>',
                '</div>',
                '<button class="legends-close-btn" onclick="closeLegendsMenu()">✕</button>',
            '</div>',
            '<div class="legends-subtitle">Choose a region to challenge its Legendary Pokémon</div>',
            '<div class="legends-apricorn-count">',
            '<img src="img/items/' + LEGENDS_APRICORN_ID + '.png" onerror="this.style.display=\'none\'" class="legends-apricorn-icon">',
                //'<img src="img/items/' + LEGENDS_APRICORN_ID + '.png" onerror="this.style.display='none," class="legends-apricorn-icon">',
                '<span id="legends-apricorn-display">',
                    apricornCount + ' Black Apricorn' + (apricornCount !== 1 ? 's' : ''),
                '</span>',
            '</div>',
            '<div class="legends-region-grid">',
                regionsHTML,
            '</div>',
        '</div>',
    ].join('');
}

function _buildLegendsHTML(regionId) {
    var regionConfig = LEGENDS_REGIONS.find(function(r) { return r.id === regionId; });
    var regionName   = regionConfig ? regionConfig.name : regionId;
    var filtered     = LEGENDS_LIST.filter(function(l) { return l.region === regionId; });
    var cardsHTML    = filtered.map(function(legend) {
        return _buildLegendCard(legend);
    }).join("");

    if (!cardsHTML) {
        cardsHTML = '<div style="text-align:center;padding:20px;opacity:0.6">No Legendary Pokémon in this region yet.</div>';
    }

    return [
        '<div class="legends-panel">',
            '<div class="legends-header">',
                '<div class="legends-title-wrap">',
                    '<button class="legends-back-btn" onclick="openLegendsMenu()">&#8249;</button>',
                    '<span class="legends-icon">&#9876;</span>',
                    '<span class="legends-title">' + regionName + '</span>',
                '</div>',
                '<button class="legends-close-btn" onclick="closeLegendsMenu()">&#x2715;</button>',
            '</div>',
            '<div class="legends-subtitle">Spend Black Apricorns to challenge Legendary Pokemon</div>',
            '<div class="legends-apricorn-count">',
                '<img src="img/items/' + LEGENDS_APRICORN_ID + '.png" onerror="this.style.display=\'none\'" class="legends-apricorn-icon">',
                //'<img src="img/items/' + LEGENDS_APRICORN_ID + '.png" onerror="this.style.display='none'" class="legends-apricorn-icon">',
                //`<img src="img/items/${LEGENDS_APRICORN_ID}.png" onerror="this.style.display='none'" class="legends-apricorn-icon">`,
                '<span id="legends-apricorn-display">',
                    _getApricornCount() + ' Black Apricorn' + (_getApricornCount() !== 1 ? 's' : ''),
                '</span>',
            '</div>',
            '<div class="legends-grid">',
                cardsHTML,
            '</div>',
        '</div>',
    ].join("");
}

function _buildLegendCard(legend) {
    var isActive   = _isLegendActive(legend.id);
    var remaining  = _legendRemainingMs(legend.id);
    var pkmnName   = (pkmn[legend.id] && pkmn[legend.id].rename) ? pkmn[legend.id].rename : format(legend.id);
    var pkmnType   = (pkmn[legend.id] && pkmn[legend.id].type) ? pkmn[legend.id].type[0] : "psychic";
    var typeColor  = (typeof returnTypeColor === "function") ? returnTypeColor(pkmnType) : "#a040a0";

    var statusClass   = isActive ? "legend-card--active" : "legend-card--locked";
    var timerId       = "legend-timer-" + legend.id;

    // Sprite path (segue padrão do jogo)
    var spriteSrc = "/img/pkmn/sprite/" + legend.id + ".png";

    // Texto do botão e estado
        var btnLabel, btnDisabled, btnClass;
    if (isActive) {
        var isFighting = saved.currentArea === (LEGENDS_AREA_PREFIX + legend.id);
        var inOtherBattle = saved.currentArea !== undefined && !isFighting;

        if (isFighting) {
            btnLabel    = "↩ Return to Battle";
            btnDisabled = "";
            btnClass    = "legend-btn legend-btn--battle";
        } else if (inOtherBattle) {
            btnLabel    = "⚔ Termine a batalha em andamento primeiro!";
            btnDisabled = "disabled";
            btnClass    = "legend-btn legend-btn--disabled";
        } else {
            btnLabel    = "▶ Battle!";
            btnDisabled = "";
            btnClass    = "legend-btn legend-btn--battle";
        }
    } else {
        var hasEnough = _getApricornCount() >= legend.unlockCost;
        btnLabel    = "🍎 Unlock (" + legend.unlockCost + " Black Apricorn)";
        btnDisabled = hasEnough ? "" : "disabled";
        btnClass    = "legend-btn legend-btn--unlock" + (hasEnough ? "" : " legend-btn--disabled");
    }

    return [
        '<div class="legend-card ' + statusClass + '" ',
            'data-legend-id="' + legend.id + '" ',
            'style="--legend-type-color:' + typeColor + '">',

            // Sprite (escurecido se não ativo)
            '<div class="legend-card__sprite-wrap">',
                '<img class="legend-card__sprite" src="' + spriteSrc + '" ',
                    'onerror="this.src=\'img/pkmn/sprite/missingno.png\'" ',
                    'alt="' + pkmnName + '">',
                isActive ? '' : '<div class="legend-card__lock-overlay"><span class="legend-card__lock-icon">🔒</span></div>',
            '</div>',

            // Info
            '<div class="legend-card__info">',
                '<div class="legend-card__name">' + pkmnName + '</div>',
                '<div class="legend-card__type" style="background:' + typeColor + '88;color:' + typeColor + '">' + _capitalize(pkmnType) + '</div>',
                '<div class="legend-card__stats">',
                    '<span>Lvl ' + legend.battleLevel + '</span>',
                    '<span>HP ×' + legend.hpMultiplier + '</span>',
                    '<span>DMG ×' + legend.damageMultiplier + '</span>',
                '</div>',

                // Timer (só aparece quando ativo)
                '<div class="legend-card__timer" id="' + timerId + '" style="' + (isActive ? '' : 'display:none') + '">',
                    '⏱ ' + _formatLegendTimer(remaining),
                '</div>',

                // Drops preview
                '<div class="legend-card__drops">',
                    _buildDropsPreview(legend),
                '</div>',

                // Botão
                '<button class="' + btnClass + '" ' + btnDisabled + ' ',
                    'data-legend-id="' + legend.id + '" ',
                    'onclick="_handleLegendCardBtn(this)">',
                    btnLabel,
                '</button>',
            '</div>',
        '</div>',
    ].join("");
}

function _buildDropsPreview(legend) {
    var parts = ['<span class="legend-drops-label">Drops: </span>'];
    legend.drops.forEach(function(drop) {
        var name = item[drop.itemId] && item[drop.itemId].rename ? item[drop.itemId].rename : format(drop.itemId);
        parts.push(
            '<span class="legend-drop-chip">',
                '<img src="img/items/' + drop.itemId + '.png" onerror="this.style.display=\'none\'" class="legend-drop-icon">',
                name,
                (drop.chance < 1 ? ' (' + Math.round(drop.chance * 100) + '%)' : ''),
            '</span>'
        );
    });
    // Captura
    parts.push(
        '<span class="legend-drop-chip legend-drop-chip--catch">',
            '⭐ Catch (' + Math.round(_getLegendConfig(legend.id).catchRate * 100) + '%)',
        '</span>'
    );
    return parts.join("");
}

// ---------------------------------------------------------------------------
// 8. EVENTOS DOS CARDS
// ---------------------------------------------------------------------------

function _handleLegendCardBtn(btn) {
    var legendId = btn.getAttribute("data-legend-id");
    if (!legendId) return;

    var isActive   = _isLegendActive(legendId);
    var isFighting = isActive && 
                     (saved.currentArea === (LEGENDS_AREA_PREFIX + legendId) );
                      //saved.lastAreaJoined === (LEGENDS_AREA_PREFIX + legendId));

    if (isActive && isFighting) {
        closeLegendsMenu();
        // Fecha qualquer menu que esteja aberto por cima da batalha
        document.getElementById("pokedex-menu").style.display    = "none";
        document.getElementById("item-menu").style.display       = "none";
        document.getElementById("team-menu").style.display       = "none";
        document.getElementById("settings-menu").style.display   = "none";
        document.getElementById("guide-menu").style.display      = "none";
        document.getElementById("genetics-menu").style.display   = "none";
        document.getElementById("shop-menu").style.display       = "none";
        document.getElementById("dimension-menu").style.display  = "none";
        document.getElementById("dictionary-menu").style.display = "none";
        document.getElementById("explore-menu").style.display    = "none";
        // Restaura tela de batalha
        document.getElementById("content-explore").style.display = "flex";
        document.getElementById("menu-button-parent").style.display = "flex";
        document.getElementById("menu-button").classList.remove("menu-button-open");
    } else if (isActive) {
        _startLegendBattle(legendId);
    } else {
        _showLegendUnlockConfirm(legendId);
    }
}

function _showLegendUnlockConfirm(legendId) {
    var legend   = _getLegendConfig(legendId);
    var pkmnName = (pkmn[legendId] && pkmn[legendId].rename) ? pkmn[legendId].rename : format(legendId);
    var have     = _getApricornCount();

    if (have < legend.unlockCost) {
        _showLegendToast("Not enough Black Apricorns! (Need " + legend.unlockCost + ", have " + have + ")", "error");
        return;
    }

    // Fecha o modal antes de abrir o tooltip, evitando conflito de z-index
    closeLegendsMenu();

    document.getElementById("tooltipTop").style.display = "none";
    document.getElementById("tooltipTitle").innerHTML = "⚔ Legends";
    document.getElementById("tooltipMid").innerHTML = `
        <div style="display:flex; flex-direction:column; align-items:center; gap:10px; padding:10px 0">
            <img src="img/pkmn/sprite/${legendId}.png" style="width:64px; image-rendering:pixelated">
            <div style="font-size:1rem; font-weight:700">${pkmnName}</div>
            <div style="font-size:0.85rem; opacity:0.8; text-align:center">
                Spend <strong>${legend.unlockCost} Black Apricorn(s)</strong> to unlock ${pkmnName} for <strong>72 hours</strong>?
            </div>
            <div style="font-size:0.8rem; opacity:0.6">You have: ${have} Black Apricorn(s)</div>
        </div>
    `;
    document.getElementById("tooltipBottom").innerHTML = `
        <div style="display:flex; width:100%; gap:8px; padding:4px">
            <div onclick="_confirmLegendUnlock('${legendId}')" 
                 class="custom-challenge-button" style="background:#60BE58; flex:1; cursor:pointer">
                Confirm
            </div>
            <div onclick="closeTooltip(); openLegendsMenu();" 
                 class="custom-challenge-button" style="background:#D3425F; flex:1; cursor:pointer">
                Cancel
            </div>
        </div>
    `;
    openTooltip();
}

function _confirmLegendUnlock(legendId) {
    closeTooltip();
    var pkmnName = (pkmn[legendId] && pkmn[legendId].rename) ? pkmn[legendId].rename : format(legendId);
    var success = tryUnlockLegend(legendId);
    if (success) {
        closeLegendsMenu();
        openLegendsMenu();
        _showLegendToast(pkmnName + " unlocked! 72 hours remaining.", "success");
    } else {
        _showLegendToast("Could not unlock. Check your Black Apricorns.", "error");
    }
}

function _startLegendBattle(legendId) {
    
    var areaId = LEGENDS_AREA_PREFIX + legendId;

    if (!areas[areaId]) {
        _showLegendToast("Battle area not found. Try reloading.", "error");
        return;
    }

    // Bloqueia se já estiver em batalha (Wild, VS, Frontier, etc.)
    if (saved.currentArea !== undefined) {
        _showLegendToast("Finish your current battle before challenging a Legend!", "error");
        return;
    }

    closeLegendsMenu();


    document.getElementById("menu-button").classList.remove("menu-button-open");

    // Seta buffer e abre seleção de time — mesmo padrão das outras áreas
    saved.currentAreaBuffer = areaId;
    saved.currentArea       = areaId;
    saved.lastAreaJoined    = areaId;
    areas[areaId].hpPercentage = undefined;

    document.getElementById("preview-team-exit").style.display = "flex";
    document.getElementById("team-menu").style.zIndex = "50";
    document.getElementById("team-menu").style.display = "flex";
    document.getElementById("menu-button-parent").style.display = "none";
    document.getElementById("explore-menu").style.display = "none";
    document.getElementById("training-menu").style.display = "none";
    document.getElementById("vs-menu").style.display = "none";      
    document.getElementById("gyms-menu").style.display = "none";    
    
    updatePreviewTeam();
    afkSeconds = 0;
}

// ---------------------------------------------------------------------------
// 9. INSPECT (clique direito / long press) — abre card de info padrão
// ---------------------------------------------------------------------------

function _bindLegendCardEvents() {
    var cards = document.querySelectorAll(".legend-card");
    cards.forEach(function(card) {
        var legendId  = card.getAttribute("data-legend-id");
        var pressTimer = null;

        // Long press (mobile)
        card.addEventListener("touchstart", function(e) {
            pressTimer = setTimeout(function() {
                _openLegendInspect(legendId);
            }, 500);
        }, { passive: true });

        card.addEventListener("touchend", function() {
            if (pressTimer) { clearTimeout(pressTimer); pressTimer = null; }
        });

        card.addEventListener("touchmove", function() {
            if (pressTimer) { clearTimeout(pressTimer); pressTimer = null; }
        });

        // Clique direito (desktop)
        card.addEventListener("contextmenu", function(e) {
            e.preventDefault();
            _openLegendInspect(legendId);
        });
    });
}

function _openLegendInspect(legendId) {
    closeLegendsMenu();
    if (typeof tooltipData === "function") {
        tooltipData('dictionaryPkmn', legendId);
    }
}

// ---------------------------------------------------------------------------
// 10. ATUALIZAÇÃO DOS TIMERS (roda a cada 1s enquanto o menu estiver aberto)
// ---------------------------------------------------------------------------

function _updateLegendsTimers() {
    LEGENDS_LIST.forEach(function(legend) {
        var timerId = "legend-timer-" + legend.id;
        var timerEl = document.getElementById(timerId);
        if (!timerEl) return;

        var remaining = _legendRemainingMs(legend.id);
        var isActive  = remaining > 0;

        if (isActive) {
            timerEl.style.display = "";
            timerEl.textContent   = "⏱ " + _formatLegendTimer(remaining);
        } else {
            timerEl.style.display = "none";
            // Se o timer expirou, reconstrói o card para reflectir o estado locked
            var card = document.querySelector('.legend-card[data-legend-id="' + legend.id + '"]');
            if (card && card.classList.contains("legend-card--active")) {
                closeLegendsMenu();
                openLegendsMenu();
            }
        }
    });

    // Atualiza contagem de apricorns
    var apricornDisplay = document.getElementById("legends-apricorn-display");
    if (apricornDisplay) {
        var count = _getApricornCount();
        apricornDisplay.textContent = count + " Black Apricorn" + (count !== 1 ? "s" : "");
    }
}

// ---------------------------------------------------------------------------
// 11. UTILITÁRIOS INTERNOS
// ---------------------------------------------------------------------------

function _getApricornCount() {
    if (item && item[LEGENDS_APRICORN_ID]) {
        return item[LEGENDS_APRICORN_ID].got || 0;
    }
    return 0;
}

function _capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/** Toast de feedback leve (não bloqueia o jogo) */
function _showLegendToast(msg, type) {
    var existing = document.getElementById("legends-toast");
    if (existing) existing.remove();

    var toast = document.createElement("div");
    toast.id  = "legends-toast";
    toast.className = "legends-toast legends-toast--" + (type || "info");
    toast.textContent = msg;
    document.body.appendChild(toast);

    setTimeout(function() {
        toast.classList.add("legends-toast--fade");
        setTimeout(function() { toast.remove(); }, 500);
    }, 2500);
}

// ---------------------------------------------------------------------------
// 12. INTEGRAÇÃO COM save.js
// As funções legendsSave() e legendsLoad() são chamadas dentro de
// saveGame() e loadGame() em save.js (veja instruções de integração).
// ---------------------------------------------------------------------------

function legendsSave(dataObj) {
    // dataObj é o objeto que save.js serializa — injeta legendsData nele
    dataObj[LEGENDS_SAVE_KEY] = JSON.parse(JSON.stringify(saved[LEGENDS_SAVE_KEY] || {}));
}

function legendsLoad(dataObj) {
    // dataObj é o objeto parseado do localStorage — restaura legendsData
    if (dataObj[LEGENDS_SAVE_KEY]) {
        saved[LEGENDS_SAVE_KEY] = dataObj[LEGENDS_SAVE_KEY];
    }
    // Garante que novos lendários adicionados após o save existam
    initLegendsData();
}

// ---------------------------------------------------------------------------
// 13. PONTO DE ENTRADA
// Chamado uma vez após todos os outros scripts carregarem (via script.js ou
// diretamente no final do index.html).
// ---------------------------------------------------------------------------

function registerLegends() {
    initLegendsData();
    registerLegendAreas();
    console.log("[Legends] Sistema inicializado. Lendários registrados:", LEGENDS_LIST.map(function(l){ return l.id; }));
}
