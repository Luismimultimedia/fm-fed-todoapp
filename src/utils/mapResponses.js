/**
 * @param {array} todoList - List of todos
 * return a new list with camelCase on the keys.
 */
const mapTodoListResponse = (todoList) => {
    return todoList.map(todo => {
        const { 'creation_date': creationDate, 'is_done': isDone } = todo;
        delete todo['creation_date'];
        delete todo['is_done'];
        return {
            ...todo,
            creationDate,
            isDone
        }
    });
}

module.exports = {
    mapTodoListResponse
}
