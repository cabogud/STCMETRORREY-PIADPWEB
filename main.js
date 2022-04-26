document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    Map.Carousel.init(elementosCarousel,{
        duration:150
    });
});