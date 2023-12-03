document.addEventListener("DOMContentLoaded", function () {
    const toggleModeButton = document.getElementById("toggleModePage1");
    const lampIcon = document.getElementById("lampIcon");
    let isDarkMode = false;

    toggleModeButton.addEventListener("click", function () {
        isDarkMode = !isDarkMode;
        updateMode();
    });

    function updateMode() {
        const body = document.body;
        const newMode = isDarkMode ? "dark-mode" : "light-mode";
        body.className = newMode;

        // Altera a imagem da lâmpada com base no estado do modo claro/escuro
        lampIcon.src = isDarkMode ? "Imágens/lampada on.png" : "Imágens/lampada off.png";

        // Altera o fundo e a cor do texto do botão com base no estado do modo claro/escuro
        toggleModeButton.style.backgroundColor = isDarkMode ? "white" : "gray";
        toggleModeButton.style.color = isDarkMode ? "black" : "white";
    }
});
