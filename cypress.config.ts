import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'fhfi3n',
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
