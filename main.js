$('.header-right > ul > li > a').click(function(event) {
    event.preventDefault();
    var sottomenu = $(this).next(".dropdown");
    sottomenu.toggleClass('active');
});
