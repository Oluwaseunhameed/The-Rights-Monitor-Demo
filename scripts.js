function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}

document.getElementById('search-link').addEventListener('click', function() {
  document.getElementById('search-link').style.display = 'none';
  document.getElementById('search-input').style.display = 'inline-block';
  document.getElementById('search-input').focus(); // Focus on the input field
});

document.getElementById('search-input').addEventListener('blur', function() {
  document.getElementById('search-link').style.display = 'inline-block';
  document.getElementById('search-input').style.display = 'none';
});

console.log("SHOW ========= ", document.querySelectorAll('header nav ul li a'))
document.querySelectorAll('header nav ul li a').forEach(link => {
  link.addEventListener('click', function() {
      // Remove active class from all links
      document.querySelectorAll('header nav ul li a').forEach(link => {
          link.classList.remove('active');
      });
      // Add active class to clicked link
      this.classList.add('active');
  });
});