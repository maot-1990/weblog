package com.personalblog.request;

import lombok.Data;

/**
 * Created by tao.mao on 2020/8/17.
 */
@Data
public class ArticleLeaveRequest {

    private Integer articleId;

    private Integer currentIndex = 1;

    private Integer pageSize = 4;

}
