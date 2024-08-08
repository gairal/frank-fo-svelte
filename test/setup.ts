import "@testing-library/jest-dom/vitest";

import { afterEach, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";

createFetchMock(vi).enableMocks();

afterEach(() => {
  fetchMock.mockClear();
});
