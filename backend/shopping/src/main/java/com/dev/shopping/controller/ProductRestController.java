package com.dev.shopping.controller;

import com.dev.shopping.dto.ProductResponse;
import com.dev.shopping.model.Product;
import com.dev.shopping.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequestMapping("api/products")
@RestController
@RequiredArgsConstructor
public class ProductRestController {
    private final ProductService productService;

    @GetMapping("/all")
    public List<Product> listOwners() {
        List<Product> products = productService.findAll();
        return products;
    }

    @GetMapping("/products")
    public List<Product> getProductByKeyword(@RequestParam(required = true) String keyword) {
        return productService.findByKeyword(keyword);
    }

    @PostMapping
    public Product addProduct(@RequestBody Product product) {
       return productService.addProduct(product);
    }

    @DeleteMapping("/{productId}")
    public void deleteProduct(@PathVariable Long productId) {
        productService.deleteProductById(productId);
    }

}

