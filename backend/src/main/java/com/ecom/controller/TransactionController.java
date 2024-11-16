package com.ecom.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.entity.Transactions;
import com.ecom.service.TransactionService;

@RestController
public class TransactionController {

	  @Autowired
	  private TransactionService transactionService;
	  
	  @CrossOrigin(origins = "http://localhost:3000")
	  @PostMapping("/transaction")
	   public ResponseEntity<String> saveTransaction(@RequestBody Transactions transactions) {
	        transactionService.saveTransaction(transactions);
	        return ResponseEntity.ok("Transaction Details saved successfully!");
	    }
}