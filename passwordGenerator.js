// My User Input
let username = prompt('Enter your name');
let password = prompt('Enter a password (Leave empty for Generated PW)');

// Function to generate a random password
function generatePassword(length = 12) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

// Function to handle username and password
function handleUserInput(username, password) {
    // If the user enters a password
    if (password) {
        console.log(`Username: ${username} Password: ${password}`);
        console.log('Welcome');

    } else {
        // Generates a Random Password if no password is entered
        password = generatePassword();
        console.log(`Username: ${username} Generated Password: ${password} Password generated successfully.`);
        console.log('Welcome')
    }
};

handleUserInput(username, password);
