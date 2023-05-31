import handlebars from 'vite-plugin-handlebars';
import { defineConfig } from 'vite';
import data from './data.json';

export default defineConfig({
    base : '/Personal-Webpage/',
    build: {
        rollupOptions: {
            input : {
                main: 'index.html',
                bootstrap: 'index-bootstrap.html',
                materialize: 'materialize.html',
            }
        },
    },
    plugins: [handlebars({
      context : data
      
  })]
    
});
