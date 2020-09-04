$(document).ready(() => {
    $('.black').on('click', () => {
        $('.shoes img').toggleClass('animate__slideInLeft');
        $('.shoes img').addClass('animate__fadeInLeft');
        $('.shoes img').attr('src', '1.png');

    })
    $('.white').on('click', () => {
        $('.shoes img').toggleClass('animate__slideInLeft');
        $('.shoes img').addClass('animate__fadeInLeft');
        $('.shoes img').attr('src', 'white.png');

    })
    $('.color').on('click', () => {
        $('.shoes img').toggleClass('animate__slideInLeft');
        $('.shoes img').addClass('animate__fadeInLeft');
        $('.shoes img').attr('src', 'black.png');

    })
})