package com.personalblog.dao;

import com.personalblog.dataobject.MessageLeaveDO;
import com.personalblog.dataobject.MessageLeaveDOExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface MessageLeaveMapper {
    /**
     * insert one record into table, ignore nullable value, 
     */
    int insertSelective(MessageLeaveDO record);

    /**
     * batch insert  record into table,not support sharding.
     */
    int batchInsert(@Param("items") List<MessageLeaveDO> items);

    /**
     * update one record by primary key, ignore nullable value
     */
    int updateByPrimaryKeySelective(MessageLeaveDO record);

    /**
     * update record by example, ignore nullable value
     */
    int updateByExampleSelective(@Param("record") MessageLeaveDO record, @Param("example") MessageLeaveDOExample example);

    /**
     * delete one record by primary key 
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * delete record by example
     */
    int deleteByExample(MessageLeaveDOExample example);

    /**
     * get one record by primary key
     */
    MessageLeaveDO selectByPrimaryKey(Integer id);

    /**
     * get record by example
     */
    List<MessageLeaveDO> selectByExample(MessageLeaveDOExample example);

    /**
     * get one record by example
     */
    MessageLeaveDO selectOneByExample(MessageLeaveDOExample example);

    /**
     * select count(*) from table by example
     */
    long countByExample(MessageLeaveDOExample example);
}