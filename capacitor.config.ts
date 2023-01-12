import { CapacitorConfig } from '@capacitor/cli';
import os from 'os';

const isDev = true; //Change to false for production

let config: CapacitorConfig;

const baseConfig: CapacitorConfig = {
	appId: '', //Put your app_id before adding, example : com.example.myApp
	appName: '', //Put your app_name before adding, example : My App
	webDir: 'build',
	bundledWebRuntime: false
};

switch (isDev) {
	case true:
		const interfaces = os.networkInterfaces();

		let address = '10.0.0.1';

		Object.keys(interfaces).forEach((interfaceName) => {
			const addresses = interfaces[interfaceName];
			if (!addresses) return;
			addresses.forEach((addressInfo) => {
				if (addressInfo.family === 'IPv4' && !addressInfo.internal) {
					address = addressInfo.address;
				}
			});
		});

		config = {
			...baseConfig,
			server: {
				url: `http://${address}:5173/`, //Change here if needed but keep the 5173 port.
				cleartext: true
			}
		};
		break;
	default:
		config = { ...baseConfig };
		break;
}

export default config;
