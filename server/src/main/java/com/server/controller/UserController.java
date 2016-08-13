package com.server.controller;

import com.server.domain.UserInfo;
import com.server.domain.UserInfoDTO;
import com.server.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import javax.validation.constraints.AssertFalse;
import java.util.List;

/**
 * Created by yanhuang on 8/12/16.
 */
@RestController
@RequestMapping("/user")
public class UserController {
    private final UserInfoService userInfoService;

    @Autowired
    public UserController(UserInfoService userInfoService) {
        this.userInfoService = userInfoService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public UserInfoDTO create(@RequestBody @Valid UserInfoDTO userInfoDTO){
        return userInfoService.create(userInfoDTO);
    }

    @RequestMapping(method = RequestMethod.GET)
    List<UserInfoDTO> findAll() {
        return userInfoService.findAll();
    }
}
