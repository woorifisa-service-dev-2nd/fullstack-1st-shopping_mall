package com.dev.shopping.repository;

import com.dev.shopping.model.Product;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends CrudRepository<Product, Long> {
     List<Product> findByNameContaining(String keyword);

}
