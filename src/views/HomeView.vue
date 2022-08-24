<template>
    <header-component />
    <section class="home-page__container-standard">
        <todo-list-component />
    </section>
</template>

<script>
import HeaderComponent from "@/components/header/HeaderComponent";
import TodoListComponent from "@/components/todo-list/TodoListComponent";

export default {
    name: "HomeView",
    components: {
        HeaderComponent,
        TodoListComponent,
    },
};
</script>

<style lang="scss">
  .home-page {
    &__container {
      &-standard {
        width: 100%;
        padding: 0rem 2rem;
      }
    }
  }
</style>
