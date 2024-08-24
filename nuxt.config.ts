// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    ssr: false,

    css: ["~/assets/scss/global.scss", "~/assets/scss/blog.scss"],

    devServer: {
        port: 4000,
    },

    vite: {
        server: {
            strictPort: true,

            hmr: {
                port: 4000,
                clientPort: 443,
                protocol: "wss",
            },
        },
    },

    modules: ["@nuxt/content", "@nuxt/image"],

    vue: {
        compilerOptions: {
            isCustomElement: (tag) => tag == "center" || tag == "Center",
        },
    },
});
