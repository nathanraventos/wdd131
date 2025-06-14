import { participantTemplate, successTemplate } from "./Templates.js";

window.addEventListener("DOMContentLoaded", () => {
  let participantCount = 1;

  const form = document.querySelector("form");
  const addButton = document.getElementById("add");
  const summaryElement = document.getElementById("summary");

  addButton.addEventListener("click", () => {
    participantCount++;
    const newParticipant = participantTemplate(participantCount);
    addButton.insertAdjacentHTML("beforebegin", newParticipant);
  });

  form.addEventListener("submit", submitForm);

  function submitForm(event) {
    event.preventDefault();

    let feeElements = [...document.querySelectorAll("[id^=fee]")];

    const total = feeElements.reduce((sum, feeInput) => {
      const feeValue = parseFloat(feeInput.value);
      return sum + (isNaN(feeValue) ? 0 : feeValue);
    }, 0);

    const adultName = document.getElementById("adult_name").value || "Camper";

    summaryElement.innerHTML = successTemplate({
      name: adultName,
      participants: participantCount,
      total: total
    });

    form.style.display = "none";
    summaryElement.style.display = "block";
  }
});
