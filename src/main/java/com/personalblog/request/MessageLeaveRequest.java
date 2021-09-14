package com.personalblog.request;

import lombok.Data;

/**
 * Created by tao.mao on 2020/8/17.
 */
@Data
public class MessageLeaveRequest {

    private Integer currentIndex = 1;

    private Integer pageSize = 4;

}
