// Deck data
const decks = [
    {
        id: 1,
        name: "Atraxa's Proliferate Power",
        commander: "Atraxa, Praetors' Voice",
        format: "commander",
        colors: ["W", "U", "B", "G"],
        cardCount: 100,
        budget: "$450",
        powerLevel: 8,
        description: "A powerful control deck that leverages Atraxa's proliferate ability to dominate the battlefield with planeswalkers and +1/+1 counters.",
        mainTheme: "Superfriends / +1/+1 Counters",
        keyCards: ["Doubling Season", "Atraxa, Praetors' Voice", "Deepglow Skate", "The Ozolith"],
        winConditions: ["Planeswalker ultimates", "Infect damage", "Commander damage"],
        lastUpdated: "2026-01-15",
        deckList: "https://archidekt.com/decks/example1"
    },
    {
        id: 2,
        name: "Krenko Goblin Horde",
        commander: "Krenko, Mob Boss",
        format: "commander",
        colors: ["R"],
        cardCount: 100,
        budget: "$180",
        powerLevel: 7,
        description: "Generate an overwhelming army of goblins and swarm your opponents. Fast, aggressive, and tons of fun.",
        mainTheme: "Tribal Aggro",
        keyCards: ["Krenko, Mob Boss", "Goblin Warchief", "Purphoros, God of the Forge", "Skirk Prospector"],
        winConditions: ["Combat damage", "Impact Tremors triggers", "Goblin Bombardment"],
        lastUpdated: "2026-01-10",
        deckList: "https://archidekt.com/decks/example2"
    },
    {
        id: 3,
        name: "Izzet Phoenix",
        commander: null,
        format: "modern",
        colors: ["U", "R"],
        cardCount: 60,
        budget: "$650",
        powerLevel: 9,
        description: "A tempo deck that uses cheap cantrips to fuel Arclight Phoenix and Thing in the Ice. Extremely explosive and consistent.",
        mainTheme: "Tempo / Spell Velocity",
        keyCards: ["Arclight Phoenix", "Thing in the Ice", "Ledger Shredder", "Galvanic Iteration"],
        winConditions: ["Phoenix beats", "Thing in the Ice flip", "Dragon's Rage Channeler"],
        lastUpdated: "2026-01-12",
        deckList: "https://www.moxfield.com/decks/example3"
    },
    {
        id: 4,
        name: "Esper Legends",
        commander: null,
        format: "standard",
        colors: ["W", "U", "B"],
        cardCount: 60,
        budget: "$120",
        powerLevel: 6,
        description: "Leverage legendary creatures and synergies to control the board and outvalue opponents.",
        mainTheme: "Midrange Control",
        keyCards: ["Ratadrabik of Urborg", "Dennick, Pious Apprentice", "Raffine, Scheming Seer", "The Wandering Emperor"],
        winConditions: ["Legendary creature beats", "Ratadrabik combo", "Planeswalker control"],
        lastUpdated: "2026-01-08",
        deckList: "https://www.moxfield.com/decks/example4"
    },
    {
        id: 5,
        name: "Greasefang Combo",
        commander: null,
        format: "pioneer",
        colors: ["W", "B"],
        cardCount: 60,
        budget: "$280",
        powerLevel: 8,
        description: "Reanimate Parhelion II with Greasefang for massive damage as early as turn 3. One of Pioneer's premier combo decks.",
        mainTheme: "Vehicle Reanimator",
        keyCards: ["Greasefang, Okiba Boss", "Parhelion II", "Can't Stay Away", "Raffine's Informant"],
        winConditions: ["Parhelion II attacks", "Esika's Chariot tokens", "Graveyard recursion"],
        lastUpdated: "2026-01-14",
        deckList: "https://www.moxfield.com/decks/example5"
    },
    {
        id: 6,
        name: "Lord Windgrace Lands",
        commander: "Lord Windgrace",
        format: "commander",
        colors: ["B", "R", "G"],
        cardCount: 100,
        budget: "$320",
        powerLevel: 7,
        description: "Use lands as a resource to generate massive value, recovering from boardwipes and overwhelming opponents with late-game threats.",
        mainTheme: "Lands Matter",
        keyCards: ["Lord Windgrace", "The Gitrog Monster", "Scapeshift", "Field of the Dead"],
        winConditions: ["Field of the Dead zombies", "Valakut triggers", "Commander damage"],
        lastUpdated: "2026-01-11",
        deckList: "https://archidekt.com/decks/example6"
    },
    {
        id: 7,
        name: "Mono-Blue Tempo",
        commander: null,
        format: "standard",
        colors: ["U"],
        cardCount: 60,
        budget: "$85",
        powerLevel: 6,
        description: "Protect your threats with counterspells while generating card advantage. A budget-friendly competitive option.",
        mainTheme: "Tempo Control",
        keyCards: ["Haughty Djinn", "Ledger Shredder", "Make Disappear", "Otawara, Soaring City"],
        winConditions: ["Haughty Djinn beats", "Ledger Shredder evasion", "Mill with Shore Up"],
        lastUpdated: "2026-01-09",
        deckList: "https://www.moxfield.com/decks/example7"
    },
    {
        id: 8,
        name: "Rhinos Cascade",
        commander: null,
        format: "modern",
        colors: ["U", "G"],
        cardCount: 60,
        budget: "$420",
        powerLevel: 8,
        description: "Abuse cascade to cheat Crashing Footfalls into play. Consistent and powerful midrange strategy.",
        mainTheme: "Cascade Value",
        keyCards: ["Shardless Agent", "Crashing Footfalls", "Violent Outburst", "Leyline Binding"],
        winConditions: ["Rhino token beats", "Teferi bounce", "Subtlety tempo"],
        lastUpdated: "2026-01-13",
        deckList: "https://www.moxfield.com/decks/example8"
    }
];

// State
let currentFormat = 'all';
let searchQuery = '';

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderDecks();
    setupEventListeners();
});

// Render decks
function renderDecks() {
    const grid = document.getElementById('decks-grid');
    const filteredDecks = decks.filter(deck => {
        const matchesFormat = currentFormat === 'all' || deck.format === currentFormat;
        const matchesSearch = deck.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (deck.commander && deck.commander.toLowerCase().includes(searchQuery.toLowerCase())) ||
            deck.mainTheme.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFormat && matchesSearch;
    });

    if (filteredDecks.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px;">
                <i data-lucide="inbox" style="width: 48px; height: 48px; color: rgba(255,255,255,0.3); margin-bottom: 16px;"></i>
                <p style="color: rgba(255,255,255,0.5); font-size: 1.125rem;">No decks found matching your criteria</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    grid.innerHTML = filteredDecks.map(deck => `
        <div class="deck-card" data-deck-id="${deck.id}" style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 24px; cursor: pointer; transition: all 0.3s;">
            <!-- Header -->
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 16px;">
                <div>
                    <div style="display: inline-block; padding: 4px 12px; background: ${getFormatColor(deck.format)}; border-radius: 6px; font-size: 0.75rem; font-weight: 600; text-transform: uppercase; margin-bottom: 8px;">
                        ${deck.format}
                    </div>
                    <h3 style="font-size: 1.25rem; font-weight: 600; margin-bottom: 4px;">${deck.name}</h3>
                    ${deck.commander ? `<p style="font-size: 0.875rem; color: rgba(255,255,255,0.5);">${deck.commander}</p>` : ''}
                </div>
                <div style="display: flex; gap: 4px;">
                    ${deck.colors.map(color => `<div style="width: 20px; height: 20px; border-radius: 50%; background: ${getManaColor(color)}; border: 1px solid rgba(255,255,255,0.2);"></div>`).join('')}
                </div>
            </div>

            <!-- Description -->
            <p style="color: rgba(255,255,255,0.6); font-size: 0.875rem; margin-bottom: 16px; line-height: 1.6;">
                ${deck.description}
            </p>

            <!-- Theme -->
            <div style="margin-bottom: 16px;">
                <span style="font-size: 0.75rem; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.5px;">Theme:</span>
                <p style="font-size: 0.875rem; color: #3b82f6; font-weight: 500; margin-top: 4px;">${deck.mainTheme}</p>
            </div>

            <!-- Stats -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.1);">
                <div>
                    <div style="font-size: 0.75rem; color: rgba(255,255,255,0.4); margin-bottom: 4px;">Cards</div>
                    <div style="font-size: 1rem; font-weight: 600; font-family: 'JetBrains Mono', monospace;">${deck.cardCount}</div>
                </div>
                <div>
                    <div style="font-size: 0.75rem; color: rgba(255,255,255,0.4); margin-bottom: 4px;">Power</div>
                    <div style="font-size: 1rem; font-weight: 600; font-family: 'JetBrains Mono', monospace;">${deck.powerLevel}/10</div>
                </div>
                <div>
                    <div style="font-size: 0.75rem; color: rgba(255,255,255,0.4); margin-bottom: 4px;">Budget</div>
                    <div style="font-size: 1rem; font-weight: 600; font-family: 'JetBrains Mono', monospace;">${deck.budget}</div>
                </div>
            </div>

            <!-- CTA -->
            <div style="margin-top: 20px;">
                <button style="width: 100%; padding: 12px; background: linear-gradient(135deg, #3b82f6, #8b5cf6); border: none; border-radius: 8px; color: white; font-weight: 600; cursor: pointer; transition: all 0.3s;">
                    View Details
                </button>
            </div>
        </div>
    `).join('');

    // Add hover effects
    document.querySelectorAll('.deck-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = 'rgba(59, 130, 246, 0.4)';
            card.style.transform = 'translateY(-4px)';
            card.style.boxShadow = '0 8px 32px rgba(59, 130, 246, 0.2)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'rgba(255,255,255,0.1)';
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
        card.addEventListener('click', () => {
            const deckId = parseInt(card.dataset.deckId);
            showDeckDetails(deckId);
        });
    });

    lucide.createIcons();
}

// Show deck details modal
function showDeckDetails(deckId) {
    const deck = decks.find(d => d.id === deckId);
    if (!deck) return;

    const modal = document.getElementById('deck-modal');
    const details = document.getElementById('deck-details');

    details.innerHTML = `
        <div style="margin-bottom: 24px;">
            <div style="display: flex; gap: 4px; margin-bottom: 12px;">
                ${deck.colors.map(color => `<div style="width: 24px; height: 24px; border-radius: 50%; background: ${getManaColor(color)}; border: 2px solid rgba(255,255,255,0.3);"></div>`).join('')}
            </div>
            <h2 style="font-size: 2rem; font-weight: 700; margin-bottom: 8px;">${deck.name}</h2>
            ${deck.commander ? `<p style="font-size: 1.125rem; color: #3b82f6; font-weight: 500; margin-bottom: 16px;">Commander: ${deck.commander}</p>` : ''}
            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                <span style="padding: 6px 14px; background: ${getFormatColor(deck.format)}; border-radius: 6px; font-size: 0.875rem; font-weight: 600; text-transform: uppercase;">${deck.format}</span>
                <span style="padding: 6px 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; font-size: 0.875rem;">Power: ${deck.powerLevel}/10</span>
                <span style="padding: 6px 14px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 6px; font-size: 0.875rem;">${deck.budget}</span>
            </div>
        </div>

        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 12px;">Description</h3>
            <p style="color: rgba(255,255,255,0.7); line-height: 1.6;">${deck.description}</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-bottom: 24px;">
            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px;">
                <h4 style="font-size: 0.875rem; font-weight: 600; color: rgba(255,255,255,0.5); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Main Theme</h4>
                <p style="color: #3b82f6; font-weight: 500;">${deck.mainTheme}</p>
            </div>
            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px;">
                <h4 style="font-size: 0.875rem; font-weight: 600; color: rgba(255,255,255,0.5); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Last Updated</h4>
                <p style="color: rgba(255,255,255,0.7); font-family: 'JetBrains Mono', monospace;">${deck.lastUpdated}</p>
            </div>
        </div>

        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 24px; margin-bottom: 24px;">
            <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 16px;">Key Cards</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                ${deck.keyCards.map(card => `
                    <span style="padding: 8px 16px; background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 8px; color: #3b82f6; font-size: 0.875rem; font-weight: 500;">${card}</span>
                `).join('')}
            </div>
        </div>

        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 24px; margin-bottom: 32px;">
            <h3 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 16px;">Win Conditions</h3>
            <ul style="list-style: none; padding: 0; margin: 0;">
                ${deck.winConditions.map(cond => `
                    <li style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); color: rgba(255,255,255,0.7); display: flex; align-items: center; gap: 12px;">
                        <i data-lucide="check-circle" style="width: 18px; height: 18px; color: #10b981;"></i>
                        ${cond}
                    </li>
                `).join('')}
            </ul>
        </div>

        <div style="display: flex; gap: 12px;">
            <a href="${deck.deckList}" target="_blank" rel="noopener noreferrer" style="flex: 1; padding: 14px; background: linear-gradient(135deg, #3b82f6, #8b5cf6); border: none; border-radius: 8px; color: white; font-weight: 600; text-align: center; text-decoration: none; transition: all 0.3s;">
                View Full Decklist
            </a>
            <button onclick="navigator.clipboard.writeText('${deck.deckList}')" style="padding: 14px 20px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: white; font-weight: 600; cursor: pointer; transition: all 0.3s;">
                Copy Link
            </button>
        </div>
    `;

    modal.style.display = 'flex';
    lucide.createIcons();
}

// Setup event listeners
function setupEventListeners() {
    // Format filters
    document.querySelectorAll('.format-filter').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.format-filter').forEach(b => {
                b.classList.remove('active');
                b.style.background = 'rgba(255,255,255,0.03)';
                b.style.borderColor = 'rgba(255,255,255,0.1)';
                b.style.color = 'rgba(255,255,255,0.6)';
            });
            e.target.classList.add('active');
            e.target.style.background = 'rgba(59, 130, 246, 0.1)';
            e.target.style.borderColor = 'rgba(59, 130, 246, 0.3)';
            e.target.style.color = '#3b82f6';
            currentFormat = e.target.dataset.format;
            renderDecks();
        });
    });

    // Search
    document.getElementById('deck-search').addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderDecks();
    });

    // Modal close
    document.querySelector('.modal-close').addEventListener('click', () => {
        document.getElementById('deck-modal').style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        const modal = document.getElementById('deck-modal');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Helper functions
function getFormatColor(format) {
    const colors = {
        'commander': 'rgba(236, 72, 153, 0.2)',
        'modern': 'rgba(59, 130, 246, 0.2)',
        'standard': 'rgba(16, 185, 129, 0.2)',
        'pioneer': 'rgba(139, 92, 246, 0.2)'
    };
    return colors[format] || 'rgba(255,255,255,0.1)';
}

function getManaColor(symbol) {
    const colors = {
        'W': 'linear-gradient(135deg, #F0E68C, #FFF8DC)',
        'U': 'linear-gradient(135deg, #0E4C92, #2E86AB)',
        'B': 'linear-gradient(135deg, #2C2C2C, #1C1C1C)',
        'R': 'linear-gradient(135deg, #D32F2F, #FF6B35)',
        'G': 'linear-gradient(135deg, #388E3C, #81C784)',
        'C': 'linear-gradient(135deg, #9E9E9E, #BDBDBD)'
    };
    return colors[symbol] || colors['C'];
}
