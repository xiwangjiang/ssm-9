package com.mvn.ssm.pojo;

public class User {
    private Long id;

    private String username;

    private String password;

    private String name;

    private Integer x;

    private Integer y;

    private String jsonMemo;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public Integer getX() {
        return x;
    }

    public void setX(Integer x) {
        this.x = x;
    }

    public Integer getY() {
        return y;
    }

    public void setY(Integer y) {
        this.y = y;
    }

    public String getJsonMemo() {
        return jsonMemo;
    }

    public void setJsonMemo(String jsonMemo) {
        this.jsonMemo = jsonMemo == null ? null : jsonMemo.trim();
    }
}