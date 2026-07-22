/* =========================================================
   EDIT YOUR CONTENT HERE
   Everything on the page (except the hero text, which you
   edit directly in index.html) is driven by these arrays.
   ========================================================= */

const EDUCATION = [
  {
    date: "2024 — Present",
    title: "M.S. in Computer Science",
    subtitle: "Your University",
    desc: "Focus area, thesis topic, or relevant coursework goes here."
  },
  {
    date: "2018 — 2022",
    title: "B.S. in Computer Science",
    subtitle: "Your University",
    desc: "GPA, honors, relevant coursework, or activities go here."
  }
];

const EXPERIENCE = [
  {
    date: "2025 — Present",
    title: "Software Engineer",
    subtitle: "CVS Health",
    bullets: [
      "One or two lines about a concrete thing you built or shipped.",
      "Another achievement, ideally with a number or measurable outcome."
    ]
  },
  {
    date: "2024 — 2025",
    title: "Software Engineer",
    subtitle: "DataAnnotation",
    bullets: [
      "What you worked on and the impact it had.",
      "Tools or stack you used, if relevant."
    ]
  },
   {
    date: "2024 — 2025",
    title: "Software Engineering Intern",
    subtitle: "Amazon",
    bullets: [
      "What you worked on and the impact it had.",
      "Tools or stack you used, if relevant."
    ]
  },
   {
    date: "2024 — 2025",
    title: "Software Engineer",
    subtitle: "Ericsson",
    bullets: [
      "What you worked on and the impact it had.",
      "Tools or stack you used, if relevant."
    ]
  }
   
];

const PROJECTS = [
  {
    title: "Project Name",
    desc: "One or two sentences on what this project does and why you built it.",
    tags: ["Python", "FastAPI", "Docker"],
    link: "https://github.com/yourname/project-one"
  },
  {
    title: "Another Project",
    desc: "What it does, the problem it solves, and anything notable about how it's built.",
    tags: ["TypeScript", "React"],
    link: "https://github.com/yourname/project-two"
  },
  {
    title: "Third Project",
    desc: "Short description. Keep these tight — a sentence or two reads best.",
    tags: ["Go", "CLI"],
    link: "https://github.com/yourname/project-three"
  }
];

/* =========================================================
   RENDERING — you shouldn't need to edit below this line
   ========================================================= */

function renderTimeline(containerId, items, hasBullets) {
  const container = document.getElementById(containerId);
  container.innerHTML = items.map(item => `
    <div class="timeline-item reveal">
      <div class="timeline-item__date">${item.date}</div>
      <div class="timeline-item__title">${item.title}</div>
      <div class="timeline-item__subtitle">${item.subtitle}</div>
      <div class="timeline-item__desc">
        ${hasBullets
          ? `<ul>${item.bullets.map(b => `<li>${b}</li>`).join("")}</ul>`
          : item.desc}
      </div>
    </div>
  `).join("");
}

function renderProjects() {
  const container = document.getElementById("projectsList");
  container.innerHTML = PROJECTS.map(p => `
    <div class="project reveal">
      <div class="project__main">
        <h3 class="project__title">${p.title}</h3>
        <p class="project__desc">${p.desc}</p>
        <div class="project__tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
      <a class="project__link" href="${p.link}" target="_blank" rel="noopener">View repo</a>
    </div>
  `).join("");
}

renderTimeline("educationList", EDUCATION, false);
renderTimeline("experienceList", EXPERIENCE, true);
renderProjects();

/* =========================================================
   MOBILE NAV TOGGLE
   ========================================================= */
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav__links");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* =========================================================
   SCROLL REVEAL
   ========================================================= */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
