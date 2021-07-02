import React from "react";
import {
  render,
  waitForElement,
  fireEvent,
  screen,
} from "@testing-library/react";
import App from "App";

test("renders without crashing", async () => {
  const { container } = render(<App />);
  const gifLink = await waitForElement(() =>
    container.querySelector(".rounded")
  );
  expect(gifLink).toBeVisible();
});

test.only("search from could be used", async () => {
  render(<App />);
  const input = await screen.findByRole("textbox");
  const button = await screen.findByRole("button");

  fireEvent.change(input, { target: { value: "anime" } });
  fireEvent.click(button);

  const title = await screen.findByText("anime");

  expect(title).toBeVisible();
});
