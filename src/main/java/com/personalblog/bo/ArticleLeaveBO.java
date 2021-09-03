package com.personalblog.bo;

import com.personalblog.dataobject.ArticleLeaveDO;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

/**
 * Generate by kucoin generator 
 * 
 * @author kucoin-mybatis-generator
 * @since 2020-08-31
 */
@Data
public class ArticleLeaveBO {

    private ArticleLeaveDO parent;

    private List<ArticleLeaveDO> children = new ArrayList<>();
}