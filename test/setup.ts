import "@testing-library/jest-dom/vitest";

import { afterEach, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

afterEach(() => {
  fetchMocker.mockClear();
});
