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
    desc: "Software Engineering Track"
  }
];

const EXPERIENCE = [
  {
    date: "2025 — Present",
    title: "Software Engineer",
    subtitle: "CVS Health",
    bullets: [
      "- Retell AI Integration",
      "- Compengine Eligibility Engine",
      "- Data Archival ETL pipelines"
    ]
  },
  {
    date: "2024 — 2025",
    title: "Software Engineer",
    subtitle: "DataAnnotation",
    bullets: [
      "- LLM tuning"
    ]
  },
   {
    date: "2022",
    title: "Software Engineering Intern",
    subtitle: "Amazon",
    bullets: [
      "- Drone Certificate Renewal Tool"
    ]
  },
   {
    date: "2021",
    title: "Software Engineer",
    subtitle: "Ericsson",
    bullets: [
      "- Cell Tower data extraction Tool"
    ]
  }
   
];

const PROJECTS = [
  {
    title: "Jobert",
    desc: "IN DEVELOPMENT - This webapp aims to help Software Engineers through the job hunting process. It creates reminders for users to follow up with recruiters, creates reminders for users to apply to x amount of jobs per week, and rewards users for completing these tasks",
    tags: ["Python", "MongoDB"],
    link: "https://github.com/VivekMahapatra/jobert"
  },
  {
    title: "SideQwest",
    desc: "TO BE DEVELOPED - Have you ever had to wait on somone or something and didn't have enough time to do something but enough time to get bored? SideQwest is a webapp that finds activities near you that'll keep you occupied for however long you may be waiting. Simply enter how much time you have, answer some questions, and SideQwest will find things for you to do in that time frame.",
    tags: ["TypeScript", "React"],
    link: "https://github.com/VivekMahapatra/side_qwest"
  }
];

const dev = n => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${n}/${n}-original.svg`;

const SQL_ICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23f29111' stroke-width='1.6' stroke-linecap='round'%3E%3Cellipse cx='12' cy='5.5' rx='7' ry='2.8'/%3E%3Cpath d='M5 5.5v6.5c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8V5.5M5 12v6.5c0 1.5 3.1 2.8 7 2.8s7-1.3 7-2.8V12'/%3E%3C/svg%3E";

const SKILLS = [
  {
    group: "languages",
    items: [
      { name: "Python", icon: dev("python") },
      { name: "Java", icon: dev("java") },
      { name: "C", icon: dev("c") },
      { name: "C++", icon: dev("cplusplus") },
      { name: "C#", icon: dev("csharp") },
      { name: "JavaScript", icon: dev("javascript") },
      { name: "TypeScript", icon: dev("typescript") },
      { name: "SQL", icon: SQL_ICON },
      { name: "HTML", icon: dev("html5") },
      { name: "JSON", icon: "https://cdn.simpleicons.org/json/000000" }
    ]
  },
  {
    group: "cloud & devops",
    items: [
      { name: "Linux", icon: dev("linux") },
      { name: "Azure", icon: dev("azure") },
      { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "GCP", icon: dev("googlecloud") },
      { name: "Docker", icon: dev("docker") },
      { name: "Kubernetes", icon: dev("kubernetes") },
      { name: "GitHub", icon: dev("github") },
      { name: "Bitbucket", icon: dev("bitbucket") }
    ]
  },
  {
    group: "data & ai",
    items: [
      { name: "Pandas", icon: dev("pandas") },
      { name: "Scikit-Learn", icon: dev("scikitlearn") },
      { name: "PySpark", icon: dev("apachespark") },
      { name: "Hugging Face", icon: "https://cdn.simpleicons.org/huggingface" },
      { name: "MongoDB", icon: dev("mongodb") }
    ]
  },
  {
    group: "frameworks",
    items: [
      { name: "AngularJS", icon: dev("angularjs") },
      { name: "ReactJS", icon: dev("react") },
      { name: "NodeJS", icon: dev("nodejs") }
    ]
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
