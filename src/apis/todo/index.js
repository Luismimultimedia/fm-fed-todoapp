const { mapTodoListResponse } = require("@/utils/mapResponses");

const getTodoList = async () => {
    let todoList;
    const response = await fetch('http://localhost:8000/api/v1/todos/7MW8RsMqVu90K0W1rGP6');

    if(response.status === 200) {
        todoList = mapTodoListResponse(await response.json());
    } else {
        throw 'Error fetching todo list'
    }

    return todoList;
}

module.exports = {
    getTodoList
}
