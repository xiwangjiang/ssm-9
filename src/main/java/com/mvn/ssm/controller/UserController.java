package com.mvn.ssm.controller;

import com.mvn.ssm.pojo.User;
import com.mvn.ssm.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * 会员Controller
 * @author wangshaopeng@dafy.com
 * @create 2017-09-08 11:48
 **/
@Controller
@RequestMapping("/user")
public class UserController {
    @Resource
    UserService userService;

    @RequestMapping("info")
    public String user(Long userId, Model model) {
        User user = userService.getUserById(userId);
        model.addAttribute("user", user);
        return "/user/info";
    }

    @RequestMapping("position")
    public String user(Model model) {
        List<User> userList = userService.getAll();
        model.addAttribute(userList);
        return "/user/position";
    }

    /**
     * 添加位置
     * @param name
     * @param x
     * @param y
     * @param model
     * @return
     */
    @RequestMapping("add")
    public @ResponseBody String add(String name,Integer x, Integer y, Model model) {
        User user = new User();
        user.setUsername("guest");
        user.setPassword("123");
        user.setName(name);
        user.setX(x);
        user.setY(y);
        user.setJsonmemo("{desc:'预留待开发'}");
        int result = userService.save(user);
        if(1 == result){
            return "success";
        }else{
            System.err.println("添加失败了aaa！");
            return "fail";
        }
    }

    /**
     * 移除位置
     * @param x
     * @param y
     * @param model
     * @return
     */
    @RequestMapping("remove")
    public @ResponseBody String remove(Integer x, Integer y,Model model) {
        int result = userService.remove(x,y);
        if(1 == result){
            return "success";
        }else{
            return "fail";
        }
    }

    /**
     * 改变位置
     * @param oldX
     * @param oldY
     * @param newX
     * @param newY
     * @param model
     * @return
     */
    @RequestMapping("change")
    public @ResponseBody String change(Integer oldX, Integer oldY,Integer newX, Integer newY,Model model) {
        int result = userService.change(oldX, oldY, newX, newY);
        if(1 == result){
            return "success";
        }else{
            return "fail";
        }
    }

    /**
     * 交换位置
     * @param oldX
     * @param oldY
     * @param newX
     * @param newY
     * @param model
     * @return
     */
    @RequestMapping("ex_change")
    public @ResponseBody String ex_change(Integer oldX, Integer oldY,Integer newX, Integer newY, Model model) {
        int result = userService.exChange(oldX, oldY, newX, newY);
        if(2 == result){
            return "success";
        }else{
            return "fail";
        }
    }
}
