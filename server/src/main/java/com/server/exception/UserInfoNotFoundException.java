package com.server.exception;

/**
 * Created by yanhuang on 8/13/16.
 */
public class UserInfoNotFoundException extends RuntimeException {
    public UserInfoNotFoundException(String userName) {
        super(String.format("No UserInfo entry found with userName: <%s>", userName));
    }
}
