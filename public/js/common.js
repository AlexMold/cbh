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