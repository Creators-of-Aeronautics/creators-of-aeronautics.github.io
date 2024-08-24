<template>
    <div class="backgroundImages">
        <div class="spacer"></div>
        <img src="~/assets/images/full.png" />
        <div class="void"></div>
        <img src="~/assets/images/wildwest.png" class="backgroundImageBlur1" />
        <div class="void"></div>
        <img src="~/assets/images/underground.png" class="backgroundImageBlur2" />
        <div class="void"></div>
        <div class="void"></div>
        <img src="~/assets/images/fuckyeah2.png" class="backgroundImageBlur2" />
        <img src="~/assets/images/oldliftoff.png" class="backgroundImageBlur2" />
        <div class="voideternal"></div>
    </div>

    <article class="content">
        <NuxtLink href="/blogs" class="back">↑ Back To Blogs</NuxtLink>
        <ContentDoc />
    </article>
</template>

<style lang="scss">
body {
    /* background: linear-gradient(
    to bottom, 
    #cae2e3,
    #cae2e3 50vh,
    #150e0b 40vh,
    #150e0b
  ); */

    // background: #150e0b;
}

.spacer {
    background: #cae2e3;
}

.content {
    background-color: white;
    /* background: rgba(100%,100%,100%,80%) !important; */
    /* backdrop-filter: blur(10px); */
    font-size: 1rem;
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

@media screen and (max-width: 600px) {
    .sshot1 {
        width: 100%;
    }
    
    .sshot2 {
        width: 100%;
    }
}
</style>
