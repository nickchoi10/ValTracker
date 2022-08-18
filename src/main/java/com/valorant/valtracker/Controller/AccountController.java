package com.valorant.valtracker.Controller;

import com.valorant.valtracker.Entities.Account;
import com.valorant.valtracker.Service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Arrays;
import java.util.List;

@RestController
public class AccountController {

    @Autowired
    private AccountService service;

    @RequestMapping("/hello")
    public String hello(){
        return "Hello World";
    }

    @GetMapping(value = "/callclienthello")
    private String getHelloClient(){
        String uri = "http://localhost:8080/hello";
        RestTemplate restTemplate = new RestTemplate();
        String result = restTemplate.getForObject(uri, String.class);
        return result;
    }

    @GetMapping(value = "/countries")
    public List<Object> getCountries(){
        String url = "https://api.henrikdev.xyz/valorant/v1/account/%EB%B8%94%EB%9E%99%ED%95%91%ED%81%AC/5251";
        RestTemplate restTemplate = new RestTemplate();


        ResponseEntity<Account> countries = restTemplate.getForEntity(url, Account.class);

        return Arrays.asList(countries);
    }

    @GetMapping(value = "/account")
    public @ResponseBody String getAccountByNameTag(@RequestParam String name, @RequestParam String tag) throws IOException {
        URL apiUrl = new URL("https://api.henrikdev.xyz/valorant/v1/account" + name +tag);
        HttpURLConnection connection = (HttpURLConnection) apiUrl.openConnection();
        connection.setRequestMethod("GET");
        connection.setRequestProperty("Content-Type", "application/json");
        BufferedReader in = new BufferedReader(
            new InputStreamReader(connection.getInputStream()));
        String inputLine;
        StringBuffer content = new StringBuffer();
        while ((inputLine = in.readLine()) != null){
            content.append(inputLine);
        }
        in.close();
        return content.toString();
    }

}
