const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");
const circles = [...document.querySelectorAll(".circle")];

let change = 1; // It is used to handle changes

// Event while clicking next button
next.addEventListener("click", (e) => {
  change++;
  if (change > circles.length) {
    change = circles.length;
  }

  update();
});

// Event while clicking previous button
prev.addEventListener("click", (e) => {
  change--;
  if (change < 1) {
    change = 1;
  }

  update();
});

// Function to handle events
function update() {
  circles.forEach((circle, index) => {
    if (change > index) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  changeWidth();

  checkOptions();
}

// Function to change width of line
function changeWidth() {
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
}

// Function to check which option is accessible
function checkOptions() {
  if (change == 1) {
    prev.disabled = true;
  } else if (change == circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
