$('.header-right > ul > li > a').click(function() {
    var sottomenu = $(this).next(".dropdown");
    sottomenu.toggleClass('active')
});
