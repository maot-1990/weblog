package com.personalblog.dao;

import com.personalblog.dataobject.ArticleLeaveDO;
import com.personalblog.dataobject.ArticleLeaveDOExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ArticleLeaveMapper {
    /**
     * insert one record into table, ignore nullable value, 
     */
    int insertSelective(ArticleLeaveDO record);

    /**
     * batch insert  record into table,not support sharding.
     */
    int batchInsert(@Param("items") List<ArticleLeaveDO> items);

    /**
     * update one record by primary key, ignore nullable value
     */
    int updateByPrimaryKeySelective(ArticleLeaveDO record);

    /**
     * update record by example, ignore nullable value
     */
    int updateByExampleSelective(@Param("record") ArticleLeaveDO record, @Param("example") ArticleLeaveDOExample example);

    /**
     * delete one record by primary key 
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * delete record by example
     */
    int deleteByExample(ArticleLeaveDOExample example);

    /**
     * get one record by primary key
     */
    ArticleLeaveDO selectByPrimaryKey(Integer id);

    /**
     * get record by example
     */
    List<ArticleLeaveDO> selectByExample(ArticleLeaveDOExample example);

    /**
     * get one record by example
     */
    ArticleLeaveDO selectOneByExample(ArticleLeaveDOExample example);

    /**
     * select count(*) from table by example
     */
    long countByExample(ArticleLeaveDOExample example);
}