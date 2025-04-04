document.querySelectorAll('.skill-category h3').forEach(header => {
    header.addEventListener('click', () => {
        header.parentElement.classList.toggle('active');
    });
});

// Initialize with first category open
document.querySelector('.skill-category').classList.add('active');