package com.personalblog.pagehelper;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by tao.mao on 2020/8/17.
 */
@Data
@AllArgsConstructor
public class Page<T> {

    private Integer currentPage = 1;

    private Integer pageSize = 10;

    private Integer totalNum = 0;

    private Integer totalPage = 0;

    private String category;

    private String type;

    private String searchKey;

    private List<T> items = new ArrayList<>();

    public Page() {}

}
