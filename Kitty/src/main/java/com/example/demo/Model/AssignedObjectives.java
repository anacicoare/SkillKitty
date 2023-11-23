package com.example.demo.Model;
import jakarta.persistence.*;

import java.math.BigDecimal;
import java.util.Date;


@Entity
@Table
public class AssignedObjectives {

    @Id
    @SequenceGenerator(
            name = "assigned_objectives_sequence",
            sequenceName = "assigned_objectives_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "assigned_objectives_sequence"
    )

    private BigDecimal id;

    private BigDecimal userId;

    private BigDecimal objectiveId;

    private Boolean completed;

    private Integer noOfSteps;

    private Integer level;

    private Date completedTime;

}
