package com.mvn.ssm.service;

import com.alibaba.fastjson.JSON;
import com.mvn.ssm.pojo.User;
import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;

/**
 * 用户service测试类
 *
 * @author wangshaopeng@dafy.com
 * @create 2017-09-08 10:43
 **/
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath:spring-mybatis.xml"})
public class UserServiceTest {
    private Logger logger = Logger.getLogger(UserServiceTest.class);
    @Resource
    private UserService userService;
    @Test
    public void test(){
        User user = userService.getUserById(7L);
        System.out.println(JSON.toJSON(user));
    }

    @Test
    public void testGitHub(){
        System.out.println("Hello GitHub!");
    }
}
