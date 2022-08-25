<template>
    <div class="todo-footer__container">
        <p>{{ descriptionItemsLeft }}</p>
        <button class="todo-footer__btn-clear">
            <p>Clear completed</p>
        </button>
    </div>
</template>

<script>
export default {
    name: "TodoFooterComponent",
    props: {
        totalItems: {
            type: Number,
            default: 0,
        },
    },
    computed: {
        descriptionItemsLeft() {
            return `${ this.totalItems } item${ this.totalItems > 1 ? "s" : "" } left`
        }
    }
};
</script>

<style lang="scss">
.todo-footer {
    &__container {
        align-items: center;
        color: var(--color-light-secondary);
        display: flex;
        height: 52px;
        justify-content: space-between;
        padding: 1rem;
        width: 100%;
        font-family: "Josefin Sans", sans-serif;
        font-size: 0.8rem;
        font-weight: 400;
    }

    &__btn-clear {
        appearance: none;
        background-color: transparent;
        border: none;
        margin-left: auto;
        padding: 0px;
        cursor: pointer;
        padding: 4px;
        border-radius: 5px;
        color: var(--color-light-secondary);
        font-family: "Josefin Sans", sans-serif;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>