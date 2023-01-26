import path from 'path'
import { promises as fs } from "fs";
import { IComment, IStory } from '@/typings';

const JSON_FILEPATH = path.join(__dirname, "json");

export async function readFakeData() {
    const [fakeStories, fakeIds, fakeComment] = await Promise.all([
        getJSONfromFile(filenames.stories),
        getJSONfromFile(filenames.storyIds),
        getJSONfromFile(filenames.comment),
    ])

    return {
        fakeStories: fakeStories as IStory[],
        fakeIds: fakeIds as number[],
        fakeComment:fakeComment as IComment
    }
}

enum filenames {
    stories = "stories.json",
    storyIds = "storyIds.json",
    comment = "comment.json"
  }

  type JsonDataType =
  | IStory[]
  | number[]
  | IComment

    async function getJSONfromFile<ItemType extends JsonDataType>(
    filename: filenames,
  ): Promise<ItemType> {
    const filePath = path.join(JSON_FILEPATH , filename);
    const data = await fs.readFile(filePath);
    return JSON.parse(data.toString());
  }