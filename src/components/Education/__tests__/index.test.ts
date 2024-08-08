import { render, screen } from "@testing-library/svelte";
import fetchMock from "jest-fetch-mock";
import userEvent from "@testing-library/user-event";

import Education from "../index.svelte";
import { educationsFixture } from "../../../../test/fixtures/education";

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
