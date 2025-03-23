// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

    // Check for saved theme preference or use the system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.remove('dark');
    } else if (savedTheme === 'dark') {
        document.body.classList.add('dark');
    } else if (prefersDarkScheme.matches) {
        document.body.classList.add('dark');
    }

    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', function() {
        if (document.body.classList.contains('dark')) {
            document.body.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Typing effect for hero description
    const typedTextElement = document.getElementById('typed-text');
    const textToType = "Je suis un développeur passionné, spécialisé dans la création d'applications et de services web modernes et performantes.\n" +
        "                Découvrez mes compétences, projets et veille technologique.";
    const highlightTerms = ["développeur", "applications", "services web", "compétences", "projets", "veille technologique"];
    let index = 0;

    function typeText() {
        if (index < textToType.length) {
            typedTextElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeText, 30);
        } else {
            // Highlight terms after typing is complete
            highlightTermsInText();
        }
    }

    function highlightTermsInText() {
        let highlightedText = typedTextElement.textContent;

        highlightTerms.forEach(term => {
            const regex = new RegExp(`(${term})`, 'gi');
            highlightedText = highlightedText.replace(regex, '<span class="text-primary font-semibold">$1</span>');
        });

        typedTextElement.innerHTML = highlightedText;
    }

    // Start typing effect
    typeText();

    // Skills filtering
    const filterButtons = document.querySelectorAll('.skills-filter .filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            const category = this.getAttribute('data-category');

            // Show/hide skill cards based on category
            skillCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Projects filtering
    const projectFilterButtons = document.querySelectorAll('.filter-buttons .filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    const projectSearch = document.getElementById('project-search');

    function filterProjects() {
        const searchTerm = projectSearch.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-buttons .filter-btn.active').getAttribute('data-filter');

        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            const cardTitle = card.querySelector('h3').textContent.toLowerCase();
            const cardDescription = card.querySelector('p').textContent.toLowerCase();

            const matchesSearch = cardTitle.includes(searchTerm) || cardDescription.includes(searchTerm);
            const matchesFilter = activeFilter === 'all' || cardCategory === activeFilter;

            if (matchesSearch && matchesFilter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    projectFilterButtons.forEach(button => {
        button.addEventListener('click', function() {
            projectFilterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterProjects();
        });
    });

    if (projectSearch) {
        projectSearch.addEventListener('input', filterProjects);
    }

    // Project Details Modal
    const projectDetailsButtons = document.querySelectorAll('.project-details-btn');
    const projectModal = document.getElementById('project-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalTabs = document.querySelectorAll('.modal-tab');
    const modalTabContents = document.querySelectorAll('.modal-tab-content');

    // Project data (simplified version of what would normally come from a database or API)
    const projectsData = [
        {
            id: 1,
            title: "Voice Cloning & Audio Processing Suite",
            description: "Comprehensive audio processing system including real-time voice cloning, multilingual transcription, and speaker diarization.",
            longDescription: "A state-of-the-art voice cloning system that allows for real-time audio processing with minimal latency. The system uses deep learning models to generate natural-sounding speech that matches the target voice with unprecedented accuracy and emotional range.",
            technologies: ["TensorFlow TTS", "PyTorch", "Whisper", "FastAPI", "React"],
            image: "images/project-voice.jpg",
            demoUrl: "#",
            githubUrl: "https://github.com/swilliams9772",
            completed: "2023",
            teamSize: "3 people",
            difficulty: 5,
            achievements: [
                "Developed one-shot voice cloning requiring only 5 seconds of audio",
                "Reduced model size by 60% while maintaining voice quality",
                "Achieved 80ms latency for real-time applications",
                "Implemented multi-speaker voice cloning with 95% accuracy"
            ],
            implementation: "The system was implemented using TensorFlow TTS for the voice synthesis, PyTorch for the neural network architecture, and Whisper for transcription. The backend was built with FastAPI, and the frontend with React."
        },
        {
            id: 2,
            title: "DALL-E 2 PyTorch Implementation",
            description: "Open-source implementation of OpenAI's DALL-E 2 image generation model using PyTorch.",
            longDescription: "A PyTorch implementation of the DALL-E 2 architecture for generating high-quality images from text descriptions. The project includes optimizations for CUDA acceleration and containerization with Docker for easy deployment and scaling.",
            technologies: ["PyTorch", "CUDA", "Docker", "HuggingFace", "Python"],
            image: "images/project-dalle.jpg",
            demoUrl: "#",
            githubUrl: "https://github.com/swilliams9772",
            completed: "2023",
            teamSize: "2 people",
            difficulty: 5,
            achievements: [
                "Implemented the full DALL-E 2 architecture with PyTorch",
                "Optimized for CUDA acceleration with 40% performance improvement",
                "Created Docker containers for easy deployment",
                "Built a web interface for text-to-image generation"
            ],
            implementation: "The implementation follows the architecture described in the DALL-E 2 paper, with modifications for better performance on consumer hardware. CUDA optimizations were applied to reduce inference time, and the model was containerized with Docker for easy deployment."
        },
        {
            id: 3,
            title: "Multi-Agent RL Environment",
            description: "A flexible environment for training and evaluating multi-agent reinforcement learning algorithms.",
            longDescription: "A customizable environment for developing and testing multi-agent reinforcement learning algorithms. The system supports various reward structures, observation spaces, and agent interactions.",
            technologies: ["Python", "TensorFlow", "OpenAI Gym", "Ray", "Docker"],
            image: "images/project-rl.jpg",
            demoUrl: "#",
            githubUrl: "https://github.com/swilliams9772",
            completed: "2023",
            teamSize: "2 people",
            difficulty: 4,
            achievements: [
                "Designed a flexible multi-agent environment supporting various RL algorithms",
                "Implemented custom reward structures and observation spaces",
                "Created visualization tools for agent behavior analysis",
                "Benchmarked performance against standard environments"
            ],
            implementation: "The environment was built on top of OpenAI Gym, with custom extensions for multi-agent support. Ray was used for distributed training, and TensorFlow for implementing the reinforcement learning algorithms."
        },
        {
            id: 4,
            title: "Community Grant Management System",
            description: "Web application for managing community grant applications, reviews, and distributions.",
            longDescription: "A full-stack web application that streamlines the process of managing community grants from application to distribution. The system includes features for application submission, review workflows, and financial tracking.",
            technologies: ["Next.js", "PostgreSQL", "AWS", "TypeScript", "Prisma"],
            image: "images/project-grant.jpg",
            demoUrl: "#",
            githubUrl: "https://github.com/swilliams9772",
            completed: "2022",
            teamSize: "2 people",
            difficulty: 3,
            achievements: [
                "Built a full-stack application with Next.js and PostgreSQL",
                "Implemented secure authentication and authorization",
                "Created a workflow system for grant application review",
                "Deployed on AWS with CI/CD pipeline"
            ],
            implementation: "The application was built with Next.js for the frontend and API routes, PostgreSQL for the database, and Prisma as the ORM. AWS was used for hosting, with S3 for file storage and RDS for the database."
        }
    ];

    // Open project modal with project details
    projectDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = parseInt(this.getAttribute('data-project'));
            const project = projectsData.find(p => p.id === projectId);

            if (project) {
                // Fill modal with project details
                document.getElementById('modal-title').textContent = project.title;
                document.getElementById('modal-description').textContent = project.longDescription;
                document.getElementById('modal-completed').textContent = project.completed;
                document.getElementById('modal-team-size').textContent = project.teamSize;
                document.getElementById('modal-image').src = project.image;
                document.getElementById('modal-long-description').textContent = project.longDescription;
                document.getElementById('modal-implementation').textContent = project.implementation;
                document.getElementById('modal-challenges').textContent = "During development, we encountered several challenges including performance optimization, scalability concerns, and integration complexities. These were addressed through innovative approaches and best practices in software engineering.";
                document.getElementById('modal-demo-link').href = project.demoUrl;
                document.getElementById('modal-github-link').href = project.githubUrl;

                // Clear and fill achievements list
                const achievementsList = document.getElementById('modal-achievements');
                achievementsList.innerHTML = '';
                project.achievements.forEach(achievement => {
                    const li = document.createElement('li');
                    li.textContent = achievement;
                    achievementsList.appendChild(li);
                });

                // Clear and fill technologies
                const technologiesDiv = document.getElementById('modal-technologies');
                technologiesDiv.innerHTML = '';
                project.technologies.forEach(tech => {
                    const badge = document.createElement('span');
                    badge.className = 'badge';
                    badge.textContent = tech;
                    technologiesDiv.appendChild(badge);
                });

                // Set difficulty stars
                const difficultyDiv = document.getElementById('modal-difficulty');
                difficultyDiv.innerHTML = '';
                for (let i = 0; i < 5; i++) {
                    const star = document.createElement('span');
                    star.className = i < project.difficulty ? 'star filled' : 'star';
                    difficultyDiv.appendChild(star);
                }

                // Fill gallery
                const galleryGrid = document.querySelector('.modal-gallery-grid');
                galleryGrid.innerHTML = '';
                for (let i = 1; i <= 4; i++) {
                    const galleryItem = document.createElement('div');
                    galleryItem.className = 'modal-image';

                    const img = document.createElement('img');
                    img.src = `images/gallery-${projectId}-${i}.jpg`;
                    img.alt = `${project.title} screenshot ${i}`;
                    img.onerror = function() {
                        this.src = 'images/placeholder.jpg';
                    };

                    galleryItem.appendChild(img);
                    galleryGrid.appendChild(galleryItem);
                }

                // Show modal
                projectModal.classList.add('active');

                // Reset to first tab
                modalTabs.forEach(tab => tab.classList.remove('active'));
                modalTabContents.forEach(content => content.classList.remove('active'));
                modalTabs[0].classList.add('active');
                modalTabContents[0].classList.add('active');
            }
        });
    });

    // Close modal
    if (modalClose) {
        modalClose.addEventListener('click', function() {
            projectModal.classList.remove('active');
        });
    }

    // Modal tabs
    modalTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            modalTabs.forEach(t => t.classList.remove('active'));
            modalTabContents.forEach(c => c.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(`tab-${tabId}`).classList.add('active');
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === projectModal) {
            projectModal.classList.remove('active');
        }
    });

    // Resume Modal
    const resumeBtn = document.getElementById('resume-btn');
    const resumeModal = document.getElementById('resume-modal');
    const resumeModalClose = resumeModal?.querySelector('.modal-close');
    const downloadResumeBtn = document.getElementById('download-resume');

    if (resumeBtn && resumeModal) {
        resumeBtn.addEventListener('click', function() {
            resumeModal.classList.add('active');
        });

        resumeModalClose.addEventListener('click', function() {
            resumeModal.classList.remove('active');
        });

        window.addEventListener('click', function(e) {
            if (e.target === resumeModal) {
                resumeModal.classList.remove('active');
            }
        });

        if (downloadResumeBtn) {
            downloadResumeBtn.addEventListener('click', function() {
                showToast('Resume Downloaded', 'Your resume has been downloaded successfully.');
            });
        }
    }

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Simulate form submission
            const formData = new FormData(contactForm);
            const name = formData.get('name');

            // Show success message
            showToast('Message Sent', `Thank you ${name}, your message has been sent successfully.`);

            // Reset form
            contactForm.reset();
        });
    }

    // Newsletter Form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Show success message
            showToast('Subscribed', 'You have been successfully subscribed to the newsletter.');

            // Reset form
            newsletterForm.reset();
        });
    }

    // Toast Notification
    const toast = document.getElementById('toast');
    const toastTitle = document.querySelector('.toast-title');
    const toastDescription = document.querySelector('.toast-description');
    const toastClose = document.querySelector('.toast-close');

    function showToast(title, message) {
        toastTitle.textContent = title;
        toastDescription.textContent = message;
        toast.classList.add('active');

        // Auto hide after 5 seconds
        setTimeout(function() {
            toast.classList.remove('active');
        }, 5000);
    }

    if (toastClose) {
        toastClose.addEventListener('click', function() {
            toast.classList.remove('active');
        });
    }

    // Scroll Progress Indicator
    const scrollProgress = document.getElementById('scroll-progress');

    window.addEventListener('scroll', function() {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;

        if (scrollProgress) {
            scrollProgress.style.width = scrolled + '%';
        }
    });

    // Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top-fixed');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Footer Back to Top Button
    const footerBackToTopBtn = document.getElementById('back-to-top');

    if (footerBackToTopBtn) {
        footerBackToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Set current year in footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Add active class to nav links based on scroll position
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href').substring(1);

            if (href === currentSection) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveNavLink);

    // Initialize AOS (Animate on Scroll) like functionality
    function initializeAOS() {
        const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    initializeAOS();
});