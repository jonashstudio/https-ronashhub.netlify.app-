const copyBtn = document.getElementById("copyBtn");
const scriptCode = document.getElementById("scriptCode");
const copyMsg = document.getElementById("copyMsg");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(scriptCode.textContent).then(() => {
    copyBtn.classList.add("copied");
    copyMsg.textContent = "Copied!";
    setTimeout(() => {
      copyMsg.textContent = "";
      copyBtn.classList.remove("copied");
    }, 1500);
  }).catch(err => {
    copyMsg.textContent = "Failed to copy";
  });
});
