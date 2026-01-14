
console.log("Internship Portal Loaded Successfully 🚀");

function showAlert(event) {
  event.preventDefault(); // stop page reload

  alert("✅ Your application has been submitted successfully!");

  // optional: reset form after alert
  event.target.reset();
}
