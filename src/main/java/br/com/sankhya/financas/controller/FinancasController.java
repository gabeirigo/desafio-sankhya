package br.com.sankhya.financas.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import br.com.sankhya.financas.model.Financas;
import br.com.sankhya.financas.repository.FinancasRepository;

@Controller
public class FinancasController {
	
	@Autowired
	private FinancasRepository financasRepository;
	
	@RequestMapping(value = "/novo", method=RequestMethod.GET)
	public String novo() {
		return "financas/novo";
	}
	
	@RequestMapping(value = "/novo", method=RequestMethod.POST)
	public String novo(Financas f) {
		
		String valor = f.getValor().replace(",", ".");
		f.setValor(valor);
		
		financasRepository.save(f);
		return "redirect:/novo";
	}
	
	@RequestMapping("/deletar")
	public String deletar(long id) {
		Financas financa = financasRepository.findById(id);
		financasRepository.delete(financa);
		return "redirect:/";
	}
}
