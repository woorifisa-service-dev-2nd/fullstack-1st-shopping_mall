package com.dev.shopping.service;

import com.dev.shopping.model.Product;
import com.dev.shopping.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    @Autowired
    private OrderRepository orderRepository;

    public Product createOrder(Product product) {
        return orderRepository.save(product);
    }

}
