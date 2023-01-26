const fixedColors = {
    CRIMSON: "#DC143C",
    BLURPLE: "#5865F2",
    FULL_WHITE: "#FFFFFF",
    DARK_SALMON: "#E9967A",
    DANGER: "hsl(359,calc(var(--saturation-factor, 1)*66.7%),54.1%)",
    TEXT_DANGER: "#db662e",
    BLACK_LIGHT: "#2F3136"
  };


const darkTheme = {
    ...fixedColors, 
    INTERACTIVE_NORMAL: "#b9bbbe",
    INTERACTIVE_HOVER: "#dcddde",
    INTERACTIVE_ACTIVE: "#fff",
    BACKGROUND_MODIFIER_ACCENT: "rgba(79,84,92,0.48)",
    MODAL_BACKGROUND: "#36393E",
    TEXT_NORMAL: "#dcddde",
    TEXT_POSITIVE: "hsl(139,calc(var(--saturation-factor, 1)*51.6%),52.2%)",
  };

  export default darkTheme