package com.dev.shopping.model;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="preferred_product")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor

public class PreferredProduct extends BaseEntity{
    @ManyToOne
    @JoinColumn(name="customer")
    private Customer customer;

    @ManyToOne
    @JoinColumn(name="product")
    private Product product;



}
