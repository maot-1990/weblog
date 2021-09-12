package com.personalblog.dataobject;

import java.util.Date;

/**
 * Generate by kucoin generator 
 * 
 * @author kucoin-mybatis-generator
 * @since 2021-09-12
 */
public class UserDO {
    /**
     * 用户ID
     */
    private String id;

    private String nickName;

    /**
     * 用户昵称
     */
    private String userName;

    /**
     * 用户密码（加密存储）
     */
    private String passWord;

    private String intro;

    /**
     * 邮箱地址
     */
    private String email;

    private String sex;

    private String birth;

    private String city;

    /**
     * 手机号
     */
    private String phone;

    private String weixin;

    private String headImg;

    private Integer status;

    private String type;

    private Integer level;

    private Integer articleTotal;

    /**
     * 上次登录时间
     */
    private Date lastLoginAt;

    /**
     * 创建时间
     */
    private Date createdAt;

    /**
     * 发表文章总数
     */
    private Date updatedAt;

    /**
     * 获取用户ID
     */
    public String getId() {
        return id;
    }

    /**
     * 设置用户ID
     */
    public void setId(String id) {
        this.id = id;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    /**
     * 获取用户昵称
     */
    public String getUserName() {
        return userName;
    }

    /**
     * 设置用户昵称
     */
    public void setUserName(String userName) {
        this.userName = userName;
    }

    /**
     * 获取用户密码（加密存储）
     */
    public String getPassWord() {
        return passWord;
    }

    /**
     * 设置用户密码（加密存储）
     */
    public void setPassWord(String passWord) {
        this.passWord = passWord;
    }

    public String getIntro() {
        return intro;
    }

    public void setIntro(String intro) {
        this.intro = intro;
    }

    /**
     * 获取邮箱地址
     */
    public String getEmail() {
        return email;
    }

    /**
     * 设置邮箱地址
     */
    public void setEmail(String email) {
        this.email = email;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getBirth() {
        return birth;
    }

    public void setBirth(String birth) {
        this.birth = birth;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    /**
     * 获取手机号
     */
    public String getPhone() {
        return phone;
    }

    /**
     * 设置手机号
     */
    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getWeixin() {
        return weixin;
    }

    public void setWeixin(String weixin) {
        this.weixin = weixin;
    }

    public String getHeadImg() {
        return headImg;
    }

    public void setHeadImg(String headImg) {
        this.headImg = headImg;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public Integer getArticleTotal() {
        return articleTotal;
    }

    public void setArticleTotal(Integer articleTotal) {
        this.articleTotal = articleTotal;
    }

    /**
     * 获取上次登录时间
     */
    public Date getLastLoginAt() {
        return lastLoginAt;
    }

    /**
     * 设置上次登录时间
     */
    public void setLastLoginAt(Date lastLoginAt) {
        this.lastLoginAt = lastLoginAt;
    }

    /**
     * 获取创建时间
     */
    public Date getCreatedAt() {
        return createdAt;
    }

    /**
     * 设置创建时间
     */
    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    /**
     * 获取发表文章总数
     */
    public Date getUpdatedAt() {
        return updatedAt;
    }

    /**
     * 设置发表文章总数
     */
    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", nickName=").append(nickName);
        sb.append(", userName=").append(userName);
        sb.append(", passWord=").append(passWord);
        sb.append(", intro=").append(intro);
        sb.append(", email=").append(email);
        sb.append(", sex=").append(sex);
        sb.append(", birth=").append(birth);
        sb.append(", city=").append(city);
        sb.append(", phone=").append(phone);
        sb.append(", weixin=").append(weixin);
        sb.append(", headImg=").append(headImg);
        sb.append(", status=").append(status);
        sb.append(", type=").append(type);
        sb.append(", level=").append(level);
        sb.append(", articleTotal=").append(articleTotal);
        sb.append(", lastLoginAt=").append(lastLoginAt);
        sb.append(", createdAt=").append(createdAt);
        sb.append(", updatedAt=").append(updatedAt);
        sb.append("]");
        return sb.toString();
    }
}