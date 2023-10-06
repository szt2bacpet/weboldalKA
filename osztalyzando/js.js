// Az "Dark Mode" gomb elem kiválasztása
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Az aktuális mód meghatározása a localStorage-ban tárolt érték alapján
const currentMode = localStorage.getItem('mode');

// Alapértelmezett mód beállítása, ha nincs tárolt érték
if (currentMode === 'dark') {
    document.body.classList.add('dark-mode');
}

// Módváltás funkció
darkModeToggle.addEventListener('click', () => {
    // Ha jelenleg világos mód van beállítva, váltás sötét módra
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('mode', 'light'); // Mód mentése a localStorage-ba
    } else {
        // Ha jelenleg sötét mód van beállítva, váltás világos módra
        document.body.classList.add('dark-mode');
        localStorage.setItem('mode', 'dark'); // Mód mentése a localStorage-ba
    }
});
