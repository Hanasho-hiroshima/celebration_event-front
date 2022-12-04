import { ThemeProvider } from "@mui/material/styles";
import theme from "~/styles/theme"

export const decorators = [
  (Story: any) => {
    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    );
  },
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
