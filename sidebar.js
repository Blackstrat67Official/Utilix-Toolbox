// Database dei tool disponibili (ora include il campo "category")
const toolsList = [
    {
        title: "UUID Generator",
        url: "tools/uuid_generator.html",
        icon: "key",
        color: "#a8c7fa",
        tooltip: "Genera identificatori univoci",
        category: "Sviluppo"
    },
    {
        title: "JSON to YAML",
        url: "tools/json_to_yaml.html",
        icon: "data_object",
        color: "#fbbc04", // Giallo
        tooltip: "Converti file JSON in formato YAML",
        category: "Convertitori"
    },
    {
        title: "YAML to JSON",
        url: "tools/yaml_to_json.html",
        icon: "segment",
        color: "#ff5252", // Rosso corallo
        tooltip: "Converti file YAML in formato JSON",
        category: "Convertitori"
    },
    {
        title: "JWT Decoder",
        url: "tools/jwt_decoder.html",
        icon: "token",
        color: "#d7aefb", // Viola chiaro
        tooltip: "Decodifica header e payload dei token JWT",
        category: "Sicurezza"
    },
    {
        title: "Hash Generator",
        url: "tools/hash_generator.html",
        icon: "fingerprint",
        color: "#81c995", // Verde menta
        tooltip: "Calcola MD5, SHA-1, SHA-256 in tempo reale",
        category: "Sicurezza"
    },
    {
        title: "Cron Generator",
        url: "tools/cron_generator.html",
        icon: "schedule",
        color: "#6dd68f", // Verde
        tooltip: "Genera e spiega espressioni Cron",
        category: "Dati & Utility"
    },
    {
        title: "SQL Formatter",
        url: "tools/sql_formatter.html",
        icon: "database",
        color: "#8ab4f8", // Blu
        tooltip: "Formatta e indenta query SQL",
        category: "Database Utilities"
    },
    {
        title: "Lorem Ipsum",
        url: "tools/lorem_ipsum.html",
        icon: "format_align_left",
        color: "#fbbc04", // Giallo
        tooltip: "Genera testo riempitivo per layout",
        category: "Dati & Utility"
    },
    {
        title: "Case Converter",
        url: "tools/case_converter.html",
        icon: "match_case",
        color: "#64b5f6", // Azzurro
        tooltip: "Converti stringhe in camelCase, snake_case ecc.",
        category: "Testo"
    },
    {
        title: "Text Analyzer",
        url: "tools/text_analyzer.html",
        icon: "analytics",
        color: "#e6c229", // Giallo ocra
        tooltip: "Conta parole/byte e minimizza il testo",
        category: "Testo"
    },
    {
        title: "Password Generator",
        url: "tools/password_generator.html",
        icon: "password",
        color: "#f28b82", // Rosso/Rosa
        tooltip: "Genera password sicure personalizzabili",
        category: "Sicurezza"
    },
    {
        title: "XML Reader",
        url: "tools/xml_reader.html",
        icon: "data_object", // Icona coerente con i dati
        color: "#ff8a65",    // Colore arancione scuro
        tooltip: "Visualizza e formatta codice XML",
        category: "XML"      // Nuova macroarea
    },
    {
        title: "JSON Formatter",
        url: "tools/json_formatter.html",
        icon: "data_object",
        color: "#fbbc04",
        tooltip: "Formatta e convalida file JSON",
        category: "Sviluppo"
    },
    {
        title: "CSV to SQL",
        url: "tools/csv_to_sql.html",
        icon: "table_chart",
        color: "#4db6ac", // Verde acqua
        tooltip: "Genera CREATE TABLE e INSERT da file CSV/Excel",
        category: "Database Utilities"
    },
    {
        title: "JSON to SQL",
        url: "tools/json_to_sql.html",
        icon: "data_array",
        color: "#f06292", // Rosa scuro
        tooltip: "Converti array JSON in query relazionali",
        category: "Database Utilities"
    },
    {
        title: "SQL Explainer",
        url: "tools/sql_explainer.html",
        icon: "record_voice_over",
        color: "#ba68c8", // Viola
        tooltip: "Spiega le query SQL in linguaggio naturale",
        category: "Database Utilities"
    },
    {
        title: "Unix Epoch", url: "tools/unix_epoch.html", icon: "schedule", color: "#9575cd", tooltip: "Convertitore Timestamp e Date", category: "Tempo"
    },
    {
        title: "URL Parser", url: "tools/url_parser.html", icon: "link", color: "#4fc3f7", tooltip: "Analizza e modifica parametri URL", category: "Sviluppo"
    },
    {
        title: "Base64 Converter", url: "tools/base64_converter.html", icon: "code", color: "#aed581", tooltip: "Codifica/Decodifica testo in Base64", category: "Sviluppo"
    },
    {
        title: "Regex Tester", url: "tools/regex_tester.html", icon: "troubleshoot", color: "#ff8a65", tooltip: "Testa espressioni regolari live", category: "Sviluppo"
    },
    {
        title: "Box Shadow", url: "tools/box_shadow.html", icon: "layers", color: "#f06292", tooltip: "Generatore visivo di ombre CSS", category: "Design"
    },
    {
        title: "SVG Placeholder", url: "tools/svg_placeholder.html", icon: "image", color: "#ba68c8", tooltip: "Genera immagini segnaposto SVG", category: "Design"
    },
    {
        title: "Diff Checker", url: "tools/diff_checker.html", icon: "difference", color: "#e57373", tooltip: "Compara due testi (Trova differenze)", category: "Utility"
    },
    {
        title: "Regex Extractor", url: "tools/regex_extractor.html", icon: "data_exploration", color: "#ce93d8", tooltip: "Estrai email, IP e URL da testi lunghi", category: "Regex"
    },
    {
        title: "Regex Replacer", url: "tools/regex_replacer.html", icon: "find_replace", color: "#81c995", tooltip: "Sostituisci stringhe usando i Capture Groups", category: "Regex"
    },
    {
        title: "Regex Builder", url: "tools/regex_builder.html", icon: "construction", color: "#4fc3f7", tooltip: "Costruttore visivo a blocchi per Regex", category: "Regex"
    },
    {
        title: "Pattern Library", url: "tools/regex_cheatsheet.html", icon: "local_library", color: "#ffd54f", tooltip: "Libreria pronta all'uso di Regex comuni", category: "Regex"
    },
    {
        title: "API Tester", url: "tools/api_tester.html", icon: "api", color: "#f06292", tooltip: "Mini Postman per testare richieste HTTP", category: "Network"
    },
    {
        title: "HTTP Status", url: "tools/http_status.html", icon: "dns", color: "#4dd0e1", tooltip: "Ricerca rapida codici di stato HTTP", category: "Network"
    },
    {
        title: "MD to HTML", url: "tools/md_to_html.html", icon: "markdown", color: "#64b5f6", tooltip: "Preview ed esportazione Markdown", category: "Web Dev"
    },
    {
        title: "HTML Entities", url: "tools/html_entities.html", icon: "security", color: "#81c995", tooltip: "Encoder/Decoder per prevenire XSS", category: "Web Dev"
    },
    {
        title: "CSS Gradient", url: "tools/css_gradient.html", icon: "gradient", color: "#ba68c8", tooltip: "Costruttore visivo di sfumature CSS", category: "Design"
    },
    {
        title: "QR Code Maker", url: "tools/qr_generator.html", icon: "qr_code_2", color: "#e57373", tooltip: "Generatore istantaneo di QR Code", category: "Design"
    },
    {
        title: "Base Converter", url: "tools/base_converter.html", icon: "123", color: "#ffb74d", tooltip: "Convertitore Hex, Bin, Oct, Dec", category: "Matematica"
    },
    {
        title: "SQL Mock Data",
        url: "tools/sql_mock_data.html",
        icon: "science",
        color: "#ffb74d", // Arancione
        tooltip: "Genera dati fittizi realistici per testare DB",
        category: "Database Utilities"
    },
    {
        title: "SQL Translator",
        url: "tools/sql_translator.html",
        icon: "translate",
        color: "#64b5f6", // Azzurro
        tooltip: "Traduci sintassi tra MySQL, Postgres e SQL Server",
        category: "Database Utilities"
    },
    {
        title: "Gliph Manager",
        url: "tools/gliph_manager.html",
        icon: "keyboard",
        color: "#6dd68f",
        tooltip: "Gestore dei glifi per Minecraft",
        category: "Gaming"
    },
    {
        title: "Color Picker",
        url: "tools/color_picker.html",
        icon: "palette",
        color: "#f28b82",
        tooltip: "Seleziona e converti i colori",
        category: "Design"
    },
    { title: "Glassmorphism", url: "tools/glassmorphism.html", icon: "blur_on", color: "#81d4fa", tooltip: "Generatore effetto vetro", category: "Design" },
    { title: "Neumorphism", url: "tools/neumorphism.html", icon: "radio_button_unchecked", color: "#e0e0e0", tooltip: "Soft UI generator", category: "Design" },
    { title: "Blob Generator", url: "tools/blob_generator.html", icon: "water_drop", color: "#b39ddb", tooltip: "Generatore di forme fluide (border-radius)", category: "Design" },
    { title: "CSS Triangle", url: "tools/css_triangle.html", icon: "change_history", color: "#ff8a65", tooltip: "Genera triangoli in CSS puro", category: "Design" },
    { title: "CSS Filters", url: "tools/css_filters.html", icon: "filter_b_and_w", color: "#a5d6a7", tooltip: "Testa filtri immagine CSS", category: "Design" },
    { title: "Fluid Type", url: "tools/fluid_type.html", icon: "format_size", color: "#ffab91", tooltip: "Calcolatore font fluidi (clamp)", category: "Web Dev" },
    { title: "Flexbox Play", url: "tools/flexbox_play.html", icon: "view_column", color: "#ffd54f", tooltip: "Tester visuale Flexbox", category: "Web Dev" },
    { title: "CSS Cursors", url: "tools/css_cursors.html", icon: "mouse", color: "#90caf9", tooltip: "Galleria interattiva cursori CSS", category: "Web Dev" },
    { title: "Code Editor Generator", url: "tools/code_editor_component_generator.html", icon: "code", color: "#ffab91", tooltip: "Generatore di editor di codice personalizzati", category: "Web Dev" },
    { title: "Web Page Generator from Seed", url: "tools/seed_web_gen.html", icon: "code", color: "#ffab91", tooltip: "Generatore di pagine web da seed", category: "Web Dev" }
];

// Elementi DOM
const toolListContainer = document.getElementById('tool-list');
const searchBar = document.getElementById('search-bar');
const toolCounter = document.getElementById('tool-counter');
const tabBar = document.getElementById('tab-bar');
const toolContainer = document.getElementById('tool-container');
const welcomeScreen = document.getElementById('welcome-screen');

// Gestione dello stato dei tab
let openTabs = []; // Array di oggetti { tool: object, iframeId: string, tabId: string }
let activeTabId = null;

// Inizializza il contatore
toolCounter.innerText = `${toolsList.length} Tool Disponibili`;

// 1. RENDERING DELLA SIDEBAR (Card style)
function createToolElement(tool, isSearching) {
    const li = document.createElement('li');
    li.className = 'tool-item';
    
    let titleHtml = `<span class="tool-title">${tool.title}</span>`;
    if (isSearching) {
        titleHtml = `
            <div class="tool-title-container">
                <span class="tool-title">${tool.title}</span>
                <span class="tool-category-sub">(${tool.category})</span>
            </div>
        `;
    }

    li.innerHTML = `
        <span class="material-symbols-outlined" style="color: ${tool.color}">${tool.icon}</span>
        <div class="tool-content">
            ${titleHtml}
            <span class="tool-desc-inline">${tool.tooltip}</span>
        </div>
        <span class="tooltip">${tool.tooltip}</span>
    `;

    // Click handler apre un nuovo tab o lo attiva se già aperto
    li.addEventListener('click', () => openToolTab(tool));
    return li;
}

function renderTools(filterText = '') {
    toolListContainer.innerHTML = '';
    const isSearching = filterText.trim().length > 0;

    if (!isSearching) {
        const categories = [...new Set(toolsList.map(t => t.category))];
        categories.forEach(category => {
            const header = document.createElement('li');
            header.className = 'category-header';
            header.textContent = category;
            toolListContainer.appendChild(header);

            const categoryTools = toolsList.filter(t => t.category === category);
            categoryTools.forEach(tool => {
                toolListContainer.appendChild(createToolElement(tool, false));
            });
        });
    } else {
        const filteredTools = toolsList.filter(tool => 
            tool.title.toLowerCase().includes(filterText.toLowerCase()) || 
            tool.tooltip.toLowerCase().includes(filterText.toLowerCase()) ||
            tool.category.toLowerCase().includes(filterText.toLowerCase())
        );

        if (filteredTools.length === 0) {
            toolListContainer.innerHTML = '<li style="padding: 10px; color: #777; text-align: center; font-size: 0.9rem;">Nessun tool trovato</li>';
            return;
        }
        filteredTools.forEach(tool => {
            toolListContainer.appendChild(createToolElement(tool, true));
        });
    }
}

// 2. GESTIONE TAB E IFRAME
function openToolTab(tool) {
    // Genera ID unici basati sul titolo (rimuove spazi)
    const baseId = tool.title.replace(/\s+/g, '-').toLowerCase();
    const tabId = `tab-${baseId}`;
    const iframeId = `iframe-${baseId}`;

    // Controlla se il tab è già aperto
    const existingTab = openTabs.find(t => t.tabId === tabId);
    
    if (existingTab) {
        // Se è già aperto, lo rende attivo
        activateTab(tabId, iframeId);
        return;
    }

    // Se non è aperto, crea i nuovi elementi HTML
    
    // 2a. Crea il Tab
    const tabEl = document.createElement('div');
    tabEl.className = 'tab';
    tabEl.id = tabId;
    tabEl.innerHTML = `
        <div class="tab-content">
            <span class="material-symbols-outlined tab-icon" style="color: ${tool.color}">${tool.icon}</span>
            <span class="tab-title">${tool.title}</span>
        </div>
        <div class="tab-close" title="Chiudi (Alt+Click)">
            <span class="material-symbols-outlined">close</span>
        </div>
    `;

    // Event listeners per il tab
    tabEl.addEventListener('click', (e) => {
        // Se si clicca sulla X, chiudi, altrimenti attiva
        if (e.target.closest('.tab-close')) {
            closeToolTab(tabId, iframeId);
        } else {
            activateTab(tabId, iframeId);
        }
    });

    // Supporto per il click con la rotellina del mouse per chiudere (come VS Code)
    tabEl.addEventListener('auxclick', (e) => {
        if (e.button === 1) { // 1 = Rotellina del mouse
            closeToolTab(tabId, iframeId);
        }
    });

    tabBar.appendChild(tabEl);

    // 2b. Crea l'Iframe
    const iframeEl = document.createElement('iframe');
    iframeEl.src = tool.url;
    iframeEl.className = 'tool-frame';
    iframeEl.id = iframeId;
    iframeEl.title = tool.title;
    
    toolContainer.appendChild(iframeEl);

    // 2c. Registra nello stato
    openTabs.push({ tool, tabId, iframeId });
    
    // Attiva il nuovo tab
    activateTab(tabId, iframeId);
}

function activateTab(targetTabId, targetIframeId) {
    // Rimuove classe active da tutti i tab
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    // Rimuove classe active da tutti gli iframe (li nasconde)
    document.querySelectorAll('.tool-frame').forEach(f => f.classList.remove('active'));
    
    // Aggiunge classe active ai target selezionati
    const targetTab = document.getElementById(targetTabId);
    if(targetTab) {
        targetTab.classList.add('active');
        // Scrolla la barra dei tab per mostrare il tab attivo
        targetTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    }
    
    const targetIframe = document.getElementById(targetIframeId);
    if(targetIframe) targetIframe.classList.add('active');

    activeTabId = targetTabId;
    
    // Nasconde lo schermo di benvenuto se ci sono tab aperti
    updateWelcomeScreen();
}

function closeToolTab(tabId, iframeId) {
    // Rimuovi dal DOM
    const tabEl = document.getElementById(tabId);
    const iframeEl = document.getElementById(iframeId);
    if (tabEl) tabEl.remove();
    if (iframeEl) iframeEl.remove();

    // Rimuovi dall'array
    const tabIndex = openTabs.findIndex(t => t.tabId === tabId);
    if (tabIndex > -1) {
        openTabs.splice(tabIndex, 1);
    }

    // Gestione di quale tab attivare dopo la chiusura
    if (openTabs.length === 0) {
        activeTabId = null;
    } else if (activeTabId === tabId) {
        // Se ho chiuso il tab attivo, attiva quello precedente (o il primo se era il primo)
        const newActiveIndex = tabIndex > 0 ? tabIndex - 1 : 0;
        const tabToActivate = openTabs[newActiveIndex];
        activateTab(tabToActivate.tabId, tabToActivate.iframeId);
    }
    
    updateWelcomeScreen();
}

function updateWelcomeScreen() {
    if (openTabs.length === 0) {
        welcomeScreen.style.display = 'flex';
    } else {
        welcomeScreen.style.display = 'none';
    }
}

// Inizializzazione
searchBar.addEventListener('input', (e) => renderTools(e.target.value));
document.addEventListener('DOMContentLoaded', () => renderTools());