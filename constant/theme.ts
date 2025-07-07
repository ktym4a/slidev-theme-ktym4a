export const COLORS = [
  'rosewater',
  'flamingo',
  'pink',
  'mauve',
  'red',
  'maroon',
  'peach',
  'yellow',
  'green',
  'teal',
  'sky',
  'sapphire',
  'blue',
  'lavender',
] as const
type ColorTuple = typeof COLORS
export type Color = ColorTuple[number]

export const COLOR_PATTERNS = ['single', 'rotation'] as const
type PatternTuple = typeof COLOR_PATTERNS
export type Pattern = PatternTuple[number]

export type Gradient = `to-${Color}/50`

export const GRADIENT_DIRECTION = [
  'bg-gradient-to-br',
  'bg-gradient-to-bl',
  'bg-gradient-to-tl',
  'bg-gradient-to-tr',
]
type GradientDirectionTuple = typeof GRADIENT_DIRECTION
export type GradientDirection = GradientDirectionTuple[number]

export const COLOR_STYLES: {
  [key in Color]: {
    gradient: Gradient
    title: `[&_h1]:from-${Color} [&_h1]:to-${Color}`
  }
} = {
  rosewater: {
    gradient: 'to-rosewater/50',
    title: '[&_h1]:from-rosewater [&_h1]:to-pink',
  },
  flamingo: {
    gradient: 'to-flamingo/50',
    title: '[&_h1]:from-flamingo [&_h1]:to-mauve',
  },
  pink: {
    gradient: 'to-pink/50',
    title: '[&_h1]:from-pink [&_h1]:to-red',
  },
  mauve: {
    gradient: 'to-mauve/50',
    title: '[&_h1]:from-mauve [&_h1]:to-maroon',
  },
  red: {
    gradient: 'to-red/50',
    title: '[&_h1]:from-red [&_h1]:to-peach',
  },
  maroon: {
    gradient: 'to-maroon/50',
    title: '[&_h1]:from-maroon [&_h1]:to-yellow',
  },
  peach: {
    gradient: 'to-peach/50',
    title: '[&_h1]:from-peach [&_h1]:to-green',
  },
  yellow: {
    gradient: 'to-yellow/50',
    title: '[&_h1]:from-yellow [&_h1]:to-teal',
  },
  green: {
    gradient: 'to-green/50',
    title: '[&_h1]:from-green [&_h1]:to-sky',
  },
  teal: {
    gradient: 'to-teal/50',
    title: '[&_h1]:from-teal [&_h1]:to-sapphire',
  },
  sky: {
    gradient: 'to-sky/50',
    title: '[&_h1]:from-sky [&_h1]:to-blue',
  },
  sapphire: {
    gradient: 'to-sapphire/50',
    title: '[&_h1]:from-sapphire [&_h1]:to-lavender',
  },
  blue: {
    gradient: 'to-blue/50',
    title: '[&_h1]:from-blue [&_h1]:to-rosewater',
  },
  lavender: {
    gradient: 'to-lavender/50',
    title: '[&_h1]:from-lavender [&_h1]:to-flamingo',
  },
} as const
