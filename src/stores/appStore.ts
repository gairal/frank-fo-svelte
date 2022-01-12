import { writable } from "svelte/store";

/**
 * page title
 */
export const title = writable("");

/**
 * Google Maps
 */
export const isMapReady = writable(false);
