import React from "react";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { StoryCard } from "@/components/StoryCard";
import { readFakeData } from "../mock_data";
import fetchMock from "jest-fetch-mock";

describe("Home Container", () => {
  it("Should show view comments span", async () => {
    const { fakeStories } = await readFakeData();

    render(<StoryCard story={fakeStories[0]} />);

    const spanText = screen.getByText("View 3 Comments");

    expect(spanText).toBeInTheDocument();
  });

  it("Should show close comments after opening comments", async () => {
    const { fakeStories, fakeComment } = await readFakeData();

    fetchMock.mockOnce(JSON.stringify(fakeComment));

    render(<StoryCard story={fakeStories[0]} />);

    await waitFor(() => {
      expect(screen.getByText("View 3 Comments")).toBeInTheDocument();
    });

    fireEvent(
      screen.getByText("View 3 Comments"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByText("Close Comments")).toBeInTheDocument();
  });

  it("Should show more comments span", async () => {
    const { fakeStories, fakeComment } = await readFakeData();

    fetchMock.mockOnce(JSON.stringify(fakeComment));

    render(<StoryCard story={fakeStories[0]} />);

    await waitFor(() => {
      expect(screen.getByText("View 3 Comments")).toBeInTheDocument();
    });

    fireEvent(
      screen.getByText("View 3 Comments"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByText("More Comments")).toBeInTheDocument();
  });

  it("Should show time the story was posted", async () => {
    const { fakeStories, fakeComment } = await readFakeData();

    fetchMock.mockOnce(JSON.stringify(fakeComment));

    render(<StoryCard story={fakeStories[0]} />);

    await waitFor(() => {
      expect(screen.getByText("View 3 Comments")).toBeInTheDocument();
    });

    fireEvent(
      screen.getByText("View 3 Comments"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByLabelText("posted-time")).toBeInTheDocument();
  });
});
