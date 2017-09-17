package com.mvn.ssm.dao;

import com.mvn.ssm.pojo.User;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserMapper {
    int deleteByPrimaryKey(Long lid);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Long lid);

    List<User> selectAll();

    User selectByPosition(@Param("x") Integer x, @Param("y")Integer y);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);
}