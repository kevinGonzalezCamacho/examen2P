import { defineConfig } from 'vite';
import path from 'path'; // Importa la biblioteca path aquí
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
            
            resolve:{
                alias:{
                    '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
                }
            },
        }),
    ],
});
