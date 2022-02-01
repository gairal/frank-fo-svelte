import { render, screen } from "@testing-library/svelte";
import fetchMock from "jest-fetch-mock";
import userEvent from "@testing-library/user-event";

import Work from "../index.svelte";
import { worksFixture } from "../../../../test/fixtures/work";

const fixture = worksFixture();
const firstResult = fixture[0];
const achievement = firstResult.achievements[0].description;

const subject = () => render(Work);

beforeEach(() => {
  fetchMock.mockOnce(JSON.stringify(fixture));
});

test("displays work cards", async () => {
  subject();

  // loader is displayed until we get results
  await screen.findByRole("alert");

  await screen.findByText(fixture[0].title);

  // loader is not displayed anymore after receiving result
  expect(screen.queryByRole("alert")).toBeNull();

  // card is closed
  expect(screen.queryByText(achievement)).toBeNull();

  const cards = await screen.findAllByRole("button");

  expect(cards).toHaveLength(fixture.length);
  expect(await screen.findAllByRole("img")).toHaveLength(fixture.length);

  userEvent.click(cards[0]);

  // card is opened
  await screen.findByText(achievement);
});
