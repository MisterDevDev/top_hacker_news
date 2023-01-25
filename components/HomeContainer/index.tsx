import { IStory } from "@/typings";
import * as Styles from "./styles";
import { StoryCard } from "../StoryCard";
import { HeroParticles } from "./Particles";

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
      <>
        <HeroParticles />
        <Styles.StyledHeroArea>
          <Styles.StyledTitle>Hacker News</Styles.StyledTitle>
        </Styles.StyledHeroArea>
      </>
    );
  }

  function renderStoryContainer() {
    return <Styles.StyledStoryContainer>{renderStories()}</Styles.StyledStoryContainer>;
  }

  function renderStories() {
    console.log("home containers data => ", props.topStories);
    return (
      <>
        {props.topStories.map((story: IStory) => {
          return <StoryCard story={story} key={story.id} />;
        })}
      </>
    );
  }
};
