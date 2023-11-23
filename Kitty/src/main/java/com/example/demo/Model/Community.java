package com.example.demo.Model;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table
public class Community {

    @Id
    @SequenceGenerator(
            name = "community_sequence",
            sequenceName = "community_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "community_sequence"
    )

    private BigDecimal id;
}
