package com.weixin.todolist.task;

import com.personalblog.dao.TodoListMapper;
import com.personalblog.dataobject.TodoListDO;
import com.personalblog.dataobject.TodoListDOExample;
import com.weixin.todolist.client.AppletClient;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;

import javax.annotation.Resource;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;

/**
 * Created by tao.mao on 2020/11/23.
 */
@Component
@Slf4j
public class SendNoticeTask {

    @Resource
    private TodoListMapper todoListMapper;
    @Resource
    private AppletClient appletClient;

    @Scheduled(cron = "0 0/2 * * * ?")
    public void execute() {
        log.info("执行推送消息任务");
        LocalDateTime dateTime = LocalDateTime.now().plusHours(1);

        TodoListDOExample example = new TodoListDOExample();
        example.createCriteria().andNoticeEnabledEqualTo("true")
                .andNoticeAtLessThanOrEqualTo(Date.from(dateTime.atZone(ZoneId.systemDefault()).toInstant()));
        List<TodoListDO> todoList = todoListMapper.selectByExample(example);
        if (CollectionUtils.isEmpty(todoList)) {
            return;
        }
        for (TodoListDO todo : todoList) {
            appletClient.sendMsg(todo);
            updateNoticeFinish(todo);
        }
    }

    private void updateNoticeFinish(TodoListDO todo) {
        TodoListDO updateTodo = new TodoListDO();
        updateTodo.setId(todo.getId());
        updateTodo.setNoticeEnabled("false");
        todoListMapper.updateByPrimaryKeySelective(updateTodo);
    }
}
