function updateDateTime() {
  const now = new Date();
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const day = weekdays[now.getDay()];
  const date = now.getDate();
  const month = months[now.getMonth()];
  const hour = now.getHours().toString().padStart(2, '0');
  const min = now.getMinutes().toString().padStart(2, '0');

  document.getElementById("date").innerText = `${day}, ${date} of ${month}`;
  document.getElementById("time").innerText = `${hour}:${min}`;
}

function enterSystem() {
  alert("Loading DevSign OS...");
  // здесь позже можно сделать переход в system.html
}

setInterval(updateDateTime, 1000);
updateDateTime();