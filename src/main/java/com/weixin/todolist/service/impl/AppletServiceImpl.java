package com.weixin.todolist.service.impl;

import com.personalblog.dao.TodoListMapper;
import com.personalblog.dataobject.TodoListDO;
import com.personalblog.dataobject.TodoListDOExample;
import com.personalblog.enums.StatusEnum;
import com.personalblog.exception.BaseException;
import com.personalblog.response.ResponseCode;
import com.personalblog.util.BeanUtils;
import com.personalblog.util.DateUtils;
import com.weixin.todolist.client.AppletClient;
import com.weixin.todolist.service.AppletService;
import com.weixin.todolist.vo.CalendarDTO;
import com.weixin.todolist.vo.TodoDTO;
import com.weixin.todolist.vo.TodoListVO;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import javax.annotation.Resource;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalAdjusters;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
@Slf4j
public class AppletServiceImpl implements AppletService {

    @Resource
    private AppletClient appletClient;
    @Resource
    private TodoListMapper todoListMapper;

    @Override
    public String getOpenId(String code) {
        return appletClient.getOpenId(code);
    }

    @Override
    public TodoDTO getTodoList(String openId, String dateAt) {
        TodoDTO todo = new TodoDTO();
        TodoListDOExample example = new TodoListDOExample();
        TodoListDOExample.Criteria criteria = example.createCriteria();
        criteria.andOpenIdEqualTo(openId);
        if (StringUtils.isNotEmpty(dateAt)) {
            criteria.andDateAtEqualTo(dateAt);
        }
        example.setOrderByClause(" updated_at desc");
        List<TodoListDO> list = todoListMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(list)) {
            return todo;
        }
        list.forEach(o -> {
            if (o.getIsFinish().equals(StatusEnum.ZERO.getStatus())) {
                TodoListVO todoVO = BeanUtils.copyProperties(o, TodoListVO.class);
                todoVO.setChecked(Boolean.FALSE);
                todo.getTodo().add(todoVO);
            } else {
                TodoListVO doneVO = BeanUtils.copyProperties(o, TodoListVO.class);
                doneVO.setChecked(Boolean.TRUE);
                todo.getDone().add(doneVO);

            }
        });
        return todo;
    }

    @Override
    public List<TodoListVO> getList(String openId, String dateAt) {
        TodoListDOExample example = new TodoListDOExample();
        TodoListDOExample.Criteria criteria = example.createCriteria();
        criteria.andOpenIdEqualTo(openId);
        if (StringUtils.isNotEmpty(dateAt)) {
            criteria.andDateAtEqualTo(dateAt);
        }
        example.setOrderByClause(" updated_at desc");
        List<TodoListDO> list = todoListMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(list)) {
            return new ArrayList<>();
        }

        return BeanUtils.copyListProperties(list, TodoListVO.class);
    }

    @Override
    public TodoDTO done(Integer id, Integer isFinish, String openId) {
        TodoListDO todoListDO = new TodoListDO();
        todoListDO.setId(id);
        todoListDO.setIsFinish(isFinish);
        todoListMapper.updateByPrimaryKeySelective(todoListDO);
        return getTodoList(openId, null);
    }

    @Override
    public TodoDTO addTodo(TodoListDO todo) {
        log.info("新增待办事项：" + todo);
        todo.setDateAt(DateUtils.parseDate(new Date(), "yyyy-MM-dd"));
        todo.setIsFinish(StatusEnum.ZERO.getStatus());

        // 校验内容是否含有敏感信息
        if (!appletClient.contentCheck(todo.getContent())) {
            throw new BaseException("信息不合法", ResponseCode.PARAM_ERROR);
        }
        todoListMapper.insertSelective(todo);
        return getTodoList(todo.getOpenId(), null);
    }

    @Override
    public TodoDTO delTodo(Integer id, String openId) {
        log.info("用户删除待办事项：" + id);
        todoListMapper.deleteByPrimaryKey(id);
        return getTodoList(openId, null);
    }

    @Override
    public List<CalendarDTO> getCalendar(String openId, Integer year, Integer month) {
        List<CalendarDTO> calendars = new ArrayList<>();
        LocalDateTime dateTime = LocalDateTime.of(year, month, 1, 0, 0);
        Integer lastDay = dateTime.with(TemporalAdjusters.lastDayOfMonth()).getDayOfMonth();
        Integer currentWeek = dateTime.getDayOfWeek().getValue();
        DateTimeFormatter df = DateTimeFormatter.ofPattern("yyyy-MM-dd");

        for (int i = 0; i < 42; i++) {
            CalendarDTO calendar = new CalendarDTO();
            if ((currentWeek) > (i + 1)) {
                calendar.setDay("");
                calendar.setDate("");
                calendars.add(calendar);
                continue;
            }

            if ((lastDay) < (i - currentWeek + 2)) {
                calendar.setDay("");
                calendar.setDate("");
                calendars.add(calendar);
                continue;
            }

            calendar.setDay(String.valueOf(i - currentWeek + 2));
            LocalDateTime currentDate = LocalDateTime.of(year, month, Integer.valueOf(calendar.getDay()), 0, 0);
            calendar.setDate(df.format(currentDate));
            calendars.add(calendar);
        }
        List<TodoListVO> todoList = getList(openId, null);
        for (CalendarDTO temp : calendars) {
            for (TodoListVO tempTodo : todoList) {
                if (tempTodo.getDateAt().equals(temp.getDate())) {
                    temp.setHasTodo(Boolean.TRUE);
                }
            }
        }
        return calendars;
    }
}
