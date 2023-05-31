document.getElementById("footer").addEventListener("click", function() {
    var footer = document.getElementById("footer");
    
    // Verificar si el footer está oculto
    if (footer.style.bottom === "") {
      footer.style.transition = "0.5s";
      footer.style.bottom = "-" + footer.offsetHeight + "px";
    } else {
      footer.style.transition = "0.5s";
      footer.style.bottom = "";
    }
  });