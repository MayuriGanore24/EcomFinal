package com.ecom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.entity.Product;
import com.ecom.service.ProductService;


@RestController
public class ProductController {

	@Autowired
	private ProductService productService;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/products")  //- clear
	public ResponseEntity<List<Product>>  getAllProduct(){
		 List<Product> allProducts = productService.getAllProducts();
		 return ResponseEntity.ok(allProducts);
	}
	
	
	@GetMapping("/product/{productId}")  //- clear
	public ResponseEntity<Product> getProductById( @PathVariable @Param("productId") Long productId){
		Product product = productService.getProductById(productId);
		return ResponseEntity.ok(product);
	}
}
