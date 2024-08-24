<script setup lang="ts">
useHead({
    title: "Home | Create: Simulated",
});
</script>

<template>
    <img class="backgroundImage" src="~/assets/images/ground.png" />
    <img class="logoImage" src="~/assets/images/logo.png" />

    <div class="infoTextBox">
        <p class="infoText">
            Expanding the Minecraft Create mod with interactive physics-based
            contraptions. This is the home page of the Create Simulated project.
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
