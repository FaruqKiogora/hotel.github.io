// script.js – Grand Horizon Hotel

document.addEventListener('DOMContentLoaded', function() {

  // ----- DARK MODE -----
  const darkBtn = document.getElementById('darkMode');
  if (darkBtn) {
    darkBtn.addEventListener('click', function() {
      document.body.classList.toggle('dark');
      // update icon
      if (document.body.classList.contains('dark')) {
        darkBtn.innerHTML = '<i class="fas fa-sun"></i>';
      } else {
        darkBtn.innerHTML = '<i class="fas fa-moon"></i>';
      }
    });
  }

  // ----- TOP BUTTON (scroll) -----
  const topBtn = document.getElementById('topBtn');
  if (topBtn) {
    window.onscroll = function() {
      if (window.scrollY > 300) {
        topBtn.style.display = 'block';
      } else {
        topBtn.style.display = 'none';
      }
    };
    topBtn.onclick = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  }

  // ----- (optional) smooth anchor scroll for nav links -----
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

});