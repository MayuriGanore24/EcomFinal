package com.ecom.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.entity.Cart;
import com.ecom.service.CartService;

@RestController
public class CartController {

	@Autowired
	private CartService cartService;

	
	@PostMapping("/addProduct/{productId}/{quantity}") //-- clear
	public ResponseEntity<String> addProductToCart(@PathVariable Long productId, @PathVariable Integer quantity){
		cartService.addProductToCart(productId, quantity);
		return ResponseEntity.ok("Product added to cart successfully");
	}
	
	@GetMapping("/cart") // - clear
	public ResponseEntity<List<Cart>> getAllProductsInCart(){
		List<Cart> carts = cartService.getAllProductInCart();
		return ResponseEntity.ok(carts);
	}
	
	@DeleteMapping("/{productId}") //-- clear
	public ResponseEntity<String> deleteProductFromCart(@PathVariable Long productId){
		String delete = cartService.deleteProductFromCart(productId);
		return ResponseEntity.ok(delete);
	}
	}
