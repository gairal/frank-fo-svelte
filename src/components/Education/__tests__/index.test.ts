import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import { expect, test } from "vitest";

import { fetchMock } from "../../../../test/fetch";
import { educationsFixture } from "../../../../test/fixtures/education";
import Education from "../index.svelte";

const fixture = educationsFixture();
const firstResult = fixture[0];
const extra = firstResult.extra as string;

const subject = () => {
  const user = userEvent.setup();
  render(Education);
  return user;
};

test("displays education cards", async () => {
  fetchMock.once(JSON.stringify(fixture));
  const user = subject();

  // loader is displayed until we get results
  await screen.findByRole("alert");

  await screen.findByText(
    `${firstResult.name} | ${firstResult.shortDescription}`,
  );

  // loader is not displayed anymore after receiving result
  expect(screen.queryByRole("alert")).toBeNull();

  // card is closed
  expect(screen.queryByText(extra)).toBeNull();

  const cards = await screen.findAllByRole("button");

  expect(cards).toHaveLength(fixture.length);
  expect(await screen.findAllByRole("img")).toHaveLength(fixture.length);

  await user.click(cards[0]);

  // card is opened
  await screen.findByText(extra);
});
