document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  
  // fetch from json
  fetch('./login.json')
    .then(response => response.json())
    .then(data => {
      const users = data.users;

      // password check
      const user = users.find(u => u.username === username && u.password === password);
      if (user) {
        // if successful
        // Store in sessionStorage
        sessionStorage.setItem('username', user.username);
        sessionStorage.setItem('role', user.role); 
        window.location.href = "./index.html"; // Redirect to index.html
      } else {
        // if wrong
        document.getElementById("error").innerHTML = "Invalid username or password";
      }
    })
    .catch(error => console.error('Error fetching JSON:', error));
});
