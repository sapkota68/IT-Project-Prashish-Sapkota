let currentSlide = 0;
const slides = document.querySelectorAll('.mySlides')

function showSlide(index)
{
    slides.forEach((myslide,i) => {
        myslide.style.display = i === index? 'block':'none';
    });
    
}

function nextSlide()
{
    currentSlide = (currentSlide + 1)% slides.length;
    showSlide(currentSlide);
}

function prevSlide()
{
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide)
}

showSlide(currentSlide);