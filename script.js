$(document).ready(function() {
    $(".delayImg").each(function() {
        this.onload = function() {
            $(this).animate({opacity: 1}, 4000);
        };
        this.src = this.getAttribute("delayedSrc");
    });
});