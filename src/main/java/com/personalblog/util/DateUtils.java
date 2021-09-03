package com.personalblog.util;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;

/**
 * Created by tao.mao on 2020/8/20.
 */
public class DateUtils {

    public static final String YYYY_MM_DD = "yyyy-MM-dd";

    public static final String YYYY_MM_DD_HH_MM = "yyyy-MM-dd HH:mm";

    public static final String YYYY_MM_DD_HH_MM_SS = "yyyy-MM-dd HH:mm:ss";

    public static String parseDate(Date date) {
        SimpleDateFormat format = new SimpleDateFormat(YYYY_MM_DD);
        return format.format(date);
    }

    public static String parseDate(Date date, String format) {
        SimpleDateFormat sdf = new SimpleDateFormat(format);
        return sdf.format(date);
    }

    public static long diffHour(Date start, Date end, TimeUnit unit) {
        long diff = end.getTime() - start.getTime();
        return unit.toHours(diff);
    }
}
