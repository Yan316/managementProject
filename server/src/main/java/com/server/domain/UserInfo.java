package com.server.domain;

import com.sun.javafx.beans.IDProperty;
import org.hibernate.validator.constraints.NotEmpty;
import org.hibernate.validator.internal.metadata.aggregated.ExecutableMetaData;
import org.springframework.data.annotation.Id;

import static org.thymeleaf.util.Validate.notNull;

/**
 * Created by yanhuang on 8/12/16.
 */
public final class UserInfo {
    @Id
    private String phoneNumber;

    private String userName;

    private String password;

    public UserInfo() {
    }

    private UserInfo(Builder builder) {
        this.userName = builder.userName;
        this.password = builder.password;
    }

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

    public static Builder getBuilder() {
        return new Builder();
    }

    public void update(String userName, String password) {
        checkUserNameAndPassword(userName, password);

        this.userName = userName;
        this.password = password;
    }

    public static class Builder {

        private String userName;
        private String password;

        public Builder userName(String userName) {
            this.userName = userName;
            return this;
        }

        public Builder password(String password) {
            this.password = password;
            return this;
        }

       public UserInfo build() {
            UserInfo build = new UserInfo(this);
            build.checkUserNameAndPassword(build.getUserName(), build.getPassword());
            return build;
        }

    }

    private void checkUserNameAndPassword(String userName, String password) {
        notNull(userName, "UserName cannot be null");
        notNull(password, "password cannot be null");
    }
}