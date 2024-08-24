<script setup lang="ts">
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

<template>
    <img class="backgroundImage" src="~/assets/images/ground.png" />

    <article class="content">
        <NuxtLink href="/" class="back">↑ Back To Home</NuxtLink>
        <h1>Developer Blog</h1>

        Welcome to the Create Simulated developer blog! Longer posts to update
        our community and publicize our progress will be put here.

        <!-- <article class="article">
            <h2 class="title">Sound Design for the Simulated Project</h2>
            <p class="date">Posted on November 22, 2023</p>
            <p class="blurb">
                Hey all, I'm Starlotte! I've been on the Simulated team for
                around a year and a half now. If you're active in our Discord,
                you might recognize me from running our community build events,
                but my main contribution to the mod has been through sound
                design...
            </p>
            <br />
            <NuxtLink href="/blogs/2" class="read-more">Read More</NuxtLink>
        </article> -->

        <article class="article" v-for="item in data">
            <h2 class="title">{{ item.title }}</h2>
            <p class="date">Posted on {{ item.date }}</p>
            <p class="blurb">{{ item.desc }}</p>
            <br />
            <NuxtLink :href="item.url" class="read-more">Read More</NuxtLink>
        </article>
    </article>
</template>
