import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react-swc';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const env = loadEnv('', process.cwd());

/** defines the base url for the website. this is used for react router as well as others. used as a variable to make configuration simpler */
const baseURL = '/train-map/#';

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        __VITE_BASE_URL__: JSON.stringify(baseURL),
    },
    base: baseURL,
    plugins: [react()],
});
