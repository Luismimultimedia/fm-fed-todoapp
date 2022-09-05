<template>
    <div v-if="renderTodoList" class="todo-list__container">
        <todo-item-component
            v-for="todo in todoList"
            :key="todo.id"
            :todoItem="todo"
        />
        <todo-footer-component :totalItems="totalItemsLeft" />
    </div>

    <div v-else class="todo-list__container--no-todo-list">
        <p>Today you dont have todos, create one</p>
    </div>

    <div v-if="renderIsLoading" class="todo-list__container--no-todo-list">
        <p>Loading ...</p>
    </div>
</template>

<script>
import TodoItemComponent from "@/components/todo-item/TodoItemComponent.vue";
import TodoFooterComponent from "@/components/todo-footer/TodoFooterComponent.vue";
import { mapGetters } from "vuex";
export default {
    name: "TodoListComponent",
    components: {
        TodoItemComponent,
        TodoFooterComponent,
    },
    computed: {
        totalItemsLeft() {
            return this.todoList.filter((todo) => !todo.isDone).length;
        },
        ...mapGetters("todo", {
            todoList: "getTodoList",
            isLoading: "getLoading",
        }),
        renderTodoList() {
            return this.todoList && this.todoList?.length > 0;
        },
        renderIsLoading() {
            return this.isLoading;
        }
    },
};
</script>

<style lang="scss">
.todo-list {
    &__container {
        background-color: var(--color-light-gray);
        border-radius: 0.5rem;
        filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1));
        margin: -1.5rem 0rem 1rem;
        width: 100%;

        &--no-todo-list {
            margin: 1rem 0;
        }
    }
}
</style>