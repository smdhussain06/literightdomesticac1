/**
 * LITELAB Academy Navigation Component
 * This script injects the shared Topbar and Sidebar into the page.
 */

// Global toggle function for dropdowns
window.toggleDropdown = function(el) {
    el.classList.toggle('active');
};

const NAV_HTML = `
<!-- ─── Top Bar ─── -->
<header class="topbar">
  <button class="menu-toggle" onclick="toggleSidebar()">☰</button>
  <div class="topbar-brand">
    <span>💡</span> LITELAB Academy
  </div>
  <div class="topbar-title">Academy Course Management</div>
</header>

<!-- ─── Sidebar Navigation ─── -->
<nav class="sidebar" id="sidebar">
  <div class="nav-section">LITELAB Global</div>
  <a class="nav-link" data-page="library" href="/index.html">
    <span class="nav-icon">📚</span> Academy Library
  </a>
  <a class="nav-link" data-page="logs" href="/logs.html">
    <span class="nav-icon">📝</span> Global Update Logs
  </a>

  <!-- Course 1 Collapsible Dropdown -->
  <div class="nav-section collapsible active" onclick="window.toggleDropdown(this)" style="margin-top: 20px; border-top: 1px solid var(--border); padding-top: 15px;">
    <span>⚡ COURSE 1: Lighting Design</span>
    <span class="chevron">▼</span>
  </div>
  <div class="dropdown-container">
    <div class="dropdown-inner" style="padding-bottom: 20px;">
        <a class="nav-link" data-page="home" href="/c1/index.html">
          <span class="nav-icon">🏠</span> C1 Home (Overview)
        </a>
        <a class="nav-link" data-page="tree" href="/c1/pages/tree.html">
          <span class="nav-icon">🌳</span> C1 Course Tree
        </a>

        <div class="nav-sub-section">📚 Curriculum Modules</div>
        <a class="nav-link" data-page="course-m1" href="/c1/pages/course-m1.html">1. Intro to LITELAB</a>
        <a class="nav-link" data-page="course-m2" href="/c1/pages/course-m2.html">2. Light & Perception</a>
        <a class="nav-link" data-page="course-m3" href="/c1/pages/course-m3.html">3. Spatial Analysis</a>
        <a class="nav-link" data-page="course-m4" href="/c1/pages/course-m4.html">4. Conceptualization</a>
        <a class="nav-link" data-page="course-m5" href="/c1/pages/course-m5.html">5. Technique</a>
        <a class="nav-link" data-page="course-m6" href="/c1/pages/course-m6.html">6. Documentation</a>
        <a class="nav-link" data-page="course-final" href="/c1/pages/course-final.html">🎓 Final Project</a>

        <div class="nav-sub-section">🎬 Video Scripts (1.1 - 4.5)</div>
        <div class="scripts-grid">
            <a class="nav-link-script" data-page="s01" href="/c1/pages/s01.html">1.1</a>
            <a class="nav-link-script" data-page="s02" href="/c1/pages/s02.html">1.2</a>
            <a class="nav-link-script" data-page="s03" href="/c1/pages/s03.html">1.3</a>
            <a class="nav-link-script" data-page="s04" href="/c1/pages/s04.html">2.1</a>
            <a class="nav-link-script" data-page="s05" href="/c1/pages/s05.html">2.2</a>
            <a class="nav-link-script" data-page="s06" href="/c1/pages/s06.html">2.3</a>
            <a class="nav-link-script" data-page="s07" href="/c1/pages/s07.html">3.1</a>
            <a class="nav-link-script" data-page="s08" href="/c1/pages/s08.html">3.2</a>
            <a class="nav-link-script" data-page="s09" href="/c1/pages/s09.html">3.3</a>
            <a class="nav-link-script" data-page="s10" href="/c1/pages/s10.html">4.1</a>
            <a class="nav-link-script" data-page="s11" href="/c1/pages/s11.html">4.2</a>
            <a class="nav-link-script" data-page="s12" href="/c1/pages/s12.html">4.3</a>
            <a class="nav-link-script" data-page="s13" href="/c1/pages/s13.html">4.4</a>
            <a class="nav-link-script" data-page="s14" href="/c1/pages/s14.html">4.5</a>
        </div>
    </div>
  </div>
</nav>

<button class="print-btn" onclick="window.print()">🖨️ Print Section</button>

<style>
.collapsible {
    display: flex; justify-content: space-between; align-items: center;
    cursor: pointer; padding: 10px 20px; font-weight: 800; font-size: 11px;
    letter-spacing: 0.5px; color: var(--accent); background: var(--accent-glow);
    border-radius: 8px; margin: 0 10px;
}
.collapsible:hover { opacity: 0.8; }
.chevron { font-size: 10px; transition: transform 0.3s; }
.collapsible.active .chevron { transform: rotate(180deg); }
.dropdown-container {
    max-height: 0; overflow: hidden; transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.collapsible.active + .dropdown-container {
    max-height: 2500px;
}
.nav-sub-section {
    padding: 15px 25px 8px; font-size: 10px; font-weight: 800;
    text-transform: uppercase; color: var(--text-muted); border-bottom: 1px solid var(--border);
    margin-bottom: 5px;
}
.scripts-grid {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; padding: 10px 20px;
}
.nav-link-script {
    aspect-ratio: 1; display: flex; align-items: center; justify-content: center;
    font-size: 10px; font-weight: 600; border-radius: 6px;
    background: var(--bg-card); border: 1px solid var(--border);
    text-decoration: none; color: var(--text-secondary); transition: all 0.2s;
}
.nav-link-script:hover, .nav-link-script.active {
    background: var(--accent); color: white; border-color: var(--accent);
}
</style>
`;

function initLayout(currentPageId) {
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  
  const activeLink = document.querySelector(`.nav-link[data-page="${currentPageId}"], .nav-link-script[data-page="${currentPageId}"]`);
  if (activeLink) activeLink.classList.add('active');

  document.querySelectorAll('.section').forEach(s => s.classList.add('active'));

  const pathParts = window.location.pathname.split('/').filter(p => p.length > 0);
  const isGithubPages = window.location.hostname.includes('github.io');
  const actualParts = isGithubPages ? pathParts.slice(1) : pathParts;
  
  const depth = actualParts.length - 1;
  const prefix = '../'.repeat(depth);

  const fixLinks = () => {
    document.querySelectorAll('.nav-link, .nav-link-script').forEach(link => {
       let href = link.getAttribute('href');
       if (href.startsWith('/')) {
           link.setAttribute('href', prefix + href.substring(1));
       }
    });
  };

  fixLinks();
}

function toggleSidebar() {
  document.getElementById('sidebar')?.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.main')?.addEventListener('click', () => {
        document.getElementById('sidebar')?.classList.remove('open');
    });
});
