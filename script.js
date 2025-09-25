const copyBtn = document.getElementById("copyBtn");
const scriptCode = document.getElementById("scriptCode");
const copyMsg = document.getElementById("copyMsg");
const colorPicker = document.getElementById("colorPicker");
const heroH1 = document.querySelector(".hero h1");
const buttons = document.querySelectorAll(".button");

// Copy button animation
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(scriptCode.textContent).then(() => {
    copyBtn.classList.add("copied");
    copyMsg.textContent = "Copied!";
    setTimeout(() => {
      copyMsg.textContent = "";
      copyBtn.classList.remove("copied");
    }, 1500);
  }).catch(() => {
    copyMsg.textContent = "Failed to copy";
  });
});

// Dynamic color change
colorPicker.addEventListener("input", (e) => {
  const color = e.target.value;
  heroH1.style.textShadow = `0 0 10px ${color}, 0 0 20px ${color}`;
  buttons.forEach(btn => btn.style.boxShadow = `0 0 5px ${color}, 0 0 15px ${color}`);
});
