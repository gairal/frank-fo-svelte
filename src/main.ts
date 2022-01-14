import App from "./App.svelte";
import "./scss/global.scss";
import { isMapReady } from "./stores/appStore";

// @ts-expect-error adding initMap onto the window
window.initMap = () => isMapReady.set(true);

export default new App({ target: document.body });
