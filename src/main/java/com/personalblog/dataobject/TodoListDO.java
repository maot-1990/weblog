package com.personalblog.dataobject;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

/**
 * Generate by kucoin generator 
 * 
 * @author kucoin-mybatis-generator
 * @since 2021-01-19
 */
public class TodoListDO {
    private Integer id;

    private String openId;

    private String content;

    private String dateAt;

    private Integer isFinish;

    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private Date noticeAt;

    private String noticeEnabled;

    private Integer noticeTime;

    private Date createdAt;

    private Date updatedAt;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getOpenId() {
        return openId;
    }

    public void setOpenId(String openId) {
        this.openId = openId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getDateAt() {
        return dateAt;
    }

    public void setDateAt(String dateAt) {
        this.dateAt = dateAt;
    }

    public Integer getIsFinish() {
        return isFinish;
    }

    public void setIsFinish(Integer isFinish) {
        this.isFinish = isFinish;
    }

    public Date getNoticeAt() {
        return noticeAt;
    }

    public void setNoticeAt(Date noticeAt) {
        this.noticeAt = noticeAt;
    }

    public String getNoticeEnabled() {
        return noticeEnabled;
    }

    public void setNoticeEnabled(String noticeEnabled) {
        this.noticeEnabled = noticeEnabled;
    }

    public Integer getNoticeTime() {
        return noticeTime;
    }

    public void setNoticeTime(Integer noticeTime) {
        this.noticeTime = noticeTime;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

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
        sb.append(", openId=").append(openId);
        sb.append(", content=").append(content);
        sb.append(", dateAt=").append(dateAt);
        sb.append(", isFinish=").append(isFinish);
        sb.append(", noticeAt=").append(noticeAt);
        sb.append(", noticeEnabled=").append(noticeEnabled);
        sb.append(", noticeTime=").append(noticeTime);
        sb.append(", createdAt=").append(createdAt);
        sb.append(", updatedAt=").append(updatedAt);
        sb.append("]");
        return sb.toString();
    }
}