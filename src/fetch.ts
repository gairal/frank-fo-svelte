import type { Writable } from "svelte/store";

import { API_URL } from "./constants";

export const fetchData = async <T>(path: string, store: Writable<T[]>) => {
  const url = new URL(path, API_URL);

  try {
    const data = await fetch(url.href).then((response) => response.json());
    store.set(data);
  } catch (e) {
    // biome-ignore lint/nursery/noConsole: exception
    console.error(e);
  }
};
