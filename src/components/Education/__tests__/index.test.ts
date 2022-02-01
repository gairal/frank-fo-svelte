import { render, screen } from "@testing-library/svelte";
import fetchMock from "jest-fetch-mock";
import userEvent from "@testing-library/user-event";

import Education from "../index.svelte";
import { educationsFixture } from "../../../../test/fixtures/education";

const fixture = educationsFixture();
const firstResult = fixture[0];
const extra = firstResult.extra as string;

const subject = () => render(Education);

test("displays education cards", async () => {
  fetchMock.once(JSON.stringify(fixture));
  subject();

  // loader is displayed until we get results
  await screen.findByRole("alert");

  await screen.findByText(
    `${firstResult.name} | ${firstResult.shortDescription}`
  );

  // loader is displayed until we get results
  expect(screen.queryByRole("alert")).toBeNull();

  // card is closed
  expect(screen.queryByText(extra)).toBeNull();

  const cards = await screen.findAllByRole("button");

  expect(cards).toHaveLength(fixture.length);
  expect(await screen.findAllByRole("img")).toHaveLength(fixture.length);

  userEvent.click(cards[0]);

  // card is opened
  await screen.findByText(extra);
});
