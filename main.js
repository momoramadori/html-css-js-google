$('.header-right ul li a').click(function() {
    var sottomenu = $(this).next('.dropdown');
    console.log(sottomenu);
    sottomenu.toggleClass('active')
});
