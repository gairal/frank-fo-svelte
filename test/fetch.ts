import type { FetchMock } from "vitest-fetch-mock";

export const fetchMock = fetch as unknown as FetchMock;
