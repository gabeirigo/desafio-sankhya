$(function() {

	$('.money').mask('000.000.000.000.000,00', {reverse: true});

	// FORMATAR MOEDA
	$('tr').each(function () {
		var valor = $(this).find('.valor').text();
		valor = valor.replace(".", ",");
		$(this).find('.valor').text(valor);
	})

	// FUNCÃO PARA FORMATAR DATA
	function formatDate(date) {
		var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + (d.getDate() + 1),
		year = d.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		return [day, month, year].join('/');
	}
	
	$('tr').each(function() {
		var recebeData = $(this).find('.date').text();
		dataFormatada = formatDate(recebeData);
		$(this).find('.date').text(dataFormatada);
	})

	

});