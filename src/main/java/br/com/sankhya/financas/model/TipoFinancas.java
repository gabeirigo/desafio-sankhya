package br.com.sankhya.financas.model;

public enum TipoFinancas {
	RECEITA(1), DESPESA(2);
	
	public int tipo;
	
	private TipoFinancas(int tipo) {
		this.tipo = tipo;
	}
	
	//	GETTERS AND SETTERS
	public int getTipo() {
		return tipo;
	}

	public void setTipo(int tipo) {
		this.tipo = tipo;
	}

}
