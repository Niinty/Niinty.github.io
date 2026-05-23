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
        id: "mewtwo",
        // Custo em Black Apricorns para desbloquear
        unlockCost: 1,
        // Duração da janela de batalha em ms (72h)
        windowMs: 72 * 60 * 60 * 1000,
        // Multiplicadores de batalha (apenas durante a luta, não altera pkmn permanentemente)
        hpMultiplier: 3.0,
        damageMultiplier: 3.0,
        // Nível com que o lendário aparece na batalha
        battleLevel: 100,
        // Dificuldade da área (usa constantes do areasDictionary)
        difficulty: 200, // tier3difficulty — será sobrescrito se as constantes estiverem disponíveis
        // Taxa de captura ao vencer (1.0 = 100%)
        catchRate: 0.0,
        // Drops ao vencer: [{ itemId, amount, chance }] (chance 1.0 = sempre)
        drops: [
            //{ itemId: "charcoal", amount: 1, chance: 1.0 },
        ],
        // Background da área de batalha
        background: "cave",
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

const LEGENDS_APRICORN_ID   = "bottleCap";
const LEGENDS_AREA_PREFIX   = "legendsBattle_";   // ex: "legendsBattle_mewtwo"
const LEGENDS_SAVE_KEY      = "legendsData";

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
    // Remove modal anterior se existir
    var existing = document.getElementById("legends-modal");
    if (existing) existing.remove();

    var modal = document.createElement("div");
    modal.id  = "legends-modal";
    modal.className = "legends-modal-overlay";
    modal.innerHTML = _buildLegendsHTML();
    document.body.appendChild(modal);

    // Fecha ao clicar no overlay (fora do painel)
    modal.addEventListener("click", function(e) {
        if (e.target === modal) closeLegendsMenu();
    });

    // Inicia atualização dos timers a cada segundo
    _legendsTimerInterval = setInterval(_updateLegendsTimers, 1000);

    // Vincula eventos dos cards
    _bindLegendCardEvents();
}

function closeLegendsMenu() {
    var modal = document.getElementById("legends-modal");
    if (modal) modal.remove();
    if (_legendsTimerInterval) {
        clearInterval(_legendsTimerInterval);
        _legendsTimerInterval = null;
    }
}

function _buildLegendsHTML() {
    var cardsHTML = LEGENDS_LIST.map(function(legend) {
        return _buildLegendCard(legend);
    }).join("");

    return [
        '<div class="legends-panel">',
            '<div class="legends-header">',
                '<div class="legends-title-wrap">',
                    '<span class="legends-icon">⚔</span>',
                    '<span class="legends-title">Legends</span>',
                '</div>',
                '<button class="legends-close-btn" onclick="closeLegendsMenu()">✕</button>',
            '</div>',
            '<div class="legends-subtitle">Gaste suas Bottle Caps para desafiar um Pokémon lendário!</div>',
            '<div class="legends-apricorn-count">',
                '<img src="img/items/' + LEGENDS_APRICORN_ID + '.png" onerror="this.style.display=\'none\'" class="legends-apricorn-icon">',
                '<span id="legends-apricorn-display">',
                    _getApricornCount() + ' Bottle Cap' + (_getApricornCount() !== 1 ? 's' : ''),
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
        var isFighting = (saved.currentArea === (LEGENDS_AREA_PREFIX + legend.id) ||
                          saved.lastAreaJoined === (LEGENDS_AREA_PREFIX + legend.id)) &&
                          document.getElementById("content-explore")?.style.display === "flex";

        btnLabel    = isFighting ? "↩ Return to Battle" : "▶ Battle!";
        btnDisabled = "";
        btnClass    = "legend-btn legend-btn--battle";
    } else {
        var hasEnough = _getApricornCount() >= legend.unlockCost;
        btnLabel    = "🍎 Unlock (" + legend.unlockCost + " Bottle Cap)";
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
                     (saved.currentArea === (LEGENDS_AREA_PREFIX + legendId) ||
                      saved.lastAreaJoined === (LEGENDS_AREA_PREFIX + legendId));

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
        _showLegendToast("Sem Bottle Caps suficientes! (Necessita " + legend.unlockCost + ", Possui " + have + ")", "error");
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
                Consumir <strong>${legend.unlockCost} Bottle Caps(s)</strong> para desbloquear ${pkmnName} por <strong>72 horas</strong>?
            </div>
            <div style="font-size:0.8rem; opacity:0.6">Você tem: ${have} Bottle Caps</div>
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
        _showLegendToast(pkmnName + " Liberado! 72 hours restantes.", "sucesso");
    } else {
        _showLegendToast("Não foi possível desbloquear. Confira suas Bottle Caps.", "error");
    }
}

function _startLegendBattle(legendId) {
    var areaId = LEGENDS_AREA_PREFIX + legendId;
    if (!areas[areaId]) {
        _showLegendToast("Battle area not found. Try reloading.", "error");
        return;
    }

    closeLegendsMenu();
    // Fecha o menu principal sem toggle
    document.getElementById("menu-button").classList.remove("menu-button-open");

    // Animação de transição (mesmo padrão do botão "Fight Again" do jogo)
    if (typeof voidAnimation === "function") {
        voidAnimation("explore-transition", "exploreTransition 1s 1");
        document.getElementById("explore-transition").style.display = "flex";
    }

    setTimeout(function() {
        // Reseta HP para não herdar estado de batalha anterior
        areas[areaId].hpPercentage = undefined;

        // Seta área DENTRO do timeout — garante que nada sobrescreve antes do initialiseArea
        saved.currentArea       = areaId;
        saved.currentAreaBuffer = areaId;
        saved.lastAreaJoined    = areaId;

        // Mostra tela de batalha e esconde menus (igual ao Fight Again)
        document.getElementById("explore-menu").style.display    = "none";
        document.getElementById("vs-menu").style.display         = "none";
        document.getElementById("training-menu").style.display   = "none";
        document.getElementById("area-end").style.display        = "none";
        document.getElementById("content-explore").style.display = "flex";
        document.getElementById("menu-button-parent").style.display = "flex";

        if (typeof initialiseArea === "function") initialiseArea();
        if (typeof saveGame === "function") saveGame();

    }, 500);
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
        apricornDisplay.textContent = count + " Bottle Caps" + (count !== 1 ? "s" : "");
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

