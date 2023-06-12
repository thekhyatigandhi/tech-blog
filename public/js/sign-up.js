const signUpFormHandler = async (event) => {
  event.preventDefault();

  const username = document.getElementById("sign-up-username").value.trim();
  const password = document.getElementById("sign-up-password").value.trim();
  const confirm = document.getElementById("sign-up-confirm").value.trim();

  if (username && password && confirm) {
    if (password === confirm) {
      const response = await fetch("/api/user/", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/");
      } else {
        alert(`Sign up not successful: ${response.message}`);
      }
    } else {
      alert("Passwords do not match.");
    }
  }
};

document
  .getElementById("sign-up-form")
  .addEventListener("submit", signUpFormHandler);
