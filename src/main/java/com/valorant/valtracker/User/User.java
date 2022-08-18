package com.valorant.valtracker.User;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Integer userID;
    private String name;
    private String tag;


    public User(Integer userID, String name, String tag) {
        this.userID = userID;
        this.name = name;
        this.tag = tag;
    }

    public User(String name, String tag) {
        this.name = name;
        this.tag = tag;
    }
    

    public User() {
    }
    
    public Integer getUserID() {
        return this.userID;
    }

    public void setUserID(Integer userID) {
        this.userID = userID;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTag() {
        return this.tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

}
