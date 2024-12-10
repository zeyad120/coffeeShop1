// بيانات المنتجات
const products = [
    {
        id: 1,
        name: 'بن تركي فاخر',
        price: 120,
        category: 'coffee',
        image: 'turkish-coffee.jpg',
        description: 'بن تركي محوج درجة أولى',
        inStock: true
    },
    {
        id: 2,
        name: 'صوص شوكولاتة',
        price: 85,
        category: 'sauce',
        image: 'chocolate-sauce.jpg',
        description: 'صوص شوكولاتة كثيف',
        inStock: true
    },
    {
        id: 3,
        name: 'بن يمني خولاني',
        price: 180,
        category: 'coffee',
        image: 'yemen-coffee.jpg',
        description: 'بن يمني خولاني درجة أولى',
        inStock: true
    },
    {
        id: 4,
        name: 'سيراب كراميل',
        price: 95,
        category: 'syrup',
        image: 'caramel-syrup.jpg',
        description: 'سيراب كراميل مركز',
        inStock: true
    },
    {
        id: 5,
        name: 'بن برازيلي',
        price: 150,
        category: 'coffee',
        image: 'brazil-coffee.jpg',
        description: 'بن برازيلي فاخر',
        inStock: true
    },
    {
        id: 6,
        name: 'نوتيلا كبير',
        price: 160,
        category: 'nutella',
        image: 'nutella-large.jpg',
        description: 'نوتيلا أصلي 750 جرام',
        inStock: true
    },
    {
        id: 7,
        name: 'بن إثيوبي',
        price: 160,
        category: 'coffee',
        image: 'ethiopian-coffee.jpg',
        description: 'بن إثيوبي عضوي',
        inStock: true
    },
    {
        id: 8,
        name: 'حلويات متنوعة',
        price: 90,
        category: 'candy',
        image: 'mixed-candy.jpg',
        description: 'تشكيلة حلويات فاخرة',
        inStock: true
    },
    {
        id: 9,
        name: 'سيراب فانيليا',
        price: 85,
        category: 'syrup',
        image: 'vanilla-syrup.jpg',
        description: 'سيراب فانيليا مركز',
        inStock: true
    },
    {
        id: 10,
        name: 'صوص كراميل',
        price: 75,
        category: 'sauce',
        image: 'caramel-sauce.jpg',
        description: 'صوص كراميل كثيف',
        inStock: true
    },
    {
        id: 11,
        name: 'نوتيلا صغير',
        price: 90,
        category: 'nutella',
        image: 'nutella-small.jpg',
        description: 'نوتيلا أصلي 350 جرام',
        inStock: true
    },
    {
        id: 12,
        name: 'حلويات هاريبو',
        price: 45,
        category: 'candy',
        image: 'haribo.jpg',
        description: 'حلويات هاريبو متنوعة',
        inStock: true
    }
];

// عرض المنتجات
function displayProducts(category = 'all', searchResults = null) {
    const productsGrid = document.querySelector('.products-grid');
    productsGrid.innerHTML = '';
    
    let displayedProducts;
    if (searchResults) {
        displayedProducts = searchResults;
    } else {
        displayedProducts = category === 'all' 
            ? products 
            : products.filter(product => product.category === category);
    }

    displayedProducts.forEach(product => {
        const productCard = `
            <div class="product-card">
                <div class="product-image">
                    <img src="images/${product.image}" alt="${product.name}">
                </div>
                <div class="product-details">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-price">${product.price} جنيه</div>
                    <button onclick="addToCart(${product.id})" class="add-to-cart-btn">
                        أضف للسلة
                    </button>
                </div>
            </div>
        `;
        productsGrid.innerHTML += productCard;
    });
}

// تفعيل التصفية
function initializeFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            displayProducts(button.dataset.category);
        });
    });
}

// سلة التسوق
let cartItems = [];

function addToCart(productId) {
    cartItems.push(productId);
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cartItems.length;
}

// إضافة وظيفة البحث
function searchProducts(query) {
    const filteredProducts = products.filter(product => 
        product.name.includes(query) || 
        product.description.includes(query)
    );
    displayProducts('all', filteredProducts);
}

// تنفيذ الدوال عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchProducts(e.target.value);
    });
    
    displayProducts();
    initializeFilters();
});

// إضافة تأثير للهيدر عند التمرير
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
}); 