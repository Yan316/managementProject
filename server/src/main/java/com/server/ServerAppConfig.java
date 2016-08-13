package com.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

/**
 * Created by yanhuang on 8/12/16.
 */
//@SpringBootApplication

@SpringBootApplication
public class ServerAppConfig {
    public static void main(String[] args) {
        SpringApplication.run(ServerAppConfig.class, args);
    }
}
