/**
 * LITELAB Academy Navigation Component
 * This script injects the shared Topbar and Sidebar into the page.
 */

const NAV_HTML = `
<!-- ─── Top Bar ─── -->
<header class="topbar">
  <button class="menu-toggle" onclick="toggleSidebar()">☰</button>
  <div class="topbar-brand">
    <span>💡</span> LITELAB Academy
  </div>
  <div class="topbar-title">Course Progress & Content Portal</div>
</header>

<!-- ─── Sidebar Navigation ─── -->
<nav class="sidebar" id="sidebar">
  <div class="nav-section">Navigation</div>
  <a class="nav-link" data-page="library" href="/index.html">
    <span class="nav-icon">📚</span> Course Library
  </a>
  <a class="nav-link" data-page="logs" href="/logs.html">
    <span class="nav-icon">📝</span> Academy Logs
  </a>

  <div class="nav-section">Course 1 Overview</div>
  <a class="nav-link" data-page="home" href="/c1/index.html">
    <span class="nav-icon">🏠</span> Course 1 Home
  </a>
  <a class="nav-link" data-page="tree" href="/c1/pages/tree.html">
    <span class="nav-icon">🌳</span> Course Tree
  </a>

  <div class="nav-section">Full Curriculum</div>
  <a class="nav-link" data-page="course-m1" href="/c1/pages/course-m1.html">
    <span class="nav-icon">1️⃣</span> Module 1: Intro to LITELAB
    <span class="nav-badge">30m</span>
  </a>
  <a class="nav-link" data-page="course-m2" href="/c1/pages/course-m2.html">
    <span class="nav-icon">2️⃣</span> Module 2: Light & Perception
    <span class="nav-badge">45m</span>
  </a>
  <a class="nav-link" data-page="course-m3" href="/c1/pages/course-m3.html">
    <span class="nav-icon">3️⃣</span> Module 3: Spatial Analysis
    <span class="nav-badge">45m</span>
  </a>
  <a class="nav-link" data-page="course-m4" href="/c1/pages/course-m4.html">
    <span class="nav-icon">4️⃣</span> Module 4: Conceptualization
    <span class="nav-badge">60m</span>
  </a>
  <a class="nav-link" data-page="course-m5" href="/c1/pages/course-m5.html">
    <span class="nav-icon">5️⃣</span> Module 5: Technique
    <span class="nav-badge">60m</span>
  </a>
  <a class="nav-link" data-page="course-m6" href="/c1/pages/course-m6.html">
    <span class="nav-icon">6️⃣</span> Module 6: Documentation
    <span class="nav-badge">60m</span>
  </a>
  <a class="nav-link" data-page="course-final" href="/c1/pages/course-final.html">
    <span class="nav-icon">🎓</span> Final Project
  </a>
  <a class="nav-link" data-page="course-appendix" href="/c1/pages/course-appendix.html">
    <span class="nav-icon">📖</span> Appendix & Glossary
  </a>

  <div class="nav-section">Synthesia Scripts — Unit 1</div>
  <a class="nav-link" data-page="s01" href="/c1/pages/s01.html">
    <span class="nav-icon">🎬</span> 1.1 Presentation & History
  </a>
  <a class="nav-link" data-page="s02" href="/c1/pages/s02.html">
    <span class="nav-icon">🎬</span> 1.2 Core Values & Expertise
  </a>
  <a class="nav-link" data-page="s03" href="/c1/pages/s03.html">
    <span class="nav-icon">🎬</span> 1.3 Roadmap & Methodology
  </a>

  <div class="nav-section">Synthesia Scripts — Unit 2</div>
  <a class="nav-link" data-page="s04" href="/c1/pages/s04.html">
    <span class="nav-icon">🎬</span> 2.1 What Is Light?
  </a>
  <a class="nav-link" data-page="s05" href="/c1/pages/s05.html">
    <span class="nav-icon">🎬</span> 2.2 The Observer
  </a>
  <a class="nav-link" data-page="s06" href="/c1/pages/s06.html">
    <span class="nav-icon">🎬</span> 2.3 Materials & Objects
  </a>

  <div class="nav-section">Synthesia Scripts — Unit 3</div>
  <a class="nav-link" data-page="s07" href="/c1/pages/s07.html">
    <span class="nav-icon">🎬</span> 3.1 The Concept
  </a>
  <a class="nav-link" data-page="s08" href="/c1/pages/s08.html">
    <span class="nav-icon">🎬</span> 3.2 Composition
  </a>
  <a class="nav-link" data-page="s09" href="/c1/pages/s09.html">
    <span class="nav-icon">🎬</span> 3.3 Layers & Hierarchies
  </a>

  <div class="nav-section">Synthesia Scripts — Unit 4</div>
  <a class="nav-link" data-page="s10" href="/c1/pages/s10.html">
    <span class="nav-icon">🎬</span> 4.1 Light Sources
  </a>
  <a class="nav-link" data-page="s11" href="/c1/pages/s11.html">
    <span class="nav-icon">🎬</span> 4.2 Choose Source (1)
  </a>
  <a class="nav-link" data-page="s12" href="/c1/pages/s12.html">
    <span class="nav-icon">🎬</span> 4.3 Choose Source (2)
  </a>
  <a class="nav-link" data-page="s13" href="/c1/pages/s13.html">
    <span class="nav-icon">🎬</span> 4.4 Drawing the Light
  </a>
  <a class="nav-link" data-page="s14" href="/c1/pages/s14.html">
    <span class="nav-icon">🎬</span> 4.5 Representation
  </a>
</nav>

<button class="print-btn" onclick="window.print()">🖨️ Print Section</button>
`;

function initLayout(currentPageId) {
  // Insert Nav
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  
  // Highlight active link
  const activeLink = document.querySelector(`.nav-link[data-page="${currentPageId}"]`);
  if (activeLink) activeLink.classList.add('active');

  // Activate all sections on the current page
  document.querySelectorAll('.section').forEach(s => s.classList.add('active'));

  // Calculate relative path depth
  const pathParts = window.location.pathname.split('/').filter(p => p.length > 0);
  const isGithubPages = window.location.hostname.includes('github.io');
  
  // If hosted on GitHub Pages, the first part is usually the repo name
  const repoName = isGithubPages ? pathParts[0] : null;
  const actualParts = isGithubPages ? pathParts.slice(1) : pathParts;
  
  const depth = actualParts.length - 1; // 0 for root, 1 for c1/, 2 for c1/pages/
  const prefix = '../'.repeat(depth);

  const fixLinks = () => {
    document.querySelectorAll('.nav-link').forEach(link => {
       let href = link.getAttribute('href');
       if (href.startsWith('/')) {
           // Convert absolute root paths to relative
           link.setAttribute('href', prefix + href.substring(1));
       }
    });

    // Fix back buttons or table links
    document.querySelectorAll('[onclick^="location.href"]').forEach(el => {
        const match = el.getAttribute('onclick').match(/'([^']+)'/);
        if (match) {
            // Usually these are local to the folder, so we don't change them
            // but we can ensure they work.
        }
    });
  };

  fixLinks();
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.main')?.addEventListener('click', () => {
        document.getElementById('sidebar')?.classList.remove('open');
    });
});
