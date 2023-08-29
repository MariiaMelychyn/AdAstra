function updateDateTime() {
  const dateElement = document.getElementById("dateDisplay");
  const currentDate = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };
  const formattedDate = currentDate.toLocaleDateString("sk-SK", options);
  dateElement.textContent = formattedDate;
}

updateDateTime();
