package com.ecom.service;

import com.ecom.entity.Customer;

public interface CustomerLoginService {

	Customer registerCustomer(Customer customer);
	
	Customer loginCustomer (String Username, String Password);
}
