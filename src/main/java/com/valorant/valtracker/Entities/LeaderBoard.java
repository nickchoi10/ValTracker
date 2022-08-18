package com.valorant.valtracker.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class LeaderBoard {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String playerCardId;
    private String titleId;
    private String puuid;
    private String name;
    private String tag;
    private Long leaderBoardRank;
    private Long numberOfWins;


    public LeaderBoard(String playerCardId, String titleId, String puuid, String name, String tag, Long leaderBoardRank, Long numberOfWins) {
        this.playerCardId = playerCardId;
        this.titleId = titleId;
        this.puuid = puuid;
        this.name = name;
        this.tag = tag;
        this.leaderBoardRank = leaderBoardRank;
        this.numberOfWins = numberOfWins;
    }

    public LeaderBoard() {
    }

    public String getPlayerCardId() {
        return playerCardId;
    }

    public void setPlayerCardId(String playerCardId) {
        this.playerCardId = playerCardId;
    }

    public String getTitleId() {
        return titleId;
    }

    public void setTitleId(String titleId) {
        this.titleId = titleId;
    }

    public String getPuuid() {
        return puuid;
    }

    public void setPuuid(String puuid) {
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

    public Long getLeaderBoardRank() {
        return leaderBoardRank;
    }

    public void setLeaderBoardRank(Long leaderBoardRank) {
        this.leaderBoardRank = leaderBoardRank;
    }

    public Long getNumberOfWins() {
        return numberOfWins;
    }

    public void setNumberOfWins(Long numberOfWins) {
        this.numberOfWins = numberOfWins;
    }
}
