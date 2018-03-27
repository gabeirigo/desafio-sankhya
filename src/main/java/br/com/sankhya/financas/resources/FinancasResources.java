package br.com.sankhya.financas.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.sankhya.financas.model.Financas;
import br.com.sankhya.financas.repository.FinancasRepository;

@RestController
@RequestMapping("/listagemDeFinancas")
public class FinancasResources {

	@Autowired
	private FinancasRepository financasRepository;
		
	@GetMapping(produces="application/json")
	public @ResponseBody Iterable<Financas> listagemDeFinancas() {
		Iterable<Financas> listagemDeEventos = financasRepository.findAll();
		return listagemDeEventos;
	}
	
	
}
