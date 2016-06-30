(function($, undefined){

$('.slider__button_left').on('click', function(){
		var detachedLink = $( '.slider__item li' ).first().detach();
		detachedLink.appendTo( '.slider__item' );
	})
	$('.slider__button_right').on('click', function(){
		var detachedLink = $( '.slider__item li' ).last().detach();
		detachedLink.prependTo( '.slider__item' );
	})
	var obj = {
		'1Jane Hunt' : '"1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum velit vitae nulla molestie eu commodo nulla dapib us. Donec id sollicitudin urna. Integer at dui ac leo fermentum varius eleifend ut.',
		'2Jane Hunt' : '"2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum velit vitae nulla molestie eu commodo nulla dapib us. Donec id sollicitudin urna. Integer at dui ac leo fermentum varius eleifend ut.',
		'3Jane Hunt' : '"3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum velit vitae nulla molestie eu commodo nulla dapib us. Donec id sollicitudin urna. Integer at dui ac leo fermentum varius eleifend ut.',
		'4Jane Hunt' : '"4Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum velit vitae nulla molestie eu commodo nulla dapib us. Donec id sollicitudin urna. Integer at dui ac leo fermentum varius eleifend ut.',
		'5Jane Hunt' : '"5Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum velit vitae nulla molestie eu commodo nulla dapib us. Donec id sollicitudin urna. Integer at dui ac leo fermentum varius eleifend ut.',
		'6Jane Hunt' : '"6Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum velit vitae nulla molestie eu commodo nulla dapib us. Donec id sollicitudin urna. Integer at dui ac leo fermentum varius eleifend ut.',
		'7Jane Hunt' : '"7Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum velit vitae nulla molestie eu commodo nulla dapib us. Donec id sollicitudin urna. Integer at dui ac leo fermentum varius eleifend ut.',
		'8Jane Hunt' : '"8Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum velit vitae nulla molestie eu commodo nulla dapib us. Donec id sollicitudin urna. Integer at dui ac leo fermentum varius eleifend ut.',
		'9Jane Hunt' : '"9Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum velit vitae nulla molestie eu commodo nulla dapib us. Donec id sollicitudin urna. Integer at dui ac leo fermentum varius eleifend ut.',
		'10Jane Hunt' : '"10Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum velit vitae nulla molestie eu commodo nulla dapib us. Donec id sollicitudin urna. Integer at dui ac leo fermentum varius eleifend ut.',
		'11Jane Hunt' : '"11Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum velit vitae nulla molestie eu commodo nulla dapib us. Donec id sollicitudin urna. Integer at dui ac leo fermentum varius eleifend ut.',
		'12Jane Hunt' : '"12Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum velit vitae nulla molestie eu commodo nulla dapib us. Donec id sollicitudin urna. Integer at dui ac leo fermentum varius eleifend ut.',
		'13Jane Hunt' : '"13Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum velit vitae nulla molestie eu commodo nulla dapib us. Donec id sollicitudin urna. Integer at dui ac leo fermentum varius eleifend ut.',
		'14Jane Hunt' : '"14Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum velit vitae nulla molestie eu commodo nulla dapib us. Donec id sollicitudin urna. Integer at dui ac leo fermentum varius eleifend ut.',
		'15Jane Hunt' : '"15Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum velit vitae nulla molestie eu commodo nulla dapib us. Donec id sollicitudin urna. Integer at dui ac leo fermentum varius eleifend ut.',
		'16Jane Hunt' : '"16Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum velit vitae nulla molestie eu commodo nulla dapib us. Donec id sollicitudin urna. Integer at dui ac leo fermentum varius eleifend ut.',
		'17Jane Hunt' : '"17Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum velit vitae nulla molestie eu commodo nulla dapib us. Donec id sollicitudin urna. Integer at dui ac leo fermentum varius eleifend ut.',
		'18Jane Hunt' : '"18Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum velit vitae nulla molestie eu commodo nulla dapib us. Donec id sollicitudin urna. Integer at dui ac leo fermentum varius eleifend ut.',
		'19Jane Hunt' : '"19Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris interdum velit vitae nulla molestie eu commodo nulla dapib us. Donec id sollicitudin urna. Integer at dui ac leo fermentum varius eleifend ut.'
	};
	$( '.slider__item li' ).on('click', function(){
		var data = $(this).data('name');
		$('.b-main-section3__quote').text(obj[data]);
		$('.b-main-section3__name').text(data);
	});
	var number = 4
	var display = $(".b-header-main__item2_display").find('img');

	setInterval(function() {
		var a = number
		if (a == 0) {
			display.eq(4).css({'opacity' : '1'});
			display.eq(a).animate({'opacity' : '0'}, 4000)
		 	number = 4;
		} else {
			display.eq(a-1).css({'opacity' : '1'});
			display.eq(a).animate({'opacity' : '0'}, 4000)
		 	number -= 1;
		}		 		 		
	 }, 5000);

	// $(".b-header-main__item2_display").on("click", function(){
	// 	console.log('1')
	// 	display.eq(0).animate({'opacity' : '0'}, 3000)
	// 	// setTimeout(function(){
	// 	// 	$('#red').animate({'opacity' : '1'}, 500)
	// 	// }, 500)
	// });

	// setTimeout(function() {
	// 	setInterval(function() {
	// 		$(".b-header-main__item2_display").animate({'opacity' : '0.1'}, 3500);
	// 	}, 7000);
	// }, 0);
	// setTimeout(function() {
	// 	setInterval(function() {
	// 		$(".b-header-main__item2_display").animate({'opacity' : '1'}, 3500);;
	// 	}, 7000);
	// }, 3500);
	// setTimeout(function() {
	
	// },3500);

})(jQuery);