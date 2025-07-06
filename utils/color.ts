import { ColorFormat, flavors } from '@catppuccin/palette'

const COLORS_LIST = {
  ROSEWATER: 'ROSEWATER',
  FLAMINGO: 'FLAMINGO',
  PINK: 'PINK',
  MAUVE: 'MAUVE',
  RED: 'RED',
  MAROON: 'MAROON',
  PEACH: 'PEACH',
  YELLOW: 'YELLOW',
  GREEN: 'GREEN',
  TEAL: 'TEAL',
  SKY: 'SKY',
  SAPPHIRE: 'SAPPHIRE',
  BLUE: 'BLUE',
  LAVENDER: 'LAVENDER',
} as const

const COLOR_STYLES = {
  [COLORS_LIST.ROSEWATER]: {
    text: 'text-rosewater',
    gradient: 'to-rosewater/50',
  },
  [COLORS_LIST.FLAMINGO]: {
    text: 'text-flamingo',
    gradient: 'to-flamingo/50',
  },
  [COLORS_LIST.PINK]: {
    text: 'text-pink',
    gradient: 'to-pink/50',
  },
  [COLORS_LIST.MAUVE]: {
    text: 'text-mauve',
    gradient: 'to-mauve/50',
  },
  [COLORS_LIST.RED]: {
    text: 'text-red',
    gradient: 'to-red/50',
  },
  [COLORS_LIST.MAROON]: {
    text: 'text-maroon',
    gradient: 'to-maroon/50',
  },
  [COLORS_LIST.YELLOW]: {
    text: 'text-yellow',
    gradient: 'to-yellow/50',
  },
  [COLORS_LIST.GREEN]: {
    text: 'text-green',
    gradient: 'to-green/50',
  },
  [COLORS_LIST.TEAL]: {
    text: 'text-teal',
    gradient: 'to-teal/50',
  },
  [COLORS_LIST.SKY]: {
    text: 'text-sky',
    gradient: 'to-sky/50',
  },
  [COLORS_LIST.SAPPHIRE]: {
    text: 'text-sapphire',
    gradient: 'to-sapphire/50',
  },
  [COLORS_LIST.BLUE]: {
    text: 'text-blue',
    gradient: 'to-blue/50',
  },
  [COLORS_LIST.PEACH]: {
    text: 'text-peach',
    gradient: 'to-peach/50',
  },
  [COLORS_LIST.LAVENDER]: {
    text: 'text-lavender',
    gradient: 'to-lavender/50',
  },
} as const

export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const getGradient = (index: number): string => {
  const rotations = [
    'bg-gradient-to-br',
    'bg-gradient-to-bl',
    'bg-gradient-to-tl',
    'bg-gradient-to-tr',
  ]

  const colorKeys = Object.keys(COLORS_LIST) as Array<keyof typeof COLORS_LIST>
  const colorCount = colorKeys.length

  // Use modulo to cycle through colors
  const colorIndex = index % colorCount

  const fromColor = COLOR_STYLES[colorKeys[colorIndex]]

  const toColorName = fromColor.gradient

  const rotation = rotations[getRandomNumber(0, rotations.length - 1)]

  return `from-surface0 to-100% ${rotation} ${toColorName}`
}

export const getTextColor = (index: number): string => {
  const colorKeys = Object.keys(COLORS_LIST) as Array<keyof typeof COLORS_LIST>
  const colorCount = colorKeys.length

  // Use modulo to cycle through colors
  const colorIndex = index % colorCount

  const fromColor = flavors.mocha.colors[
    colorKeys[colorIndex].toLowerCase()
  ] as ColorFormat

  const color = fromColor.hex

  return color
}
