import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

  import {  toast } from 'react-toastify';
  import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),toast(),tailwindcss()],
})
