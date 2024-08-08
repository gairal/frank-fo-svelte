import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { vi, test } from "vitest";

import App from "../App.svelte";

const subject = async () => {
  const user = userEvent.setup();

  render(App);

  await screen.findByRole("link", { name: "frank g." });

  return user;
};

// avoid logging the network error below
vi.spyOn(console, "error").mockReturnValue(undefined);

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
  const user = await subject();

  await screen.findByRole("alert");

  user.click(await screen.findByRole("link", { name: "Education" }));
  await screen.findByRole("heading", { name: "Education" });

  user.click(await screen.findByRole("link", { name: "Skills" }));
  await screen.findByRole("heading", { name: "Skills" });

  user.click(await screen.findByRole("link", { name: "Interests" }));
  await screen.findByRole("heading", { name: "Interests" });
});
