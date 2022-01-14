import { render, screen } from "@testing-library/svelte";
import fetchMock from "jest-fetch-mock";

import Work from "../index.svelte";
import { worksFixture } from "../../../../test/fixtures/work";

const fixture = worksFixture();

const subject = () => render(Work);

beforeEach(() => {
  fetchMock.mockOnce(JSON.stringify(fixture));
});

test("displays work cards", async () => {
  subject();

  await screen.findByText(fixture[0].title);

  expect(await screen.findAllByRole("img")).toHaveLength(fixture.length);
});
