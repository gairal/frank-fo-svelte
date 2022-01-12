import { render, screen } from "@testing-library/svelte";
import fetchMock from "jest-fetch-mock";

import Education from "../index.svelte";

fetchMock.mockResponse(JSON.stringify([]));

const subject = () => render(Education);

it("it works", async () => {
  subject();

  await screen.findByText("interest");
});
