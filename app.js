/* Data */
const products = [
    {
        id: 1,
        title: "Arc'teryx Beta LT [Archive]",
        brand: "ARC'TERYX",
        price: 350.00,
        image: "https://placehold.co/800x800/111/444?text=Beta+LT",
        category: "Outerwear",
        description: "Gore-Tex shell in pristine condition. The ultimate all-weather layer for urban exploration."
    },
    {
        id: 2,
        title: "Vintage Carhartt Double Knee",
        brand: "CARHARTT",
        price: 185.00,
        image: "https://placehold.co/800x800/111/444?text=Double+Knee",
        category: "Bottoms",
        description: "Sun-faded canvas. Beautiful whiskers and distress marks. 1990s era production."
    },
    {
        id: 3,
        title: "Stüssy '8 Ball' Mohair",
        brand: "STUSSY",
        price: 220.00,
        image: "https://placehold.co/800x800/111/444?text=Mohair+Knit",
        category: "Tops",
        description: "Fuzzy mohair blend. Iconic 8-ball graphic on back. Relaxed fit."
    },
    {
        id: 4,
        title: "Oakley Software Shell",
        brand: "OAKLEY",
        price: 145.00,
        image: "https://placehold.co/800x800/111/444?text=Oakley+Shell",
        category: "Outerwear",
        description: "Technical nylon shell from the early 2000s. Multiple utility pockets."
    },
    {
        id: 5,
        title: "Prada Sport America's Cup",
        brand: "PRADA",
        price: 450.00,
        image: "https://placehold.co/800x800/111/444?text=Americas+Cup",
        category: "Footwear",
        description: "Patent leather and mesh construction. Using the iconic red line branding."
    },
    {
        id: 6,
        title: "Maison Margiela GATs",
        brand: "MARGIELA",
        price: 380.00,
        image: "https://placehold.co/800x800/111/444?text=GATs",
        category: "Footwear",
        description: "German Army Trainer replica. Calfskin and suede. Gum sole."
    }
];

/* State */
let cart = [];
let isDrawerOpen = false;
let currentCategory = 'All';

/* Init */
document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    renderProducts();
    updateCartUI();

    // GSAP-like entrance
    const hero = document.querySelector('.hero-content');
    setTimeout(() => {
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }, 100);
});

/* Core Logic */
function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    const filtered = currentCategory === 'All'
        ? products
        : products.filter(p => p.category === currentCategory);

    grid.innerHTML = filtered.map(product => `
        <article class="product-card" onclick="openModal(${product.id})">
            <div class="product-img-wrapper">
                <img src="${product.image}" alt="${product.title}" class="product-img">
            </div>
            
            <div class="product-meta">
                <div>
                    <div class="text-sm font-mono" style="opacity: 0.6; margin-bottom: 4px;">${product.brand}</div>
                    <h3 class="text-xl" style="font-size: 1.1rem; line-height: 1.2;">${product.title}</h3>
                </div>
                <div class="font-mono">$${product.price}</div>
            </div>
        </article>
    `).join('');
}

function filterProducts(category) {
    currentCategory = category;

    // Update Buttons
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        if (btn.textContent.trim() === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    renderProducts();
}

function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('quick-view-modal');
    const content = modal.querySelector('.modal-content');

    content.innerHTML = `
        <div style="background:#222; display:flex; align-items:center; justify-content:center;">
             <img src="${product.image}" style="max-width:100%; max-height:400px; object-fit:contain;">
        </div>
        <div style="display:flex; flex-direction:column; justify-content:center;">
            <div class="font-mono" style="opacity:0.6; margin-bottom:10px;">${product.brand}</div>
            <h2 class="text-display" style="font-size:2.5rem; margin-bottom:1rem;">${product.title}</h2>
            <p style="opacity:0.8; margin-bottom:2rem; line-height:1.6;">${product.description}</p>
            <div class="font-mono" style="font-size:1.5rem; margin-bottom:2rem;">$${product.price}</div>
            
            <button class="btn-primary" onclick="addToCartAndClose(${product.id})" style="width:100%;">
                Add to Cart
            </button>
        </div>
        <button onclick="closeModal()" style="position:absolute; top:20px; right:20px; background:none; border:none; color:white; font-size:1.5rem; cursor:pointer;">&times;</button>
    `;

    modal.classList.add('active');
}

function closeModal(event) {
    if (event && event.target !== event.currentTarget) return; // Only close if clicking overlay
    document.getElementById('quick-view-modal').classList.remove('active');
}

function addToCartAndClose(id) {
    addToCart(id);
    closeModal();
}

/* Cart Logic (Existing) */
function toggleDrawer() {
    const container = document.getElementById('cart-drawer-container');
    isDrawerOpen = !isDrawerOpen;
    container.classList.toggle('drawer-open', isDrawerOpen);
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    cart.push(product);
    updateCartUI();

    if (!isDrawerOpen) toggleDrawer();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function updateCartUI() {
    const countEl = document.getElementById('cart-count');
    if (countEl) countEl.innerText = cart.length;

    const itemsContainer = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');

    if (itemsContainer) {
        if (cart.length === 0) {
            itemsContainer.innerHTML = `
                <div style="text-align:center; padding: 4rem 0; opacity: 0.5;">
                    <p>Your bag is empty.</p>
                </div>
            `;
        } else {
            itemsContainer.innerHTML = cart.map((item, index) => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.title}">
                    <div style="flex-grow:1;">
                        <div class="text-sm font-mono" style="opacity:0.6">${item.brand}</div>
                        <div style="font-weight:600; margin-bottom: 4px;">${item.title}</div>
                        <div class="font-mono">$${item.price}</div>
                    </div>
                    <button onclick="removeFromCart(${index})" style="background:none; border:none; color:white; opacity:0.5; cursor:pointer;">&times;</button>
                </div>
            `).join('');
        }
    }

    if (totalEl) {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        totalEl.innerText = `$${total.toFixed(2)}`;
    }
}

/* Expose Global */
window.toggleDrawer = toggleDrawer;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.filterProducts = filterProducts;
window.openModal = openModal;
window.closeModal = closeModal;
window.addToCartAndClose = addToCartAndClose;
