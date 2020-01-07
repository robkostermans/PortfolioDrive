const baseTheme = {
  font: "Helvetica Neue, Helvetica, Roboto, sans-serif"
};

const palette = {
  c1: "12, 1, 22", // black
  c2: "255, 255, 255", /// white
  c3: "114, 108, 122", // gray
  c4: "112, 112, 112", //gray
  c5: "194, 94, 119", //red
  c6: "210, 164, 76", // yellow
  c7: "220, 230, 231", // lightgray

  c8: "76, 210, 117", // green
  c9: "132, 0, 255" // purple
};

const color = (rgb, alpha = 1) => {
  return `rgba(${rgb},${alpha})`;
};

export const Theme = {
  light: {
    ...baseTheme,

    logoForeground: color(palette.c9, 1),
    iconForeground: color(palette.c9, 1),
    iconForegroundHighLight: color(palette.c2, 1),
    canvas: color(palette.c2),
    canvas40: color(palette.c7, 0.4),
    background: color(palette.c7, 0.2),
    foreground: color(palette.c2),
    text: color(palette.c1),
    subtext: color(palette.c1, 0.4),
    accent: color(palette.c9),
    severity: {
      high: color(palette.c5),
      medium: color(palette.c6),
      low: color(palette.c8)
    }
  },

  dark: {
    ...baseTheme,
    logoForeground: color(palette.c2, 1),
    iconForeground: color(palette.c2, 1),
    iconForegroundHighLight: color(palette.c2, 1),
    canvas: color(palette.c1),
    canvas40: color(palette.c1, 0.4),
    background: color(palette.c3, 0.2),
    foreground: color(palette.c2),
    text: color(palette.c2),
    subtext: color(palette.c2, 0.4),
    accent: color(palette.c9),
    severity: {
      high: color(palette.c5),
      medium: color(palette.c6),
      low: color(palette.c8)
    }
  }
};

//   theme.palette = {
//     primary: ["#1976d2", "#2196f3", "#71bcf7", "#c2e2fb"],
//     secondary: ["#c2185b", "#e91e63", "#f06292", "#f8bbd0"],
//     danger: ["#d32f2f", "#f44336", "#f8877f", "#ffcdd2"],
//     alert: ["#ffa000", "#ffc107", "#ffd761", "#ffecb3"],
//     success: ["#388e3c", "#4caf50", "#7cc47f", "#c8e6c9"],
//     white: ["#fff", "#fff", "#eee"],
//     grayscale: [
//       "#212121",
//       "#414141",
//       "#616161",
//       "#9e9e9e",
//       "#bdbdbd",
//       "#e0e0e0",
//       "#eeeeee",
//       "#ffffff"
//     ]
//   };

//   theme.colors = {
//     appbackground: "#f8f9fa",
//     accent: "#000",
//     text: "#60606a",
//     textinverted: "#fff",
//     background: "#000"
//   };
//   theme.fonts = {
//     primary: "inherit", //Helvetica Neue, Helvetica, Roboto, sans-serif',
//     pre: "Consolas, Liberation Mono, Menlo, Courier, monospace",
//     quote: "Georgia, serif"
//   };

//   theme.sizes = {
//     maxWidth: 1140,
//     maxHeight: 860
//   };

//   theme.screens = {
//     small: `(max-width: 767px)`
//   };

//   theme.all = {
//     font: "Helvetica Neue, Helvetica, Roboto, sans-serif"
//   };

//   theme.light = {
//     ...theme.all,
//     color: "#000",
//     background: "#fff"
//   };

//   theme.dark = {
//     ...theme.all,
//     color: "#fff",
//     background: "#000"
//   };
// };
