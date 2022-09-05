export const getTodoList = ( state ) => {

    let todoList = [];

    if (state.activeTab === 'All') {
        todoList = state.todoList;
    }

    if (state.activeTab === 'Active') {
        todoList = state.todoList.filter(todo => (!todo.isDone));
    }

    if (state.activeTab === 'Completed') {
        todoList = getCompletedTodos(state);
    }

    return todoList;
}

export const getCompletedTodos = (state) => {
    return state.todoList.filter(todo => (todo.isDone));
}

export const getLoading = (state) => {
    return state.isLoading;
}

export const getActiveTab = (state) => {
    return state.activeTab;
}