import { flavors } from '@catppuccin/palette'
import { defineConfig } from 'unocss'

// Pre-generate colors once at config load time
const themeColors = Object.fromEntries(
  flavors.mocha.colorEntries.map(([name, color]) => [
    name,
    `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`,
  ])
)

export default defineConfig({
  theme: {
    colors: themeColors,
  },
  content: {
    filesystem: ['./constant/theme.ts'],
  },
})
