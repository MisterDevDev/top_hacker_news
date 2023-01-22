import { story } from "@/typings";
import * as Styles from "./styles";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { StoryCard } from "../StoryCard";

dayjs.extend(relativeTime);

interface Props {
  topStories: story[];
}

export const HomeContainer = (props: Props) => {
  return (
    <main style={{ textAlign: "center" }}>
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
        {props.topStories.map((story: story) => {
          return <StoryCard story={story} key={story.id} />;
        })}
      </>
    );
  }
};
