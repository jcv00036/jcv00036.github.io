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

async function renderNavigationItems() {
    // Cargamos los items desde resources/navigation.json
    const fichero = '/resources/navigation.json';
    
    try {
        const response = await fetch(fichero);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const items = await response.json();

        const navigationList = document.querySelector('.navigation-list');

        if (!navigationList) {
            return;
        }

        navigationList.innerHTML = '';

        for (const item of items) {
            const li = document.createElement('li');
            const a = document.createElement('a');

            a.href = item.url;
            a.textContent = item.title;

            li.appendChild(a);
            navigationList.appendChild(li);
        }

    } catch (error) {
        console.error('No se pudo cargar la navegación:', error);
    }


}

function createTitleBar() {
    const titleBar = document.createElement('div');
    titleBar.className = 'titleBar';

    titleBar.innerHTML = `
        <h1 class="title">Juan Carrasco Vico</h1>
        <div id="navigation" data-active="false"></div>
    `;

    document.body.prepend(titleBar);
}

async function Navigation() {
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
                    </ul>
                </nav>
            </div>
        `;

        await renderNavigationItems();

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
createTitleBar();
Navigation();