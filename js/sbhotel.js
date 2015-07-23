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
