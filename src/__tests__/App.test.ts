import { render, screen } from "@testing-library/svelte";
import fetchMock from "jest-fetch-mock";

import App from "../App.svelte";

const subject = () => render(App);

beforeEach(() => {
  fetchMock.mockResponse(JSON.stringify([]));
});

describe("App", () => {
  test.skip("routes to the right page", async () => {
    subject();

    await screen.findByText("frank g.");
    await screen.findByRole("button", { name: "work" });
    await screen.findByRole("button", { name: "education" });
    await screen.findByRole("button", { name: "interests" });
    await screen.findByRole("button", { name: "skills" });
  });
});
