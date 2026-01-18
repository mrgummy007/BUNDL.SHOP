/* MTG Products Data */
const mtgProducts = [
    {
        id: 1,
        title: "Commander Masters Collector Edition",
        brand: "WIZARDS",
        price: 89.99,
        image: "images/commander_deck.png",
        category: "Commander",
        description: "Premium Commander deck featuring legendary creatures and powerful reprints. 100-card ready-to-play deck.",
        stock: "in-stock"
    },
    {
        id: 2,
        title: "Mystics & Monsters Draft Booster Box",
        brand: "WIZARDS",
        price: 269.99,
        image: "images/booster_box.png",
        category: "Booster",
        description: "36 draft booster packs from the latest set. Perfect for draft nights or cracking packs.",
        stock: "in-stock"
    },
    {
        id: 3,
        title: "Premium Rare Collection Vol. 1",
        brand: "SINGLES",
        price: 449.99,
        image: "images/single_cards.png",
        category: "Singles",
        description: "Curated collection of 8 premium rare cards including mythics and chase cards.",
        stock: "low-stock"
    },
    {
        id: 4,
        title: "Eldrazi Titans Commander Deck",
        brand: "WIZARDS",
        price: 64.99,
        image: "images/commander_deck.png",
        category: "Commander",
        description: "Colorless Eldrazi tribal commander deck. Unleash the power of the Blind Eternities.",
        stock: "in-stock"
    },
    {
        id: 5,
        title: "Collector Booster Box - Limited",
        brand: "WIZARDS",
        price: 329.99,
        image: "images/booster_box.png",
        category: "Booster",
        description: "12 collector booster packs with extended art, foils, and special treatments.",
        stock: "low-stock"
    },
    {
        id: 6,
        title: "Vintage Power Cards Bundle",
        brand: "SINGLES",
        price: 1299.99,
        image: "images/single_cards.png",
        category: "Singles",
        description: "Premium vintage cards including reserved list staples. Authenticated and graded.",
        stock: "low-stock"
    },
    {
        id: 7,
        title: "Dragon's Fury Commander Deck",
        brand: "WIZARDS",
        price: 54.99,
        image: "images/commander_deck.png",
        category: "Commander",
        description: "Red dragon tribal deck with Lathliss as commander. Rain fire upon your opponents.",
        stock: "in-stock"
    },
    {
        id: 8,
        title: "Set Booster Bundle (10 Packs)",
        brand: "WIZARDS",
        price: 54.99,
        image: "images/booster_box.png",
        category: "Booster",
        description: "10 set boosters with guaranteed foil and art cards. Great value for collectors.",
        stock: "in-stock"
    },
    {
        id: 9,
        title: "Foil Mythic Planeswalker Set",
        brand: "SINGLES",
        price: 189.99,
        image: "images/single_cards.png",
        category: "Singles",
        description: "Set of 5 foil mythic planeswalkers from various sets. Near mint condition.",
        stock: "in-stock"
    },
    {
        id: 10,
        title: "Premium Leather Deck Box",
        brand: "ULTRA PRO",
        price: 39.99,
        image: "images/commander_deck.png",
        category: "Accessories",
        description: "Handcrafted leather deck box. Holds 100+ sleeved cards with magnetic closure.",
        stock: "in-stock"
    },
    {
        id: 11,
        title: "MTG Playmat - Mystic Forest",
        brand: "ULTRA PRO",
        price: 29.99,
        image: "images/booster_box.png",
        category: "Accessories",
        description: "High-quality neoprene playmat with stunning forest artwork. Anti-slip backing.",
        stock: "in-stock"
    },
    {
        id: 12,
        title: "Dragon Shield Sleeves (100ct)",
        brand: "ARCANE TINMEN",
        price: 12.99,
        image: "images/single_cards.png",
        category: "Accessories",
        description: "Premium matte sleeves in various colors. Perfect shuffle feel and durability.",
        stock: "in-stock"
    },
    {
        id: 13,
        title: "Azorius Control Commander Deck",
        brand: "WIZARDS",
        price: 74.99,
        image: "images/commander_deck.png",
        category: "Commander",
        description: "Blue-white control deck with powerful counterspells and board wipes.",
        stock: "low-stock"
    },
    {
        id: 14,
        title: "Modern Horizons 3 Booster Box",
        brand: "WIZARDS",
        price: 349.99,
        image: "images/booster_box.png",
        category: "Booster",
        description: "36 Modern Horizons 3 draft boosters. Powerful reprints and new staples.",
        stock: "low-stock"
    },
    {
        id: 15,
        title: "EDH Staples Bundle",
        brand: "SINGLES",
        price: 249.99,
        image: "images/single_cards.png",
        category: "Singles",
        description: "12 essential Commander staples including Sol Ring, Arcane Signet, and more.",
        stock: "in-stock"
    }
];

/* State */
let mtgCart = [];
let isMTGDrawerOpen = false;
let currentMTGCategory = 'All';

/* Init */
document.addEventListener('DOMContentLoaded', () => {
    renderMTGProducts();
    updateMTGCartUI();
});

/* Core Logic */
function renderMTGProducts() {
    const grid = document.getElementById('mtg-product-grid');
    if (!grid) return;

    const filtered = getFilteredAndSortedProducts ? getFilteredAndSortedProducts() :
        (currentMTGCategory === 'All' ? mtgProducts : mtgProducts.filter(p => p.category === currentMTGCategory));

    document.getElementById('product-count').textContent = `${filtered.length} PRODUCTS`;

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem; opacity: 0.5;">
                <p>No products found matching your criteria.</p>
                <button onclick="resetFilters()" style="margin-top: 1rem; background: white; color: black; border: none; padding: 0.5rem 1rem; border-radius: 999px; cursor: pointer;">Reset Filters</button>
            </div>
        `;
        return;
    }

    grid.innerHTML = filtered.map(product => `
        <article class="mtg-product-card" onclick="openMTGModal(${product.id})">
            <div class="mtg-product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="mtg-product-info">
                <div class="mtg-product-category">${product.category}</div>
                <h3 class="mtg-product-title">${product.title}</h3>
                <div class="mtg-product-price">$${product.price.toFixed(2)}</div>
                <div class="mtg-product-footer">
                    <span class="stock-badge ${product.stock}">${product.stock === 'in-stock' ? 'In Stock' : 'Low Stock'}</span>
                    <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToMTGCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        </article>
    `).join('');
}

function resetFilters() {
    currentMTGCategory = 'All';
    searchQuery = '';
    currentSort = 'default';

    const searchInput = document.getElementById('product-search');
    if (searchInput) searchInput.value = '';

    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) sortSelect.value = 'default';

    const pills = document.querySelectorAll('.category-pill');
    pills.forEach(pill => {
        pill.classList.remove('active');
        if (pill.textContent.trim() === 'All') pill.classList.add('active');
    });

    renderMTGProducts();
}

function filterMTG(category) {
    currentMTGCategory = category;

    const pills = document.querySelectorAll('.category-pill');
    pills.forEach(pill => {
        if (pill.textContent.trim() === category || (category === 'All' && pill.textContent.trim() === 'All')) {
            pill.classList.add('active');
        } else {
            pill.classList.remove('active');
        }
    });

    renderMTGProducts();
}

/* Search functionality */
let searchQuery = '';

function searchProducts() {
    searchQuery = document.getElementById('product-search').value.toLowerCase();
    renderMTGProducts();
}

/* Sort functionality */
let currentSort = 'default';

function sortProducts() {
    currentSort = document.getElementById('sort-select').value;
    renderMTGProducts();
}

/* Enhanced render with search and sort */
function getFilteredAndSortedProducts() {
    let products = [...mtgProducts];

    // Category filter
    if (currentMTGCategory !== 'All') {
        products = products.filter(p => p.category === currentMTGCategory);
    }

    // Search filter
    if (searchQuery) {
        products = products.filter(p =>
            p.title.toLowerCase().includes(searchQuery) ||
            p.description.toLowerCase().includes(searchQuery) ||
            p.category.toLowerCase().includes(searchQuery)
        );
    }

    // Sort
    switch (currentSort) {
        case 'price-low':
            products.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            products.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            products.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'name-desc':
            products.sort((a, b) => b.title.localeCompare(a.title));
            break;
    }

    return products;
}

function openMTGModal(productId) {
    const product = mtgProducts.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('quick-view-modal');
    const content = modal.querySelector('.modal-content');

    content.innerHTML = `
        <div style="background:#1a1a1a; display:flex; align-items:center; justify-content:center; padding: 1rem;">
             <img src="${product.image}" style="max-width:100%; max-height:400px; object-fit:contain; border-radius: 8px;">
        </div>
        <div style="display:flex; flex-direction:column; justify-content:center;">
            <div class="font-mono" style="color:#9333ea; margin-bottom:10px;">${product.category.toUpperCase()}</div>
            <h2 class="text-display" style="font-size:2rem; margin-bottom:1rem;">${product.title}</h2>
            <p style="opacity:0.8; margin-bottom:2rem; line-height:1.6;">${product.description}</p>
            <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
                <span class="font-mono" style="font-size:1.75rem; color:#22c55e;">$${product.price.toFixed(2)}</span>
                <span class="stock-badge ${product.stock}">${product.stock === 'in-stock' ? 'In Stock' : 'Low Stock'}</span>
            </div>
            
            <button class="btn-primary" onclick="addToMTGCartAndClose(${product.id})" style="width:100%;">
                Add to Cart
            </button>
        </div>
        <button onclick="closeModal()" style="position:absolute; top:20px; right:20px; background:none; border:none; color:white; font-size:1.5rem; cursor:pointer;">&times;</button>
    `;

    modal.classList.add('active');
}

function closeModal(event) {
    if (event && event.target !== event.currentTarget) return;
    document.getElementById('quick-view-modal').classList.remove('active');
}

function addToMTGCartAndClose(id) {
    addToMTGCart(id);
    closeModal();
}

/* Cart Logic */
function toggleDrawer() {
    const container = document.getElementById('cart-drawer-container');
    isMTGDrawerOpen = !isMTGDrawerOpen;
    container.classList.toggle('drawer-open', isMTGDrawerOpen);
}

function addToMTGCart(productId) {
    const product = mtgProducts.find(p => p.id === productId);
    if (!product) return;

    mtgCart.push(product);
    updateMTGCartUI();

    if (!isMTGDrawerOpen) toggleDrawer();
}

function removeFromMTGCart(index) {
    mtgCart.splice(index, 1);
    updateMTGCartUI();
}

function updateMTGCartUI() {
    const countEl = document.getElementById('cart-count');
    if (countEl) countEl.innerText = mtgCart.length;

    const itemsContainer = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');

    if (itemsContainer) {
        if (mtgCart.length === 0) {
            itemsContainer.innerHTML = `
                <div style="text-align:center; padding: 4rem 0; opacity: 0.5;">
                    <p>Your cart is empty.</p>
                </div>
            `;
        } else {
            itemsContainer.innerHTML = mtgCart.map((item, index) => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.title}">
                    <div style="flex-grow:1;">
                        <div class="text-sm font-mono" style="color:#9333ea">${item.category}</div>
                        <div style="font-weight:600; margin-bottom: 4px;">${item.title}</div>
                        <div class="font-mono" style="color:#22c55e">$${item.price.toFixed(2)}</div>
                    </div>
                    <button onclick="removeFromMTGCart(${index})" style="background:none; border:none; color:white; opacity:0.5; cursor:pointer;">&times;</button>
                </div>
            `).join('');
        }
    }

    if (totalEl) {
        const total = mtgCart.reduce((sum, item) => sum + item.price, 0);
        totalEl.innerText = `$${total.toFixed(2)}`;
    }
}

/* Expose Global */
window.toggleDrawer = toggleDrawer;
window.addToMTGCart = addToMTGCart;
window.removeFromMTGCart = removeFromMTGCart;
window.filterMTG = filterMTG;
window.openMTGModal = openMTGModal;
window.closeModal = closeModal;
window.addToMTGCartAndClose = addToMTGCartAndClose;
window.searchProducts = searchProducts;
window.sortProducts = sortProducts;
window.resetFilters = resetFilters;
