document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbarNav = document.querySelector('.navbar-nav');
  const navbar = document.querySelector('.navbar');
  const heroSection = document.querySelector('.hero');

  if (menuToggle && navbarNav) {
    menuToggle.addEventListener('click', () => {
      navbarNav.classList.toggle('active');
    });
  }

  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      navbarNav?.classList.remove('active');
    });
  });

  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('navbar--scrolled', window.scrollY > 50);
    });
  }

  if (heroSection) {
    const slides = heroSection.querySelectorAll('.hero-slide');
    const dots = heroSection.querySelectorAll('.dot');
    const prevBtn = heroSection.querySelector('.prev-btn');
    const nextBtn = heroSection.querySelector('.next-btn');
    
    if (slides.length > 0) {
      let currentSlide = 0;
      let slideInterval;

      const goToSlide = (n) => {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide]?.classList.remove('active');
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide]?.classList.add('active');
      };

      const startSlideInterval = () => {
        slideInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
      };

      const stopSlideInterval = () => {
        if (slideInterval) clearInterval(slideInterval);
      };

      prevBtn?.addEventListener('click', () => goToSlide(currentSlide - 1));
      nextBtn?.addEventListener('click', () => goToSlide(currentSlide + 1));
      
      dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
      });

      startSlideInterval();

      heroSection.addEventListener('mouseenter', stopSlideInterval);
      heroSection.addEventListener('mouseleave', startSlideInterval);
    }
  }
});