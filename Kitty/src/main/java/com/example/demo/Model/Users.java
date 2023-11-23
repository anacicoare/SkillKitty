package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;


import java.math.BigDecimal;

@Entity
@Table
@AllArgsConstructor
public class Users {

    @Id
    @SequenceGenerator(
            name = "user_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_sequence"
    )
    private BigDecimal id;

    private String name;
    private String surname;
    private String mail;
    private String password;
    private String type;
    private Integer points;

    public Users() {
    }

    public Users(String name, String surname, String mail, String password, String type, Integer points) {
        this.name = name;
        this.surname = surname;
        this.mail = mail;
        this.password = password;
        this.type = type;
        this.points = points;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getPoints() {
        return points;
    }

    public void setPoints(Integer points) {
        this.points = points;
    }
}
