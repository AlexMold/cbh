$("#menu-toggle").click(function(e) {
		e.preventDefault();
		$(".wrapper, .sidebar-wrapper, .info-box__trigger, .info-box").toggleClass("toggled");
});
$(".header-card__trigger").click(function(e) {
		e.preventDefault();
		$(this).parent('.header-card').toggleClass("toggled");
});
$(".dicom-options__head").click(function(e) {
		e.preventDefault();
		$(this).siblings('.dicom-options__list').toggle('hidden');
});
$(".mail-filter__item").click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
});

$(".select-trigger, .select-trigger2").click(function(e) {
		e.preventDefault();
		$(this).siblings('ul').toggle('hidden');
});

$(".select-item, .select-item2").click(function(e) {
		e.preventDefault();
		var langChoose = $(this).html();
		console.log(langChoose);
		$(this).parent().siblings('.select-trigger, .select-trigger2').html(langChoose);
		$(this).parent('ul').toggle('hidden');
});



$(".info-box__trigger").click(function(e) {
		e.preventDefault();
		$(this).siblings('.info-box').removeClass('hidden');
});
$(".info-box__close").click(function(e) {
		e.preventDefault();
		$(this).parent('.info-box').addClass('hidden');
});

$(".aside-menu__item").click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
});



    $(function() {
      var caption = $(".mail-list__item").find(".mail-trigger"),
        content = $(".mail-list__item").find(".mail-list__item-content").hide();

      caption.click(function(e) {
        e.preventDefault();
        var activeContent = content.filter('.active');
        activeContent.removeClass('active').slideUp(600);
        if ($(this).next(content).is(activeContent)) return;
        $(this).next(content).addClass('active').slideDown(300);
      });
    });