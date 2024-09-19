<script setup lang="ts">
import IconBack from "~/assets/icons/back.svg";

useHead({
    title: "Blogs | Create: Simulated",
});

const { data } = await useAsyncData("data", () =>
    queryContent("/blogs")
        .find()
        .then((v) =>
            v
                .map((v) => ({
                    title: v.title,
                    date: v.date,
                    desc: v.description as string,
                    url: v._path,
                }))
                .reverse(),
        ),
);
</script>

<template class="blogs-main">
    <div class="bg" />
    <img class="backgroundImage" src="~/assets/images/ground.png" />

    <article class="content">
        <NuxtLink href="/" class="back">
            <IconBack />
            Back To Home
        </NuxtLink>

        <h1>Developer Blog</h1>

        Welcome to the Create Simulated developer blog! Longer posts to update
        our community and publicize our progress will be put here.

        <article class="article" v-for="item in data">
            <h2 class="title">{{ item.title }}</h2>
            <p class="date">{{ item.date }}</p>
            <p class="blurb">{{ item.desc }}</p>
            <br />
            <NuxtLink :href="item.url" class="read-more">Read More</NuxtLink>
        </article>
    </article>
</template>

<style lang="scss" scoped>
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
</style>
