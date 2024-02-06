package com.dev.shopping.repository;

import com.dev.shopping.model.Product;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<Product, Long> {

}
