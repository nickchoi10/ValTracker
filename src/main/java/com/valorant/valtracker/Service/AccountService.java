package com.valorant.valtracker.Service;

import com.valorant.valtracker.Entities.Account;
import com.valorant.valtracker.Repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class AccountService {
    private AccountRepository repository;
    @Autowired
    public AccountService (AccountRepository repository){
        this.repository=repository;
    }

    public Account create(Account person){
        return repository.save(person);
    }

    public Account findById(Long puuid){
        return repository.findById(puuid).get();
    }

    public List<Account> findAll(){
        Iterable <Account> allAccount= repository.findAll();
        List<Account> AccountList = new ArrayList<>();
        allAccount.forEach(AccountList::add);
        return AccountList;
    }

    public Account update(Long puuid, Account newData){
        Account accountInDatabase = this.findById(puuid);
        accountInDatabase.setName(newData.getName());
        accountInDatabase.setTag(newData.getTag());
        accountInDatabase.setPuuid(newData.getPuuid());
        accountInDatabase=repository.save(accountInDatabase);
        return accountInDatabase;
    }

    public Account deleteById(Long puuid) {
        Account personDeleted = this.findById(puuid);
        repository.delete(personDeleted);
        return  personDeleted;
    }




}
