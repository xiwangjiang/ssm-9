package com.mvn.ssm.controller;

import com.mvn.ssm.pojo.User;
import com.mvn.ssm.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.Resource;

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
}
