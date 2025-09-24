const sentences = [
    "> _Web Developer",
    "> _Marketing Specialist"
];

let sentenceIdx = 0, charIdx = 0, typing = true;

function getTypeSpeed(char) {
  // Slower for space and underscore to simulate thinking
  if (char === ' ' || char === '_') return 200 + Math.random() * 100;
  // Faster for common characters
  if (/[aeiounstrl]/i.test(char)) return 40 + Math.random() * 40;
  // Medium speed for other characters
  return 60 + Math.random() * 80;
}

export function typeErase() {
  const animatedText = document.querySelector('#animate-typing');
  if (!animatedText) return;
  
  const current = sentences[sentenceIdx];
  if (typing) {
    animatedText.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      typing = false;
      // Much longer pause (3-4 seconds) when sentence is complete for reading
      setTimeout(typeErase, 3000 + Math.random() * 1000);
    } else {
      // Natural typing speed based on character
      const nextChar = current[charIdx];
      const delay = getTypeSpeed(nextChar);
      setTimeout(typeErase, delay);
    }
  } else {
    animatedText.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      typing = true;
      sentenceIdx = (sentenceIdx + 1) % sentences.length;
      // Longer pause (1-1.5 seconds) between sentences
      setTimeout(typeErase, 1000 + Math.random() * 500);
    } else {
      // Quicker deletion with slight variations
      setTimeout(typeErase, 25 + Math.random() * 35);
    }
  }
}
typeErase();

// Carousel vertical sliding logic
export function updateCarousel() {
    const carouselImgs = document.querySelectorAll('.carousel-img');
    const activeImg = document.querySelector('.carousel-img.active');
    
    if (!activeImg) return;
    
    const activeIndex = Array.from(carouselImgs).indexOf(activeImg);
    const prevIndex = (activeIndex - 1 + carouselImgs.length) % carouselImgs.length;
    const nextIndex = (activeIndex + 1) % carouselImgs.length;
    
    carouselImgs.forEach((img, i) => {
        img.classList.remove('prev', 'next');
        if (!img.classList.contains('active')) {
            if (i === prevIndex) {
                img.classList.add('prev');
            } else if (i === nextIndex) {
                img.classList.add('next');
            }
        }
    });
}

function nextCarouselImg() {
    carouselIdx = (carouselIdx + 1) % carouselImgs.length;
    updateCarousel();
}

updateCarousel();
setInterval(nextCarouselImg, 2500);