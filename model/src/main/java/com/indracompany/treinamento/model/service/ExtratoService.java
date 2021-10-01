package com.indracompany.treinamento.model.service;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.indracompany.treinamento.model.entity.OperacaoConta;
import com.indracompany.treinamento.model.repository.ExtratoBancarioRepository;


@Service
public class ExtratoService extends GenericCrudService<OperacaoConta, Long, ExtratoBancarioRepository>{
	
	
	@Autowired 
	private ExtratoBancarioRepository extratoBancarioRepository;
	
	
	public List<OperacaoConta> obterExtrato(String agencia, String numConta) {
		
			List<OperacaoConta> extrato = extratoBancarioRepository.findByAgenciaAndConta(agencia, numConta);
			
			return extrato;
		
		
		}
	
	// emitindo com datas
	
	public List<OperacaoConta> emitirExtratoComData(String agencia, String conta, String dataInicio, String dataFim){
		
		Date dataA = Date.valueOf(dataInicio);
		Date dataB = Date.valueOf(dataFim);
		
		
		
		List<OperacaoConta> extrato = repository.findByAgenciaAndContaAndDataBetween(agencia, conta, dataA, dataB);
		
		return extrato;
	}

}
