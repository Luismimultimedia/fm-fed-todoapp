<template>
  <header class="header__container">
    <h1 class="header__title"> TODO </h1>
    <button class="header__button-container">
        <img class="header__button-icon" src="" alt="">
    </button>
  </header>
</template>

<script>
export default {
    name: "HeaderComponent"
}
</script>

<style lang="scss">
    .header {
        &__container {
            background-image: url('@/assets/images/bg-mobile-light.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            max-height: 200px;
            width: 100%;
            padding: 0rem;

            @media (min-width: 1024px) {
                background-image: url('@/assets/images/bg-desktop-light.png');
            }
        }
    }
</style>