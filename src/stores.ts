import { writable } from "svelte/store";

import type { Education, Interest, Skill, Travel, Work } from "./types";

/**
 * page title
 */
export const title = writable("");

/**
 * service results
 */
export const educations = writable<Education[]>([]);
export const interests = writable<Interest[]>([]);
export const skills = writable<Skill[]>([]);
export const travels = writable<Travel[]>([]);
export const works = writable<Work[]>([]);
