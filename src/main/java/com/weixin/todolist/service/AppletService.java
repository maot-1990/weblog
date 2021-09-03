package com.weixin.todolist.service;

import com.personalblog.dataobject.TodoListDO;
import com.weixin.todolist.vo.CalendarDTO;
import com.weixin.todolist.vo.TodoDTO;
import com.weixin.todolist.vo.TodoListVO;

import java.util.List;

public interface AppletService {

    String getOpenId(String code);

    TodoDTO getTodoList(String openId, String dateAt);

    List<TodoListVO> getList(String openId, String dateAt);


    TodoDTO done(Integer id, Integer isFinish, String openId);

    TodoDTO addTodo(TodoListDO todo);

    TodoDTO delTodo(Integer id, String openId);

    List<CalendarDTO> getCalendar(String openId, Integer year, Integer month);

}