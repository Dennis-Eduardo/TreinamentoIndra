package com.indracompany.treinamento.model.repository;


import java.sql.Date;
import java.util.List;

import com.indracompany.treinamento.model.entity.OperacaoConta;

public interface ExtratoBancarioRepository extends GenericCrudRepository<OperacaoConta, Long> {
	
	public List<OperacaoConta> findByAgenciaAndConta(String agencia, String numConta);
	
	public List<OperacaoConta> findByAgenciaAndContaAndDataBetween(String agencia, String numero, Date dataInicio, Date dataFim);

}
