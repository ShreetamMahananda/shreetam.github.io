// Alert function
function sayHello() {
  alert("Hello! This site is live on GitHub Pages 🚀");
}

// Change background color dynamically
function changeBackgroundColor() {
  document.body.style.backgroundColor = randomColor();
}

// Generate a random color (hex)
function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Form Validation Function
function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  
  if (name === "" || email === "") {
    alert("Please fill out all fields!");
    return false;
  } else {
    alert("Form submitted successfully!");
    return true;
  }
}

// Save form data to localStorage
function saveToLocalStorage() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  
  if (name && email) {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    alert("Data saved to localStorage!");
  } else {
    alert("Please fill out the form before saving!");
  }
}

// Display saved data from localStorage
function displaySavedData() {
  const savedName = localStorage.getItem("name");
  const savedEmail = localStorage.getItem("email");
  
  if (savedName && savedEmail) {
    document.getElementById("savedData").innerHTML = 
      `Saved Name: ${savedName} <br> Saved Email: ${savedEmail}`;
  } else {
    document.getElementById("savedData").innerHTML = "No saved data!";
  }
}

// Animate a bouncing ball
let ballPos = 0;
function animateBall() {
  let ball = document.getElementById("ball");
  if (ballPos >= window.innerHeight - 50 || ballPos <= 0) {
    ballPos = (ballPos >= window.innerHeight - 50) ? window.innerHeight - 50 : 0;
  }
  ballPos += (ballPos <= 0) ? 5 : -5; // Move up or down
  ball.style.top = ballPos + "px";
  requestAnimationFrame(animateBall);
}

// Trigger animation
window.onload = function() {
  animateBall();
};
