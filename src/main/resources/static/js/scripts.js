$(function() {

	$('.money').mask('000.000.000.000.000,00', {reverse: true});

	// FORMATAR MOEDA
	$('tr').each(function () {
		var valor = $(this).find('.valor').text();
		valor = valor.replace(".", ",");
		$(this).find('.valor').text(valor);
	})

	// FUNCÃO PARA FORMATAR DATA
	function formatDate(dateObject) {
	    var d = new Date(dateObject);
	    var day = d.getDate();
	    var month = d.getMonth() + 1;
	    var year = d.getFullYear();
	    if (day < 10) {
	        day = "0" + day;
	    }
	    if (month < 10) {
	        month = "0" + month;
	    }
	    var date = day + "/" + month + "/" + year;

	    return date;
	};
	
	$('tr').each(function() {
		var recebeData = $(this).find('.date').text();
		dataFormatada = formatDate(recebeData);
		$(this).find('.date').text(dataFormatada);
	})

});