const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind')
const { join } = require('path')
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      animation: {
        'spin-disc': 'spin 3s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
