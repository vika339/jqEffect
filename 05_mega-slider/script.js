$(document).ready(function(){
	$('.block-in').on('click', megaSlider);
});

function megaSlider(){
	$('.block-in').not($(this)).animate({
		'width' : '50px'
	},1000);
	$(this).animate({
		'width' : '600px'
	},1000);
}