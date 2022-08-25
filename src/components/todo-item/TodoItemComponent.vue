<template>
    <div class="todo__container">
        <input
            class="todo__checkbox"
            :id="todoItem.id"
            type="checkbox"
            :checked="todoItem.isDone"
             @change="todo.isDone = !todo.isDone"
        />
        <p :class="`todo__description ${todoItem.isDone ? 'checked' : ''}`">{{ todoItem.title }}</p>
        <button v-if="todo.isDone" class="todo__button-container">
            <img class="todo__button-icon" src="@/assets/images/icon-close.png" alt="close icon" />
        </button>
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
        border-bottom: 2px solid var(--color-light-grayish);
        color: var(--color-light-primary);
        display: flex;
        height: 52px;
        padding: 1rem;
        width: 100%;
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

        &.checked {
            text-decoration: line-through;
            color: var(--color-light-grayish);
        }
    }

    &__button{ 
            &-container {
                appearance: none;
                background-color: transparent;
                border: none;
                height: 20px;
                margin-left: auto;
                padding: 0px;
                width: 20px;
                cursor: pointer;
                padding: 4px;
                border-radius: 5px;

                &:hover {
                    box-shadow: 0 8px 12px 0 rgba(0,0,0,0.05), 0 12px 20px 0 rgba(0,0,0,0.05);
                }
            }

            &-icon {
                width: 100%;
                height: 100%;
            }
        }
}
</style>