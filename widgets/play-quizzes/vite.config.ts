import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { uglify } from 'rollup-plugin-uglify';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {

    assetsInlineLimit: 8_000,
    chunkSizeWarningLimit: 5000,

    rollupOptions: {
      plugins: [uglify({ output: { beautify: false, annotations: false } })],
      output: {
        entryFileNames: 'main.js',

        format: 'iife'
      }
    }
  }
});
