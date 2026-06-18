'use strict';

// SIDEBAR
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

if (sidebarBtn && sidebar) {
  sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });
}

// PROJECT FILTER
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

function filterProjects(category) {
  filterItems.forEach(item => {

    if (
      category === "all" ||
      item.dataset.category === category
    ) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }

  });
}

if (select) {
  select.addEventListener("click", () => {
    select.classList.toggle("active");
  });
}

selectItems.forEach(item => {
  item.addEventListener("click", () => {

    const category = item.innerText.toLowerCase();

    if (selectValue) {
      selectValue.innerText = item.innerText;
    }

    filterProjects(category);

  });
});

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {

    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    filterProjects(btn.innerText.toLowerCase());

  });
});

// PAGE NAVIGATION
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    const target = link.innerText.trim().toLowerCase();

    pages.forEach(page => {
      page.classList.remove("active");
    });

    navLinks.forEach(nav => {
      nav.classList.remove("active");
    });

    const activePage = document.querySelector(
      `[data-page="${target}"]`
    );

    if (activePage) {
      activePage.classList.add("active");
    }

    link.classList.add("active");

  });

});

// =====================
// PROJECT MODAL
// =====================

const projectData = {

roaddamage: {
title: "Road Damage Classification from Vehicle Dashcam Images",


category: "Artificial Intelligence",

description: [
  "This project aims to automate road condition assessment by classifying road surface damage captured through vehicle dashcam imagery. A deep learning model was developed to identify various types of road defects, enabling faster and more scalable infrastructure monitoring compared to traditional manual inspections.",

  "The system processes road images, extracts relevant visual features, and classifies road conditions into predefined damage categories. The solution can assist transportation agencies in prioritizing road maintenance and improving public safety."
],

role: "Full Stack Developer",
duration: "2 Months",
year: "2026",

technologies: [
  "Python",
  "TensorFlow",
  "Keras",
  "OpenCV",
  "CNN",
  "MobileNetV3",
  "YOLO"
],

features: [
  "Road damage image classification",
  "Deep learning-based feature extraction",
  "Multiple road defect categories",
  "Model performance evaluation",
  "Data augmentation pipeline",
  "Infrastructure condition assessment"
],

github: "https://github.com/fildzahkhls/klasifikasikerusakanjalan",

images: [
  "./assets/images/project1-1.png",
  "./assets/images/project1-2.png",
  "./assets/images/project1-3.png",
  "./assets/images/project1-4.png",
  "./assets/images/project1-5.png",
  "./assets/images/project1-6.png"
]


},

riskdashboard: {
title: "Dashboard Monitoring Risk and Audit Findings Follow-Up",


category: "Data Analytics",

description: [
  "This project focuses on developing an interactive dashboard for monitoring organizational risks and tracking the progress of audit finding resolutions.",

  "The dashboard provides centralized visibility into risk categories, mitigation status, overdue actions, and completion rates of corrective measures, supporting data-driven decision making."
],

role: "Data Analyst",
duration: "1 Day",
year: "2026",

technologies: [
  "Looker Studio",
  "Google Sheets",
  "Data Visualization"
],

features: [
  "Risk monitoring dashboard",
  "Audit finding tracking",
  "Corrective action monitoring",
  "KPI visualization",
  "Interactive filtering",
  "Executive reporting"
],

github: "https://datastudio.google.com/reporting/12947a07-aac2-4d90-9098-faedfad595bc",

images: [
  "./assets/images/project2-1.png"
]


},

hcdashboard: {
title: "Human Capital Intelligent Dashboard",


category: "Data Analytics",

description: [
  "The Human Capital Intelligent Dashboard was designed to transform workforce data into actionable business insights.",

  "The dashboard provides analysis of employee demographics, attrition trends, compensation distribution, promotions, and performance indicators."
],

role: "Data Analyst",
duration: "1 Day",
year: "2026",

technologies: [
  "Power BI",
  "DAX",
  "Power Query",
  "Excel"
],

features: [
  "Employee demographic analysis",
  "Attrition monitoring",
  "Compensation analysis",
  "Promotion tracking",
  "Performance insights",
  "Executive HR dashboard"
],

github: "-",

images: [
  "./assets/images/project3-1.png"
]


},

tikim: {
title: "Internal Content and Agenda Management System for TIKIM Immigration",


category: "Web Development",

description: [
  "A web-based internal management system developed for the Information and Communication Technology Division (TIKIM) of the Immigration Office.",

  "The system centralizes agenda management, content publication, activity documentation, and administrative workflows to improve operational efficiency."
],

role: "Full Stack Developer",
duration: "2 Weeks",
year: "2025",

technologies: [
  "Laravel",
  "PHP",
  "MySQL",
  "JavaScript",
  "Bootstrap"
],

features: [
  "Agenda management",
  "Content publishing",
  "Role-based access control",
  "Document management",
  "Activity reporting",
  "Internal workflow automation"
],

github: "https://github.com/fildzahkhls/manajemenkontenagendaimigrasikendari",

images: [
  "./assets/images/project4-1.png",
  "./assets/images/project4-2.png",
  "./assets/images/project4-3.png",
  "./assets/images/project4-4.png",
  "./assets/images/project4-5.png",
  "./assets/images/project4-6.png"
]


},

mining: {
title: "Mining Land Segmentation and Classification",


category: "Artificial Intelligence",

description: [
  "This project focuses on analyzing satellite imagery to identify and classify mining land areas through image segmentation and machine learning techniques.",

  "The solution supports environmental monitoring and land-use assessment by distinguishing mining zones from surrounding land cover classes."
],

role: "ML Developer",
duration: "1 Months",
year: "2025",

technologies: [
  "Python",
  "Django",
  "SQLite",
  "ResNet",
  "Unet"
],

features: [
  "Satellite image segmentation",
  "Land cover classification",
  "Mining area identification",
  "Spatial analysis",
  "Environmental monitoring",
  "Geospatial visualization"
],

github: "https://github.com/fildzahkhls/mininglandclassificationsultra",

images: [
  "./assets/images/project5-1.png",
  "./assets/images/project5-2.png",
  "./assets/images/project5-3.png",
  "./assets/images/project5-4.png",
  "./assets/images/project5-5.png"
]


},

coffee: {
title: "Coffee Bean Detection and Classification",


category: "Computer Vision",

description: [
  "This project was developed to automate coffee bean quality inspection using object detection and image classification techniques.",

  "The system detects individual coffee beans using YOLO and classifies each bean into quality categories using deep learning models."
],

role: "Full Stack Developer",
duration: "2 Months",
year: "2025",

technologies: [
  "YOLOv11",
  "TensorFlow",
  "Keras",
  "OpenCV",
  "Flask",
  "EfficientNetV2",
  "MobileNetV3"
],

features: [
  "Coffee bean detection",
  "Defect classification",
  "Bounding box visualization",
  "Confidence score analysis",
  "Quality distribution reporting",
  "Real-time web deployment"
],

github: "https://github.com/fildzahkhls/coffeebeanclassification",

images: [
  "./assets/images/project6-1.png",
  "./assets/images/project6-2.png",
  "./assets/images/project6-3.png",
  "./assets/images/project6-4.png",
  "./assets/images/project6-5.png"
]


}

};


const modal =
  document.getElementById("projectModal");

const modalTitle =
  document.getElementById("modalTitle");

const modalDescription =
  document.getElementById("modalDescription");

const modalImage =
  document.getElementById("modalImage");

const modalTech =
  document.getElementById("modalTech");

const githubLink =
  document.getElementById("githubLink");

const closeModal =
  document.getElementById("closeModal");

// THUMBNAILS
const thumbnailContainer =
  document.getElementById("thumbnailContainer");

// DOTS
const galleryDots =
  document.getElementById("galleryDots");

let currentImages = [];
let currentIndex = 0;

document
.querySelectorAll(".project-card")
.forEach(card => {

  card.addEventListener("click", e => {

    e.preventDefault();

    const key =
      card.dataset.project;

    const project =
      projectData[key];

    if(!project) return;

// Di dalam event listener klik .project-card Anda:
modalTitle.textContent = project.title;
modalDescription.textContent = project.description;
githubLink.href = project.github;

// Set meta data tambahan secara dinamis
document.getElementById("modalRole").textContent = project.role || "Fullstack Developer";
document.getElementById("modalDuration").textContent = project.duration || "3 Months";
document.getElementById("modalYear").textContent = project.year || "2025";

// Reset dan render Teknologi Berbentuk List item asli
modalTech.innerHTML = "";
project.technologies.forEach(tech => {
  modalTech.innerHTML += `<li>${tech}</li>`;
});

// Render Fitur Utama secara dinamis
const modalFeatures = document.getElementById("modalFeatures");
modalFeatures.innerHTML = "";
if(project.features) {
  project.features.forEach(feat => {
    modalFeatures.innerHTML += `<li>${feat}</li>`;
  });
}

    currentImages =
      project.images;

    currentIndex = 0;

    modalImage.src =
      currentImages[0];

      thumbnailContainer.innerHTML = "";
galleryDots.innerHTML = "";

currentImages.forEach((img, index) => {

  // Thumbnail
  const thumb =
    document.createElement("img");

  thumb.src = img;

  if(index === 0){
    thumb.classList.add("active");
  }

  thumb.addEventListener("click", () => {

    currentIndex = index;

    updateGallery();

  });

  thumbnailContainer.appendChild(thumb);

  // Dot
  const dot =
    document.createElement("span");

  if(index === 0){
    dot.classList.add("active");
  }

  galleryDots.appendChild(dot);

});

    modal.classList.add("active");

  });

});

function updateGallery(){

  modalImage.src =
    currentImages[currentIndex];

  // update thumbnail active
  document
    .querySelectorAll("#thumbnailContainer img")
    .forEach((thumb,index)=>{

      thumb.classList.toggle(
        "active",
        index === currentIndex
      );

    });

  // update dots active
  document
    .querySelectorAll("#galleryDots span")
    .forEach((dot,index)=>{

      dot.classList.toggle(
        "active",
        index === currentIndex
      );

    });

}
document
.querySelector(".next")
.addEventListener("click", () => {

  currentIndex++;

  if(currentIndex >= currentImages.length){

    currentIndex = 0;

  }

updateGallery();

});

document
.querySelector(".prev")
.addEventListener("click", () => {

  currentIndex--;

  if(currentIndex < 0){

    currentIndex =
      currentImages.length - 1;

  }

  updateGallery();

});

closeModal.addEventListener("click", () => {

  modal.classList.remove("active");

});

modal.addEventListener("click", e => {

  if(e.target === modal){

    modal.classList.remove("active");

  }

});