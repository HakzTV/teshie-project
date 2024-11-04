// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist'
//   },
//   base: './', // Add this line
//   define: {
//     'process.env': {}
//   }
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  base: './',
  define: {
    'process.env': {}
  },
  assetsInclude: ['**/*.woff', '**/*.woff2']
});
