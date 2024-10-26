import { render, screen } from "@testing-library/svelte";
import { expect, test } from "vitest";

import { fetchMock } from "../../../../test/fetch";
import { skillsFixtures } from "../../../../test/fixtures/skill";
import Skills from "../index.svelte";

const fixture = skillsFixtures();
const firstResult = fixture[0];

const subject = () => render(Skills);

test("displays skills cards", async () => {
  fetchMock.once(JSON.stringify(fixture));
  subject();

  // loader is displayed until we get results
  await screen.findByRole("alert");

  expect(await screen.findAllByRole("heading")).toHaveLength(fixture.length);
  await screen.findByText(firstResult.label);
  await screen.findByText(firstResult.skills[0].label);

  // loader is not displayed anymore after receiving result
  expect(screen.queryByRole("alert")).toBeNull();
});
