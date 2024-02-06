package com.dev.shopping.model;
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
public class Customer extends BaseEntity{

    String firstName;
    String lastName;
    BigDecimal balance;
    String telephone;
    String accountId;
    String accountPassword;

//    @OneToMany(mappedBy = "customer")
//    List<PurchaseList> purchaseLists;
//
//    @OneToMany(mappedBy = "preferred_product")
//    List<PreferredProduct> preferredProducts;

}
