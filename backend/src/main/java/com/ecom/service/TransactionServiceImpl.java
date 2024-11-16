package com.ecom.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecom.entity.Transactions;
import com.ecom.repository.TransactionRepository;

@Service
public class TransactionServiceImpl implements TransactionService {

	@Autowired
	private TransactionRepository transactionRepository;
	    
	@Override
	public void saveTransaction(Transactions transactions) {
		
		transactionRepository.save(transactions);
	}
}
