package com.dev.shopping.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="purchase_list")
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor

public class PurchaseList extends BaseEntity{
    @ManyToOne
    @JoinColumn(name="customer")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name="store")
    private Store store;

    @ManyToOne
    @JoinColumn(name="product")
    private Product product;


}

