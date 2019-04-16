package com.codemy.security.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@RestController
public class PrincipalController {

    @RequestMapping(value = "/principal", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<Principal> principal(Principal user) {
        return new ResponseEntity<Principal>(user, HttpStatus.OK);
    }

    @RequestMapping(value = "/username", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<List<String>> username() {

        List<String> person =new ArrayList<>();
        person.add("SAMEERA");
        person.add("JOHN");
        person.add("DENVER");

        return new ResponseEntity<List<String>>(person, HttpStatus.OK);
    }



}
