import { defineConfig } from "astro/config"

import purgecss from "astro-purgecss"

// https://astro.build/config
export default defineConfig({
    build: {
        inlineStylesheets: "never",
    },
    integrations: [
        purgecss({
            fontFace: true,
            keyframes: true,
            variables: true,
            content: [
                process.cwd() + "/src/**/*.{astro, css}", // Watching astro
            ],
        }),
    ],
})
