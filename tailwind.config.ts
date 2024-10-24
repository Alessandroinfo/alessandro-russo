import plugin from 'tailwindcss/plugin';
import {Config} from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        '1/2-screen': '50vh',
        '3/4-screen': '75vh'
      },
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
        '16': '16rem'
      },
      borderRadius: {
        'md': '.25rem',
      },
      opacity: {
        '10': '.1',
        '15': '.15'
      },
      zIndex: {
        '-1': '-1'
      },
      spacing: {
        '38': '8rem',
        '42': '12rem',
        '44': '14rem',
        '72': '18rem',
        '78': '18.95rem',
        '84': '21rem',
        '96': '24rem',
        '108': '27rem',
        '120': '30rem',
        '132': '33rem',
        '144': '36rem',
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem',
        '11xl': '9rem',
        '12xl': '10rem',
        '13xl': '11rem',
        '14xl': '12rem',
        '15xl': '13rem',
        '16xl': '14rem',
        '17xl': '15rem',
        '18xl': '16rem',
        '19xl': '17rem',
        '20xl': '20rem',
      }
    }
  },
  variants: {
    // display: ['children', 'default', 'odd-children', 'even-children', 'first-child', 'last-child', 'children-hover', 'hover', 'children-focus', 'focus', 'children-focus-within', 'focus-within', 'children-active', 'active', 'children-visited', 'visited', 'children-disabled', 'disabled', 'responsive'],
    zIndex: ['children', 'default', 'responsive'],
    padding: ['children', 'default', 'responsive'],
    margin: ['children', 'default', 'responsive'],
    height: ['children', 'default', 'responsive'],
    width: ['children', 'default', 'responsive'],
    flexGrow: ['children', 'default', 'responsive'],
    lineHeight: ['children', 'default', 'responsive'],
    backgroundColor: ['children', 'default', 'children-hover', 'hover', 'focus', 'responsive'],
    display: ['children', 'default', 'responsive'],
    justifyContent: ['children', 'default', 'responsive'],
    alignItems: ['children', 'default', 'responsive'],
  },
  backgroundColors: {
    black: '#000',
    white: '#fff',
    teal: '#234e52',
  },
  borderColors: {
    black: '#000',
    white: '#fff',
    teal: '#234e52',
  },
  plugins: [
    plugin(function ({addUtilities, addComponents, e, config}) {
          const newUtilities = {
            '.rotate-0': {
              transform: 'rotate(0deg)',
            },
            '.rotate-90': {
              transform: 'rotate(90deg)',
            },
            '.-rotate-27': {
              transform: 'rotate(-27deg)',
            },
            '.rotate-180': {
              transform: 'rotate(180deg)',
            },
            '.rotate-270': {
              transform: 'rotate(270deg)',
            },
          }
          addUtilities(newUtilities)
        }
    ),
    require('@ky-is/tailwindcss-plugin-width-height')({variants: ['responsive']}),
    require('tailwindcss-alpha')({
      modules: {
        backgroundColors: true,
        borderColors: true
      },
      alpha: {
        '10': 0.1,
        '20': 0.2,
        '30': 0.3,
        '60': 0.6,
        '90': 0.9,
      }
    })
  ]
}
export default config;
