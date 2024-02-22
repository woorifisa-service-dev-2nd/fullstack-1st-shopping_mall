package com.dev.shopping.model;

import lombok.*;

import javax.persistence.Entity;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@ToString
public class Product extends BaseEntity{
    String productName;
    Integer price;
    String type;
}
