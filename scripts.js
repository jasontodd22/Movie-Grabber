document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Additional dynamic features
document.querySelectorAll('.movie').forEach(movie => {
    movie.addEventListener('mouseover', () => {
        movie.querySelector('.movie-image').style.opacity = '0.8';
    });
    movie.addEventListener('mouseout', () => {
        movie.querySelector('.movie-image').style.opacity = '1';
    });
});
