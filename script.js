/* =========================================================
   EDIT YOUR CONTENT HERE
   Everything on the page (except the hero text, which you
   edit directly in index.html) is driven by these arrays.
   ========================================================= */

const EDUCATION = [
  {
    date: "2026 — Present",
    title: "M.S. in Computer Science",
    subtitle: "Georgia Institute of Technology",
    desc: "Artificial Intelligence Track"
  },
  {
    date: "2019 — 2023",
    title: "B.S. in Electrical and Computer Engineering",
    subtitle: "University of Texas at Austin",
    desc: "Software Engineering Track
  }
];

const EXPERIENCE = [
  {
    date: "2025 — Present",
    title: "Software Engineer",
    subtitle: "CVS Health",
    bullets: [
      "Retell AI Prod Support",
      "HCD Data Archive Migration to GCP",
      "Compensation Eligibility Engine",
      "Network Drive Data Procurement"
    ]
  },
  {
    date: "2024 — 2025",
    title: "Software Engineer",
    subtitle: "DataAnnotation",
    bullets: [
      "Trained 80 LLMs"
    ]
  },
   {
    date: "2022",
    title: "Software Engineering Intern",
    subtitle: "Amazon",
    bullets: [
      "Drone certificate data retrieval tool"
    ]
  },
   {
    date: "2021",
    title: "Software Engineer",
    subtitle: "Ericsson",
    bullets: [
      "Cell Tower Data retrieval tool"
    ]
  }
   
];

const PROJECTS = [
  {
    title: "Jobert",
    desc: "TO BE DEVELOPED - This webapp aims to help Software Engineers through the job hunting process. It creates reminders for users to follow up with recruiters, creates reminders for users to apply to x amount of jobs per week, and rewards users for completing these tasks",
    tags: ["Python", "MongoDB"],
    link: "https://github.com/VivekMahapatra/jobert"
  },
  {
    title: "SideQwest",
    desc: "TO BE DEVELOPED - This webapp aims to help people find activities near them to do if they have only 30 minutes to 1 hour of time.",
    tags: ["ReactJS", "NodeJS","MongoDB"],
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
