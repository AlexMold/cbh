$("#menu-toggle").click(function(e) {
		e.preventDefault();
		$(".wrapper, .sidebar-wrapper").toggleClass("toggled");
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

$(".select__language-trigger").click(function(e) {
		e.preventDefault();
		$(this).siblings('ul').toggle('hidden');
});

$(".select__language-item").click(function(e) {
		e.preventDefault();
		var langChoose = $(this).html();
		console.log(langChoose);
		$('.select__language-trigger').html(langChoose);
		$(this).parent('ul').toggle('hidden');
});
