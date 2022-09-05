export const setTodoList = ( state, payload ) => {
    state.todoList = payload;
}

export const addTodo = ( state, payload ) => {
    state.todoList.push(payload);
}

export const setLoading = ( state, payload ) => {
    state.isLoading = payload
}

export const setActiveTab = ( state, payload ) => {
    state.activeTab = payload;
}
