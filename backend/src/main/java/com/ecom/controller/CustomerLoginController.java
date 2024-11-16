package com.ecom.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.entity.Customer;
import com.ecom.service.CustomerLoginService;

@RestController
public class CustomerLoginController {

    @Autowired
    private CustomerLoginService customerLoginService;
    
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/signup")
    public ResponseEntity<Customer> signup(@RequestBody Customer customer){
        Customer registeredCustomer = customerLoginService.registerCustomer(customer);
        return new ResponseEntity<Customer>(registeredCustomer, HttpStatus.CREATED);
    }
    
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public ResponseEntity<Customer> login(@RequestBody Customer customer){
        Customer loggedCustomer = customerLoginService
                .loginCustomer(customer.getUserName(), customer.getPassword());
        if(loggedCustomer != null) {
            return new ResponseEntity<>(loggedCustomer, HttpStatus.ACCEPTED);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
