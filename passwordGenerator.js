// Jordyn Guy
// September 12, 2024


// Function to generate a random password
function generatePassword(length = 12) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let passWord = "";
    for (let i = 0; i < length; i++) {
        passWord += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return passWord;
}

// Function to handle username and password
function handleUserInput() {
    // Get user inputs from HTML
    let userName = document.getElementById('username').value;
    let passWord = document.getElementById('password').value;

    // If no username is entered, I will give one. So Welcome Mr. Heisenberg
    if(userName === "") {
        userName = "Mr. Heisenberg";
    }

    // If no password was entered, one is generated
    if (!passWord) {
        passWord = generatePassword();
    }

    // Display the result
    document.getElementById('result').innerHTML = `Username: ${userName}<br><br> Password: ${passWord}<br><br>Hello ${userName}!`;
}
