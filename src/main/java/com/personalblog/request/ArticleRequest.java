package com.personalblog.request;

import lombok.Data;

/**
 * Created by tao.mao on 2020/8/17.
 */
@Data
public class ArticleRequest {

    private Integer currentIndex = 1;

    private Integer pageSize = 15;

    private String category = "";

    private String searchKey = "";
}
