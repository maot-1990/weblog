package com.personalblog.service.impl;

import com.personalblog.dao.QuickLinkMapper;
import com.personalblog.dataobject.QuickLinkDO;
import com.personalblog.dataobject.QuickLinkDOExample;
import com.personalblog.enums.StatusEnum;
import com.personalblog.service.CommonService;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

/**
 * Created by tao.mao on 2020/11/21.
 */
@Component
public class CommonServiceImpl implements CommonService {

    @Resource
    private QuickLinkMapper quickLinkMapper;

    @Cacheable(cacheNames = {"blog"}, key = "'getQuickLinks'", sync = true)
    @Override
    public List<QuickLinkDO> getQuickLinks() {
        QuickLinkDOExample example = new QuickLinkDOExample();
        example.createCriteria().andStatusEqualTo(StatusEnum.ONE.getStatus());
        return quickLinkMapper.selectByExample(example);
    }
}
