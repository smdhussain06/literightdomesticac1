/**
 * LITELAB Academy Navigation Component
 * Simple, minimal sidebar with a single Course 1 dropdown.
 */

const NAV_HTML = `
<header class="topbar">
  <button class="menu-toggle" onclick="toggleSidebar()">☰</button>
  <div class="topbar-brand"><span>💡</span> LITELAB Academy</div>
  <div class="topbar-title">Lighting Design — Professional Course Package</div>
</header>

<nav class="sidebar" id="sidebar">
  <div class="nav-section">Overview</div>
  <a class="nav-link" data-page="library" href="/index.html">
    <span class="nav-icon">📚</span> Academy Home
  </a>
  <a class="nav-link" data-page="logs" href="/logs.html">
    <span class="nav-icon">📝</span> Update Logs
  </a>

  <div class="nav-section nav-dropdown-toggle" onclick="this.classList.toggle('open')">
    Course 1 Overview <span class="dd-arrow">▸</span>
  </div>
  <div class="nav-dropdown-content">
    <a class="nav-link" data-page="home" href="/c1/index.html">
      <span class="nav-icon">🏠</span> Course 1 Home
    </a>
    <a class="nav-link" data-page="tree" href="/c1/pages/tree.html">
      <span class="nav-icon">🌳</span> Course Tree
    </a>
    <a class="nav-link" data-page="course-m1" href="/c1/pages/course-m1.html">
      <span class="nav-icon">1️⃣</span> Module 1: Introduction to LITELAB
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
    <a class="nav-link" data-page="s01" href="/c1/pages/s01.html">
      <span class="nav-icon">🎬</span> 1.1 Presentation & History
      <span class="nav-badge">14m</span>
    </a>
    <a class="nav-link" data-page="s02" href="/c1/pages/s02.html">
      <span class="nav-icon">🎬</span> 1.2 Core Values & Expertise
      <span class="nav-badge">13m</span>
    </a>
    <a class="nav-link" data-page="s03" href="/c1/pages/s03.html">
      <span class="nav-icon">🎬</span> 1.3 Roadmap & Methodology
      <span class="nav-badge">3m</span>
    </a>
    <a class="nav-link" data-page="s04" href="/c1/pages/s04.html">
      <span class="nav-icon">🎬</span> 2.1 What Is Light?
      <span class="nav-badge">11m</span>
    </a>
    <a class="nav-link" data-page="s05" href="/c1/pages/s05.html">
      <span class="nav-icon">🎬</span> 2.2 The Observer
      <span class="nav-badge">8m</span>
    </a>
    <a class="nav-link" data-page="s06" href="/c1/pages/s06.html">
      <span class="nav-icon">🎬</span> 2.3 Materials & Objects
      <span class="nav-badge">11m</span>
    </a>
    <a class="nav-link" data-page="s07" href="/c1/pages/s07.html">
      <span class="nav-icon">🎬</span> 3.1 The Concept
      <span class="nav-badge">11m</span>
    </a>
    <a class="nav-link" data-page="s08" href="/c1/pages/s08.html">
      <span class="nav-icon">🎬</span> 3.2 Composition
      <span class="nav-badge">10m</span>
    </a>
    <a class="nav-link" data-page="s09" href="/c1/pages/s09.html">
      <span class="nav-icon">🎬</span> 3.3 Layers & Hierarchies
      <span class="nav-badge">6m</span>
    </a>
    <a class="nav-link" data-page="s10" href="/c1/pages/s10.html">
      <span class="nav-icon">🎬</span> 4.1 Light Sources
      <span class="nav-badge">12m</span>
    </a>
    <a class="nav-link" data-page="s11" href="/c1/pages/s11.html">
      <span class="nav-icon">🎬</span> 4.2 Choose Source (1)
      <span class="nav-badge">13m</span>
    </a>
    <a class="nav-link" data-page="s12" href="/c1/pages/s12.html">
      <span class="nav-icon">🎬</span> 4.3 Choose Source (2)
      <span class="nav-badge">8m</span>
    </a>
    <a class="nav-link" data-page="s13" href="/c1/pages/s13.html">
      <span class="nav-icon">🎬</span> 4.4 Drawing the Light
      <span class="nav-badge">17m</span>
    </a>
    <a class="nav-link" data-page="s14" href="/c1/pages/s14.html">
      <span class="nav-icon">🎬</span> 4.5 Representation
      <span class="nav-badge">8m</span>
    </a>
  </div>
</nav>

<button class="print-btn" onclick="window.print()">🖨️ Print Section</button>

<style>
.nav-dropdown-toggle {
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dd-arrow {
  font-size: 10px;
  transition: transform 0.2s;
}
.nav-dropdown-toggle.open .dd-arrow {
  transform: rotate(90deg);
}
.nav-dropdown-content {
  display: none;
}
.nav-dropdown-toggle.open + .nav-dropdown-content {
  display: block;
}
</style>
`;

function initLayout(currentPageId) {
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  // Highlight active link
  const activeLink = document.querySelector('.nav-link[data-page="' + currentPageId + '"]');
  if (activeLink) activeLink.classList.add('active');

  // Show sections
  document.querySelectorAll('.section').forEach(function(s) { s.classList.add('active'); });

  // Auto-open dropdown if active page is inside it
  var dropContent = document.querySelector('.nav-dropdown-content');
  if (dropContent && dropContent.querySelector('.nav-link.active')) {
    dropContent.previousElementSibling.classList.add('open');
  }

  // Fix relative paths
  var pathParts = window.location.pathname.split('/').filter(function(p) { return p.length > 0; });
  var isGH = window.location.hostname.includes('github.io');
  var actual = isGH ? pathParts.slice(1) : pathParts;
  var depth = actual.length - 1;
  var prefix = '';
  for (var i = 0; i < depth; i++) prefix += '../';

  document.querySelectorAll('.nav-link').forEach(function(link) {
    var href = link.getAttribute('href');
    if (href.charAt(0) === '/') {
      link.setAttribute('href', prefix + href.substring(1));
    }
  });
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function() {
  var main = document.querySelector('.main');
  if (main) {
    main.addEventListener('click', function() {
      var sb = document.getElementById('sidebar');
      if (sb) sb.classList.remove('open');
    });
  }
});
