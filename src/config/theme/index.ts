import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        cyan: {
          contrast: {
            value: "orange",
          },
        },
      },
    },
  },

  globalCss: {
    html: {
      colorPalette: "cyan",
      background: "bg.muted",
    },
  },
});

export default createSystem(defaultConfig, config);
