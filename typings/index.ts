interface IItem {
  by?: string;
  id: number;
  time: number;
  deleted?: boolean
  type: 'story' | 'comment' | 'job' | 'poll' | 'pollopt'
}

export interface IStory extends IItem {
  descendants: number;
  kids?: number[];
  score: number;
  text?: string;
  title: string;
  url: string;
  type: 'story'
}

export interface IComment extends IItem {
  kids?: number[];
  parent: number;
  text: string;
  type: 'comment'
}
