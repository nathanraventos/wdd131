export function participantTemplate(count) {
  return `
    <section class="participant${count}">
      <p>Participant ${count}</p>
      <div class="item">
        <label for="fname${count}"> First Name<span>*</span></label>
        <input id="fname${count}" type="text" name="fname${count}" required>
      </div>
      <div class="item">
        <label for="activity${count}">Activity #<span>*</span></label>
        <input id="activity${count}" type="text" name="activity${count}" required>
      </div>
      <div class="item">
        <label for="fee${count}">Fee ($)<span>*</span></label>
        <input id="fee${count}" type="number" name="fee${count}" min="0" required>
      </div>
      <div class="item">
        <label for="date${count}">Desired Date<span>*</span></label>
        <input id="date${count}" type="date" name="date${count}" required>
      </div>
    </section>
  `;
}

export function successTemplate(info) {
  return `
    <h2>Registration Complete</h2>
    <p>Thank you <strong>${info.name}</strong> for registering.</p>
    <p>You have registered <strong>${info.participants}</strong> participant(s) and owe <strong>$${info.total.toFixed(2)}</strong> in fees.</p>
  `;
}
