import { IStory } from "@/typings";
import * as Styles from "./styles";
import { StoryCard } from "../StoryCard";

interface Props {
  topStories: IStory[];
}

export const HomeContainer = (props: Props) => {
  return (
    <main>
      {renderTitleSection()}
      {renderStoryContainer()}
    </main>
  );

  function renderTitleSection() {
    return (
      <Styles.StyledTitleSection id="main">
        <Styles.StyledTitle>
          <Styles.StyledGradientText>Hacker News</Styles.StyledGradientText>
        </Styles.StyledTitle>
      </Styles.StyledTitleSection>
    );
  }

  function renderStoryContainer() {
    return <Styles.StyledStoryContainer>{renderStories()}</Styles.StyledStoryContainer>;
  }

  function renderStories() {
    return (
      <>
        {props.topStories.map((story: IStory) => {
          return <StoryCard story={story} key={story.id} />;
        })}
      </>
    );
  }
};
