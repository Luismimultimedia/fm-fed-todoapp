/**
 * @param {array} todoList - List of todos
 * return a new list with camelCase on the keys.
 */
const mapTodoListResponse = (todoList) => {
    return todoList.map(todo => {
        return {
            id: todo['id'],
            description: todo['description'],
            status: todo['status'],
            creationDate: todo['creation_date'],
            isDone: todo['is_done']
        }
    });
}

module.exports = {
    mapTodoListResponse
}
