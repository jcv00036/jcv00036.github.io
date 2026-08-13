function navDiv() {
    return document.getElementById('navigation');
}

function isNavigationActive() {
    return navDiv().dataset.active === 'true';
}

function toggleNavigation() {
    navDiv().dataset.active = !isNavigationActive();

    Navigation();
}


function Navigation() {
    const navDiv = document.getElementById('navigation');

    // Si no existe el div, no hacemos nada
    if (!navDiv) {
        return;
    }

    if (isNavigationActive()) {
        navDiv.innerHTML = `
            <div class="navigation">
                <img
                    src="/images/navigation.svg"
                    alt="Cerrar menú de navegación"
                    onclick="toggleNavigation()"
                    class="navigation-button"
                >
                <hr class="navigation-separator">
                <nav class="navigation-menu">
                    <ul class="navigation-list">
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/about">Acerca de</a></li>
                    </ul>
                </nav>
            </div>
        `;
    } else {
        navDiv.innerHTML = `
            <div class="navigation navigation-icon">
                <img
                    src="/images/navigation.svg"
                    alt="Abrir menú de navegación"
                    onclick="toggleNavigation()"
                    class="navigation-button"
                >
            </div>
        `;
    }
}


// Renderizado inicial
Navigation();