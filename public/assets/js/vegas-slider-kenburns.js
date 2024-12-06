$(document).ready(function () {
    $('#kenburnsSliderContainer').vegas({
        slides: [{
            src: "/img/slider/slide_1.jpg"
        }, {
            src: "/img/slider/slide_2.jpg"
        }, {
            src: "/img/slider/slide_3.jpg"
        }],
        overlay: true,
        transition: 'fade2',
        animation: 'kenburnsUpRight',
        transitionDuration: 1000,
        delay: 10000,
        animationDuration: 20000
    });
});