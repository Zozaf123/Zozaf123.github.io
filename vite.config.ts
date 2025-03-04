import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '', // Empty base to make paths relative
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
  },
});