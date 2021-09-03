package com.personalblog.dao;

import com.personalblog.dataobject.ImgStoreDO;
import com.personalblog.dataobject.ImgStoreDOExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface ImgStoreMapper {
    /**
     * insert one record into table, ignore nullable value, 
     */
    int insertSelective(ImgStoreDO record);

    /**
     * batch insert  record into table,not support sharding.
     */
    int batchInsert(@Param("items") List<ImgStoreDO> items);

    /**
     * update one record by primary key, ignore nullable value
     */
    int updateByPrimaryKeySelective(ImgStoreDO record);

    /**
     * update record by example, ignore nullable value
     */
    int updateByExampleSelective(@Param("record") ImgStoreDO record, @Param("example") ImgStoreDOExample example);

    /**
     * delete one record by primary key 
     */
    int deleteByPrimaryKey(String id);

    /**
     * delete record by example
     */
    int deleteByExample(ImgStoreDOExample example);

    /**
     * get one record by primary key
     */
    ImgStoreDO selectByPrimaryKey(String id);

    /**
     * get record by example
     */
    List<ImgStoreDO> selectByExample(ImgStoreDOExample example);

    /**
     * get one record by example
     */
    ImgStoreDO selectOneByExample(ImgStoreDOExample example);

    /**
     * select count(*) from table by example
     */
    long countByExample(ImgStoreDOExample example);
}