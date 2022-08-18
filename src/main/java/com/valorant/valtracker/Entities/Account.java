package com.valorant.valtracker.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Account {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long puuid;
    private String name;
    private String tag;
    private String team;
    private Long level;
    private String character;
    private Long currentTier; //level
    private String currentTierPatched; //rank
    private String playerCard;
    private String playerTitle;
    private String partyId;


    public Account(Long puuid, String name, String tag, String team, Long level, String character, Long currentTier, String currentTierPatched, String playerCard, String playerTitle, String partyId) {
        this.puuid = puuid;
        this.name = name;
        this.tag = tag;
        this.team = team;
        this.level = level;
        this.character = character;
        this.currentTier = currentTier;
        this.currentTierPatched = currentTierPatched;
        this.playerCard = playerCard;
        this.playerTitle = playerTitle;
        this.partyId = partyId;
    }

    public Account(String name, String tag) {
        this.name = name;
        this.tag = tag;
    }

    public Account(Long puuid) {
        this.puuid = puuid;
    }

    public Account() {}


    public Long getPuuid() {
        return puuid;
    }

    public void setPuuid(Long puuid) {
        this.puuid = puuid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTag() {
        return tag;
    }

    public void setTag(String tag) {
        this.tag = tag;
    }

    public String getTeam() {
        return team;
    }

    public void setTeam(String team) {
        this.team = team;
    }

    public Long getLevel() {
        return level;
    }

    public void setLevel(Long level) {
        this.level = level;
    }

    public String getCharacter() {
        return character;
    }

    public void setCharacter(String character) {
        this.character = character;
    }

    public Long getCurrentTier() {
        return currentTier;
    }

    public void setCurrentTier(Long currentTier) {
        this.currentTier = currentTier;
    }

    public String getCurrentTierPatched() {
        return currentTierPatched;
    }

    public void setCurrentTierPatched(String currentTierPatched) {
        this.currentTierPatched = currentTierPatched;
    }

    public String getPlayerCard() {
        return playerCard;
    }

    public void setPlayerCard(String playerCard) {
        this.playerCard = playerCard;
    }

    public String getPlayerTitle() {
        return playerTitle;
    }

    public void setPlayerTitle(String playerTitle) {
        this.playerTitle = playerTitle;
    }

    public String getPartyId() {
        return partyId;
    }

    public void setPartyId(String partyId) {
        this.partyId = partyId;
    }


}
