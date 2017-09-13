package com.mvn.ssm.controller;

import com.mvn.ssm.pojo.User;
import com.mvn.ssm.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * 会员Controller
 *
 * @author wangshaopeng@dafy.com
 * @create 2017-09-08 11:48
 **/
@Controller
@RequestMapping("/user")
public class UserController {
    @Resource
    UserService userService;

    @RequestMapping("info")
    public String user(Long userId, Model model){
        User user = userService.getUserById(userId);
        model.addAttribute("user",user);
        return "/user/info";
    }

    @RequestMapping("position")
    public String user(Model model){
        User user = new User();
        user.setId(1l);
        user.setName("郝超");
        user.setUsername("haochao");
        user.setPassword("haochao");
        user.setX(10);
        user.setY(200);
        user.setJsonMemo("{desc:'JAVA开发工程师'}");

        List<User> userList = new ArrayList();
        userList.add(user);

        user = new User();
        user.setId(2l);
        user.setName("李宁");
        user.setUsername("lining");
        user.setPassword("lining");
        user.setX(50);
        user.setY(100);
        user.setJsonMemo("{desc:'测试工程师'}");
        userList.add(user);

        model.addAttribute(userList);
        return "/user/position";
    }
}
