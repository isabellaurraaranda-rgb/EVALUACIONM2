$(function() {
    // 1. Lógica del Modo Claro/Oscuro
    $("#btn-theme").click(function () {
        $("body").toggleClass("dark light");

        const icon = $("#theme-icon");
        const text = $("#theme-text");

        if ($("body").hasClass("dark")) {
            icon.removeClass("fa-moon").addClass("fa-sun");
            text.text("Modo Claro");
        } else {
            icon.removeClass("fa-sun").addClass("fa-moon");
            text.text("Modo Oscuro");
        }
    });

    // 2. Cambio de color sección (Habilidades)
    $("#colorBtn").click(function () {
        $("#habilidades").toggleClass("activa");
    });

    // 3. Animación al hacer scroll
    $(window).on("scroll", function () {
        let scrollPos = $(window).scrollTop() + 400; 
        
        $(".seccion").each(function () {
            let sectionTop = $(this).offset().top;
            if (sectionTop < scrollPos) {
                $(this).addClass("activa");
            }
        });
    });

    // 4. Validación formulario
    $("#formContacto").submit(function (e) {
        e.preventDefault();
        let nombre = $("#nombre").val().trim(); 
        let email = $("#email").val().trim();

        if (nombre === "" || email === "") {
            $("#mensajeForm").text("⚠️ Por favor, completa todos los campos").css("color", "red").hide().fadeIn(); 
        } else {
            $("#mensajeForm").text("✅ ¡Mensaje enviado con éxito!").css("color", "green").hide().fadeIn();
            this.reset();
        }
    });
});

