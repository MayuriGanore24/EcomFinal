package com.ecom.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecom.entity.Transactions;

@Repository
public interface TransactionRepository extends JpaRepository<Transactions, String>{
	
}
