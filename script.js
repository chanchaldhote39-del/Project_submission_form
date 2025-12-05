
const form = document.getElementById("projectForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const error = document.getElementById("error");

    if (!name || !email || !title || !description) {
      error.textContent = "All fields are required!";
      return;
    }

    // Store data
    localStorage.setItem("projectData", JSON.stringify({ 
      name, email, title, description 
    }));

    window.location.href = "display.html";
  });
}

// DISPLAY DATA
const data = localStorage.getItem("projectData");
if (data && window.location.pathname.includes("display.html")) {
  const d = JSON.parse(data);
  document.getElementById("dName").textContent = d.name;
  document.getElementById("dEmail").textContent = d.email;
  document.getElementById("dTitle").textContent = d.title;
  document.getElementById("dDescription").textContent = d.description;
}
