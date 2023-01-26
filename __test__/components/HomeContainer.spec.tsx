import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HomeContainer } from "@/components/HomeContainer";
import { mockIntersectionObserver } from "jsdom-testing-mocks";
import { readFakeData } from "../mock_data";

mockIntersectionObserver();

describe("Home Container", () => {
  it("Should initially render 10 stories", async () => {
    const { fakeStories } = await readFakeData();
    render(<HomeContainer topStories={fakeStories} />);

    const storyTiles = screen.getAllByLabelText("news-story");

    expect(storyTiles).toHaveLength(10);
  });

  it("Should Show Header Text", async () => {
    const { fakeStories } = await readFakeData();
    render(<HomeContainer topStories={fakeStories} />);

    const homeHeader = screen.getByText("Hacker News");

    expect(homeHeader).toBeInTheDocument();
  });
});
