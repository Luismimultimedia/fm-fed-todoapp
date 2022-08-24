<template>
    <div class="todo__container">
        <input
            class="todo__checkbox"
            :id="todoItem.id"
            type="checkbox"
            :checked="todoItem.isDone"
             @change="todo.isDone = !todo.isDone"
        />
        <p class="todo__description">{{ todoItem.title }}</p>
    </div>
</template>

<script>
export default {
    name: "TodoItemComponent",
    props: {
        todoItem: {
            type: Object,
            default: () => ({
                id: 1,
                title: "Create a new todo",
                status: true,
                isDone: false,
            }),
        },
    },
    data() {
        return {
            todo: this.todoItem
        }
    }
};
</script>

<style lang="scss">
.todo {
    &__container {
        align-items: center;
        color: var(--color-light-primary);
        display: flex;
        height: 2.5rem;
        padding: 1rem;
        width: 100%;
        height: 52px;
        border-bottom: 2px solid var(--color-light-grayish);
    }

    &__checkbox {
        appearance: none;
        background: var(--color-light-gray);
        border-radius: 10rem;
        border: 1px solid var(--color-light-grayish);
        cursor: pointer;
        height: 20px;
        margin: 0rem;
        width: 20px;
        &:checked {
            background: linear-gradient(135deg, #57ddff 0%, #c058f3 100%);
        }
    }

    &__description {
        margin-left: 0.5rem;
        font-family: "Josefin Sans", sans-serif;
        font-size: 0.8rem;
        font-weight: 400;
    }
}
</style>