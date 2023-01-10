import { CapacitorConfig } from '@capacitor/cli';

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
		config = {
			...baseConfig,
			server: {
				url: 'http://10.0.0.1:5173/', //Change to your Ipv4
				cleartext: true
			}
		};
		break;
	default:
		config = { ...baseConfig };
		break;
}

export default config;
