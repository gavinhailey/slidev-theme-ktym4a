import { flavors } from '@catppuccin/palette'
import { defineMermaidSetup } from '@slidev/types'

const mocha = flavors.mocha.colors

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    themeVariables: {
      // Background and base colors
      darkMode: true,
      background: mocha.base.hex,
      primaryColor: mocha.surface0.hex,
      primaryTextColor: mocha.text.hex,
      primaryBorderColor: mocha.overlay2.hex,
      
      // Secondary colors
      secondaryColor: mocha.surface1.hex,
      secondaryTextColor: mocha.subtext1.hex,
      secondaryBorderColor: mocha.overlay1.hex,
      
      // Tertiary colors
      tertiaryColor: mocha.surface2.hex,
      tertiaryTextColor: mocha.subtext0.hex,
      tertiaryBorderColor: mocha.overlay0.hex,
      
      // Line and edge colors
      lineColor: mocha.overlay2.hex,
      textColor: mocha.text.hex,
      mainBkg: mocha.surface0.hex,
      
      // Node colors - use theme accent colors
      nodeBorder: mocha.blue.hex,
      clusterBkg: mocha.mantle.hex,
      clusterBorder: mocha.overlay0.hex,
      
      // Special state colors
      defaultLinkColor: mocha.sapphire.hex,
      titleColor: mocha.text.hex,
      edgeLabelBackground: mocha.surface0.hex,
      
      // Actor colors (for sequence diagrams)
      actorBorder: mocha.blue.hex,
      actorBkg: mocha.surface0.hex,
      actorTextColor: mocha.text.hex,
      actorLineColor: mocha.overlay1.hex,
      
      // Note colors
      noteBkgColor: mocha.yellow.hex + '33', // 20% opacity
      noteTextColor: mocha.text.hex,
      noteBorderColor: mocha.yellow.hex,
      
      // Class diagram colors
      classText: mocha.text.hex,
      
      // State diagram colors
      labelColor: mocha.text.hex,
      
      // Git graph colors
      git0: mocha.red.hex,
      git1: mocha.green.hex,
      git2: mocha.yellow.hex,
      git3: mocha.blue.hex,
      git4: mocha.pink.hex,
      git5: mocha.teal.hex,
      git6: mocha.lavender.hex,
      git7: mocha.mauve.hex,
      
      // Pie chart colors
      pie1: mocha.red.hex,
      pie2: mocha.green.hex,
      pie3: mocha.yellow.hex,
      pie4: mocha.blue.hex,
      pie5: mocha.pink.hex,
      pie6: mocha.teal.hex,
      pie7: mocha.lavender.hex,
      pie8: mocha.mauve.hex,
      pie9: mocha.peach.hex,
      pie10: mocha.sky.hex,
      pie11: mocha.sapphire.hex,
      pie12: mocha.maroon.hex,
      
      // Additional colors
      errorBkgColor: mocha.red.hex + '33',
      errorTextColor: mocha.red.hex,
    },
  }
})
