package com.example.demo.Model;

import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table
public class Forum {

    @Id
    @SequenceGenerator(
            name = "forum_sequence",
            sequenceName = "forum_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "forum_sequence"
    )

    private BigDecimal id;
    private BigDecimal communityId;
    private BigDecimal userId;
    private Date timestamp;
    private String message;

}
