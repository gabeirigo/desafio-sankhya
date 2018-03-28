$(function() {

	// FORMATAR MOEDA
	$('tr').each(function() {
		var valor = $(this).find('.valor').html();
		valor = valor.replace(".", ",");
		$(this).find('.valor').html(valor);
	})
	
	
	function formatDate(date) {
		var d = new Date(date),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;

		return [day, month, year].join('/');
	}

	// FORMATAR DATA	
	$('tr').each(function () {
		var data = new Date($('.date').value);
		this.value = [data.getDate(), data.getMonth() + 1, data.getFullYear()].join('/');

		var dataFormatada = formatDate($('.date').html());
		$('.date').html(dataFormatada);
	});

	

});