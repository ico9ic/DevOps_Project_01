function checkStatus() {
  const status = document.getElementById("status");
  const deploy = document.getElementById("deploy");

  status.innerText = "⏳ Running...";

  setTimeout(() => {
    const success = Math.random() > 0.3;

    if (success) {
      status.innerText = "✅ Success";
      deploy.innerText = new Date().toLocaleString();
    } else {
      status.innerText = "❌ Failed";
    }
  }, 2000);
}