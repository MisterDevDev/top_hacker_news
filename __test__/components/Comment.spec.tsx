import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Comment } from "@/components/Comment";
import { readFakeData } from "../mock_data";
import fetchMock from "jest-fetch-mock";

describe("Comment Component", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("Should display the number of replies", async () => {
    const { fakeComment } = await readFakeData();
    fetchMock.mockOnce(JSON.stringify(fakeComment));

    render(<Comment kid_id={fakeComment.id} />);

    await waitFor(() => {
      expect(screen.getByText("24 Replies")).toBeInTheDocument();
    });
  });

  it("Should show close replies after opening replies", async () => {
    const { fakeComment } = await readFakeData();
    fetchMock.mockOnce(JSON.stringify(fakeComment));

    render(<Comment kid_id={fakeComment.id} />);

    await waitFor(() => {
      expect(screen.getByText("24 Replies")).toBeInTheDocument();
    });

    fireEvent(
      screen.getByText("24 Replies"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByText("Close Replies")).toBeInTheDocument();
  });

  it("Should show comment container on render", async () => {
    const { fakeComment } = await readFakeData();
    fetchMock.mockOnce(JSON.stringify(fakeComment));

    render(<Comment kid_id={fakeComment.id} />);

    await waitFor(() => {
      const commentSection = screen.getByLabelText("comment-section");
      expect(commentSection).toBeInTheDocument();
    });
  });
});
