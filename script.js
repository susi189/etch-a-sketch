const container = document.getElementById("container");
const startBtn = document.getElementById("start");
const clearBtn = document.getElementById("clear");

function createGrid(gridSize) {
  container.style.setProperty("--grid-gridSize", gridSize);
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let elem = document.createElement("div");
      container.appendChild(elem).id = "grid-element";
    }
  }
}

function changeFields(event) {
  if (event.buttons === 0) {
    container.removeEventListener("mousemove", changeFields);
  } else {
    event.target.style.setProperty("background-color", "black");
  }
}

startBtn.addEventListener("click", () => {
  if (container.hasChildNodes()) {
    container.innerHTML = "";
  }
  let gridSize = prompt(
    "How many squares per side? NOTE: The grid is a square itself, just input one number between 1 and 100"
  );
  createGrid(gridSize);
});

clearBtn.addEventListener("click", () => {
  let allGridElem = document.querySelectorAll("#grid-element");
  allGridElem.forEach((elem) => {
    elem.style.setProperty("background-color", "white");
  });
});

container.addEventListener("mousedown", (event) => {
  container.addEventListener("mousemove", changeFields);
});
