import { rest } from "msw";

export const handlers = [
  rest.get(
    "https://hacker-news.firebaseio.com/v0/item/34398396.json?print=pretty",
    (req, res, ctx) => {
      return res(
        ctx.json({
          by: "fileeditview",
          descendants: 3,
          id: 34398396,
          kids: [34402695, 34404152, 34403601],
          score: 1666,
          time: 1673858649,
          title: "A cab ride I'll never forget (1999)",
          type: "story",
          url: "https://kentnerburn.com/the-cab-ride-ill-never-forget/",
        })
      );
    }
  ),
];
