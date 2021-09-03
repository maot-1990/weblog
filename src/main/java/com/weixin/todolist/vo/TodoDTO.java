package com.weixin.todolist.vo;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by tao.mao on 2021/1/7.
 */
public class TodoDTO {

    private int todoCount;

    private int doneCount;

    private List<TodoListVO> todo = new ArrayList<>();

    private List<TodoListVO> done = new ArrayList<>();

    public int getTodoCount() {
        return todo.size();
    }

    public void setTodoCount(int todoCount) {
        this.todoCount = todoCount;
    }

    public int getDoneCount() {
        return done.size();
    }

    public void setDoneCount(int doneCount) {
        this.doneCount = doneCount;
    }

    public List<TodoListVO> getTodo() {
        return todo;
    }

    public void setTodo(List<TodoListVO> todo) {
        this.todo = todo;
    }

    public List<TodoListVO> getDone() {
        return done;
    }

    public void setDone(List<TodoListVO> done) {
        this.done = done;
    }
}
