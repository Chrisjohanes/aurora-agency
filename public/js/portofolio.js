// Data proyek fiktif
const projects = [
  {
    title: "Website Restoran",
    description: "Website modern untuk restoran lokal.",
    image: "images/project1.jpg",
    category: "Web Development"
  },
  {
    title: "E-Commerce Fashion",
    description: "Platform belanja online untuk brand fashion.",
    image: "images/project2.jpg",
    category: "E-Commerce"
  },
  {
    title: "Dashboard Startup",
    description: "Dashboard analitik real-time untuk startup.",
    image: "images/project3.jpg",
    category: "Web App"
  }
];

// Render ke dalam section portfolio (Proyek Terbaru)
document.addEventListener("DOMContentLoaded", () => {
  const projectContainer = document.getElementById("project-list");

  if (projectContainer) {
    projects.forEach(project => {
      const card = document.createElement("div");
      card.classList.add("col-md-4", "mb-4");

      card.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${project.image}" class="card-img-top" alt="${project.title}">
          <div class="card-body">
            <h6 class="text-muted mb-1">Project</h6>
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text">${project.description}</p>
          </div>
        </div>
      `;

      projectContainer.appendChild(card);
    });
  }
});
