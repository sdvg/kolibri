import react from '@vitejs/plugin-react';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		dynamicImportVarsOptions: {
			exclude: [],
		},
		target: 'esnext',
	},
	plugins: [react(), UnoCSS()],
});
