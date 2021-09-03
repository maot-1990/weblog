package com.personalblog.dao;

import com.personalblog.dataobject.ArticleDO;
import com.personalblog.dataobject.ArticleDOExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ArticleMapper {
    /**
     * insert one record into table, ignore nullable value, 
     */
    int insertSelective(ArticleDO record);

    /**
     * batch insert  record into table,not support sharding.
     */
    int batchInsert(@Param("items") List<ArticleDO> items);

    /**
     * update one record by primary key, ignore nullable value
     */
    int updateByPrimaryKeySelective(ArticleDO record);

    /**
     * update record by example, ignore nullable value
     */
    int updateByExampleSelective(@Param("record") ArticleDO record, @Param("example") ArticleDOExample example);

    /**
     * delete one record by primary key 
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * delete record by example
     */
    int deleteByExample(ArticleDOExample example);

    /**
     * get one record by primary key
     */
    ArticleDO selectByPrimaryKey(Integer id);

    /**
     * get record by example with blob column
     */
    List<ArticleDO> selectByExampleWithBLOBs(ArticleDOExample example);

    /**
     * get record by example
     */
    List<ArticleDO> selectByExample(ArticleDOExample example);

    /**
     * get one record by example
     */
    ArticleDO selectOneByExample(ArticleDOExample example);

    /**
     * select count(*) from table by example
     */
    long countByExample(ArticleDOExample example);
}