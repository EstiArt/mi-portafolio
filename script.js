/*-------------DESPLAZAMIENTO CON BOTONES-------------*/

document.addEventListener("DOMContentLoaded", function() {
  const scrollingButtonLeft = document.querySelectorAll("#scrolling-button-left");
  const scrollingButtonRight = document.querySelectorAll("#scrolling-button-right");
  const marcoScrolls = document.querySelectorAll(".marco-scroll");

  scrollingButtonLeft.forEach((button, index) => {
    button.addEventListener("click", function() {
      marcoScrolls[index].scrollBy({
        left: -800, // Cambia este valor según la cantidad de desplazamiento que deseas
        behavior: "smooth"
      });
    });
  });

  scrollingButtonRight.forEach((button, index) => {
    button.addEventListener("click", function() {
      marcoScrolls[index].scrollBy({
        left: 800, // Cambia este valor según la cantidad de desplazamiento que deseas
        behavior: "smooth"
      });
    });
  });
});

/*-------------DESPLAZAMIENTO ARRASTRANDO RATON O TOCANDO PANTALLA-------------*/

document.addEventListener("DOMContentLoaded", function() {
  const marcoScrolls = document.querySelectorAll(".marco-scroll");

  marcoScrolls.forEach(marcoScroll => {
    let isDown = false;
    let startX;
    let scrollLeft;

    marcoScroll.addEventListener("mousedown", function(e) {
      if (e.button !== 0) return; // Solo el botón izquierdo del ratón
      isDown = true;
      startX = e.pageX - marcoScroll.offsetLeft;
      scrollLeft = marcoScroll.scrollLeft;
    });

    marcoScroll.addEventListener("mouseleave", function() {
      isDown = false;
    });

    marcoScroll.addEventListener("mouseup", function() {
      isDown = false;
    });

    marcoScroll.addEventListener("mousemove", function(e) {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - marcoScroll.offsetLeft;
      const walk = (x - startX) * 3; // Multiplica por un factor para ajustar la velocidad del desplazamiento
      marcoScroll.scrollLeft = scrollLeft - walk;
    });

    marcoScroll.addEventListener("touchstart", function(e) {
      isDown = true;
      startX = e.touches[0].clientX - marcoScroll.offsetLeft;
      scrollLeft = marcoScroll.scrollLeft;
    });

    marcoScroll.addEventListener("touchend", function() {
      isDown = false;
    });

    marcoScroll.addEventListener("touchmove", function(e) {
      if (!isDown) return;
      e.preventDefault();
      const x = e.touches[0].clientX - marcoScroll.offsetLeft;
      const walk = (x - startX) * 3; // Multiplica por un factor para ajustar la velocidad del desplazamiento
      marcoScroll.scrollLeft = scrollLeft - walk;
    });
  });
});