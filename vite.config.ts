import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default {
  plugins: [react()],
  build: {
    assetsDir: "",
  },
  server: {
    proxy: {},
  },
  optimizeDeps: {
    include: ["react-router-dom"],
  },
  // Add the following section
  chromeExtension: {
    manifest: {
      web_accessible_resources: ["/*.js"],
    },
  },
};
