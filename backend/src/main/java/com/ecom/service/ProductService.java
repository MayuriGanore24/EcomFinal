package com.ecom.service;

import java.util.List;

import com.ecom.entity.Product;

public interface ProductService {

	List<Product> getAllProducts();
	
	Product getProductById(Long ProductId);
}
