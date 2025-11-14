// Simple Login Authentication System using localStorage

function register() {
  const username = document.getElementById('reg-username').value.trim();
  const password = document.getElementById('reg-password').value.trim();
  const message = document.getElementById('message');

  if (username === "" || password === "") {
    message.textContent = "⚠️ Please enter username and password.";
    return;
  }

  if (localStorage.getItem(username)) {
    message.textContent = "⚠️ Username already exists!";
  } else {
    localStorage.setItem(username, password);
    message.textContent = "✅ Registration successful! You can now log in.";
    document.getElementById('reg-username').value = "";
    document.getElementById('reg-password').value = "";
  }
}

function login() {
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value.trim();
  const message = document.getElementById('message');

  const storedPassword = localStorage.getItem(username);

  if (storedPassword && storedPassword === password) {
    message.textContent = "";
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('register-section').classList.add('hidden');
    document.getElementById('secured-section').classList.remove('hidden');
    document.getElementById('user-name').textContent = username;
  } else {
    message.textContent = "❌ Invalid username or password.";
  }
}

function logout() {
  document.getElementById('login-section').classList.remove('hidden');
  document.getElementById('register-section').classList.remove('hidden');
  document.getElementById('secured-section').classList.add('hidden');
  document.getElementById('message').textContent = "👋 Logged out successfully.";
}