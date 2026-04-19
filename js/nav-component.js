/**
 * LiteRight Academy Navigation Component
 * This script injects the shared Topbar and Sidebar into the page.
 */

const NAV_HTML = `
<!-- ─── Top Bar ─── -->
<header class="topbar">
  <button class="menu-toggle" onclick="toggleSidebar()">☰</button>
  <div class="topbar-brand">
    <span>💡</span> LiteRight Academy
  </div>
  <div class="topbar-title">Lighting Design — Complete Course Package</div>
</header>

<!-- ─── Sidebar Navigation ─── -->
<nav class="sidebar" id="sidebar">
  <div class="nav-section">Overview</div>
  <a class="nav-link" data-page="home" href="/index.html">
    <span class="nav-icon">🏠</span> Course Home
  </a>
  <a class="nav-link" data-page="tree" href="/pages/tree.html">
    <span class="nav-icon">🌳</span> Course Tree
  </a>
  <a class="nav-link" data-page="logs" href="/pages/logs.html">
    <span class="nav-icon">📝</span> Update Logs
  </a>

  <div class="nav-section">Full Course</div>
  <a class="nav-link" data-page="course-m1" href="/pages/course-m1.html">
    <span class="nav-icon">1️⃣</span> Module 1: Introduction
    <span class="nav-badge">30m</span>
  </a>
  <a class="nav-link" data-page="course-m2" href="/pages/course-m2.html">
    <span class="nav-icon">2️⃣</span> Module 2: Light & Perception
    <span class="nav-badge">45m</span>
  </a>
  <a class="nav-link" data-page="course-m3" href="/pages/course-m3.html">
    <span class="nav-icon">3️⃣</span> Module 3: Spatial Analysis
    <span class="nav-badge">45m</span>
  </a>
  <a class="nav-link" data-page="course-m4" href="/pages/course-m4.html">
    <span class="nav-icon">4️⃣</span> Module 4: Conceptualization
    <span class="nav-badge">60m</span>
  </a>
  <a class="nav-link" data-page="course-m5" href="/pages/course-m5.html">
    <span class="nav-icon">5️⃣</span> Module 5: Technique
    <span class="nav-badge">60m</span>
  </a>
  <a class="nav-link" data-page="course-m6" href="/pages/course-m6.html">
    <span class="nav-icon">6️⃣</span> Module 6: Documentation
    <span class="nav-badge">60m</span>
  </a>
  <a class="nav-link" data-page="course-final" href="/pages/course-final.html">
    <span class="nav-icon">🎓</span> Final Project
  </a>
  <a class="nav-link" data-page="course-appendix" href="/pages/course-appendix.html">
    <span class="nav-icon">📖</span> Appendix & Glossary
  </a>

  <div class="nav-section">Synthesia Scripts — Unit 1</div>
  <a class="nav-link" data-page="s01" href="/pages/s01.html">
    <span class="nav-icon">🎬</span> 1.1 Presentation
    <span class="nav-badge">14m</span>
  </a>
  <a class="nav-link" data-page="s02" href="/pages/s02.html">
    <span class="nav-icon">🎬</span> 1.2 Influences
    <span class="nav-badge">13m</span>
  </a>
  <a class="nav-link" data-page="s03" href="/pages/s03.html">
    <span class="nav-icon">🎬</span> 1.3 Course Overview
    <span class="nav-badge">3m</span>
  </a>

  <div class="nav-section">Synthesia Scripts — Unit 2</div>
  <a class="nav-link" data-page="s04" href="/pages/s04.html">
    <span class="nav-icon">🎬</span> 2.1 What Is Light?
    <span class="nav-badge">11m</span>
  </a>
  <a class="nav-link" data-page="s05" href="/pages/s05.html">
    <span class="nav-icon">🎬</span> 2.2 The Observer
    <span class="nav-badge">8m</span>
  </a>
  <a class="nav-link" data-page="s06" href="/pages/s06.html">
    <span class="nav-icon">🎬</span> 2.3 Materials & Objects
    <span class="nav-badge">11m</span>
  </a>

  <div class="nav-section">Synthesia Scripts — Unit 3</div>
  <a class="nav-link" data-page="s07" href="/pages/s07.html">
    <span class="nav-icon">🎬</span> 3.1 The Concept
    <span class="nav-badge">11m</span>
  </a>
  <a class="nav-link" data-page="s08" href="/pages/s08.html">
    <span class="nav-icon">🎬</span> 3.2 Composition
    <span class="nav-badge">10m</span>
  </a>
  <a class="nav-link" data-page="s09" href="/pages/s09.html">
    <span class="nav-icon">🎬</span> 3.3 Layers & Hierarchies
    <span class="nav-badge">6m</span>
  </a>

  <div class="nav-section">Synthesia Scripts — Unit 4</div>
  <a class="nav-link" data-page="s10" href="/pages/s10.html">
    <span class="nav-icon">🎬</span> 4.1 Light Sources
    <span class="nav-badge">12m</span>
  </a>
  <a class="nav-link" data-page="s11" href="/pages/s11.html">
    <span class="nav-icon">🎬</span> 4.2 Choose Source (1)
    <span class="nav-badge">13m</span>
  </a>
  <a class="nav-link" data-page="s12" href="/pages/s12.html">
    <span class="nav-icon">🎬</span> 4.3 Choose Source (2)
    <span class="nav-badge">8m</span>
  </a>
  <a class="nav-link" data-page="s13" href="/pages/s13.html">
    <span class="nav-icon">🎬</span> 4.4 Drawing the Light
    <span class="nav-badge">17m</span>
  </a>
  <a class="nav-link" data-page="s14" href="/pages/s14.html">
    <span class="nav-icon">🎬</span> 4.5 Representation
    <span class="nav-badge">8m</span>
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

  // Activate all sections on the current page (since each page is a separate HTML file now)
  document.querySelectorAll('.section').forEach(s => s.classList.add('active'));

  // Fix relative paths for pages in subdirectories
  const isSubPage = window.location.pathname.includes('/pages/');
  
  const fixLinks = () => {
    document.querySelectorAll('.nav-link').forEach(link => {
       let href = link.getAttribute('href');
       if (isSubPage) {
           if (href === '/index.html') link.setAttribute('href', '../index.html');
           else if (href.startsWith('/pages/')) link.setAttribute('href', href.replace('/pages/', ''));
       } else {
           if (href.startsWith('/')) link.setAttribute('href', href.substring(1));
       }
    });

    // Convert any remaining showSection onclicks or back-top buttons to real links
    document.querySelectorAll('[onclick^="showSection"]').forEach(el => {
      const match = el.getAttribute('onclick').match(/'([^']+)'/);
      if (!match) return;
      const sectionId = match[1];
      let path = sectionId === 'home' ? 'index.html' : `pages/${sectionId}.html`;
      if (isSubPage) {
          path = sectionId === 'home' ? '../index.html' : `${sectionId}.html`;
          // If the link is to another page in the same directory, we don't need 'pages/'
          if (path.startsWith('pages/')) path = path.replace('pages/', '');
      }
      
      // If it's a link, just change href. If not, add click listener.
      if (el.tagName === 'A') {
          el.href = path;
          el.removeAttribute('onclick');
      } else {
          el.style.cursor = 'pointer';
          el.onclick = () => window.location.href = path;
      }
    });
  };

  fixLinks();
}

// Global UI Handlers
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.main')?.addEventListener('click', () => {
        document.getElementById('sidebar')?.classList.remove('open');
    });
});
