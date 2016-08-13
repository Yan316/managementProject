package com.server.controller;

import com.server.domain.UserInfoDTO;
import com.server.service.MongoDBUserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

/**
 * Created by yanhuang on 8/13/16.
 */
@RestController
@RequestMapping("/login")
public class LoginController {
    private MongoDBUserInfoService mongoDBUserInfoService;

    @Autowired
    public LoginController(MongoDBUserInfoService mongoDBUserInfoService) {
        this.mongoDBUserInfoService = mongoDBUserInfoService;
    }

    @CrossOrigin
    @RequestMapping(method = RequestMethod.POST)
    public boolean login(@RequestBody @Valid UserInfoDTO userInfoDTO){
        UserInfoDTO userNameDTOFromDB = mongoDBUserInfoService.findByUserName(userInfoDTO.getUserName());
        return userInfoDTO.getPassword().equals(userNameDTOFromDB.getPassword());
    }
}
