import React from "react";
import "@testing-library/jest-dom";
import { StoryCard } from "@/components/StoryCard";
import { readFakeData } from "../mock_data";
import renderer from "react-test-renderer";

it("Should display the number of replies", async () => {
  const { fakeStories } = await readFakeData();

  const tree = renderer.create(<StoryCard story={fakeStories[0]} />);

  expect(tree.toJSON()).toMatchSnapshot();
  tree.unmount();
});
