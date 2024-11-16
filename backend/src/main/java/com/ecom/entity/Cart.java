package com.ecom.entity;

import java.util.ArrayList;
import java.util.List;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "Cart")
public class Cart {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long cart_id;
	
	@ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "productId")
    private Product product;

//	private Long productId;
	private Integer quantity;
	
	@OneToMany
	private List<Product> products = new ArrayList<>();

	public Long getCart_id() {
		return cart_id;
	}

	public void setCart_id(Long cart_id) {
		this.cart_id = cart_id;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	

	

	

	
	
}
