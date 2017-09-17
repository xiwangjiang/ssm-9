package com.mvn.ssm.service;

import com.mvn.ssm.pojo.User;

import java.util.List;

public interface UserService {
    public User getUserById(long userId);

    public List<User> getAll();

    public int save(User user);

    User selectByPosition(Integer x, Integer y);

    public int remove(Integer x, Integer y);

    public int change(Integer oldX, Integer oldY,Integer newX, Integer newY);

    public int exChange(Integer oldX, Integer oldY,Integer newX, Integer newY);

}