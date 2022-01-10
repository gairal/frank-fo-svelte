import { writable } from "svelte/store";

import type { Education } from "./types";

/**
 * page title
 */
export const title = writable("");

/**
 * education service results
 */
export const education = writable<Education[]>([]);
