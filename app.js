"use strict";

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const type = document.getElementById("projectType").value;
  const message = document.getElementById("projectMessage").value.trim();
  const subject = encodeURIComponent("Uriesmooth Group project enquiry: " + type);
  const body = encodeURIComponent("Project type: " + type + "\n\nProject description:\n" + message);
  const status = document.getElementById("formMessage");
  status.textContent = "Your enquiry is prepared below. No message has been sent or stored.";
  const existing = document.getElementById("emailDraftLink");
  if (existing) existing.remove();
  const link = document.createElement("a");
  link.id = "emailDraftLink";
  link.className = "button secondary";
  link.href = "mailto:?subject=" + subject + "&body=" + body;
  link.textContent = "Open enquiry in your email app";
  status.insertAdjacentElement("afterend", link);
});
