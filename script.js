const menu = [
    {
        id: 1,
        name: "Caponata",
        category: "starter",
        price: 28,
        description: "Caponata de berinjela servida com torradas de pão italiano.",
        image: "./images/starter-course-1.jpg",
    },
    {
        id: 2,
        name: "Fritas",
        category: "starter",
        price: 25,
        description: "Batatas fritas crocantes por fora e macias por dentro, com ketchup artesanal e molho especial.",
        image: "./images/starter-course-2.jpg",
    },
    {
        id: 3,
        name: "Pães",
        category: "starter",
        price: 18,
        description: "Cesta de pães servidos com azeite extra virgem e patê de aliche.",
        image: "./images/starter-course-3.jpg",
    },
    {
        id: 4,
        name: "Brie com Geleia",
        category: "starter",
        price: 42,
        description: "Queijo brie inteiro com geleia de amora, servidos com torradas de pão italiano.",
        image: "./images/starter-course-4.jpg",
    },
    {
        id: 5,
        name: "Spaghetti à Carbonara",
        category: "main",
        price: 55,
        description: "Massa tradicional italiana com spaghetti de grano duro e molho a base de ovos, pecorino e guanciale.",
        image: "./images/main-course-1.jpg",
    },
    {
        id: 6,
        name: "Filet Alfredo",
        category: "main",
        price: 78,
        description: "Medalhões de filé mignon e tagliatele servidos com o tradicional molho alfredo.",
        image: "./images/main-course-2.jpg",
    },
    {
        id: 7,
        name: "Filet de Pescada",
        category: "main",
        price: 62,
        description: "Filé de peixe grelhado servido com vegetais frescos e farofa de nozes.",
        image: "./images/main-course-3.jpg",
    },
    {
        id: 8,
        name: "Polvo à provençal",
        category: "main",
        price: 81,
        description: "Polvo à provençal servido com batatas ao forno e molho de pimenta.",
        image: "./images/main-course-4.jpg",
    },
    {
        id: 9,
        name: "Massa vegana",
        category: "main",
        price: 58,
        description: "Penne ao molho pesto com raspas de tofu e trufas.",
        image: "./images/main-course-5.jpg",
    },
    {
        id: 10,
        name: "Suco de Laranja",
        category: "drink",
        price: 12,
        description: "Suco de laranja natural.",
        image: "./images/drink-1.jpg",
    },
    {
        id: 11,
        name: "Vinho da Casa",
        category: "drink",
        price: 70,
        description: "Vinho tinto seco reserva, selecionado para harmonizar com todos os pratos da casa.",
        image: "./images/drink-2.jpg",
    },
    {
        id: 12,
        name: "Refrigerante",
        category: "drink",
        price: 12,
        description: "Refrigerante da sua escolha.",
        image: "./images/drink-3.jpg",
    },
    {
        id: 13,
        name: "Torta Alemã",
        category: "dessert",
        price: 27,
        description: "A melhor torta alemã do mundo.",
        image: "./images/dessert-1.jpg",
    },
    {
        id: 14,
        name: "Mousse de Maracujá",
        category: "dessert",
        price: 23,
        description: "Uma deliciosa mousse de uma das frutas mais apreciadas.",
        image: "./images/dessert-2.jpg",
    },
    
]

const itemsSection = document.querySelector(".items-section");

function loadMenu() {
    let showMenu = menu.map(function(item){
        return `
            <article class="menu-item">
                <img src=${item.image} alt=${item.name} class="image" />
                <div class="item-info">
                    <header>
                        <h4>${item.name}</h4>
                        <h4 class="price">R$ ${item.price}</h4>
                    </header>
                    <p class="item-description">
                        ${item.description}
                    </p>
                </div>
            </article>`;
    })
    showMenu = showMenu.join("");
    itemsSection.innerHTML = showMenu;
}

window.addEventListener("DOMContentLoaded", loadMenu)