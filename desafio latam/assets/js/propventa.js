const propertiesForSale = [
    {
      photo: 'assets/img/casa_suiza.jpg',
      name: "Refugio tranquilo en las montañas suizas",
      description: "Casa espaciosa con vistas espectaculares a los Alpes suizos, ideal para disfrutar de la tranquilidad y belleza natural.",
      smoke: true,
      pets: false,
    },
    {
      photo: 'assets/img/casa_canada.jpg',
      name: "Cabaña moderna en el corazón de Vancouver",
      description: "Económica y cómoda, esta cabaña ofrece la mezcla perfecta entre naturaleza y accesibilidad a los encantos de Vancouver.",
      smoke: false,
      pets: true,
    },
    {
      photo: 'assets/img/casa_australia.jpg',
      name: "Casa con vistas panorámicas de la Gran Barrera de Coral",
      description: "Casa familiar espaciosa con impresionantes vistas, ideal para quienes buscan una experiencia única cerca de la naturaleza",
      smoke: true,
      pets: true,
    },
    {
      photo: 'assets/img/casa_espana.jpg',
      name: "Casa de lujo con vistas al mar Mediterráneo",
      description: "Disfruta de una casa amplia con jardín, perfecta para relajarte mientras aprecias las vistas al mar y el ambiente cálido de la costa",
      smoke: true,
      pets: true,
    },
    {
      photo: 'assets/img/casa_holanda.jpg',
      name: "Villa moderna en el centro de Ámsterdam",
      description: "Exclusiva villa con piscina, situada en el centro de la ciudad, ofreciendo un oasis de tranquilidad cerca de todo lo que Ámsterdam tiene para ofrecer.",
      smoke: false,
      pets: true,
    },
    {
      photo: 'assets/img/casa_ingl.jpg',
      name: "Piso con vistas impresionantes de Londres",
      description: "Moderno y céntrico, este piso es perfecto para quienes desean vivir cerca de las principales atracciones de Londres con vistas panorámicas de la ciudad",
      smoke: false,
      pets: false,
    },
  ];
  
  function renderProperties(properties, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
  
    properties.forEach((property) => {
      const propertyDiv = document.createElement("div");
      propertyDiv.classList.add("col-md-4", "mb-4");
  
      propertyDiv.innerHTML = `
        <div class="card border-secondary">
          <div class="card-body">
            <img src="${property.photo}" class="img-fluid mb-3" alt="${property.name}">
            <h5 class="card-title">${property.name}</h5>
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
    renderProperties(propertiesForSale, "sale-container");
  });
  