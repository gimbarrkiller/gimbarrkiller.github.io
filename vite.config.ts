import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/название-вашего-репозитория/', // Важно: слеши с двух сторон!
})