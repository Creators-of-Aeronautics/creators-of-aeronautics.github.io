// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    ssr: false,

    css: ["~/assets/scss/global.scss", "~/assets/scss/blog.scss"],

    devServer: process.env.REDSTONE_IS_DUMB
        ? {
              port: 4000,
          }
        : {},

    vite: {
        server: process.env.REDSTONE_IS_DUMB
            ? {
                  strictPort: true,

                  hmr: {
                      port: 4000,
                      clientPort: 443,
                      protocol: "wss",
                  },
              }
            : {},
    },

    modules: ["@nuxt/content", "@nuxt/image", "nuxt-svgo"],

    vue: {
        compilerOptions: {
            isCustomElement: (tag) => tag == "center" || tag == "Center",
        },
    },

    content: {
        experimental: {
            clientDB: true,
        },
    },
});
