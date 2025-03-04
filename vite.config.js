import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    
  ],
server:{
  allowedHosts: ['70ba-103-212-146-44.ngrok-free.app']
}
}

)


                                                                              