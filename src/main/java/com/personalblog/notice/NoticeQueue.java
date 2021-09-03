package com.personalblog.notice;

import java.util.concurrent.ArrayBlockingQueue;

/**
 * Created by tao.mao on 2020/12/1.
 */
public class NoticeQueue {

    public static final ArrayBlockingQueue<NoticeDTO> noticeQueue = new ArrayBlockingQueue<>(10000);

}
