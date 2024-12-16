const items = [
    {
        photo: 'assets/img/casa_suiza.jpg',
        name: "Refugio tranquilo en las montañas suizas",
        description: "Casa espaciosa con vistas espectaculares a los Alpes suizos, ideal para disfrutar de la tranquilidad y belleza natural.",
        smoke: true,
        pets: false,
      type: "sale",
    },
    {
        photo: 'assets/img/casa_espana2.jpg',
        name: "Casa tradicional en un encantador barrio de Madrid",
        description: "Casa moderna que combina confort y la esencia tradicional de España, ideal para aquellos que buscan comodidad en un entorno histórico",
        smoke: true,
        pets: true,
      type: "rent",
    },
    {
      pphoto: 'assets/img/casa_canada.jpg',
      name: "Cabaña moderna en el corazón de Vancouver",
      description: "Económica y cómoda, esta cabaña ofrece la mezcla perfecta entre naturaleza y accesibilidad a los encantos de Vancouver.",
      smoke: false,
      pets: true,
      type: "sale",
    },
    {
        photo: 'assets/img/casa_canada2.jpg',
        name: "Acogedor loft en el corazón de Toronto",
        description: "Loft moderno y elegante, perfectamente situado para disfrutar de la vibrante ciudad de Toronto con todas sus comodidades",
        smoke: false,
        pets: false,
      type: "rent",
    },
    {
        photo: 'assets/img/casa_australia.jpg',
        name: "Casa con vistas panorámicas de la Gran Barrera de Coral",
        description: "Casa familiar espaciosa con impresionantes vistas, ideal para quienes buscan una experiencia única cerca de la naturaleza",
        smoke: true,
        pets: true,
      type: "sale",
    },
    {
        photo: 'assets/img/casa_suiza2.jpg',
        name: "Refugio de montaña en los Alpes suizos",
        description: "Casa rústica y acogedora, rodeada de montañas, ideal para quienes buscan tranquilidad y vistas impresionantes de los Alpes",
        smoke: true,
        pets: false,
      type: "rent",
    },
];

function renderItemsByType(items) {
    const container = document.getElementById("item-container");
    container.innerHTML = "";

    const itemsForSale = items.filter((item) => item.type === "sale").slice(0, 3);
    const itemsForRent = items.filter((item) => item.type === "rent").slice(0, 3);

    const saleHeader = document.createElement("h2");
    saleHeader.textContent = "Propiedades en Venta";
    container.appendChild(saleHeader);

    itemsForSale.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("col-md-4", "mb-4");

        itemDiv.innerHTML = `
        <div class="card">
          <div class="card-body">
            <img src=${item.photo} width="385px">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            <div class="icons">
              <span class="smoke-icon ${item.smoke ? 'text-success' : 'text-danger'}">
                ${item.smoke ? '💨 Permitido' : '🚭 Prohibido'}
              </span><br>
              <span class="pets-icon ${item.pets ? 'text-success' : 'text-danger'}">
                ${item.pets ? '🐾 Permitido' : '❌ No permitido'}
              </span>
            </div>
          </div>
        </div>
      `;
        container.appendChild(itemDiv);
    });

    const saleButton = document.createElement("button");
    saleButton.textContent = "Ver todas las propiedades en venta";
    saleButton.classList.add("btn", "btn-primary", "mt-3");
    saleButton.onclick = () => {
        window.location.href = "propiedades_venta.html";
    };
    container.appendChild(saleButton);

    const rentHeader = document.createElement("h2");
    rentHeader.textContent = "Propiedades en Alquiler";
    container.appendChild(rentHeader);

    itemsForRent.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("col-md-4", "mb-4");

        itemDiv.innerHTML = `
        <div class="card">
          <div class="card-body">
            <img src=${item.photo} width="385px">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
            <div class="icons">
              <span class="smoke-icon ${item.smoke ? 'text-success' : 'text-danger'}">
                ${item.smoke ? '💨 Permitido' : '🚭 Prohibido'}
              </span><br>
              <span class="pets-icon ${item.pets ? 'text-success' : 'text-danger'}">
                ${item.pets ? '🐾 Permitido' : '❌ No permitido'}
              </span>
            </div>
          </div>
        </div>
      `;
        container.appendChild(itemDiv);
    });

    const rentButton = document.createElement("button");
    rentButton.textContent = "Ver todas las propiedades en alquiler";
    rentButton.classList.add("btn", "btn-primary", "mt-3");
    rentButton.onclick = () => {
        window.location.href = "propiedades_alquiler.html";
    };
    container.appendChild(rentButton);
}

document.addEventListener("DOMContentLoaded", () => {
    renderItemsByType(items);
});
