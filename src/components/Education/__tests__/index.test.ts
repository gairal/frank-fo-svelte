import { render, screen } from "@testing-library/svelte";
import fetchMock from "jest-fetch-mock";

import Education from "../index.svelte";
import { educationsFixture } from "../../../../test/fixtures/education";

const fixture = educationsFixture();

const subject = () => render(Education);

beforeEach(() => {
  fetchMock.mockOnce(JSON.stringify(fixture));
});

test("displays education cards", async () => {
  subject();

  await screen.findByText(
    `${fixture[0].name} | ${fixture[0].shortDescription}`
  );

  expect(await screen.findAllByRole("img")).toHaveLength(3);
});
