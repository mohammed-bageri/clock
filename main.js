import "./style.css";

function startup() {
  let time = new Date();
  const secText = document.getElementById("sec");
  const minText = document.getElementById("min");
  const hrText = document.getElementById("hr");
  const paText = document.getElementById("pa");

  setInterval(() => {
    time = new Date();
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const pa = hours >= 12 ? "PM" : "AM";
    secText.innerHTML = seconds;
    if (seconds < 10) {
      secText.innerHTML = "0" + seconds;
    }

    minText.innerHTML = minutes;
    if (minutes < 10) {
      minText.innerHTML = "0" + minutes;
    }

    hours = hours % 12;
    hours = hours ? hours : 12;
    hrText.innerHTML = hours;
    if (hours < 10) {
      hrText.innerHTML = "0" + hours;
    }
    paText.innerHTML = pa;
  }, 10);
}

window.onload = startup;
