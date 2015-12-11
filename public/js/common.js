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

$(".select-trigger").click(function(e) {
		e.preventDefault();
		$(this).siblings('ul').toggle('hidden');
});

$(".select-item").click(function(e) {
		e.preventDefault();
		var langChoose = $(this).html();
		console.log(langChoose);
		$(this).parent().siblings('.select-trigger').html(langChoose);
		$(this).parent('ul').toggle('hidden');
});

$('.select__department-trigger, .dicom-options__head').chosen({
	inherit_select_classes: true,
	disable_search: true
});

$('.select__add-element').multipleSelect({
	width: 190,
	selectAll: false,
	placeholder: "Выберите что нибудь",
	onUncheckAll: true
});
$('.ms-drop input').on('click', function(){
	if($(this).prop("checked")){
		$(this).addClass('checkbox__marked');
	};
	$(this).parent().parent('li').toggleClass('checkbox__marked');
});


// $("#refreshAdd").click(function() {
//     var $select = $("select"),
//         $input = $("#refreshInput"),
//         value = $.trim($input.val()),
//         $opt = $("<option />", {
//             value: value,
//             text: value
//         });
//     $input.val("");
//     $(this).find('.ms-drop ul').append($opt).multipleSelect("refresh");
// });
// $(function() {
//     $('.ms-drop ul').append($('.form__add-element'));
// });
	

$('.row-phone .js__delete-row').on('click', function(){
	$(this).parent('.row-phone').hide();
});

$('.js__add-row').on('click', function(e){
	e.preventDefault();
	// var innerRow = $(this).parent().parent($('.row-phone'));
	var innerH = $('.fieldset').append($('.row-phone').html());
});



$(".info-box__trigger").click(function(e) {
		e.preventDefault();
		$(this).siblings('.info-box').removeClass('hidden');
});
$(".js-call__popup").click(function(e) {
		e.preventDefault();
		$(this).siblings('.cms__widget-popup').removeClass('hidden');
});

$(".info-box__close").click(function(e) {
		e.preventDefault();
		$(this).parent().addClass('hidden');
});



$(".aside-menu__item").click(function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
});

$(".js-pnotify").click(function(){
    PNotify.prototype.options.styling = "fontawesome";
	new PNotify({
	    text: 'Сообщение отправлено!',
	    type: 'success',
	    width: "auto",
	    hide: true,
	    delay: 2000,
	    icon: false,
	    stack: {"dir1": "down", "dir2": "left", "push": "top", "firstpos1": 110, "firstpos2": 0}
	});
})

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







$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})