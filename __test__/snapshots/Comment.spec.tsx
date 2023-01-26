import React from "react";
import { waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Comment } from "@/components/Comment";
import { readFakeData } from "../mock_data";
import fetchMock from "jest-fetch-mock";
import renderer from "react-test-renderer";

it("Should display the number of replies", async () => {
  const { fakeComment } = await readFakeData();
  fetchMock.mockOnce(JSON.stringify(fakeComment));

  const tree = renderer.create(<Comment kid_id={fakeComment.id} />);

  await waitFor(() => {
    expect(tree.toJSON()).toMatchSnapshot();
    tree.unmount();
  });
});
