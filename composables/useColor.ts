import { ColorFormat, flavors } from '@catppuccin/palette'
import { useNav, useSlideContext } from '@slidev/client'
import { computed } from 'vue'
import {
  Color,
  COLOR_STYLES,
  COLORS,
  GRADIENT_DIRECTION,
  Pattern,
} from '../constant/theme'
import { BgGradient } from './type'

const useColor = () => {
  const { currentSlideNo, currentSlideRoute } = useNav()
  const { $slidev } = useSlideContext()

  const baseColor = computed<Color>(
    () =>
      ($slidev.themeConfigs?.baseColor?.toString().toLowerCase() as Color) ||
      COLORS[0],
  )
  const colorPattern = computed<Pattern>(
    () =>
      ($slidev.themeConfigs?.colorPattern
        ?.toString()
        .toLowerCase() as Pattern) || 'rotation',
  )

  const slideBaseColor = computed(
    () =>
      (currentSlideRoute.value.meta?.slide as any)?.frontmatter?.themeConfig
        ?.baseColor,
  )

  const color = computed(() => {
    if (colorPattern.value === 'single') {
      return (
        COLORS.find((color) => color === slideBaseColor.value) ??
        COLORS.find((color) => color === baseColor.value) ??
        COLORS[0]
      )
    }

    // rotation pattern: cycle through colors based on slide number
    const startColor =
      COLORS.find((color) => color === baseColor.value) ?? COLORS[0]
    const startIndex = COLORS.findIndex((c) => c === startColor)

    // use currentSlideNo to determine color position
    const colorIndex = (startIndex + currentSlideNo.value - 1) % COLORS.length
    return COLORS[colorIndex]
  })

  const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const bgGradient = computed<BgGradient>(() => ({
    direction:
      GRADIENT_DIRECTION[getRandomNumber(0, GRADIENT_DIRECTION.length - 1)],
    position: getRandomNumber(15, 45),
    gradient: COLOR_STYLES[color.value].gradient,
  }))

  const coverTitle = computed<string>(() => COLOR_STYLES[color.value].title)

  const textColor = computed<string>(() => {
    const fromColor = flavors.mocha.colors[color.value] as ColorFormat

    return fromColor?.hex ?? flavors.mocha.colors.rosewater.hex
  })

  return {
    bgGradient,
    coverTitle,
    textColor,
  }
}

export { useColor }
