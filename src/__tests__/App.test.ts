import { render, screen } from "@testing-library/svelte";
import fetchMock from "jest-fetch-mock";

import App from "../App.svelte";

const subject = () => render(App);

beforeEach(() => {
  fetchMock.mockResponse(JSON.stringify([]));
});

describe("App", () => {
  test("routes to the right page", async () => {
    subject();

    // header
    await screen.findByText("frank g.");
    await screen.findByRole("link", { name: "Work" });
    await screen.findByRole("link", { name: "Education" });
    await screen.findByRole("link", { name: "Interests" });
    await screen.findByRole("link", { name: "Skills" });
  });
});
