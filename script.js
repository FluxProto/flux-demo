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

  // Temporary placeholder logic
  result.innerHTML = `🧠 Interpreting: <code>${input}</code><br><br>📊 Emotional path generated.`;
}

