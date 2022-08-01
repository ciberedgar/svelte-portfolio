const production = !process.env.ROLLUP_WATCH;

module.exports = {
        content: [
            "./src/**/*.{svelte,html,js}",
        ],
        enabled: production,
        theme: {
            screens: {
                sm: '480px',
                md: '768px',
                lg: '976px',
                xl: '1440px',
            },
            // colors: {
            //     'blue': '#0317fc',
            //     'purple': '#8003fc',
            //     'red': '#fc0303',
            //     'orange': '#fc5203',
            //     'green': '#2bcf02',
            //     'yellow': '#e6c302',
            //     'darkgray': '#273444',
            //     'gray': '#8492a6',
            //     'lightgray': '#d3dce6',
            // },
            fontFamily: {
                sans: ['Graphik', 'sans-serif'],
                serif: ['Merriweather', 'serif'],
                italic: ['Nelphim'],
                Dalton: ['Warp'],
            },
            extend: {
                spacing: {
                    '128': '32rem',
                    '144': '36rem',
                },
                borderRadius: {
                    '4xl': '2rem',
                }
            }
        },
        variants: {},
}