const rentalProperties = [
    {
      photo: 'assets/img/casa_espana2.jpg',
      name: "Casa tradicional en un encantador barrio de Madrid",
      description: "Casa moderna que combina confort y la esencia tradicional de España, ideal para aquellos que buscan comodidad en un entorno histórico",
      smoke: true,
      pets: true,
    },
    {
      photo: 'assets/img/casa_canada2.jpg',
      name: "Acogedor loft en el corazón de Toronto",
      description: "Loft moderno y elegante, perfectamente situado para disfrutar de la vibrante ciudad de Toronto con todas sus comodidades",
      smoke: false,
      pets: false,
    },
    {
      photo: 'assets/img/casa_suiza2.jpg',
      name: "Refugio de montaña en los Alpes suizos",
      description: "Casa rústica y acogedora, rodeada de montañas, ideal para quienes buscan tranquilidad y vistas impresionantes de los Alpes",
      smoke: true,
      pets: false,
    },
    {
      photo: 'assets/img/casa_australia2.jpg',
      name: "Casa cerca de la costa en Sydney",
      description: "Casa espaciosa con vistas al océano, perfecta para disfrutar del estilo de vida relajado de la costa australiana",
      smoke: false,
      pets: true,
    },
    {
      photo: 'assets/img/casa_holanda2.jpg',
      name: "Casa moderna en el centro de Ámsterdam",
      description: "Casa funcional y céntrica, situada a pasos de los canales de Ámsterdam, perfecta para disfrutar de la vida urbana en una ciudad histórica",
      smoke: true,
      pets: false,
    },
    {
      photo: 'assets/img/casa_ingl2.jpg',
      name: "Casa de campo cerca de Londres",
      description: "Casa tradicional con un toque de lujo, perfecta para escaparse del bullicio de la ciudad, pero lo suficientemente cerca para disfrutar de Londres",
      smoke: false,
      pets: true,
    },
  ];
  
  function renderRentalProperties(properties) {
    const container = document.getElementById("rental-container");
    container.innerHTML = "";
  
    properties.forEach((property) => {
      const propertyDiv = document.createElement("div");
      propertyDiv.classList.add("col-md-4", "mb-4");
  
      propertyDiv.innerHTML = `
        <div class="card border-secondary">
          <div class="card-body">
            <img src="${property.photo}" class="img-fluid mb-3" alt="${property.name}">
            <h3 class="card-title">${property.name}</h3>
            <p class="card-text">${property.description}</p>
            <div class="icons">
              <span class="smoke-icon ${property.smoke ? 'text-success' : 'text-danger'}">
                <i class="fas ${property.smoke ? 'fa-smoking' : 'fa-ban'}"></i>
                ${property.smoke ? ' Permitido' : ' Prohibido'}
              </span><br>
              <span class="pets-icon ${property.pets ? 'text-success' : 'text-danger'}">
                <i class="fas ${property.pets ? 'fa-paw' : 'fa-times-circle'}"></i>
                ${property.pets ? ' Permitido' : ' No permitido'}
              </span>
            </div>
          </div>
        </div>
      `;
      container.appendChild(propertyDiv);
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    renderRentalProperties(rentalProperties);
  });
  