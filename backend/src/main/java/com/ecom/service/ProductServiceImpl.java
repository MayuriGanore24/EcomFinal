package com.ecom.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecom.entity.Product;
import com.ecom.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService{

	@Autowired
	private ProductRepository productRepository;
	
	@Override
	public List<Product> getAllProducts() {
		List<Product> productList = productRepository.findAll();
		return productList;
	}

	@Override
	public Product getProductById(Long productId) {
		return productRepository.findById(productId).orElseThrow();
	}

}
