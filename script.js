// Confirm script is loaded
console.log("JavaScript is connected!");

// Get the toggle button
const toggleButton = document.getElementById('theme-toggle');

// Apply saved theme on page load
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = 'Light Mode';
} else {
    toggleButton.textContent = 'Dark Mode';
}

// Toggle dark mode on button click
toggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleButton.textContent = 'Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});
