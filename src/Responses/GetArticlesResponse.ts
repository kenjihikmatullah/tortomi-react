interface GetArticlesResponse extends Response {
  articles: {
    id: number;
    image?: string;
    title: string;
    views: number;
  }[];
}

export default GetArticlesResponse;