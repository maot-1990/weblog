package com.personalblog.util;

import com.personalblog.notice.NoticeDTO;
import com.personalblog.notice.NoticeQueue;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang.StringUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;

import static com.personalblog.context.Constant.APP_NAME;
import static com.personalblog.util.DateUtils.YYYY_MM_DD_HH_MM_SS;

@Slf4j
public class IPUtils {

    public static String getOuterIP(HttpServletRequest request) {
        String ip = request.getHeader("CF-CONNECTING-IP");
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("x-real-ip");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("x-forwarded-for");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getHeader("WL-Proxy-Client-IP");
        }
        if (ip == null || ip.length() == 0 || "unknown".equalsIgnoreCase(ip)) {
            ip = request.getRemoteAddr();
        }
        return ip.replaceAll(",", "");
    }

    public static boolean isSpider(HttpServletRequest request, List<String> spiders) {
        String ip = getOuterIP(request);
        String userAgent = request.getHeader("User-Agent");
        log.info("【来访ip】- " + ip + " ---【访问地址】- " + request.getRequestURI()
                + " ---【userAgent】- " + userAgent);
        if(StringUtils.isNotBlank(userAgent)) {
            for (String name : spiders) {
                if (userAgent.contains(name)) {
                    NoticeDTO noticeDTO = new NoticeDTO();
                    noticeDTO.setTitle(APP_NAME);
                    noticeDTO.setIp(ip);
                    noticeDTO.setNickName(name);
                    noticeDTO.setUri(request.getRequestURI());
                    noticeDTO.setAccessTime(DateUtils.parseDate(new Date(), YYYY_MM_DD_HH_MM_SS));
                    NoticeQueue.noticeQueue.offer(noticeDTO);
                    return true;
                }

            }
        }

        return false;
    }
}

