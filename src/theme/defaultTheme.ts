export type TDefault = typeof defaultTheme;

const defaultTheme = {
  colors: {
    text: '#000000',
    background: '#FFFFFF',
    main: '#FFA500',
  },

  // TODO: windowWidth and windowHeight through Dimensions API

  sizes: {
    spacing: 8,
    appPadding: 16,
    header: 24,
    getSpacing: (multiplier: number) => multiplier * defaultTheme.sizes.spacing,
  },

  font: {
    size: {
      regular: '16px',
      h1: '24px',
    },
    weight: {
      regular: 400,
      bold: 700,
    },
  },

  roundness: {
    button: 24,
  },
};

export { defaultTheme };
