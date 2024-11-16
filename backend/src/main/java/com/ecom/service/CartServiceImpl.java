package com.ecom.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecom.entity.Cart;
import com.ecom.entity.Product;
import com.ecom.repository.CartRepository;
import com.ecom.repository.ProductRepository;

@Service
public class CartServiceImpl implements CartService {

	//private static final Product ProductId = null;

	@Autowired
	private CartRepository cartRepository;
	
	@Autowired
	private ProductRepository productRepository;
	
	@Override
	public Cart addProductToCart(Long productId, Integer Quantity) {
		
		Product product = productRepository.findById(productId).orElseThrow();
		Cart cart = new Cart();
		cart.setProduct(product);
		cart.setQuantity(Quantity);
		return cartRepository.save(cart);
	}

	@Override
	public List<Cart> getAllProductInCart() {
		System.out.println(cartRepository.findAll().size());
		
		return cartRepository.findAll();
	}

	@Override
	public String deleteProductFromCart(Long productId) {
		
		
		 cartRepository.deleteProductFromCart(productId);
		
		 return "Deleted Successfully";
	}}

	

	





