import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import fetchMock from "jest-fetch-mock";

import App from "../App.svelte";

const subject = async () => {
  render(App);

  await screen.findByRole("heading", { name: "frank g." });
};

beforeEach(() => {
  fetchMock.mockResponse(JSON.stringify([]));
});

describe("App", () => {
  test("displays default vue", async () => {
    await subject();

    // header
    await screen.findByRole("link", { name: "Work" });
    await screen.findByRole("link", { name: "Education" });
    await screen.findByRole("link", { name: "Interests" });
    await screen.findByRole("link", { name: "Skills" });

    await screen.findAllByRole("button", { name: "more" });

    // default component loaded
    await screen.findByRole("heading", { name: "Work" });
  });

  test("routes requests", async () => {
    await subject();

    userEvent.click(await screen.findByRole("link", { name: "Education" }));
    await screen.findByRole("heading", { name: "Education" });

    userEvent.click(await screen.findByRole("link", { name: "Skills" }));
    await screen.findByRole("heading", { name: "Skills" });

    userEvent.click(await screen.findByRole("link", { name: "Interests" }));
    await screen.findByRole("heading", { name: "Interests" });
  });
});
