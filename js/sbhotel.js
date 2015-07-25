function showDesc(el) {
    $(el).hover(function() {
        $(this).find("small").slideToggle('slow');
    });
}

$(document).ready(function() {
    showDesc(".room1 p");
    showDesc(".room2 p");
    showDesc(".room3 p");
    

});



$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1400);
                return false;
            }
        }
    });
});
