import { getTodoList } from "@/apis/todo";

export const loadTodoList = async({ commit }) => {
    try {
        const todoList = await getTodoList();
        commit('setTodoList', todoList)
    } catch (error) {
        console.error(error);
    }
}

export const createTodo = async({ commit }) => {
    return commit;
}

export const updateTodo = async({ commit }) => {
    return commit;
}

export const deleteTodo = async({ commit }) => {
    return commit;
}