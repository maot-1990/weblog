package com.weixin.todolist.controller;

import com.personalblog.dataobject.TodoListDO;
import com.personalblog.response.BaseResult;
import com.weixin.todolist.service.AppletService;
import com.weixin.todolist.vo.CalendarDTO;
import com.weixin.todolist.vo.TodoDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

@RestController
public class AppletController {

    @Resource
    private AppletService appletService;

    @GetMapping("/todo/get-openid")
    public BaseResult<String> getOpenId(@RequestParam("code") String code) {
        return BaseResult.success(appletService.getOpenId(code));
    }

    @GetMapping("/todo/get-list")
    public BaseResult<TodoDTO> getTodoList(@RequestParam("openId") String openId,
                                           @RequestParam(value = "dateAt", required = false) String dateAt) {
        return BaseResult.success(appletService.getTodoList(openId, dateAt));
    }

    @PostMapping("/todo/done")
    public BaseResult<String> done(@RequestParam("id") Integer id,
                                   @RequestParam("isFinish") Integer isFinish,
                                   @RequestParam("openId") String openId) {
        return BaseResult.success(appletService.done(id, isFinish, openId));
    }

    @PostMapping("/todo/add")
    public BaseResult<TodoDTO> addTodo(TodoListDO todo) {
        return BaseResult.success(appletService.addTodo(todo));
    }

    @GetMapping("/todo/calendar")
    public BaseResult<List<CalendarDTO>> getCalendar(
            @RequestParam("openId") String openId,
            @RequestParam("year") Integer year,
            @RequestParam("month") Integer month) {
        return BaseResult.success(appletService.getCalendar(openId, year, month));
    }

    @PostMapping("/todo/del")
    public BaseResult<TodoDTO> delTodo(@RequestParam("id") Integer id,
                                       @RequestParam("openId") String openId) {
        return BaseResult.success(appletService.delTodo(id, openId));
    }

}
