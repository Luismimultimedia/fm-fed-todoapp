<template>
    <div class="todo-list__container">
        <todo-item-component
            v-for="todo in todoList"
            :key="todo.id"
            :todoItem = todo
        />
    </div>
</template>

<script>
import TodoItemComponent from "@/components/todo-item/TodoItemComponent.vue";
export default {
    name: "TodoListComponent",
    components: {
        TodoItemComponent,
    },
    data() {
        return {
            todoList: [
                {
                    id: 1,
                    title: "Wake up",
                    status: true,
                    isDone: false,
                },
                {
                    id: 2,
                    title: "Take a shower",
                    status: true,
                    isDone: false,
                },
                {
                    id: 3,
                    title: "Eat breakfast",
                    status: true,
                    isDone: false,
                },
            ],
        };
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
    }
}
</style>