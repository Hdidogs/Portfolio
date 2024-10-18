<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio de Rohée Alexis</title>
    @vite('resources/css/app.css')
</head>
<body class="bg-white text-gray-800">
<header id="main-header" class="fixed top-0 left-0 right-0 z-50 bg-gray-100 shadow-md transition-opacity duration-300">
    <div class="container mx-auto px-4 py-6 flex justify-between items-center">
        <div>
            <h1 class="text-3xl font-bold text-gray-800">Portfolio - Rohée Alexis</h1>
            <p class="text-gray-600">Développeur Junior</p>
        </div>
        <div>
            <p class="text-gray-600">Contact : <a href="mailto:Hdidogs.pro@gmail.com" class="text-blue-500">Hdidogs.pro@gmail.com</a> | Téléphone : 06 40 69 45 67</p>
        </div>
    </div>
</header>

<main class="container mx-auto px-4 py-8">
    <!-- Présentation Personnelle -->
    <section class="mb-12">
        <div class="bg-white shadow-md rounded-lg p-6">
            <h2 class="text-2xl font-semibold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Présentation Personnelle
            </h2>
            <div class="space-y-4">
                <div>
                    <h3 class="text-xl font-semibold mb-2">Parcours</h3>
                    <p>Diplômes obtenus :</p>
                    <ul class="list-disc pl-5">
                        <li>Baccalauréat Technologique STI2D - Mention Bien (2023)</li>
                        <li>Brevet des collèges - Mention Assez Bien (2019)</li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-xl font-semibold mb-2">CV</h3>
                    <a href="{{ route('download-cv') }}" target="_blank" class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Ouvrir le CV</a>
                </div>
                <div>
                    <h3 class="text-xl font-semibold mb-2">Objectifs</h3>
                    <p>Mon objectif est de développer mes compétences en tant que développeur full-stack, notamment dans les technologies Web et les bases de données.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Compétences -->
    <section class="mb-12">
        <div class="bg-white shadow-md rounded-lg p-6">
            <h2 class="text-2xl font-semibold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                Compétences Techniques
            </h2>
            <ul class="list-disc pl-5">
                <li><strong>Développement Web :</strong> PHP, HTML, CSS, JavaScript, Bootstrap</li>
                <li><strong>Développement Logiciel :</strong> JAVA, Python</li>
                <li><strong>Bases de Données :</strong> MySQL</li>
                <li><strong>Gestion de Versions :</strong> Git, GitHub</li>
                <li><strong>IDE :</strong> Suite JetBrains, IDLE</li>
                <li><strong>CMS :</strong> Wordpress</li>
                <li><strong>Outils divers :</strong> Arduino, SolidWorks</li>
            </ul>
        </div>
    </section>

    <!-- Expérience professionnelle -->
    <section class="mb-12">
        <div class="bg-white shadow-md rounded-lg p-6">
            <h2 class="text-2xl font-semibold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Expériences Professionnelles
            </h2>
            <ul class="list-disc pl-5">
                <li>Participation à la Nuit de l'Info</li>
                <li>Création d'un serveur Minecraft avec HTML, CSS, Java et SQL</li>
                <li>Projet pour l'escadre présidentielle lors de la dernière année du BAC STI2D</li>
                <li>Projet mené en première année de BTS SIO SLAM (site web et logiciels disponibles sur le portfolio)</li>
                <li>Stage au Ministère des Armées en première année de BTS SIO SLAM</li>
                <li>Alternance au Ministère des Armées en deuxième année de BTS SIO SLAM</li>
            </ul>
        </div>
    </section>

    <section class="mb-12">
        <div class="bg-white shadow-md rounded-lg p-6">
            <h2 class="text-2xl font-semibold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                Veille Technologique
            </h2>
            <div class="space-y-4">
                <div>
                    <h3 class="text-xl font-semibold mb-2">Méthode de Veille</h3>
                    <p>La méthod que j'ai utilisé est basé sur exel et la récupération d'information se fait via Google Alerte a raison d'un rapport par semaine avec toute les nouvautés concernant mon sujet.</p>
                </div>
                <div>
                    <h3 class="text-xl font-semibold mb-2">Sujet de Veille</h3>
                    <p>Ma veille porte sur l'IA dans le jeu vidéo.</p>
                </div>
                <div>
                    <h3 class="text-xl font-semibold mb-2">Articles Sélectionnés</h3>
                    <ul class="list-disc pl-5">
                        <li>Minecraft : Une IA pour jouer à votre place ? Ça existe pour de vrai ! - Microsoft développe et dévoile une IA capable de jouer a Minecraft, Mincraft ayant beaucoup de contenue vidéo disponible il est donc plus accessible pour entrainer, pour autant cella représente un vrai défis d'apprentissage de part la nature de minecraft - https://www.millenium.org/news/400342.html</li>
                        <li>Nvidia : l’insolent succès du géant des puces - Si les IA se développe de plus en plus c'est grace au puce de plus en plus puissante et Nvidia prend de l'avance sur se marché, les puces plus puissante permettront une meilleur gestion des IA par les processeur dans les jeux vidéos - https://leclaireur.fnac.com/article/457319-nvidia-linsolent-succes-du-geant-des-puces</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Retrouver Mes Projets -->
    <section class="mb-12">
        <div class="bg-white shadow-md rounded-lg p-6">
            <h2 class="text-2xl font-semibold mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.165c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.42-1.305.763-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.398 3-.403 1.02.005 2.043.137 3 .403 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.803 5.62-5.475 5.92.43.37.823 1.102.823 2.222v3.293c0 .32.218.694.825.577C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                Retrouver Mes Projets
            </h2>
            <a href="https://github.com/Hdidogs" target="_blank" class="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Voir mes projets sur GitHub</a>
        </div>
    </section>
</main>

<footer class="bg-gray-100 mt-12">
    <div class="container mx-auto px-4 py-6 text-center text-gray-600">
        © 2024 Rohée Alexis. Tous droits réservés.
    </div>
</footer>

@vite('resources/js/app.js')
<script>
    document.addEventListener('DOMContentLoaded', (event) => {
        const header = document.getElementById('main-header');
        const spacer = document.getElementById('header-spacer');

        const updateHeaderHeight = () => {
            spacer.style.height = `${header.offsetHeight}px`;
        };

        updateHeaderHeight();
        window.addEventListener('resize', updateHeaderHeight);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.style.opacity = '0.8';
            } else {
                header.style.opacity = '1';
            }
        });
    });
</script>
</body>
</html>
