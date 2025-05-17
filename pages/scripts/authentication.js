document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(validateCredentials(username, password)) {
        authenticateUser(username, password);
    } else {
        alert('Invalid username or password');
    }
});

function validateCredentials(username, password) {
    // Replace with actual validation logic
    return username.length > 0 && password.length > 0;
}

function authenticateUser(username, password) {
    // Replace with actual authentication logic
    alert('User authenticated: ' + username);
}



let users = new Map([
	['user1', { id: 1, username: 'user1', password: 'password1', role: 'admin' }],
	['user2', { id: 2, username: 'user2', password: 'password2', role: 'user' }]
   ]);
   
   function authenticate(username, password) {
	let user = users.get(username);
   
	if (user && user.password === password) {
	   console.log('User authenticated successfully:', user);
	} else {
	   console.log('User authentication failed');s
	}
   }
   
   authenticate('user1', 'password1'); // User authenticated successfully
   authenticate('user1', 'wrong_password'); // User authentication failed