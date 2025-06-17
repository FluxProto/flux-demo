const typewriterElement = document.getElementById("typewriter");

const messages = [
  "Flux is not a product.",
  "Flux is not a language.",
  "Flux is a protocol."
];

let messageIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentMessage = messages[messageIndex];
  const currentText = currentMessage.substring(0, charIndex);
  typewriterElement.textContent = currentText;

  if (!isDeleting && charIndex < currentMessage.length) {
    charIndex++;
    setTimeout(type, 60);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 30);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      messageIndex = (messageIndex + 1) % messages.length;
    }
    setTimeout(type, 1000);
  }
}

type();
function generateFluxGraph() {
    const input = document.getElementById("flux-input").value.trim();
    if (!input) return;

    const fluxSymbols = input.split("");

    const x = [];
    const y = [];
    const z = [];

    let entropy = 0;
    let recursion = 0;

    fluxSymbols.forEach((symbol, i) => {
        x.push(i);
        entropy += symbol === "c" ? 1 : symbol === "+" ? -1 : 0;
        y.push(entropy);
        recursion += symbol === "§" ? 1 : symbol === "⊘" ? -1 : 0;
        z.push(recursion);
    });

    const trace = {
        x: x,
        y: y,
        z: z,
        mode: "lines+markers+text",
        type: "scatter3d",
        text: fluxSymbols,
        line: {
            width: 6,
            color: '#ff9900'
        },
        marker: {
            size: 5,
            color: '#ff9900'
        }
    };

    const layout = {
        title: "Flux Emotional Map",
        scene: {
            xaxis: { title: "Time / Sequence" },
            yaxis: { title: "Emotional Entropy" },
            zaxis: { title: "Recursion Depth" }
        },
        margin: { l: 0, r: 0, b: 0, t: 40 }
    };

    Plotly.newPlot("flux-3d-graph", [trace], layout);
}

function toggleTest() {
  const testPanel = document.getElementById("flux-test");
  testPanel.classList.toggle("hidden");
}

function submitFlux() {
  const input = document.getElementById("flux-input").value.trim();
  const result = document.getElementById("flux-result");

  if (input === "") {
    result.innerHTML = "⚠️ Please enter a Flux sequence.";
    return;
  }
  // Real Flux interpretation logic
let interpretation = "";

switch (input) {
  case "+v":
    interpretation = "↗ Ovren uplift (outward hope/expansion)";
    break;
  case "-v":
    interpretation = "↘ Ovren collapse (despair or withdrawal)";
    break;
  case "+^":
    interpretation = "↑ Avren clarity (focused insight)";
    break;
  case "-^":
    interpretation = "↓ Avren confusion (fragmentation or regret)";
    break;
  case "†°=":
    interpretation = "☠ Moral pain with judgment (Violence is a responsibility)";
    break;
  default:
    interpretation = "❓ Unrecognized Flux pattern";
}

result.innerHTML = `🧠 Interpreting: <code>${input}</code><br><strong>${interpretation}</strong>`;


  // Temporary placeholder logic
  result.innerHTML = `🧠 Interpreting: <code>${input}</code><br><br>📊 Emotional path generated.`;
}
function generateFluxGraph() {
  const canvas = document.getElementById("flux-graph");
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const fluxSequence = document.getElementById("flux-input").value.split("");

  // Mock axis values (Time, Entropy, Recursion) for demo purposes
  let x = 0;
  let y = 0;
  let z = 0;
  const points = [];

  fluxSequence.forEach((symbol, i) => {
    x += 1;
    y += (symbol === "+" || symbol === "^" || symbol === "s") ? 0.5 : -0.3;
    z += (symbol === "." || symbol === "§") ? 0.5 : -0.1;

    points.push({ x: x * 30, y: 200 - y * 50, label: symbol });
  });

  // Draw path
  ctx.beginPath();
  points.forEach((pt, i) => {
    if (i === 0) {
      ctx.moveTo(pt.x, pt.y);
    } else {
      ctx.lineTo(pt.x, pt.y);
    }
  });
  ctx.strokeStyle = "#ffaa33";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Draw labels
  points.forEach(pt => {
    ctx.fillStyle = "#ffffff";
    ctx.fillText(pt.label, pt.x + 4, pt.y - 4);
  });
}
function generateFluxGraph() {
  const fluxString = document.getElementById('flux-input').value.trim();
  const symbolMap = {
    'o': [0, 0, 0],
    'v': [1, 1, 0.5],
    'c': [2, -1, 0.2],
    '+': [3, 0, 1],
    '^': [4, 1, 1.5],
    's': [5, 0.5, 1.2],
    '.': [6, -0.5, 0.6]
  };

  const x = [], y = [], z = [], labels = [];

  for (let i = 0; i < fluxString.length; i++) {
    const symbol = fluxString[i];
    if (symbolMap[symbol]) {
      const [xi, yi, zi] = symbolMap[symbol];
      x.push(xi);
      y.push(yi);
      z.push(zi);
      labels.push(symbol);
    }
  }

  const trace = {
    x: x,
    y: y,
    z: z,
    mode: 'lines+text',
    type: 'scatter3d',
    text: labels,
    textposition: 'top center',
    line: {
      width: 4,
      color: 'orange'
    },
    marker: {
      size: 6,
      color: 'orange'
    }
  };

  Plotly.newPlot('flux-3d-graph', [trace], {
    margin: { l: 0, r: 0, b: 0, t: 0 },
    scene: {
      xaxis: { title: 'Time / Sequence' },
      yaxis: { title: 'Emotional Entropy' },
      zaxis: { title: 'Recursion Depth' }
    }
  });
}

