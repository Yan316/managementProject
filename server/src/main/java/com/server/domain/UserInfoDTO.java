package com.server.domain;

import org.hibernate.validator.constraints.NotEmpty;

/**
 * Created by yanhuang on 8/12/16.
 */
public final class UserInfoDTO {
    @NotEmpty
    private String userName;

    @NotEmpty
    private String password;

    @NotEmpty
    private String phoneNumber;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
