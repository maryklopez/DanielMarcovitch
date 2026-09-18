document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");

const navToggle = document.querySelector(".nav-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");
const navigationLinks = document.querySelectorAll("#primary-navigation a");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const contactEmailLink = document.querySelector("#contact-email");
const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (navToggle && primaryNavigation) {
  const setNavigationState = (isOpen) => {
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    primaryNavigation.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("nav-open", isOpen);
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    setNavigationState(!isOpen);
  });

  navigationLinks.forEach((link) => {
    link.addEventListener("click", () => setNavigationState(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
      setNavigationState(false);
      navToggle.focus();
    }
  });

  const desktopNavigation = window.matchMedia("(min-width: 681px)");
  desktopNavigation.addEventListener("change", (event) => {
    if (event.matches) {
      setNavigationState(false);
    }
  });
}

if (contactForm) {
  const recipientEmail = contactForm.dataset.recipientEmail || "daniel@example.com";

  if (contactEmailLink) {
    contactEmailLink.textContent = recipientEmail;
    contactEmailLink.href = `mailto:${recipientEmail}`;
  }

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const senderEmail = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const emailBody = [
      `Name: ${name}`,
      `Email: ${senderEmail}`,
      `Phone: ${phone || "Not provided"}`,
      "",
      "Brief outline of matter:",
      message,
    ].join("\n");

    if (formStatus) {
      formStatus.textContent = "Opening your email application with a message addressed to Daniel.";
    }

    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      `Website inquiry from ${name}`,
    )}&body=${encodeURIComponent(emailBody)}`;
  });
}
