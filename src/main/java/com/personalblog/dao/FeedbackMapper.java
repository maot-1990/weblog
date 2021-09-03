package com.personalblog.dao;

import com.personalblog.dataobject.FeedbackDO;
import com.personalblog.dataobject.FeedbackDOExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface FeedbackMapper {
    /**
     * insert one record into table, ignore nullable value, 
     */
    int insertSelective(FeedbackDO record);

    /**
     * batch insert  record into table,not support sharding.
     */
    int batchInsert(@Param("items") List<FeedbackDO> items);

    /**
     * update one record by primary key, ignore nullable value
     */
    int updateByPrimaryKeySelective(FeedbackDO record);

    /**
     * update record by example, ignore nullable value
     */
    int updateByExampleSelective(@Param("record") FeedbackDO record, @Param("example") FeedbackDOExample example);

    /**
     * delete one record by primary key 
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * delete record by example
     */
    int deleteByExample(FeedbackDOExample example);

    /**
     * get one record by primary key
     */
    FeedbackDO selectByPrimaryKey(Integer id);

    /**
     * get record by example
     */
    List<FeedbackDO> selectByExample(FeedbackDOExample example);

    /**
     * get one record by example
     */
    FeedbackDO selectOneByExample(FeedbackDOExample example);

    /**
     * select count(*) from table by example
     */
    long countByExample(FeedbackDOExample example);
}