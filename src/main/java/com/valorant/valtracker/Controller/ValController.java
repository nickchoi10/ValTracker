//package com.valorant.valtracker.Controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.fasterxml.jackson.core.JsonProcessingException;
//import com.fasterxml.jackson.databind.DeserializationFeature;
//import com.valorant.valtracker.Entities.Account;
//import com.valorant.valtracker.Service.AccountService;
//
//import kong.unirest.HttpResponse;
//import kong.unirest.ObjectMapper;
//import kong.unirest.Unirest;
//
//@RestController
//public class ValController {
//
//    private AccountService service;
//
//    @Autowired
//    public ValController(AccountService service){this.service = service;}
//
//    @GetMapping("/valorant/v1/account/{name}/{tag}")
//    public ResponseEntity<?>  getAccount (@PathVariable String name, String tag){
//        HttpResponse<String> response = Unirest.get("https://api.henrikdev.xyz/valorant/v1/account/{name}/{tag}" + name + tag)
//            .header("api-host", "https://api.henrikdev.xyz")
//            .header("api-key", "HDEV-8692ac73-384e-46c0-b12a-22e813bbfe8e")
//            .asString();
//        ObjectMapper objectMapper = new ObjectMapper();
//        try {
//            Account account = objectMapper
//                .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false)
//                .readValue(response.getBody(), Account.class);
//            if (account != null) { return new ResponseEntity<>(account, HttpStatus.OK); }
//            else { return new ResponseEntity<>(null, HttpStatus.NO_CONTENT); }
//        } catch (JsonProcessingException ignored) {}
//        return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
//    }
//
//}
