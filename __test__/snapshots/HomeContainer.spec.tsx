import React from "react";
import "@testing-library/jest-dom";
import { HomeContainer } from "@/components/HomeContainer";
import { mockIntersectionObserver } from "jsdom-testing-mocks";
import { readFakeData } from "../mock_data";
import renderer from "react-test-renderer";

mockIntersectionObserver();

it("Should render correctly", async () => {
  const { fakeStories } = await readFakeData();
  const tree = renderer.create(<HomeContainer topStories={fakeStories} />);
  expect(tree.toJSON()).toMatchSnapshot();
  tree.unmount();
});
