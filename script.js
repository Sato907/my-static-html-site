function updateClock() {
    const now = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    const text = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    document.getElementById("clock").textContent = text;
}

updateClock();
setInterval(updateClock, 1000);
