$(document).ready(function () {

    $('aside').removeClass('hide');
    var featuredItems = '#featured-items';
    var createItems = function (name, image, description) {
        $(featuredItems).append('<h3>' + name + '</h3>');
        $(featuredItems).append('<img src="' + image + '">');
        $(featuredItems).append('<p>' + description + '</p>');
        $(featuredItems).append('<br>');
    }

    $.getJSON('items.json', function (data) {
        var i;
        var item;
        for (i = 0; i < data.menuItems.length; i++) {
            item = data.menuItems[i];
            createItems(item.name, item.image, item.description);
        }

    });
});