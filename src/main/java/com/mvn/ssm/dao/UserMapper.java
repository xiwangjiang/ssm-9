package com.mvn.ssm.dao;

import com.mvn.ssm.pojo.User;

public interface UserMapper {
    int deleteByPrimaryKey(Long lid);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Long lid);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);
}