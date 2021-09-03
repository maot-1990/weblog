package com.personalblog.util;

import java.util.UUID;

/**
 * Created by tao.mao on 2020/8/27.
 */
public class UUId {

    public static String getUUId() {
        String id = UUID.randomUUID().toString();
        return id.replaceAll("-","");
    }
}
