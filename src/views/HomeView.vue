<template>
    <header-component />
    <section class="home-page__container-standard">
        <todo-list-component />
        <tab-bar-component />
        <p class="home-page__description">Drag and drop to reorder list</p>
    </section>
</template>

<script>
import HeaderComponent from "@/components/header/HeaderComponent";
import TodoListComponent from "@/components/todo-list/TodoListComponent";
import TabBarComponent from "@/components/tab-bar/TabBarComponent.vue";

export default {
    name: "HomeView",
    components: {
        HeaderComponent,
        TodoListComponent,
        TabBarComponent,
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

    &__description {
        font-family: "Josefin Sans";
        font-style: normal;
        font-weight: 400;
        font-size: 14.4px;
        line-height: 14px;
        color: var(--color-light-secondary);
        text-align: center;
        margin: 1.5rem 0;
    }
}
</style>
