import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/codeceptjs-test-app/',
  assetsInclude: ['**/*.png'],
  build: {
    target: 'esnext'
  },
})
