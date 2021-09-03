package com.personalblog.util;

import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

/**
 * Created by tao.mao on 2020/11/24.
 */
public class BeanUtils {

    public static <T> T copyProperties(Object sourceObj, Class<T> clazz, String... ignoreProperties) {
        T obj = null;
        try {
            obj = clazz.newInstance();
            org.springframework.beans.BeanUtils.copyProperties(sourceObj, obj);
        } catch (InstantiationException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }

        return obj;
    }

    public static <T> List<T> copyListProperties(final List<?> sourceList, Class<T> targetClazz, String... ignoreProperties) {
        try {
            if (CollectionUtils.isEmpty(sourceList)) {
                return new ArrayList<>();
            }
            List<T> targetList = sourceList.stream().map(source -> copyProperties(source, targetClazz, ignoreProperties))
                    .filter(Objects::nonNull).collect(Collectors.toList());
            assert targetList.size() == sourceList.size();
            return targetList;
        } catch (Exception e) {
            return new ArrayList<>();
        }
    }
}
