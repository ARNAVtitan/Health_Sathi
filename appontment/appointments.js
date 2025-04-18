document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("add-appointment-form");
    const list = document.getElementById("appointments-list");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const title = document.getElementById("appointment-title").value.trim();
      const date = document.getElementById("appointment-date").value;
      const time = document.getElementById("appointment-time").value;
  
      if (title && date && time) {
        const item = document.createElement("div");
        item.className = "appointment-item";
        item.innerHTML = `
          <strong>${title}</strong>
          <span>${date} at ${time}</span>
        `;
        list.appendChild(item);
  
        form.reset();
      }
    });
  });
  