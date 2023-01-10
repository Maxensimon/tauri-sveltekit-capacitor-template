import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { internalIpV4 } from 'internal-ip';

const host = await internalIpV4();

const config: UserConfig = {
	plugins: [sveltekit()],
	server: {
		host: '0.0.0.0', // listen on all addresses
		port: 5173,
		strictPort: true,
		hmr: {
			protocol: 'ws',
			host,
			port: 5183
		}
	}
};

export default config;
