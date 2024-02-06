package com.dev.shopping.model;

import lombok.*;

import javax.persistence.Entity;
import java.math.BigDecimal;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor

public class Product extends BaseEntity{

    String productName;
    Long price;
    String type;
}
