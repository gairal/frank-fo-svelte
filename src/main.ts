// eslint-disable-next-line import/no-unresolved
import { registerSW } from "virtual:pwa-register";

import App from "./App.svelte";
import { isMapReady } from "./stores/appStore";
import "./scss/global.scss";

registerSW();

// @ts-expect-error adding initMap onto the window
window.initMap = () => isMapReady.set(true);

export default new App({ target: document.body });
