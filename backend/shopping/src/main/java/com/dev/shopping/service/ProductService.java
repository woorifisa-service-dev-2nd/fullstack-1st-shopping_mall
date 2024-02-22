package com.dev.shopping.service;

import com.dev.shopping.model.Product;
import com.dev.shopping.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    public Product save(Product product) {
        return productRepository.save(product);
    }


    public void deleteById(Integer productId) {
        productRepository.deleteById(productId);
    }


    public List<Product> findAll() {
        List<Product> products = new ArrayList<>();
        productRepository.findAll().forEach(products::add);
        return products;
    }

    public List<Product> searchProductsByKeyword(String keyword) {
        return productRepository.findByProductNameContaining(keyword);
    }

}