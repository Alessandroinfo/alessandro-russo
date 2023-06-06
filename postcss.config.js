const purgecss = require('@fullhuman/postcss-purgecss');
const cssnano = require('cssnano');
const tailwindcss = require('tailwindcss');

module.exports = (ctx) => {
    return {
        plugins: [
            tailwindcss('./tailwind.config.js'),
            require('autoprefixer'),
            ...ctx.options.env === 'production' ? [
                cssnano({
                    preset: 'default',
                }),
                purgecss({
                    content: ['./**/*.html', 'src/components/quote.js'],
                    whitelistPatterns: [/^vanilla-/, /^.vanilla-/, /^#vanilla-/], // Retain all classes starting with...
                    keyframes: true,
                    // Include any special characters you're using in this regular expression
                    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
                })
            ] : []
        ]
    }
};
