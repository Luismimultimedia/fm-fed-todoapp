<template>
  <form class="form__container" @submit="onsubmitNewTodo">
    <input
        class="form__input"
        v-model="newTodo"
        placeholder="Create a new todo..."
    />
  </form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: "FormComponent",
    data() {
        return {
            newTodo: ''
        }
    },
    methods: {
        ...mapActions('todo', ['createTodo']),
        onsubmitNewTodo (e) {
            e.preventDefault();
            const newTodoBody = { description: this.newTodo }
            this.createTodo(newTodoBody);
            this.newTodo = '';
        }
    }
}
</script>

<style lang="scss">
    .form {

        &__container {
            margin-top: 2rem;
        }

        &__input {
            font-size: 0.8rem;
            border-radius: 0.5rem;
            border: none;
            color: var(--color-light-primary);
            font-family: 'Josefin Sans', sans-serif;
            font-weight: 400;
            height: 2.5rem;
            padding: 0.6rem;
            width: 100%;

            &::placeholder {
                color: var(--color-light-secondary);
                font-family: 'Josefin Sans', sans-serif;
                font-size: 0.8rem;
                line-height: 14px;
            }
        }

    }
</style>