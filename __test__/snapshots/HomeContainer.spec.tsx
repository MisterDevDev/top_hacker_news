import renderer from "react-test-renderer";
import { HomeContainer } from "../../components/HomeContainer";
import { mockStories } from "../mock_data/stories";

it("changes the class when hovered", async () => {
  const component = renderer.create(<HomeContainer topStories={mockStories} />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree?.props?.onMouseEnter();
  });

  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  renderer.act(() => {
    tree?.props.onMouseLeave();
  });
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
