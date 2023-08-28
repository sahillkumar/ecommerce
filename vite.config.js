import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  server: {
    open: true,
    port: 3000,
  },

  plugins: [react(),eslint()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src/'),
    },

  },

});
