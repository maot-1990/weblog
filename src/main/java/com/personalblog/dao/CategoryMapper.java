package com.personalblog.dao;

import com.personalblog.dataobject.CategoryDO;
import com.personalblog.dataobject.CategoryDOExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface CategoryMapper {
    /**
     * insert one record into table, ignore nullable value, 
     */
    int insertSelective(CategoryDO record);

    /**
     * batch insert  record into table,not support sharding.
     */
    int batchInsert(@Param("items") List<CategoryDO> items);

    /**
     * update one record by primary key, ignore nullable value
     */
    int updateByPrimaryKeySelective(CategoryDO record);

    /**
     * update record by example, ignore nullable value
     */
    int updateByExampleSelective(@Param("record") CategoryDO record, @Param("example") CategoryDOExample example);

    /**
     * delete one record by primary key 
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * delete record by example
     */
    int deleteByExample(CategoryDOExample example);

    /**
     * get one record by primary key
     */
    CategoryDO selectByPrimaryKey(Integer id);

    /**
     * get record by example
     */
    List<CategoryDO> selectByExample(CategoryDOExample example);

    /**
     * get one record by example
     */
    CategoryDO selectOneByExample(CategoryDOExample example);

    /**
     * select count(*) from table by example
     */
    long countByExample(CategoryDOExample example);
}