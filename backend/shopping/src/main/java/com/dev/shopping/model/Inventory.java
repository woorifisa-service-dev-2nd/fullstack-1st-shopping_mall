package com.dev.shopping.model;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class Inventory extends BaseEntity{


    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
    private Long qty;



}
