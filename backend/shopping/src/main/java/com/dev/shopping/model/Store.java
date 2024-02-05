package com.dev.shopping.model;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.math.BigDecimal;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor

public class Store extends BaseEntity {

    String storeName;
    BigDecimal balance;
    String telephone;
    String accountId;
    String accountPassword;

    @OneToMany(mappedBy = "inventory")
    List<Inventory> inventory;

    @OneToMany(mappedBy = "purchase_list")
    List<PurchaseList> purchaseLists;


}
