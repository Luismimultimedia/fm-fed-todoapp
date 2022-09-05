const { mapTodoListResponse } = require("@/utils/mapResponses");

// get todo list service
const getTodoListService = async () => {
    let todoList;
    const response = await fetch('http://localhost:8000/api/v1/todos/7MW8RsMqVu90K0W1rGP6');

    if(response.status === 200) {
        todoList = mapTodoListResponse(await response.json());
    } else {
        throw 'Error fetching todo list'
    }

    return todoList;
}

// add todo item service
const addTodoService = async (data) => {

    const response = await fetch('http://localhost:8000/api/v1/todos/create',
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if(response.status !== 200) {
        throw 'Something happends with the service, we could add a new todo list...'
    }
}

// update state of the todo item service
const updateTodoStatusService = async(data) => {
    const response = await fetch('http://localhost:8000/api/v1/todos/update',
    {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });

    if(response.status !== 200) {
        throw 'Something happends with the service, we couldnt update the todo item...'
    }
}

// delete todo item service
const deleteTodoService = async(todoId) => {
    const response = await fetch(`http://localhost:8000/api/v1/todos/delete/${todoId}`, { method: 'DELETE'});
    if (response.status !== 200) {
        throw 'Something happned with the service, we coundnt delete the todo item...'
    }
}

module.exports = {
    getTodoListService,
    addTodoService,
    updateTodoStatusService,
    deleteTodoService
}
