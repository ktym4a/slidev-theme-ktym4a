import { flavors } from '@catppuccin/palette'
import { defineConfig } from 'unocss'

const generateThemeColors = () => {
  return flavors.mocha.colorEntries.reduce(
    (acc, [name, color]) => {
      acc[name] = `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`
      return acc
    },
    {} as Record<string, string>,
  )
}

export default defineConfig({
  theme: {
    colors: generateThemeColors(),
  },
  content: {
    filesystem: ['./constant/theme.ts'],
  },
})
