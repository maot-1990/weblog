package com.personalblog.enums;

import com.google.common.collect.Lists;

import java.util.List;

/**
 * Created by tao.mao on 2020/11/23.
 */
public enum UserTypeEnum {

    admin,
    author,
    user;

    public static List<String> getUsers() {
        return Lists.newArrayList(author.name(), admin.name(), user.name());
    }

    public static List<String> getAuthorUsers() {
        return Lists.newArrayList(author.name(), admin.name());
    }
}
