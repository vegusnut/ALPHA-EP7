let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // slideIndex - 1 = 0, first img
    // slideIndex + 0 = 1, second img
    // slideIndex + 1 = 2, third img
    // slideIndex + 2 = 3, fourth img
    slides[slideIndex+0].style.display = "block";

}   

showSlides();