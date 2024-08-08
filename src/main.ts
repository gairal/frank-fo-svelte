import { registerSW } from "virtual:pwa-register";

import App from "./App.svelte";
import { isMapReady } from "./stores/appStore";
import "./scss/global.scss";

registerSW();

// @ts-expect-error adding initMap onto the window
window.initMap = () => isMapReady.set(true);

// biome-ignore lint/style/noDefaultExport: exception
export default new App({ target: document.body });
