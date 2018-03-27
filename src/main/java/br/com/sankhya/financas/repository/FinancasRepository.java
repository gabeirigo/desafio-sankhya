package br.com.sankhya.financas.repository;

import org.springframework.data.repository.CrudRepository;

import br.com.sankhya.financas.model.Financas;

public interface FinancasRepository extends CrudRepository<Financas, String> {

	Financas findById(long id);

}
