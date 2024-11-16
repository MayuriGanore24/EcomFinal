package com.ecom.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecom.entity.Customer;
import com.ecom.repository.CustomerRepository;

@Service
public class CustomerLoginServiceImpl implements CustomerLoginService {

	@Autowired
	private CustomerRepository customerRepository;
	
	@Override
	public Customer registerCustomer(Customer customer) {
	
		return customerRepository.save(customer);
	}

	@Override
	public Customer loginCustomer(String username, String Password) {
		
		Customer customer = customerRepository.findByUserName(username);
		if(customer != null && customer.getPassword().equals(Password)) {
			return customer;
		}else 
		{
		return null;
		}
	}

}
