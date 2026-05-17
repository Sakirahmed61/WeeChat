// Vite config: tells Vite to use the React plugin for JSX and fast dev server.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
