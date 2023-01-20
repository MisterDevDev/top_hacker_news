import { story } from "@/typings";

interface Props {
  topStories: story[];
}

export const HomeContainer = (props: Props) => {
  return (
    <main style={{ display: "flex", flexWrap: "wrap" }}>
      {props.topStories.map((story: story) => {
        return (
          <div key={story.id} style={{ margin: "1rem" }}>
            <ul style={{ overflow: "hidden" }}>
              <li>by: {story.by}</li>
              <li>{story.title}</li>
              <li>Comments: {story.descendants}</li>
              <li>Score: {story.score}</li>
              <li>{story.url}</li>
              <li>Time: {story.time}</li>
            </ul>
          </div>
        );
      })}
    </main>
  );
};
