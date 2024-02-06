package com.dev.shopping.controller;

import com.dev.shopping.model.Product;
import com.dev.shopping.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.criteria.Order;
import java.util.ArrayList;
import java.util.List;
@RestController
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping("/add")
    public Product createSingleOrder(@RequestBody Product product) {

        return orderService.createOrder(product);
    }
    @PostMapping("/addMulti")
    public List<Product> createOrder(@RequestBody List<Product> products) {
        List<Product> createdOrders = new ArrayList<>();
        for (Product product : products) {
            Product createdOrder = orderService.createOrder(product);
            createdOrders.add(createdOrder);
        }
        return createdOrders;
    }
}
