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

  <!-- Course 1 Dropdown Section -->
  <div class="nav-section collapsible active" onclick="toggleDropdown(this)">
    <span>Course 1: Lighting Design</span>
    <span class="chevron">▼</span>
  </div>
  <div class="dropdown-container">
    <a class="nav-link" data-page="home" href="/c1/index.html">
      <span class="nav-icon">🏠</span> Course 1 Home
    </a>
    <a class="nav-link" data-page="tree" href="/c1/pages/tree.html">
      <span class="nav-icon">🌳</span> Course Tree
    </a>

    <div class="nav-sub-section">Curriculum</div>
    <a class="nav-link" data-page="course-m1" href="/c1/pages/course-m1.html">
      <span class="nav-icon">1️⃣</span> Module 1: Intro
    </a>
    <a class="nav-link" data-page="course-m2" href="/c1/pages/course-m2.html">
      <span class="nav-icon">2️⃣</span> Module 2: Light
    </a>
    <a class="nav-link" data-page="course-m3" href="/c1/pages/course-m3.html">
      <span class="nav-icon">3️⃣</span> Module 3: Analysis
    </a>
    <a class="nav-link" data-page="course-m4" href="/c1/pages/course-m4.html">
      <span class="nav-icon">4️⃣</span> Module 4: Concept
    </a>
    <a class="nav-link" data-page="course-m5" href="/c1/pages/course-m5.html">
      <span class="nav-icon">5️⃣</span> Module 5: Tech
    </a>
    <a class="nav-link" data-page="course-m6" href="/c1/pages/course-m6.html">
      <span class="nav-icon">6️⃣</span> Module 6: Docs
    </a>

    <div class="nav-sub-section">Scripts</div>
    <div class="scripts-grid" style="display: grid; grid-template-columns: repeat(3, 1fr); padding: 5px 15px; gap: 5px;">
        <a class="nav-link-script" data-page="s01" href="/c1/pages/s01.html" title="1.1">1.1</a>
        <a class="nav-link-script" data-page="s02" href="/c1/pages/s02.html" title="1.2">1.2</a>
        <a class="nav-link-script" data-page="s03" href="/c1/pages/s03.html" title="1.3">1.3</a>
        <a class="nav-link-script" data-page="s04" href="/c1/pages/s04.html" title="2.1">2.1</a>
        <a class="nav-link-script" data-page="s05" href="/c1/pages/s05.html" title="2.2">2.2</a>
        <a class="nav-link-script" data-page="s06" href="/c1/pages/s06.html" title="2.3">2.3</a>
        <a class="nav-link-script" data-page="s07" href="/c1/pages/s07.html" title="3.1">3.1</a>
        <a class="nav-link-script" data-page="s08" href="/c1/pages/s08.html" title="3.2">3.2</a>
        <a class="nav-link-script" data-page="s09" href="/c1/pages/s09.html" title="3.3">3.3</a>
        <a class="nav-link-script" data-page="s10" href="/c1/pages/s10.html" title="4.1">4.1</a>
        <a class="nav-link-script" data-page="s11" href="/c1/pages/s11.html" title="4.2">4.2</a>
        <a class="nav-link-script" data-page="s12" href="/c1/pages/s12.html" title="4.3">4.3</a>
        <a class="nav-link-script" data-page="s13" href="/c1/pages/s13.html" title="4.4">4.4</a>
        <a class="nav-link-script" data-page="s14" href="/c1/pages/s14.html" title="4.5">4.5</a>
    </div>
  </div>
</nav>

<button class="print-btn" onclick="window.print()">🖨️ Print Section</button>

<style>
.collapsible {
    display: flex; justify-content: space-between; align-items: center;
    cursor: pointer; transition: background 0.2s;
}
.collapsible:hover { background: rgba(0,0,0,0.05); }
.chevron { font-size: 10px; transition: transform 0.3s; }
.collapsible.active .chevron { transform: rotate(180deg); }
.dropdown-container {
    max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out;
    background: rgba(0,0,0,0.02);
}
.collapsible.active + .dropdown-container {
    max-height: 2000px; /* Large enough to fit content */
}
.nav-sub-section {
    padding: 8px 30px 4px; font-size: 9px; font-weight: 700;
    text-transform: uppercase; color: var(--text-muted);
}
.nav-link-script {
    display: flex; align-items: center; justify-content: center;
    padding: 4px; font-size: 11px; border-radius: 4px;
    background: var(--bg-primary); border: 1px solid var(--border);
    text-decoration: none; color: var(--text-secondary);
}
.nav-link-script:hover, .nav-link-script.active {
    background: var(--accent-glow); border-color: var(--accent); color: var(--accent);
}
</style>
`;

function initLayout(currentPageId) {
  // Insert Nav
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  
  // Highlight active link
  const activeLink = document.querySelector(`.nav-link[data-page="${currentPageId}"], .nav-link-script[data-page="${currentPageId}"]`);
  if (activeLink) activeLink.classList.add('active');

  // Activate all sections on the current page
  document.querySelectorAll('.section').forEach(s => s.classList.add('active'));

  // Calculate relative path depth
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

function toggleDropdown(el) {
    el.classList.toggle('active');
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.main')?.addEventListener('click', () => {
        document.getElementById('sidebar')?.classList.remove('open');
    });
});
