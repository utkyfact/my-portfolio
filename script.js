// Dark/Light modu toggle
const themeToggleButton = document.getElementById('theme-toggle');

// Kullanıcı tercihlerini local storagedan alma
const savedTheme = localStorage.getItem('theme');

// Tema değiştir
themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Tema durumunu sakla
  const isDarkMode = document.body.classList.contains('dark-mode');
  
  themeToggleButton.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
});

// Scroll animasyon
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const triggerHeight = window.innerHeight / 1.2;
  
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    
    if (sectionTop < triggerHeight) {
      section.classList.add('visible');
    } else {
      section.classList.remove('visible');
    }
  });
});
