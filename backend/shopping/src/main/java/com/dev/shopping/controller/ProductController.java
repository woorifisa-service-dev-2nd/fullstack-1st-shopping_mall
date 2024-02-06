package com.dev.shopping.controller;

import com.dev.shopping.model.Product;
import com.dev.shopping.service.ProductServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/products")
@RestController
@RequiredArgsConstructor
public class ProductController {
    private final ProductServiceImpl productService;

    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        productService.save(product);
        return null;
    }

    @DeleteMapping("/{productId}")
    public void deleteProduct(@PathVariable Long productId) {
        productService.deleteById(productId);
    }

    @GetMapping("/all")
    public List<Product> listProducts() {
        List<Product> products = productService.findAll();
        return products;
    }

    @GetMapping
    public List<Product> listProduct(@RequestParam("keyword") String keyword) {
        List<Product> results = productService.searchProductsByKeyword(keyword);
        return results;
    }

//    @PatchMapping("/{productId}")
//    public Product updateProduct(@PathVariable Long productId, @RequestBody Product product) {
//        Product updatedProduct = productService.findById(productId);
//        updatedProduct.setProductName(product.getProductName());
//        updatedProduct.setPrice(product.getPrice());
//        updatedProduct.setType(product.getType());
//    }
}
