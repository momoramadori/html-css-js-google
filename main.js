$('.header-right > ul > li > a').click(function(event) {
    event.preventDefault();
    var sottomenu = $(this).next(".dropdown");
    sottomenu.toggleClass('active');
});

$('.pop-up-right > ul > li > a').click(function() {
    $('.pop-up').addClass('read');
})
