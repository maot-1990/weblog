package com.personalblog.service;

import com.personalblog.dataobject.QuickLinkDO;

import java.util.List;

/**
 * Created by tao.mao on 2020/11/21.
 */
public interface CommonService {

    List<QuickLinkDO> getQuickLinks();
}
