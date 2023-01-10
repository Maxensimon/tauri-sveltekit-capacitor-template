# tauri-sveltekit-capacitor-template
This is a project template for Tauri + Sveltekit + CapacitorJS.
## Usage

To clone and run this repository you'll need Git and Node.js (which comes with npm) installed on your computer. From your command line:

```
#Clone this repository
git clone https://github.com/Maxensimon/tauri-sveltekit-capacitor-template.git
# Go into the repository
cd tauri-sveltekit-capacitor-template
# Install dependencies
npm install
```

After you've installed all dependencies, you need to modify the capacitor.config.ts file to enter your app_name and your app_id and specify an url to your computer Ipv4.

```ts
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

```

Then, you need to generate the capacitor's android folder and ios folder.

```
#Generate the capacitor's android folder
npm run init:android
#Generate the capacitor's ios folder
npm run init:ios
```

### Dev

Don't forget to put **isDev** to **true** in the capacitor.config.ts file.

```
#Web
npm run dev:web 
#PC
npm run dev:pc
#Android, you need to have an instance of a dev:web in another terminal to be connected to the Ipv4
npm run dev:android 
#IOS, you need to have an instance of a dev:web in another terminal to be connected to the Ipv4
npm run dev:ios 
```

### Build

Don't forget to put **isDev** to **false** in the capacitor.config.ts file.

```
#Web
npm run build:web
#PC
npm run build:pc
#Android
npm run build:android
#IOS
npm run build:ios
```

## Useful links
- CapacitorJS - [https://capacitorjs.com/](https://capacitorjs.com/)
- Sveltekit - [https://kit.svelte.dev/](https://kit.svelte.dev/)
- Tauri - [https://tauri.app/](https://tauri.app/)