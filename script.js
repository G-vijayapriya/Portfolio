// --- 1. Animation Logic logic removed per request ---

// --- 2. Mobile Menu Toggle ---
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

const projectsData = [
    // Java
    {
        name: "College Management System",
        desc: "Comprehensive OOP based institution tracking software.",
        category: "java",
        language: "Java",
        image:
            "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
        code: "https://github.com/G-vijayapriya/Console-project",
    },
    {
        name: "HashSet Implementation",
        desc: "Core data structure mapping and hash allocation.",
        category: "java",
        language: "Java",
        image:
            "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&w=600&q=80",
        preview: "",
        code: "https://github.com/G-vijayapriya/HashSet-Implementation",
    },
    {
        name: "Todo List",
        desc: "Console task manager utilizing low level File IO strategies.",
        category: "java",
        language: "Java",
        image:
            "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=600&q=80",
        code: "https://github.com/G-vijayapriya/TodoUsingFiles",
    },

    {
        name: "Planet Page",
        desc: "Backend service fetching and routing JSON APIs.",
        category: "nodejs",
        language: "Node.js",
        image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
        code: "https://github.com/G-vijayapriya/planet",
    },

    {
        name: "Password Manager",
        desc: "Client-side generation & management of secure strings.",
        category: "js",
        language: "HTML , CSS & JavaScript",
        image:
            "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=600&q=80",
        preview: "https://g-vijayapriya.github.io/Passwor-generator/",
        code: "https://github.com/G-vijayapriya/Passwor-generator",
    },
    {
        name: "Expense Calculator",
        desc: "A dynamic DOM based simple financial tool calculation app.",
        category: "js",
        language: "HTML , CSS & JavaScript",
        image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
        preview: "https://g-vijayapriya.github.io/ExpenseTracker/",
        code: "https://github.com/G-vijayapriya/ExpenseTracker",
    },
    {
        name: "Problem Solving Page",
        desc: "Algorithmic logic solver dashboard inside the browser.",
        category: "js",
        language: "HTML , CSS & JavaScript",
        image:
            "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=600&q=80",
        preview: "https://g-vijayapriya.github.io/FormattingString/",
        code: "https://github.com/G-vijayapriya/FormattingString",
    },

    // HTML & CSS
    {
        name: "Zoho One",
        desc: "A fully responsive pixel-perfect layout clone.",
        category: "htmlcss",
        language: "HTML & CSS",
        image:
            "images/zohoone.png",
        preview: "https://g-vijayapriya.github.io/ZohoOne/",
        code: "https://github.com/G-vijayapriya/ZohoOne",
    },
    {
        name: "Page Recreation",
        category: "htmlcss",
        language: "HTML & CSS",
        image:
            "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&w=600&q=80",
        preview: "https://g-vijayapriya.github.io/FyloPageRecreation/",
        code: "https://github.com/G-vijayapriya/FyloPageRecreation",
    },
    {
        name: "Page Recreation",
        category: "htmlcss",
        language: "HTML & CSS",
        image:
            "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
        preview: "https://g-vijayapriya.github.io/PhantomPageRecreation/",
        code: "https://github.com/G-vijayapriya/PhantomPageRecreation",
    },

    // Extension
    {
        name: "Notes Making",
        category: "extension",
        language: "JavaScript",
        image:
            "images/extension.jpeg",
        code: "https://github.com/G-vijayapriya/extension",
    },

    // Mobile Development
    {
        name: "Mini Calculator",
        category: "mobile",
        language: "Kotlin",
        image:
            "images/mobiledev1.jpg",
        verticalImage: "images/mobiledev.jpg",
        preview: "",
        code: "https://github.com/G-vijayapriya/miniCalculator",
    },

    // Scratch
    {
        name: "2048 Game",
        category: "scratch",
        language: "Scratch",
        image: "images/2048.png",
        preview: "https://scratch.mit.edu/projects/1191328879/fullscreen",
    },
    {
        name: "Balloon pop game",
        category: "scratch",
        language: "Scratch",
        image: "images/balloon.png",
        preview: "https://scratch.mit.edu/projects/1189546502/fullscreen/",
    },
    {
        name: "Analog & digital clock",
        category: "scratch",
        language: "Scratch",
        image: "images/clock.png",
        preview: "https://scratch.mit.edu/projects/1185640453/fullscreen/",
    },
];

const projectsContainer = document.getElementById("projects-container");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderProjects(category) {
    // Clear container
    projectsContainer.innerHTML = "";

    // Filter data
    const filtered =
        category === "all"
            ? projectsData
            : projectsData.filter((p) => p.category === category);

    filtered.forEach((project) => {
        const card = document.createElement("div");
        const nameClass = 'project-' + project.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        card.className = `project-card ${project.category} ${nameClass} ${project.isVertical ? "vertical" : ""}`;

        card.innerHTML = `
            <div class="project-img-wrapper">
                <img src="${project.image}" alt="${project.name}" class="project-img">
                <div class="project-hover-overlay">
                    <div class="project-buttons">
                        ${project.preview ? `<a href="${project.preview}" class="btn btn-primary" target="_blank">Preview</a>` : ""}
                        ${project.verticalImage ? `<button class="btn btn-primary view-vertical" data-img="${project.verticalImage}">View</button>` : ""}
                        ${project.code ? `<a href="${project.code}" class="btn btn-secondary" target="_blank">Code</a>` : ""}
                    </div>
                </div>
            </div>
            <div class="project-info">
                <h3>${project.name}</h3>
                <span class="project-lang">${project.language}</span>
            </div>
        `;

        projectsContainer.appendChild(card);
    });
}

// Add delegated listener for 'View Vertical' buttons
projectsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-vertical")) {
        const imgPath = e.target.getAttribute("data-img");
        const modal = document.getElementById("image-modal");
        const modalImg = document.getElementById("modal-img");
        if (modal && modalImg) {
            modalImg.src = imgPath;
            modal.classList.add("active");
        }
    }
});

// Render All on initial load
renderProjects("all");

// Add click listeners to filter buttons
filterButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        // Handle Active states
        filterButtons.forEach((b) => b.classList.remove("active"));
        e.currentTarget.classList.add("active");

        // Grab category and render
        const category = e.currentTarget.getAttribute("data-filter");
        renderProjects(category);
    });
});

// --- 4. Modal Logic ---
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const pythonCards = document.querySelectorAll("#latest-learning .project-card");
const closeBtn = document.querySelector(".modal-close");

if (pythonCards.length > 0 && modal && modalImg) {
    pythonCards.forEach((card) => {
        card.addEventListener("click", () => {
            const imgSrc = card.querySelector(".project-img").src;
            modalImg.src = imgSrc;
            modal.classList.add("active");
        });
    });
}

if (closeBtn && modal) {
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("active");
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
}

// --- 5. Reveal Animations ---
const revealCards = () => {
    const cards = document.querySelectorAll(
        ".skill-card, .project-card, .tool-card",
    );
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("reveal");
                }
            });
        },
        { threshold: 0.1 },
    );
    cards.forEach((card) => observer.observe(card));
};

// --- 6. Looping Typing Animation ---
const typeEffect = () => {
    const el = document.getElementById("typing-text");
    if (!el) return;
    const text = "Learning Through Building";
    let i = 0;
    let deleting = false;

    const tick = () => {
        if (!deleting) {
            el.textContent = text.slice(0, i + 1);
            i++;
            if (i === text.length) {
                deleting = true;
                setTimeout(tick, 1500)
                return;
            }
        } else {
            el.textContent = text.slice(0, i - 1);
            i--;
            if (i === 0) {
                deleting = false;
                setTimeout(tick, 500); // pause before retyping
                return;
            }
        }
        setTimeout(tick, deleting ? 60 : 100);
    };

    tick();
};

// --- 7. Active Navigation (Scroll Spy) ---
const initScrollSpy = () => {
    const sections = document.querySelectorAll("section[id], footer[id]");
    const navLinks = document.querySelectorAll(".nav-links a");

    const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute("id");
                navLinks.forEach((link) => {
                    link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
                });
            }
        });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));
};

document.addEventListener("DOMContentLoaded", () => {
    revealCards();
    typeEffect();
    initScrollSpy();
});
