const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}
/* ==================== EMAILJS CONTACT FORM ==================== */

document.addEventListener("DOMContentLoaded", function () {

  const contactForm = document.getElementById("contactForm");

  if (!contactForm) return;

  const submitButton = document.getElementById("submitButton");
  const formStatus = document.getElementById("formStatus");

  // Initialize EmailJS
  emailjs.init({
    publicKey: "J-rJBoXYIC8VyZ3Le"
  });

  contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    submitButton.disabled = true;
    submitButton.innerHTML = "Sending...";

    formStatus.textContent = "Sending your message...";
    formStatus.style.color = "inherit";

    emailjs.sendForm(
      "service_tzk5a9i",
      "template_tcepyrf",
      contactForm
    )

    .then(function () {

      formStatus.textContent =
        "Your message has been sent successfully! Thank you for contacting me.";

      formStatus.style.color = "green";

      contactForm.reset();

    })

    .catch(function (error) {

      console.error("EmailJS error:", error);

      formStatus.textContent =
        "Sorry, your message could not be sent. Please try again.";

      formStatus.style.color = "red";

    })

    .finally(function () {

      submitButton.disabled = false;
      submitButton.innerHTML = 'Send message <span>↗</span>';

    });

  });

});
