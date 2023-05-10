import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: 'assets/index1.js',
        entryFileNames: 'assets/index2.js',
        assetFileNames: 'assets/index.css',
      }
    }
  }
});
