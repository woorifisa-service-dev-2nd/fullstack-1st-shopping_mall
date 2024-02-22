package com.dev.shopping.controller;

import com.dev.shopping.model.Order;
import com.dev.shopping.service.OrderService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
@RequestMapping("/api/orders")
@RestController
@RequiredArgsConstructor
public class OrderController {
    @Autowired
    private OrderService orderService;

    @GetMapping
    public List<Order> getOrders(@RequestParam(value = "keyword", defaultValue = "") String keyword) {
        if(keyword == null || keyword.isEmpty()) {
            return orderService.findAll();
        }
        return orderService.findAll();
    }

    @PostMapping
    public String createOrders(@RequestBody List<Order> orderList) {
        List<Order> createdOrderList = new ArrayList<>();
        for (Order order : orderList) {
            createdOrderList.add(orderService.createOrder(order));
        }
        return createdOrderList.toString();
    }
}

