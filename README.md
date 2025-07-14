# GNProject - A Dynamic Portfolio Showcase

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
  <img src="https://img.shields.io/badge/version-1.0.0-lightgrey.svg" alt="Version">
  <img src="https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen.svg" alt="GitHub Pages">
  <img src="https://img.shields.io/github/languages/top/your-username/GNProject" alt="Top Language">
  <img src="https://img.shields.io/badge/PRs-welcome-ff69b4.svg" alt="PRs Welcome">
</p>

A clean, modern, and highly customizable single-page portfolio template to dynamically showcase your personal projects. Built with pure, dependency-free JavaScript, it's lightweight, fast, and easy to deploy on GitHub Pages.

---

## 🚀 Live Demo

**[View Live Demo Here](https://your-username.github.io/GNProject/)**

*(Replace the link above with your actual GitHub Pages URL after deployment)*

<p align="center">
  <img src="https://via.placeholder.com/1200x675.png?text=Add+a+Screenshot+or+GIF+of+Your+Project+in+Action" alt="Project Demo Screenshot" width="80%">
</p>

---

## ✨ Core Features

-   **Dynamic Content**: All projects are managed from a single, easy-to-edit `projects.json` file.
-   **Interactive UI**:
    -   Dark/Light mode theme switcher with `localStorage` persistence.
    -   Live, as-you-type search across all project details.
    -   Clickable tags for instant project filtering.
    -   Expandable project cards to reveal details and screenshots.
-   **Modern & Responsive Design**:
    -   A mobile-first layout that looks great on any device.
    -   Smooth CSS animations and transitions.
    -   "Glassmorphism" effect for status badges.
-   **Image Support**:
    -   Screenshot gallery with horizontal scrolling.
    -   Built-in image lightbox for full-size viewing.
-   **Accessibility Ready**: Built with ARIA roles and attributes for screen reader compatibility.
-   **Zero Dependencies**: Crafted with pure HTML5, CSS3, and Vanilla JavaScript.

---

## 🛠️ Getting Started

You can set up your own portfolio using this template in just a few minutes.

### 1. Obtain the Code

**Fork** this repository to your GitHub account, or **Clone** it locally:
```bash
git clone https://github.com/your-username/GNProject.git
```

### 2. Populate Your Projects

This is the most important step. Open `projects.json` and replace the sample data with your own projects. This file acts as your portfolio's database.

**Example Project Entry:**
```json
{
  "category": "android",
  "status": "Completed",
  "name": "My Awesome App",
  "version": "v2.1.0",
  "icon": "assets/icons/my-app-icon.png",
  "tags": ["Kotlin", "Jetpack Compose", "MVVM"],
  "description": "A detailed description of my awesome Android application.",
  "repoUrl": "https://github.com/your-username/your-repo",
  "screenshots": [
    "assets/screenshots/my-app-ss1.jpg",
    "assets/screenshots/my-app-ss2.jpg"
  ]
}
```
> **Note**: To hide the screenshot gallery for a project, set the `screenshots` value to `null`.

### 3. Add Your Images

Place your project icons and screenshots into the corresponding folders inside `assets/`:
-   **Icons**: `assets/icons/`
-   **Screenshots**: `assets/screenshots/`

Ensure the paths in `projects.json` correctly point to your image files.

### 4. Deploy

1.  Commit and push all your changes to your forked repository.
2.  In your repository's **Settings**, navigate to the **Pages** section.
3.  Under **Source**, select your `main` branch.
4.  GitHub will provide you with your live URL. Congratulations, your portfolio is now live!

---

## 🎨 Technology Stack

-   **HTML5**: Semantic markup with ARIA attributes for accessibility.
-   **CSS3**: Modern styling with custom properties (variables), Flexbox, Grid, and responsive media queries.
-   **Vanilla JavaScript (ES6+)**: Handles all dynamic functionality, including data fetching, rendering, and event handling.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/GNProject/issues).

1.  **Fork** the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a **Pull Request**.

---

## 📄 License

This project is distributed under the MIT License.

---

<p align="center">
  Created with ❤️ by <b>GeekNeuron</b>
</p>
