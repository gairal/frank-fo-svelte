import { render, screen, waitFor } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";

import Header from "../index.svelte";

const subject = () => render(Header);

test("can open the navigation menu", async () => {
  subject();

  userEvent.click(await screen.findByRole("button", { name: "menu" }));

  await waitFor(() =>
    expect(screen.getAllByRole("link", { name: "Work" })).toHaveLength(2)
  );

  expect(screen.getAllByRole("link", { name: "Education" })).toHaveLength(2);
  expect(screen.getAllByRole("link", { name: "Interests" })).toHaveLength(2);
  expect(screen.getAllByRole("link", { name: "Skills" })).toHaveLength(2);
});

test("can open the more menu", async () => {
  subject();

  userEvent.click(await screen.findByRole("button", { name: "more" }));

  await screen.findByRole("link", { name: "frank@gairal.com" });
  await screen.findByRole("link", { name: "LinkedIn" });
  await screen.findByRole("link", { name: "Github" });
  await screen.findByText("v5.0.0-svelte");
});
