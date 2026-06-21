/// <reference types="vitest/config" />
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: { outDir: 'dist' },
  plugins: [
    {
      name: 'remove-crossorigin',
      transformIndexHtml: {
        enforce: 'post',
        transform(html) {
          return html.replace(/\s+crossorigin(=["']?[^"'\s]+["']?)?/g, '');
        },
      },
    },
  ],
  test: { include: ['tests/**/*.test.js'] },
});
