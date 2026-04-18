const joinButton = document.querySelector(".hero-button");
const contactSection = document.querySelector("#contact");

const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("main section");

const contactForm = document.querySelector(".contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const formStatus = document.querySelector(".form-status");

function setActiveLink(sectionId) {
  navLinks.forEach(function (link) {
    link.classList.remove("active");
  });

  const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

  if (activeLink) {
    activeLink.classList.add("active");
  }
}

joinButton.addEventListener("click", function () {
  contactSection.scrollIntoView({
    behavior: "smooth"
  });

  setActiveLink("contact");
});

navLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (!targetSection) return;

    targetSection.scrollIntoView({
      behavior: "smooth"
    });

    setActiveLink(targetId.replace("#", ""));
  });
});

window.addEventListener("scroll", function () {
  let currentSectionId = "home";

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - 140) {
      currentSectionId = section.getAttribute("id");
    }
  });

  setActiveLink(currentSectionId);
});

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (nameValue === "" || emailValue === "" || messageValue === "") {
    formStatus.textContent = "Please fill in all fields before sending your message.";
    formStatus.style.color = "#ff6b6b";
    return;
  }

  formStatus.textContent = "Your message has been sent successfully.";
  formStatus.style.color = "#4cd137";

  contactForm.reset();
});

setActiveLink("home");