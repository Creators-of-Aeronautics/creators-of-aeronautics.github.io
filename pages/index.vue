<script setup lang="ts">
useHead({
    title: "Home | Create: Simulated",
});
</script>

<template>
    <div class="bg" />
    <img class="backgroundImage li2" src="~/assets/images/ground.png" />
    <img class="logoImage li2" src="~/assets/images/logo.png" />

    <div class="infoTextBox li2">
        <p class="infoText">
            Expanding the Minecraft Create mod with interactive physics-based
            contraptions. This is the Create: Simulated project.
        </p>
    </div>

    <div class="buttons">
        <NuxtLink id="beltButton" class="nav-button beltButton" href="/blogs">
            <p>Progress Blog</p>
            <!-- Progress Blog -->
        </NuxtLink>

        <NuxtLink
            aria-disabled="true"
            id="brassButton"
            class="disabled-nav nav-button brassButton"
        >
            <p>Team Members</p>
            <!-- Team Members -->
        </NuxtLink>

        <NuxtLink
            aria-disabled="true"
            id="blueprintButton"
            class="disabled-nav nav-button blueprintButton"
        >
            <p>Wiki</p>
            <!-- Wiki -->
        </NuxtLink>
    </div>
</template>

<style lang="scss">
.bg {
    top: 0;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 0;
    margin: 0;
    padding: 0;
    background-color: lightblue;
}

.li2 {
    z-index: 4;
}
</style>
