$(document).ready(function(){
	// событие движение мышью
	$('.togglepic').mousemove(function(e){
		 e = e || event;
		// ищем первый блок внутри элемента и изменяем его ширину
		$(this).find('.tgp1').css({
			'width': e.offsetX +'px'
		});
	});
})