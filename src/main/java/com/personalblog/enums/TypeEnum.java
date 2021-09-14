package com.personalblog.enums;

import lombok.Getter;

@Getter
public enum TypeEnum {

    OTHER("1"),
    IT("2"),
    TOOLS("3");


    private String type;

    TypeEnum(String type) {
        this.type = type;
    }
}
