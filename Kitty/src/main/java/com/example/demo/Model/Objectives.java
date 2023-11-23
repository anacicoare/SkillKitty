package com.example.demo.Model;

import jakarta.persistence.*;

import java.math.BigDecimal;

@Entity
@Table
public class Objectives {

    @Id
    @SequenceGenerator(
            name = "objectives_sequence",
            sequenceName = "objectives_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "objectives_sequence"
    )

    private BigDecimal id;

    private BigDecimal communityId;

    private String name;

}
