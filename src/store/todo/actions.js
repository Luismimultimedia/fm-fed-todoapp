import {
    getTodoListService,
    addTodoService,
    updateTodoStatusService,
    deleteTodoService
} from "@/apis/todo";

export const loadTodoList = async({ commit }) => {
    commit('setLoading', true);
    try {
        const todoList = await getTodoListService();
        commit('setTodoList', todoList);
        commit('setLoading', false);
    } catch (error) {
        commit('setLoading', false);
        console.error(error);
    }
}

export const createTodo = async(context, newTodoBody) => {
    context.commit('setLoading', true);
    try {
        await addTodoService(newTodoBody);
        loadTodoList(context);
        context.commit('setLoading', false);
    } catch (error) {
        context.commit('setLoading', false);
        console.error(error);
    }
}

export const updateTodo = async(context, todo) => {
    context.commit('setLoading', true);
    try {
        await updateTodoStatusService(todo);
        loadTodoList(context);
        context.commit('setLoading', false);
    } catch (error) {
        context.commit('setLoading', false);
        console.error(error);
    }
}

export const deleteTodo = async(context, todoId) => {
    context.commit('setLoading', true);
    try {
        await deleteTodoService(todoId);
        loadTodoList(context);
        context.commit('setLoading', false);
    } catch (error) {
        context.commit('setLoading', false);
        console.error(error);
    }
}

export const deleteCompletedTodos = async(context, completedTodoId) => {
    context.commit('setLoading', true);
    try {
        completedTodoId.map(async(id) => (await deleteTodoService(id)));
        loadTodoList(context);
        context.commit('setLoading', false);
    } catch (error) {
        context.commit('setLoading', false);
        console.error(error);
    }
}

export const changeActiveTab = async({ commit }, activeTab) => {
    commit('setActiveTab', activeTab);
}