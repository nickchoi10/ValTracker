package com.valorant.valtracker.Entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class GameStoreOffers {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String Id;
    private String dataAssetId;
    private String currencyId;
    private Long basePrice;
    private Long durationRemainingInSeconds;

    public GameStoreOffers(String id, String dataAssetId, String currencyId, Long basePrice, Long durationRemainingInSeconds) {
        Id = id;
        this.dataAssetId = dataAssetId;
        this.currencyId = currencyId;
        this.basePrice = basePrice;
        this.durationRemainingInSeconds = durationRemainingInSeconds;
    }

    public GameStoreOffers() {
    }

    public String getId() {
        return Id;
    }

    public void setId(String id) {
        Id = id;
    }

    public String getDataAssetId() {
        return dataAssetId;
    }

    public void setDataAssetId(String dataAssetId) {
        this.dataAssetId = dataAssetId;
    }

    public String getCurrencyId() {
        return currencyId;
    }

    public void setCurrencyId(String currencyId) {
        this.currencyId = currencyId;
    }

    public Long getBasePrice() {
        return basePrice;
    }

    public void setBasePrice(Long basePrice) {
        this.basePrice = basePrice;
    }

    public Long getDurationRemainingInSeconds() {
        return durationRemainingInSeconds;
    }

    public void setDurationRemainingInSeconds(Long durationRemainingInSeconds) {
        this.durationRemainingInSeconds = durationRemainingInSeconds;
    }
}
