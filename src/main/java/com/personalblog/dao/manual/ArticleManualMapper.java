package com.personalblog.dao.manual;

import com.personalblog.bo.CategoryGroupBO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ArticleManualMapper {

    List<CategoryGroupBO> getCategoryByGroup(@Param("type") String type);

    int updateLikeCountInc(@Param("articleId") Integer articleId);

    int updateReadCountInc(@Param("articleId") Integer articleId);

    int updateLeaveCountInc(@Param("articleId") Integer articleId);
}