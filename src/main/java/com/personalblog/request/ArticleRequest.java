package com.personalblog.request;

import lombok.Data;

/**
 * Created by tao.mao on 2020/8/17.
 */
@Data
public class ArticleRequest {

    private Integer currentIndex = 1;

    private Integer pageSize = 15;

    /**
     * 二级分类
     */
    private String category = "";

    /**
     * 一级分类, IT技术 - 1 ，其他 - 2
     */
    private String type = "";

    private String searchKey = "";
}
