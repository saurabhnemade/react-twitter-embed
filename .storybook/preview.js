import backgrounds from "./backgrounds";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds,
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
