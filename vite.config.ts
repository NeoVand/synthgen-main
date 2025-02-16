// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// export default defineConfig({
//   base: '/',
//   plugins: [
//     react(),
//     {
//       name: 'pdf-worker-plugin',
//       configureServer(server) {
//         server.middlewares.use((req, res, next) => {
//           if (req.url?.endsWith('pdf.worker.mjs')) {
//             res.setHeader('Content-Type', 'application/javascript');
//           }
//           next();
//         });
//       },
//       buildStart: async () => {
//         const fs = await import('fs/promises');
        
//         // Ensure public directory exists
//         try {
//           await fs.access('public');
//         } catch {
//           await fs.mkdir('public');
//         }
        
//         // Copy worker file to public directory
//         const workerPath = 'node_modules/pdfjs-dist/build/pdf.worker.mjs';
//         const destPath = 'public/pdf.worker.mjs';
        
//         try {
//           await fs.copyFile(workerPath, destPath);
//           console.log('PDF worker file copied successfully');
//         } catch (error) {
//           console.error('Error copying PDF worker file:', error);
//         }
//       }
//     }
//   ],
//   optimizeDeps: {
//     include: ['pdfjs-dist']
//   },
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           pdfjs: ['pdfjs-dist']
//         }
//       }
//     }
//   },
//   worker: {
//     format: 'es'
//   },
//   server: {
//     headers: {
//       'Content-Type': 'application/javascript'
//     }
//   }
// })
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()]
});