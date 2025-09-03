const projects = [
  { title: 'Scan to Taste Series', imageUrl: 'images/projects/2025scan2taste/3.png', link: 'projects/2025scan2taste.html', type: 'installation' },
  { title: 'Seoul2050:Climate Control System', imageUrl: 'images/projects/2024seoulstation/2024seoulstation.jpg', link: 'projects/2024seoulstation.html', type: 'Media Facade' },
  { title: 'Appetizer-Lemon', imageUrl: 'images/projects/20240restaurant/appetizer.jpg', link: 'projects/20240restaurant-appetizer.html', type: 'Installation' },
  { title: 'Main-Virtual Dining', imageUrl: 'images/projects/20240restaurant/main.jpg', link: 'projects/20240restaurant-main.html', type: 'Interactive Art' },
  { title: 'Dessert-Game Food', imageUrl: 'images/projects/20240restaurant/dessert.jpg', link: 'projects/20240restaurant-dessert.html', type: 'Interactive Art' },
  { title: 'EcoSynthesis', imageUrl: 'images/projects/2024ecosynthesis/main.png', link: 'projects/2024ecosynthesis.html', type: '3D Graphic' },
  { title: 'Automatic World', imageUrl: 'images/projects/2020automaticworld/main.png', link: 'projects/2020automaticworld.html', type: 'VR' },
  { title: 'Touch Me', imageUrl: 'images/projects/2019touchme/main.png', link: 'projects/2019touchme.html', type: 'Interactive Art' },
  { title: 'Cyber-Fruits(ver.01_MANGOMANGO)', imageUrl: 'images/projects/2018cyberfruits/main.png', link: 'projects/2018cyberfruits.html', type: 'Installation' }
];

function loadProjects() {
  const projectsGrid = document.getElementById('projects-grid');
  
  // 프로젝트 동적 추가
  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');
    projectCard.innerHTML = `
      <a href="${project.link}" class="project-link">
        <div class="project-image">
          <img src="${project.imageUrl}" alt="${project.title}" loading="lazy">
        </div>
      </a>
      <div class="project-title">
        <h3>${project.title}</h3>
        <p>${project.type}</p>
      </div>
    `;
    projectsGrid.appendChild(projectCard);
  });

  // Masonry 적용
  imagesLoaded('#projects-grid', function () {
    const masonryInstance = new Masonry('#projects-grid', {
      itemSelector: '.project-card',
      columnWidth: '.project-card',
      percentPosition: true,
      gutter: 6
    });

    window.addEventListener('resize', () => {
      masonryInstance.reloadItems();
      masonryInstance.layout();
    });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  loadProjects();
});
