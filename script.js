// Typewriter animation
const text = [
  "Map feeling into geometry.",
  "Emotion becomes graph.",
  "Welcome to Flux Protocol."
];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  if (i < text.length) {
    const fullText = text[i];

    if (isDeleting) {
      currentText = fullText.substring(0, j--);
    } else {
      currentText = fullText.substring(0, j++);
    }

    document.getElementById("typewriter").innerHTML = currentText;

    if (!isDeleting && j === fullText.length) {
      isDeleting = true;
      setTimeout(type, 1500);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i++;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  } else {
    i = 0;
    setTimeout(type, 500);
  }
}

type();

// Toggle test panel
function toggleTest() {
  const panel = document.getElementById("flux-test");
  panel.classList.toggle("hidden");
}

// Submit and process Flux string
function submitFlux() {
  const input = document.getElementById("flux-input").value;
  const resultDiv = document.getElementById("flux-result");

  if (input.trim() === "") {
    resultDiv.innerHTML = "<p>Please enter a Flux string.</p>";
    return;
  }

  // Placeholder emotional interpretation
  const interpretations = {
    "†": "Pain",
    "$": "Hope",
    ":": "Transition",
    "¿": "Uncertainty"
  };

  let output = "<h3>Interpretation:</h3><ul>";
  for (let char of input) {
    if (interpretations[char]) {
      output += `<li>${char} = ${interpretations[char]}</li>`;
    }
  }
  output += "</ul>";
  resultDiv.innerHTML = output;
}

// Generate Flux emotion map as 3D plot
function generateFluxGraph() {
  const input = document.getElementById("flux-input").value.trim();
  if (!input) return;

  const coords = Array.from(input).map((char, index) => {
    const val = char.charCodeAt(0);
    return {
      x: index,
      y: (val % 10) * Math.sin(index),
      z: val % 33
    };
  });

  const trace = {
    x: coords.map(c => c.x),
    y: coords.map(c => c.y),
    z: coords.map(c => c.z),
    mode: "lines+markers",
    type: "scatter3d",
    marker: { size: 4, color: "#ff69b4" },
    line: { width: 2, color: "#33f" }
  };

  const layout = {
    margin: { l: 0, r: 0, b: 0, t: 0 },
    paper_bgcolor: "#000",
    scene: {
      xaxis: { title: "Sequence" },
      yaxis: { title: "Emotion Wave" },
      zaxis: { title: "Symbol Code" }
    }
  };

  Plotly.newPlot("flux-graph", [trace], layout);
}
