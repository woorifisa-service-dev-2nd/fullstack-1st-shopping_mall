package com.dev.shopping.service;

import com.dev.shopping.model.Product;

import java.util.List;
import java.util.Optional;

public interface ProductService {

    List<Product> findAll();

    List<Product> findByKeyword(String keyword);

    Product addProduct(Product product);

    void deleteProductById(Long id);
//
//    Product updateProduct(Product product);
}
