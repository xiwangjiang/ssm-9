package com.mvn.ssm.service;

import com.mvn.ssm.dao.UserMapper;
import com.mvn.ssm.pojo.User;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/**
 * 用户service类
 *
 * @author wangshaopeng@dafy.com
 * @create 2017-09-08 10:38
 **/
@Service
public class UserServiceImpl implements UserService {
    @Resource
    UserMapper userMapper;
    @Override
    public User getUserById(long userId) {
        return this.userMapper.selectByPrimaryKey(userId);
    }
}
