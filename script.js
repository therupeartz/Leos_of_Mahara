// Add click functionality to light flames
document.querySelectorAll('.lamp').forEach(lamp => {
    lamp.addEventListener('click', () => {
        const flame = lamp.querySelector('.flame');
        flame.classList.toggle('lit');
    });
});
