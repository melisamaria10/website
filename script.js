document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');
  
    function isInViewport(element) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    function showCardsOnScroll() {
      cards.forEach((card, index) => {
        if (isInViewport(card)) {
          card.classList.add('active');
        }
      });
    }
  
    window.addEventListener('scroll', showCardsOnScroll);
  });

//Pictures

function revealOnScroll() {
  const figures = document.querySelectorAll('#static > figure');
  const windowHeight = window.innerHeight;

  figures.forEach(figure => {
      const elementTop = figure.getBoundingClientRect().top;

      if (elementTop < windowHeight) {
          figure.classList.add('reveal');
      } else {
          figure.classList.remove('reveal');
      }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);