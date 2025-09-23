const copyBtn = document.getElementById("copyBtn");
const scriptCode = document.getElementById("scriptCode");
const copyMsg = document.getElementById("copyMsg");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(scriptCode.textContent).then(() => {
    copyMsg.textContent = "Copied!";
    setTimeout(() => copyMsg.textContent = "", 2000);
  }).catch(err => {
    copyMsg.textContent = "Failed to copy";
  });
});
