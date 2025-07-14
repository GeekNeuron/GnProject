/**
 * GNProject - A Professional Portfolio Page
 * Final Corrected Version
 */
document.addEventListener('DOMContentLoaded', () => {

    // --- DOM Elements ---
    const themeSwitcher = document.querySelector('.header-text');
    const body = document.body;
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');
    const mainContent = document.querySelector('main');
    const lightbox = document.getElementById('lightbox');
    
    let allProjects = [];

    /**
     * Initializes the application by fetching project data.
     */
    async function initializeApp() {
        try {
            const response = await fetch('projects.json');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            allProjects = await response.json();
            renderProjects(allProjects);
        } catch (error) {
            console.error("Could not fetch projects:", error);
            mainContent.innerHTML = "<p style='text-align:center;'>Failed to load projects.</p>";
        }
    }

    /**
     * Renders all project cards into their respective tab containers.
     */
    function renderProjects(projects) {
        tabContents.forEach(content => content.innerHTML = '');
        projects.forEach((project, index) => {
            const projectCardHTML = createProjectCardHTML(project, index);
            const container = document.getElementById(`${project.category}-content`);
            if (container) {
                container.innerHTML += projectCardHTML;
            }
        });
    }

    /**
     * Creates the HTML string for a single project card.
     */
    function createProjectCardHTML(project, index) {
        const tagsHTML = project.tags.map(tag => `<button class="tag" data-tag="${tag}">${tag}</button>`).join('');
        const statusClass = project.status.toLowerCase().replace(' ', '-');
        
        let screenshotsHTML = '';
        if (project.screenshots && project.screenshots.length > 0) {
            screenshotsHTML = `<div class="screenshot-gallery">${project.screenshots.map(src => `<img src="${src}" alt="${project.name} screenshot" loading="lazy">`).join('')}</div>`;
        }
        
        const detailsId = `details-${index}`;

        return `
            <div class="project-container" data-project-index="${index}">
                <article class="project-card ${project.category}">
                    <div class="status-badge ${statusClass}">${project.status}</div>
                    <div class="primary-view">
                        <img src="${project.icon}" alt="${project.name} Icon" class="project-icon">
                        <div class="project-info">
                            <h3>${project.name}</h3>
                            <p class="project-version">Version ${project.version}</p>
                            <div class="tags">${tagsHTML}</div>
                        </div>
                    </div>
                    <button class="view-button" aria-expanded="false" aria-controls="${detailsId}">View</button>
                    <div class="secondary-view" id="${detailsId}">
                        <p>${project.description}</p>
                        ${screenshotsHTML}
                        <a href="${project.repoUrl}" class="repo-button" target="_blank" rel="noopener noreferrer">Go to Repository</a>
                    </div>
                </article>
            </div>`;
    }
    
    // --- Event Listeners ---

    // 1. Theme Switcher
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') body.classList.add('dark-theme');
    themeSwitcher.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
    });

    // 2. Tab System (Simplified and Corrected)
    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Deactivate all tabs
            tabLinks.forEach(item => {
                item.classList.remove('active');
                item.setAttribute('aria-selected', 'false');
            });
            tabContents.forEach(item => item.classList.add('hidden'));

            // Activate the clicked tab
            link.classList.add('active');
            link.setAttribute('aria-selected', 'true');
            const activeTabContent = document.getElementById(link.getAttribute('aria-controls'));
            if (activeTabContent) {
            activeTabContent.classList.remove('hidden');
            }

    // 4. Main content event delegation (Accordion, Lightbox, Tags)
    mainContent.addEventListener('click', (event) => {
        const target = event.target;

        if (target.matches('.view-button')) {
            const projectCard = target.closest('.project-card');
            if (projectCard) {
                projectCard.classList.toggle('expanded');
                const isExpanded = projectCard.classList.contains('expanded');
                target.textContent = isExpanded ? 'Hide' : 'View';
                target.setAttribute('aria-expanded', isExpanded.toString());
            }
        }

        if (target.matches('.screenshot-gallery img')) {
            lightbox.classList.add('active');
            document.getElementById('lightbox-img').src = target.src;
        }

    // 5. Lightbox Close
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.matches('.close-lightbox')) {
            lightbox.classList.remove('active');
        }
    });

    // --- Initial Application Load ---
    initializeApp();
});
