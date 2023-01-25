import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HomeContainer } from "../../components/HomeContainer";
import { mockIntersectionObserver } from "jsdom-testing-mocks";

mockIntersectionObserver();

describe("Home Container", () => {
  it("Should render properly", () => {
    render(<HomeContainer topStories={[]} />);

    const header = screen.getByRole("heading");
    const headerText = "Hacker News";

    expect(header).toHaveTextContent(headerText);
  });
});
