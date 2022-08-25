<template>
    <ul class="tab__container">
        <li :class="`tab__option ${activeTab === 'All' ? 'tab__option-active' : ''}`" @click="onSelectTab('All')">All</li>
        <li :class="`tab__option ${activeTab === 'Active' ? 'tab__option-active' : ''}`" @click="onSelectTab('Active')">Active</li>
        <li :class="`tab__option ${activeTab === 'Completed' ? 'tab__option-active' : ''}`" @click="onSelectTab('Completed')">Completed</li>
    </ul>
</template>

<script>
export default {
    name: "TabBarComponent",
    data() {
        return {
            activeTab: "All"
        }
    },
    methods: {
        onSelectTab(tabName) {
            this.activeTab = tabName;
        }
    }
}
</script>

<style lang="scss">
.tab {
    &__container {
        align-items: center;
        background-color: var(--color-light-gray);
        display: flex;
        height: 52px;
        justify-content: space-evenly;
        padding: 1rem;
        width: 100%;
        border-radius: 0.5rem;
    }

    &__option {
        list-style: none;
        color: var(--color-light-secondary);
        font-family: 'Josefin Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 14.4px;
        line-height: 14px;
        cursor: pointer;

        &-active {
            color: var(--color-light-blue)
        }
    }
}
</style>