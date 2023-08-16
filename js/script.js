const openbtn = document.querySelector(".nav-bar .toggle-menu");
const mobileMenu = document.querySelector(".nav-bar .mobile-menu");
const menuBar = document.querySelector(".nav-bar .menu-bar");
const closebtn = document.querySelector(".nav-bar .close-menu");
const navLinks = document.querySelector(".nav-bar .mobile-menu .nav-links");

function toggleMenu() {
  mobileMenu.classList.toggle("disable");
  menuBar.classList.toggle("disable");
}

openbtn.addEventListener("click", toggleMenu);
closebtn.addEventListener("click", toggleMenu);
navLinks.addEventListener("click", (e) => {
  if (e.target.className === "nav-item") {
    toggleMenu();
  }
});
// -----------Dynamic projwct section----------

const projectsInfo = [];
const firstProject = document.querySelector(".work-section .project1");
const projectCards = document.querySelectorAll(".work-section .project-sample");

projectsInfo.push({
  projectName: "Book Vehicle - A Ruby on Rails and React Project",
  projectLang: ["Ruby on Rails", "React", "PostgreSQL", "SCSS"],
  projectImgSrc: "./img/2023-08-16 20_50_03-Window.png",
  projectImgAlt: "Vehicles",
  featureImg: "./img/2023-08-16 20_50_03-Window.png",
  projectshortDescription:
    '"Book Vehicle" is a booking car that allows users to easily book and reserve cars online. With Book Vehicle, users can log in and access a wide range of cars to choose from.',
  projectDescription: `"Book Vehicle" is a group project I created, combining the power of Ruby on Rails and React to revolutionize the car rental and reserving experience.
    📅 With "Book Vehicle," users can:
    ✅ Explore a curated selection of cars
    ✅ Easily schedule car reservation
    💼 "Book Vehicle" showcases my passion for creating user-friendly applications and integrating cutting-edge technologies.`,

  seeLive: "http://localhost:3000/",
  seeSource: "https://github.com/HERMON-1995/Book_vehicle_rental-backend",
});
projectsInfo.push({
  projectName: "Miscellaneous App ",
  projectLang: ["Ruby on Rails", "CSS", "PostgreSQL"],
  projectImgSrc: "./img/2023-08-04 20_34_27-Window.png",
  projectImgAlt: "Miscellaneous App",
  featureImg: "./img/2023-08-04 20_34_27-Window.png",
  projectshortDescription:
    "Miscellaneous App is a web app that helps users categorize and manage their transactions for easy expense tracking.",
  projectDescription:
    "Introducing the Miscellaneous App! 🚀 A sleek and user-friendly website built with Ruby on Rails, that helps users categorize and manage their transactions for easy expense tracking. Stay organized and gain insights into your spending habits with this user-friendly tool.",
  seeLive: "https://sz-ino.onrender.com/",
  seeSource: "https://github.com/theodoku/budget_app_rails",
});
projectsInfo.push({
  projectName: "World Metric",
  projectLang: ["React", "CSS", "API"],
  projectImgSrc: "./img/metric app.jpg",
  projectImgAlt: "Country",
  featureImg: "./img/metric app.jpg",
  projectshortDescription:
    "World Metric is a Metrics webapp that provides users with quick and easy access to information about countries worldwide. ",
  projectDescription:
    "World Metric is a React/Redux Metrics webapp that provides users with quick and easy access to information about countries worldwide. It offers details such as capital, population, currency, languages, and time zone.",
  seeLive: "https://world-metric-app.onrender.com/",
  seeSource: "https://github.com/theodoku/metrics-webapp",
});
projectsInfo.push({
  projectName: "Space-Travelers",
  projectLang: ["React", "CSS", "API"],
  projectImgSrc: "./img/space travellers.png",
  projectImgAlt: "Space Hub",
  featureImg: "./img/space travellers.png",
  projectshortDescription:
    "Space Hub is a webapp built with React and Redux, it fetches data from SpaceX API and Displays it. ",
  projectDescription:
    "Welcome to the Space Travel Hub! 🚀 Embark on an extraordinary journey through the cosmos with our out-of-this-world web application. Developed as a thrilling group project, Space Travel Hub integrates SpaceX's powerful API to offer you an unrivaled experience in the realm of space exploration.",
  seeLive: "https://space-hub-nqrr.onrender.com/",
  seeSource: "https://github.com/theodoku/space-traveler-hub",
});
projectsInfo.push({
  projectName: "Math magicians",
  projectLang: ["React", "CSS", "HTML", "JavaScript"],
  projectImgSrc: "./img/maths magician.png",
  projectImgAlt: "Calculator",
  featureImg: "./img/maths magician.png",
  projectshortDescription:
    '"Math magicians" is a website for all fans of mathematics.',
  projectDescription:
    '"Math magicians" is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: Make simple calculations and Read a random math-related quote.',
  seeLive: "https://theodoku-maths-magicians.onrender.com/",
  seeSource: "https://github.com/theodoku/maths-magicians",
});
projectsInfo.push({
  projectName: "Orbit Web Innovation",
  projectLang: ["JavaScript", "CSS"],
  projectImgSrc: "./img/orbit.png",
  projectImgAlt: "Orbit Web Innovation",
  featureImg: "./img/orbit.png",
  projectshortDescription:
    "Orbit Web Innovation is a website for an online school that shows courses offered by school and their lecturers.",
  projectDescription:
    "This website is online school that provide information of courses offered by school and  display lecturers of the school",
  seeLive: "https://theodoku.github.io/1st-Capstone-Project/index.html",
  seeSource: "https://github.com/theodoku/1st-Capstone-Project",
});
projectsInfo.push({
  projectName: "Leaderboard",
  projectLang: ["html", "css", "javascript"],
  projectImgSrc: "./img/leader board.png",
  projectImgAlt: "Leaderboard",
  featureImg: "./img/leader board.png",
  projectshortDescription:
    "Leaderboard website is an app to display scores of various students",
  projectDescription:
    'Welcome to the "Leaderboard App" Project! 🎮🕹️ This is an app built to show scores of examination by a group of students',
  seeLive: "https://theodoku.github.io/Leaderboard/dist/",
  seeSource: "https://github.com/theodoku/Leaderboard",
});

function addProjectLang(langList) {
  let prolangs = "";
  langList.forEach((lang) => {
    prolangs += `
          <li>${lang}</li>`;
  });
  return prolangs;
}

function createProjectCards() {
  projectsInfo.forEach((project, index) => {
    if (index === 0) {
      firstProject.innerHTML = `
          <img src=${
            project.projectImgSrc
          } alt="sample image" class="project-img">
          <div class="project-content">
              <h3 class="project-name">${project.projectName}</h3>
              <p class="project-description">${
                project.projectshortDescription
              }</p>
              <ul class="project-lang">
                  ${addProjectLang(project.projectLang)}
              </ul>
              <button type="button" class="half-btn" id="project${index}">See Project</button>
            </div>`;
    } else {
      projectCards[
        index - 1
      ].style.backgroundImage = `url(${project.projectImgSrc})`;
      projectCards[index - 1].innerHTML = `
            <div class="content-wrapper">
                <h3 class="project-name">${project.projectName}</h3>
                <p class="project-description">${
                  project.projectshortDescription
                }</p>
                <ul class="project-lang">
                  ${addProjectLang(project.projectLang)}
                </ul>
            </div>
            <button type="button" class="full-btn" id="project${index}">See Project</button>`;
    }
  });
}

createProjectCards();

// -------------Model----------
const project = document.querySelector("#portfolio .grid-wrapper");
const modelWrapper = document.querySelector(".model-wrapper");
const model = document.querySelector(".model");
const closepopup = document.querySelector(".model .close-popup");

function addProjectInfo(projectObj) {
  model.querySelector(".project-name").textContent = projectObj.projectName;
  model.querySelector(".project-description").textContent =
    projectObj.projectDescription;
  model.querySelector(".project-img").src = projectObj.featureImg;
  model.querySelector(".project-img").alt = projectObj.projectImgAlt;
  model.querySelector(".project-lang").innerHTML = `${addProjectLang(
    projectObj.projectLang
  )}`;
  model.querySelector(".model .see-live").href = projectObj.seeLive;
  model.querySelector(".model .see-source").href = projectObj.seeSource;
}

project.addEventListener("click", (e) => {
  if (e.target.id) {
    const index = e.target.id.replace("project", "");
    if (projectsInfo[index]) {
      modelWrapper.classList.toggle("disable");
      addProjectInfo(projectsInfo[index]);
    }
  }
});

closepopup.addEventListener("click", () => {
  modelWrapper.classList.toggle("disable");
});

// -------------Form----------
const form = document.querySelector(".contact-section .contact-form");
const msg = document.querySelector(".contact-section .contact-form .message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.elements.mail;
  msg.textContent = "";
  if (email.value === email.value.toLowerCase()) {
    form.submit();
  } else {
    msg.textContent = "Please enter a lowercase email";
  }
});

// ---------Storage-------
function restoreData() {
  const formData = JSON.parse(localStorage.getItem("formData"));
  form.elements.name.value = formData.name;
  form.elements.mail.value = formData.email;
  form.elements.msg.value = formData.msg;
}

function updateLocalStorage() {
  const formData = {
    name: form.elements.name.value,
    email: form.elements.mail.value,
    msg: form.elements.msg.value,
  };
  localStorage.setItem("formData", JSON.stringify(formData));
  restoreData();
}

form.elements.name.onchange = updateLocalStorage;
form.elements.mail.onchange = updateLocalStorage;
form.elements.msg.onchange = updateLocalStorage;

if (!localStorage.getItem("formData")) {
  updateLocalStorage();
} else {
  restoreData();
}

/* eslint-disable */
window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});
/* eslint-enable */
