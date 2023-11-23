package com.example.demo.Model;

import jakarta.persistence.*;

import java.util.Date;
import java.math.BigDecimal;

@Entity
@Table
public class Steps {

    @Id
    @SequenceGenerator(
            name = "steps_sequence",
            sequenceName = "steps_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "steps_sequence"
    )

    private BigDecimal id;

    private BigDecimal assignedObjectiveId;

    private String name;

    private Boolean completed;

    private Date completedTime;

}
