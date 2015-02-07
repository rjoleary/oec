/**
 * At program start, set the canvas to the window's size.
 * Also, whenever the user resizes the window, resize the canvas.
 */
$(resizeCanvas);
$(window).on('resize', resizeCanvas);

function resizeCanvas() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var canvas = $('#myCanvas')[0];
    canvas.width = windowWidth;
    canvas.height = windowHeight;
}
