document.querySelector('.burger-menu').addEventListener('click', function() {
    console.log('click');
    document.querySelector('.menu').classList.toggle('active');
});
const image = document.querySelectorAll(".img");

window.addEventListener("scroll", () => {
    const scrollAmount = window.scrollY;
  
    image.forEach((image) => {
      image.style.transform = `translateY(${scrollAmount * -0.03}px)`; // Facteur réduit pour un effet plus léger
    });
  });