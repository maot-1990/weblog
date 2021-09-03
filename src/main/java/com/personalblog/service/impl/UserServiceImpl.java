package com.personalblog.service.impl;

import com.google.common.collect.Lists;
import com.personalblog.dao.UserMapper;
import com.personalblog.dataobject.UserDO;
import com.personalblog.dataobject.UserDOExample;
import com.personalblog.enums.StatusEnum;
import com.personalblog.enums.UserTypeEnum;
import com.personalblog.service.UserService;
import com.personalblog.util.BeanUtils;
import com.personalblog.vo.UserVO;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by tao.mao on 2020/8/27.
 */
@Component
public class UserServiceImpl implements UserService {

    @Resource
    private UserMapper userMapper;

    @Cacheable(cacheNames = {"blog"}, key = "'getAuthors:' + #size", sync = true)
    @Override
    public List<UserVO> getAuthors(Integer size) {
        UserDOExample example = new UserDOExample();
        example.createCriteria().andTypeIn(Lists.newArrayList(
                UserTypeEnum.admin.name(),UserTypeEnum.author.name()))
                .andStatusEqualTo(StatusEnum.ONE.getStatus());
        example.setOrderByClause(" level desc,created_at limit " + size);
        return userMapper.selectByExample(example).stream().map(
                user -> BeanUtils.copyProperties(user, UserVO.class))
                .collect(Collectors.toList());
    }

    @Override
    public List<UserVO> getAllUser() {
        UserDOExample example = new UserDOExample();
        example.createCriteria().andTypeIn(Lists.newArrayList(
                UserTypeEnum.admin.name(),UserTypeEnum.author.name()))
                .andStatusEqualTo(StatusEnum.ONE.getStatus());
        return userMapper.selectByExample(example).stream().map(
                user -> BeanUtils.copyProperties(user, UserVO.class))
                .collect(Collectors.toList());
    }

    @Override
    public void updateUser(UserDO user) {
        userMapper.updateByPrimaryKeySelective(user);
    }

    @Override
    public UserVO getUserById(String userId) {
        UserDOExample example = new UserDOExample();
        example.createCriteria().andIdEqualTo(userId);
        return BeanUtils.copyProperties(userMapper.selectOneByExample(example), UserVO.class);
    }

}
