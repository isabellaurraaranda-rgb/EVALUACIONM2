// Cambio de color sección (Habilidades)
    $("#colorBtn").click(function () {
        $("#habilidades").toggleClass("activa");
    });
// Animación al hacer scroll (Optimizado para que no se active todo a la vez)
    $(window).on("scroll", function () {
        let scrollPos = $(window).scrollTop() + 400; 
        
        $(".seccion").each(function () {
            let sectionTop = $(this).offset().top;
            
            if (sectionTop < scrollPos) {
                $(this).addClass("activa");
            }
        });
    });

//vValidación formulario
    $("#formContacto").submit(function (e) {
        e.preventDefault();

        let nombre = $("#nombre").val().trim(); 
        let email = $("#email").val().trim();

        if (nombre === "" || email === "") {
            $("#mensajeForm")
                .text("⚠️ Por favor, completa todos los campos")
                .css("color", "red")
                .hide()
                .fadeIn(); 
        } else {
            $("#mensajeForm")
                .text("✅ ¡Mensaje enviado con éxito!")
                .css("color", "green")
                .hide()
                .fadeIn();
            this.reset();
        }
    });
