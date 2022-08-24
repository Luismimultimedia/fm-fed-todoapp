<template>
  <header class="header__container">
    <div class="header__section">
        <h1 class="header__title"> TODO </h1>
        <button class="header__button-container">
            <img class="header__button-icon" src="@/assets/images/icon-moon.png" alt="change to dark theme">
        </button>
    </div>
    <form-component />
  </header>
</template>

<script>
import FormComponent from "@/components/form/FormComponent";
export default {
    name: "HeaderComponent",
    components: {
        FormComponent
    }
}
</script>

<style lang="scss">
    .header {
        &__container {
            background-image: url('@/assets/images/bg-mobile-light.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            height: 200px;
            padding: 2.5rem 2rem;
            width: 100%;

            @media (min-width: 1024px) {
                background-image: url('@/assets/images/bg-desktop-light.png');
            }
        }

        &__section {
            display: flex;
            justify-content: space-between;
        }

        &__title {
            color: var(--color-light-white);
            line-height: 28px;
            letter-spacing: 0.38em;
            font-size: 1.563rem;
        }

        &__button{ 
            &-container {
                appearance: none;
                border: none;
                background-color: transparent;
                height: 21px;
                width: 21px;
                padding: 0px;
            }

            &-icon {
                width: 100%;
                height: 100%;
            }
        }
    }

</style>