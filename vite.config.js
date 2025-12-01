import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // The 'base' property sets the root path for GitHub Pages
  base: "/HussainReactPortfolio/",
  plugins: [react()],
})