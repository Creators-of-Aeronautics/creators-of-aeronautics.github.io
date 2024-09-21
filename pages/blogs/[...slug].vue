<script setup lang="ts">
import "~/assets/scss/dark.scss";
import IconBack from "~/assets/icons/back.svg";
</script>

<template class="main">
    <div class="backgroundImages">
        <div class="spacer"></div>
        <img src="~/assets/images/full.png" />
        <div class="void"></div>
        <img src="~/assets/images/wildwest.png" class="backgroundImageBlur1" />
        <div class="void"></div>
        <img
            src="~/assets/images/underground.png"
            class="backgroundImageBlur2"
        />
        <div class="void"></div>
        <div class="void"></div>
        <img src="~/assets/images/fuckyeah2.png" class="backgroundImageBlur2" />
        <img
            src="~/assets/images/oldliftoff.png"
            class="backgroundImageBlur2"
        />
        <div class="voideternal"></div>
    </div>

    <article class="content">
        <NuxtLink href="/blogs" class="back">
            <IconBack />
            Back To Blogs
        </NuxtLink>
        <ContentDoc />
    </article>
</template>

<style lang="scss">
.spacer {
    background: #cae2e3;
}

.content {
    margin-top: 1rem;
    background-color: white;
    /* background: rgba(100%,100%,100%,80%) !important; */
    /* backdrop-filter: blur(10px); */
    font-size: 1rem;

    h2 a {
        color: inherit;
        text-decoration: none;
        font-family: "Monocraft";
    }
}

.main {
    position: relative;
    display: inline-block;
}

.void {
    background-color: #150e0b;
    width: 100%;
    height: 30em;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        left: 0px;
        top: -2em;
        bottom: -2em;
        right: 0px;
        filter: blur(10px);
        backdrop-filter: blur(10px);
    }
}

/* .sshot1 {
    width: 100%;
} */

.sshot1 {
    width: 40%;
}

.sshot2 {
    width: 70%;
}

.spacer {
    height: 50vh;
}

.backgroundImages {
    position: absolute;
    top: 0;
    z-index: 10;

    width: 100%;
    height: auto;

    image-rendering: pixelated;

    & > img {
        width: 100%;
        height: auto;
        image-rendering: pixelated;
        margin: 0px;
    }
}

.void {
    margin: 0px;
    margin-top: -1em;
}

@media screen and (max-width: 600px) {
    .sshot1 {
        width: 100%;
    }

    .sshot2 {
        width: 100%;
    }

    video,
    iframe {
        width: 100%;
    }
}
</style>
