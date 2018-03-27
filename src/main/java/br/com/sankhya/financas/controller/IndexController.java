package br.com.sankhya.financas.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import br.com.sankhya.financas.model.Financas;
import br.com.sankhya.financas.repository.FinancasRepository;

@Controller
public class IndexController {
	
	@Autowired
	private FinancasRepository financasRepository;
	
	@RequestMapping(value = "/")
	public ModelAndView listaFinancas() {
		ModelAndView view = new ModelAndView("index");
        Iterable<Financas> financas = financasRepository.findAll();
		view.addObject("financas", financas);
		return view;
	}
	
}
