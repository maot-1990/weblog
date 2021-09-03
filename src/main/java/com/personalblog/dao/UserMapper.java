package com.personalblog.dao;

import com.personalblog.dataobject.UserDO;
import com.personalblog.dataobject.UserDOExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface UserMapper {
    /**
     * insert one record into table, ignore nullable value, 
     */
    int insertSelective(UserDO record);

    /**
     * batch insert  record into table,not support sharding.
     */
    int batchInsert(@Param("items") List<UserDO> items);

    /**
     * update one record by primary key, ignore nullable value
     */
    int updateByPrimaryKeySelective(UserDO record);

    /**
     * update record by example, ignore nullable value
     */
    int updateByExampleSelective(@Param("record") UserDO record, @Param("example") UserDOExample example);

    /**
     * delete one record by primary key 
     */
    int deleteByPrimaryKey(String id);

    /**
     * delete record by example
     */
    int deleteByExample(UserDOExample example);

    /**
     * get one record by primary key
     */
    UserDO selectByPrimaryKey(String id);

    /**
     * get record by example
     */
    List<UserDO> selectByExample(UserDOExample example);

    /**
     * get one record by example
     */
    UserDO selectOneByExample(UserDOExample example);

    /**
     * select count(*) from table by example
     */
    long countByExample(UserDOExample example);
}