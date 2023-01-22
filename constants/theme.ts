const fixedColors = {
    CRIMSON: "#DC143C",
    BLURPLE: "#5865F2",
    PURPLE: "#9036AF",
    FULL_WHITE: "#FFFFFF",
    BLACK: "#202225",
    BLACK_DARK: "#2C2F33",
    BLACK_LIGHT: "#2F3136",
    BLACK_PRIMARY: "#36393f",
    DARK_SALMON: "#E9967A",
    DANGER: "hsl(359,calc(var(--saturation-factor, 1)*66.7%),54.1%)",
    LIGHTGREEN: "#90EE90",
    SEAGREEN: "#3BA55D",
    ORANGE: "#FAA81A",
    SILVER: "#B9BBBE",
    PRIMARY: "#4D4D4D",
    TEXT_DANGER: "#db662e",
  };

  const nodeColors = {
    dark: {
      NODE_COLORS: {
        TEXT: "#35D073",
        NODE_KEY: "#59b8ff",
        NODE_VALUE: "#DCE5E7",
        INTEGER: "#e8c479",
        NULL: "#939598",
        BOOL: {
          FALSE: "#F85C50",
          TRUE: "#00DC7D",
        },
        PARENT_ARR: "#FC9A40",
        PARENT_OBJ: "#59b8ff",
        CHILD_COUNT: "white",
      },
    },
  };

const darkTheme = {
    ...fixedColors,
    ...nodeColors.dark,
    BLACK_SECONDARY: "#23272A",
    SILVER_DARK: "#4D4D4D",
    NODE_KEY: "#FAA81A",
    OBJECT_KEY: "#59b8ff",
    SIDEBAR_ICONS: "#8B8E90",
  
    INTERACTIVE_NORMAL: "#b9bbbe",
    INTERACTIVE_HOVER: "#dcddde",
    INTERACTIVE_ACTIVE: "#fff",
    BACKGROUND_NODE: "#2B2C3E",
    BACKGROUND_TERTIARY: "#202225",
    BACKGROUND_SECONDARY: "#2f3136",
    BACKGROUND_PRIMARY: "#36393f",
    BACKGROUND_MODIFIER_ACCENT: "rgba(79,84,92,0.48)",
    MODAL_BACKGROUND: "#36393E",
    TEXT_NORMAL: "#dcddde",
    TEXT_POSITIVE: "hsl(139,calc(var(--saturation-factor, 1)*51.6%),52.2%)",
  };

  export default darkTheme