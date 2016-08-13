package com.server.service;

import com.server.domain.UserInfo;
import com.server.domain.UserInfoDTO;
import org.springframework.data.repository.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Created by yanhuang on 8/12/16.
 */
public interface UserInfoRepository extends Repository<UserInfo, String > {
    void delete(UserInfo userInfo);

    List<UserInfo> findAll();

    Optional<UserInfo> findOne(String phoneNumber);

    UserInfo save(UserInfo saved);

}
