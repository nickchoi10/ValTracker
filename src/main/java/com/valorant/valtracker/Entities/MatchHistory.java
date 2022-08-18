package com.valorant.valtracker.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class MatchHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String map;
    private Long gameDate;
    private Long matchId;
    private Long gameLength;
    private Long roundsPlayed;
    private String mode;
    private Long roundsWon;
    private Long roundsLost;
    private Boolean hasWon;

    public MatchHistory(String map, Long gameDate, Long matchId, Long gameLength, Long roundsPlayed, String mode, Long roundsWon, Long roundsLost, Boolean hasWon) {
        this.map = map;
        this.gameDate = gameDate;
        this.matchId = matchId;
        this.gameLength = gameLength;
        this.roundsPlayed = roundsPlayed;
        this.mode = mode;
        this.hasWon = hasWon;
    }

    public MatchHistory() {}

    public String getMap() {
        return map;
    }

    public void setMap(String map) {
        this.map = map;
    }

    public Long getGameDate() {
        return gameDate;
    }

    public void setGameDate(Long gameDate) {
        this.gameDate = gameDate;
    }

    public Long getMatchId() {
        return matchId;
    }

    public void setMatchId(Long matchId) {
        this.matchId = matchId;
    }

    public Long getGameLength() {
        return gameLength;
    }

    public void setGameLength(Long gameLength) {
        this.gameLength = gameLength;
    }

    public Long getRoundsPlayed() {
        return roundsPlayed;
    }

    public void setRoundsPlayed(Long roundsPlayed) {
        this.roundsPlayed = roundsPlayed;
    }

    public String getMode() {
        return mode;
    }

    public void setMode(String mode) {
        this.mode = mode;
    }


    public Long getRoundsWon() {
        return roundsWon;
    }

    public void setRoundsWon(Long roundsWon) {
        this.roundsWon = roundsWon;
    }

    public Long getRoundsLost() {
        return roundsLost;
    }

    public void setRoundsLost(Long roundsLost) {
        this.roundsLost = roundsLost;
    }

    public Boolean getHasWon() {
        return hasWon;
    }

    public void setHasWon(Boolean hasWon) {
        this.hasWon = hasWon;
    }
}
