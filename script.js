// Get DOM elements
const passwordLengthInput = document.getElementById('password-length');
const lengthValueSpan = document.getElementById('length-value');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateButton = document.getElementById('generate-password');
const finishedPasswordDiv = document.getElementById('finished-password');

// Character sets
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

// Update length display
passwordLengthInput.addEventListener('input', function() {
    lengthValueSpan.textContent = this.value;
});

// Generate password function
function generatePassword() {
    const length = parseInt(passwordLengthInput.value);
    let charSet = '';
    
    // Build character set based on selected options
    if (uppercaseCheckbox.checked) charSet += uppercaseChars;
    if (lowercaseCheckbox.checked) charSet += lowercaseChars;
    if (numbersCheckbox.checked) charSet += numberChars;
    if (symbolsCheckbox.checked) charSet += symbolChars;
    
    // Check if at least one option is selected
    if (charSet === '') {
        finishedPasswordDiv.textContent = 'Please select at least one character type';
        finishedPasswordDiv.style.color = 'red';
        return;
    }
    
    // Generate password
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet[randomIndex];
    }
    
    // Display password
    finishedPasswordDiv.textContent = password;
    finishedPasswordDiv.style.color = 'green';
}

// Add click event to generate button
generateButton.addEventListener('click', generatePassword);
