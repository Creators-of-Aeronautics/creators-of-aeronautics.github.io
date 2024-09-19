<script setup lang="ts">
useHead({
    title: "404 | Create: Simulated",
});
</script>

<template>
    <div>
        <NuxtLayout>
            <div class="bg" />
            <img
                class="backgroundImage bg2 li2"
                src="~/assets/images/aerrrrr.png"
            />

            <div class="infoTextBox box li2">
                <p class="infoText wsc">Why so cloud?</p>

                <p class="infoText oop">We couldn't find that page.</p>
            </div>

            <div class="buttons">
                <NuxtLink href="/" class="nav-button beltButton">
                    <p>Back To Home</p>
                </NuxtLink>
            </div>

            <a href="/plunger-blunger.gif" target="_blank">
                <img src="/plunger-blunger.gif" class="pb" />
            </a>
        </NuxtLayout>
    </div>
</template>

<style scoped lang="scss">
.bg {
    top: 0;
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 0;
    margin: 0;
    padding: 0;
    background-color: #C7E1E2;
}

.li2 {
    z-index: 4;
}

.box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.wsc {
    font-size: 24pt !important;
    margin-bottom: 0 !important;
    margin-top: 0 !important;
    font-weight: bold;
}

.oop {
    margin-top: 3rem !important;
    margin-bottom: 0 !important;
}

.nav-button p {
    font-size: 13pt !important;
    padding: 1rem !important;
}

.pb {
    top: 0;
    right: 0;
    width: 2%;
    position: absolute;
    z-index: 4;
}
</style>
