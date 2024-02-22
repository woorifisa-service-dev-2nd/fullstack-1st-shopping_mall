package com.dev.shopping.model;

import lombok.*;


import javax.persistence.*;

@Entity(name = "orders")
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@ToString
public class Order extends BaseEntity{

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
    private Long qty;
}

