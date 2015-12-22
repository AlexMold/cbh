// **** JQuery add independent triggers and events *****

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

$('.row-phone .js__delete-row').on('click', function(){
	$('.wrapper-for-row-phone .row-phone:last').remove();
});

$('.js__add-row').on('click', function(e){
	e.preventDefault();

	var html = 
		'<div class="row-phone row">'+
		'<br>'+
      '<div class="phone__input col-sm-3">'+
        '<input type="tel" class="form-control" data-mask="+7(000)000-00-00" data-mask-selectonfocus="true" placeholder="+7(___)___-__-__">'+
        '<div class="phone__input-check days-navigation">'+
          '<label class="days-navigation__label">'+
	          '<input type="radio" class="radio-nav" hidden="">'+
	          '<span class="btn btn-xs"><i class="fa fa-phone"></i></span>'+
	          ''+
          '</label>'+
          '<label class="days-navigation__label">'+
	          '<input type="radio" class="radio-nav" hidden="">'+
	          '<span class="btn btn-xs">sip</span>'+
          '</label>'+
        '</div>'+
      '</div>'+
      '<div class="col-sm-1"><input type="text" class="form-control" data-toggle="tooltip" title="data-original-title="Добавочный"></div>'+
      '<div class="col-sm-3"><input type="text" class="form-control js-manager-name hidden" placeholder="Имя менеджера"></div>'+
      '<div class="col-sm-5 row">'+
        '<div class="col-sm-7"><input type="text" class="form-control pull-left js-office hidden" placeholder="Отдел / филиал"></div>'+
        '<div class="checkbox-flag__wrapper pull-left">'+
          
          '<label class="">'+
          	'<input type="checkbox" hidden="">'+
          	'<span class="checkbox-flag"></span>'+
          	'<span class="checkbox-flag__label out">выкл.</span>'+
	          '<span class="checkbox-flag__label in">вкл.</span>'+
          '</label>'+
          
        '</div>'+
      '</div>'+
    '</div>'

		$("#call_1").click(function(e) {
				if($(this).is(':checked')){
					$('.js-manager-name').removeClass('hidden');
				}else{
					$('.js-manager-name').addClass('hidden');
				}
		});

		$("#call_2").click(function(e) {
				if($(this).is(':checked')){
					$('.js-office').removeClass('hidden');
				}else{
					$('.js-office').addClass('hidden');
				}
		});


	$(html).appendTo($('.fieldset .wrapper-for-row-phone'));
});

$('.js-append__label').on('click', function(e){
	e.preventDefault();

	var html = 
		'<div class="form-inline">'+
		'<input type="text" class="form-control">&nbsp;&nbsp;&nbsp;'+
		'<br><br>'+
		'</div>'


	$(html).appendTo($(this).parent());
});


$('.js-add-row-schedule').on('click', function(e){
	e.preventDefault();

	var htmlSchedule = 
              '<div class="schedule-row clearfix">'+
              '<br>'+
                '<div class="col-sm-3">'+
                  '<div class="phone__input phone__input-days row">'+
                    '<input type="text" class="form-control">'+
                    '<div class="phone__input-check days-navigation">'+
                      '<label class="days-navigation__label week-days__label">'+
                        '<input type="checkbox" class="radio-nav" hidden>'+
                        '<span class="btn btn-xs">Пн.</span>'+
                      '</label>'+
                      '<label class="days-navigation__label week-days__label">'+
                        '<input type="checkbox" class="radio-nav" hidden>'+
                        '<span class="btn btn-xs">Вт.</span>'+
                      '</label>'+
                      '<label class="days-navigation__label week-days__label">'+
                        '<input type="checkbox" class="radio-nav" hidden>'+
                        '<span class="btn btn-xs">Ср.</span>'+
                      '</label>'+
                      '<label class="days-navigation__label week-days__label">'+
                        '<input type="checkbox" class="radio-nav" hidden>'+
                        '<span class="btn btn-xs">Чт.</span>'+
                      '</label>'+
                      '<label class="days-navigation__label week-days__label">'+
                        '<input type="checkbox" class="radio-nav" hidden>'+
                        '<span class="btn btn-xs">Пт.</span>'+
                      '</label>'+
                      '<label class="days-navigation__label week-days__label">'+
                        '<input type="checkbox" class="radio-nav" hidden>'+
                        '<span class="btn btn-xs">Сб.</span>'+
                      '</label>'+
                      '<label class="days-navigation__label week-days__label">'+
                        '<input type="checkbox" class="radio-nav" hidden>'+
                        '<span class="btn btn-xs">Вс.</span>'+
                      '</label>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="form-inline col-sm-8">'+
                  '<select name="" id="" class="select__department-trigger form-control" style="width: 81px">'+
                    '<option value="">09:00</option>'+
                    '<option value="">10:00</option>'+
                    '<option value="">10:00</option>'+
                  '</select>&nbsp; - &nbsp;'+
                  '<select name="" id="" class="select__department-trigger form-control time-control" style="width: 81px">'+
                    '<option value="">21:00</option>'+
                    '<option value="">21:00</option>'+
                    '<option value="">21:00</option>'+
                  '</select>&nbsp; &nbsp;'+
                  '<select name="" id="" class="select__add-element form-control select__double-arrow">'+
                    '<option class="checkbox__marked" value="">+64988798784</option>'+
                    '<option value="">+8646464566</option>'+
                    '<option value="">+7564658865</option>'+
                  '</select>&nbsp; '+
                '</div>'+
              '</div>'

	$(htmlSchedule).appendTo($('.schedule-row-fake'));

	$('.schedule-row-fake .schedule-row:last .select__department-trigger').chosen({
		inherit_select_classes: true,
		disable_search: true
	});

	$('.schedule-row-fake .schedule-row:last .select__add-element').multipleSelect({
		width: 190,
		selectAll: false,
		placeholder: "Выберите что нибудь",
		onUncheckAll: true
	});


});

$("#call_1").click(function(e) {
		if($(this).is(':checked')){
			$('.js-manager-name').removeClass('hidden');
		}else{
			$('.js-manager-name').addClass('hidden');
		}
});

$("#call_2").click(function(e) {
		if($(this).is(':checked')){
			$('.js-office').removeClass('hidden');
		}else{
			$('.js-office').addClass('hidden');
		}
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





// ***** Add bootstrap triggers *****

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$(function () {
  $('[data-toggle="popover"]').popover()
});





// ***** Plugin's init and optionated *****
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



var addInput = function(){
	var $input = $("#refreshInput");
	htmlInput = 
		'<li class="form__add-element form-inline">'+
	    '<input id="refreshInput" type="text" required="required" placeholder="Добавить номер"/>'+
	    '<a href="#" class="addLi"><i class="fa fa-plus" id="refreshAdd"></i></a>'+
	  '</li>'

	  $(htmlInput).insertBefore('.ms-drop ul li.selected');
};

addInput();
	


	  $(".addLi").click(function(e) {
	  		e.preventDefault();
	  		var $input = $("#refreshInput");
	  	  var value = $input.val();
	  	  var valueInput = 
						'<li class=" " style="false"><label class="">'+
							'<input type="checkbox" data-name="selectItem">'+ value +'</label>'+
						'</li>'
	  	$(this).parent().parent('ul').children('.ms-no-results').before(valueInput);
	  	// $(valueInput).before($(this).parent().parent('ul').children('.ms-no-results'));
	  	// $(this).parent().parent().parent().parent().prev('.select__add-element').multipleSelect("refresh");
	  	// return addInput();

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
});


 // ***** All Range Slider *****
var rangeTime = $('.range-time');
function createSlider (slide) {
    var slider = noUiSlider.create(sliders[slide], {
        start: 0,
        connect: "lower",
        orientation: "horizontal",
        step: 1,
        range: {
            'min': 0,
            'max': 30
        },
			format: {
			  to: function ( value ) {
				return value;
			  },
			  from: function ( value ) {
				return value.replace(',', '');
			  }
			}
    });
    
    // add the slider object to the slider element
    // using data for future reference
    $(sliders[slide]).data('slider', slider);

    
    slider.on('change', function( values, handle ) {
        // on change of the slider, find the next element and set its value
        $(event.target).closest('.range-time').parent('.range-wrapper').siblings('.see').text(values[handle] + ' сек.');
        console.log(event.target);
    });

    

    for (var i = 0 ; i < rangeTime.length; i++) {

    slider.on('change', function( values, handle ) {

			$('.range-down').on('click', function(e){
				e.preventDefault();
				rangeTime[handle].noUiSlider.set(i-1);
			});

			$('.range-up').on('click', function(e){
				e.preventDefault();
				rangeTime[handle].noUiSlider.set(i+1);
			});

		});

}


}


			var sliders = $('.range-time');
			for ( var i = 0; i < sliders.length; i++ ) {
				createSlider(i);
			}

// $('.slider-input').change(function(){
//    // on input change, get the slider from the previous element using data
//    // now we have the slider object to call set.
//    $(this).prev().data('slider').set(this.value);
// });





	// var rangeTime = $('.range-time');
	// 				// seeRangeTime = document.getElementsByClassName('see');

	// for (var i = 0 ; i < rangeTime.length; i++) {

	// 	noUiSlider.create(rangeTime[i], {
	// 		start: 0,
	// 		step: 1,
	// 		connect: 'lower',
	// 		margin: 20,
	// 		range: {
	// 			'min': [  0 ],
	// 			'max': [ 30 ]
	// 		},
	// 		format: {
	// 		  to: function ( value ) {
	// 			return value;
	// 		  },
	// 		  from: function ( value ) {
	// 			return value.replace(',-', '');
	// 		  }
	// 		}
	// 	});

	// 		var seeRangeTime = rangeTime.eq(i).parent('.range-wrapper').siblings('.see');

		// rangeTime[i].noUiSlider.on('update', function( values, handle ) {

		// 	seeRangeTime[handle].innerHTML = values[handle];

		// 			$('.range-down').on('click', function(e){
		// 	e.preventDefault();
		// 	rangeTime[handle].noUiSlider.set(i-1);
		// });

		// $('.range-up').on('click', function(e){
		// 	e.preventDefault();
		// 	rangeTime[handle].noUiSlider.set(i+1);
		// });

		// });


	// };


	var startSlider = document.getElementById('range-ui'),
		maxCount = $('.col-sm-12 > .checkbox-label'),
		checkbox = maxCount.children('input');

	noUiSlider.create(startSlider, {
		start: 0,
		step: 1,
		connect: 'lower',
		margin: 20,
		range: {
			'min': [  0 ],
			'max': [ maxCount.length ]
		},
		format: {
		  to: function ( value ) {
			return value;
		  },
		  from: function ( value ) {
			return value.replace('', '');
		  }
		}
	});
	
	startSlider.noUiSlider.on('update', function( values, handle ) {
		// stepSliderValueElement.innerHTML = values[handle];
		var i = values[handle];
		// var countCheck = checkbox[i];
		if(checkbox.eq(i).prop('checked', false)){
			checkbox.eq(i).prop('checked', true);
		}else{
			checkbox.eq(i).prop('checked', false);
		}


		$('.range-down').on('click', function(e){
			e.preventDefault();
			startSlider.noUiSlider.set(i-1);
		});

		$('.range-up').on('click', function(e){
			e.preventDefault();
			startSlider.noUiSlider.set(i+1);
		});




		console.log(checkbox.eq(i));
	});


	// var stepSliderValueElement = document.getElementById('see');




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






