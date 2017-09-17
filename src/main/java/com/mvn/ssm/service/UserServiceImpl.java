package com.mvn.ssm.service;

import com.mvn.ssm.dao.UserMapper;
import com.mvn.ssm.pojo.User;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

/**
 * 用户service类
 *
 * @author wangshaopeng@dafy.com
 * @create 2017-09-08 10:38
 **/
@Service
@Transactional
public class UserServiceImpl implements UserService {
    @Resource
    UserMapper userMapper;

    @Override
    public User getUserById(long userId) {
        return this.userMapper.selectByPrimaryKey(userId);
    }

    @Override
    public List<User> getAll() {
        return userMapper.selectAll();
    }

    @Override
    public int save(User user) {
        int result = userMapper.insert(user);
        return result;
    }


    @Override
    public User selectByPosition(Integer x, Integer y) {
        return this.userMapper.selectByPosition(x, y);
    }

    @Override
    public int remove(Integer x, Integer y) {
        User user = userMapper.selectByPosition(x, y);
        user.setX(x);
        user.setY(y);
        int result = userMapper.deleteByPrimaryKey(user.getId());
        return result;
    }

    @Override
    public int change(Integer oldX, Integer oldY,Integer newX, Integer newY) {
        User user = userMapper.selectByPosition(oldX, oldY);
        if(null == user){
            return -1;
        }
        user.setX(newX);
        user.setY(newY);
        int result = userMapper.updateByPrimaryKey(user);
        return result;
    }

    @Override
    public int exChange(Integer oldX, Integer oldY, Integer newX, Integer newY) {
        User user = userMapper.selectByPosition(oldX, oldY);
        User user2 = userMapper.selectByPosition(newX, newY);
        if(null == user || null == user2){
            return -1;
        }
        user.setX(newX);
        user.setY(newY);
        user2.setX(oldX);
        user2.setY(oldY);
        int result = userMapper.updateByPrimaryKey(user);
        result += userMapper.updateByPrimaryKey(user2);
        return result;
    }
}
