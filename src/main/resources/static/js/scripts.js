$(function() {

	$('.money').mask('000.000.000.000.000,00', {reverse: true});

	// FORMATAR MOEDA
	$('tr').each(function () {
		var valor = $(this).find('.valor').text();
		valor = valor.replace(".", ",");
		$(this).find('.valor').text(valor);
	})
	
	// FUNCÃO PARA FORMATAR DATA
	$('tr').each(function () {
	    var date = $(this).find('.date').text();
	    date = $(this).find('.date').text().split('-').reverse().join('/');
	    $(this).find('.date').text(date);
	});

});
