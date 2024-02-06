package com.dev.shopping.service;

import com.dev.shopping.model.Product;

import java.util.List;

public interface ProductService {
    Product save(Product product);
    void deleteById(Long productId);

    List<Product> findAll();

    List<Product> searchProductsByKeyword(String keyword);

}
