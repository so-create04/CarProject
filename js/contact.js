window.addEventListener('resize', () => {
    const con = document.querySelector('.contact-page .container');
    if (window.innerWidth <= 768) {
        con.classList.remove('vh-100');
    } else {
        con.classList.add('vh-100');
    }
});