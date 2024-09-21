<template>
    <div class="main">
        <slot />
        <Footer />
    </div>
</template>

<style lang="scss" scoped>
.main {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding-top: 2em;
}
</style>
