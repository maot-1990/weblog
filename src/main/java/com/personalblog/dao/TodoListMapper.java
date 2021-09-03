package com.personalblog.dao;

import com.personalblog.dataobject.TodoListDO;
import com.personalblog.dataobject.TodoListDOExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface TodoListMapper {
    /**
     * insert one record into table, ignore nullable value, 
     */
    int insertSelective(TodoListDO record);

    /**
     * batch insert  record into table,not support sharding.
     */
    int batchInsert(@Param("items") List<TodoListDO> items);

    /**
     * update one record by primary key, ignore nullable value
     */
    int updateByPrimaryKeySelective(TodoListDO record);

    /**
     * update record by example, ignore nullable value
     */
    int updateByExampleSelective(@Param("record") TodoListDO record, @Param("example") TodoListDOExample example);

    /**
     * delete one record by primary key 
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * delete record by example
     */
    int deleteByExample(TodoListDOExample example);

    /**
     * get one record by primary key
     */
    TodoListDO selectByPrimaryKey(Integer id);

    /**
     * get record by example
     */
    List<TodoListDO> selectByExample(TodoListDOExample example);

    /**
     * get one record by example
     */
    TodoListDO selectOneByExample(TodoListDOExample example);

    /**
     * select count(*) from table by example
     */
    long countByExample(TodoListDOExample example);
}