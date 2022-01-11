import App from "./App.svelte";
import "./scss/global.scss";
import { isMapReady } from "./stores";

(window as any).initMap = () => isMapReady.set(true);

export default new App({ target: document.body });
