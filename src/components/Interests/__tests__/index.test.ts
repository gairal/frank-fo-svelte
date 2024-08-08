import { render, screen } from "@testing-library/svelte";
import fetchMock from "jest-fetch-mock";

import { interestsFixture } from "../../../../test/fixtures/interest";
import { travelsFixture } from "../../../../test/fixtures/travel";
import Interests from "../index.svelte";

const interests = interestsFixture();
const travels = travelsFixture();

const subject = () => render(Interests);

beforeEach(() => {
  fetchMock.mockOnce(JSON.stringify(interests));
  fetchMock.mockOnce(JSON.stringify(travels));
});

test("displays work cards", async () => {
  subject();

  await screen.findByText(interests[0].label);
});
