$(document).ready(function() {
	$('#accordeon .acc-head').on('click', f_acc);
});

function f_acc(){
	//$('#accordeon .ac-body').slideUp(1000);
	$('#accordeon .acc-body').not(    $(this).next()   ).slideUp(1000);
	$(this).next().slideToggle(2000);
}