package com.ecom.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.ecom.entity.Cart;

import jakarta.transaction.Transactional;


@Repository
public interface CartRepository extends JpaRepository<Cart, Long> {

	@Transactional
	@Modifying
	@Query(value="DELETE FROM Cart p WHERE p.product_id = :productId",nativeQuery=true)
	void deleteProductFromCart(@Param("productId") Long productId );

	
}
