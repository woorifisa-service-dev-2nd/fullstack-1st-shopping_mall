package com.dev.shopping.controller;

import com.dev.shopping.model.Product;
import com.dev.shopping.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/products")
@RestController
@RequiredArgsConstructor
public class ProductController {
    @Autowired
    private ProductService productService;

    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        productService.save(product);
        return null;
    }

    @DeleteMapping("/{productId}")
    public void deleteProduct(@PathVariable Integer productId) {
        productService.deleteById(productId);
    }

    @GetMapping
    public List<Product> getProducts(@RequestParam(value = "keyword", defaultValue = "") String keyword) {
        if(keyword == null || keyword.isEmpty()) {
            return productService.findAll();
        }
        List<Product> results = productService.searchProductsByKeyword(keyword);
        return results;
    }
}
