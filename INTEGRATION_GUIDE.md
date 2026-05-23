# Guia de Integração — Modo Legends
> PokeChill v5.0 | Arquivos afetados: `index.html`, `save.js`, `styles.css`

---

## 1. `index.html` — 3 adições

### 1a. Carregar o CSS (no `<head>`, junto com os outros styles)

```html
<!-- Adicione DEPOIS do link para styles.css -->
<link rel="stylesheet" href="legends.css">
```

### 1b. Carregar o script (na lista de scripts, DEPOIS de `gyms.js` e ANTES de `explore.js`)

```html
<!-- Ordem correta: -->
<script src="gyms.js"></script>
<script src="legends.js"></script>   <!-- ← ADICIONE AQUI -->
<script src="teams.js"></script>
<script src="explore.js"></script>
```

### 1c. Botão no menu principal

Procure onde estão os outros botões do menu (Gyms, Arena, Frontier, etc.).
Adicione o botão do Legends no mesmo local, seguindo o mesmo padrão visual:

```html
<!-- Exemplo (adapte a classe/estrutura ao padrão existente do seu menu): -->
<button onclick="openLegendsMenu()" class="menu-btn">
    ⚔ Legends
</button>
```

> ⚠️ Use a mesma classe/estrutura dos outros botões do menu para manter consistência visual.

---

## 2. `save.js` — 2 adições (4 linhas no total)

### 2a. Dentro de `saveGame()` — salvar os dados Legends

Procure a linha onde `saveGame()` faz o `JSON.stringify` ou onde constrói o objeto a ser salvo.
Adicione a chamada `legendsSave()` passando o objeto de dados antes de salvar:

```js
// Dentro de saveGame(), ANTES do JSON.stringify final:
legendsSave(dataToSave);   // ← ADICIONE ESTA LINHA
```

Se `saveGame()` constrói o objeto de forma diferente (ex: salva propriedade a propriedade),
adicione manualmente:

```js
dataToSave.legendsData = JSON.parse(JSON.stringify(saved.legendsData || {}));
```

### 2b. Dentro de `loadGame()` — restaurar os dados Legends

Procure onde `loadGame()` parseia os dados do localStorage e restaura o `saved`.
Adicione a chamada `legendsLoad()` passando o objeto parseado:

```js
// Dentro de loadGame(), APÓS o JSON.parse dos dados salvos:
legendsLoad(parsedData);   // ← ADICIONE ESTA LINHA
```

Se `loadGame()` restaura propriedade a propriedade:

```js
if (parsedData.legendsData) {
    saved.legendsData = parsedData.legendsData;
}
initLegendsData(); // garante novos lendários adicionados após o save
```

---

## 3. `styles.css` — 1 adição (alternativa ao passo 1a)

Se preferir não criar um arquivo CSS separado, cole o conteúdo de `legends.css`
**no final** do `styles.css` existente.

---

## 4. `script.js` — 1 adição (inicialização)

Procure onde outros sistemas são inicializados após o carregamento (ex: onde
`registerGymLeaders()` é chamado).

Adicione:

```js
registerLegends();   // ← ADICIONE junto com os outros register* (registerGymLeaders, etc.)
```

Se `registerGymLeaders()` é chamado dentro de uma função de init (ex: `initGame()`
ou ao final de `loadGame()`), adicione `registerLegends()` no mesmo lugar.

---

## 5. Integração com o sistema de batalha (`explore.js`)

O `legends.js` tenta entrar na batalha via `initialiseArea(areaId)`.
Verifique como as outras áreas (Gyms, Frontier) iniciam a batalha e use
o mesmo padrão.

**Cenário A** — `explore.js` expõe `initialiseArea(id)` globalmente:
→ Nenhuma alteração necessária. Funciona automaticamente.

**Cenário B** — A navegação de área é feita por `saved.currentArea` + evento:
→ Substitua em `_startLegendBattle()` (legends.js linha ~192):

```js
saved.currentArea = areaId;
// Chame aqui a mesma função que os outros menus chamam para entrar em área
updateArea();   // ou initialiseArea() ou o nome correto no seu explore.js
```

---

## 6. Integração com os modificadores de HP/Dano

As áreas Legends têm `legendHpMultiplier` e `legendDmgMultiplier` como propriedades.
Para que funcionem, adicione em `explore.js` dentro de `setWildPkmn()` (ou equivalente
que define o HP do inimigo ao iniciar a batalha):

```js
// Exemplo de onde adicionar — procure onde wildHp é calculado:
var area = areas[saved.currentArea];
if (area && area.isLegendsBattle) {
    wildHp    *= area.legendHpMultiplier;    // dobra o HP
    wildDmg   *= area.legendDmgMultiplier;   // dobra o dano
    // Se o dano é calculado por move, aplique legendDmgMultiplier onde
    // o dano do inimigo é calculado.
}
```

> Se você preferir testar primeiro sem os multiplicadores, os valores de HP e dano
> base já serão altos pelo `difficulty: 200` (tier3 = ~398k HP). Os multiplicadores
> são um bônus adicional.

---

## 7. Checklist de verificação

- [ ] `legends.js` carrega sem erros no console
- [ ] `legends.css` aplica os estilos (painel abre ao clicar em "Legends")
- [ ] `registerLegends()` chamado — console mostra `[Legends] Sistema inicializado`
- [ ] Card do Mewtwo aparece bloqueado (sprite escurecido)
- [ ] Clicar em "Unlock" debita 3 Black Apricorns e mostra o timer
- [ ] Timer conta regressivamente a cada segundo
- [ ] "Battle!" inicia a luta normalmente
- [ ] Ao vencer, Mewtwo é capturado e Charcoal é adicionado
- [ ] Save/load preserva o estado do cooldown

---

## 8. Adicionando novos lendários no futuro

Edite apenas `LEGENDS_LIST` no topo de `legends.js`:

```js
const LEGENDS_LIST = [
    { id: "mewtwo", ... },  // já existente
    {
        id: "lugia",
        unlockCost: 3,
        windowMs: 72 * 60 * 60 * 1000,
        hpMultiplier: 2.0,
        damageMultiplier: 2.0,
        battleLevel: 70,
        difficulty: 200,
        catchRate: 1.0,
        drops: [{ itemId: "mysticWater", amount: 1, chance: 1.0 }],
        background: "ocean",
        giveLevel: 70,
    },
];
```

Só isso. O resto do sistema (área, UI, save, cooldown) é gerado automaticamente.
