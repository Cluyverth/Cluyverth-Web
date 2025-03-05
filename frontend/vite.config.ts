import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'; // Importe vite-plugin-node-polyfills

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    nodePolyfills(), // Adicione vite-plugin-node-polyfills
  ],
  resolve: {
    alias: {
      // Remova ou comente o alias de 'crypto' que adicionamos antes
      // 'crypto': require.resolve('crypto-browserify'),
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Remova ou comente a configuração do NodeGlobalsPolyfillPlugin daqui
      // plugins: [
      //   NodeGlobalsPolyfillPlugin({
      //     process: true,
      //     buffer: true,
      //   }),
      // ],
    },
  },
})