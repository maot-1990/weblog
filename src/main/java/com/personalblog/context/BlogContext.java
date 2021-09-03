package com.personalblog.context;

import com.personalblog.util.Pair;
import com.personalblog.vo.UserVO;
import lombok.Data;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpSession;
import java.util.Date;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

import static com.personalblog.context.Constant.USER;

/**
 * Created by tao.mao on 2020/8/20.
 */
@Data
public class BlogContext {

    // ip统计
    public static Map<String, AtomicInteger> ipCount  = new ConcurrentHashMap();

    // 点赞判定
    public static Map<String, Pair<Integer, Date>> likeCount = new ConcurrentHashMap<>();

    // 阅读判定
    public static Map<String, Pair<Integer, Date>> readCount = new ConcurrentHashMap<>();

    // session缓存
    public static Map<String, HttpSession> session = new ConcurrentHashMap<>();

    public static UserVO getCurrentUser() {
        ServletRequestAttributes servletRequest = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpSession httpSession = session.get(servletRequest.getRequest().getSession().getId());
        return httpSession == null ? null : (UserVO) httpSession.getAttribute(USER);
    }
}
