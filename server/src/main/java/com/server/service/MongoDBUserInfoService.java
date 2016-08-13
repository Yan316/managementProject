package com.server.service;

import com.server.domain.UserInfo;
import com.server.domain.UserInfoDTO;
import com.server.exception.UserInfoNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import static java.util.stream.Collectors.toList;

/**
 * Created by yanhuang on 8/12/16.
 */
@Service
public class MongoDBUserInfoService implements UserInfoService {

    private final UserInfoRepository repository;

    public MongoDBUserInfoService(UserInfoRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserInfoDTO create(UserInfoDTO userInfoDTO) {
        UserInfo persisted = UserInfo.getBuilder().userName(userInfoDTO.getUserName()).password(userInfoDTO.getPassword()).phoneNumber(userInfoDTO.getPhoneNumber()).build();
        persisted = repository.save(persisted);
        return convertToDTO(persisted);
    }

    private UserInfoDTO convertToDTO(UserInfo userInfo) {
        UserInfoDTO userInfoDTO = new UserInfoDTO();
        userInfoDTO.setPassword(userInfo.getPassword());
        userInfoDTO.setUserName(userInfo.getUserName());
        userInfoDTO.setPhoneNumber(userInfo.getPhoneNumber());
        return userInfoDTO;
    }

    @Override
    public UserInfoDTO delete(String phoneNumber) {
        return null;
    }

    @Override
    public List<UserInfoDTO> findAll() {
        List<UserInfo> UserInfoEntries = repository.findAll();
        return convertToDTOS(UserInfoEntries);
    }

    private List<UserInfoDTO> convertToDTOS(List<UserInfo> userInfoEntries) {
        return userInfoEntries.stream().map(this::convertToDTO).collect(toList());
    }

    public UserInfoDTO findByUserName(String userName) {
        UserInfo userInfo = findUserInfoById(userName);
        return convertToDTO(userInfo);
    }

    private UserInfo findUserInfoById(String userName) {
        Optional<UserInfo> result = repository.findOne(userName);
        return result.orElseThrow(()-> new UserInfoNotFoundException(userName));
    }

    @Override
    public UserInfoDTO update(UserInfoDTO userInfoDTO) {
        return null;
    }
}
