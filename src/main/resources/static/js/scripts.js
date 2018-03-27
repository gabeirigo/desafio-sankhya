$(function() {

	// FORMATAR MOEDA
	var valor = $('.valor').html();
	valor = valor.replace(".", ",");
	$('.valor').html(valor);

	// FORMATAR DATA	
	$('.date').each(function () {
		var data = new Date(this.value);
		this.value = [data.getDate(), data.getMonth() + 1, data.getFullYear()].join('/');
	});


	// FUNCÃO PARA FORMATAR DATA
	function formatDate(date) {
		var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		return [day, month, year].join('/');
	}

	var dataFormatada = formatDate($('.date').html());
	$('.date').html(dataFormatada);

});