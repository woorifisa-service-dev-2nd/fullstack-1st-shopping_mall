package com.dev.shopping.dto;

import com.dev.shopping.model.Product;
import lombok.Getter;
import lombok.ToString;

@Getter
@ToString
public class ProductResponse {
    Long id;
    String productName;
    Long price;
    String type;
    private int statusCode;
    private String message;
    private Product product;


    public ProductResponse(int statusCode, String message, Product product) {
        this.statusCode = statusCode;
        this.message = message;
        this.product = product;
    }

}
