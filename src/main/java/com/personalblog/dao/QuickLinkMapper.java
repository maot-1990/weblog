package com.personalblog.dao;

import com.personalblog.dataobject.QuickLinkDO;
import com.personalblog.dataobject.QuickLinkDOExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface QuickLinkMapper {
    /**
     * insert one record into table, ignore nullable value, 
     */
    int insertSelective(QuickLinkDO record);

    /**
     * batch insert  record into table,not support sharding.
     */
    int batchInsert(@Param("items") List<QuickLinkDO> items);

    /**
     * update one record by primary key, ignore nullable value
     */
    int updateByPrimaryKeySelective(QuickLinkDO record);

    /**
     * update record by example, ignore nullable value
     */
    int updateByExampleSelective(@Param("record") QuickLinkDO record, @Param("example") QuickLinkDOExample example);

    /**
     * delete one record by primary key 
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * delete record by example
     */
    int deleteByExample(QuickLinkDOExample example);

    /**
     * get one record by primary key
     */
    QuickLinkDO selectByPrimaryKey(Integer id);

    /**
     * get record by example
     */
    List<QuickLinkDO> selectByExample(QuickLinkDOExample example);

    /**
     * get one record by example
     */
    QuickLinkDO selectOneByExample(QuickLinkDOExample example);

    /**
     * select count(*) from table by example
     */
    long countByExample(QuickLinkDOExample example);
}