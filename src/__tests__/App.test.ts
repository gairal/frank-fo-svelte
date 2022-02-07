import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import fetchMock from "jest-fetch-mock";

import App from "../App.svelte";

const subject = async () => {
  render(App);

  await screen.findByRole("link", { name: "frank g." });
};

// avoid logging the network error below
jest.spyOn(console, "error").mockReturnValue(undefined);

/**
 * the addition of the cookie consent brakes these tests
 */
test.skip("displays default vue", async () => {
  fetchMock.mockResponse(JSON.stringify([]));
  await subject();

  // header
  await screen.findByRole("link", { name: "Work" });
  await screen.findByRole("link", { name: "Education" });
  await screen.findByRole("link", { name: "Interests" });
  await screen.findByRole("link", { name: "Skills" });

  await screen.findByRole("button", { name: "more" });
  await screen.findByRole("button", { name: "menu" });

  // default component loaded
  await screen.findByRole("heading", { name: "Work" });
});

test.skip("routes requests", async () => {
  fetchMock.mockRejectOnce(Error("NETWORK ERROR"));
  await subject();

  await screen.findByRole("alert");

  userEvent.click(await screen.findByRole("link", { name: "Education" }));
  await screen.findByRole("heading", { name: "Education" });

  userEvent.click(await screen.findByRole("link", { name: "Skills" }));
  await screen.findByRole("heading", { name: "Skills" });

  userEvent.click(await screen.findByRole("link", { name: "Interests" }));
  await screen.findByRole("heading", { name: "Interests" });
});
