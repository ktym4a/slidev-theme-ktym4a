import type { ShikiSetupReturn } from '@slidev/types'
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup((): ShikiSetupReturn => {
  return {
    themes: {
      dark: 'catppuccin-mocha',
      light: 'catppuccin-mocha',
    },
  }
})
