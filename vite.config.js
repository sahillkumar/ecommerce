import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true,
    port: 3000,
  },
  base: '/',
  plugins: [react()],
});
