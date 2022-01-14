import { writable } from "svelte/store";

import type {
  Education,
  Interest,
  SkillByCategory,
  Travel,
  Work,
} from "../types";

/**
 * service results
 */
export const educations = writable<Education[]>([]);
export const interests = writable<Interest[]>([]);
export const skills = writable<SkillByCategory[]>([]);
export const travels = writable<Travel[]>([]);
export const works = writable<Work[]>([]);
