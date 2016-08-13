package com.server.service;

import com.server.domain.UserInfoDTO;

import java.util.List;

/**
 * Created by yanhuang on 8/12/16.
 */
public interface UserInfoService {
    UserInfoDTO create(UserInfoDTO userInfoDTO);

    UserInfoDTO delete(String phoneNumber);

    List<UserInfoDTO> findAll();

    UserInfoDTO findByPhoneNumber(String phoneNumber);

    UserInfoDTO update(UserInfoDTO userInfoDTO);
}
