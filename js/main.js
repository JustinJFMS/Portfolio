/* js/main.js */
document.addEventListener('DOMContentLoaded', () => {
    
    // Funcionalidad: Copiar Email al Portapapeles
    const emailBtn = document.getElementById('emailBtn');
    
    if (emailBtn) {
        emailBtn.addEventListener('click', async () => {
            const email = emailBtn.getAttribute('data-email');
            
            try {
                await navigator.clipboard.writeText(email);
                
                // Feedback visual para el usuario
                const originalText = emailBtn.innerText;
                emailBtn.innerText = '¡Copiado!';
                emailBtn.style.backgroundColor = '#fff';
                emailBtn.style.color = '#000';
                
                // Restaurar estado después de 2 segundos
                setTimeout(() => {
                    emailBtn.innerText = originalText;
                    emailBtn.style.backgroundColor = ''; // Vuelve al color original (CSS)
                    emailBtn.style.color = '';
                }, 2000);
                
            } catch (err) {
                console.error('Error al copiar: ', err);
                // Fallback clásico si falla el portapapeles
                window.location.href = `mailto:${email}`;
            }
        });
    }
    
    // Mensaje "Easter Egg" para reclutadores que abran la consola
    console.log(
        "%c Hola! Si estás viendo esto, te interesa el código limpio. Hablemos: justinmorenosoto@gmail.com ", 
        "background: #00f2ea; color: #000; font-size: 12px; padding: 5px; border-radius: 4px;"
    );
});

const textElement = document.querySelector('.typewriter-text');
const textToType = textElement.textContent;
textElement.textContent = '';
let charIndex = 0;

function typeWriter() {
    if (charIndex < textToType.length) {
        textElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    }
}

window.addEventListener('load', typeWriter);