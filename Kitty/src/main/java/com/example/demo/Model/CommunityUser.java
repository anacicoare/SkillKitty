package com.example.demo.Model;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table
public class CommunityUser {

    @Id
    @SequenceGenerator(
            name = "community_user_sequence",
            sequenceName = "community_user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "community_user_sequence"
    )

    private BigDecimal id;

    private BigDecimal userId;

    private BigDecimal communityId;
}
