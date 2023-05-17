import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
})
// export default ({ mode }) => {
//     require('dotenv').config({ path: `./.env.${mode}` });

//     return defineConfig({
//         plugins: [react()],
//     })
// }