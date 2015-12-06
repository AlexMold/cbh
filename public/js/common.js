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


new Chartist.Line('#graphic', {
  labels: ['01.04.2015', '01.05.2015', '01.06.2015', '01.07.2015', '01.08.2015', '01.09.2015', '01.10.2015', '01.11.2015'],
  series: [
    [6, 9, 7, 8, 5,8,1,25,15,20,2,9,28,25,35,3,5]
  ]
}, {
  fullWidth: true,
  low: 0,
  chartPadding: {
    right: 50
  }
});