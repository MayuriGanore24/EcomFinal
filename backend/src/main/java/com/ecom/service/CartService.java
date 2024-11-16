package com.ecom.service;

import java.util.List;

import com.ecom.entity.Cart;


public interface CartService {

	Cart addProductToCart(Long productId, Integer quantity);
	
	List<Cart> getAllProductInCart();
	
	String deleteProductFromCart(Long productId);
	
	
}
