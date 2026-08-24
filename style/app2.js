const correctPassword = "08032026"; 

//Mulai function
function showInput() {
    const clickText = document.getElementById('click-text');
    const passContainer = document.getElementById('pass-container');

    if (clickText && passContainer) {
        clickText.style.display = 'none';
        passContainer.style.display = 'flex';
    }
}

//render rumus function
function renderEquation() {
    const formulas = document.querySelectorAll(".formula");
    const equations = document.querySelectorAll(".equation");

    formulas.forEach((formulaEl, index) => {
        const formulaText = formulaEl.value.trim();
        const targetEquation = equations[index];

        if (targetEquation && formulaText) {
            katex.render(formulaText, targetEquation, {
                displayMode: true,
                throwOnError: false
            });
        }
    });
}

//check pw
function checkPassword() {
    const input = document.getElementById("pwd").value;

    if (input === correctPassword) {
        document.body.classList.add("fade-out");

        setTimeout(() => {
            window.location.href = "text.html";
        }, 1000);

    } else {
        document.getElementById("error-message").innerText =
            "Password salah!";

        // Render rumus ketika password salah
        renderEquation();
    }
}