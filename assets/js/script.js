// Logika Tab Navigasi
function openTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    const target = document.getElementById(tabId);
    if (target) {
        target.classList.add('active');
    }
}

// Logika Tema (Dark/Light)
function toggleTheme() {
    const html = document.documentElement;
    const toggleBtn = document.querySelector('.theme-toggle');
    const currentTheme = html.getAttribute('data-theme');

    if (currentTheme === 'dark') {
        html.setAttribute('data-theme', 'light');
        if (toggleBtn) toggleBtn.textContent = '🌙';
    } else {
        html.setAttribute('data-theme', 'dark');
        if (toggleBtn) toggleBtn.textContent = '☀️';
    }
}
