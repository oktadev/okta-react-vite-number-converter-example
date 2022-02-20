import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@okta/okta-auth-js",
        replacement: require.resolve("@okta/okta-auth-js/dist/okta-auth-js.umd.js"),
      },
    ],
  }
})
