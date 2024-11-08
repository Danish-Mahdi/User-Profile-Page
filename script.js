
// Check if the theme is already saved in localStorage when the page loads
window.onload = function () {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('themeIcon').classList.remove('bi-sun');
        document.getElementById('themeIcon').classList.add('bi-moon');
    } else {
        document.body.classList.remove('dark-mode');
        document.getElementById('themeIcon').classList.remove('bi-moon');
        document.getElementById('themeIcon').classList.add('bi-sun');
    }
};

// Toggle theme when the button is clicked
document.getElementById('toggleThemeBtn').addEventListener('click', function () {
    const isDarkMode = document.body.classList.contains('dark-mode');

    if (isDarkMode) {
        // Switch to Light Mode
        document.body.classList.remove('dark-mode');
        document.getElementById('themeIcon').classList.remove('bi-moon');
        document.getElementById('themeIcon').classList.add('bi-sun');
        localStorage.setItem('theme', 'light'); 
    } else {
        // Switch to Dark Mode
        document.body.classList.add('dark-mode');
        document.getElementById('themeIcon').classList.remove('bi-sun');
        document.getElementById('themeIcon').classList.add('bi-moon');
        localStorage.setItem('theme', 'dark'); 
    }
});





// For Uploading IMAGE

  // Check if there's a saved image in localStorage
  window.onload = function() {
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      document.getElementById('profileImage').src = savedImage;
    }
  };

  // Function to preview and save the new profile image
  function previewImage(event) {
    const image = document.getElementById('profileImage');
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        image.src = e.target.result;
        // Save the image to localStorage for permanent (until next session) update
        localStorage.setItem('profileImage', e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

